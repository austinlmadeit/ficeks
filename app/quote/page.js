import { SITE } from '@/lib/data';
import QuoteWizard from '@/components/QuoteWizard';

export const metadata = {
  title: 'Request a Free Insurance Quote | Ficek Insurance Brandon MB',
  description: 'Request a free insurance quote from licensed independent brokers at Ficek Insurance in Brandon, Manitoba. Compare rates across 18+ insurance carriers for Auto MPI, Home, Commercial, Farm, and Life.',
};

export default function QuotePage() {
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
            ⚡ Free Independent Broker Comparison
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '16px', color: '#ffffff' }}>
            Request Your Free Insurance Quote
          </h1>
          <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '640px', lineHeight: 1.65 }}>
            Because Ficek Insurance is independent, we don't work for one insurance company — we shop multiple top Canadian carriers to find you the strongest coverage at the most competitive price.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#f8fafc', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 0.8fr', gap: '48px', alignItems: 'start' }}>
            {/* Interactive 3-Step Wizard */}
            <div>
              <QuoteWizard />
            </div>

            {/* Support Info & Broker Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Phone Card */}
              <div className="card card-red-top" style={{ background: '#ffffff', padding: '28px', borderRadius: '12px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#dc2626', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Need Immediate Help?
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px', color: '#09090b' }}>
                  Talk to a Brandon Broker Now
                </h3>
                <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6, marginBottom: '20px' }}>
                  Have an urgent Autopac renewal or commercial policy deadline? Give our team a direct call during business hours.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={SITE.phoneHref}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#fef2f2',
                      border: '1.5px solid #fecaca',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#dc2626',
                      fontWeight: 800,
                      fontSize: '16px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>📞</span>
                    <span>1st Street (Main): 204-571-1777</span>
                  </a>
                  <a
                    href="tel:+12047281957"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      background: '#f4f4f5',
                      border: '1.5px solid #e4e4e7',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#09090b',
                      fontWeight: 800,
                      fontSize: '15px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>📍</span>
                    <span>18th Street Office: 204-728-1957</span>
                  </a>
                </div>
              </div>

              {/* The Ficek Independent Advantage */}
              <div className="card" style={{ background: '#ffffff', padding: '28px', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '16px', color: '#09090b' }}>
                  Why Request a Quote with Ficek?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { title: '18+ Canadian Carriers', desc: 'We represent Sandbox Mutual, Red River Mutual, SGI Canada, and leading MGAs.' },
                    { title: 'Local Brandon Family Business', desc: 'Serving Westman drivers, homeowners, and businesses with authentic local roots since 1986.' },
                    { title: 'Claims Advocacy', desc: 'When you have a claim, our brokers guide you through the process and fight on your behalf.' },
                    { title: 'Zero Obligation or Pressure', desc: 'Our quotes are free and designed to educate you on real coverage differences.' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#dc2626', fontWeight: 900, fontSize: '15px' }}>✓</span>
                      <div>
                        <strong style={{ fontSize: '14px', color: '#09090b', display: 'block' }}>{item.title}</strong>
                        <span style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.4 }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
