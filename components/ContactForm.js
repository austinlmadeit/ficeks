'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'General Inquiry',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: form.name,
          phone: form.phone,
          email: form.email,
          insuranceType: form.topic,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Failed to send message. Please call us directly at 204-571-1777.');
      }
    } catch {
      setError('An error occurred. Please try again or call us at 204-571-1777.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        padding: '36px 28px',
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#166534', marginBottom: '8px' }}>
          Message Sent Successfully!
        </h3>
        <p style={{ fontSize: '14px', color: '#15803d', lineHeight: 1.6, marginBottom: '20px' }}>
          Thank you, <strong>{form.name}</strong>. One of our licensed Brandon brokers will review your message and contact you within 1 business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', topic: 'General Inquiry', message: '' });
          }}
          className="btn btn-outline-black"
          style={{ fontSize: '13px', padding: '10px 20px' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 700,
    color: '#09090b',
    marginBottom: '6px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #d4d4d8',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone Number *</label>
          <input
            type="tel"
            required
            placeholder="204-xxx-xxxx"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Topic / Department</label>
          <select
            value={form.topic}
            onChange={(e) => update('topic', e.target.value)}
            style={{ ...inputStyle, background: '#fff' }}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Auto Insurance & MPI">Auto Insurance & MPI</option>
            <option value="Home & Tenant Policy">Home & Tenant Policy</option>
            <option value="Commercial / Business">Commercial / Business</option>
            <option value="Farm & Agriculture">Farm & Agriculture</option>
            <option value="Policy Change or Payment">Policy Change or Payment</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>How Can We Help You? *</label>
        <textarea
          required
          placeholder="Please describe your insurance question or request..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          style={{ ...inputStyle, height: '110px', resize: 'vertical' }}
        />
      </div>

      {/* Consent Checkbox */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '2px' }}>
        <input type="checkbox" required id="contact-consent" style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: '#dc2626', cursor: 'pointer' }} />
        <label htmlFor="contact-consent" style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.5, cursor: 'pointer' }}>
          I agree to the <Link href="/terms" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Terms of Service</Link> and <Link href="/privacy" target="_blank" style={{ color: '#09090b', textDecoration: 'underline' }}>Privacy Policy</Link>, and consent to being contacted regarding this request.
        </label>
      </div>

      {error && (
        <div style={{
          padding: '10px 14px',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          color: '#dc2626',
          fontSize: '13px',
          fontWeight: 700,
        }}>
          ⚠️ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-red"
        style={{
          width: '100%',
          padding: '14px',
          fontSize: '15px',
          background: loading ? '#9ca3af' : '#dc2626',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Sending Message...' : 'Send Message to Ficek Brokers →'}
      </button>

      <p style={{ fontSize: '12px', color: '#71717a', textAlign: 'center', margin: 0 }}>
        🔒 Confidential. A licensed Brandon broker will respond within 1 business day.
      </p>
    </form>
  );
}
