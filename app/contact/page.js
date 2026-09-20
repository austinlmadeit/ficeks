import { SITE, OFFICES } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us | Ficek Insurance Brandon MB',
  description: `Contact licensed independent brokers at Ficek Insurance in Brandon, Manitoba. 1439 1st Street (204-571-1777) and 1525 18th Street (204-728-1957). Email: ${SITE.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <section style={{
        background: '#09090b',
        color: '#ffffff',
        borderBottom: '4px solid #dc2626',
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
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
            marginBottom: '16px',
          }}>
            📍 Two Brandon Locations to Serve You Better
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '16px', color: '#ffffff' }}>
            Questions? We&apos;d love to lend a hand.
          </h1>
          <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px', lineHeight: 1.65 }}>
            Have a question about your coverage, need an Autopac renewal, or want to make a policy change? Contact our local Brandon broker team today.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc', padding: '64px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '56px', alignItems: 'start' }}>
            {/* Interactive Contact Form Component */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '36px',
              border: '1px solid #e4e4e7',
              boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
                Send Us a Direct Message
              </h2>
              <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '24px' }}>
                Fill out the form below and one of our licensed insurance brokers will follow up promptly.
              </p>
              <ContactForm />
            </div>

            {/* Brandon Office Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#09090b', marginBottom: '4px' }}>
                Office Information
              </h2>

              {OFFICES.map((office) => (
                <div key={office.id} className="card card-red-top" style={{ background: '#ffffff', padding: '24px', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#dc2626', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {office.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#71717a' }}>
                      {office.crossStreet}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#09090b', marginBottom: '6px' }}>
                    {office.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '12px' }}>
                    {office.full}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                    <div>
                      <strong>Phone: </strong>
                      <a href={office.phoneHref} style={{ color: '#dc2626', fontWeight: 800, textDecoration: 'none' }}>
                        {office.phone}
                      </a>
                    </div>
                    <div>
                      <strong>Hours: </strong>
                      <span style={{ color: '#09090b' }}>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* General Inquiries Card */}
              <div className="card" style={{ background: '#ffffff', padding: '24px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#09090b', marginBottom: '10px' }}>
                  Direct Email
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                  <div>
                    <strong>General Email: </strong>
                    <a href={`mailto:${SITE.email}`} style={{ color: '#dc2626', fontWeight: 700, textDecoration: 'none' }}>
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
