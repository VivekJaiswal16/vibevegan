'use client'

import { restaurants } from '@/data/restaurants'

export default function Restaurants() {
  return (
    <section id="restaurants" style={{ padding: '100px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">📍 Eat Local</div>
        <h2 className="section-title">Vegan-Friendly<br />Chandigarh</h2>
        <p className="section-sub">You don&apos;t have to cook every meal. These spots have great vegan options.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
        {restaurants.map(r => (
          <div key={r.name} style={{ background: 'var(--card)', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)', transition: 'transform .25s, border-color .25s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(61,219,110,.2)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.04)' }}
          >
            <div style={{ padding: '28px 24px 16px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ fontSize: '2.2rem' }}>{r.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{r.name}</div>
                <div style={{ color: 'var(--sub)', fontSize: '.8rem' }}>{r.area}</div>
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '.9rem', color: 'var(--lime)' }}>⭐ {r.rating}</div>
            </div>
            <div style={{ padding: '0 24px 24px', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {r.tags.map(t => (
                <span key={t.label} style={{ fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 100, ...(t.type === 'v' ? { background: 'rgba(61,219,110,.1)', color: 'var(--green)' } : { background: 'rgba(198,241,53,.08)', color: 'var(--lime)' }) }}>{t.label}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
