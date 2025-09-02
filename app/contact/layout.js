export const metadata = {
  title: 'Contact | APM Restaurant Group',
  description:
    'Get in touch with APM Restaurant Group for events, press, and general inquiries. Reach our corporate office and leadership team.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | APM Restaurant Group',
    description:
      'Events, press, and general inquiries for APM Restaurant Group in Miami.',
    url: 'https://apmrestaurantgroup.com/contact',
    images: [{ url: '/about/Rectangle 53.png', width: 1200, height: 630, alt: 'Contact APM' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact APM Restaurant Group',
    description:
      'Contact the APM Restaurant Group team in Miami.'
  }
};

export default function ContactLayout({ children }) {
  return children;
}


