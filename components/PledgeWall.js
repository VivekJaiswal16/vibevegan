'use client'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const DEFAULT_PLEDGES = [
  { id: 'd1', name: 'Priya S.',  reason: 'For the animals — they deserve to live too.' },
  { id: 'd2', name: 'Arjun K.', reason: 'Climate change is real and my diet is part of the problem.' },
  { id: 'd3', name: 'Naina M.', reason: 'I watched Dominion and I could not unsee it.' },
  { id: 'd4', name: 'Rahul V.', reason: 'My health, my choice, my planet.' },
  { id: 'd5', name: 'Simran D.',reason: 'If not us, who? If not now, when?' },
  { id: 'd6', name: 'Karan B.', reason: 'Took the 3-min challenge. Changed everything.' },
]

export default function PledgeWall({ initialPledges = [] }) {
  const mobile  = useIsMobile()
  const merged  = initialPledges.length > 0 ? initialPledges : DEFAULT_PLEDGES
  const [pledges, setPledges] = useState(merged)
  const [name,    setName]    = useState('')
  const [reason,  setReason]  = useState('')
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')

  async function addPledge() {
    if (!name.trim() || !reason.trim()) { setError('Please fill in both fields.'); return }
    setError(''); setLoading(true)
    try {
      const res = await fetch('/api/pledges', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), reason: reason.trim() }),
      })
      if (!res.ok) throw new Error('Failed to save pledge.')
      const p = await res.json()
      setPledges(prev => [p, ...prev]); setName(''); setReason('')
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally { setLoading(false) }
  }

  const inputStyle = { background: 'var(--card)', border: '1.5px solid rgba(255,255,255,.08)', borderRadius: 12, padding: '14px 18px', color: 'var(--text)', fontFamily: "'DM Sans',sans-serif", fontSize: '.92rem', outline: 'none', width: '100%' }

  return (
    <section id="pledge" style={{ padding: '80px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">🌍 Make It Real</div>
        <h2 className="section-title">The Pledge<br />Wall</h2>
        <p className="section-sub">Tell the world why you&apos;re going vegan. Every pledge adds to a wave of change.</p>
      </div>

      <div className="reveal">
        {/* Input — stacked on mobile */}
        <div style={{ marginTop: 40, display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 12 }}>
          <input value={name} onChange={e => setName(e.target.value)} maxLength={60} placeholder="Your name" style={{ ...inputStyle, width: mobile ? '100%' : 200 }}
            onFocus={e => e.target.style.borderColor = 'var(--green)'}
            onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.08)'}
          />
          <input value={reason} onChange={e => setReason(e.target.value)} maxLength={200} placeholder="I'm going vegan because..."
            style={{ ...inputStyle, flex: mobile ? undefined : 1 }}
            onFocus={e => e.target.style.borderColor = 'var(--green)'}
            onBlur={e  => e.target.style.borderColor = 'rgba(255,255,255,.08)'}
            onKeyDown={e => e.key === 'Enter' && addPledge()}
          />
          <button onClick={addPledge} disabled={loading} style={{ background: 'var(--green)', color: 'var(--dark)', border: 'none', borderRadius: 12, padding: '14px 24px', fontWeight: 700, fontSize: '.92rem', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? .7 : 1, fontFamily: "'DM Sans',sans-serif", whiteSpace: 'nowrap', width: mobile ? '100%' : 'auto' }}>
            {loading ? '...' : '🌱 Add My Pledge'}
          </button>
        </div>
        {error && <p style={{ color: 'var(--accent)', fontSize: '.85rem', marginTop: 8 }}>{error}</p>}

        {/* Pledge wall — 1 col on mobile, 3 on desktop */}
        <div style={{ marginTop: 32, columns: mobile ? 1 : 3, gap: 16 }}>
          {pledges.map((p, i) => (
            <div key={p.id || i} style={{ breakInside: 'avoid', background: 'var(--card)', borderRadius: 14, padding: '20px 22px', marginBottom: 16, border: '1px solid rgba(255,255,255,.04)' }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '.9rem', fontWeight: 700, color: 'var(--green)', marginBottom: 6 }}>🌱 {p.name}</div>
              <div style={{ fontSize: '.85rem', color: 'var(--sub)', lineHeight: 1.5 }}>{p.reason}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Syne',sans-serif", fontSize: '1rem', color: 'var(--sub)', marginTop: 20 }}>
          <span style={{ color: 'var(--green)', fontWeight: 700 }}>{pledges.length}</span> people have pledged 💚
        </p>
      </div>
    </section>
  )
}
