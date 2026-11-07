import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ltgvibbojsndjbqldoit.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_RBl9GfCc8ZvwLV8hlXN4KQ_kFINKJAs';

export const supabase = createClient(supabaseUrl, supabaseKey);
