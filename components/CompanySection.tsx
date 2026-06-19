import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { companyCooperations } from '@/lib/data';

export default function CompanySection({ locale }: { locale: Locale }) {
  const t = useTranslations('companies');

  return (
    <div className="max-w-5xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {companyCooperations.map((company) => {
          const logo = company.logoEn && locale === 'en' ? company.logoEn : company.logo;
          return (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Logo area */}
              <div className="h-24 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt={company.name}
                  className="max-h-16 max-w-[180px] w-auto object-contain"
                />
              </div>

              {/* Company name */}
              <h3 className="font-poppins font-semibold text-dark text-base mb-2 tracking-tight">
                {company.name}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {company.description[locale]}
              </p>

              {/* URL */}
              <div className="mt-4 text-[11px] font-medium text-timeline group-hover:text-brand transition-colors">
                {company.url.replace('https://', '').replace('www.', '')} →
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
