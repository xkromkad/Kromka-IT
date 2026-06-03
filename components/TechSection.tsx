import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import { techCategories } from '@/lib/data';

const TECH_LOGOS: Record<string, string> = {
  'ASP.NET Core': '/icons/tech/dotnet.svg',
  'Blazor': '/icons/tech/blazor.svg',
  'WinUI 3': '/icons/tech/dotnet.svg',
  '.NET': '/icons/tech/dotnet.svg',
  'Python': '/icons/tech/python.svg',
  'MS SQL Server': '/icons/tech/sqlserver.svg',
  'T-SQL': '/icons/tech/sqlserver.svg',
  'Vue.js': '/icons/tech/vuedotjs.svg',
  'Quasar': '/icons/tech/quasar.svg',
  'TypeScript': '/icons/tech/typescript.svg',
  'JavaScript': '/icons/tech/javascript.svg',
  'HTML': '/icons/tech/html5.svg',
  'CSS / SCSS': '/icons/tech/sass.svg',
  'Bootstrap': '/icons/tech/bootstrap.svg',
  'jQuery': '/icons/tech/jquery.svg',
  'Git': '/icons/tech/git.svg',
  'Node.js': '/icons/tech/nodedotjs.svg',
  'Docker': '/icons/tech/docker.svg',
  'React': '/icons/tech/react.svg',
  'PostgreSQL': '/icons/tech/postgresql.svg',
  'DevExpress': '/icons/tech/devexpress.svg',
  'Claude Code': '/icons/tech/claude.svg',
  'WCAG Accessibility': '/icons/tech/wcag.svg',
};

function shortName(name: string): string {
  if (name === 'CSS / SCSS') return 'SCSS';
  if (name === 'WCAG Accessibility') return 'WCAG';
  if (name === 'ASP.NET Core') return 'ASP.NET';
  if (name === 'MS SQL Server') return 'SQL Server';
  return name;
}

export default function TechSection({ locale }: { locale: Locale }) {
  const t = useTranslations('tech');
  const techs = techCategories[locale];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {techs.map((cat) => (
          <div
            key={cat.label}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
          >
            <p className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-4">
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => {
                const logo = TECH_LOGOS[item];
                return (
                  <div key={item} title={item} className="flex flex-col items-center gap-1.5 w-[52px]">
                    <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center p-2 hover:bg-gray-100 hover:border-gray-200 transition-colors cursor-default">
                      {logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={logo} alt={item} width={28} height={28} className="object-contain w-full h-full" />
                      ) : (
                        <span className="text-[8px] font-bold text-gray-400 text-center leading-none">
                          {item.substring(0, 3).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="text-[9.5px] font-medium text-gray-500 text-center leading-tight w-full truncate">
                      {shortName(item)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
