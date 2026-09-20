import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Ficek Insurance',
  description: 'Privacy Policy and data collection practices for Ficek Insurance.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link href="/" style={{ color: '#ef4444', fontWeight: 700, fontSize: '14px', marginBottom: '24px', display: 'inline-block' }}>
            ? Back to Home
          </Link>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: '#71717a', marginBottom: '32px' }}>Last Updated: September 2026</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#3f3f46', lineHeight: 1.7 }}>
            <p>At Ficek Insurance, we are committed to protecting the privacy and confidentiality of our clients' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with applicable Canadian privacy laws, including PIPEDA.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>1. Information We Collect</h3>
            <p>We collect personal information necessary to provide you with insurance products and services. This may include your name, contact information, date of birth, driver's license number, vehicle details, property information, and claims history. We only collect information that is strictly necessary for quoting, issuing, and maintaining your insurance policies.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>2. How We Use Your Information</h3>
            <p>Your personal information is used exclusively to evaluate your insurance needs, obtain accurate quotes from insurance carriers (such as Manitoba Public Insurance or Sandbox Mutual), process your applications, manage your policies, and communicate with you regarding your coverage or claims.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>3. Disclosure of Information</h3>
            <p>We do not sell your personal information to third parties. We only share your information with insurance companies, underwriters, and claims adjusters as required to secure and service your insurance policies. In some cases, we may be required to disclose information to regulatory authorities or by law.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>4. Data Security</h3>
            <p>We employ strict physical, electronic, and procedural safeguards to protect your personal information against unauthorized access, disclosure, or misuse. Information submitted through our online quote forms is encrypted and securely transmitted to our brokers.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>5. Your Consent</h3>
            <p>By using our website and submitting your information through our quote or contact forms, you consent to the collection, use, and disclosure of your personal information as described in this policy. You may withdraw your consent at any time, subject to legal or contractual restrictions, by contacting our office.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>Contact Us</h3>
            <p>If you have any questions about our privacy practices, please contact us at:</p>
            <p><strong>Ficek Insurance</strong><br/>1439 1st Street or 1550A Richmond Avenue<br/>Brandon, Manitoba<br/>Phone: 204-571-1777</p>
          </div>
        </div>
      </section>
    </main>
  );
}
