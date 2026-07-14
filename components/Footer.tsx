import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-wrap gap-8 justify-between">
        <div>
          <p className="text-xl font-poppins font-semibold tracking-widest">
            Kromka<span className="text-brand">.</span>IT
          </p>
          <p className="text-sm text-gray-400 mt-1">{t('madeWith')}</p>
          <a
            href="mailto:david@kromka.it"
            className="text-sm text-gray-400 hover:text-brand transition-colors mt-1 inline-block"
          >
            david@kromka.it
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs text-gray-500">
            <Link href="/services" className="hover:text-brand transition-colors">
              {t('services')}
            </Link>
            <Link href="/projects" className="hover:text-brand transition-colors">
              {t('projects')}
            </Link>
            <Link href="/faq" className="hover:text-brand transition-colors">
              {t('faq')}
            </Link>
            <Link href="/tvorba-webovych-stranok-poprad" className="hover:text-brand transition-colors">
              {t('webPoprad')}
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x473e3a850c93a703:0xef9b54430441b858?sa=X&ved=1t:8290&ictx=111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 text-gray-400 hover:text-brand transition-colors group self-start"
        >
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="text-sm leading-snug">
            <p className="text-white font-medium">Coworking Poprad</p>
            <p>Nám. sv. Egídia 11/25</p>
            <p>058 01 Poprad</p>
          </div>
        </a>

        <div className="flex items-center gap-4 bg-brand rounded-full px-5 py-3 self-start">
          <a
            href="https://github.com/xkromkad"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub – Dávid Kromka"
            title="GitHub"
          >
            <Image src="/icons/github.svg" alt="GitHub" width={28} height={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn – Dávid Kromka"
            title="LinkedIn"
          >
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} />
          </a>
          <a
            href="https://www.instagram.com/davidkromka/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram – Dávid Kromka"
            title="Instagram"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={28} height={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
