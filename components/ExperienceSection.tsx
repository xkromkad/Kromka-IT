import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { educationData, workData, techCategories } from '@/lib/data';
import VideoPlayer from './VideoPlayer';

export default function ExperienceSection({ locale }: { locale: Locale }) {
  const t = useTranslations('experience');
  const education = educationData[locale];
  const work = workData[locale];
  const techs = techCategories[locale];

  return (
    <div className="max-w-5xl mx-auto">

      {/* Section heading */}
      <div className="flex items-center gap-4 mb-14 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
        <VideoPlayer src="/videos/rocket.webm" className="w-12 h-auto" loop />
      </div>

      {/* Education */}
      <SectionLabel>{t('educationTitle')}</SectionLabel>

      <ol className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-l-0 space-y-0">
        {education.map((year, yi) => (
          <li key={year.year} className="mb-10 ml-6 md:ml-0">
            <div
              className={`md:flex md:gap-10 ${
                yi % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:items-start`}
            >
              {/* Year badge */}
              <div className="flex-shrink-0 flex justify-center md:w-24">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-timeline rounded-full ring-4 ring-white md:hidden" />
                <div className="hidden md:flex items-center justify-center w-20 h-10 bg-dark text-white font-bold text-sm rounded-full shadow-md">
                  {year.year}
                </div>
                <span className="md:hidden font-bold text-timeline text-lg ml-2">{year.year}</span>
              </div>

              {/* Entries */}
              <div className="flex-1 max-w-xl space-y-3 mt-2 md:mt-0">
                {year.entries.map((entry, ei) => (
                  <div
                    key={ei}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-gray-200 transition-all"
                  >
                    <p className="text-sm text-gray-700">
                      <strong className="text-dark">{entry.label}</strong>
                      {' – '}
                      {entry.description}{' '}
                      {entry.url && (
                        <a
                          href={entry.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-timeline font-medium hover:text-brand transition-colors underline underline-offset-2"
                        >
                          {entry.urlLabel}
                        </a>
                      )}
                      {entry.urlSuffix && ` ${entry.urlSuffix}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Work experience */}
      <SectionLabel className="mt-16">{t('workTitle')}</SectionLabel>

      <div className="overflow-hidden rounded-2xl shadow-md border border-gray-100">
        <table className="w-full text-sm text-left">
          <thead className="bg-dark text-white">
            <tr>
              <th className="px-5 py-4 font-semibold tracking-wide">{t('table.employer')}</th>
              <th className="px-5 py-4 font-semibold tracking-wide">{t('table.duration')}</th>
              <th className="px-5 py-4 font-semibold tracking-wide">{t('table.position')}</th>
            </tr>
          </thead>
          <tbody>
            {work.map((job, i) => (
              <tr
                key={i}
                className={`transition-colors ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-amber-50/40`}
              >
                <td className="px-5 py-4 font-medium">
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark hover:text-timeline transition-colors hover:underline underline-offset-2"
                  >
                    {job.employer}
                  </a>
                </td>
                <td className="px-5 py-4 whitespace-nowrap text-gray-500 text-xs font-medium tracking-wide">
                  {job.duration}
                </td>
                <td className="px-5 py-4 text-gray-600">{job.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Technologies */}
      <SectionLabel className="mt-16">{t('technologiesTitle')}</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {techs.map((cat) => (
          <div
            key={cat.label}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-3">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs font-medium px-3 py-1 rounded-full ${cat.color}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 mb-8 ${className}`}>
      <span className="w-1 h-7 bg-brand rounded-full flex-shrink-0" />
      <h3 className="text-xl font-poppins font-semibold text-dark tracking-wide">{children}</h3>
    </div>
  );
}
