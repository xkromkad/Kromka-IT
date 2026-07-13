import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getProjectSlugs } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, alternates: { languages: { sk: base, en: `${base}/en` } } },
    {
      url: `${base}/privacy-policy`,
      lastModified: now,
      alternates: { languages: { sk: `${base}/privacy-policy`, en: `${base}/en/privacy-policy` } },
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      alternates: { languages: { sk: `${base}/terms`, en: `${base}/en/terms` } },
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      alternates: { languages: { sk: `${base}/projects`, en: `${base}/en/projects` } },
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: now,
    alternates: {
      languages: {
        sk: `${base}/projects/${slug}`,
        en: `${base}/en/projects/${slug}`,
      },
    },
  }));

  return [...staticRoutes, ...projectRoutes];
}
