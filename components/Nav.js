'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
    </nav>
  )
}
