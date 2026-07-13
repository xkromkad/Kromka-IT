import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import type { Locale } from '@/lib/data';
import { getServiceBySlug, getServiceSlugs } from '@/lib/data';
import { SITE_URL, buildAlternates } from '@/lib/seo';
import ServiceIcon from '@/components/ServiceIcon';
import ContactForm from '@/components/ContactForm';

const locales: Locale[] = ['sk', 'en'];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServiceSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Kromka IT', robots: { index: false, follow: false } };
  }

  const loc = locale as Locale;
  const title = `${service.title[loc]} | Kromka IT`;
  const canonical = locale === 'en' ? `${SITE_URL}/en/services/${slug}` : `${SITE_URL}/services/${slug}`;

  return {
    title,
    description: service.description[loc],
    alternates: buildAlternates(locale, `/services/${slug}`),
    openGraph: {
      title,
      description: service.description[loc],
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.description[loc],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const loc = locale as Locale;
  const t = await getTranslations('services');

  const canonical = locale === 'en' ? `${SITE_URL}/en/services/${slug}` : `${SITE_URL}/services/${slug}`;
  const servicesUrl = locale === 'en' ? `${SITE_URL}/en/services` : `${SITE_URL}/services`;
  const homeUrl = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title[loc],
        serviceType: service.title[loc],
        description: service.description[loc],
        url: canonical,
        areaServed: { '@type': 'Country', name: 'Slovensko' },
        provider: {
          '@type': 'Person',
          name: 'Dávid Kromka',
          url: SITE_URL,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Poprad',
            addressRegion: 'Prešovský kraj',
            addressCountry: 'SK',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kromka IT', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: t('breadcrumbServices'), item: servicesUrl },
          { '@type': 'ListItem', position: 3, name: service.title[loc], item: canonical },
        ],
      },
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/services"
        className="inline-block mb-8 text-timeline hover:underline font-medium"
      >
        ← {t('backToServices')}
      </Link>

      <header className="flex items-center gap-4 mb-10">
        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand to-yellow-400 text-dark shadow-md shadow-brand/30">
          <ServiceIcon icon={service.icon} />
        </div>
        <h1 className="text-4xl font-bold font-poppins tracking-tight text-dark">
          {service.title[loc]}
        </h1>
      </header>

      {/* What I offer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('offerTitle')}
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {service.longDescription[loc].split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* What it means */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('meaningTitle')}
        </h2>
        <p className="text-gray-600 leading-relaxed">{service.meaning[loc]}</p>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('benefitsTitle')}
        </h2>
        <ul className="space-y-2 text-gray-600">
          {service.benefits[loc].map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="text-brand mt-1">✦</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Related tech */}
      {service.relatedTech && service.relatedTech.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
            {t('techTitle')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.relatedTech.map((tech) => (
              <span
                key={tech}
                className="text-sm text-gray-600 border border-gray-200 rounded-full px-3.5 py-1 bg-gray-50"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

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
    </article>
  );
}
