import Link from 'next/link';
import { CARRIERS } from '@/lib/data';

export default function CarrierGrid() {
  return (
    <section className="section" style={{ background: '#fafafa', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <span className="section-tag">Independent Broker Advantage</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#09090b', lineHeight: 1.15, marginBottom: '16px' }}>
            We Shop Canada’s Leading Markets For You
          </h2>
          <p style={{ fontSize: '17px', color: '#71717a', lineHeight: 1.6 }}>
            Unlike single-brand insurance agents, Ficek Insurance is 100% independent. We partner with top-rated insurance carriers to negotiate optimal coverage at competitive rates.
          </p>
        </div>

        {/* ── CARRIER PARTNER SLOTS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '36px',
        }}>
          {CARRIERS.map((carrier) => (
            <div key={carrier.id} className="card" style={{
              background: '#ffffff',
              border: '1px solid #e4e4e7',
              borderLeft: '4px solid #dc2626',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              transition: 'all 0.2s ease',
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#dc2626', background: 'rgba(220,38,38,0.08)', padding: '4px 10px', borderRadius: '4px' }}>
                    {carrier.badge}
                  </span>
                  <span style={{ fontSize: '20px' }}>🛡️</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>
                  {carrier.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '16px' }}>
                  {carrier.category}
                </p>
              </div>
              <div style={{ fontSize: '13px', color: '#71717a', borderTop: '1px dashed #e4e4e7', paddingTop: '12px' }}>
                <span style={{ fontWeight: 600 }}>Emergency Hotline:</span> <span style={{ color: '#09090b', fontWeight: 700 }}>{carrier.phone}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', background: '#09090b', borderRadius: '12px', padding: '24px 32px', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>
              Want to see which carrier offers your best rate?
            </div>
            <div style={{ fontSize: '14px', color: '#a1a1aa' }}>
              Our licensed brokers compare options across all our insurance markets for free.
            </div>
          </div>
          <Link href="/quote" className="btn btn-red" style={{ padding: '12px 24px', fontSize: '15px' }}>
            Compare Rates Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
