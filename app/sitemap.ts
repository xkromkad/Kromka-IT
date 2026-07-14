import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getProjectSlugs, getServiceSlugs } from '@/lib/data';

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
    {
      url: `${base}/services`,
      lastModified: now,
      alternates: { languages: { sk: `${base}/services`, en: `${base}/en/services` } },
    },
    {
      url: `${base}/faq`,
      lastModified: now,
      alternates: { languages: { sk: `${base}/faq`, en: `${base}/en/faq` } },
    },
    {
      url: `${base}/tvorba-webovych-stranok-poprad`,
      lastModified: now,
      alternates: {
        languages: {
          sk: `${base}/tvorba-webovych-stranok-poprad`,
          en: `${base}/en/tvorba-webovych-stranok-poprad`,
        },
      },
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

  const serviceRoutes: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    alternates: {
      languages: {
        sk: `${base}/services/${slug}`,
        en: `${base}/en/services/${slug}`,
      },
    },
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
