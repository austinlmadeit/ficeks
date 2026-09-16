'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE, SERVICES } from '@/lib/data';

const INSURANCE_CATEGORIES = [
  { id: 'auto', title: 'Auto & MPI Autopac', icon: '🚗', subtitle: 'Passenger vehicles, trucks, commercial vehicles, motorcycles' },
  { id: 'home', title: 'Home & Tenants Insurance', icon: '🏠', subtitle: 'Homeowners, tenant contents, condo, cottage & rental property' },
  { id: 'business', title: 'Commercial & Business', icon: '🏢', subtitle: 'Commercial property, general liability, contractors packages, fleet' },
  { id: 'farm', title: 'Farm & Agribusiness', icon: '🌾', subtitle: 'Dwellings, farm machinery, livestock, grain & farm liability' },
  { id: 'life', title: 'Life & Group Benefits', icon: '❤️', subtitle: 'Term life, whole life, disability, critical illness & employee benefits' },
  { id: 'specialty', title: 'Toys, Marine & Specialty', icon: '🏍️', subtitle: 'Boats, watercraft, ATVs, snowmobiles & travel medical' },
];

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    insuranceType: 'Auto & MPI Autopac',
    // Step 2 details
    propertyOrVehicleDetails: '',
    currentInsurerOrMPI: '',
    estimatedRenewal: '',
    coverageGoals: [],
    // Step 3 contact
    name: '',
    phone: '',
    email: '',
    postalCode: '',
    preferredOffice: '1439 1st Street (Main Office)',
    bestTimeToCall: 'Morning (9am – 12pm)',
    message: '',
  });

  const update = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const toggleGoal = (goal) => {
    setForm(prev => ({
      ...prev,
      coverageGoals: prev.coverageGoals.includes(goal)
        ? prev.coverageGoals.filter(g => g !== goal)
        : [...prev.coverageGoals, goal],
    }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!form.insuranceType) {
        setError('Please select an insurance coverage category.');
        return;
      }
    }
    if (step === 2) {
      // Step 2 optional fields allowed
    }
    setError('');
    setStep(s => Math.min(s + 1, 3));
  };

  const handleBack = () => {
    setError('');
    setStep(s => Math.max(s - 1, 1));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please provide your full name and phone number so our brokers can reach you.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const detailedMessage = `
[Coverage Details]: ${form.propertyOrVehicleDetails || 'None specified'}
[Current Provider/MPI]: ${form.currentInsurerOrMPI || 'Not stated'}
[Renewal Timeline]: ${form.estimatedRenewal || 'Immediate / ASAP'}
[Specific Goals]: ${form.coverageGoals.join(', ') || 'Best price and coverage review'}
[Preferred Ficek Office]: ${form.preferredOffice}
[Client Notes]: ${form.message || 'No additional notes provided.'}
      `.trim();

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'general_quote',
          name: form.name,
          phone: form.phone,
          email: form.email,
          postalCode: form.postalCode,
          insuranceType: form.insuranceType,
          bestTimeToCall: form.bestTimeToCall,
          preferredBroker: form.preferredOffice,
          message: detailedMessage,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Unable to send quote request automatically. Please call us directly at 204-571-1777.');
      }
    } catch {
      setError('Unable to send quote request automatically. Please call us directly at 204-571-1777.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        background: '#ffffff',
        borderRadius: '16px',
        padding: '56px 40px',
        textAlign: 'center',
        border: '2px solid #22c55e',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
        <div style={{
          display: 'inline-block',
          background: '#dcfce7',
          color: '#166534',
          fontSize: '12px',
          fontWeight: 800,
          padding: '6px 16px',
          borderRadius: '20px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '16px',
        }}>
          Request Sent Successfully
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#09090b', marginBottom: '12px' }}>
          Thank you, {form.name}!
        </h2>
        <p style={{ fontSize: '17px', color: '#71717a', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 28px' }}>
          Your quote request for <strong>{form.insuranceType}</strong> has been assigned to our licensed Brandon broker team. We will compare multiple insurer markets and contact you at <strong>{form.phone}</strong> within 1 business day.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={SITE.phoneHref} className="btn btn-red" style={{ padding: '14px 28px' }}>
            📞 Need Immediate Service? Call {SITE.phone}
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
            }}
            className="btn btn-outline"
            style={{ padding: '14px 28px' }}
          >
            Start Another Quote
          </button>
        </div>
      </div>
    );
  }

  const stepsList = ['Coverage Type', 'Policy Details', 'Contact & Receive Quote'];

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #e4e4e7',
      boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
      overflow: 'hidden',
    }}>
      {/* Progress Header */}
      <div style={{ background: '#09090b', padding: '28px 36px', color: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 900, color: '#dc2626', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            Ficek Independent Quote Engine
          </span>
          <span style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 700 }}>
            Step {step} of 3
          </span>
        </div>

        {/* Step indicators */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {stepsList.map((label, idx) => {
            const num = idx + 1;
            const active = step === num;
            const done = step > num;
            return (
              <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: num < 3 ? 1 : 'none' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: done ? '#22c55e' : active ? '#dc2626' : '#27272a',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 900,
                  flexShrink: 0,
                }}>
                  {done ? '✓' : num}
                </div>
                <span style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: active ? '#ffffff' : done ? '#22c55e' : '#71717a',
                  whiteSpace: 'nowrap',
                }}>
                  {label}
                </span>
                {num < 3 && (
                  <div style={{
                    flex: 1,
                    height: '2px',
                    background: done ? '#22c55e' : '#27272a',
                    minWidth: '16px',
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div style={{ padding: '36px' }}>
        {/* STEP 1: SELECT CATEGORY */}
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
              What type of insurance can we shop for you?
            </h3>
            <p style={{ fontSize: '15px', color: '#71717a', marginBottom: '24px' }}>
              Select your primary coverage need below. We represent 18+ insurance carriers and MGAs across Manitoba.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px',
              marginBottom: '28px',
            }}>
              {INSURANCE_CATEGORIES.map((cat) => {
                const isSelected = form.insuranceType === cat.title;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => update('insuranceType', cat.title)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '18px 16px',
                      borderRadius: '10px',
                      border: isSelected ? '2px solid #dc2626' : '1.5px solid #e4e4e7',
                      background: isSelected ? '#fef2f2' : '#ffffff',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      boxShadow: isSelected ? '0 8px 20px rgba(220,38,38,0.1)' : 'none',
                    }}
                  >
                    <span style={{ fontSize: '28px', flexShrink: 0 }}>{cat.icon}</span>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: isSelected ? '#dc2626' : '#09090b', marginBottom: '4px' }}>
                        {cat.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#71717a', lineHeight: 1.4 }}>
                        {cat.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: COVERAGE GOALS & DETAILS */}
        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
              Tell us a few details about your {form.insuranceType}
            </h3>
            <p style={{ fontSize: '15px', color: '#71717a', marginBottom: '24px' }}>
              These optional details help our brokers narrow down the best matching carrier discounts before we call.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                  Property Address, Vehicle Make/Model, or Farm/Business Description
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2022 Ford F-150 / 123 Victoria Ave, Brandon / Grain & livestock farm"
                  value={form.propertyOrVehicleDetails}
                  onChange={(e) => update('propertyOrVehicleDetails', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #e4e4e7',
                    fontSize: '15px',
                    color: '#09090b',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Current Insurer or MPI
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MPI / Wawanesa / Intact / Other"
                    value={form.currentInsurerOrMPI}
                    onChange={(e) => update('currentInsurerOrMPI', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Policy Renewal Timeline
                  </label>
                  <select
                    value={form.estimatedRenewal}
                    onChange={(e) => update('estimatedRenewal', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fff',
                    }}
                  >
                    <option value="">Select timeline...</option>
                    <option value="Immediate / Buying this week">Immediate / Buying this week</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="1 to 3 Months">1 to 3 Months</option>
                    <option value="Just comparison shopping">Just comparison shopping</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '10px' }}>
                  What matters most to you? (Check all that apply)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {[
                    'Lowest Monthly Rate',
                    'Higher Liability Protection ($5M–$10M)',
                    'Multi-Policy Bundle Discounts',
                    'Zero or Low Deductible Options',
                    'Sewer Backup / Overland Water Protection',
                    'Local Brandon Broker Support',
                  ].map((goal) => {
                    const isChecked = form.coverageGoals.includes(goal);
                    return (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          border: isChecked ? '1.5px solid #dc2626' : '1.5px solid #e4e4e7',
                          background: isChecked ? '#fef2f2' : '#fafafa',
                          color: isChecked ? '#dc2626' : '#09090b',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: isChecked ? '2px solid #dc2626' : '2px solid #d4d4d8',
                          background: isChecked ? '#dc2626' : '#ffffff',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 900,
                          flexShrink: 0,
                        }}>
                          {isChecked ? '✓' : ''}
                        </span>
                        {goal}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT INFORMATION */}
        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#09090b', marginBottom: '8px' }}>
              Where should our broker send your quote comparisons?
            </h3>
            <p style={{ fontSize: '15px', color: '#71717a', marginBottom: '24px' }}>
              A licensed Brandon broker will review your coverage and prepare a comprehensive comparison across top Canadian insurers.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Austin Liske"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="204-xxx-xxxx"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Postal Code (MB)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. R7A 6Z4"
                    value={form.postalCode}
                    onChange={(e) => update('postalCode', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '15px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Preferred Brandon Office
                  </label>
                  <select
                    value={form.preferredOffice}
                    onChange={(e) => update('preferredOffice', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '14px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fff',
                    }}
                  >
                    <option value="1439 1st Street (Main Office)">1439 1st Street (Main Office HQ)</option>
                    <option value="1525 18th Street Office">1525 18th Street Office</option>
                    <option value="Either Brandon Location">Either Brandon Location</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                    Best Time to Call
                  </label>
                  <select
                    value={form.bestTimeToCall}
                    onChange={(e) => update('bestTimeToCall', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #e4e4e7',
                      fontSize: '14px',
                      color: '#09090b',
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: '#fff',
                    }}
                  >
                    <option value="Morning (9am – 12pm)">Morning (9am – 12pm)</option>
                    <option value="Afternoon (12pm – 4pm)">Afternoon (12pm – 4pm)</option>
                    <option value="Late Afternoon (4pm – 7pm)">Late Afternoon (4pm – 7pm)</option>
                    <option value="Anytime during business hours">Anytime during business hours</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '6px' }}>
                  Additional Notes or Questions (Optional)
                </label>
                <textarea
                  placeholder="Tell us any specifics, current vehicle / home details, or questions..."
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  style={{
                    width: '100%',
                    height: '80px',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #e4e4e7',
                    fontSize: '14px',
                    color: '#09090b',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Error Notification */}
        {error && (
          <div style={{
            marginTop: '20px',
            padding: '12px 16px',
            background: '#fef2f2',
            border: '1.5px solid #fecaca',
            borderRadius: '8px',
            color: '#dc2626',
            fontSize: '14px',
            fontWeight: 700,
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Action Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '32px',
          paddingTop: '20px',
          borderTop: '1px solid #f4f4f5',
        }}>
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              style={{
                background: '#ffffff',
                border: '1.5px solid #e4e4e7',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 800,
                color: '#09090b',
                cursor: 'pointer',
              }}
            >
              ← Back
            </button>
          ) : <div />}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-red"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              Continue to Step {step + 1} →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="btn btn-red"
              style={{
                padding: '14px 36px',
                fontSize: '16px',
                background: loading ? '#9ca3af' : '#dc2626',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Submitting...' : '🚀 Submit Free Quote Request'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
