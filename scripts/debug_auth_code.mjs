
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byprowfxzrdeoolixxlg.supabase.co';
const supabaseKey = 'sb_publishable_1-ijUdu5iDmorkGbimqNrg_pIjvvYpI';
const supabase = createClient(supabaseUrl, supabaseKey);

async function debugAuth() {
  const codeToTest = 'ZSX865E4'; // Testing the second code
  console.log(`Testing code: "${codeToTest}"`);

  // 1. Try to find the code directly (might fail if RLS is on and no policy allows read)
  console.log('--- Attempting direct SELECT ---');
  const { data: rows, error: selectError } = await supabase
    .from('十六型人格探索')
    .select('*')
    .eq('code', codeToTest); // Try exact match first

  if (selectError) {
    console.error('Direct SELECT error:', selectError);
  } else {
    console.log(`Found ${rows.length} rows matching "${codeToTest}" exactly.`);
    
    // Try to find what IS in the database that looks like this code
    const { data: likeRows, error: likeError } = await supabase
        .from('十六型人格探索')
        .select('code')
        .ilike('code', `${codeToTest}%`); // Starts with code
    
    if (likeError) {
        console.error('Like search error:', likeError);
    } else if (likeRows && likeRows.length > 0) {
        console.log(`Found similar rows: ${likeRows.length}`);
        likeRows.forEach(row => {
            console.log(`DB Value: "${row.code}"`);
            console.log(`Length: ${row.code.length}`);
            console.log(`Char codes: ${row.code.split('').map(c => c.charCodeAt(0)).join(',')}`);
        });
    } else {
        console.log('No similar rows found.');
    }
  }

  // 2. Try calling the RPC function
  console.log('\n--- Attempting RPC call ---');
  const deviceId = 'debug-script-' + Date.now();
  const { data: rpcData, error: rpcError } = await supabase
    .rpc('verify_and_claim_code', {
      input_code: codeToTest,
      input_device_id: deviceId
    });

  if (rpcError) {
    console.error('RPC Error:', rpcError);
  } else {
    console.log('RPC Result:', rpcData);
  }
}

debugAuth();
