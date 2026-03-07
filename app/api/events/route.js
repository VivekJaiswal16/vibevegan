/**
 * /api/events
 *
 * GET  — return upcoming events ordered by date
 * POST — insert a new event (you can call this from an admin script or Supabase dashboard)
 *
 * Uses supabaseAdmin (service role key) — runs SERVER-SIDE ONLY.
 *
 * Supabase table schema (run in your Supabase SQL editor):
 * ─────────────────────────────────────────────────────────
 * create table events (
 *   id          bigserial primary key,
 *   title       text not null,
 *   event_date  date not null,
 *   time_range  text,          -- e.g. "10:00 AM – 1:00 PM"
 *   location    text,
 *   description text,
 *   is_free     boolean default true,
 *   rsvp_count  int     default 0,
 *   created_at  timestamptz default now()
 * );
 * alter table events enable row level security;
 * create policy "public read" on events for select using (true);
 * ─────────────────────────────────────────────────────────
 */

import { NextResponse }  from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/server'

// ── GET /api/events ───────────────────────────────────────
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('events')
    .select('*')
    .gte('event_date', new Date().toISOString().split('T')[0]) // only upcoming
    .order('event_date', { ascending: true })
    .limit(20)

  if (error) {
    console.error('[GET /api/events]', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// ── POST /api/events ──────────────────────────────────────
// Intended for admin use (e.g. a simple admin script or Supabase dashboard)
export async function POST(request) {
  const body = await request.json().catch(() => null)

  if (!body?.title || !body?.event_date) {
    return NextResponse.json(
      { error: 'title and event_date are required' },
      { status: 400 }
    )
  }

  const { data, error } = await supabaseAdmin
    .from('events')
    .insert({
      title:      body.title.trim(),
      event_date: body.event_date,
      time_range: body.time_range  || null,
      location:   body.location    || null,
      description: body.description || null,
      is_free:    body.is_free !== undefined ? body.is_free : true,
    })
    .select()
    .single()

  if (error) {
    console.error('[POST /api/events]', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
