import { SITE } from '@/lib/data';

export const metadata = {
  title: 'Contact Us | Ficek Insurance Brandon MB',
  description: `Contact Ficek Insurance in Brandon, Manitoba. Phone: ${SITE.phone} | Email: ${SITE.email} | ${SITE.address.full}`,
};

export default function ContactPage() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)',
        borderBottom: '1px solid var(--border)',
        padding: '140px 0 80px',
      }}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px', marginBottom: '20px' }}>
            We're here to help
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '500px', lineHeight: 1.7 }}>
            Have a question? Want to review your current coverage? Reach out — we're always happy to talk.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
            {/* Contact form */}
            <form action={`mailto:${SITE.email}`} method="post" encType="text/plain">
              <h2 style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '28px' }}>Send us a message</h2>
              <div className="form-group">
                <label className="form-label" htmlFor="c-name">Name *</label>
                <input id="c-name" name="name" type="text" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-phone">Phone</label>
                <input id="c-phone" name="phone" type="tel" className="form-input" placeholder="204-xxx-xxxx" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-email">Email *</label>
                <input id="c-email" name="email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-message">Message *</label>
                <textarea id="c-message" name="message" className="form-textarea" placeholder="How can we help?" required style={{ minHeight: '160px' }} />
              </div>
              <button type="submit" className="btn btn-cta" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                Send Message →
              </button>
            </form>

            {/* Contact info */}
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '28px' }}>Contact details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { emoji: '📍', label: 'Address', content: SITE.address.full },
                  { emoji: '📞', label: 'Phone', content: SITE.phone, href: SITE.phoneHref, highlight: true },
                  { emoji: '✉️', label: 'Email', content: SITE.email, href: `mailto:${SITE.email}` },
                  { emoji: '🕐', label: 'Office Hours', content: 'Monday – Friday: 9:00 AM – 5:00 PM\nSaturday & Sunday: Closed' },
                ].map((item, i) => (
                  <div key={i} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontWeight: 600, color: item.highlight ? 'var(--accent2)' : 'var(--text)', fontSize: item.highlight ? '18px' : '15px' }}>
                          {item.content}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--text)', fontSize: '15px', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
