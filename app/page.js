import Link from 'next/link';
import Image from 'next/image';
import HeroQuoteWidget from '@/components/HeroQuoteWidget';
import CarrierCarousel from '@/components/CarrierCarousel';
import ReviewCarousel from '@/components/ReviewCarousel';
import { SITE, SERVICES, TESTIMONIALS } from '@/lib/data';

export const metadata = {
  title: 'Ficek Insurance | Home, Auto, Farm & Business Insurance Brandon MB',
  description:
    'Welcome to Ficek Insurance. Family-owned independent insurance brokerage serving Brandon, Manitoba since 1986. Autopac MPI, home, commercial, and farm coverage.',
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

        <div className="hero-wrapper">
          <div className="hero-grid-3">
            {/* Left Hero Logo Emblem (aligned where user drew red box) */}
            <div className="hero-logo-box">
              <div className="hero-logo-card">
                <Image
                  src="/images/ficek.logo.jpg"
                  alt="Ficek Insurance Logo"
                  width={180}
                  height={180}
                  quality={100}
                  priority
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Middle Headline */}
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
                We are Ficek Insurance & We love what we do.
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

      {/* ── AUTO-SLIDING CARRIER LOGO CAROUSEL SLIDESHOW ── */}
      <CarrierCarousel />

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
                  { name: 'Sandbox Auto Insurance', href: '/services/auto-insurance' },
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
                  { name: 'Condo', href: '/services/condo-insurance' },
                  { name: 'Tenants & Renters', href: '/services/home-insurance' },
                  { name: 'Cabins & Cottages', href: '/services/home-insurance' },
                  { name: 'Landlord & Rental Property', href: '/services/business-insurance' },
                  { name: 'High-Value Homes', href: '/services/home-insurance' },
                  { name: 'Mobile Homes', href: '/services/home-insurance' },
                  { name: 'Vacant Property', href: '/services/home-insurance' },
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
              <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '8px' }}>Commercial & Business</h3>
              <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, marginBottom: '20px' }}>
                Grow your Manitoba business while keeping your assets and operations protected.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Commercial Property', href: '/services/business-insurance' },
                  { name: 'Commercial General Liability', href: '/services/business-insurance' },
                  { name: 'Commercial Auto Fleet', href: '/services/business-insurance' },
                  { name: 'Business Interruption', href: '/services/business-insurance' },
                  { name: 'Course of Construction', href: '/services/business-insurance' },
                  { name: 'Trades Packages', href: '/services/business-insurance' },
                  { name: 'Vacant Commercial Property', href: '/services/business-insurance' },
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
                Coverage for Manitoba farm dwellings, machinery, and agricultural ops.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Farm Dwelling & Structures', href: '/services/farm-insurance' },
                  { name: 'Farm Machinery & Equipment', href: '/services/farm-insurance' },
                  { name: 'Livestock & Grain', href: '/services/farm-insurance' },
                  { name: 'Comprehensive Farmer\'s/Agricultural Liability', href: '/services/farm-insurance' },
                  { name: 'Farm Lifestyle Package', href: '/services/farm-insurance' },
                  { name: 'Vacant Property', href: '/services/farm-insurance' },
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



      {/* ── 5-STAR CLIENT REVIEWS & COMMUNITY TRUST ── */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #e4e4e7' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <span className="section-tag">Client Testimonials</span>
            <h2 className="section-title">Trusted by Brandon & Westman Families</h2>
            <p className="section-sub mx-auto">
              Read how our independent brokers protect local drivers, homeowners, agricultural producers, and businesses.
            </p>
          </div>

          <ReviewCarousel reviews={TESTIMONIALS} />
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
            Speak to one of our friendly brokers today, or submit a quick quote request online.
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
