export default function FinalCTA() {
  return (
    <section style={{ background: 'var(--dark)', textAlign: 'center', padding: '100px 5%' }}>
      <div className="reveal">
        <div className="section-tag" style={{ display: 'inline-block', marginBottom: 20 }}>🚀 Ready?</div>
        <h2 className="section-title" style={{ margin: '0 auto 20px', maxWidth: 600 }}>
          Your journey<br />starts with<br /><span style={{ color: 'var(--green)' }}>one choice.</span>
        </h2>
        <p style={{ color: 'var(--sub)', maxWidth: 420, margin: '0 auto 40px', fontSize: '1.05rem', lineHeight: 1.6 }}>
          It doesn&apos;t have to be perfect. It just has to start.
        </p>
        <a href="https://3minutes.wtf" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 36px' }}>
          Watch the 3-Min Video ▶
        </a>
      </div>
    </section>
  )
}
