// lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

// Supabase の URL と anon key を入力
const supabaseUrl = 'https://pzrdpwkoewnlwzgzpglv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cmRwd2tvZXdubHd6Z3pwZ2x2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0NDg1NDAsImV4cCI6MjA5MjAyNDU0MH0.GbbQDnAWk-wROwJPhbl2DM-IDS-KEiEFqpuPX0MLA_8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

