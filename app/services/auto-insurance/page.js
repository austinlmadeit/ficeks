import Link from 'next/link';
import { SITE } from '@/lib/data';

export const metadata = {
  title: 'Auto Insurance (MPI Autopac) Brandon MB | Ficek Insurance',
  description:
    'Manitoba Public Insurance (MPI Autopac) & private extension coverage in Brandon, MB. Lower deductibles, liability up to $10M, rental coverage, and replacement cost. Call 204-571-1777.',
};

export default function AutoInsurancePage() {
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
          background: 'radial-gradient(circle, rgba(220,38,38,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>
              ← All Insurance Services
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '44px' }}>🚗</span>
              <span style={{ background: '#dc2626', color: '#ffffff', fontSize: '12px', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>
                MPI Autopac Partner
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}>
              Manitoba Auto Insurance (MPI & Extension Coverage)
            </h1>

            <p style={{
              fontSize: '20px',
              color: '#a1a1aa',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '680px',
            }}>
              Basic Autopac is mandatory in Manitoba — but extension coverage protects you against high deductibles, liability claims, and rental vehicle costs. Ficek Insurance brokers find your ideal setup.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={SITE.phoneHref} className="btn btn-red" style={{ padding: '16px 32px', fontSize: '16px' }}>
                📞 Call Brandon Office: {SITE.phone}
              </a>
              <a href="#quote-form" className="btn btn-outline-white" style={{ padding: '16px 32px', fontSize: '16px' }}>
                Request Autopac Quote ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BASIC VS EXTENSION EXPLANATION ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* Basic Autopac Card */}
            <div className="card" style={{ borderTop: '4px solid #09090b', background: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Mandatory Manitoba Coverage
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '16px', color: '#09090b' }}>
                Basic Autopac (MPI)
              </h2>
              <p style={{ color: '#71717a', lineHeight: 1.7, marginBottom: '24px' }}>
                By Manitoba law, all registered vehicles must carry Basic Autopac provided by Manitoba Public Insurance (MPI).
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Basic Deductible', val: '$750 Standard Deductible' },
                  { label: 'Third-Party Liability', val: '$500,000 Maximum Limit' },
                  { label: 'Personal Injury (PIPP)', val: 'Basic Income Replacement & Medical' },
                  { label: 'All-Perils Coverage', val: 'Basic Collision & Comprehensive' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e4e4e7', fontSize: '14px' }}>
                    <span style={{ fontWeight: 700, color: '#09090b' }}>{item.label}</span>
                    <span style={{ color: '#71717a' }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Extension Coverage Card */}
            <div className="card card-red-top" style={{ background: '#ffffff', boxShadow: '0 12px 36px rgba(220,38,38,0.1)' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Recommended Upgrades
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '16px', color: '#09090b' }}>
                MPI Extension Coverage
              </h2>
              <p style={{ color: '#71717a', lineHeight: 1.7, marginBottom: '24px' }}>
                For a few extra dollars a month, extension coverage lowers out-of-pocket expenses when accidents or vandalism occur.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Lower Deductibles', val: 'Reduce deductible down to $500, $300, $200, or $100' },
                  { label: 'Higher Liability Limits', val: 'Increase Third-Party Liability up to $10 Million' },
                  { label: 'Auto Loss-of-Use', val: 'Rental vehicle coverage while your car is repaired' },
                  { label: 'New Vehicle Protection', val: 'Replacement cost protection against depreciation' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #e4e4e7', fontSize: '14px' }}>
                    <span style={{ fontWeight: 800, color: '#dc2626' }}>{item.label}</span>
                    <span style={{ color: '#09090b', fontWeight: 600 }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXTENSION OPTIONS DETAILED GRID ── */}
      <section className="section" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-tag">Coverage Options</span>
            <h2 className="section-title">Popular Autopac Add-Ons & Upgrades</h2>
            <p className="section-sub mx-auto">
              Our brokers customize your Autopac policy to ensure you aren't left paying out-of-pocket after a claim.
            </p>
          </div>

          <div className="grid-3">
            {[
              {
                icon: '💰',
                title: 'Reduced Deductible Options',
                desc: 'Lower your out-of-pocket deductible from $750 down to $500, $300, $200, $100, or $200 Plus (which waives deductibles for animal hits, glass repairs, and vandalism).',
              },
              {
                icon: '🛡️',
                title: 'Increased Liability Coverage',
                desc: 'If an accident occurs out-of-province or involves severe property damage, basic $500k liability is rarely enough. Upgrade your liability protection to $1M, $2M, $5M, or $10M.',
              },
              {
                icon: '🔑',
                title: 'Auto Loss-of-Use (Rental Car)',
                desc: 'Covers rental vehicle, taxi, or public transit expenses while your primary vehicle is undergoing claim repairs or being replaced after theft/collision.',
              },
              {
                icon: '✨',
                title: 'New Vehicle Protection',
                desc: 'Protects new vehicles against inflation and depreciation. If your new vehicle is written off in a claim, you receive full replacement cost rather than depreciated market value.',
              },
              {
                icon: '🚙',
                title: 'Commercial & Fleet Auto',
                desc: 'Specialized Autopac policies for business vehicles, contractor work trucks, delivery vans, and commercial fleet operations in Manitoba.',
              },
              {
                icon: '🏍️',
                title: 'Recreational & Seasonal Vehicles',
                desc: 'Coverage options for motorcycles, snowmobiles, ATVs, motorhomes, travel trailers, and classic vehicles.',
              },
            ].map((option, i) => (
              <div key={i} className="card card-red-top" style={{ background: '#ffffff' }}>
                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{option.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>{option.title}</h3>
                <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.65 }}>{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY RENEW WITH FICEK INSURANCE ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">The Ficek Difference</span>
              <h2 className="section-title">Why process your Autopac renewal with Ficek Insurance?</h2>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '20px' }}>
                Many drivers assume all Autopac outlets are the same. However, as an independent broker, Ficek Insurance provides expert advice on combining basic Autopac with private extension policies to give you better protection at a lower total price.
              </p>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '28px' }}>
                Our licensed Brandon team — Rod, Heather, Danon, and Sabrina — take the time to review your driving history, vehicle usage, and family needs.
              </p>
              <a href={SITE.phoneHref} className="btn btn-red">
                📞 Call Our Autopac Desk: {SITE.phone}
              </a>
            </div>

            <div style={{ background: '#09090b', color: '#ffffff', borderRadius: '16px', padding: '40px', border: '3px solid #dc2626' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px', color: '#ffffff' }}>
                Autopac Services Available:
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '15px' }}>
                {[
                  'Annual Autopac Policy Renewals',
                  'New Vehicle Registration & Transfer of Ownership',
                  'MPI Extension Coverage Upgrades',
                  'Driver License Renewals & Identity Verification',
                  'Temporary Registration & In-Transit Permits',
                  'Claims Reporting & Broker Guidance',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa' }}>
                    <span style={{ color: '#dc2626', fontWeight: 900 }}>✓</span>
                    <strong style={{ color: '#ffffff' }}>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTOPAC QUOTE FORM ── */}
      <section id="quote-form" className="section" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="section-tag">Quick Request</span>
            <h2 className="section-title">Request an Auto Insurance Review</h2>
            <p className="section-sub mx-auto">
              Fill out the form below and one of our Brandon brokers will contact you with optimal Autopac extension options.
            </p>
          </div>

          <form action={`mailto:${SITE.email}`} method="post" encType="text/plain" className="card" style={{ padding: '40px', background: '#ffffff' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label className="form-label" htmlFor="a-name">Full Name *</label>
                <input id="a-name" name="name" type="text" className="form-input" placeholder="Your full name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="a-phone">Phone Number *</label>
                <input id="a-phone" name="phone" type="tel" className="form-input" placeholder="204-xxx-xxxx" required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label className="form-label" htmlFor="a-email">Email Address</label>
                <input id="a-email" name="email" type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div>
                <label className="form-label" htmlFor="a-vehicle">Vehicle Year, Make & Model</label>
                <input id="a-vehicle" name="vehicle" type="text" className="form-input" placeholder="e.g. 2022 Ford F-150" />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label" htmlFor="a-details">What coverage are you interested in?</label>
              <textarea id="a-details" name="details" className="form-textarea" placeholder="e.g. Lower deductible options, liability increase, new car replacement cost..." style={{ minHeight: '120px' }} />
            </div>

            <button type="submit" className="btn btn-red" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
              Submit Auto Quote Request →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
