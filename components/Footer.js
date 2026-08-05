import Link from 'next/link';
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
      borderTop: '4px solid #dc2626',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ background: '#dc2626', color: '#ffffff', fontWeight: 900, fontSize: '18px', padding: '4px 10px', borderRadius: '4px', fontFamily: 'var(--font-heading)' }}>F</span>
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
              Brandon Office
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#a1a1aa' }}>
              <li>
                <strong style={{ color: '#ffffff', display: 'block' }}>{SITE.address.street}</strong>
                {SITE.address.city}, {SITE.address.province} {SITE.address.postal}
              </li>
              <li>
                <a href={SITE.phoneHref} style={{ color: '#dc2626', fontWeight: 800, fontSize: '16px' }}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} style={{ color: '#a1a1aa' }}>{SITE.email}</a>
              </li>
              <li style={{ lineHeight: 1.5 }}>
                Monday–Friday: 9:00 AM – 5:00 PM<br />
                Weekends: Closed
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #27272a', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#a1a1aa' }}>
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ background: '#27272a', color: '#ef4444', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 800 }}>
              🔴 RED & BLACK BRAND BUILD
            </span>
            <Link href="/dev-notes" style={{ color: '#ef4444' }}>Dev Notes</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
