import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import type { PortfolioItem } from '@/lib/data';

/**
 * - `default`: standard card in a category grid
 * - `featured`: larger card for the lead app of a project family
 * - `compact`: horizontal card for the other apps of a project family
 */
export type ProjectCardVariant = 'default' | 'featured' | 'compact';

const cardClass =
  'group bg-white rounded-2xl border border-gray-150 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl';

export default function ProjectCard({
  item,
  variant = 'default',
}: {
  item: PortfolioItem;
  variant?: ProjectCardVariant;
}) {
  const t = useTranslations('portfolio');

  if (variant === 'compact') {
    return (
      <Link
        href={`/projects/${item.slug}`}
        aria-label={item.title}
        className={`${cardClass} flex h-full`}
      >
        {item.image && (
          <div className="relative w-28 sm:w-36 lg:w-44 shrink-0 overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.imageAlt ?? item.title}
              fill
              className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
              sizes="176px"
            />
          </div>
        )}
        <div className="p-4 flex flex-col justify-center min-w-0">
          <h3 className="text-left text-base font-bold font-poppins text-dark tracking-tight group-hover:text-timeline transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed line-clamp-2 lg:line-clamp-3">
            {item.description}
          </p>
        </div>
      </Link>
    );
  }

  const featured = variant === 'featured';

  return (
    <Link
      href={`/projects/${item.slug}`}
      aria-label={item.title}
      className={`${cardClass} flex flex-col h-full`}
    >
      {item.image && (
        <div
          className={`relative w-full overflow-hidden bg-gray-100 ${featured ? 'h-56 lg:h-64' : 'h-44'}`}
        >
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={
              featured
                ? '(max-width: 1024px) 100vw, 50vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            }
          />
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">
          {item.type}
        </p>
        <h3
          className={`text-left font-bold font-poppins text-dark mb-2 tracking-tight ${featured ? 'text-xl' : 'text-base'}`}
        >
          {item.title}
        </h3>
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

      <div className="px-5 pb-5 flex items-center justify-end border-t border-gray-100 pt-4">
        <span className="text-xs font-semibold text-dark group-hover:text-timeline transition-colors">
          {t('detailsBtn')} →
        </span>
      </div>
    </Link>
  );
}
