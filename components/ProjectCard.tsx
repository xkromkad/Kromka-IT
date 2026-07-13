import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import type { PortfolioItem } from '@/lib/data';

export default function ProjectCard({ item }: { item: PortfolioItem }) {
  const t = useTranslations('portfolio');

  return (
    <Link
      href={`/projects/${item.slug}`}
      aria-label={item.title}
      className="group bg-white rounded-2xl border border-gray-150 shadow-sm flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      {item.image && (
        <div className="relative h-44 w-full overflow-hidden bg-gray-100">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.title}
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
        <h3 className="text-base font-bold font-poppins text-dark mb-2 tracking-tight">{item.title}</h3>
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
