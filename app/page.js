// app/page.js — Server Component
// Queries Supabase directly (no HTTP round-trip to own API routes)

import Nav            from '@/components/Nav'
import Hero           from '@/components/Hero'
import Stats          from '@/components/Stats'
import VideoChallenge from '@/components/VideoChallenge'
import Challenge22    from '@/components/Challenge22'
import QuoteBanner    from '@/components/QuoteBanner'
import FootprintQuiz  from '@/components/FootprintQuiz'
import MealBuilder    from '@/components/MealBuilder'
import StreakTracker   from '@/components/StreakTracker'
import PledgeWall     from '@/components/PledgeWall'
import DareAFriend    from '@/components/DareAFriend'
import MealPlan       from '@/components/MealPlan'
import Restaurants    from '@/components/Restaurants'
import Movies         from '@/components/Movies'
import Events         from '@/components/Events'
import Community      from '@/components/Community'
import FinalCTA       from '@/components/FinalCTA'
import Footer         from '@/components/Footer'

async function getInitialData() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return { pledges: [], events: [] }
  }
  try {
    const { getSupabaseAdmin } = await import('@/lib/supabase/server')
    const db = getSupabaseAdmin()

    const [{ data: pledges }, { data: events }] = await Promise.all([
      db.from('pledges')
        .select('id, name, reason, created_at')
        .order('created_at', { ascending: false })
        .limit(100),
      db.from('events')
        .select('*')
        .gte('event_date', new Date().toISOString().split('T')[0])
        .order('event_date', { ascending: true })
        .limit(20),
    ])

    return { pledges: pledges || [], events: events || [] }
  } catch (e) {
    console.error('getInitialData error:', e.message)
    return { pledges: [], events: [] }
  }
}

export default async function Home() {
  const { pledges, events } = await getInitialData()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <VideoChallenge />
        <Challenge22 />
        <QuoteBanner />
        <FootprintQuiz />
        <MealBuilder />
        <StreakTracker />
        <PledgeWall  initialPledges={pledges} />
        <DareAFriend />
        <MealPlan />
        <Restaurants />
        <Movies />
        <Events      initialEvents={events} />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}