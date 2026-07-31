import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/data';

export default function Footer() {
  const serviceLinks = SERVICES.map((s) => ({
    label: s.title,
    href: `/services/${s.slug}`,
  }));

  return (
    <footer style={{
      background: 'var(--footer-bg)',
      borderTop: '1px solid var(--border)',
      paddingTop: '64px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
              <span style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>FICEK</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--accent2)', letterSpacing: '2px' }}>INSURANCE</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '240px' }}>
              Family-owned independent broker serving Brandon, Manitoba and surrounding communities since {SITE.founded}.
            </p>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '8px 16px', borderRadius: '6px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border2)',
                color: 'var(--muted)', fontSize: '13px', fontWeight: 500,
                transition: 'color 0.2s',
              }}
            >
              Facebook
            </a>
          </div>

          {/* Insurance */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
              Insurance
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.slice(0, 5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: 'var(--muted)', transition: 'color 0.15s' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Insurance */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
              More Coverage
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.slice(5).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
              Company
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Team', href: '/about/our-team' },
                { label: 'Locations', href: '/about/locations' },
                { label: 'Contact', href: '/contact' },
                { label: 'Request a Quote', href: '/quote' },
                { label: '🔬 Dev Notes', href: '/dev-notes' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: '14px', color: 'var(--muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
              Contact
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
              <li>
                <span style={{ display: 'block', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{SITE.address.street}</span>
                {SITE.address.city}, {SITE.address.province} {SITE.address.postal}
              </li>
              <li>
                <a href={SITE.phoneHref} style={{ color: 'var(--accent2)', fontWeight: 600 }}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} style={{ color: 'var(--muted)' }}>{SITE.email}</a>
              </li>
              <li style={{ lineHeight: 1.6 }}>
                Mon–Fri: 9:00 AM – 5:00 PM<br />
                Weekends: Closed
              </li>
            </ul>
          </div>
        </div>

        <hr className="divider" />

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
          padding: '24px 0',
          fontSize: '13px', color: 'var(--muted)',
        }}>
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{
              background: 'rgba(245,158,11,0.1)',
              color: '#f59e0b',
              border: '1px solid rgba(245,158,11,0.2)',
              padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
            }}>
              🔬 SANDBOX — NOT LIVE
            </span>
            <Link href="/dev-notes" style={{ color: 'var(--accent2)' }}>Dev Notes</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
