import { TEAM, SITE } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Team | Ficek Insurance Brandon MB',
  description: 'Meet the 12 licensed insurance brokers and leaders at Ficek Insurance Brandon — Rod & Heather Ficek, Danon, Sabrina, Beatriz, Micheal, Brian, Linda, Brooke, Austin, Manas, Adrian, and Zarina.',
};

export default function OurTeamPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section style={{
        background: '#09090b',
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '80px',
        borderBottom: '4px solid #dc2626',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: '50%',
          transform: 'translateX(50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)',
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
            👥 Licensed Brandon Brokers & Leaders
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            We work hard to protect what matters most to you.
          </h1>

          <p style={{
            fontSize: '19px',
            color: '#a1a1aa',
            maxWidth: '680px',
            margin: '0 auto 32px',
            lineHeight: 1.65,
          }}>
            At Ficek Insurance, you’ll get friendly, reliable service, coverage that fits your needs, and competitive pricing. Got a question? Just reach out and one of our friendly brokers would love to lend a hand!
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={SITE.phoneHref} className="btn btn-red">
              📞 Call Our Brokers: {SITE.phone}
            </a>
            <Link href="/quote" className="btn btn-outline-white">
              📝 Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12 TEAM MEMBERS GRID ── */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">

          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-tag">Brandon Office Team</span>
            <h2 className="section-title">Meet the Ficek Team</h2>
          </div>

          <div className="grid-4" style={{ gap: '28px' }}>
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="card card-red-top"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#fafafa',
                  padding: '28px 20px',
                  borderRadius: '12px',
                }}
              >
                {/* Avatar Image or Initial Circle */}
                <div style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #dc2626 0%, #09090b 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  fontWeight: 900,
                  marginBottom: '16px',
                  boxShadow: '0 4px 14px rgba(220,38,38,0.25)',
                  border: '3px solid #ffffff',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill quality={100} sizes="250px" style={{ objectFit: 'cover' }} />
                  ) : (
                    member.name.split(' ').map(n => n[0]).join('').slice(0, 2)
                  )}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#09090b',
                  marginBottom: '4px',
                  lineHeight: 1.25,
                }}>
                  {member.name}
                </h3>

                <div style={{
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#dc2626',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  {member.title}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help Card */}
          <div style={{
            marginTop: '64px',
            background: '#09090b',
            color: '#ffffff',
            padding: '36px',
            borderRadius: '12px',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px', color: '#ffffff' }}>
                Looking to speak with a licensed Brandon broker?
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '15px', margin: 0, maxWidth: '600px' }}>
                Visit us in person at 1525 18th Street or 1439 1st Street in Brandon, MB, or give our office a call today.
              </p>
            </div>
            <Link href="/contact" className="btn btn-red" style={{ padding: '14px 28px' }}>
              Contact Brandon Office →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
