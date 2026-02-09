export async function verifyAuthCode(inputCode: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const data = encoder.encode(inputCode);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  const targetHash = import.meta.env.VITE_AUTH_CODE_HASH;
  
  if (!targetHash) {
    console.error('Auth code hash not configured in environment variables');
    return false;
  }
  
  return hashHex === targetHash;
}
