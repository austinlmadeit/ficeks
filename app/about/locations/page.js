import Link from 'next/link';
import { SITE, OFFICES } from '@/lib/data';

export const metadata = {
  title: 'Brandon MB Office Locations | Ficek Insurance',
  description: 'Visit Ficek Insurance in Brandon, Manitoba — 1439 1st Street (Main Office HQ) and 1525B 18th Street (18th St Branch). Interactive maps, hours, and contact info.',
};

export default function LocationsPage() {
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
            marginBottom: '20px',
          }}>
            📍 2 Brandon Offices (1st St & 18th St)
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Our Brandon Locations & Interactive Maps
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a1a1aa',
            maxWidth: '680px',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            Serving Brandon and Westman families across 2 local offices — <strong>1439 1st Street</strong> (Main Office) and <strong>1525B 18th Street</strong>. Walk-ins welcome for Autopac and insurance consultations!
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href={SITE.phoneHref} className="btn btn-red">
              📞 Direct Broker Line: {SITE.phone}
            </a>
            <Link href="/quote" className="btn btn-outline-white">
              📝 Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── DUAL OFFICE SHOWCASE & EMBEDDED MAPS ── */}
      <section className="section" style={{ background: '#ffffff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">

          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-tag">Brandon Offices</span>
            <h2 className="section-title">Two Locations to Serve You Better</h2>
          </div>

          {/* DUAL OFFICE CARDS GRID WITH EMBEDDED GOOGLE MAPS */}
          <div className="grid-2" style={{ gap: '36px' }}>
            {OFFICES.map((office) => (
              <div key={office.id} className="card card-red-top" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fafafa', padding: '28px', borderRadius: '12px' }}>
                <div>
                  {/* Badge & Cross Street */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 900,
                      color: office.id === 'main' ? '#ffffff' : '#dc2626',
                      background: office.id === 'main' ? '#dc2626' : 'rgba(220,38,38,0.1)',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}>
                      {office.badge}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#71717a' }}>
                      📍 {office.crossStreet}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginBottom: '10px' }}>
                    {office.name}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#71717a', lineHeight: 1.6, marginBottom: '20px' }}>
                    {office.desc}
                  </p>

                  {/* EMBEDDED GOOGLE MAP IFRAME */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    border: '2px solid #e4e4e7',
                  }}>
                    <iframe
                      title={office.name}
                      src={office.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Address, Phone & Hours Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', borderTop: '1px solid #e4e4e7', paddingTop: '16px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                        Street Address
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>
                        {office.full}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                        Phone Number
                      </div>
                      <a href={office.phoneHref} style={{ fontSize: '16px', fontWeight: 800, color: '#dc2626', textDecoration: 'none' }}>
                        📞 {office.phone}
                      </a>
                    </div>

                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                        Office Hours
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>
                        ⏰ {office.hours}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red"
                    style={{ flex: 1, textAlign: 'center', padding: '12px 18px', fontSize: '14px' }}
                  >
                    🗺️ Open Full Google Maps ↗
                  </a>
                  <a
                    href={office.phoneHref}
                    className="btn btn-outline"
                    style={{ padding: '12px 18px', fontSize: '14px' }}
                  >
                    📞 Call Office
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
