import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { portfolioData } from '@/lib/data';
import ProjectCard from './ProjectCard';
import VideoPlayer from './VideoPlayer';

export default function PortfolioSection({ locale }: { locale: Locale }) {
  const t = useTranslations('portfolio');
  const items = portfolioData[locale];

  return (
    <div className="max-w-6xl mx-auto">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-14 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
        <VideoPlayer src="/videos/laptop.webm" className="w-12 h-auto" loop />
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
