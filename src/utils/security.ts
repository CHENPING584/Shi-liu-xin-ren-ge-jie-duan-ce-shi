import { supabase } from './supabase';

export interface VerificationResult {
  valid: boolean;
  message?: string;
}

// Generate a random device ID if not exists
function getDeviceId(): string {
  const STORAGE_KEY = 'device_id';
  let deviceId = localStorage.getItem(STORAGE_KEY);
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem(STORAGE_KEY, deviceId);
  }
  return deviceId;
}

export async function verifyAuthCode(inputCode: string): Promise<VerificationResult> {
  // Remove all whitespace from input to be forgiving
  const cleanCode = inputCode.replace(/\s+/g, '').toUpperCase();
  const currentDeviceId = getDeviceId();

  try {
    // Call Supabase RPC function to verify and claim the code
    const { data, error } = await supabase.rpc('verify_and_claim_code', {
      input_code: cleanCode,
      input_device_id: currentDeviceId
    });

    if (error) {
      console.error('Supabase RPC error:', error);
      // Fallback or specific error handling
      if (error.code === 'PGRST202' || error.message?.includes('not found')) {
         return { valid: false, message: 'RPC函数未找到，请检查数据库设置' };
      }
      return { valid: false, message: '验证服务连接失败，请检查网络' };
    }

    // data structure returned from RPC: { valid: boolean, message?: string }
    return data as VerificationResult;

  } catch (error) {
    console.error('Auth verification unexpected error:', error);
    return { valid: false, message: '验证系统错误，请刷新重试' };
  }
}
