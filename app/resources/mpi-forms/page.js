'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MPI_FORMS, SITE } from '@/lib/data';

// Flatten all items into a single linear list for high-density scannability
const ALL_ITEMS = MPI_FORMS.flatMap(cat =>
  cat.items.map(item => ({
    ...item,
    categoryName: cat.category,
  }))
);

export default function MPIFormsPage() {
  const [search, setSearch] = useState('');

  const filteredItems = ALL_ITEMS.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.desc.toLowerCase().includes(search.toLowerCase()) ||
    item.categoryName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section style={{
        background: '#09090b',
        color: '#ffffff',
        paddingTop: '64px',
        paddingBottom: '64px',
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
            marginBottom: '16px',
          }}>
            📄 Official Manitoba Forms Directory
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 50px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>
            MPI Forms & Official Documents Directory
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#a1a1aa',
            maxWidth: '640px',
            lineHeight: 1.6,
            marginBottom: '28px',
          }}>
            Direct links to live Manitoba Public Insurance (MPI), Provincial Tax, and Federal vehicle import documents.
          </p>

          {/* Quick Search Bar */}
          <div style={{ maxWidth: '540px', position: 'relative' }}>
            <input
              type="text"
              placeholder="🔍 Search forms (e.g., Bill of Sale, Tax Refund, Collector, Accident)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '8px',
                border: '2px solid #3f3f46',
                background: '#18181b',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: 600,
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── LINEAR HIGH-DENSITY FORM DIRECTORY ── */}
      <section className="section" style={{ background: '#ffffff', padding: '48px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Showing {filteredItems.length} Official Resources
            </span>
            <a href="https://www.mpi.mb.ca/document-type/forms/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', fontWeight: 800, color: '#dc2626', textDecoration: 'none' }}>
              🌐 Full MPI Portal Directory ↗
            </a>
          </div>

          {/* Linear Table List */}
          <div style={{
            background: '#ffffff',
            border: '2px solid #09090b',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}>
            {filteredItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '20px',
                  alignItems: 'center',
                  padding: '20px 24px',
                  borderBottom: idx === filteredItems.length - 1 ? 'none' : '1px solid #e4e4e7',
                  background: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                  transition: 'background 0.15s ease',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: '#dc2626',
                      background: 'rgba(220,38,38,0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                    }}>
                      {item.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#71717a' }}>
                      • {item.categoryName}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#09090b', marginBottom: '4px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#71717a', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>

                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-red"
                    style={{
                      padding: '10px 18px',
                      fontSize: '13px',
                      fontWeight: 800,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    📄 Official Form ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Help Callout */}
          <div style={{
            marginTop: '40px',
            background: '#09090b',
            color: '#ffffff',
            padding: '28px 32px',
            borderRadius: '12px',
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '6px', color: '#ffffff' }}>
                Need Broker Help With Autopac Forms?
              </h3>
              <p style={{ color: '#a1a1aa', fontSize: '14px', margin: 0 }}>
                Our licensed Brandon team is available at 1525 18th Street or via phone at {SITE.phone}.
              </p>
            </div>
            <Link href="/contact" className="btn btn-red" style={{ padding: '12px 24px', fontSize: '14px' }}>
              Contact Ficek Office →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
