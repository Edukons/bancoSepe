import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://lqkborcslpyefkdhpjvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxa2JvcmNzbHB5ZWZrZGhwanZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNTQzNTYsImV4cCI6MjAxMTkzMDM1Nn0.-MW0i7gVWMfGwLQDx4CN5gGTXQqqQ11mWQ-Fw_JaCp4')