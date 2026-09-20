import type { MetadataRoute } from 'next';
import metaData from '@/data/metadata.json';

const base = metaData.site.url.replace(/\/$/, '');

export const dynamic = 'force-static';

// Only the home page is indexable. Every other route also carries a `noindex`
// meta tag — see the `robots` key in each page's exported metadata.
// `/$` is the Google/Bing anchor extension: it matches the root and nothing else.
// `/_next/` stays crawlable or the home page renders without its CSS for the bot.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/$', '/_next/', '/sitemap.xml'],
      disallow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
