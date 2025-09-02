export const metadata = {
  title: 'About | APM Restaurant Group',
  description:
    'Discover APM Restaurant Group: a Miami-based collection of award-winning Japanese restaurants led by Álvaro Pérez Miranda. Learn about our principles of omotenashi, komakai, and sensai.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | APM Restaurant Group',
    description:
      'A Miami-based collection of award-winning Japanese restaurants led by Álvaro Pérez Miranda.',
    url: 'https://apmrestaurantgroup.com/about',
    images: [{ url: '/apm.jpeg', width: 1200, height: 630, alt: 'About APM' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | APM Restaurant Group',
    description:
      'Award-winning Japanese restaurants in Miami led by Álvaro Pérez Miranda.'
  }
};

export default function AboutLayout({ children }) {
  return children;
}


