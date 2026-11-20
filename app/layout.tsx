import type { Metadata } from 'next';
import { Playfair_Display, Merriweather, Poppins } from 'next/font/google';
import './globals.css';
import { DEFAULT_OG_IMAGE, SITE_URL } from './lib/seo';
import CookieConsent from './components/CookieConsent';
import { consentDefaults } from './lib/consent-defaults';
import PageLoader from './components/PageLoader';
import LenisProvider from './components/LenisProvider';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-merriweather',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  keywords: [
    'Liberty India',
    'India DMC',
    'Destination Management Company India',
    'MICE India',
    'India luxury travel',
    'India corporate events',
    'India incentive travel',
    'India conferences',
    'India exhibitions',
    'leisure travel India',
    'India tour operator',
    'luxury India tours',
    'India heritage tours',
    'India wildlife tours',
    'India wellness retreats',
    'India cultural tours',
  ],
  authors: [{ name: 'Liberty India' }],
  creator: 'Liberty India',
  publisher: 'Liberty India',
  metadataBase: new URL(SITE_URL),
  robots: {
    index: process.env.VERCEL_ENV !== 'preview',
    follow: true,
    googleBot: {
      index: process.env.VERCEL_ENV !== 'preview',
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

/** JSON-LD structured data for SEO */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Liberty India',
  description:
    "India's Leading Destination Management Company specialising in MICE, Leisure, Events & Beyond.",
  url: SITE_URL + '/',
  image: DEFAULT_OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  serviceType: [
    'Destination Management',
    'MICE',
    'Leisure Travel',
    'Corporate Events',
    'Incentive Travel',
  ],
  slogan: 'Where Ancient Wisdom Meets Modern Luxury',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable} ${poppins.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: consentDefaults }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${merriweather.className} antialiased overflow-x-hidden`}>
        <PageLoader />
        <CookieConsent />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
