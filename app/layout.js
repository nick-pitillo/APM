// app/layout.js

import { Montserrat } from 'next/font/google'; // 1. Import the font
import Script from 'next/script';
import './globals.css';

// 2. Configure the font with the weights you need and a CSS variable name.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Specify all the weights your design uses
  variable: '--font-montserrat', // This is the CSS variable Tailwind will use
});

export const metadata = {
  metadataBase: new URL('https://apmrestaurantgroup.com'),
  title: {
    default: 'APM Restaurant Group | Miami Japanese Restaurants',
    template: '%s | APM Restaurant Group'
  },
  description:
    'APM Restaurant Group is a Miami-based collection of award-winning Japanese restaurants, including the MICHELIN-starred Ogawa, led by founder Alvaro Perez Miranda. We bring omotenashi, precision, and sensibility to every dining experience.',
  keywords: [
    'APM Restaurant Group',
    'Miami restaurants',
    'Japanese restaurant Miami',
    'Omakase Miami',
    'Ogawa',
    'Hiyakawa',
    'Midorie',
    'Kuri Kuri',
    'Masayuki',
    'Alvaro Perez Miranda'
  ],
  authors: [
    { name: 'APM Restaurant Group' },
    { name: 'FRST SUBJECT', url: 'https://frstsubject.com' }
  ],
  creator: 'APM Restaurant Group',
  publisher: 'APM Restaurant Group',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'APM Restaurant Group | Miami Japanese Restaurants',
    description:
      'Award-winning Japanese restaurants in Miami led by Alvaro Perez Miranda, including the MICHELIN-starred Ogawa. Experience omotenashi, precision, and sensibility.',
    url: 'https://apmrestaurantgroup.com/',
    siteName: 'APM Restaurant Group',
    images: [
      {
        url: '/apm.webp',
        width: 1200,
        height: 630,
        alt: 'APM Restaurant Group'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APM Restaurant Group | Miami Japanese Restaurants',
    description:
      'Award-winning Japanese restaurants in Miami led by Alvaro Perez Miranda, including the MICHELIN-starred Ogawa.',
    images: ['/apm.webp']
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon-32x32.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/android-chrome-192x192.webp', sizes: '192x192', type: 'image/webp' },
      { url: '/android-chrome-512x512.webp', sizes: '512x512', type: 'image/webp' }
    ],
    apple: [
      { url: '/apple-touch-icon.webp', sizes: '180x180', type: 'image/webp' }
    ]
  },
  manifest: '/site.webmanifest',
  other: {
    developer: 'FRST SUBJECT',
    developerWebsite: 'https://frstsubject.com'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16469D'
};

export default function RootLayout({ children }) {
  return (
    // 3. Apply the font's variable to the <html> tag
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        {children}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'APM Restaurant Group',
            url: 'https://apmrestaurantgroup.com/',
            logo: 'https://apmrestaurantgroup.com/apm.webp',
            sameAs: [
              'https://www.instagram.com/apmrestaurantgroup/'
            ],
            founder: {
              '@type': 'Person',
              name: 'Alvaro Perez Miranda'
            }
          })}
        </Script>
      </body>
    </html>
  );
}