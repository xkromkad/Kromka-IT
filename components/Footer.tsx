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
          <div className="flex gap-4 mt-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-brand transition-colors">
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              {t('terms')}
            </Link>
          </div>
        </div>

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
