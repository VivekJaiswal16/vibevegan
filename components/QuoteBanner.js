export default function QuoteBanner() {
  return (
    <div style={{ padding: '100px 5%', background: 'var(--green)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, left: '5%', fontFamily: "'Syne',sans-serif", fontSize: '25rem', fontWeight: 800, color: 'rgba(13,15,10,.07)', lineHeight: 1, pointerEvents: 'none' }}>"</div>
      <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(1.8rem,4vw,3.2rem)', fontWeight: 800, color: 'var(--dark)', maxWidth: 850, margin: '0 auto 20px', lineHeight: 1.1, letterSpacing: -1.5 }}>
        "The animals of the world exist for their own reasons. They were not made for humans any more than black people were made for white."
      </p>
      <p style={{ fontSize: '.9rem', color: 'rgba(13,15,10,.55)', fontStyle: 'italic' }}>— Alice Walker, Author &amp; Activist</p>
    </div>
  )
}
