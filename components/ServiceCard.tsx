import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import type { Locale, Service } from '@/lib/data';
import ServiceIcon from './ServiceIcon';

export default function ServiceCard({ service, locale }: { service: Service; locale: Locale }) {
  const t = useTranslations('services');

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-label={service.title[locale]}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 hover:border-brand/40 transition-all duration-300 flex flex-col"
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center mb-5 rounded-xl bg-gradient-to-br from-brand to-yellow-400 text-dark shadow-md shadow-brand/30 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/40 transition-all duration-300">
        <ServiceIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h3 className="font-poppins font-semibold text-dark text-lg mb-2 tracking-tight">
        {service.title[locale]}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {service.description[locale]}
      </p>

      <span className="mt-4 text-xs font-semibold text-dark group-hover:text-timeline transition-colors">
        {t('detailsBtn')} →
      </span>
    </Link>
  );
}
