import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kromka.it';

  return [
    { url: base, lastModified: new Date(), alternates: { languages: { sk: base, en: `${base}/en` } } },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date(),
      alternates: { languages: { sk: `${base}/privacy-policy`, en: `${base}/en/privacy-policy` } },
    },
    {
      url: `${base}/terms`,
      lastModified: new Date(),
      alternates: { languages: { sk: `${base}/terms`, en: `${base}/en/terms` } },
    },
  ];
}
