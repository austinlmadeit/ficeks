import { SITE } from '@/lib/data';

export const metadata = {
  title: 'Location | Ficek Insurance Brandon MB',
  description: `Visit Ficek Insurance at ${SITE.address.full}. Office hours Monday to Friday, 9am to 5pm. Call ${SITE.phone}.`,
};

export default function LocationsPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
      }}>
        <div className="container">
          <span className="section-label">Find Us</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            Our Brandon Location
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.7 }}>
            We're located in the heart of Brandon, Manitoba. Stop in and see us — no appointment needed.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '32px' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { label: '📍 Address', content: SITE.address.full },
                  { label: '📞 Phone', content: SITE.phone, href: SITE.phoneHref },
                  { label: '✉️ Email', content: SITE.email, href: `mailto:${SITE.email}` },
                  { label: '🕐 Hours', content: 'Monday – Friday: 9:00 AM – 5:00 PM\nSaturday & Sunday: Closed' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: '16px', fontWeight: 600, color: 'var(--accent2)' }}>{item.content}</a>
                    ) : (
                      <p style={{ fontSize: '15px', color: 'var(--text)', whiteSpace: 'pre-line', lineHeight: 1.65 }}>{item.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🗺️</div>
              <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
                {SITE.address.full}<br />Brandon, MB
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
