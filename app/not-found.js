import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px',
    }}>
      <div>
        <div style={{ fontSize: '80px', marginBottom: '16px', opacity: 0.3 }}>404</div>
        <h1 style={{ fontSize: '36px', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--muted)', marginBottom: '32px', maxWidth: '400px' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link href="/" className="btn btn-cta">← Back to Homepage</Link>
      </div>
    </section>
  );
}
