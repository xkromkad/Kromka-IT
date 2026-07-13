import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import type { Locale } from '@/lib/data';
import { portfolioData } from '@/lib/data';
import { SITE_URL, buildAlternates } from '@/lib/seo';
import ProjectCard from '@/components/ProjectCard';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  const title = `${t('indexTitle')} | Kromka IT`;

  return {
    title,
    description: t('indexMetaDescription'),
    alternates: buildAlternates(locale, '/projects'),
    openGraph: { title, description: t('indexMetaDescription') },
  };
}

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('projects');
  const items = portfolioData[locale as Locale];

  const homeUrl = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;
  const projectsUrl = locale === 'en' ? `${SITE_URL}/en/projects` : `${SITE_URL}/projects`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: t('indexTitle'),
        description: t('indexMetaDescription'),
        url: projectsUrl,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kromka IT', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: t('indexTitle'), item: projectsUrl },
        ],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/" className="inline-block mb-8 text-timeline hover:underline font-medium">
        ← {t('backHome')}
      </Link>

      <header className="mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('indexTitle')}
        </h1>
        <p className="text-gray-500 leading-relaxed">{t('indexSubtitle')}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
