import Link from 'next/link';
import { MPI_FORMS, SITE } from '@/lib/data';

export const metadata = {
  title: 'MPI Forms & Official Manitoba Documents | Ficek Insurance',
  description: 'Download official Manitoba Public Insurance (MPI) forms, Bill of Sale samples, Exclusive Use agreements, and RST tax refund applications.',
};

export default function MPIFormsPage() {
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
            📄 Official Manitoba Resources
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Manitoba Public Insurance (MPI) Forms & Downloads
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a1a1aa',
            maxWidth: '680px',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            Direct links to official live Manitoba Public Insurance forms, bill of sale samples, collector vehicle applications, and provincial RST tax refund documents.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://www.mpi.mb.ca/document-type/forms/" target="_blank" rel="noopener noreferrer" className="btn btn-red">
              🌐 Official MPI Forms Portal →
            </a>
            <a href={SITE.phoneHref} className="btn btn-outline-white">
              📞 Broker Support: {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMS GRID BY CATEGORY ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {MPI_FORMS.map((cat, idx) => (
              <div key={idx}>
                <div style={{ marginBottom: '24px', borderBottom: '2px solid #e4e4e7', paddingBottom: '12px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#09090b', marginBottom: '6px' }}>
                    {cat.category}
                  </h2>
                  <p style={{ color: '#71717a', fontSize: '15px' }}>{cat.desc}</p>
                </div>

                <div className="grid-2">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="card card-red-top" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fafafa' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                          <span style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', background: 'rgba(220,38,38,0.08)', padding: '3px 10px', borderRadius: '4px' }}>
                            {item.badge}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: '#09090b' }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6, marginBottom: '20px' }}>
                          {item.desc}
                        </p>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-red"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '14px' }}
                      >
                        📄 Download / Access Official Form ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── NEED HELP BOX ── */}
          <div className="card" style={{ marginTop: '64px', background: '#09090b', color: '#ffffff', padding: '36px', borderRadius: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px', color: '#ffffff' }}>
                  Need Help Completing Your MPI Documents?
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '15px', maxWidth: '600px' }}>
                  Our licensed brokers at 1525 18th Street in Brandon are happy to assist you with vehicle transfers, bill of sales, and Autopac top-up options.
                </p>
              </div>
              <Link href="/contact" className="btn btn-red" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Contact Ficek Office →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
