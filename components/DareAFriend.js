'use client'
import { useState } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'

const MSG = "Hey! I just watched this 3-minute video and it genuinely changed how I think about food. I dare you to watch it too — just 3 mins. https://3minutes.wtf 🌱 No excuses!"

export default function DareAFriend() {
  const mobile  = useIsMobile()
  const [copied, setCopied] = useState(false)

  function shareWA() { window.open('https://wa.me/?text=' + encodeURIComponent(MSG), '_blank') }
  function copyMsg() { navigator.clipboard.writeText(MSG); setCopied(true); setTimeout(() => setCopied(false), 2500) }

  return (
    <section id="dare" style={{ padding: '80px 5%', background: 'var(--muted)' }}>
      <div className="reveal">
        <div className="section-tag">📲 Spread the Word</div>
        <h2 className="section-title">Dare a<br />Friend</h2>
        <p className="section-sub">The fastest way to grow this movement? Tell someone you care about.</p>
      </div>

      <div className="reveal" style={{ marginTop: 40, background: 'linear-gradient(135deg,#1a3a1a,#0f1a0f)', borderRadius: 24, padding: mobile ? '32px 24px' : 60, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 32 : 48, alignItems: 'center', border: '1px solid rgba(61,219,110,.12)' }}>
        <div>
          <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: mobile ? '1.8rem' : '2.2rem', fontWeight: 800, letterSpacing: -1, marginBottom: 16, lineHeight: 1.1 }}>Tag someone who<br />needs to see this 👀</h3>
          <p style={{ color: 'var(--sub)', lineHeight: 1.65, marginBottom: 28 }}>Most people have never questioned where their food comes from. Be the reason someone does.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(61,219,110,.08)', borderRadius: 12, padding: 16, border: '1px solid rgba(61,219,110,.15)' }}>
            <div style={{ fontSize: '2rem', flexShrink: 0 }}>🤔</div>
            <div style={{ fontSize: '.85rem', color: 'var(--sub)', lineHeight: 1.5 }}>
              If just <strong style={{ color: 'var(--text)' }}>1 in 10</strong> people go vegan for 22 days, the impact would be <strong style={{ color: 'var(--green)' }}>massive.</strong>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--dark)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--sub)', marginBottom: 12 }}>📬 Message Preview</div>
          <p style={{ fontSize: '.9rem', color: 'var(--text)', lineHeight: 1.6, marginBottom: 20 }}>{MSG}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button onClick={shareWA} style={{ padding: '11px 22px', borderRadius: 100, fontWeight: 700, fontSize: '.85rem', background: '#25d366', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", flex: mobile ? 1 : 'none' }}>
              💬 Send on WhatsApp
            </button>
            <button onClick={copyMsg} style={{ padding: '11px 22px', borderRadius: 100, fontWeight: 700, fontSize: '.85rem', background: 'var(--muted)', color: copied ? 'var(--green)' : 'var(--text)', border: '1px solid rgba(255,255,255,.1)', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", flex: mobile ? 1 : 'none' }}>
              {copied ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
