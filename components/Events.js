'use client'
import { useState } from 'react'

// Fallback static events shown when DB is empty or not yet configured
const FALLBACK_EVENTS = [
  { id: 'f1', title: 'Vegan Street Outreach — Sector 17', event_date: '2026-03-15', time_range: '10:00 AM – 1:00 PM', location: 'Sector 17 Plaza, Chandigarh', is_free: true },
  { id: 'f2', title: 'Community Vegan Potluck 🥘',         event_date: '2026-03-22', time_range: '12:00 PM – 4:00 PM', location: 'Rose Garden, Sector 16',      is_free: true },
  { id: 'f3', title: 'Earthlings Screening + Discussion',  event_date: '2026-03-29', time_range: '6:00 PM – 9:00 PM',  location: 'Community Hall, Sector 35',   is_free: true },
  { id: 'f4', title: 'Plant-Based Cooking Workshop',       event_date: '2026-04-05', time_range: '11:00 AM – 2:00 PM', location: 'CAF Chandigarh',              is_free: false },
  { id: 'f5', title: 'Monthly Vegan Meetup & Walk',        event_date: '2026-04-12', time_range: '7:00 AM – 9:00 AM',  location: 'Sukhna Lake, Chandigarh',     is_free: true },
]

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return {
    day: String(d.getDate()).padStart(2, '0'),
    mon: d.toLocaleString('en', { month: 'short' }).toUpperCase(),
  }
}

export default function Events({ initialEvents = [] }) {
  const events = initialEvents.length > 0 ? initialEvents : FALLBACK_EVENTS
  const [rsvp, setRsvp] = useState(new Set())

  function toggleRSVP(id) {
    setRsvp(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })
  }

  return (
    <section id="events" style={{ padding: '100px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">📅 Show Up</div>
        <h2 className="section-title">Upcoming<br />Events</h2>
        <p className="section-sub">Street outreach, community kitchens, movie screenings and potlucks in Chandigarh.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {events.map(e => {
          const { day, mon } = formatDate(e.event_date)
          const done = rsvp.has(e.id)
          return (
            <div key={e.id} style={{ background: 'var(--card)', borderRadius: 18, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 32, border: '1px solid rgba(255,255,255,.04)', transition: 'border-color .3s, transform .3s', flexWrap: 'wrap', cursor: 'default' }}
              onMouseEnter={ev => { ev.currentTarget.style.borderColor = 'rgba(61,219,110,.2)'; ev.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseLeave={ev => { ev.currentTarget.style.borderColor = 'rgba(255,255,255,.04)'; ev.currentTarget.style.transform = 'translateX(0)' }}
            >
              <div style={{ background: 'rgba(61,219,110,.1)', border: '1px solid rgba(61,219,110,.2)', borderRadius: 14, padding: '12px 18px', textAlign: 'center', minWidth: 72 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.8rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>{day}</div>
                <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--sub)' }}>{mon}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>{e.title}</div>
                <div style={{ color: 'var(--sub)', fontSize: '.85rem', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  {e.location   && <span>📍 {e.location}</span>}
                  {e.time_range && <span>⏰ {e.time_range}</span>}
                </div>
              </div>
              <span style={{ padding: '6px 14px', borderRadius: 100, fontSize: '.78rem', fontWeight: 600, whiteSpace: 'nowrap', ...(e.is_free ? { background: 'rgba(61,219,110,.1)', color: 'var(--green)', border: '1px solid rgba(61,219,110,.2)' } : { background: 'rgba(255,107,53,.1)', color: 'var(--accent)', border: '1px solid rgba(255,107,53,.2)' }) }}>
                {e.is_free ? 'Free' : 'Paid'}
              </span>
              <button onClick={() => toggleRSVP(e.id)} style={{ background: done ? 'rgba(61,219,110,.15)' : 'var(--muted)', color: done ? 'var(--green)' : 'var(--text)', border: `1px solid ${done ? 'var(--green)' : 'rgba(255,255,255,.1)'}`, borderRadius: 100, padding: '9px 20px', fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all .2s', whiteSpace: 'nowrap', fontFamily: "'DM Sans',sans-serif" }}>
                {done ? "✓ RSVP'd" : 'RSVP →'}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
