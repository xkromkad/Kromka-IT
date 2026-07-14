import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { SITE_URL, buildAlternates } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';

const PATH = '/tvorba-webovych-stranok-poprad';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'localPoprad' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, PATH),
    openGraph: { title: t('metaTitle'), description: t('metaDescription') },
  };
}

export default async function LocalPopradPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('localPoprad');

  const canonical = locale === 'en' ? `${SITE_URL}/en${PATH}` : `${SITE_URL}${PATH}`;
  const homeUrl = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;

  const benefits = [t('benefit1'), t('benefit2'), t('benefit3'), t('benefit4')];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: t('title'),
        serviceType: 'Web development',
        description: t('metaDescription'),
        url: canonical,
        areaServed: [
          { '@type': 'City', name: 'Poprad' },
          { '@type': 'Country', name: 'Slovensko' },
        ],
        provider: { '@id': 'https://kromka.it/#business' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kromka IT', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: t('title'), item: canonical },
        ],
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/" className="inline-block mb-8 text-timeline hover:underline font-medium">
        ← {t('backHome')}
      </Link>

      <h1 className="text-4xl font-bold font-poppins mb-6 tracking-tight text-dark">
        {t('title')}
      </h1>

      <div className="space-y-4 text-gray-600 leading-relaxed mb-12">
        {t('intro')
          .split('\n\n')
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('benefitsTitle')}
        </h2>
        <ul className="space-y-2 text-gray-600">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="text-brand mt-1">✦</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('whyTitle')}
        </h2>
        <p className="text-gray-600 leading-relaxed">{t('why')}</p>
      </section>

      {/* CTA + contact form */}
      <section className="mt-16 rounded-2xl border border-gray-100 bg-gray-50 px-6 py-10 sm:px-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-poppins mb-2 tracking-tight text-dark">
            {t('ctaTitle')}
          </h2>
          <p className="text-gray-500">{t('ctaSubtitle')}</p>
          <div className="w-12 h-1 bg-brand rounded-full mx-auto mt-6" />
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
