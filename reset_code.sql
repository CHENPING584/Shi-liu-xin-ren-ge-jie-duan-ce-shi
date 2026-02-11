-- 重置被测试脚本使用的授权码
UPDATE "十六型人格探索"
SET 
  is_used = false,
  device_id = NULL,
  first_used_at = NULL
WHERE code = '23FG54CD';
