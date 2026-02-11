-- ⚠️ 警告：这将删除并重建表，确保表结构与 CSV 完全匹配
-- 如果你已经导入了部分数据，请谨慎执行

-- 1. 删除旧表（解决表结构不匹配问题）
DROP TABLE IF EXISTS "十六型人格探索";

-- 2. 重新创建表 (必须包含 code 列以匹配 CSV)
CREATE TABLE "十六型人格探索" (
  code text PRIMARY KEY,            -- 对应 CSV 中的 "code" 列
  is_used boolean DEFAULT false,    -- 是否已使用
  device_id text,                   -- 绑定设备ID
  first_used_at timestamptz,        -- 首次使用时间
  created_at timestamptz DEFAULT now() -- 创建时间
);

-- 3. 启用 RLS (Row Level Security) 保护数据
ALTER TABLE "十六型人格探索" ENABLE ROW LEVEL SECURITY;

-- 4. 允许匿名读取（如果需要）或通过函数访问
-- 这里我们主要依靠 RPC 函数来操作，所以只需要开启 RLS

-- 5. 重建验证函数 (确保引用正确的表名)
CREATE OR REPLACE FUNCTION verify_and_claim_code(
  input_code text,
  input_device_id text
) 
RETURNS json 
LANGUAGE plpgsql 
SECURITY DEFINER 
AS $$
DECLARE
  record "十六型人格探索"%ROWTYPE;
  hours_passed numeric;
BEGIN
  -- 查找授权码
  SELECT * INTO record FROM "十六型人格探索" WHERE code = input_code;
  
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
    WHERE code = input_code;
    
    RETURN json_build_object('valid', true);
  END IF;
END;
$$;
