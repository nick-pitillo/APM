export const metadata = {
  title: 'Careers at APM Restaurant Group',
  description:
    'Join the APM Restaurant Group team. Explore hospitality and culinary careers across our award-winning Japanese restaurants in Miami.',
  alternates: { canonical: '/career' },
  openGraph: {
    title: 'Careers at APM Restaurant Group',
    description:
      'Hospitality and culinary careers in Miami at APM Restaurant Group.',
    url: 'https://apmrestaurantgroup.com/career',
    images: [{ url: '/exploreopp.webp', width: 1200, height: 630, alt: 'Careers at APM' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at APM Restaurant Group',
    description:
      'Explore opportunities across our award-winning Japanese restaurants.'
  }
};

export default function CareerLayout({ children }) {
  return children;
}


