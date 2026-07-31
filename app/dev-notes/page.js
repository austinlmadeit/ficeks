import Link from 'next/link';
import { SEO_ISSUES, SITE } from '@/lib/data';

export const metadata = {
  title: 'Dev Notes & SEO Audit | Ficek Insurance Sandbox',
  description: 'Developer reference page — SEO issues found on ficekinsurance.com and what is fixed in this redesign.',
  robots: { index: false, follow: false },
};

const SEVERITY_LABELS = {
  critical: { label: '🔴 Critical', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
  high:     { label: '🟠 High',     color: '#f97316', bg: 'rgba(249,115,22,0.1)' },
  medium:   { label: '🟡 Medium',   color: '#eab308', bg: 'rgba(234,179,8,0.1)' },
};

export default function DevNotesPage() {
  const issues = SEO_ISSUES;
  const fixed = issues.filter(i => i.fixedIn).length;
  const total = issues.length;

  return (
    <>
      {/* Dev-only warning banner */}
      <div style={{
        background: 'linear-gradient(90deg, #f59e0b, #f97316)',
        color: '#000',
        textAlign: 'center',
        padding: '16px',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '0.5px',
      }}>
        🔬 DEVELOPER REFERENCE PAGE — This page is for internal use only. It is not part of the public site design.
      </div>

      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <span className="section-label">Sandbox Reference</span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
            SEO & Site Audit Findings
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: '640px', lineHeight: 1.7, marginBottom: '16px' }}>
            These issues were identified on the live site at{' '}
            <a href={SITE.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent2)' }}>
              {SITE.liveUrl}
            </a>{' '}
            during the initial audit. This sandbox redesign fixes issues marked ✅ below. Issues marked ❌ still require action on the live site (or will be resolved when this redesign goes live).
          </p>

          {/* Progress */}
          <div className="card" style={{ maxWidth: '400px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '14px', color: 'var(--muted)' }}>Fixed in this build</span>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>{fixed} / {total}</span>
            </div>
            <div style={{ background: 'var(--border)', borderRadius: '20px', height: '8px', overflow: 'hidden' }}>
              <div style={{
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                height: '100%',
                width: `${(fixed / total) * 100}%`,
                borderRadius: '20px',
                transition: 'width 0.5s ease',
              }} />
            </div>
          </div>

          {/* Issues list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
            {issues.map((issue) => {
              const sev = SEVERITY_LABELS[issue.severity] || SEVERITY_LABELS.medium;
              return (
                <div key={issue.id} className="card" style={{ borderColor: issue.fixedIn ? 'rgba(0,230,118,0.3)' : 'var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '20px' }}>{issue.fixedIn ? '✅' : '❌'}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '16px', fontFamily: 'var(--font-heading)' }}>
                          #{issue.id} — {issue.title}
                        </div>
                      </div>
                    </div>
                    <div style={{
                      padding: '3px 10px', borderRadius: '20px',
                      fontSize: '11px', fontWeight: 700, flexShrink: 0,
                      background: sev.bg, color: sev.color,
                    }}>
                      {sev.label}
                    </div>
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.65, marginLeft: '32px' }}>
                    {issue.summary}
                  </p>
                  {issue.fixedIn && (
                    <p style={{ color: 'var(--cta)', fontSize: '13px', fontWeight: 600, marginLeft: '32px', marginTop: '8px' }}>
                      ✓ Fixed in this redesign
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Links */}
          <div style={{ marginTop: '48px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-accent">← Back to Homepage</Link>
            <a href={SITE.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View Live Site →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
