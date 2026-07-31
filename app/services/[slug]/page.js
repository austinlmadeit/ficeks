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
    title: `${service.title} Brandon MB`,
    description: `${service.summary} Contact Ficek Insurance in Brandon, MB at 204-571-1777.`,
    openGraph: {
      title: `${service.title} | Ficek Insurance — Brandon, MB`,
      description: service.summary,
    },
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
      }}>
        <div className="container">
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--muted)', fontSize: '14px', marginBottom: '24px' }}>
            ← All Insurance Types
          </Link>
          <div style={{ fontSize: '56px', marginBottom: '20px' }}>{service.icon}</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            {service.title}
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--muted)', maxWidth: '600px', lineHeight: 1.7, marginBottom: '32px' }}>
            {service.summary}
          </p>
          <Link href="/quote" className="btn btn-cta" style={{ fontSize: '16px', padding: '16px 32px' }}>
            Get a Quote for {service.title} →
          </Link>
        </div>
      </section>

      {/* Coverage details */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="section-label">What's Covered</span>
              <h2 style={{ fontSize: '32px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>
                Coverage highlights
              </h2>
              <ul className="coverage-list">
                {service.coverageItems.map((item, i) => (
                  <li key={i} className="coverage-item">{item}</li>
                ))}
              </ul>
            </div>
            <div className="card glass" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
                Get your best rate
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.65, marginBottom: '28px' }}>
                As an independent broker, we compare multiple insurers to find you the right coverage at the best price. Talk to a Ficek Insurance broker today.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link href="/quote" className="btn btn-cta" style={{ justifyContent: 'center' }}>
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

      {/* Other services */}
      <section className="section-sm" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
            Other coverage types
          </h3>
          <div className="grid-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card" style={{ display: 'block' }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{s.icon}</div>
                <div style={{ fontWeight: 600, marginBottom: '6px' }}>{s.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{s.summary.slice(0, 80)}...</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
