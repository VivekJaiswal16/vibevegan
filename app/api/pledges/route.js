/**
 * /api/pledges
 *
 * GET  — return all pledges ordered by newest first
 * POST — insert a new pledge
 *
 * Uses supabaseAdmin (service role key) — runs SERVER-SIDE ONLY.
 * The browser never sees this file or the service role key.
 *
 * Supabase table schema (run in your Supabase SQL editor):
 * ─────────────────────────────────────────────────────────
 * create table pledges (
 *   id         bigserial primary key,
 *   name       text not null,
 *   reason     text not null,
 *   created_at timestamptz default now()
 * );
 * -- Allow public read, restrict writes to service role
 * alter table pledges enable row level security;
 * create policy "public read" on pledges for select using (true);
 * ─────────────────────────────────────────────────────────
 */

import { NextResponse }  from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

// ── GET /api/pledges ──────────────────────────────────────
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('pledges')
    .select('id, name, reason, created_at')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) {
    console.error('[GET /api/pledges]', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// ── POST /api/pledges ─────────────────────────────────────
export async function POST(request) {
  const body = await request.json().catch(() => null)

  if (!body?.name?.trim() || !body?.reason?.trim()) {
    return NextResponse.json(
      { error: 'name and reason are required' },
      { status: 400 }
    )
  }

  // Basic sanitisation — strip HTML tags
  const name   = body.name.trim().replace(/<[^>]*>/g, '').slice(0, 60)
  const reason = body.reason.trim().replace(/<[^>]*>/g, '').slice(0, 200)

  const { data, error } = await supabaseAdmin
    .from('pledges')
    .insert({ name, reason })
    .select()
    .single()

  if (error) {
    console.error('[POST /api/pledges]', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
