import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Canonicalise www → apex so both hostnames don't serve duplicate content.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kromka.it' }],
        destination: 'https://kromka.it/:path*',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
