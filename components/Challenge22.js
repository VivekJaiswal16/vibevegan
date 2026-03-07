'use client'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Challenge22() {
  const mobile = useIsMobile()
  return (
    <section id="22days" style={{ padding: '80px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">🔥 Transform Your Life</div>
        <h2 className="section-title">The 22-Day<br />Vegan Challenge</h2>
        <p className="section-sub">Science says it takes 21 days to break a habit. We give you one extra day, just to be sure.</p>
      </div>

      <div className="reveal" style={{ marginTop: 40, background: 'var(--card)', borderRadius: 24, overflow: 'hidden', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.2fr' }}>
        <div style={{ padding: mobile ? '40px 28px' : '60px 50px', background: 'linear-gradient(135deg,#1a2b1a 0%,#0f1a0f 100%)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -20, left: -10, fontFamily: "'Syne',sans-serif", fontSize: '18rem', fontWeight: 800, color: 'rgba(61,219,110,.04)', lineHeight: 1, pointerEvents: 'none', letterSpacing: -10 }}>22</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: mobile ? '4rem' : '5.5rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1, letterSpacing: -3 }}>22</div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2rem', fontWeight: 800, letterSpacing: -1, marginBottom: 20 }}>Days.<br />New You.</div>
          <p style={{ color: 'var(--sub)', fontSize: '.95rem', lineHeight: 1.65, marginBottom: 32 }}>No judgment. No perfection required. Just 22 days of conscious eating that will rewire the way you think about food, animals, and the planet.</p>
          <a href="https://challenge22.com" target="_blank" rel="noreferrer" className="btn-primary">Join the Challenge →</a>
          <p style={{ marginTop: 12, fontSize: '.78rem', color: 'var(--sub)' }}>challenge22.com ✨</p>
        </div>

        <div style={{ padding: mobile ? '40px 28px' : '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {[
            { label: 'Week 1 — Days 1–7',          title: 'Discover 🌿', desc: 'Explore plant-based swaps for your daily meals. Easy wins, big flavours.' },
            { label: 'Week 2 — Days 8–14',          title: 'Deepen 🧠',  desc: 'Understand the why. Dive into the environmental and ethical reasons. Your choices start feeling powerful.' },
            { label: 'Week 3 & Beyond — Days 15–22', title: 'Thrive 🚀', desc: "New recipes, new energy, new mindset. By Day 22, most people can't imagine going back." },
          ].map((w, i) => (
            <div key={i}>
              <div style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--green)', marginBottom: 10 }}>{w.label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: 6 }}>{w.title}</div>
              <p style={{ color: 'var(--sub)', fontSize: '.88rem', lineHeight: 1.5 }}>{w.desc}</p>
              {i < 2 && <div style={{ height: 1, background: 'rgba(255,255,255,.05)', margin: '24px 0' }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
