'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE, NAV } from '@/lib/data';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  // Hover menus close after a short grace period rather than instantly, so a
  // small slip outside the menu (a diagonal move toward a lower item, or a
  // wobble past its edge) doesn't snap it shut. Re-entering cancels the close.
  const openMenu = (href) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(href);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 250);
  };
  useEffect(() => () => clearTimeout(closeTimer.current), []);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {/* Claims badge removed */}

        {/* Ficek Brand Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/ficek.logo.jpg"
            alt="Ficek Insurance"
            width={48}
            height={48}
            quality={100}
            priority
            className={styles.logoImage}
          />
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
              onMouseEnter={() => item.children && openMenu(item.href)}
              onMouseLeave={scheduleClose}
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
                    child.external ? (
                    <a
                      key={child.href}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.dropdownLink}
                    >
                      {child.label} ↗
                    </a>
                  ) : (
                    <Link key={child.href} href={child.href} className={styles.dropdownLink}>
                      {child.label}
                    </Link>
                  )
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
                    child.external ? (
                    <a
                      key={child.href}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mobileChildLink}
                    >
                      {child.label} ↗
                    </a>
                  ) : (
                    <Link key={child.href} href={child.href} className={styles.mobileChildLink}>
                      {child.label}
                    </Link>
                  )
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
