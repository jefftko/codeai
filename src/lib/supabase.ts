import { createClient } from '@supabase/supabase-js';

export function supabase(url,key) {
    return createClient(url,key)
}



