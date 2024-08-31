import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://dhveyhtrnhnwedbtsknt.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodmV5aHRybmhud2VkYnRza250Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NzAwMTEsImV4cCI6MjAzOTU0NjAxMX0.lNOR_6KBzljrGtlOENlbMdvRBGF1XgO0NSqlwNv774k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
