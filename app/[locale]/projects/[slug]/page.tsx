import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import type { Locale } from '@/lib/data';
import { getProjectBySlug, getProjectSlugs } from '@/lib/data';
import { SITE_URL, buildAlternates } from '@/lib/seo';
import ProjectGallery from '@/components/ProjectGallery';

const locales: Locale[] = ['sk', 'en'];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale as Locale, slug);

  if (!project) {
    return { title: 'Kromka IT', robots: { index: false, follow: false } };
  }

  const title = `${project.title} | Kromka IT`;
  const canonical = locale === 'en' ? `${SITE_URL}/en/projects/${slug}` : `${SITE_URL}/projects/${slug}`;

  return {
    title,
    description: project.description,
    alternates: buildAlternates(locale, `/projects/${slug}`),
    openGraph: {
      title,
      description: project.description,
      url: canonical,
      type: 'article',
      images: project.image
        ? [{ url: project.image, alt: project.imageAlt ?? project.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(locale as Locale, slug);
  if (!project) notFound();

  const t = await getTranslations('projects');

  const canonical = locale === 'en' ? `${SITE_URL}/en/projects/${slug}` : `${SITE_URL}/projects/${slug}`;
  const projectsUrl = locale === 'en' ? `${SITE_URL}/en/projects` : `${SITE_URL}/projects`;
  const homeUrl = locale === 'en' ? `${SITE_URL}/en` : SITE_URL;

  const metaBits = [project.type, project.year, project.role].filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: canonical,
        ...(project.image ? { image: `${SITE_URL}${project.image}` } : {}),
        applicationCategory: 'WebApplication',
        operatingSystem: 'Web',
        author: {
          '@type': 'Person',
          name: 'Dávid Kromka',
          url: SITE_URL,
        },
        ...(project.techStack?.length ? { keywords: project.techStack.join(', ') } : {}),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Kromka IT', item: homeUrl },
          { '@type': 'ListItem', position: 2, name: t('breadcrumbProjects'), item: projectsUrl },
          { '@type': 'ListItem', position: 3, name: project.title, item: canonical },
        ],
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/projects"
        className="inline-block mb-8 text-timeline hover:underline font-medium"
      >
        ← {t('backToProjects')}
      </Link>

      <header className="mb-8">
        {project.type && (
          <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-2">
            {project.type}
          </p>
        )}
        <h1 className="text-4xl font-bold font-poppins mb-3 tracking-tight text-dark">
          {project.title}
        </h1>
        {metaBits.length > 0 && (
          <p className="text-sm text-gray-500">
            {project.year && (
              <span>
                {t('yearLabel')}: {project.year}
              </span>
            )}
            {project.year && project.role && <span className="mx-2">·</span>}
            {project.role && (
              <span>
                {t('roleLabel')}: {project.role}
              </span>
            )}
          </p>
        )}
      </header>

      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-150 bg-gray-100 shadow-sm mb-10">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-timeline transition-colors"
          >
            {t('visitSite')} ↗
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-200 text-dark text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            <Image src="/icons/github.svg" alt="" width={20} height={20} aria-hidden />
            {t('sourceCode')}
          </a>
        )}
      </div>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
          {t('aboutTitle')}
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {(project.longDescription ?? project.description).split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      {project.features && project.features.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
            {t('featuresTitle')}
          </h2>
          <ul className="space-y-2 text-gray-600">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="text-brand mt-1">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech stack */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
            {t('techStackTitle')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
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

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="mb-4">
          <h2 className="text-2xl font-bold font-poppins mb-4 tracking-tight text-dark">
            {t('screenshotsTitle')}
          </h2>
          <ProjectGallery screenshots={project.screenshots} />
        </section>
      )}
    </article>
  );
}
