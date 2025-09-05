export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const nameMap = {
    'kuri-kuri': 'Kuri Kuri',
    'masayuki': 'Masayuki'
  };
  const name = nameMap[slug] || 'Coming Soon';
  const title = `${name} — Coming Soon`;
  const description = `${name} by APM Restaurant Group is coming soon to Miami.`;
  return {
    title,
    description,
    alternates: { canonical: `/coming-soon/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://apmrestaurantgroup.com/coming-soon/${slug}`,
      images: [{ url: '/apm.webp', width: 1200, height: 630, alt: title }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function ComingSoonLayout({ children }) {
  return children;
}


