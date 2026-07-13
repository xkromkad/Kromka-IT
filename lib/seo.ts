import type { Metadata } from 'next';

export const SITE_URL = 'https://kromka.it';

/**
 * Build self-referential canonical + hreflang alternates for a given locale and path.
 * `path` is the locale-agnostic path (e.g. '' for home, '/privacy-policy').
 * Slovak is the default locale (no prefix); English lives under /en.
 */
export function buildAlternates(locale: string, path = ''): Metadata['alternates'] {
  const sk = `${SITE_URL}${path}`;
  const en = `${SITE_URL}/en${path}`;

  return {
    canonical: locale === 'en' ? en : sk,
    languages: {
      sk,
      en,
      'x-default': sk,
    },
  };
}
