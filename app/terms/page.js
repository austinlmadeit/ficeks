import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | Ficek Insurance',
  description: 'Terms of Service for using the Ficek Insurance website.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="section" style={{ background: '#fafafa' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link href="/" style={{ color: '#ef4444', fontWeight: 700, fontSize: '14px', marginBottom: '24px', display: 'inline-block' }}>
            ? Back to Home
          </Link>
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: '#71717a', marginBottom: '32px' }}>Last Updated: September 2026</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#3f3f46', lineHeight: 1.7 }}>
            <p>Welcome to the Ficek Insurance website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our website.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>1. Use of the Website</h3>
            <p>This website is intended to provide general information about Ficek Insurance, our services, and insurance products available in Manitoba. You agree to use this site only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the site.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>2. Online Quotes & Forms</h3>
            <p>The insurance quotes generated or requested through our website are estimates based on the information you provide. They do not constitute a binding offer of insurance. Final coverage and premiums are subject to verification and underwriting approval by the respective insurance carrier. Providing false or inaccurate information may result in an inaccurate quote or the denial of coverage.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>3. No Professional Advice</h3>
            <p>The content provided on this website is for informational purposes only and does not constitute professional, legal, or financial advice. For specific advice regarding your insurance needs, please speak directly with one of our licensed brokers.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>4. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and design elements, is the property of Ficek Insurance or its respective carriers and is protected by Canadian copyright and intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>
            
            <h3 style={{ color: '#09090b', fontSize: '20px', marginTop: '16px' }}>5. Limitation of Liability</h3>
            <p>Ficek Insurance makes every effort to ensure the accuracy of the information on this website, but we make no warranties or representations of any kind, express or implied, about the completeness or accuracy of the content. We will not be liable for any direct, indirect, or consequential damages arising from the use of this website.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
