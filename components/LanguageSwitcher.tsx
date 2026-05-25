'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 ml-4 border border-white/30 rounded-full px-2 py-1">
      <Link
        href={pathname}
        locale="sk"
        className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
          locale === 'sk' ? 'bg-brand text-dark' : 'text-white hover:text-brand'
        }`}
      >
        SK
      </Link>
      <span className="text-white/30 text-xs">|</span>
      <Link
        href={pathname}
        locale="en"
        className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
          locale === 'en' ? 'bg-brand text-dark' : 'text-white hover:text-brand'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
