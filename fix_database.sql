-- 1. 清理数据中的空格和回车符 (修复 CSV 导入可能导致的问题)
-- 这步操作会去掉所有授权码前后的空格、换行符
UPDATE "十六型人格探索" 
SET code = TRIM(BOTH FROM REGEXP_REPLACE(code, '[\r\n\t]+', '', 'g'));

-- 2. 重新定义验证函数 (增加容错处理)
CREATE OR REPLACE FUNCTION verify_and_claim_code(
  input_code text,
  input_device_id text
) 
RETURNS json 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = public
AS $$
DECLARE
  record "十六型人格探索"%ROWTYPE;
  hours_passed numeric;
  clean_input_code text;
BEGIN
  -- 预处理输入：转大写、去空格
  clean_input_code := TRIM(BOTH FROM upper(input_code));

  -- 查找授权码 (忽略大小写匹配)
  SELECT * INTO record FROM "十六型人格探索" WHERE upper(code) = clean_input_code;
  
  -- 1. 检查是否存在
  IF record.code IS NULL THEN
    RETURN json_build_object('valid', false, 'message', '授权码无效');
  END IF;
  
  -- 2. 如果已被使用
  IF record.is_used THEN
    -- 检查设备绑定
    IF record.device_id != input_device_id THEN
      RETURN json_build_object('valid', false, 'message', '该授权码已绑定其他设备');
    END IF;
    
    -- 检查过期时间 (24小时)
    SELECT EXTRACT(EPOCH FROM (now() - record.first_used_at)) / 3600 INTO hours_passed;
    
    IF hours_passed > 24 THEN
      RETURN json_build_object('valid', false, 'message', '授权码已过期（有效期24小时）');
    END IF;
    
    -- 验证通过
    RETURN json_build_object('valid', true);
    
  ELSE
    -- 3. 首次使用：进行激活绑定
    UPDATE "十六型人格探索" 
    SET 
      is_used = true,
      device_id = input_device_id,
      first_used_at = now()
    WHERE code = record.code; -- 使用查出来的原始 code
    
    RETURN json_build_object('valid', true);
  END IF;
END;
$$;

-- 3. 授予权限 (至关重要，解决 404/权限错误)
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO anon;
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO service_role;
