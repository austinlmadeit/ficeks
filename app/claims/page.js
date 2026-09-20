import Link from 'next/link';
import { SITE, CARRIERS } from '@/lib/data';

export const metadata = {
  title: '24/7 Emergency Claims Center | Ficek Insurance Brandon MB',
  description:
    'Need to file an insurance claim? Access 24/7 emergency carrier hotlines, Manitoba Autopac MPI procedures, and accident checklists at Ficek Insurance: 204-571-1777.',
};

export default function ClaimsPage() {
  return (
    <>
      {/* ── HERO BANNER ── */}
      <section style={{
        background: '#09090b',
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '80px',
        borderBottom: '4px solid #dc2626',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            🚨 24/7 Client Emergency Support
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            We’re Here When You Need Us Most.
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a1a1aa',
            maxWidth: '640px',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            In the event of an accident, fire, or severe property damage, Ficek Insurance provides step-by-step claims support and direct contact numbers for all our insurance partners.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={SITE.phoneHref} className="btn btn-red" style={{ fontSize: '16px', padding: '16px 32px' }}>
              📞 Call Ficek Office: {SITE.phone}
            </a>
            <a href="#carrier-hotlines" className="btn btn-outline-white" style={{ fontSize: '16px', padding: '16px 32px' }}>
              ⬇ Direct Carrier Hotlines
            </a>
          </div>
        </div>
      </section>

      {/* ── MANITOBA AUTOPAC (MPI) CLAIMS SECTION ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="card card-red-top" style={{ padding: '36px', background: '#fafafa', marginBottom: '56px' }}>
            <div className="grid-2" style={{ gap: '36px', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>
                  Motor Vehicle Accidents (Manitoba)
                </span>
                <h2 style={{ fontSize: '30px', fontWeight: 900, marginBottom: '14px', color: '#09090b' }}>
                  Filing an Autopac (MPI) Claim
                </h2>
                <p style={{ color: '#71717a', lineHeight: 1.65, marginBottom: '20px' }}>
                  For vehicle collisions in Manitoba, basic coverage is managed through Manitoba Public Insurance (MPI). Call MPI directly or contact Ficek Insurance to report your incident.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px' }}>
                  <div><strong>MPI Contact Center:</strong> <a href="tel:18006652410" style={{ color: '#dc2626', fontWeight: 700 }}>1-800-665-2410</a></div>
                  <div><strong>Out-of-Province Claims:</strong> <a href="tel:18006616775" style={{ color: '#dc2626', fontWeight: 700 }}>1-800-661-6775</a></div>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '1px solid #e4e4e7' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px', color: '#09090b' }}>
                  Steps to Take Immediately On-Scene:
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#71717a' }}>
                  <li>✅ Check for injuries & ensure safety. Call 911 if required.</li>
                  <li>✅ Exchange name, address, phone & driver's licence numbers with other drivers.</li>
                  <li>✅ Note vehicle make, model & Manitoba licence plate numbers.</li>
                  <li>✅ Take photos of vehicle damage and the accident scene.</li>
                  <li>✅ Contact MPI (or Ficek Insurance) to open your claim file.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── CARRIER EMERGENCY HOTLINES ── */}
          <div id="carrier-hotlines" style={{ scrollMarginTop: '100px' }}>
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <span className="section-tag">Direct Partner Directory</span>
              <h2 className="section-title">24/7 Partner Carrier Hotlines</h2>
              <p className="section-sub mx-auto">
                If your claim occurs after business hours or during a weekend, you can contact your insurance carrier's emergency claims line directly.
              </p>
            </div>

            <div className="grid-3" style={{ marginBottom: '48px' }}>
              {CARRIERS.map((c) => (
                <div key={c.id} className="card" style={{ background: '#ffffff', borderLeft: '4px solid #09090b' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', marginBottom: '6px' }}>
                    {c.badge}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '6px', color: '#09090b' }}>
                    {c.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '16px' }}>
                    {c.category}
                  </p>
                  <div style={{ background: '#fafafa', padding: '12px', borderRadius: '8px', border: '1px solid #f4f4f5' }}>
                    <div style={{ fontSize: '12px', color: '#71717a', marginBottom: '2px' }}>Emergency Line:</div>
                    <a href={`tel:${c.phone}`} style={{ fontSize: '18px', fontWeight: 900, color: '#dc2626', textDecoration: 'none' }}>
                      📞 {c.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT / CLAIMS ADVOCACY ── */}
      <section className="section-sm" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7' }}>
        <div className="container text-center" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '16px' }}>
            We Act as Your Claims Advocate
          </h2>
          <p style={{ color: '#71717a', lineHeight: 1.7, marginBottom: '28px' }}>
            As an independent insurance broker, Ficek Insurance represents <strong>you</strong> — not the insurance company. If you ever need guidance or support during a complex claim, our experienced Brandon team is here to assist every step of the way.
          </p>
          <Link href="/contact" className="btn btn-red">
            Contact Ficek Claims Team →
          </Link>
        </div>
      </section>
    </>
  );
}
