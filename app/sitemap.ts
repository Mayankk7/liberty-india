import type { MetadataRoute } from 'next';
import { itineraries } from './itineraries/itineraries';
import { PAGES, SITE_URL } from './lib/seo';

// Emitted as a plain /sitemap.xml file at build time (static-host friendly).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = Object.entries(PAGES)
    .filter(([, seo]) => seo.index !== false)
    .map(([path]) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    }));

  const journeys = itineraries.map((it) => ({
    url: `${SITE_URL}/itineraries/${it.slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...journeys];
}
