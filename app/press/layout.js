export const metadata = {
  title: 'Press & Accolades',
  description:
    'Read press features and accolades for APM Restaurant Group, including coverage from MICHELIN, Travel + Leisure, The Infatuation, and more.',
  alternates: { canonical: '/press' },
  openGraph: {
    title: 'Press & Accolades | APM Restaurant Group',
    description:
      'APM Restaurant Group in the press: MICHELIN, Travel + Leisure, The Infatuation, and more.',
    url: 'https://apmrestaurantgroup.com/press',
    images: [
      { url: '/press/ogawa.png', width: 1200, height: 630, alt: 'APM Press' }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Accolades | APM Restaurant Group',
    description:
      'Coverage from MICHELIN, Travel + Leisure, The Infatuation, and more.'
  }
};

export default function PressLayout({ children }) {
  return children;
}


