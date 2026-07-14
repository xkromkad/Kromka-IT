import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL, buildAlternates } from '@/lib/seo';

const locales = ['sk', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const canonical = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: t('ogTitle'),
      description: t('description'),
      url: canonical,
      type: 'website',
      images: [{ url: '/images/david.png', width: 800, height: 800, alt: 'Dávid Kromka' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('description'),
    },
    alternates: buildAlternates(locale, ''),
    icons: {
      icon: [
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      ],
    },
    robots: { index: true, follow: true },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://kromka.it/#person',
      name: 'Dávid Kromka',
      jobTitle: 'Full-Stack Web Developer',
      url: 'https://kromka.it',
      email: 'david@kromka.it',
      image: 'https://kromka.it/images/david.png',
      description:
        'Full-stack developer based in Poprad, Slovakia. Specialising in ASP.NET Core, Blazor, WinUI 3 and MS SQL. Available for commercial projects across Slovakia and remotely.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Poprad',
        addressRegion: 'Prešovský kraj',
        addressCountry: 'SK',
      },
      worksFor: {
        '@type': 'Organization',
        name: 'SEN Systems',
        url: 'https://sensystems.sk',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Faculty of Informatics and Information Technologies STU',
        url: 'https://www.fiit.stuba.sk',
      },
      knowsAbout: [
        'Blazor', 'ASP.NET Core', 'WinUI 3', 'MS SQL', 'Vue.js',
        'TypeScript', 'Full-Stack Development', 'Web Accessibility',
      ],
      sameAs: [
        'https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217',
        'https://github.com/xkromkad',
        'https://www.instagram.com/davidkromka/',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://kromka.it/#business',
      name: 'Kromka IT – Dávid Kromka',
      description:
        'Tvorba webových stránok a webových aplikácií na mieru v Poprade. Full-stack vývoj od návrhu po nasadenie pre klientov z celého Slovenska aj na diaľku.',
      url: 'https://kromka.it',
      image: 'https://kromka.it/images/david.png',
      email: 'david@kromka.it',
      priceRange: '€€',
      founder: { '@id': 'https://kromka.it/#person' },
      provider: { '@id': 'https://kromka.it/#person' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nám. sv. Egídia 11/25',
        addressLocality: 'Poprad',
        postalCode: '058 01',
        addressRegion: 'Prešovský kraj',
        addressCountry: 'SK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 49.0559,
        longitude: 20.2976,
      },
      areaServed: [
        { '@type': 'City', name: 'Poprad' },
        { '@type': 'Country', name: 'Slovensko' },
      ],
      knowsLanguage: ['sk', 'en'],
      sameAs: [
        'https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217',
        'https://github.com/xkromkad',
        'https://www.instagram.com/davidkromka/',
      ],
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <CookieBanner />
    </NextIntlClientProvider>
  );
}
