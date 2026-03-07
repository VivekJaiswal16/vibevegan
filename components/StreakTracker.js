'use client'
import { useState, useEffect } from 'react'

const STORAGE_KEY  = 'vibevegan_streak'
const BEST_KEY     = 'vibevegan_best_streak'

const badges = [
  { emoji: '🌱', name: 'First Step',    req: 'Complete Day 1',      days: 1  },
  { emoji: '🔥', name: 'On Fire',       req: '7-day streak',        days: 7  },
  { emoji: '💪', name: 'Halfway There', req: '11-day streak',       days: 11 },
  { emoji: '🏆', name: 'Champion',      req: 'Complete all 22 days', days: 22 },
]

export default function StreakTracker() {
  const [doneDays, setDoneDays] = useState([])  // array of day numbers (1-22)
  const [best,     setBest]     = useState(0)
  const [mounted,  setMounted]  = useState(false)

  // Load from localStorage after mount (SSR-safe)
  useEffect(() => {
    setMounted(true)
    try {
      const saved     = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      const savedBest = parseInt(localStorage.getItem(BEST_KEY) || '0')
      setDoneDays(saved)
      setBest(savedBest)
    } catch { /* first visit */ }
  }, [])

  // Persist whenever doneDays changes
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(doneDays))
    const streak = doneDays.length
    if (streak > best) {
      setBest(streak)
      localStorage.setItem(BEST_KEY, String(streak))
    }
  }, [doneDays, mounted])

  function toggleDay(day) {
    setDoneDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day].sort((a, b) => a - b)
    )
  }

  function markToday() {
    const next = doneDays.length + 1
    if (next <= 22 && !doneDays.includes(next)) {
      setDoneDays(prev => [...prev, next])
    }
  }

  function resetStreak() {
    if (window.confirm('Reset your streak? This cannot be undone.')) {
      setDoneDays([])
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  function shareStreak() {
    const msg = `I'm on day ${doneDays.length} of the 22-Day Vegan Challenge! 🌱🔥 Join me at challenge22.com`
    window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank')
  }

  const streak = doneDays.length

  return (
    <section id="streak" style={{ padding: '100px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">🔥 Track Your Journey</div>
        <h2 className="section-title">Your 22-Day<br />Streak Tracker</h2>
        <p className="section-sub">Tap each day as you complete it. Earn badges. Share your progress. Keep going.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Left — tracker grid */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 44 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
            <div>
              <div style={{ color: 'var(--sub)', fontSize: '.9rem', marginBottom: 8 }}>Current Streak</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '4.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }} suppressHydrationWarning>{streak}</div>
              <div style={{ color: 'var(--sub)', fontSize: '.85rem' }}>days vegan 🌱</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: 'var(--sub)', fontSize: '.9rem', marginBottom: 8 }}>Best Streak</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--lime)' }} suppressHydrationWarning>{best}</div>
            </div>
          </div>

          {/* 22-day grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(11,1fr)', gap: 6, margin: '28px 0' }}>
            {Array.from({ length: 22 }, (_, i) => i + 1).map(day => {
              const done    = doneDays.includes(day)
              const isNext  = day === streak + 1 && !done
              return (
                <div key={day} onClick={() => toggleDay(day)} style={{
                  aspectRatio: 1, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.65rem', fontWeight: 600, cursor: 'pointer', transition: 'all .2s',
                  background: done ? 'rgba(61,219,110,.2)' : isNext ? 'rgba(198,241,53,.1)' : 'var(--muted)',
                  border: `1px solid ${done ? 'var(--green)' : isNext ? 'var(--lime)' : 'rgba(255,255,255,.05)'}`,
                  color: done ? 'var(--green)' : isNext ? 'var(--lime)' : 'var(--sub)',
                }}>{day}</div>
              )
            })}
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={markToday} className="btn-sm btn-sm-green">✓ Mark Today Done</button>
            <button onClick={resetStreak} className="btn-sm btn-sm-ghost">Reset</button>
          </div>
        </div>

        {/* Right — badges + share */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 44 }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>🏅 Your Badges</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {badges.map(b => {
              const earned = streak >= b.days
              return (
                <div key={b.name} style={{ background: 'var(--muted)', borderRadius: 16, padding: 20, textAlign: 'center', border: `1px solid ${earned ? 'rgba(198,241,53,.4)' : 'rgba(255,255,255,.05)'}`, background: earned ? 'rgba(198,241,53,.05)' : 'var(--muted)', transition: 'all .3s' }}>
                  <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{earned ? b.emoji : '🔒'}</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '.9rem', fontWeight: 700, marginBottom: 4 }}>{b.name}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--sub)' }}>{b.req}</div>
                </div>
              )
            })}
          </div>

          <button onClick={shareStreak} style={{ background: 'var(--green)', color: 'var(--dark)', border: 'none', borderRadius: 100, padding: '12px 24px', fontWeight: 700, fontSize: '.9rem', cursor: 'pointer', width: '100%', transition: 'transform .2s', fontFamily: "'DM Sans',sans-serif" }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >📲 Share My Progress on WhatsApp</button>

          <p style={{ fontSize: '.78rem', color: 'var(--sub)', marginTop: 12, textAlign: 'center' }}>
            💾 Your streak is saved in this browser automatically.
          </p>
        </div>
      </div>
    </section>
  )
}