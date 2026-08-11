import Link from 'next/link';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/data';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://ficekinsurance.com'),
  title: {
    default: 'Ficek Insurance | Independent Broker Brandon MB',
    template: '%s | Ficek Insurance',
  },
  description: SITE.description,
  keywords: ['insurance broker Brandon MB', 'Ficek Insurance', 'Autopac Brandon', 'home insurance Brandon MB', 'business insurance Brandon'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://ficekinsurance.com',
    siteName: SITE.name,
    title: 'Ficek Insurance | Independent Broker Brandon MB',
    description: SITE.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Ficek Insurance — Brandon, Manitoba' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ficek Insurance | Independent Broker Brandon MB',
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
    <html lang="en-CA" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body style={{ fontFamily: 'var(--font-body, Inter, sans-serif)' }}>
        <div className="dev-banner">
          🔴 FICEK BRAND REDESIGN · <Link href="/dev-notes" style={{ textDecoration: 'underline', color: '#ef4444', fontWeight: 800 }}>View Dev Notes & Audit Tracker</Link>
        </div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
