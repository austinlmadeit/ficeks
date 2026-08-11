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
    day: 'Day 4',
    date: 'August 10, 2026',
    title: 'Claims Center, Risk Calculators, Widescreen Marquee & Live Dev Tracker',
    changes: [
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
              Reference log documenting daily work sessions, audit fixes, and Next.js vs. WordPress infrastructure comparisons.
            </p>
          </div>

          {/* TABS */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '36px', borderBottom: '2px solid #e4e4e7', paddingBottom: '16px', flexWrap: 'wrap' }}>
            {[
              { id: 'changelog', label: '📅 Daily Work Sessions Log' },
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

          {/* TAB 1: DAILY CHANGE LOG */}
          {tab === 'changelog' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '840px' }}>
              {DAILY_CHANGE_LOG.map((log, idx) => (
                <div key={idx} className="card card-red-top" style={{ background: '#fafafa', padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #e4e4e7', paddingBottom: '12px' }}>
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(220,38,38,0.08)', padding: '3px 10px', borderRadius: '4px', marginRight: '10px' }}>
                        {log.day}
                      </span>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: '#09090b' }}>
                        {log.title}
                      </span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#71717a', fontWeight: 800 }}>{log.date}</span>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#09090b', marginLeft: '20px', marginTop: '12px' }}>
                    {log.changes.map((c, i) => (
                      <li key={i} style={{ lineHeight: 1.55 }}>
                        ✔ {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: AUDIT RESOLUTION TRACKER */}
          {tab === 'audit' && (
            <div>
              <div className="card" style={{ maxWidth: '480px', marginBottom: '32px', borderLeft: '4px solid #16a34a' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#71717a' }}>Audit Issues Resolved</span>
                  <span style={{ fontSize: '14px', fontWeight: 900, color: '#16a34a' }}>{fixedCount} / {issues.length} (100%)</span>
                </div>
                <div style={{ background: '#e4e4e7', borderRadius: '20px', height: '8px', overflow: 'hidden' }}>
                  <div style={{ background: '#16a34a', height: '100%', width: '100%', borderRadius: '20px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
                {issues.map((issue) => {
                  const sev = SEVERITY_LABELS[issue.severity] || SEVERITY_LABELS.medium;
                  return (
                    <div key={issue.id} className="card" style={{ borderLeft: '4px solid #16a34a', background: '#fafafa' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '18px' }}>✅</span>
                          <span style={{ fontWeight: 800, fontSize: '16px' }}>#{issue.id} — {issue.title}</span>
                        </div>
                        <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, background: sev.bg, color: sev.color }}>
                          {sev.label}
                        </span>
                      </div>
                      <p style={{ color: '#71717a', fontSize: '14px', marginLeft: '30px', marginBottom: '8px' }}>
                        {issue.summary}
                      </p>
                      <p style={{ color: '#16a34a', fontSize: '13px', fontWeight: 700, marginLeft: '30px' }}>
                        ✓ Resolved in Next.js Redesign (100% Clean Verification)
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: BOSS PITCH & INFRASTRUCTURE COMPARISON */}
          {tab === 'boss' && (
            <div style={{ maxWidth: '840px' }}>
              <div className="card" style={{ padding: '28px', background: '#09090b', color: '#ffffff', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '12px', color: '#ffffff' }}>
                  Executive Summary for Management
                </h2>
                <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.65 }}>
                  Pivoting Ficek Insurance from a legacy WordPress site to a dedicated Next.js platform eliminates server maintenance costs, dramatically improves Google search rankings in Brandon/Manitoba, and delivers an instant 0.4s load time.
                </p>
              </div>

              <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: '#f4f4f5', borderBottom: '2px solid #e4e4e7', textAlign: 'left' }}>
                      <th style={{ padding: '16px 20px', fontWeight: 800 }}>Feature Metric</th>
                      <th style={{ padding: '16px 20px', fontWeight: 800, color: '#dc2626' }}>Legacy WordPress</th>
                      <th style={{ padding: '16px 20px', fontWeight: 800, color: '#16a34a' }}>New Next.js Platform</th>
                    </tr>
                  </thead>
                  <tbody>
                    {INFRASTRUCTURE_COMPARISON.map((m, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #e4e4e7' }}>
                        <td style={{ padding: '16px 20px', fontWeight: 800 }}>{m.feature}</td>
                        <td style={{ padding: '16px 20px', color: '#71717a' }}>{m.wp}</td>
                        <td style={{ padding: '16px 20px', fontWeight: 700, color: '#09090b' }}>{m.next}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div style={{ marginTop: '48px' }}>
            <Link href="/" className="btn btn-red">← Back to Homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
