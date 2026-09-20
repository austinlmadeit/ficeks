import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Insurance Coverage Options Brandon MB',
  description: 'Ficek Insurance offers auto, home, commercial, farm, life, travel and more in Brandon, Manitoba. Independent brokers — we shop the market for you.',
};

export default function ServicesPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="section-label">What We Offer</span>
          <h1 className="float-in delay-100" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            Insurance for every part of your life
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            As an independent broker, we offer coverage for all of life&apos;s unique needs and we compare rates with leading carriers to find you the best deal.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card" style={{ display: 'block' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{service.icon}</div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{service.title}</h2>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '20px' }}>{service.summary}</p>
                <span style={{ fontSize: '13px', color: 'var(--accent2)', fontWeight: 600 }}>View coverage details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
