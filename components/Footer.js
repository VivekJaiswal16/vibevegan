'use client'

const takeAction = [
  { href: '#challenge',   label: '3-Min Challenge'  },
  { href: '#22days',      label: '22-Day Challenge'  },
  { href: '#quiz',        label: 'Footprint Quiz'    },
  { href: '#streak',      label: 'Streak Tracker'    },
  { href: '#pledge',      label: 'Pledge Wall'       },
  { href: '#dare',        label: 'Dare a Friend'     },
]

const explore = [
  { href: '#meals',       label: '7-Day Meal Plan'   },
  { href: '#builder',     label: 'Meal Builder'      },
  { href: '#movies',      label: 'Watch Films'       },
  { href: '#events',      label: 'Events'            },
  { href: '#restaurants', label: 'Restaurants'       },
  { href: '#community',   label: 'Community'         },
]

const linkStyle = { color: 'var(--sub)', fontSize: '.88rem', textDecoration: 'none', transition: 'color .2s' }

export default function Footer() {
  return (
    <footer style={{ background: 'var(--card)', borderTop: '1px solid rgba(255,255,255,.05)', padding: '60px 5% 36px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap', gap: 32 }}>
        <div>
          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--green)' }}>
            🌱 <span style={{ color: 'var(--lime)' }}>vibe</span>vegan
          </div>
          <p style={{ color: 'var(--sub)', fontSize: '.88rem', marginTop: 10, maxWidth: 280, lineHeight: 1.6 }}>
            A movement for the ones who give a damn. For the animals. For the planet. For yourself.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {[{ title: 'Take Action', links: takeAction }, { title: 'Explore', links: explore }].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: '.85rem', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text)', marginBottom: 16 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l.href} style={{ marginBottom: 10 }}>
                    <a href={l.href} style={linkStyle}
                      onMouseEnter={e => e.target.style.color = 'var(--green)'}
                      onMouseLeave={e => e.target.style.color = 'var(--sub)'}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ color: 'var(--sub)', fontSize: '.82rem' }}>© 2024 VibeVegan · Built for the planet 🌍</p>
        <p style={{ color: 'var(--sub)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: 5 }}>
          Made with <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>♥</span> by <strong style={{ color: 'var(--text)' }}>Vivek Jaiswal</strong>
        </p>
      </div>
    </footer>
  )
}
