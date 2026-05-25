import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sk', 'en'],
  defaultLocale: 'sk',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
