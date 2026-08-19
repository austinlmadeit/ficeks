'use client';

import { CARRIERS } from '@/lib/data';

// Duplicate array to enable seamless infinite scroll loop
const CARRIER_SLOTS = [...CARRIERS, ...CARRIERS];

export default function CarrierCarousel() {
  return (
    <section
      className="carousel-container"
      style={{
        background: '#f4f4f5',
        borderTop: '1px solid #e4e4e7',
        borderBottom: '2px solid #09090b',
        padding: '44px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="container" style={{ marginBottom: '24px', textAlign: 'center' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#dc2626',
          background: 'rgba(220,38,38,0.08)',
          padding: '4px 14px',
          borderRadius: '4px',
        }}>
          Independent Broker Advantage
        </span>
        <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginTop: '6px' }}>
          Our Insurance Carrier Partners
        </h2>
      </div>

      {/* ── WIDE AUTO-SLIDING MARQUEE TRACK ── */}
      <div
        style={{
          display: 'flex',
          width: 'max-content',
        }}
        className="carousel-track"
      >
        {CARRIER_SLOTS.map((carrier, idx) => (
          <div
            key={`${carrier.id}-${idx}`}
            style={{
              width: '320px',
              height: '136px',
              marginRight: '24px',
              background: '#ffffff',
              border: '2px solid #e4e4e7',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            className="carousel-card"
          >
            {/* Widescreen Carrier Partner Box */}
            <div style={{
              width: '100%',
              height: '68px',
              border: '1.5px dashed #a1a1aa',
              borderRadius: '6px',
              background: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
              textAlign: 'center',
              marginBottom: '10px',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 900,
                color: '#09090b',
                lineHeight: 1.25,
              }}>
                {carrier.name}
              </span>
            </div>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#dc2626',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
            }}>
              {carrier.badge}
            </div>
          </div>
        ))}
      </div>

      {/* ── KEYFRAME ANIMATION & GUARANTEED HOVER PAUSE STYLES ── */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track {
          animation: marquee 65s linear infinite !important;
        }
        .carousel-track:hover,
        .carousel-container:hover .carousel-track {
          animation-play-state: paused !important;
        }
        .carousel-card:hover {
          border-color: #dc2626 !important;
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(220, 38, 38, 0.18) !important;
        }
      `}</style>
    </section>
  );
}
