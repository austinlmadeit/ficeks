import Link from 'next/link';
import LocationGallery from '@/components/LocationGallery';
import { SITE, OFFICES, LOCATION_GUIDES, SERVICE_AREAS } from '@/lib/data';

export const metadata = {
  title: 'Find Us | Directions to Both Ficek Insurance Offices in Brandon MB',
  description:
    'Detailed directions to both Ficek Insurance offices in Brandon, Manitoba: 1525B 18th Street and 1439 1st Street. Routes from every direction, landmarks, parking, maps and photos.',
};

const RED = '#dc2626';
const INK = '#09090b';
const SLATE = '#475569';

export default function FindUsPage() {
  const guides = LOCATION_GUIDES.map((guide) => ({
    ...guide,
    office: OFFICES.find((o) => o.id === guide.officeId),
  })).filter((g) => g.office);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: INK,
        color: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '72px',
        borderBottom: `4px solid ${RED}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 16px',
            borderRadius: '9999px',
            background: RED,
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Two Brandon Offices
          </div>

          <h1 className="float-in delay-100" style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Find Us: Directions to Both Brandon Offices
          </h1>

          <p className="float-in delay-200" style={{
            fontSize: '18px',
            color: '#d4d4d8',
            lineHeight: 1.7,
            maxWidth: '760px',
            marginBottom: '32px',
          }}>
            Whether you are driving in off the Trans-Canada, crossing town after work, or coming
            in from one of the communities we serve, here is exactly how to reach each of our
            offices: the routes, the landmarks to watch for, where to park, and what the building
            looks like when you get there.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {guides.map((guide) => (
              <a
                key={guide.officeId}
                href={`#${guide.officeId}`}
                className={guide.isNew ? 'btn btn-red' : 'btn btn-outline-white'}
                style={{ padding: '14px 26px' }}
              >
                {guide.office.street}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION DEEP DIVES ── */}
      {guides.map((guide, index) => {
        const { office } = guide;
        return (
          <section
            key={guide.officeId}
            id={guide.officeId}
            className="section"
            style={{
              background: index % 2 === 0 ? '#ffffff' : '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              scrollMarginTop: '90px',
            }}
          >
            <div className="container">
              {/* Header */}
              <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 14px',
                  borderRadius: '6px',
                  background: guide.isNew ? RED : INK,
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}>
                  {guide.eyebrow}
                </div>

                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 900,
                  color: INK,
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}>
                  {office.name}
                </h2>

                <p style={{ fontSize: '17px', fontWeight: 800, color: RED, marginBottom: '16px' }}>
                  {office.full}
                </p>

                {guide.summary && (
                  <p style={{ fontSize: '16px', color: SLATE, lineHeight: 1.7 }}>
                    {guide.summary}
                  </p>
                )}
              </div>

              {/* Map + key details */}
              <div className="grid-2" style={{ gap: '32px', alignItems: 'start', marginBottom: '40px' }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '340px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid #cbd5e1',
                }}>
                  <iframe
                    title={`${office.name} map`}
                    src={office.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div style={{
                  background: '#ffffff',
                  border: '2px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '28px',
                }}>
                  <h3 style={{ fontSize: '19px', fontWeight: 900, color: INK, marginBottom: '18px' }}>
                    {guide.corridor.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.7, marginBottom: '22px' }}>
                    {guide.corridor.body}
                  </p>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <DetailRow label="Phone">
                      <a href={office.phoneHref} style={{ color: RED, fontWeight: 800, textDecoration: 'none' }}>
                        {office.phone}
                      </a>
                    </DetailRow>
                    <DetailRow label="Hours">
                      <span style={{ fontWeight: 700, color: INK, fontSize: '14px' }}>{office.hours}</span>
                    </DetailRow>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '22px' }}>
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-red"
                      style={{ flex: '1 1 auto', justifyContent: 'center' }}
                    >
                      Get Directions
                    </a>
                    <a href={office.phoneHref} className="btn btn-black" style={{ flex: '1 1 auto', justifyContent: 'center' }}>
                      Call This Office
                    </a>
                  </div>
                </div>
              </div>

              {/* Routes */}
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: INK, marginBottom: '18px' }}>
                How to get here
              </h3>
              <div className="grid-2" style={{ gap: '20px', marginBottom: '40px' }}>
                {guide.routes.map((route) => (
                  <div
                    key={route.from}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderLeft: `4px solid ${RED}`,
                      borderRadius: '12px',
                      padding: '22px 24px',
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 900, color: INK, marginBottom: '12px' }}>
                      {route.from}
                    </div>
                    <ol style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {route.steps.map((stepText) => (
                        <li key={stepText} style={{ fontSize: '14px', color: SLATE, lineHeight: 1.6 }}>
                          {stepText}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>

              {/* Landmarks / parking / transit */}
              <div className="grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
                <InfoCard title="Landmarks to watch for">
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {guide.landmarks.map((landmark) => (
                      <li key={landmark.label} style={{ fontSize: '14px', color: SLATE, lineHeight: 1.6 }}>
                        <strong style={{ color: INK }}>{landmark.label}</strong>
                        {landmark.note ? ` - ${landmark.note}` : ''}
                      </li>
                    ))}
                  </ul>
                </InfoCard>

                <InfoCard title={guide.parking.title}>
                  <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7, margin: 0 }}>
                    {guide.parking.body}
                  </p>
                </InfoCard>

                <InfoCard title={guide.transit.title}>
                  <p style={{ fontSize: '14px', color: SLATE, lineHeight: 1.7, margin: 0 }}>
                    {guide.transit.body}
                  </p>
                </InfoCard>
              </div>

              {/* Best for (optional) */}
              {guide.bestFor?.length > 0 && (
                <>
                <div style={{
                  background: guide.isNew ? 'rgba(220, 38, 38, 0.06)' : '#f1f5f9',
                  border: `1px solid ${guide.isNew ? 'rgba(220, 38, 38, 0.2)' : '#e2e8f0'}`,
                  borderRadius: '12px',
                  padding: '24px 28px',
                  marginBottom: '40px',
                }}>
                  <div style={{ fontSize: '13px', fontWeight: 900, color: RED, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                    Why clients choose this office
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {guide.bestFor.map((reason) => (
                      <li key={reason} style={{ fontSize: '15px', color: SLATE, lineHeight: 1.6 }}>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
                </>
              )}

              {/* Gallery */}
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: INK, marginBottom: '6px' }}>
                Photo tour: what to look for
              </h3>
              <p style={{ fontSize: '15px', color: SLATE, lineHeight: 1.6, marginBottom: '20px', maxWidth: '640px' }}>
                A look at the building, the entrance, and the parking so you recognize the
                {' '}{guide.shortName} office the moment you arrive.
              </p>
              <LocationGallery photos={guide.gallery} officeName={office.name} />
            </div>
          </section>
        );
      })}

      {/* ── SERVICE AREAS ── */}
      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '760px', margin: '0 auto 32px' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', marginBottom: '14px' }}>
              Coming in from out of town?
            </h2>
            <p className="section-sub" style={{ fontSize: '16px', color: SLATE, lineHeight: 1.7 }}>
              Both Brandon offices serve clients from across Westman. If you are driving in from
              one of these communities, give us a call ahead and we will have your paperwork ready
              before you arrive.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '36px' }}>
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  background: '#f1f5f9',
                  border: '1px solid #e2e8f0',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: INK,
                }}
              >
                {area}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/quote" className="btn btn-red" style={{ padding: '16px 30px' }}>
              Request Quote &rarr;
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ padding: '16px 30px' }}>
              Contact Our Team
            </Link>
            <a href={SITE.phoneHref} className="btn btn-black" style={{ padding: '16px 30px' }}>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailRow({ label, children }) {
  return (
    <div>
      <div style={{
        fontSize: '11px',
        fontWeight: 800,
        color: RED,
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginBottom: '2px',
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '22px 24px',
    }}>
      <h4 style={{ fontSize: '16px', fontWeight: 900, color: INK, marginBottom: '12px' }}>
        {title}
      </h4>
      {children}
    </div>
  );
}
