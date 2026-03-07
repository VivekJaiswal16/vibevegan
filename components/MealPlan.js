'use client'
import { useState } from 'react'
import { mealPlan, swaps } from '@/data/meals'

export default function MealPlan() {
  const [activeDay, setActiveDay] = useState(0)
  const day = mealPlan[activeDay]

  return (
    <section id="meals" style={{ padding: '100px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">🥘 Eat Delicious</div>
        <h2 className="section-title">7-Day Indian<br />Vegan Meal Plan</h2>
        <p className="section-sub">Desi flavours, zero animal products. Designed for Punjab — dal, sabzi, roti and all the good stuff.</p>
      </div>

      <div className="reveal">
        {/* Day tabs */}
        <div style={{ display: 'flex', gap: 6, marginTop: 48, marginBottom: 32, flexWrap: 'wrap' }}>
          {mealPlan.map((d, i) => (
            <button key={d.day} onClick={() => setActiveDay(i)} style={{
              padding: '9px 20px', borderRadius: 100, fontSize: '.85rem', fontWeight: 600, cursor: 'pointer',
              background: activeDay === i ? 'var(--green)' : 'transparent',
              color: activeDay === i ? 'var(--dark)' : 'var(--sub)',
              border: activeDay === i ? '1.5px solid var(--green)' : '1.5px solid rgba(255,255,255,.1)',
              transition: 'all .2s', fontFamily: "'DM Sans',sans-serif",
            }}>{d.day}</button>
          ))}
        </div>

        {/* Meal cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {day.meals.map(m => (
            <div key={m.slot} style={{ background: 'var(--card)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,.04)' }}>
              <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--green)', marginBottom: 10 }}>{m.slot}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: 6 }}>{m.name}</div>
              <p style={{ color: 'var(--sub)', fontSize: '.82rem', lineHeight: 1.5 }}>{m.desc}</p>
              <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {m.tags.map(t => (
                  <span key={t} style={{ background: 'rgba(198,241,53,.08)', color: 'var(--lime)', fontSize: '.7rem', fontWeight: 600, padding: '2px 9px', borderRadius: 100 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Swap cheat sheet */}
        <div style={{ marginTop: 32, background: 'var(--card)', borderRadius: 20, padding: 32, border: '1px solid rgba(255,255,255,.04)' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>🔄 Quick Swap Cheat Sheet</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
            {swaps.map(s => (
              <div key={s.from} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, background: 'var(--muted)', borderRadius: 12 }}>
                <span style={{ fontSize: '.85rem', color: 'var(--sub)', textDecoration: 'line-through' }}>{s.from}</span>
                <span style={{ color: 'var(--green)', fontWeight: 700 }}>→</span>
                <span style={{ fontSize: '.85rem', color: 'var(--green)', fontWeight: 600 }}>{s.to}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
