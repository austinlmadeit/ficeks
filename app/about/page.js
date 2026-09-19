import Link from 'next/link';
import { SITE, TEAM, COMPANY_HISTORY } from '@/lib/data';

export const metadata = {
  title: 'About Ficek Insurance | Family-Owned Broker, Brandon MB',
  description: 'Learn about Ficek Insurance — a family-owned independent brokerage serving Brandon, Manitoba since 1946. Read our history from A.C. Clark Insurance to present day.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section style={{
        background: '#09090b',
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '80px',
        borderBottom: '4px solid #dc2626',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: '#dc2626',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            🇨🇦 Our Family Story Since 1946
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            A Brandon Family, Protecting Brandon Families.
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a1a1aa',
            maxWidth: '680px',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            From 1 part-time staff member to 10+ licensed insurance brokers across 2 locations — built under our motto: <em>"Let our Family Insure Your Family, Like Family."</em>
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/about/our-team" className="btn btn-red">
              👥 Meet The Ficek Family & Team →
            </Link>
            <Link href="/about/locations" className="btn btn-outline-white">
              📍 View Brandon Offices
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDEPENDENT BROKER ADVANTAGE ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">Independent Advantage</span>
              <h2 className="section-title">We work for you. Not the insurance carriers.</h2>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '16px' }}>
                Unlike captive insurance agents who can only sell one company's policies, Ficek Insurance is 100% independent. We shop Canada’s top insurance providers on your behalf to secure the best coverage at competitive rates.
              </p>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '28px' }}>
                When you make a claim, we act as your personal advocate. When your coverage needs change, we review your policies and find better options for your family or business.
              </p>
              <Link href="/quote" className="btn btn-red">
                Calculate & Request Quote →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Unbiased Representation', desc: 'No insurance company quotas. We represent your best financial interest.' },
                { title: 'Multi-Market Shopping', desc: 'We compare coverage options across leading Canadian insurance markets.' },
                { title: 'Local Claims Advocacy', desc: 'Direct, personal guidance when you need to file a claim.' },
              ].map((item, i) => (
                <div key={i} className="card card-red-top" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#fafafa' }}>
                  <span style={{ fontSize: '24px', color: '#dc2626', lineHeight: 1 }}>•</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '17px', color: '#09090b', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISUAL HISTORY ROADMAP ── */}
      <section className="section" style={{ background: '#f4f4f5', borderTop: '1px solid #e4e4e7', borderBottom: '2px solid #09090b' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '64px' }}>
            <span className="section-tag">Historical Timeline Map</span>
            <h2 className="section-title">The Ficek Family History Roadmap</h2>
            <p className="section-sub mx-auto">
              Follow our journey from founding roots in 1946 to becoming Brandon’s trusted family-owned brokerage.
            </p>
          </div>

          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
            {/* Glowing vertical trail line */}
            <div style={{
              position: 'absolute',
              left: '28px',
              top: '20px',
              bottom: '40px',
              width: '4px',
              background: 'linear-gradient(180deg, #dc2626 0%, #09090b 100%)',
              borderRadius: '2px',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {COMPANY_HISTORY.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', position: 'relative' }}>
                  {/* Glowing Node Badge */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#dc2626',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '13px',
                    boxShadow: '0 4px 14px rgba(220,38,38,0.3)',
                    flexShrink: 0,
                    zIndex: 2,
                    border: '3px solid #ffffff',
                  }}>
                    {idx + 1}
                  </div>

                  {/* Card Content */}
                  <div className="card card-red-top" style={{ flex: 1, background: '#ffffff', padding: '28px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '10px' }}>
                      <span style={{
                        fontSize: '13px',
                        fontWeight: 900,
                        color: '#dc2626',
                        background: 'rgba(220,38,38,0.08)',
                        padding: '4px 12px',
                        borderRadius: '4px',
                      }}>
                        {item.year}
                      </span>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#71717a' }}>
                        📍 {item.location}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#09090b', marginBottom: '4px' }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#dc2626', marginBottom: '12px' }}>
                      {item.subtitle}
                    </div>

                    <p style={{ color: '#71717a', fontSize: '15px', lineHeight: 1.65, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BROKER FAMILY TEAM ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Brandon Office Team</span>
            <h2 className="section-title">Meet the Ficek Team</h2>
          </div>

          <div className="grid-4">
            {TEAM.map((member, i) => (
              <div key={i} className="card text-center" style={{ background: '#fafafa' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(220,38,38,0.2)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ fontWeight: 900, fontSize: '18px', marginBottom: '4px', color: '#09090b' }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: '#dc2626', fontWeight: 800 }}>{member.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/about/our-team" className="btn btn-red">Meet Full Broker Team →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
