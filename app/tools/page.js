'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/data';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('inventory');

  // Home Inventory Calculator state
  const [livingRoom, setLivingRoom] = useState(15000);
  const [kitchen, setKitchen] = useState(12000);
  const [bedrooms, setBedrooms] = useState(25000);
  const [electronics, setElectronics] = useState(8000);
  const [garageTools, setGarageTools] = useState(10000);

  const totalContentsValue = livingRoom + kitchen + bedrooms + electronics + garageTools;

  // Commercial Gap Quiz state
  const [hasEmployees, setHasEmployees] = useState('yes');
  const [hasCommercialVehicle, setHasCommercialVehicle] = useState('yes');
  const [hasCyberData, setHasCyberData] = useState('yes');
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Bundle Estimator state
  const [hasAuto, setHasAuto] = useState(true);
  const [hasHome, setHasHome] = useState(true);
  const [hasRec, setHasRec] = useState(false);

  const estimatedBundleDiscount = (hasAuto && hasHome ? 15 : 0) + (hasRec ? 5 : 0);

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
            🧮 Client Calculators & Risk Tools
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Interactive Insurance Planning Tools
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a1a1aa',
            maxWidth: '640px',
            lineHeight: 1.65,
            marginBottom: '32px',
          }}>
            Estimate your home contents replacement value, evaluate commercial business gaps, or calculate multi-line bundle savings in seconds.
          </p>
        </div>
      </section>

      {/* ── TOOL NAVIGATION TABS ── */}
      <section style={{ background: '#f4f4f5', borderBottom: '1px solid #e4e4e7', padding: '16px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { id: 'inventory', label: '🏠 Home Contents Calculator' },
              { id: 'quiz', label: '🏢 Business Risk Gap Quiz' },
              { id: 'bundle', label: '💰 Bundle Savings Estimator' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === t.id ? '#dc2626' : '#ffffff',
                  color: activeTab === t.id ? '#ffffff' : '#09090b',
                  fontWeight: 800,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: activeTab === t.id ? '0 4px 12px rgba(220,38,38,0.2)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAB 1: HOME CONTENTS REPLACEMENT CALCULATOR ── */}
      {activeTab === 'inventory' && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div className="card card-red-top" style={{ padding: '36px', background: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Tool #1: Home Contents Calculator
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px' }}>
                Estimate Your Home Contents Replacement Cost
              </h2>
              <p style={{ color: '#71717a', lineHeight: 1.6, marginBottom: '28px' }}>
                Adjust the sliders below to estimate the total replacement value of your personal property. Most home insurance policies automatically include contents coverage based on this total.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                {[
                  { label: 'Living Room & Furniture', value: livingRoom, setter: setLivingRoom, max: 50000 },
                  { label: 'Kitchen & Appliances', value: kitchen, setter: setKitchen, max: 40000 },
                  { label: 'Bedrooms & Clothing', value: bedrooms, setter: setBedrooms, max: 80000 },
                  { label: 'Electronics & Media', value: electronics, setter: setElectronics, max: 30000 },
                  { label: 'Garage, Tools & Equipment', value: garageTools, setter: setGarageTools, max: 40000 },
                ].map((item, idx) => (
                  <div key={idx} style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '8px', fontSize: '15px' }}>
                      <span>{item.label}</span>
                      <span style={{ color: '#dc2626', fontWeight: 900 }}>${item.value.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max={item.max}
                      step="1000"
                      value={item.value}
                      onChange={(e) => item.setter(Number(e.target.value))}
                      style={{ width: '100%', accentColor: '#dc2626', cursor: 'pointer' }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ background: '#09090b', color: '#ffffff', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>
                  Estimated Personal Property Value
                </div>
                <div style={{ fontSize: '42px', fontWeight: 900, color: '#ef4444', marginBottom: '16px' }}>
                  ${totalContentsValue.toLocaleString()}
                </div>
                <Link href="/quote" className="btn btn-red" style={{ padding: '12px 28px', fontSize: '15px' }}>
                  Quote Home Insurance With This Limit →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB 2: BUSINESS RISK GAP QUIZ ── */}
      {activeTab === 'quiz' && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div className="card card-red-top" style={{ padding: '36px', background: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Tool #2: Commercial Gap Quiz
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px' }}>
                Business Coverage Gap Assessment
              </h2>
              <p style={{ color: '#71717a', lineHeight: 1.6, marginBottom: '28px' }}>
                Answer 3 quick questions to check if your commercial business operations have potential coverage exposures.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
                  <label style={{ fontWeight: 800, display: 'block', marginBottom: '10px' }}>
                    1. Do you employ full-time or part-time staff in Manitoba?
                  </label>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                      onClick={() => setHasEmployees('yes')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #dc2626', background: hasEmployees === 'yes' ? '#dc2626' : '#ffffff', color: hasEmployees === 'yes' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasEmployees('no')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #e4e4e7', background: hasEmployees === 'no' ? '#09090b' : '#ffffff', color: hasEmployees === 'no' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
                  <label style={{ fontWeight: 800, display: 'block', marginBottom: '10px' }}>
                    2. Do you or your staff drive personal vehicles for business errands?
                  </label>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                      onClick={() => setHasCommercialVehicle('yes')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #dc2626', background: hasCommercialVehicle === 'yes' ? '#dc2626' : '#ffffff', color: hasCommercialVehicle === 'yes' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasCommercialVehicle('no')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #e4e4e7', background: hasCommercialVehicle === 'no' ? '#09090b' : '#ffffff', color: hasCommercialVehicle === 'no' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e4e4e7' }}>
                  <label style={{ fontWeight: 800, display: 'block', marginBottom: '10px' }}>
                    3. Do you store client payment information, emails, or digital data?
                  </label>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <button
                      onClick={() => setHasCyberData('yes')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #dc2626', background: hasCyberData === 'yes' ? '#dc2626' : '#ffffff', color: hasCyberData === 'yes' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasCyberData('no')}
                      style={{ padding: '8px 20px', borderRadius: '6px', border: '1px solid #e4e4e7', background: hasCyberData === 'no' ? '#09090b' : '#ffffff', color: hasCyberData === 'no' ? '#ffffff' : '#09090b', fontWeight: 700, cursor: 'pointer' }}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '24px', borderRadius: '12px', border: '2px solid #dc2626' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px', color: '#09090b' }}>
                  Recommended Coverage Protection:
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', marginBottom: '20px', color: '#09090b' }}>
                  {hasEmployees === 'yes' && <li>🛡️ <strong>Commercial General Liability & Non-Owned Auto:</strong> Essential for employee liability.</li>}
                  {hasCommercialVehicle === 'yes' && <li>🚗 <strong>Commercial Vehicle Endorsement:</strong> Basic personal Autopac may reject claims during business use.</li>}
                  {hasCyberData === 'yes' && <li>💻 <strong>Cyber Liability & Data Breach:</strong> Protects against digital theft & wire fraud.</li>}
                </ul>
                <Link href="/quote" className="btn btn-red" style={{ justifyContent: 'center' }}>
                  Consult a Ficek Commercial Broker →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TAB 3: BUNDLE SAVINGS ESTIMATOR ── */}
      {activeTab === 'bundle' && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container" style={{ maxWidth: '840px' }}>
            <div className="card card-red-top" style={{ padding: '36px', background: '#fafafa' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Tool #3: Bundle Savings Estimator
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '12px' }}>
                Multi-Policy Savings Estimator
              </h2>
              <p style={{ color: '#71717a', lineHeight: 1.6, marginBottom: '28px' }}>
                Bundling multiple policies through Ficek Insurance qualifies you for multi-policy discounts with top Canadian insurers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  { label: 'Auto Insurance (MPI Extension)', state: hasAuto, setter: setHasAuto },
                  { label: 'Home, Tenant, or Farm Dwelling', state: hasHome, setter: setHasHome },
                  { label: 'Recreational (Boat, ATV, Snowmobile)', state: hasRec, setter: setHasRec },
                ].map((item, idx) => (
                  <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#ffffff', padding: '16px 20px', borderRadius: '8px', border: '1px solid #e4e4e7', cursor: 'pointer', fontWeight: 700 }}>
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={(e) => item.setter(e.target.checked)}
                      style={{ width: '20px', height: '20px', accentColor: '#dc2626' }}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>

              <div style={{ background: '#09090b', color: '#ffffff', padding: '28px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, marginBottom: '4px' }}>
                  Estimated Bundle Savings Potential
                </div>
                <div style={{ fontSize: '48px', fontWeight: 900, color: '#ef4444', marginBottom: '16px' }}>
                  Up to {estimatedBundleDiscount}% OFF
                </div>
                <p style={{ fontSize: '14px', color: '#a1a1aa', marginBottom: '20px' }}>
                  Multi-policy discounts apply across home, private auto extensions, and recreational lines.
                </p>
                <Link href="/quote" className="btn btn-red" style={{ padding: '14px 32px', fontSize: '16px' }}>
                  Start Bundled Quote →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
