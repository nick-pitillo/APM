export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = 'https://apmrestaurantgroup.com';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


