/**
 * Server-only Supabase client.
 * Uses the SERVICE ROLE key — bypasses Row Level Security.
 * ⚠️  ONLY import this in /app/api/ route files.
 *     NEVER import this in components or client code.
 */
import { createClient } from '@supabase/supabase-js'

const supabaseUrl         = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRole) {
  throw new Error(
    'Missing Supabase server environment variables.\n' +
    'Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local'
  )
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRole, {
  auth: { persistSession: false },
})
