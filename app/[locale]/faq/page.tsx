import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import type { Locale } from '@/lib/data';
import { faqItems } from '@/lib/data';
import { SITE_URL, buildAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });
  const title = `${t('title')} | Kromka IT`;

  return {
    title,
    description: t('description'),
    alternates: buildAlternates(locale, '/faq'),
    openGraph: { title, description: t('description') },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const t = await getTranslations('faq');

  const homeUrl = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;
  const faqUrl = locale === 'en' ? `${SITE_URL}/en/faq` : `${SITE_URL}/faq`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question[loc],
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer[loc],
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kromka IT', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: t('title'), item: faqUrl },
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

      <header className="mb-12">
        <h1 className="text-4xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('title')}
        </h1>
        <p className="text-gray-500 leading-relaxed">{t('subtitle')}</p>
      </header>

      <div className="divide-y divide-gray-150 border-y border-gray-150">
        {faqItems.map((item) => (
          <details key={item.question[loc]} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none font-semibold text-dark font-poppins tracking-tight">
              <span>{item.question[loc]}</span>
              <span className="text-brand text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.answer[loc]}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">{t('ctaText')}</p>
        <Link
          href="/#contact"
          className="inline-block bg-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-timeline transition-colors"
        >
          {t('ctaLink')}
        </Link>
      </div>
    </div>
  );
}
