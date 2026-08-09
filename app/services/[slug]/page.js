import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} Brandon MB | Ficek Insurance`,
    description: `${service.summary} Contact licensed brokers at Ficek Insurance in Brandon, MB: 204-571-1777.`,
    openGraph: {
      title: `${service.title} | Ficek Insurance Brandon MB`,
      description: service.summary,
    },
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const isAuto = service.slug === 'auto-insurance';

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
          background: 'radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>
            ← All Insurance Categories
          </Link>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>{service.icon}</div>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 56px)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            {service.title}
          </h1>
          <p style={{ fontSize: '20px', color: '#a1a1aa', maxWidth: '640px', lineHeight: 1.65, marginBottom: '32px' }}>
            {service.summary}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-red" style={{ fontSize: '16px', padding: '16px 32px' }}>
              Request a Free Quote for {service.title} →
            </Link>
            <a href={SITE.phoneHref} className="btn btn-outline-white" style={{ fontSize: '16px', padding: '16px 32px' }}>
              📞 Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── AUTOPAC SPECIAL BREAKDOWN (IF AUTO) ── */}
      {isAuto && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="grid-2" style={{ alignItems: 'start' }}>
              <div className="card" style={{ borderTop: '4px solid #09090b', background: '#fafafa' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Mandatory Manitoba Protection
                </div>
                <h2 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '14px' }}>Basic Autopac (MPI)</h2>
                <p style={{ color: '#71717a', lineHeight: 1.65, marginBottom: '20px' }}>
                  Required by law for all registered Manitoba motor vehicles.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#09090b' }}>
                  <li><strong>Standard Deductible:</strong> $750 Basic Deductible</li>
                  <li><strong>Third-Party Liability:</strong> $500,000 Limit</li>
                  <li><strong>PIPP Injury Protection:</strong> Basic Income Replacement</li>
                </ul>
              </div>

              <div className="card card-red-top" style={{ background: '#ffffff', boxShadow: '0 12px 36px rgba(220,38,38,0.1)' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                  Recommended Upgrades
                </div>
                <h2 style={{ fontSize: '26px', fontWeight: 900, marginBottom: '14px' }}>MPI Extension Coverage</h2>
                <p style={{ color: '#71717a', lineHeight: 1.65, marginBottom: '20px' }}>
                  Protect yourself against high out-of-pocket expenses and rental car costs.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#09090b' }}>
                  <li><strong style={{ color: '#dc2626' }}>Reduced Deductibles:</strong> $500, $300, $200, $100, or $200 Plus</li>
                  <li><strong style={{ color: '#dc2626' }}>Increased Liability:</strong> Up to $10 Million Protection</li>
                  <li><strong style={{ color: '#dc2626' }}>Auto Loss-of-Use:</strong> Rental vehicle coverage during claims</li>
                  <li><strong style={{ color: '#dc2626' }}>New Vehicle Protection:</strong> Full replacement cost protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── COVERAGE HIGHLIGHTS ── */}
      <section className="section" style={{ background: isAuto ? '#fafafa' : '#ffffff', borderTop: '1px solid #e4e4e7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="section-tag">Key Protection</span>
              <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '28px' }}>
                Coverage Highlights
              </h2>
              <ul className="coverage-list">
                {service.coverageItems.map((item, i) => (
                  <li key={i} className="coverage-item" style={{ fontSize: '16px', fontWeight: 700, color: '#09090b' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card card-red-top" style={{ padding: '36px', background: '#ffffff' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px' }}>
                Why Quote with Ficek Insurance?
              </h3>
              <p style={{ color: '#71717a', fontSize: '15px', lineHeight: 1.65, marginBottom: '28px' }}>
                As an independent broker in Brandon, we shop multiple insurance markets to find you optimal coverage at competitive rates.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/quote" className="btn btn-red" style={{ justifyContent: 'center' }}>
                  Request a Free Quote
                </Link>
                <a href={SITE.phoneHref} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                  📞 Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED COVERAGE ── */}
      <section className="section-sm" style={{ background: '#ffffff', borderTop: '1px solid #e4e4e7' }}>
        <div className="container">
          <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '24px' }}>
            Other Popular Insurance Lines
          </h3>
          <div className="grid-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card card-red-top" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>{s.icon}</div>
                <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '6px', color: '#09090b' }}>{s.title}</div>
                <div style={{ fontSize: '13px', color: '#71717a' }}>{s.summary.slice(0, 85)}...</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
