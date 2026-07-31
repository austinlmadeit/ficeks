import Link from 'next/link';
import { SITE, TEAM } from '@/lib/data';

export const metadata = {
  title: 'About Ficek Insurance | Family-Owned Broker, Brandon MB',
  description: 'Learn about Ficek Insurance — a family-owned independent brokerage serving Brandon, Manitoba since 1946. Meet Rod, Heather, Danon, and Sabrina Ficek.',
};

const timeline = [
  { year: '1946', event: 'Ficek Insurance founded in Brandon, Manitoba. A commitment to the community and to honest, independent advice.' },
  { year: '1970s\u201380s', event: 'Growth through reputation. Word-of-mouth referrals from satisfied Brandon families and businesses.' },
  { year: '1990s', event: 'Second generation joins the business. The family tradition of personalized service continues.' },
  { year: '2000s', event: "Expanded commercial and farm insurance offerings to serve Manitoba's agricultural community." },
  { year: '2024+', event: 'Ficek Insurance continues to serve Brandon with the same values: independent advice, local expertise, family service.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
      }}>
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px', maxWidth: '700px' }}>
            A Brandon family, protecting Brandon families.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '580px', lineHeight: 1.7 }}>
            Since {SITE.founded}, Ficek Insurance has been an independent brokerage rooted in the Brandon community. We answer to our clients — not to an insurance company.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Independent?</span>
              <h2 style={{ fontSize: '36px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>
                We work for you — always.
              </h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '16px' }}>
                Unlike captive agents who can only sell one company's products, we're independent — which means we shop multiple insurers on your behalf. Our loyalty is to you, not to an insurance company's quota.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '32px' }}>
                When you have a claim, we advocate for you. When your needs change, we review your policy and find better options. That's the independent broker difference.
              </p>
              <Link href="/quote" className="btn btn-cta">Get a Free Quote</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: '⚖️', title: 'Unbiased Advice', desc: 'No quotas. No brand loyalty. Just honest recommendations.' },
                { icon: '🔍', title: 'Market Comparison', desc: 'We compare rates across multiple insurers for every client.' },
                { icon: '🤝', title: 'Claims Advocacy', desc: 'We stand with you when you need to make a claim.' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-label">Our History</span>
            <h2 className="section-title">78+ years of serving Brandon</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '1px', background: 'var(--border2)' }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '32px', marginBottom: '40px', alignItems: 'flex-start' }}>
                <div style={{ width: '80px', textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent2)', fontFamily: 'var(--font-heading)' }}>{item.year}</span>
                </div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '4px', position: 'relative', zIndex: 1 }} />
                <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '15px', paddingTop: 0 }}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-label">The Team</span>
            <h2 className="section-title">Meet the Ficek family</h2>
          </div>
          <div className="grid-4">
            {TEAM.map((member, i) => (
              <div key={i} className="card text-center">
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ fontWeight: 700, marginBottom: '4px' }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--accent2)', marginBottom: '12px' }}>{member.title}</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{member.bio.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link href="/about/our-team" className="btn btn-outline">Meet the full team →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
