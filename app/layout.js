import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/data';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://ficekinsurance.com'),
  title: {
    default: 'Independent Insurance Broker Brandon MB | Ficek Insurance',
    template: '%s | Ficek Insurance',
  },
  description: SITE.description,
  keywords: ['insurance broker Brandon MB', 'independent insurance Manitoba', 'home insurance Brandon', 'auto insurance Brandon', 'Ficek Insurance'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ficekinsurance.com',
    siteName: SITE.name,
    title: 'Independent Insurance Broker Brandon MB | Ficek Insurance',
    description: SITE.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ficek Insurance — Brandon, Manitoba' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Independent Insurance Broker Brandon MB | Ficek Insurance',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: SITE.name,
  url: 'https://ficekinsurance.com',
  telephone: '+1-204-571-1777',
  email: SITE.email,
  description: SITE.description,
  foundingDate: String(SITE.founded),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.province,
    postalCode: SITE.address.postal,
    addressCountry: 'CA',
  },
  openingHours: ['Mo-Fr 09:00-17:00'],
  sameAs: [SITE.social.facebook],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
        <div className="dev-banner">
          🔬 SANDBOX BUILD — Not the live site · <a href="/dev-notes" style={{ textDecoration: 'underline' }}>View Dev Notes & SEO Issues</a>
        </div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
