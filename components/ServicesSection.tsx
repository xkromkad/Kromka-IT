import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { services } from '@/lib/data';

function ServiceIcon({ icon }: { icon: string }) {
  const cls = 'w-7 h-7';
  switch (icon) {
    case 'web':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17l-4-4 4-4m6 0l4 4-4 4M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" />
        </svg>
      );
    case 'fullstack':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12V7a2 2 0 012-2h10a2 2 0 012 2v5m-16 0h16m-16 0v5a2 2 0 002 2h10a2 2 0 002-2v-5M9 16h6" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.07-5.07l-1.42 1.42M8.35 15.65l-1.42 1.42m0-10.14l1.42 1.42m7.3 7.3l1.42 1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      );
    case 'database':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3c4.418 0 8 1.343 8 3s-3.582 3-8 3-8-1.343-8-3 3.582-3 8-3zM4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
        </svg>
      );
    case 'accessibility':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4 8l8 1.5L20 8M12 9.5V14m0 0l-3 7m3-7l3 7" />
        </svg>
      );
    case 'teaching':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" />
        </svg>
      );
    default:
      return null;
  }
}

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
          <div
            key={service.icon}
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
          </div>
        ))}
      </div>
    </div>
  );
}
