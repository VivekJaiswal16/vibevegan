'use client'
import { movies } from '@/data/movies'

export default function Movies() {
  return (
    <section id="movies" style={{ padding: '100px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">🎬 After the 3-Min Video</div>
        <h2 className="section-title">Keep Going —<br />Watch These Next</h2>
        <p className="section-sub">The rabbit hole goes deeper. These films are powerful, eye-opening, and honestly hard to unsee.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: 20 }}>
        {movies.map(m => (
          <div key={m.title} style={{ background: 'var(--card)', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)', transition: 'transform .25s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: 160, background: m.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>{m.emoji}</div>
            <div style={{ padding: 20 }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1rem', marginBottom: 6 }}>{m.title}</div>
              <div style={{ color: 'var(--sub)', fontSize: '.8rem', marginBottom: 10 }}>{m.meta}</div>
              <p style={{ color: 'var(--sub)', fontSize: '.83rem', lineHeight: 1.5 }}>{m.desc}</p>
              <span style={{ display: 'inline-block', marginTop: 12, background: 'rgba(61,219,110,.08)', color: 'var(--green)', fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 100 }}>{m.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
