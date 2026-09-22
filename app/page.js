import Link from 'next/link';
import Image from 'next/image';
import HeroQuoteWidget from '@/components/HeroQuoteWidget';
import CarrierCarousel from '@/components/CarrierCarousel';
import ReviewCarousel from '@/components/ReviewCarousel';
import { SITE, SERVICES, TESTIMONIALS, OFFICES } from '@/lib/data';

export const metadata = {
  title: 'Ficek Insurance | Home, Auto, Farm & Business Insurance Brandon MB',
  description:
    'Welcome to Ficek Insurance. Family-owned independent insurance brokerage serving Brandon, Manitoba since 1986. Autopac MPI, home, commercial, and farm coverage.',
};

export default function HomePage() {
  return (
    <>
      {/* ── FRONT & CENTER: BRANDON LOCATIONS & INTERACTIVE MAPS ── */}
      <section id="locations" className="section" style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        paddingTop: '64px',
        paddingBottom: '72px',
      }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px', maxWidth: '820px', margin: '0 auto 48px' }}>
            <div className="float-in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '9999px',
              background: '#dc2626',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(220, 38, 38, 0.25)',
            }}>
              Now Open Across Two Brandon Offices
            </div>
            <h2 className="section-title float-in delay-100" style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', marginBottom: '16px' }}>
              Two Locations in Brandon: Visit Our New Space!
            </h2>
            <p className="section-sub mx-auto float-in delay-200" style={{ fontSize: '17px', color: '#475569', lineHeight: 1.6 }}>
              We’ve expanded to serve you better! Visit our brand new 18th Street location or our established 1st Street headquarters for Autopac renewals, driver licensing, and full-service insurance.
            </p>
          </div>

          {/* DUAL LOCATIONS GRID */}
          <div className="grid-2" style={{ gap: '32px', alignItems: 'stretch' }}>
            {/* 1525B 18th Street Office - HIGHLIGHTED AS OUR NEW SPACE */}
            <div className="location-showcase-card float-in delay-250">
              {/* Eye-catching Top Ribbon */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: '#dc2626',
                color: '#ffffff',
                padding: '6px 20px',
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                borderBottomLeftRadius: '12px',
                boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
              }}>
                OUR NEW LOCATION
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 900,
                    color: '#ffffff',
                    background: '#dc2626',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Brand New Space
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748b' }}>
                    📍 18th Street (Between Humpty's & South End Service)
                  </span>
                </div>

                <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
                  1525B 18th Street Office
                </h3>

                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  <strong style={{ color: '#dc2626' }}>We just opened our new location!</strong> Come check out our fresh, modern new space. Enjoy extended evening hours until 7:00 PM on weekdays and Saturday hours for fast Autopac renewals, driver licensing, and friendly broker service.
                </p>

                {/* Embedded Interactive Google Map */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '250px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid #cbd5e1',
                }}>
                  <iframe
                    title="1525B 18th Street Office - New Location Map"
                    src="https://maps.google.com/maps?q=1525B%2018th%20Street%20Brandon%20MB%20R7A%205A9&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Office Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Street Address
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>
                      1525B 18th Street, Brandon, MB R7A 5A9
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Direct Phone
                    </div>
                    <a href="tel:+12047281957" style={{ fontSize: '16px', fontWeight: 800, color: '#dc2626', textDecoration: 'none' }}>
                      📞 204-728-1957
                    </a>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Office Hours (Extended Evenings & Saturdays!)
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>
                      Mon – Fri: 9:00 AM – 7:00 PM <span style={{ color: '#dc2626', fontWeight: 800 }}>(Open Late!)</span> | Sat: 10:00 AM – 5:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1525B+18th+Street+Brandon+MB+R7A+5A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-red"
                  style={{ flex: '1 1 auto', justifyContent: 'center' }}
                >
                  📍 Get Directions to 18th St
                </a>
                <a
                  href="tel:+12047281957"
                  className="btn btn-black"
                  style={{ flex: '1 1 auto', justifyContent: 'center' }}
                >
                  📞 Call 204-728-1957
                </a>
              </div>
            </div>

            {/* 1439 1st Street Office - MAIN HEADQUARTERS */}
            <div className="location-showcase-card float-in delay-350">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 900,
                    color: '#ffffff',
                    background: '#09090b',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Main Office HQ
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748b' }}>
                    📍 1st St & Richmond Avenue
                  </span>
                </div>

                <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
                  1439 1st Street Office
                </h3>

                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  Our established main Brandon headquarters. Serving the community since 1986 with full Autopac registration, driver licensing, personal property, commercial fleet, and agricultural insurance.
                </p>

                {/* Embedded Interactive Google Map */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '250px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  border: '1px solid #cbd5e1',
                }}>
                  <iframe
                    title="1439 1st Street Office - Main HQ Map"
                    src="https://maps.google.com/maps?q=1439%201st%20Street%20Brandon%20MB%20R7A%206Z4&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Office Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Street Address
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#09090b' }}>
                      1439 1st Street, Brandon, MB R7A 6Z4
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Direct Phone
                    </div>
                    <a href="tel:+12045711777" style={{ fontSize: '16px', fontWeight: 800, color: '#dc2626', textDecoration: 'none' }}>
                      📞 204-571-1777
                    </a>
                  </div>

                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
                      Office Hours
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#09090b' }}>
                      Monday – Friday: 9:00 AM – 5:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=1439+1st+Street+Brandon+MB+R7A+6Z4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-red"
                  style={{ flex: '1 1 auto', justifyContent: 'center' }}
                >
                  📍 Get Directions to 1st St
                </a>
                <a
                  href="tel:+12045711777"
                  className="btn btn-black"
                  style={{ flex: '1 1 auto', justifyContent: 'center' }}
                >
                  📞 Call 204-571-1777
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="hero-logo-box float-in-scale delay-150">
              <div className="hero-logo-card">
                <Image
                  src="/images/ficek.logo.jpg"
                  alt="Ficek Insurance Logo"
                  width={230}
                  height={230}
                  quality={100}
                  priority
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Middle Headline */}
            <div>
              <div className="float-in-down delay-100" style={{
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

              <h1 className="float-in delay-200" style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}>
                We are Ficek Insurance & We love what we do.
              </h1>

              <p className="float-in delay-300" style={{
                fontSize: '19px',
                color: '#a1a1aa',
                lineHeight: 1.65,
                marginBottom: '32px',
                maxWidth: '540px',
              }}>
                Whether you're looking for MPI Autopac top-ups, farm equipment coverage, or commercial liability, Ficek Insurance is here for you.
              </p>

              <div className="float-in delay-400" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href={SITE.phoneHref} className="btn btn-red" style={{ padding: '16px 28px', fontSize: '15px' }}>
                  📞 Call Broker: {SITE.phone}
                </a>
                <a href="#locations" className="btn btn-outline-white" style={{ padding: '16px 28px', fontSize: '15px' }}>
                  📍 View Office Maps ↑
                </a>
              </div>
            </div>

            {/* Right Interactive Quote Tool Widget */}
            <div className="float-in-scale delay-300">
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
