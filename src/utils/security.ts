export async function verifyAuthCode(inputCode: string): Promise<boolean> {
  // Remove all whitespace from input to be forgiving
  const cleanCode = inputCode.replace(/\s+/g, '');
  
  const encoder = new TextEncoder();
  const data = encoder.encode(cleanCode);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  // Try to get hash from env, fallback to default hash for "520" if env not loaded
  const targetHash = import.meta.env.VITE_AUTH_CODE_HASH || '0b35b06a22779418f775a804f36485f7bc978071d1709ad263a68f4f18117b11';
  
  if (!targetHash) {
    console.error('Auth code hash not configured in environment variables');
    return false;
  }
  
  return hashHex === targetHash;
}
