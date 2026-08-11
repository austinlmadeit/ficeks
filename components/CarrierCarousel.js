'use client';

import { CARRIERS } from '@/lib/data';

// Duplicate array to enable seamless infinite scroll loop
const CARRIER_SLOTS = [...CARRIERS, ...CARRIERS];

export default function CarrierCarousel() {
  return (
    <section style={{
      background: '#f4f4f5',
      borderTop: '1px solid #e4e4e7',
      borderBottom: '2px solid #09090b',
      padding: '36px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div className="container" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <span style={{
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#dc2626',
          background: 'rgba(220,38,38,0.08)',
          padding: '4px 12px',
          borderRadius: '4px',
        }}>
          Independent Broker Advantage
        </span>
        <h2 style={{ fontSize: '20px', fontWeight: 900, color: '#09090b', marginTop: '6px' }}>
          Our Insurance Carrier Partners
        </h2>
      </div>

      {/* ── AUTO-SLIDING MARQUEE TRACK ── */}
      <div style={{
        display: 'flex',
        width: 'max-content',
        animation: 'marquee 30s linear infinite',
      }}
      className="carousel-track"
      >
        {CARRIER_SLOTS.map((carrier, idx) => (
          <div
            key={`${carrier.id}-${idx}`}
            style={{
              width: '240px',
              height: '96px',
              marginRight: '20px',
              background: '#ffffff',
              border: '2px solid #e4e4e7',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justify: 'center',
              padding: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            className="carousel-card"
          >
            {/* Rectangular Logo Placeholder Box */}
            <div style={{
              width: '100%',
              height: '42px',
              border: '1px dashed #a1a1aa',
              borderRadius: '4px',
              background: '#fafafa',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              fontSize: '11px',
              fontWeight: 800,
              color: '#71717a',
              letterSpacing: '0.5px',
              marginBottom: '6px',
            }}>
              📷 {carrier.name} Logo
            </div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {carrier.badge}
            </div>
          </div>
        ))}
      </div>

      {/* ── KEYFRAME ANIMATION & HOVER PAUSE STYLES ── */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        .carousel-card:hover {
          border-color: #dc2626 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
