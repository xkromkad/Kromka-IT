import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ locale }: { locale: Locale }) {
  const t = useTranslations('services');

  return (
    <div className="max-w-5xl mx-auto">
      {/* Section heading */}
      <div className="flex flex-col items-center gap-3 mb-12 text-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
        <p className="text-gray-500 max-w-2xl">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} locale={locale} />
        ))}
      </div>
    </div>
  );
}
