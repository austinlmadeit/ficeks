import Link from 'next/link';
import Image from 'next/image';
import { SITE, SERVICES } from '@/lib/data';

export default function Footer() {
  const serviceLinks = SERVICES.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  }));

  return (
    <footer style={{
      background: '#09090b',
      color: '#ffffff',
      borderTop: '1px solid #27272a',
      paddingTop: '64px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '42px', height: '42px', background: '#ffffff', borderRadius: '6px', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Image
                  src="/images/ficek.logo.jpg"
                  alt="Ficek Insurance"
                  width={34}
                  height={34}
                  quality={100}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>FICEK</div>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#dc2626', letterSpacing: '2px' }}>INSURANCE</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '20px', maxWidth: '240px' }}>
              Family-owned independent brokerage serving Brandon, Manitoba since {SITE.founded}.
            </p>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px', borderRadius: '6px',
                background: '#18181b',
                border: '1px solid #27272a',
                color: '#ffffff', fontSize: '13px', fontWeight: 600,
              }}
            >
              Facebook Page ↗
            </a>
          </div>

          {/* Column 1: Coverage */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#dc2626', marginBottom: '20px' }}>
              Coverage Options
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: '#a1a1aa' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: More Coverage */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#dc2626', marginBottom: '20px' }}>
              Specialty Lines
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: '#a1a1aa' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#dc2626', marginBottom: '20px' }}>
              Company & Audit
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/about/our-team' },
                { label: 'Locations', href: '/about/locations' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Request a Quote', href: '/quote' },
                { label: '🔬 Dev Notes & Audit Tracker', href: '/dev-notes' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: l.href === '/dev-notes' ? '#ef4444' : '#a1a1aa', fontWeight: l.href === '/dev-notes' ? 700 : 400 }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Office Info */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#dc2626', marginBottom: '20px' }}>
              Brandon Offices
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#a1a1aa' }}>
              <div>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '14px', marginBottom: '2px' }}>1439 1st Street (Main Office)</strong>
                <div>Brandon, MB R7A 6Z4</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="tel:+12045711777" style={{ color: '#dc2626', fontWeight: 800, fontSize: '15px' }}>204-571-1777</a>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #27272a', paddingTop: '12px' }}>
                <strong style={{ color: '#ffffff', display: 'block', fontSize: '14px', marginBottom: '2px' }}>1525 18th Street Office</strong>
                <div>Brandon, MB R7A 5A9</div>
                <div style={{ marginTop: '4px' }}>
                  <a href="tel:+12047281957" style={{ color: '#dc2626', fontWeight: 800, fontSize: '15px' }}>204-728-1957</a>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #27272a', paddingTop: '12px' }}>
                <span style={{ fontSize: '12px', color: '#71717a', display: 'block', marginBottom: '2px' }}>General Email:</span>
                <a href={`mailto:${SITE.email}`} style={{ color: '#ffffff', fontWeight: 600 }}>{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #27272a', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#a1a1aa' }}>
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ background: '#27272a', color: '#ef4444', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 800 }}>
              🔴 RED & BLACK BRAND BUILD
            </span>
            <Link href="/privacy" style={{ color: '#a1a1aa' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: '#a1a1aa' }}>Terms of Service</Link>
            <Link href="/dev-notes" style={{ color: '#ef4444' }}>Dev Notes</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
