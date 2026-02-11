-- ==========================================
-- 最终修复脚本 (Final Fix Script)
-- 请在 Supabase 的 SQL Editor 中一次性运行所有代码
-- ==========================================

-- 1. 强力清洗数据 (修复“看不见的空格”问题)
UPDATE "十六型人格探索" 
SET code = TRIM(BOTH FROM REGEXP_REPLACE(code, '[\r\n\t]+', '', 'g'));

-- 2. 插入一个通用的测试码 (VIP888) 方便你立刻测试
INSERT INTO "十六型人格探索" (code, is_used, created_at)
VALUES ('VIP888', false, now())
ON CONFLICT (code) DO UPDATE 
SET is_used = false, device_id = NULL; -- 如果已存在，重置它

-- 3. 重新定义核心验证逻辑 (确保容错性)
CREATE OR REPLACE FUNCTION verify_and_claim_code(
  input_code text,
  input_device_id text
) 
RETURNS json 
LANGUAGE plpgsql 
SECURITY DEFINER -- 使用系统权限运行，绕过 RLS 限制
SET search_path = public
AS $$
DECLARE
  record "十六型人格探索"%ROWTYPE;
  hours_passed numeric;
  clean_input_code text;
BEGIN
  -- 预处理：转大写、去空格
  clean_input_code := TRIM(BOTH FROM upper(input_code));

  -- 查找记录 (忽略大小写)
  SELECT * INTO record FROM "十六型人格探索" WHERE upper(code) = clean_input_code;

  -- A. 没找到码
  IF record.code IS NULL THEN
    RETURN json_build_object('valid', false, 'message', '授权码无效');
  END IF;

  -- B. 码已被使用
  IF record.is_used THEN
    -- B1. 检查是否是同一台设备
    IF record.device_id != input_device_id THEN
      RETURN json_build_object('valid', false, 'message', '该授权码已绑定其他设备');
    END IF;

    -- B2. 检查是否过期 (24小时)
    SELECT EXTRACT(EPOCH FROM (now() - record.first_used_at)) / 3600 INTO hours_passed;
    IF hours_passed > 24 THEN
      RETURN json_build_object('valid', false, 'message', '授权码已过期（有效期24小时）');
    END IF;

    -- B3. 验证通过 (老用户归来)
    RETURN json_build_object('valid', true);
  
  -- C. 首次激活
  ELSE
    UPDATE "十六型人格探索" 
    SET 
      is_used = true,
      device_id = input_device_id,
      first_used_at = now()
    WHERE code = record.code;

    RETURN json_build_object('valid', true);
  END IF;
END;
$$;

-- 4. 授予必要的执行权限 (解决 "404 Not Found" 或 权限报错)
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO anon;
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO authenticated;
GRANT EXECUTE ON FUNCTION verify_and_claim_code(text, text) TO service_role;

-- 5. 确保表可以被访问 (RLS 策略)
ALTER TABLE "十六型人格探索" ENABLE ROW LEVEL SECURITY;
-- 允许所有角色读取 code 列 (用于调试，虽然后端验证不需要)
CREATE POLICY "Enable read access for all users" ON "十六型人格探索" FOR SELECT USING (true);
