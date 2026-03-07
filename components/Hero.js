export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '140px 5% 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 80% 50%,rgba(61,219,110,.08) 0%,transparent 70%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(198,241,53,.06) 0%,transparent 60%)' }} />

      <div style={{ display: 'inline-block', background: 'rgba(61,219,110,.12)', border: '1px solid rgba(61,219,110,.3)', color: 'var(--green)', fontSize: '.78rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 28, animation: 'fadeUp .8s ease both' }}>
        🌍 The Future is Plant-Based
      </div>

      <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(3rem,8vw,7.5rem)', fontWeight: 800, lineHeight: .95, letterSpacing: -3, maxWidth: 900, animation: 'fadeUp .8s .1s ease both' }}>
        Eat<br />
        <span style={{ color: 'var(--green)' }}>Different.</span><br />
        Live <span style={{ color: 'var(--lime)' }}>Loud.</span>
      </h1>

      <p style={{ marginTop: 28, fontSize: '1.15rem', color: 'var(--sub)', maxWidth: 520, lineHeight: 1.6, fontWeight: 300, animation: 'fadeUp .8s .2s ease both' }}>
        Your choices are the most powerful thing you own. One meal at a time, one day at a time — let's change the world together.
      </p>

      <div style={{ marginTop: 44, display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp .8s .3s ease both' }}>
        <a href="https://3minutes.wtf" target="_blank" rel="noreferrer" className="btn-primary">Watch the 3-Min Video →</a>
        <a href="https://challenge22.com" target="_blank" rel="noreferrer" className="btn-outline">22-Day Challenge</a>
      </div>

      <div style={{ position: 'absolute', bottom: 36, left: '5%', color: 'var(--sub)', fontSize: '.8rem', letterSpacing: 1.5, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8, animation: 'fadeUp 1s .6s ease both' }}>
        <span style={{ width: 1, height: 36, background: 'linear-gradient(to bottom,transparent,var(--sub))', display: 'inline-block' }} />
        Scroll to explore
      </div>
    </section>
  )
}
