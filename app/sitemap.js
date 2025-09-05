export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://apmrestaurantgroup.com';
  const routes = ['', '/about', '/press', '/career', '/contact', '/coming-soon/kuri-kuri', '/coming-soon/masayuki'];
  const now = new Date().toISOString();
  return routes.map((route) => ({
    url: `${baseUrl}${route || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.7,
  }));
}


