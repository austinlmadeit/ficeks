'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/data';

const QUOTE_TYPES = [
  { id: 'auto', label: 'Auto (MPI)', icon: '🚗', badge: 'Autopac' },
  { id: 'home', label: 'Home & Tenants', icon: '🏠', badge: 'Property' },
  { id: 'business', label: 'Commercial', icon: '🏢', badge: 'Business' },
  { id: 'farm', label: 'Farm', icon: '🌾', badge: 'Agribusiness' },
  { id: 'life', label: 'Life & Benefits', icon: '❤️', badge: 'Family' },
  { id: 'toys', label: 'Recreational', icon: '🏍️', badge: 'Boats & ORVs' },
];

export default function HeroQuoteWidget() {
  const [selectedType, setSelectedType] = useState('auto');
  const [postalCode, setPostalCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const typeObj = QUOTE_TYPES.find(t => t.id === selectedType);
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quick_quote',
          name: fullName,
          phone: phone,
          postalCode: postalCode || 'Brandon, MB',
          insuranceType: typeObj ? typeObj.label : 'General Insurance',
          message: `Homepage quick lead widget. Selected coverage: ${typeObj?.label || 'General'}. Postal Code: ${postalCode || 'Not specified'}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Unable to send quote request. Please call our brokers directly.');
      }
    } catch {
      setError('Unable to send quote request. Please call our brokers directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '3px solid #09090b',
      borderRadius: '16px',
      padding: '32px',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
      position: 'relative',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '16px',
        borderBottom: '2px solid #f4f4f5',
      }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#dc2626' }}>
            ⚡ Instant Quote Request
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginTop: '2px' }}>
            Get Your Best Coverage Rate
          </h3>
        </div>
        <span style={{
          background: '#fef2f2',
          color: '#dc2626',
          border: '1px solid #fecaca',
          padding: '4px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 700,
        }}>
          Brandon & MB
        </span>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {/* Coverage Selectors Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginBottom: '24px',
          }}>
            {QUOTE_TYPES.map((t) => {
              const active = selectedType === t.id;
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  style={{
                    padding: '12px 10px',
                    borderRadius: '8px',
                    border: active ? '2px solid #dc2626' : '1.5px solid #e4e4e7',
                    background: active ? '#fef2f2' : '#ffffff',
                    color: active ? '#dc2626' : '#09090b',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{ fontSize: '22px', marginBottom: '4px' }}>{t.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.2 }}>{t.label}</div>
                </button>
              );
            })}
          </div>

          {/* Form Inputs */}
          <div className="grid-2" style={{ gap: '12px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#71717a', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid #e4e4e7',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#71717a', marginBottom: '4px' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="204-571-xxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid #e4e4e7',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#71717a', marginBottom: '4px' }}>
              Postal Code (MB)
            </label>
            <input
              type="text"
              placeholder="e.g. R7A 5A9"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid #e4e4e7',
                borderRadius: '6px',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {error && (
            <div style={{ color: '#dc2626', fontSize: '13px', fontWeight: 700, marginBottom: '14px', background: '#fef2f2', padding: '8px 12px', borderRadius: '6px' }}>
              ⚠️ {error}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
            <input type="checkbox" required id="consentHero" style={{ marginTop: '4px', width: '16px', height: '16px', accentColor: '#dc2626' }} />
            <label htmlFor="consentHero" style={{ fontSize: '12px', color: '#71717a', lineHeight: 1.5 }}>
              I agree to the <Link href="/terms" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Terms</Link> and <Link href="/privacy" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Privacy Policy</Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-red"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              borderRadius: '8px',
              background: loading ? '#9ca3af' : '#dc2626',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Submitting...' : 'Calculate & Request Quote →'}
          </button>
          <p style={{ fontSize: '12px', color: '#71717a', textAlign: 'center', marginTop: '10px' }}>
            🔒 Free & no obligation. A Ficek broker responds in 1 business day.
          </p>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '24px 12px' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
          <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#09090b', marginBottom: '8px' }}>
            Quote Request Received!
          </h4>
          <p style={{ fontSize: '15px', color: '#71717a', marginBottom: '24px', lineHeight: 1.6 }}>
            Thanks {fullName}! One of our licensed Brandon brokers will review options for your <strong>{QUOTE_TYPES.find(t => t.id === selectedType)?.label}</strong> coverage and contact you at <strong>{phone}</strong>.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFullName('');
              setPhone('');
              setPostalCode('');
            }}
            className="btn btn-outline"
            style={{ width: '100%' }}
          >
            ← Request Another Quote
          </button>
        </div>
      )}
    </div>
  );
}
