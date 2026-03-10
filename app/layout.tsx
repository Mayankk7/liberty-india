import type { Metadata } from 'next';
import { Playfair_Display, Merriweather, Poppins } from 'next/font/google';
import './globals.css';
import PageLoader from './components/PageLoader';

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
  title: 'Liberty India | India\'s Leading Destination Management Company | DMC & MICE',
  description:
    'Liberty India is India\'s premier Destination Management Company (DMC) specializing in MICE, Leisure travel, Events & Beyond. Experience where ancient wisdom meets modern luxury across India\'s most iconic destinations.',
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
  metadataBase: new URL('https://libertyindia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://libertyindia.com',
    siteName: 'Liberty India',
    title: 'Liberty India | India\'s Leading DMC & MICE Company',
    description:
      'India\'s premier Destination Management Company specializing in MICE, Leisure travel, Events & Beyond. Where ancient wisdom meets modern luxury.',
    images: [
      {
        url: '/images/home-section/mar.jpg',
        width: 1920,
        height: 1080,
        alt: 'Liberty India - Where Ancient Wisdom Meets Modern Luxury',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liberty India | India\'s Leading DMC & MICE Company',
    description:
      'India\'s premier Destination Management Company specializing in MICE, Leisure travel, Events & Beyond.',
    images: ['/images/home-section/mar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
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
    "India's Leading Destination Management Company specializing in MICE, Leisure, Events & Beyond.",
  url: 'https://libertyindia.com',
  image: 'https://libertyindia.com/images/home-section/mar.jpg',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${merriweather.className} antialiased overflow-x-hidden`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
