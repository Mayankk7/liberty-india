import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/seo';

// Emitted as a plain /robots.txt file at build time (static-host friendly).
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/under-development/', '/event-prod/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
