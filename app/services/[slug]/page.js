import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/data';
import { notFound } from 'next/navigation';
import SandboxQuoteForm from '@/components/SandboxQuoteForm';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
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

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const isAuto = service.slug === 'auto-insurance';

  const comparisonRows = [
    { feature: 'Third-Party Liability', mpi: '$500,000 Basic', sandbox: 'Up to $10 Million', sandboxWins: true },
    { feature: 'Collision Deductible', mpi: '$750 Standard', sandbox: '$500, $300, $200, or $100', sandboxWins: true },
    { feature: 'Glass / Rock Chip Repair', mpi: 'Subject to deductible', sandbox: '$0 Glass Deductible option', sandboxWins: true },
    { feature: 'Loss of Use / Rental Car', mpi: 'Basic daily limits', sandbox: 'Higher daily limits + worldwide rental', sandboxWins: true },
    { feature: 'New Vehicle Replacement', mpi: 'Limited (24 months)', sandbox: 'Up to 60-month replacement cost', sandboxWins: true },
    { feature: 'US & Out-of-Province Travel', mpi: 'Basic coverage only', sandbox: 'Extended liability protection', sandboxWins: true },
    { feature: 'Multi-Vehicle / Home Bundle', mpi: 'Not available', sandbox: 'Family bundle discounts', sandboxWins: true },
    { feature: 'Mandatory Manitoba Coverage', mpi: '✓ Required by law', sandbox: 'Layers on top of MPI (both needed)', sandboxWins: false },
  ];

  return (
    <>
      {/* HERO BANNER */}
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
          position: 'absolute', top: 0, right: 0,
          width: '500px', height: '500px',
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
            {isAuto ? (
              <a href="#sandbox-quote" className="btn btn-red" style={{ fontSize: '16px', padding: '16px 32px' }}>
                🚗 Get My Sandbox Mutual Quote →
              </a>
            ) : (
              <Link href="/quote" className="btn btn-red" style={{ fontSize: '16px', padding: '16px 32px' }}>
                Request a Free Quote for {service.title} →
              </Link>
            )}
            <a href={SITE.phoneHref} className="btn btn-outline-white" style={{ fontSize: '16px', padding: '16px 32px' }}>
              📞 Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* AUTOPAC EXPLANATION */}
      {isAuto && (
        <section className="section-sm" style={{ background: '#fafafa', borderBottom: '1px solid #e4e4e7' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-tag">How Manitoba Auto Insurance Works</span>
              <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px' }}>
                MPI Autopac is Mandatory. Sandbox Mutual Makes It Better.
              </h2>
              <p style={{ fontSize: '16px', color: '#71717a', lineHeight: 1.75 }}>
                Every registered Manitoba vehicle is required by law to carry <strong>Basic Autopac coverage through MPI</strong>. At Ficek Insurance, our licensed Brandon brokers handle your Autopac registration at either of our two offices — and then layer on a <strong>Sandbox Mutual Private Auto Extension</strong> to fill the significant gaps that MPI alone leaves behind.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SANDBOX vs MPI COMPARISON MATRIX */}
      {isAuto && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="section-tag">Coverage Comparison</span>
              <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '14px' }}>
                MPI Basic vs. <span style={{ color: '#dc2626' }}>Sandbox Mutual Extension</span>
              </h2>
              <p style={{ fontSize: '16px', color: '#71717a', maxWidth: '580px', margin: '0 auto' }}>
                See exactly where Sandbox Mutual fills the coverage gaps that Manitoba's basic Autopac leaves unprotected.
              </p>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '14px 20px', textAlign: 'left', background: '#f4f4f5', borderBottom: '2px solid #e4e4e7', fontWeight: 800, color: '#09090b', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Coverage Area
                    </th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', background: '#f4f4f5', borderBottom: '2px solid #e4e4e7', fontWeight: 800, color: '#71717a', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Basic MPI Autopac
                    </th>
                    <th style={{ padding: '14px 20px', textAlign: 'center', background: '#fef2f2', borderBottom: '2px solid #dc2626', fontWeight: 800, color: '#dc2626', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      🏆 Sandbox Mutual Extension
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f4f4f5' }}>
                      <td style={{ padding: '16px 20px', fontWeight: 700, color: '#09090b', background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                        {row.feature}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'center', color: '#71717a', background: i % 2 === 0 ? '#ffffff' : '#fafafa', fontSize: '14px' }}>
                        {row.mpi}
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'center', background: row.sandboxWins ? (i % 2 === 0 ? '#fff9f9' : '#fef5f5') : (i % 2 === 0 ? '#ffffff' : '#fafafa'), fontWeight: row.sandboxWins ? 700 : 500, color: row.sandboxWins ? '#dc2626' : '#71717a', fontSize: '14px' }}>
                        {row.sandboxWins && <span style={{ marginRight: '6px' }}>✅</span>}
                        {row.sandbox}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '24px', padding: '16px 20px', background: '#fef2f2', borderRadius: '10px', border: '1px solid #fecaca', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <span style={{ fontSize: '20px', flexShrink: 0 }}>💡</span>
              <p style={{ fontSize: '14px', color: '#09090b', lineHeight: 1.7, margin: 0 }}>
                <strong>Important:</strong> Sandbox Mutual Private Auto Extension works <em>alongside</em> your mandatory MPI Autopac — it does not replace it. Ficek Insurance brokers handle both your MPI registration and your Sandbox extension in one visit at our Brandon offices at <strong>1439 1st Street</strong> or <strong>1525 18th Street</strong>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3-STEP SANDBOX QUOTE LEAD CAPTURE */}
      {isAuto && (
        <section id="sandbox-quote" className="section" style={{ background: 'linear-gradient(135deg, #09090b 0%, #1c1c1f 100%)', borderTop: '4px solid #dc2626' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
              <div style={{ color: '#ffffff' }}>
                <span style={{ display: 'inline-block', background: '#dc2626', color: '#fff', fontWeight: 800, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '4px', marginBottom: '20px' }}>
                  Free Quote — No Obligation
                </span>
                <h2 style={{ fontSize: '36px', fontWeight: 900, lineHeight: 1.15, marginBottom: '18px' }}>
                  Get Your Sandbox Mutual Auto Quote from a Real Brandon Broker
                </h2>
                <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.75, marginBottom: '28px' }}>
                  Fill out this quick 3-step form and a licensed Ficek Insurance broker will personally contact you with your exact Sandbox Mutual coverage options and pricing — usually within 1 business day.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { icon: '🏆', text: 'Up to $10 Million Third-Party Liability' },
                    { icon: '🪟', text: '$0 Glass Deductible Options Available' },
                    { icon: '🚗', text: '60-Month New Vehicle Price Replacement' },
                    { icon: '🌎', text: 'Extended US & Out-of-Province Coverage' },
                    { icon: '🏠', text: 'Home + Auto Bundle Discount Available' },
                  ].map(({ icon, text }) => (
                    <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
                      <span style={{ fontSize: '15px', fontWeight: 600, color: '#d4d4d8' }}>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid #3f3f46' }}>
                  <div style={{ fontSize: '13px', color: '#71717a', marginBottom: '10px', fontWeight: 600 }}>
                    Prefer to talk right now?
                  </div>
                  <a href={SITE.phoneHref} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
                    📞 {SITE.phone}
                  </a>
                </div>
              </div>
              <div>
                <SandboxQuoteForm />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* COVERAGE HIGHLIGHTS */}
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
                <a href="#sandbox-quote" className="btn btn-red" style={{ justifyContent: 'center' }}>
                  Request a Free Quote
                </a>
                <a href={SITE.phoneHref} className="btn btn-outline" style={{ justifyContent: 'center' }}>
                  📞 Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED COVERAGE */}
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
