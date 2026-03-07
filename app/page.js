// app/page.js  — Server Component (runs on server, no 'use client')
// Fetches initial events & pledges from Supabase server-side for fast first paint.

import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import Stats         from '@/components/Stats'
import VideoChallenge from '@/components/VideoChallenge'
import Challenge22   from '@/components/Challenge22'
import QuoteBanner   from '@/components/QuoteBanner'
import FootprintQuiz from '@/components/FootprintQuiz'
import MealBuilder   from '@/components/MealBuilder'
import StreakTracker  from '@/components/StreakTracker'
import PledgeWall    from '@/components/PledgeWall'
import DareAFriend   from '@/components/DareAFriend'
import MealPlan      from '@/components/MealPlan'
import Restaurants   from '@/components/Restaurants'
import Movies        from '@/components/Movies'
import Events        from '@/components/Events'
import Community     from '@/components/Community'
import FinalCTA      from '@/components/FinalCTA'
import Footer        from '@/components/Footer'

// Server-side fetch — credentials never exposed to browser
async function getInitialData() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const [pledgesRes, eventsRes] = await Promise.all([
      fetch(`${baseUrl}/api/pledges`, { cache: 'no-store' }),
      fetch(`${baseUrl}/api/events`,  { cache: 'no-store' }),
    ])
    const pledges = pledgesRes.ok ? await pledgesRes.json() : []
    const events  = eventsRes.ok  ? await eventsRes.json()  : []
    return { pledges, events }
  } catch {
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
        <PledgeWall   initialPledges={pledges} />
        <DareAFriend />
        <MealPlan />
        <Restaurants />
        <Movies />
        <Events       initialEvents={events} />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
