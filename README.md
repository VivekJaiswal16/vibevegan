# 🌱 VibeVegan

A Gen Z-focused vegan advocacy website built with **Next.js 14**, **Supabase**, and deployed on **Vercel**.

---

## Project Structure

```
vibevegan/
├── app/
│   ├── layout.js              # Root layout (metadata, global CSS)
│   ├── page.js                # Main page — assembles all sections
│   └── api/
│       ├── pledges/route.js   # GET + POST /api/pledges  (SERVER ONLY)
│       └── events/route.js    # GET + POST /api/events   (SERVER ONLY)
├── components/                # One file per section
│   ├── Nav.js
│   ├── Hero.js
│   ├── Stats.js
│   ├── VideoChallenge.js
│   ├── Challenge22.js
│   ├── QuoteBanner.js
│   ├── FootprintQuiz.js
│   ├── MealBuilder.js
│   ├── StreakTracker.js       # Uses localStorage — no backend needed
│   ├── PledgeWall.js          # Reads/writes Supabase via /api/pledges
│   ├── DareAFriend.js
│   ├── MealPlan.js
│   ├── Restaurants.js
│   ├── Movies.js
│   ├── Events.js              # Reads Supabase via /api/events
│   ├── Community.js
│   ├── FinalCTA.js
│   └── Footer.js
├── data/                      # Static data (meals, movies, quiz, restaurants)
│   ├── meals.js
│   ├── movies.js
│   ├── quiz.js
│   └── restaurants.js
├── lib/
│   └── supabase/
│       ├── client.js          # Browser Supabase client (anon key)
│       └── server.js          # Server Supabase client (service role key — NEVER exposed)
├── styles/
│   └── globals.css
├── .env.local                 # Your real keys — NEVER commit this
├── .env.example               # Template — safe to commit
└── .gitignore
```

---

## 1. Local Setup

```bash
# Install dependencies
npm install

# Copy env template
cp .env.example .env.local
# Then fill in your Supabase keys in .env.local

# Run dev server
npm run dev
# → http://localhost:3000
```

---

## 2. Supabase Setup

### a) Create a project
Go to [supabase.com](https://supabase.com) → New Project → choose a name and region.

### b) Get your keys
Project → Settings → API:
- `Project URL`            → `NEXT_PUBLIC_SUPABASE_URL`
- `anon public` key        → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role secret` key → `SUPABASE_SERVICE_ROLE_KEY`

### c) Create tables
Go to **SQL Editor** in your Supabase dashboard and run:

```sql
-- PLEDGES TABLE
create table pledges (
  id         bigserial primary key,
  name       text not null,
  reason     text not null,
  created_at timestamptz default now()
);
alter table pledges enable row level security;
create policy "public read" on pledges for select using (true);

-- EVENTS TABLE
create table events (
  id          bigserial primary key,
  title       text not null,
  event_date  date not null,
  time_range  text,
  location    text,
  description text,
  is_free     boolean default true,
  rsvp_count  int default 0,
  created_at  timestamptz default now()
);
alter table events enable row level security;
create policy "public read" on events for select using (true);
```

### d) Add your first events
In Supabase → Table Editor → events → Insert Row, or run:

```sql
insert into events (title, event_date, time_range, location, is_free) values
  ('Vegan Street Outreach — Sector 17', '2026-03-15', '10:00 AM – 1:00 PM', 'Sector 17 Plaza, Chandigarh', true),
  ('Community Vegan Potluck',           '2026-03-22', '12:00 PM – 4:00 PM', 'Rose Garden, Sector 16',     true),
  ('Earthlings Screening + Discussion', '2026-03-29', '6:00 PM – 9:00 PM',  'Community Hall, Sector 35',  true);
```

---

## 3. Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com):
1. Import your repo
2. Go to **Settings → Environment Variables**
3. Add all 4 variables from `.env.example` with your real values
4. Redeploy

**Important:** `SUPABASE_SERVICE_ROLE_KEY` must NOT have `NEXT_PUBLIC_` prefix.
Vercel keeps it server-side only, exactly like your local `.env.local`.

---

## 4. Adding WhatsApp Group Links

In `components/Community.js`, find the `groups` array and replace `href: '#'` with your actual WhatsApp invite links.

---

## 5. Key Architecture Points

| What | Where | Visible to client? |
|------|-------|--------------------|
| Supabase anon key | `.env.local` `NEXT_PUBLIC_*` | ✅ Yes (safe, read-only by default) |
| Supabase service role key | `.env.local` (no `NEXT_PUBLIC_`) | ❌ Never — server only |
| DB queries | `app/api/*/route.js` | ❌ Never — server only |
| Streak data | `localStorage` in browser | ✅ Per-user, browser only |
| Pledges | Supabase via `/api/pledges` | ✅ Public read |
| Events | Supabase via `/api/events` | ✅ Public read |
