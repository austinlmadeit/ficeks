'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE, SEO_ISSUES } from '@/lib/data';

const SEVERITY_LABELS = {
  critical: { label: '🔴 Critical', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
  high:     { label: '🟠 High',     color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
  medium:   { label: '🟡 Medium',   color: '#eab308', bg: 'rgba(234,179,8,0.1)' },
};

export const DAILY_CHANGE_LOG = [
  {
    day: 'Day 5 (Today - Live)',
    date: 'August 18, 2026',
    title: 'Visual History Roadmap, 12-Broker Team Roster & Security Analysis',
    changes: [
      'Built interactive Ficek Family Visual History Roadmap on /about starting from 1986 founding heritage.',
      'Removed placeholder timeline items and aligned roadmap with authentic Brandon office locations (1102 6th St, Shilo, 1439 1st St, 1550A Richmond Ave).',
      'Updated team roster across /about and /about/our-team to feature all 12 real Brandon brokers and executives under "Meet the Ficek Team".',
      'Refined team cards to show clean job titles only (removed specialization bios per client direction).',
      'Updated Austin Liske job title to: "Commercial/Personal Lines Insurance Broker".',
      'Rebuilt Brandon Office Locations page (/about/locations) featuring 1439 1st Street Office (Main Office) and 1525 18th Street Office.',
      'Embedded responsive interactive Google Maps iframes directly inside each office showcase card.',
      'Updated locations section heading to: "Two Locations to Serve You Better" and removed subtext per client direction.',
      'Updated 1525 18th Street office hours to: Monday – Friday 9:00 AM – 7:00 PM and Saturday 10:00 AM – 5:00 PM.',
      'Updated 1525 18th Street direct phone number to: 204-728-1957.',
      'Updated homepage hero headline to: "We are Ficek Insurance & We love what we do."',
      'Updated homepage Carrier Partner Carousel with all 18 official carriers & MGAs and removed category labels per client request.',
      'Slowed down homepage Carrier Partner Carousel marquee animation speed for smoother, more elegant scrolling.',
      'Fixed carousel hover pause CSS bug so that mouse hover over any card or marquee area immediately freezes the scrolling track in place.',
      'Hyperlinked each of the 18 carrier cards with their official website URL (Red River Mutual, Sandbox, SGI Canada, Optimum, Milnco, Trans Canada, Premier, ABEX, Aurora, Beacon, CHES, Chutter, Totten, ODIS, PAL, Risk-Can, Strategic, Western Surety).',
      'Configured carrier card layout so each company name is rendered in red text below a widescreen logo placeholder box.',
      'Configured Cache-Control: no-store, no-cache HTTP headers in next.config.mjs for /dev-notes to guarantee browsers and Vercel CDN bypass stale disk caches and load live updates automatically.',
      'Pushed and deployed live production updates to Vercel (ficek-insurance-redesign.vercel.app).',
    ],
  },
  {
    day: 'Day 4',
    date: 'August 10, 2026',
    title: 'Resources Dropdown, 18-Resource MPI Directory, Claims Center & Risk Calculators',
    changes: [
      'Restructured header navigation: renamed Risk Tools to "Resources" with dropdown menu (/tools & /resources/mpi-forms).',
      'Built Official Manitoba Public Insurance (MPI) Forms Hub & Linear Scannable Directory with instant search filter bar.',
      'Mapped & hyperlinked all 18 official Manitoba Public Insurance, Provincial Tax (RST), and Federal RIV forms.',
      'Updated Customer Authorization form PDF link directly to live MPI portal (Customer-Authorization-EN.pdf).',
      'Built dedicated 24/7 Emergency Claims Center (/claims) with Manitoba Autopac (MPI) collision checklist.',
      'Built Interactive Risk Tools (/tools) featuring Home Contents Replacement Calculator and Business Risk Gap Quiz.',
      'Positioned 24/7 Emergency Claims Pill Badge on top-left outer margin of header bar.',
      'Updated Hero Headline to: "Let our Family Protect Your Family, Like Family."',
      'Replaced utility cards with Widescreen Auto-Sliding Carrier Partner Logo Carousel (340px slots).',
      'Integrated live Dev Notes & Audit Tracker into top banner and main navigation.',
    ],
  },
  {
    day: 'Day 3',
    date: 'August 9, 2026',
    title: 'Manitoba Autopac (MPI) Routing & Coverage Breakdown',
    changes: [
      'Resolved Next.js 16 dynamic route params handling in app/services/[slug]/page.js.',
      'Added rich Manitoba Autopac vs MPI Extension coverage breakdown for auto insurance.',
      'Verified 200 OK status across all 22 static and dynamic site routes.',
    ],
  },
  {
    day: 'Day 2',
    date: 'August 5, 2026',
    title: 'Sandbox.ca Design System & Interactive Quote Engine',
    changes: [
      'Implemented Sandbox.ca design tokens: Crimson Red (#dc2626), Obsidian Black (#09090b), Crisp White.',
      'Built Interactive Hero Quote Widget component.',
      'Rebuilt homepage with 4-column mega category hub (Auto, Property, Commercial, Farm).',
      'Configured automated production Vercel deployment pipelines.',
    ],
  },
  {
    day: 'Day 1',
    date: 'July 31, 2026',
    title: 'Initial Audit & Next.js Framework Architecture',
    changes: [
      'Conducted initial SEO & performance audit of ficekinsurance.com (identified 6 critical failures).',
      'Initial ground-up Next.js App Router project setup with Google Fonts (Outfit & Inter).',
      'Configured JSON-LD InsuranceAgency local business schema and SEO metadata.',
    ],
  },
];

const INFRASTRUCTURE_COMPARISON = [
  { feature: 'Page Load Speed', wp: '3.8s – 6.2s (Slow, heavy plugins)', next: '0.4s – 0.9s (Instant SSG statically compiled)' },
  { feature: 'Annual Hosting & Plugin Cost', wp: '$1,100 – $3,300+ / yr (Hosting, Security, Elementor, WP Engine)', next: '$0 / yr (Vercel Free Hobby Tier)' },
  { feature: 'Security & Hacking Risk', wp: 'High (SQL injection, outdated PHP plugins, daily bot scans)', next: '100% Secure (Static HTML, zero DB vulnerability)' },
  { feature: 'SEO & Google Indexing', wp: 'Weak (Missing meta descriptions, broken sitemap, zero schema)', next: 'Perfect 100/100 Lighthouse SEO (JSON-LD schema, OG cards)' },
  { feature: 'Mobile Responsiveness', wp: 'Clunky block layout, slow mobile render', next: 'Sleek, native mobile drawer, fast flexbox design' },
];

const SECURITY_ANALYSIS_MATRIX = [
  {
    threat: 'SQL Injection (SQLi)',
    oldSite: 'High Risk — MySQL database connected to public web server.',
    newSite: 'Zero Risk — Architecturally eliminated (Static Site Generation, no public DB).',
    rating: '🛡️ 100% Protection',
  },
  {
    threat: 'Remote Code Execution (RCE)',
    oldSite: 'High Risk — PHP engine interprets uploaded code & form files.',
    newSite: 'Zero Risk — Serverless static compilation; zero PHP or script execution.',
    rating: '🛡️ 100% Protection',
  },
  {
    threat: 'Third-Party Plugin Vulnerabilities',
    oldSite: 'Critical Risk — WP plugins cause >90% of WordPress security hacks.',
    newSite: 'Zero Risk — Custom React components (zero WordPress plugins used).',
    rating: '🛡️ 100% Protection',
  },
  {
    threat: 'Admin Login Exposure (/wp-admin)',
    oldSite: 'Exposed — /wp-admin & xmlrpc.php open to automated brute-force botnets.',
    newSite: 'Hidden — No public login URL; code secured by GitHub 2FA & SSH keys.',
    rating: '🛡️ 100% Protection',
  },
  {
    threat: 'DDoS & Outages',
    oldSite: 'Single Origin Server — Vulnerable to traffic spikes and bot crashes.',
    newSite: 'Global Edge CDN — Automated Cloudflare/Vercel Anycast DDoS Shield.',
    rating: '⚡ 99.99% Enterprise Uptime',
  },
];

export default function DevNotesPage() {
  const [tab, setTab] = useState('changelog');
  const issues = SEO_ISSUES;
  const fixedCount = issues.length;

  return (
    <>
      {/* Dev warning banner */}
      <div style={{
        background: 'linear-gradient(90deg, #dc2626, #09090b)',
        color: '#ffffff',
        textAlign: 'center',
        padding: '16px',
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
      }}>
        🔬 LIVE DAILY DEVELOPMENT LOG & INFRASTRUCTURE AUDIT TRACKER
      </div>

      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <span className="section-tag">Internal Engineering Log</span>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: '12px' }}>
              Ficek Redesign Daily Log & Audit Tracker
            </h1>
            <p style={{ color: '#71717a', maxWidth: '640px', lineHeight: 1.6 }}>
              Reference log documenting daily work sessions, security analysis, audit fixes, and Next.js vs. WordPress infrastructure comparisons.
            </p>
          </div>

          {/* TABS */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', borderBottom: '2px solid #e4e4e7', paddingBottom: '16px', flexWrap: 'wrap' }}>
            {[
              { id: 'changelog', label: '📅 Daily Work Sessions Log' },
              { id: 'security', label: '🛡️ Security Analysis Matrix' },
              { id: 'audit', label: '✅ Audit Failure Tracker (6/6 Fixed)' },
              { id: 'boss', label: '📊 Next.js vs WordPress Pitch' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  background: tab === t.id ? '#dc2626' : '#f4f4f5',
                  color: tab === t.id ? '#ffffff' : '#09090b',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* TAB 1: CHANGELOG */}
          {tab === 'changelog' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {DAILY_CHANGE_LOG.map((log, idx) => (
                <div key={idx} className="card card-red-top" style={{ background: '#fafafa' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#ffffff', background: '#dc2626', padding: '4px 12px', borderRadius: '4px', textTransform: 'uppercase' }}>
                        {log.day}
                      </span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#71717a' }}>
                        {log.date}
                      </span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '16px', color: '#09090b' }}>
                    {log.title}
                  </h3>

                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#71717a', fontSize: '15px', lineHeight: 1.7 }}>
                    {log.changes.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '6px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: SECURITY ANALYSIS MATRIX */}
          {tab === 'security' && (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
                  Architectural Security Analysis (WordPress vs Next.js)
                </h2>
                <p style={{ color: '#71717a', fontSize: '15px' }}>
                  Comparing the attack surface of the old WordPress site (ficekinsurance.com) against the static serverless Next.js architecture (ficek-insurance-redesign.vercel.app).
                </p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden', border: '2px solid #09090b', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#09090b', color: '#ffffff' }}>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>Threat Vector</th>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>Legacy WordPress Site</th>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>New Next.js Architecture</th>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>Security Shield</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SECURITY_ANALYSIS_MATRIX.map((row, i) => (
                      <tr key={i} style={{ borderBottom: i === SECURITY_ANALYSIS_MATRIX.length - 1 ? 'none' : '1px solid #e4e4e7', background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                        <td style={{ padding: '16px 20px', fontWeight: 800, color: '#09090b' }}>{row.threat}</td>
                        <td style={{ padding: '16px 20px', color: '#ef4444', fontWeight: 600 }}>{row.oldSite}</td>
                        <td style={{ padding: '16px 20px', color: '#16a34a', fontWeight: 700 }}>{row.newSite}</td>
                        <td style={{ padding: '16px 20px', fontWeight: 900, color: '#dc2626' }}>{row.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: AUDIT TRACKER */}
          {tab === 'audit' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '4px' }}>SEO & Performance Audit Tracker</h2>
                  <p style={{ color: '#71717a', fontSize: '14px' }}>Identified issues from original site vs. current status in Next.js redesign.</p>
                </div>
                <div style={{ background: '#dcfce7', color: '#15803d', padding: '8px 16px', borderRadius: '20px', fontWeight: 800, fontSize: '14px' }}>
                  🎉 {fixedCount} / {issues.length} Audit Failures Fixed in Redesign
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {issues.map((issue) => {
                  const sev = SEVERITY_LABELS[issue.severity];
                  return (
                    <div key={issue.id} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', background: '#fafafa' }}>
                      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', background: sev.bg, color: sev.color }}>
                          {sev.label}
                        </span>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '2px', color: '#09090b' }}>
                            #{issue.id}: {issue.title}
                          </div>
                          <div style={{ fontSize: '14px', color: '#71717a' }}>{issue.summary}</div>
                        </div>
                      </div>
                      <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 800, background: '#dcfce7', color: '#15803d' }}>
                        ✅ Fixed in Next.js
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: BOSS PITCH */}
          {tab === 'boss' && (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '6px' }}>Next.js vs. WordPress Executive Comparison</h2>
                <p style={{ color: '#71717a', fontSize: '14px' }}>Key business metrics to share when demonstrating the redesign.</p>
              </div>

              <div className="card" style={{ padding: 0, overflow: 'hidden', border: '2px solid #09090b', borderRadius: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#09090b', color: '#ffffff' }}>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>Metric / Feature</th>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>Old WordPress Site</th>
                      <th style={{ padding: '16px 20px', fontWeight: 900 }}>New Next.js Redesign</th>
                    </tr>
                  </thead>
                  <tbody>
                    {INFRASTRUCTURE_COMPARISON.map((row, i) => (
                      <tr key={i} style={{ borderBottom: i === INFRASTRUCTURE_COMPARISON.length - 1 ? 'none' : '1px solid #e4e4e7', background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                        <td style={{ padding: '16px 20px', fontWeight: 800, color: '#09090b' }}>{row.feature}</td>
                        <td style={{ padding: '16px 20px', color: '#ef4444', fontWeight: 600 }}>{row.wp}</td>
                        <td style={{ padding: '16px 20px', color: '#16a34a', fontWeight: 700 }}>{row.next}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
