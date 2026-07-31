import { TEAM } from '@/lib/data';

export const metadata = {
  title: 'Our Team | Ficek Insurance Brandon MB',
  description: 'Meet the Ficek Insurance team — Rod, Heather, Danon, and Sabrina Ficek. A family of licensed insurance brokers serving Brandon, Manitoba.',
};

export default function OurTeamPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="section-label">The People Behind the Brand</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            Meet the Ficek family
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            We're not a call centre. We're a family of licensed brokers who live and work in your community.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {TEAM.map((member, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)',
                }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>{member.name}</h2>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent2)', marginBottom: '12px', letterSpacing: '0.3px' }}>{member.title}</div>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
