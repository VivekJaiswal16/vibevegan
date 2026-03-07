'use client'
import { useState } from 'react'

const categories = [
  {
    label: '🥦 Vegetables',
    items: [
      { name: '🥦 Broccoli', co2: 0.1, water: 20 },
      { name: '🥕 Carrot',   co2: 0.05, water: 15 },
      { name: '🍅 Tomato',   co2: 0.07, water: 18 },
      { name: '🥬 Spinach',  co2: 0.04, water: 10 },
      { name: '🌽 Corn',     co2: 0.06, water: 25 },
      { name: '🫑 Capsicum', co2: 0.08, water: 30 },
    ],
  },
  {
    label: '🌾 Grains & Protein',
    items: [
      { name: '🍚 Brown Rice',   co2: 0.3,  water: 80  },
      { name: '🫘 Lentils',      co2: 0.4,  water: 90  },
      { name: '🥜 Chickpeas',    co2: 0.35, water: 75  },
      { name: '🍞 Whole Wheat',  co2: 0.25, water: 60  },
      { name: '🫘 Tofu',         co2: 0.45, water: 100 },
      { name: '🌾 Oats',         co2: 0.28, water: 70  },
    ],
  },
  {
    label: '🫐 Fruits & Extras',
    items: [
      { name: '🍌 Banana',      co2: 0.08, water: 22 },
      { name: '🍎 Apple',       co2: 0.06, water: 18 },
      { name: '🫐 Blueberries', co2: 0.12, water: 35 },
      { name: '🥑 Avocado',     co2: 0.15, water: 40 },
      { name: '🍋 Lemon',       co2: 0.09, water: 28 },
      { name: '🌰 Almonds',     co2: 0.11, water: 32 },
    ],
  },
]

export default function MealBuilder() {
  const [selected, setSelected] = useState(new Set())

  function toggle(name, co2, water) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })
  }

  // Gather selected item data
  const allItems = categories.flatMap(c => c.items)
  const chosenItems = allItems.filter(i => selected.has(i.name))
  const totCO2   = chosenItems.reduce((a, i) => a + i.co2, 0)
  const saved    = Math.max(0, 2.5 - totCO2)
  const co2Saved = (saved * 1000).toFixed(0)
  const waterSaved = Math.round(saved * 400)
  const score    = selected.size === 0 ? '🌱' : selected.size < 3 ? '🌿' : selected.size < 5 ? '🌳' : '🌍'

  return (
    <section id="builder" style={{ padding: '100px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">🍽️ Build Your Plate</div>
        <h2 className="section-title">See Your<br />Impact Live</h2>
        <p className="section-sub">Pick ingredients, watch the environmental savings calculate in real time.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24 }}>
        {/* Left — ingredient picker */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 40 }}>
          {categories.map(cat => (
            <div key={cat.label} style={{ marginBottom: 28 }}>
              <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--sub)', marginBottom: 12 }}>{cat.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.items.map(item => {
                  const active = selected.has(item.name)
                  return (
                    <button key={item.name} onClick={() => toggle(item.name, item.co2, item.water)} style={{
                      background: active ? 'rgba(61,219,110,.12)' : 'var(--muted)',
                      border: `1.5px solid ${active ? 'var(--green)' : 'rgba(255,255,255,.07)'}`,
                      borderRadius: 100, padding: '8px 16px', fontSize: '.85rem',
                      cursor: 'pointer', color: active ? 'var(--green)' : 'var(--text)',
                      fontWeight: active ? 600 : 400, transition: 'all .2s', fontFamily: "'DM Sans',sans-serif",
                    }}>{item.name}</button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right — plate + impact */}
        <div style={{ background: 'var(--card)', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>🍽️ Your Plate</div>
          <div style={{ flex: 1 }}>
            {chosenItems.length === 0
              ? <p style={{ color: 'var(--sub)', fontSize: '.9rem', fontStyle: 'italic', padding: '20px 0' }}>Select ingredients to build your meal ↑</p>
              : chosenItems.map(i => (
                <div key={i.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.05)', fontSize: '.88rem' }}>
                  <span>{i.name}</span>
                  <span style={{ color: 'var(--sub)', fontSize: '.78rem', marginLeft: 'auto' }}>-{(i.co2 * 1000).toFixed(0)}g CO₂</span>
                </div>
              ))
            }
          </div>

          {/* Impact boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 24 }}>
            {[
              { val: co2Saved + 'g',   label: 'CO₂ Saved' },
              { val: waterSaved + 'L', label: 'Water Saved' },
              { val: score,            label: 'Eco Score' },
            ].map(b => (
              <div key={b.label} style={{ background: 'var(--muted)', borderRadius: 12, padding: '14px 10px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--green)' }}>{b.val}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--sub)', marginTop: 3 }}>{b.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: 14, background: 'rgba(61,219,110,.06)', border: '1px solid rgba(61,219,110,.15)', borderRadius: 12, fontSize: '.85rem', color: 'var(--sub)', lineHeight: 1.5 }}>
            {chosenItems.length === 0
              ? 'Start adding ingredients to see your environmental impact vs. a meat-based meal.'
              : <span>This plant-based meal saves roughly <strong style={{ color: 'var(--green)' }}>{co2Saved}g CO₂</strong> and <strong style={{ color: 'var(--green)' }}>{waterSaved}L of water</strong> vs a typical meat meal. That&apos;s <strong style={{ color: 'var(--green)' }}>{Math.round(waterSaved * 365)}L saved per year</strong> if you eat like this daily. 🌱</span>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
