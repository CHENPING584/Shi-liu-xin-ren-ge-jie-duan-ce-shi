
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byprowfxzrdeoolixxlg.supabase.co';
const supabaseKey = 'sb_publishable_1-ijUdu5iDmorkGbimqNrg_pIjvvYpI';

export const supabase = createClient(supabaseUrl, supabaseKey);
