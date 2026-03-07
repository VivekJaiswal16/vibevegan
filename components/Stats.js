const stats = [
  { num: '3x',   label: 'Less land usage vs meat' },
  { num: '73%',  label: 'Lower carbon footprint' },
  { num: '80B+', label: 'Animals saved yearly if vegan' },
  { num: '22',   label: 'Days to form a new habit' },
]

export default function Stats() {
  return (
    <div style={{ background: 'var(--card)', borderTop: '1px solid rgba(255,255,255,.05)', borderBottom: '1px solid rgba(255,255,255,.05)', padding: '36px 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
      {stats.map((s, i) => (
        <div key={i} style={{ textAlign: 'center', padding: '12px 0', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
          <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'var(--green)' }}>{s.num}</div>
          <div style={{ fontSize: '.82rem', color: 'var(--sub)', marginTop: 4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
