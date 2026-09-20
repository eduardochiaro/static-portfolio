import type { MetadataRoute } from 'next';
import metaData from '@/data/metadata.json';

const base = metaData.site.url.replace(/\/$/, '');

export const dynamic = 'force-static';

// Home is the only indexable route, so it is the only one listed here —
// a sitemap advertising `noindex` pages just burns crawl budget.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${base}/` }];
}
