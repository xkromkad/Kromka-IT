import { useTranslations } from 'next-intl';
import type { CompanyCooperation, Locale } from '@/lib/data';
import { companyCooperations } from '@/lib/data';

function CompanyCard({
  company,
  locale,
  featured = false,
}: {
  company: CompanyCooperation;
  locale: Locale;
  featured?: boolean;
}) {
  const logo = company.logoEn && locale === 'en' ? company.logoEn : company.logo;

  return (
    <a
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        featured ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-8' : 'flex flex-col'
      }`}
    >
      {/* Logo area */}
      <div
        className={`h-24 flex items-center justify-center mb-5 bg-gray-50 rounded-xl p-4 ${
          featured ? 'sm:mb-0 sm:h-28 sm:w-64 sm:shrink-0' : ''
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={company.name}
          className={`w-auto object-contain ${
            featured
              ? 'max-h-16 max-w-[180px] sm:max-h-20 sm:max-w-[220px]'
              : 'max-h-16 max-w-[180px]'
          }`}
        />
      </div>

      <div className={featured ? 'sm:flex-1 sm:flex sm:flex-col' : 'contents'}>
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
      </div>
    </a>
  );
}

export default function CompanySection({ locale }: { locale: Locale }) {
  const t = useTranslations('companies');
  const [featured, ...rest] = companyCooperations;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CompanyCard company={featured} locale={locale} featured />
        {rest.map((company) => (
          <CompanyCard key={company.name} company={company} locale={locale} />
        ))}
      </div>
    </div>
  );
}
