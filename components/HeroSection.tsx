import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import VideoPlayer from './VideoPlayer';
import ScrollButton from './ScrollButton';

export default function HeroSection({ locale }: { locale: Locale }) {
  const t = useTranslations('hero');
  void locale;

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">

          {/* Text side */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Greeting */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-gray-400 text-sm tracking-widest uppercase font-medium">
                {t('greeting')}
              </span>
              <VideoPlayer src="/videos/hello.webm" className="w-7 h-auto" />
            </div>

            {/* Intro + Name */}
            <p className="text-gray-400 text-base font-lato mb-1">{t('intro')}</p>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-dark leading-tight tracking-tight">
              {t('name')}
            </h1>

            {/* Brand accent */}
            <div className="w-16 h-1.5 bg-brand rounded-full mt-5 mb-7 mx-auto md:mx-0" />

            {/* Description */}
            <p className="text-gray-500 leading-relaxed max-w-xl text-[15px]">
              {t('descPart1')}{' '}
              <span className="font-semibold text-dark">{t('descBold1')}</span>
              {t('descPart2')}{' '}
              <span className="font-semibold text-dark">{t('descBold2')}</span>
              {t('descPart3')}{' '}
              <a
                href="https://www.fiit.stuba.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-timeline font-medium underline underline-offset-2 hover:text-brand transition-colors"
              >
                {t('descUniversity')}
              </a>{' '}
              {t('descPart4')}
            </p>

            {/* CTAs */}
            <div className="flex gap-3 mt-9 flex-wrap justify-center md:justify-start">
              <ScrollButton
                targetId="experience"
                className="inline-flex items-center gap-2 bg-dark text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-timeline transition-colors shadow-md"
              >
                {t('moreBtn')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </ScrollButton>
              <ScrollButton
                targetId="contact"
                className="inline-flex items-center gap-2 border-2 border-dark text-dark text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-dark hover:text-white transition-all"
              >
                {t('contactBtn')}
              </ScrollButton>
            </div>
          </div>

          {/* Photo side */}
          <div className="relative flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/images/david.png"
                alt="Dávid Kromka – web developer and software engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative offset borders */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border-2 border-brand/50 pointer-events-none -z-10" />
            <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border border-gray-200 pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </div>
  );
}
