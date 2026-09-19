'use client';

import { useState } from 'react';

const COVERAGE_OPTIONS = [
  'Collision Deductible Buy-Down ($100, $200, $350, $500)',
  'Comprehensive Deductible ($50, $100, $200, $350, $500)',
  '48-Month Leased/New Vehicle Replacement Cost',
  'SEF 27 Rental Car Insurance (Included)',
  'Lay Up Endorsement (Included at no cost)',
  'Loss of Use Occurrence Protection',
  'Excess Value Coverage (Vehicles > $70k / Commercial)',
];

const STEPS = ['Contact Info', 'Vehicle Details', 'Coverage Preferences'];

export default function SandboxQuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTimeToCall: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    currentDeductible: '',
    dsrRating: '',
    preferredLiability: '',
    coverageInterests: [],
    additionalNotes: '',
  });

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleCoverage = (option) => {
    setForm((prev) => ({
      ...prev,
      coverageInterests: prev.coverageInterests.includes(option)
        ? prev.coverageInterests.filter((o) => o !== option)
        : [...prev.coverageInterests, option],
    }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.email.trim()) {
        setError('Please fill in all required fields.');
        return false;
      }
    }
    if (step === 2) {
      if (!form.vehicleYear.trim() || !form.vehicleMake.trim() || !form.vehicleModel.trim()) {
        setError('Please enter your vehicle details.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 3));
  };

  const back = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 1));
  };

  const submit = async () => {
    if (!form.preferredLiability) {
      setError('Please select a preferred liability limit.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/sandbox-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please call us at 204-571-1777.');
      }
    } catch {
      setError('Something went wrong. Please call us at 204-571-1777.');
    }
    setLoading(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1.5px solid #e4e4e7',
    fontSize: '15px',
    fontFamily: 'inherit',
    color: '#09090b',
    background: '#ffffff',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    color: '#71717a',
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    marginBottom: '6px',
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '0px' };

  if (submitted) {
    return (
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '56px 40px',
        textAlign: 'center',
        border: '1px solid #e4e4e7',
        boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
        <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#09090b', marginBottom: '12px' }}>
          Quote Request Received!
        </h3>
        <p style={{ fontSize: '16px', color: '#71717a', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 28px' }}>
          A licensed Ficek Insurance broker will review your Sandbox Mutual Auto options and reach out within <strong>1 business day</strong>.
        </p>
        <a href="tel:+12045711777" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#dc2626',
          color: '#fff',
          fontWeight: 800,
          fontSize: '16px',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
        }}>
          📞 Call Us Now: 204-571-1777
        </a>
      </div>
    );
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e4e4e7',
      boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
      overflow: 'hidden',
    }}>
      {/* Progress Header */}
      <div style={{ background: '#09090b', padding: '24px 32px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '14px' }}>
          Get My Sandbox Mutual Auto Quote
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {STEPS.map((label, i) => {
            const num = i + 1;
            const active = step === num;
            const done = step > num;
            return (
              <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: num < 3 ? 1 : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: done ? '#22c55e' : active ? '#dc2626' : '#3f3f46',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 900,
                    flexShrink: 0,
                  }}>
                    {done ? '✓' : num}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: active ? '#fff' : done ? '#22c55e' : '#71717a' }}>
                    {label}
                  </span>
                </div>
                {num < 3 && (
                  <div style={{ flex: 1, height: '2px', background: done ? '#22c55e' : '#3f3f46', borderRadius: '2px', minWidth: '20px' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Body */}
      <div style={{ padding: '32px' }}>

        {/* Step 1 */}
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>First Name *</label>
                <input style={inputStyle} placeholder="Austin" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Last Name *</label>
                <input style={inputStyle} placeholder="Liske" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Phone Number *</label>
              <input style={inputStyle} placeholder="204-555-1234" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Email Address *</label>
              <input style={inputStyle} placeholder="you@email.com" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Best Time to Call</label>
              <select style={inputStyle} value={form.bestTimeToCall} onChange={(e) => update('bestTimeToCall', e.target.value)}>
                <option value="">Select a time...</option>
                <option>Morning (9am – 12pm)</option>
                <option>Afternoon (12pm – 4pm)</option>
                <option>Evening (4pm – 7pm)</option>
                <option>Anytime</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr', gap: '16px' }}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Year *</label>
                <input style={inputStyle} placeholder="2022" maxLength={4} value={form.vehicleYear} onChange={(e) => update('vehicleYear', e.target.value)} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Make *</label>
                <input style={inputStyle} placeholder="Ford" value={form.vehicleMake} onChange={(e) => update('vehicleMake', e.target.value)} />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Model *</label>
                <input style={inputStyle} placeholder="F-150" value={form.vehicleModel} onChange={(e) => update('vehicleModel', e.target.value)} />
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Current MPI Deductible</label>
              <select style={inputStyle} value={form.currentDeductible} onChange={(e) => update('currentDeductible', e.target.value)}>
                <option value="">Select your current deductible...</option>
                <option>$1,000 (Standard Basic MPI)</option>
                <option>$750 (Basic MPI)</option>
                <option>$500 (MPI Top-Up)</option>
                <option>$300 (MPI Top-Up)</option>
                <option>$200 (MPI Top-Up)</option>
                <option>$200 Plus (MPI Top-Up)</option>
                <option>Not sure</option>
              </select>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>DSR (Driver Safety Rating)</label>
              <select style={inputStyle} value={form.dsrRating} onChange={(e) => update('dsrRating', e.target.value)}>
                <option value="">Select your DSR...</option>
                <option>+15 (Maximum Safe Driver Discount)</option>
                <option>+10 to +14</option>
                <option>+5 to +9</option>
                <option>0 to +4</option>
                <option>Negative (Surcharge)</option>
                <option>I don't know my DSR</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={fieldStyle}>
              <label style={labelStyle}>Preferred Liability Limit *</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                {['$1 Million', '$2 Million', '$5 Million'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => update('preferredLiability', opt)}
                    style={{
                      padding: '14px 10px',
                      borderRadius: '8px',
                      border: form.preferredLiability === opt ? '2px solid #dc2626' : '1.5px solid #e4e4e7',
                      background: form.preferredLiability === opt ? '#fef2f2' : '#fafafa',
                      color: form.preferredLiability === opt ? '#dc2626' : '#09090b',
                      fontWeight: 800,
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Coverage Interests (select all that apply)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {COVERAGE_OPTIONS.map((opt) => {
                  const checked = form.coverageInterests.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleCoverage(opt)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: checked ? '1.5px solid #dc2626' : '1.5px solid #e4e4e7',
                        background: checked ? '#fef2f2' : '#fafafa',
                        color: '#09090b',
                        fontWeight: 600,
                        fontSize: '14px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s',
                      }}
                    >
                      <span style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '4px',
                        border: checked ? '2px solid #dc2626' : '2px solid #d4d4d8',
                        background: checked ? '#dc2626' : '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '11px',
                        color: '#fff',
                        fontWeight: 900,
                      }}>
                        {checked ? '✓' : ''}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Additional Notes (optional)</label>
              <textarea
                style={{ ...inputStyle, height: '90px', resize: 'vertical' }}
                placeholder="e.g. I drive to the US frequently, I have two vehicles, I want to bundle home & auto..."
                value={form.additionalNotes}
                onChange={(e) => update('additionalNotes', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{ marginTop: '16px', padding: '12px 16px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', color: '#dc2626', fontSize: '14px', fontWeight: 600 }}>
            ⚠️ {error}
          </div>
        )}

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '28px' }}>
          {step > 1 ? (
            <button onClick={back} style={{ background: 'none', border: '1.5px solid #e4e4e7', borderRadius: '8px', padding: '12px 22px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', color: '#09090b', fontFamily: 'inherit' }}>
              ← Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button onClick={next} style={{ background: '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}>
              Next Step →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={loading}
              style={{ background: loading ? '#a1a1aa' : '#dc2626', color: '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontWeight: 800, fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}
            >
              {loading ? 'Sending...' : '🚗 Submit Quote Request'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
