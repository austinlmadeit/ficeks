import Link from 'next/link';
import HeroQuoteWidget from '@/components/HeroQuoteWidget';
import CarrierGrid from '@/components/CarrierGrid';
import { SITE, SERVICES } from '@/lib/data';

export const metadata = {
  title: 'Ficek Insurance | Home, Auto, Farm & Business Insurance Brandon MB',
  description:
    'Welcome to Ficek Insurance. Family-owned independent insurance brokerage serving Brandon, Manitoba since 1946. Autopac MPI, home, commercial, and farm coverage.',
};

export default function HomePage() {
  return (
    <>
      {/* ── SANDBOX.CA INSPIRED HERO BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
        color: '#ffffff',
        paddingTop: '64px',
        paddingBottom: '80px',
        borderBottom: '4px solid #dc2626',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Red accent glow */}
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
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Left Headline */}
            <div>
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
                🇨🇦 Brandon, MB Independent Broker
              </div>

              <h1 style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
                Let our Family Protect Your Family, Like Family.
              </h1>

              <p style={{
                fontSize: '19px',
                color: '#a1a1aa',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '540px',
              }}>
                Whether you're looking for MPI Autopac top-ups, farm equipment coverage, or commercial liability, Ficek Insurance is here for you.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={SITE.phoneHref} className="btn btn-red" style={{ padding: '16px 28px', fontSize: '15px' }}>
                  📞 Call Broker: {SITE.phone}
                </a>
                <Link href="/about/locations" className="btn btn-outline-white" style={{ padding: '16px 28px', fontSize: '15px' }}>
                  📍 Find Our Office
                </Link>
              </div>
            </div>

            {/* Right Interactive Quote Tool Widget */}
            <div>
              <HeroQuoteWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── SANDBOX.CA UTILITY STRIP (Find Broker, Claim, Quote) ── */}
      <section style={{ background: '#f4f4f5', borderBottom: '1px solid #e4e4e7', padding: '32px 0' }}>
        <div className="container">
          <div className="grid-3">
            {[
              {
                icon: '🔍',
                title: 'Find a Licensed Broker',
                desc: 'Talk to Rod, Heather, Danon, or Sabrina Ficek at our Brandon office.',
                linkText: 'Meet Our Team →',
                href: '/about/our-team',
              },
              {
                icon: '📋',
                title: 'Get a Free Quote',
                desc: 'Compare rates across top Canadian insurance providers in minutes.',
                linkText: 'Start Quote Form →',
                href: '/quote',
              },
              {
                icon: '🚨',
                title: '24/7 Emergency Claims Center',
                desc: 'Filing a claim? Access direct carrier phone hotlines and accident checklists.',
                linkText: 'Claims Hotline Hub →',
                href: '/claims',
              },
            ].map((u, i) => (
              <Link key={i} href={u.href} className="card" style={{ display: 'block', textDecoration: 'none', background: '#ffffff' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{u.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', color: '#09090b' }}>{u.title}</h3>
                <p style={{ fontSize: '14px', color: '#71717a', lineHeight: 1.6, marginBottom: '16px' }}>{u.desc}</p>
                <span style={{ fontSize: '13px', color: '#dc2626', fontWeight: 800 }}>{u.linkText}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SANDBOX.CA CATEGORY MEGA HUB (Auto, Property, Commercial, Farm) ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <span className="section-tag">Insurance Categories</span>
            <h2 className="section-title">Explore Coverage Options</h2>
            <p className="section-sub mx-auto">
              Select a category below to learn how we protect your vehicle, home, farm operation, or commercial business.
            </p>
          </div>

          {/* 4 Main Columns matching Sandbox.ca */}
          <div className="grid-4">
            {/* Auto Insurance */}
            <div style={{
              borderLeft: '4px solid #dc2626',
              paddingLeft: '20px',
              paddingRight: '12px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Auto Insurance
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Auto & Vehicles</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, marginBottom: '20px' }}>
                Protect your vehicles and everything that moves with Autopac & private coverage.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Autopac (MPI)', href: '/services/auto-insurance' },
                  { name: 'Car & Truck Coverage', href: '/services/auto-insurance' },
                  { name: 'Commercial Vehicles', href: '/services/business-insurance' },
                  { name: 'Motorcycles & ATVs', href: '/services/toys-bikes-orvs' },
                  { name: 'Boats & Watercraft', href: '/services/boats-marine' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} style={{ fontSize: '14px', fontWeight: 700, color: '#09090b', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {item.name} <span style={{ color: '#dc2626' }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Insurance */}
            <div style={{
              borderLeft: '4px solid #dc2626',
              paddingLeft: '20px',
              paddingRight: '12px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Property Insurance
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Home & Property</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, marginBottom: '20px' }}>
                Protect your house, condo, belongings, and personal liability.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Homeowners Insurance', href: '/services/home-insurance' },
                  { name: 'Condo & Life Lease', href: '/services/condo-insurance' },
                  { name: 'Tenants & Renters', href: '/services/home-insurance' },
                  { name: 'Cabins & Cottages', href: '/services/home-insurance' },
                  { name: 'Landlord & Rental Property', href: '/services/business-insurance' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} style={{ fontSize: '14px', fontWeight: 700, color: '#09090b', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {item.name} <span style={{ color: '#dc2626' }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Insurance */}
            <div style={{
              borderLeft: '4px solid #dc2626',
              paddingLeft: '20px',
              paddingRight: '12px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Commercial Insurance
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Business Coverage</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, marginBottom: '20px' }}>
                Grow your Manitoba business while keeping your assets and operations protected.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Contractors Package', href: '/services/business-insurance' },
                  { name: 'Commercial Property', href: '/services/business-insurance' },
                  { name: 'General Liability', href: '/services/business-insurance' },
                  { name: 'Commercial Auto Fleet', href: '/services/business-insurance' },
                  { name: 'Business Interruption', href: '/services/business-insurance' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} style={{ fontSize: '14px', fontWeight: 700, color: '#09090b', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {item.name} <span style={{ color: '#dc2626' }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Farm Insurance */}
            <div style={{
              borderLeft: '4px solid #dc2626',
              paddingLeft: '20px',
              paddingRight: '12px',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                Farm Insurance
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Farm & Agriculture</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, marginBottom: '20px' }}>
                Specialized coverage for Manitoba farm dwellings, machinery, and agricultural ops.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Farm Dwelling & Structures', href: '/services/farm-insurance' },
                  { name: 'Farm Machinery & Equipment', href: '/services/farm-insurance' },
                  { name: 'Livestock & Grain', href: '/services/farm-insurance' },
                  { name: 'Agribusiness Liability', href: '/services/farm-insurance' },
                  { name: 'Farm Lifestyle Package', href: '/services/farm-insurance' },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} style={{ fontSize: '14px', fontWeight: 700, color: '#09090b', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {item.name} <span style={{ color: '#dc2626' }}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRIER PARTNER SHOWCASE GRID ── */}
      <CarrierGrid />

      {/* ── LOCAL BRAND STORY & TEAM ── */}
      <section className="section" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div>
              <span className="section-tag">About Ficek Insurance</span>
              <h2 className="section-title">Independent brokers. Family values. Since 1946.</h2>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '18px' }}>
                Ficek Insurance has been a fixture in Brandon, Manitoba for over 78 years. Founded on the principle of giving honest, independent advice, we are proud to serve generations of local families, farm owners, and business owners.
              </p>
              <p style={{ color: '#71717a', lineHeight: 1.75, marginBottom: '28px' }}>
                When you call Ficek Insurance, you don't get an automated phone tree or an anonymous call centre — you talk directly to Rod, Heather, Danon, or Sabrina Ficek.
              </p>
              <div style={{ display: 'flex', gap: '14px' }}>
                <Link href="/about/our-team" className="btn btn-red">Meet Our Brokers →</Link>
                <Link href="/about/locations" className="btn btn-outline">Our Location</Link>
              </div>
            </div>

            {/* Team Showcase */}
            <div style={{ background: '#09090b', color: '#ffffff', borderRadius: '16px', padding: '36px', border: '2px solid #dc2626' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px', color: '#ffffff' }}>
                The Ficek Broker Team
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'Rod Ficek', role: 'Broker / Owner', exp: 'Decades of MB insurance leadership' },
                  { name: 'Heather Ficek', role: 'Broker / Owner', exp: 'Personal & commercial specialist' },
                  { name: 'Danon Ficek', role: 'Insurance Broker', exp: 'Next gen family broker' },
                  { name: 'Sabrina Ficek', role: 'Insurance Broker', exp: 'Personal lines & client advocate' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#18181b', padding: '12px 16px', borderRadius: '8px', border: '1px solid #27272a' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dc2626', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '14px' }}>
                      {m.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '15px', color: '#ffffff' }}>{m.name}</div>
                      <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: 700 }}>{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CALLOUT BANNER ── */}
      <section style={{
        background: '#dc2626',
        color: '#ffffff',
        padding: '64px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
            Ready to find your best insurance rate?
          </h2>
          <p style={{ fontSize: '18px', color: '#fecaca', marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px' }}>
            Talk to a licensed Brandon broker today or submit a quick quote request online.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-black" style={{ fontSize: '16px', padding: '16px 32px' }}>
              Request a Free Quote
            </Link>
            <a href={SITE.phoneHref} className="btn btn-outline-white" style={{ fontSize: '16px', padding: '16px 32px' }}>
              📞 Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
