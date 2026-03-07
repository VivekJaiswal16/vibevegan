'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#challenge',   label: '3-Min'        },
  { href: '#22days',      label: '22 Days'       },
  { href: '#quiz',        label: 'Quiz'          },
  { href: '#builder',     label: 'Meal Builder'  },
  { href: '#streak',      label: 'Streak'        },
  { href: '#movies',      label: 'Watch'         },
  { href: '#events',      label: 'Events'        },
  { href: '#community',   label: 'Community'     },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isMobile,  setIsMobile]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 900,
      padding: '16px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(13,15,10,0.97)' : 'rgba(13,15,10,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(61,219,110,0.1)',
      transition: 'background .3s',
    }}>
      <a href="#" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.3rem', color: 'var(--green)', letterSpacing: '-0.5px', textDecoration: 'none' }}>
        🌱 <span style={{ color: 'var(--lime)' }}>vibe</span>vegan
      </a>

      {!isMobile && (
        <ul style={{ listStyle: 'none', display: 'flex', gap: 22, flexWrap: 'wrap' }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ color: 'var(--sub)', textDecoration: 'none', fontSize: '.83rem', fontWeight: 500, transition: 'color .2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--green)'}
                onMouseLeave={e => e.target.style.color = 'var(--sub)'}
              >{l.label}</a>
            </li>
          ))}
        </ul>
      )}

      {isMobile && (
        <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--green)', borderRadius: 2, transition: 'all .3s',
              transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
              opacity: menuOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      )}

      {isMobile && menuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(13,15,10,0.98)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(61,219,110,0.15)', padding: '12px 0' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '13px 5%', color: 'var(--sub)', textDecoration: 'none', fontSize: '.95rem', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,.04)' }}
            >{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
