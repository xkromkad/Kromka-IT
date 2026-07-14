import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import ScrollButton from './ScrollButton';

export default function HeroSection({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations('hero');

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex items-center bg-gradient-to-b from-gray-50 to-white">
      {/* Main hero */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">

            {/* Text side */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              {/* Kromka.IT logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/kromkait.png" alt="Kromka.IT" height={48} className="h-12 w-auto object-contain mb-6" />

              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-dark leading-tight tracking-tight">
                {t('name')}
              </h1>
              <p className="text-lg md:text-xl font-poppins text-dark font-semibold mt-3">
                {t('tagline')}
              </p>

              <div className="w-16 h-1.5 bg-brand rounded-full mt-5 mb-7 mx-auto md:mx-0" />

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

              <p className="text-gray-500 leading-relaxed max-w-xl text-[15px] mt-4 font-medium">
                {t('location')}
              </p>

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
                <a
                  href="/CV_Kromka.pdf"
                  download
                  className="inline-flex items-center gap-2 border-2 border-brand text-dark text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-brand transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t('cvBtn')}
                </a>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-7 justify-center md:justify-start">
                <a
                  href="https://github.com/xkromkad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:border-dark hover:shadow-md transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/github.svg" alt="GitHub" width={18} height={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:border-dark hover:shadow-md transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                </a>
                <a
                  href="https://www.instagram.com/davidkromka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:border-dark hover:shadow-md transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/instagram.svg" alt="Instagram" width={18} height={18} />
                </a>
              </div>
            </div>

            {/* Code editor illustration */}
            <div className="relative flex-shrink-0">
              <div className="w-[300px] md:w-[360px] bg-[#1e1e2e] rounded-2xl shadow-2xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#181825]">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="ml-3 flex gap-2 text-[11px] text-gray-500 font-mono overflow-hidden">
                    <span className="text-gray-200 bg-[#1e1e2e] px-2.5 py-0.5 rounded-t border-t border-x border-white/10 whitespace-nowrap">
                      HomeController.cs
                    </span>
                    <span className="whitespace-nowrap">Program.cs</span>
                  </div>
                </div>

                {/* Code content */}
                <div className="px-5 py-4 font-mono text-[11.5px] leading-[21px] select-none overflow-hidden">
                  <div>
                    <span className="text-[#c792ea]">using</span>
                    <span className="text-[#a6accd]"> Microsoft.AspNetCore.Mvc;</span>
                  </div>
                  <div className="h-2" />
                  <div>
                    <span className="text-[#82aaff]">namespace</span>
                    <span className="text-[#a6accd]"> Kromka.IT;</span>
                  </div>
                  <div className="h-2" />
                  <div>
                    <span className="text-[#c792ea]">public class </span>
                    <span className="text-[#82aaff]">HomeController</span>
                    <span className="text-[#89ddff]"> : Controller</span>
                  </div>
                  <div><span className="text-[#89ddff]">{'{'}</span></div>
                  <div className="ml-5 mt-0.5">
                    <span className="text-[#c792ea]">public </span>
                    <span className="text-[#a6accd]">IActionResult </span>
                    <span className="text-[#ffcb6b]">Index</span>
                    <span className="text-[#a6accd]">()</span>
                  </div>
                  <div className="ml-5"><span className="text-[#89ddff]">{'{'}</span></div>
                  <div className="ml-10">
                    <span className="text-[#c792ea]">return </span>
                    <span className="text-[#ffcb6b]">View</span>
                    <span className="text-[#a6accd]">(model);</span>
                  </div>
                  <div className="ml-5"><span className="text-[#89ddff]">{'}'}</span></div>
                  <div><span className="text-[#89ddff]">{'}'}</span></div>
                </div>

                {/* Status bar */}
                <div className="px-4 py-2 bg-[#512BD4] flex items-center text-[10px] text-white/80 font-mono gap-3">
                  <span>⎇ main</span>
                  <span className="ml-auto">C#  ·  .NET 8  ·  ASP.NET Core</span>
                </div>
              </div>

              {/* Floating badge – .NET */}
              <div className="absolute -top-3 -right-4 bg-white shadow-lg rounded-xl px-3 py-2 flex items-center gap-1.5 border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/tech/dotnet.svg" alt=".NET" width={20} height={20} className="object-contain" />
                <span className="text-xs font-bold text-dark">.NET</span>
              </div>

              {/* Floating badge – Vue.js */}
              <div className="absolute -bottom-3 -left-4 bg-white shadow-lg rounded-xl px-3 py-2 flex items-center gap-1.5 border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/tech/vuedotjs.svg" alt="Vue.js" width={20} height={20} className="object-contain" />
                <span className="text-xs font-bold text-dark">Vue.js</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
