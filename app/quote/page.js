import { SITE, SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Request a Free Insurance Quote | Ficek Insurance Brandon MB',
  description: 'Request a free insurance quote from Ficek Insurance in Brandon, Manitoba. Home, auto, commercial, farm and more. Independent brokers — we shop the market for you.',
};

export default function QuotePage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
      }}>
        <div className="container">
          <span className="section-label">Free Consultation</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            Get your free quote
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.7 }}>
            Fill out the form and a Ficek Insurance broker will contact you within one business day. No pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            {/* Form */}
            <form action={`mailto:${SITE.email}`} method="post" encType="text/plain">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone" type="tel" className="form-input" placeholder="204-xxx-xxxx" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="type">Insurance Type *</label>
                <select id="type" name="type" className="form-select" required>
                  <option value="">Select insurance type...</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Multiple">Multiple types</option>
                  <option value="Not sure">Not sure — I need advice</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Tell us more (optional)</label>
                <textarea id="message" name="message" className="form-textarea" placeholder="Any details about your insurance needs..." />
              </div>
              <button type="submit" className="btn btn-cta" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                Send Quote Request →
              </button>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '12px', textAlign: 'center' }}>
                We respond within 1 business day. No spam, ever.
              </p>
            </form>

            {/* Info */}
            <div>
              <div className="card" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Prefer to call?</h3>
                <a href={SITE.phoneHref} style={{ fontSize: '22px', fontWeight: 800, color: 'var(--accent2)', fontFamily: 'var(--font-heading)' }}>{SITE.phone}</a>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '8px' }}>Monday – Friday, 9am to 5pm</p>
              </div>
              <div className="card">
                <h3 style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>Why quote with us?</h3>
                <ul className="coverage-list">
                  {[
                    'We compare multiple insurers — not just one',
                    'Independent advice — no sales pressure',
                    'Local Brandon expertise since 1946',
                    'Claims support when you need it most',
                  ].map((item, i) => (
                    <li key={i} className="coverage-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
