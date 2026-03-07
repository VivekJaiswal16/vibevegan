'use client'
export default function VideoChallenge() {
  return (
    <section id="challenge" style={{ padding: '100px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">👁️ Wake Up Call</div>
        <h2 className="section-title">The 3-Minute<br />Video Challenge</h2>
        <p className="section-sub">One video. Three minutes. It might just change your entire perspective on what ends up on your plate.</p>
      </div>

      <div className="reveal" style={{ marginTop: 60, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {/* Left card */}
        <div style={{ background: 'var(--card)', padding: '52px 44px', borderRadius: '20px 0 0 20px', transition: 'background .3s' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1C201A'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}
        >
          <div style={{ fontSize: '.78rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--sub)', marginBottom: 20 }}>🎬 Before You Scroll Away</div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Can You Handle 3 Minutes of Truth?</h3>
          <p style={{ color: 'var(--sub)', fontSize: '.92rem', lineHeight: 1.6, marginBottom: 28 }}>Most people spend more time choosing a Netflix show than thinking about where their food comes from. This video is just 3 minutes. We dare you to watch it.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
            {['🌱 Eye-Opening', '⏱ 3 Minutes', '🔥 Must Watch'].map(b => (
              <span key={b} style={{ background: 'rgba(61,219,110,.1)', border: '1px solid rgba(61,219,110,.2)', color: 'var(--green)', fontSize: '.75rem', fontWeight: 600, padding: '4px 12px', borderRadius: 100 }}>{b}</span>
            ))}
          </div>
          <p style={{ color: 'var(--sub)', fontSize: '.85rem' }}>Thousands have watched this and reconsidered their choices. What will you do?</p>
        </div>

        {/* Right card — green CTA */}
        <div style={{ background: 'var(--green)', padding: '52px 44px', borderRadius: '0 20px 20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', transition: 'background .3s', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.background = '#35c060'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--green)'}
        >
          {/* Animated play ring */}
          <div style={{ width: 90, height: 90, borderRadius: '50%', background: 'rgba(13,15,10,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px solid rgba(13,15,10,.2)', animation: 'pulse 2s ease-in-out infinite' }} />
            <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '16px 0 16px 28px', borderColor: 'transparent transparent transparent var(--dark)', marginLeft: 6 }} />
          </div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>Watch Now</div>
          <p style={{ fontSize: '.95rem', color: 'rgba(13,15,10,.7)', marginBottom: 28 }}>3 minutes that could change your life</p>
          <a href="https://3minutes.wtf" target="_blank" rel="noreferrer"
            style={{ background: 'var(--dark)', color: 'var(--green)', padding: '13px 26px', borderRadius: 100, fontWeight: 700, fontSize: '.9rem', textDecoration: 'none', display: 'inline-block', transition: 'transform .2s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >▶ Take the Challenge</a>
          <p style={{ marginTop: 16, fontSize: '.8rem', color: 'rgba(13,15,10,.5)' }}>3minutes.wtf · Opens in new tab</p>
        </div>
      </div>
    </section>
  )
}
