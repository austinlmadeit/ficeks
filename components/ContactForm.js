'use client';

import { useState } from 'react';

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
      setError('Failed to send message. Please call us directly at 204-571-1777.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={{
        background: '#f0fdf4',
        border: '1.5px solid #bbf7d0',
        borderRadius: '12px',
        padding: '36px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>✉️</div>
        <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#166534', marginBottom: '8px' }}>
          Message Received!
        </h3>
        <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px' }}>
          Thank you, {form.name}. Your inquiry has been sent to our Brandon broker team. We will review it and reply shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', topic: 'General Inquiry', message: '' });
          }}
          className="btn btn-outline"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '8px',
    border: '1.5px solid #e4e4e7',
    fontSize: '14px',
    color: '#09090b',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 800,
    color: '#71717a',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="grid-2" style={{ gap: '14px' }}>
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

      <div className="grid-2" style={{ gap: '14px' }}>
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
          style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
        />
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
