import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Independent Insurance Broker Brandon MB | Ficek Insurance',
  description:
    'Family-owned independent insurance brokerage in Brandon, Manitoba since 1946. Home, auto, commercial, farm and life insurance. Call 204-571-1777.',
};

function HeroBackground() {
  return (
    <svg
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="g1" cx="20%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#1a6ef5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1a6ef5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g2" cx="80%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g1)" />
      <rect width="100%" height="100%" fill="url(#g2)" />
      {/* Grid lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={`${(i + 1) * 8.33}%`} y1="0" x2={`${(i + 1) * 8.33}%`} y2="100%"
          stroke="#1a6ef5" strokeWidth="0.5" strokeOpacity="0.15" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`}
          stroke="#1a6ef5" strokeWidth="0.5" strokeOpacity="0.15" />
      ))}
    </svg>
  );
}

const stats = [
  { num: '78+', label: 'Years in Business', sub: 'Since 1946' },
  { num: '9', label: 'Insurance Types', sub: 'Personal & Commercial' },
  { num: '100%', label: 'Independent', sub: 'We fight for your rate' },
  { num: 'Brandon', label: 'Manitoba Local', sub: 'Community first' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--hero-bg)',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '96px',
      }}>
        <HeroBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <div className="badge badge-accent" style={{ marginBottom: '28px' }}>
              🏆 Brandon, MB's Independent Broker Since 1946
            </div>
            <h1 style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-1px',
              marginBottom: '28px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text)',
            }}>
              Insurance that works{' '}
              <span style={{ color: 'var(--accent2)' }}>for you</span>,
              not for the company.
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '560px',
            }}>
              As an independent brokerage, we shop multiple insurers to find you the best coverage at the best rate. Family-owned, Brandon-based, and on your side since {SITE.founded}.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/quote" className="btn btn-cta" style={{ fontSize: '16px', padding: '16px 32px' }}>
                Get a Free Quote →
              </Link>
              <a href={SITE.phoneHref} className="btn btn-outline" style={{ fontSize: '16px', padding: '16px 32px' }}>
                📞 {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ padding: '48px 24px' }}>
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'var(--accent2)', fontFamily: 'var(--font-heading)', letterSpacing: '-1px', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginTop: '8px' }}>{s.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-label">What We Cover</span>
            <h2 className="section-title">Everything you need, under one roof</h2>
            <p className="section-sub">
              From your car to your farm, we have the expertise to find the right coverage for every part of your life.
            </p>
          </div>
          <div className="grid-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card"
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{service.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>
                  {service.summary}
                </p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '20px', fontSize: '13px', color: 'var(--accent2)', fontWeight: 600 }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INDEPENDENT */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-label">Why Independent?</span>
            <h2 className="section-title">We work for you — not for one insurer</h2>
          </div>
          <div className="grid-3">
            {[
              {
                icon: '⚖️',
                title: 'We Shop the Market',
                desc: "Captive agents can only offer one company's products. We compare rates across multiple insurers to find your best option.",
              },
              {
                icon: '🏠',
                title: 'Local Brandon Experts',
                desc: 'We know Manitoba. From MPI requirements to prairie weather risks, we understand the coverage that matters here.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Values',
                desc: "Rod, Heather, Danon, and Sabrina Ficek are real people who live in your community. When you call, you know who you're talking to.",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section style={{
        padding: '96px 0',
        background: 'linear-gradient(135deg, #0a1428 0%, #0d1f3c 50%, #0a1428 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(26,110,245,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '20px', letterSpacing: '-0.5px' }}>
            Ready to protect what matters?
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
            Get a free, no-obligation quote in minutes. Our brokers are ready to find your best coverage.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-cta" style={{ fontSize: '16px', padding: '16px 36px' }}>
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ fontSize: '16px', padding: '16px 36px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container">
          <div className="grid-4">
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>📍 Address</div>
              <div style={{ fontSize: '14px', color: 'var(--text)' }}>{SITE.address.full}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>📞 Phone</div>
              <a href={SITE.phoneHref} style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent2)' }}>{SITE.phone}</a>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>✉️ Email</div>
              <a href={`mailto:${SITE.email}`} style={{ fontSize: '14px', color: 'var(--muted)' }}>{SITE.email}</a>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>🕐 Hours</div>
              <div style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.7 }}>Mon–Fri: 9am – 5pm<br />Weekends: Closed</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
