import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { groupProjects } from '@/lib/data';
import ProjectGroups from './ProjectGroups';
import VideoPlayer from './VideoPlayer';

export default function PortfolioSection({ locale }: { locale: Locale }) {
  const t = useTranslations('portfolio');
  const groups = groupProjects(locale);

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-14 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
        <VideoPlayer src="/videos/laptop.webm" className="w-12 h-auto" loop />
      </div>

      {/* Cards, grouped by category */}
      <ProjectGroups groups={groups} otherTitle={t('otherProjects')} headingLevel="h3" />
    </div>
  );
}
