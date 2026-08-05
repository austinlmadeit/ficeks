'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE, NAV } from '@/lib/data';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {/* Ficek Brand Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoBadge}>F</span>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>FICEK</span>
            <span className={styles.logoSub}>INSURANCE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {NAV.filter(n => !n.devOnly).map((item) => (
            <div
              key={item.href}
              className={styles.navItem}
              onMouseEnter={() => item.children && setOpenDropdown(item.href)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.label}
                {item.children && <span className={styles.chevron}>▾</span>}
              </Link>
              {item.children && openDropdown === item.href && (
                <div className={styles.dropdown}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA & Phone */}
        <div className={styles.navRight}>
          <a href={SITE.phoneHref} className={styles.phoneLink}>
            <span className={styles.phoneLabel}>Call Direct</span>
            <span className={styles.phoneNum}>{SITE.phone}</span>
          </a>
          <Link href="/quote" className="btn btn-red">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV.map((item) => (
            <div key={item.href}>
              <Link href={item.href} className={styles.mobileLink}>
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.mobileChildren}>
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className={styles.mobileChildLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/quote" className="btn btn-red" style={{ margin: '16px', display: 'block', textAlign: 'center' }}>
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
