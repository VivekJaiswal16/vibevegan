'use client'
import { useIsMobile } from '@/hooks/useIsMobile'

const groups = [
  {
    icon: '💬', iconBg: 'rgba(37,211,102,.12)',
    title: 'Vegan WhatsApp Groups',
    desc: 'Join our active WhatsApp communities for daily recipes, support, local meetups, and vegan news.',
    items: [
      { name: '🌱 Vegan India Community',  detail: 'National group · Recipes, tips & support' },
      { name: '🏙️ Chandigarh Vegans',      detail: 'Local group · Meetups & events' },
      { name: '🔥 22-Day Challenge Group', detail: 'Challenge support · Daily check-ins' },
    ],
    linkLabel: 'Join Group', href: '#', accentColor: 'var(--green)',
  },
  {
    icon: '🏛️', iconBg: 'rgba(61,219,110,.1)',
    title: 'NGOs in Chandigarh',
    desc: 'Organizations on the ground making change happen every day.',
    items: [
      { name: 'People For Animals', detail: '📞 0172-2790000 · Animal rescue & advocacy' },
      { name: 'SPCA Chandigarh',    detail: '📞 0172-2741904 · Animal welfare' },
      { name: 'Friendicoes SECA',   detail: '📍 Sector 7 · Rescue & rehab' },
      { name: 'Animal Care Trust',  detail: '📍 Chandigarh · Education & outreach' },
    ],
  },
  {
    icon: '🙋', iconBg: 'rgba(255,107,53,.1)',
    title: 'Volunteer with Us',
    desc: 'Outreach events, awareness campaigns, community cooking demos across Chandigarh & Ludhiana.',
    items: [
      { name: '📧 Email Us',        detail: 'volunteer@vibevegan.in' },
      { name: '📞 Call / WhatsApp', detail: '+91 98765 VEGAN (link coming soon)' },
      { name: '📍 Based In',        detail: 'Chandigarh & Ludhiana, Punjab' },
    ],
    linkLabel: 'Get Involved', href: 'mailto:volunteer@vibevegan.in', accentColor: 'var(--accent)',
    cardBorder: 'rgba(255,107,53,.15)',
  },
]

export default function Community() {
  const mobile = useIsMobile()
  return (
    <section id="community" style={{ padding: '80px 5%', background: 'var(--dark)' }}>
      <div className="reveal">
        <div className="section-tag">🤝 Join the Movement</div>
        <h2 className="section-title">You&apos;re Not Alone.<br />We&apos;re a Community.</h2>
        <p className="section-sub">Connect with like-minded people in Chandigarh and beyond.</p>
      </div>

      <div className="reveal" style={{ marginTop: 40, display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(auto-fill,minmax(300px,1fr))', gap: 18 }}>
        {groups.map(g => (
          <div key={g.title} style={{ background: 'var(--card)', borderRadius: 20, padding: mobile ? '24px 20px' : '32px 28px', border: `1px solid ${g.cardBorder || 'rgba(255,255,255,.04)'}` }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: g.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: 16 }}>{g.icon}</div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{g.title}</div>
            <p style={{ color: 'var(--sub)', fontSize: '.87rem', lineHeight: 1.55, marginBottom: 16 }}>{g.desc}</p>
            <div>
              {g.items.map(item => (
                <div key={item.name} style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,.05)' }}>
                  <div style={{ fontWeight: 600, fontSize: '.88rem', marginBottom: 3 }}>{item.name}</div>
                  <div style={{ color: 'var(--sub)', fontSize: '.78rem' }}>{item.detail}</div>
                </div>
              ))}
            </div>
            {g.linkLabel && (
              <a href={g.href} style={{ color: g.accentColor, fontSize: '.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, textDecoration: 'none' }}>
                {g.linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
