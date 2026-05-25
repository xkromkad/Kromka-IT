import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { portfolioData } from '@/lib/data';
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
          <article
            key={item.title}
            className="group bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            {item.image && (
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}

            <div className="p-5 flex flex-col flex-1">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
                {item.type}
              </p>
              <h3 className="text-base font-bold font-poppins text-dark mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] text-gray-400 border border-gray-200 rounded-full px-2.5 py-0.5 bg-gray-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-5 pb-5 flex items-center justify-end gap-2 border-t border-gray-100 pt-4">
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub – ${item.title}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
                </a>
              )}
              {item.projectUrl && (
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-timeline transition-colors"
                >
                  {t('viewBtn')}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
