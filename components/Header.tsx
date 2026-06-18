'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { id: 'kromka', key: 'home' },
  { id: 'services', key: 'services' },
  { id: 'companies', key: 'companies' },
  { id: 'projects', key: 'portfolio' },
  { id: 'technologies', key: 'technologies' },
  { id: 'experience', key: 'experience' },
  { id: 'contact', key: 'contact' },
] as const;

function NavIcon({ id }: { id: string }) {
  const cls = 'w-4 h-4 flex-shrink-0';
  switch (id) {
    case 'kromka':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    case 'services':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    case 'companies':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case 'projects':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      );
    case 'technologies':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'experience':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'contact':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Header() {
  const t = useTranslations('nav');
  const [active, setActive] = useState('kromka');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  const scrollTo = useCallback((id: string) => {
    setActive(id);
    setIsManualScroll(true);
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }

    setTimeout(() => setIsManualScroll(false), 800);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;
      const scrollY = window.scrollY;
      let current = 'kromka';

      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && scrollY + 200 >= el.offsetTop) {
          current = id;
        }
      }

      if (current !== active) {
        setActive(current);
        history.pushState(null, '', current === 'kromka' ? '#kromka' : `#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active, isManualScroll]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setTimeout(() => scrollTo(hash), 150);
  }, [scrollTo]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark shadow-lg" style={{ height: '4.5rem' }}>
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        <button onClick={() => scrollTo('kromka')} aria-label="Kromka IT – home">
          <Image
            src="/icons/kromka.png"
            alt="Kromka IT"
            width={52}
            height={52}
            className="rounded-xl hover:opacity-90 transition-opacity"
            priority
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider uppercase transition-colors font-medium rounded-lg ${
                active === id ? 'text-brand bg-white/5' : 'text-white/80 hover:text-brand hover:bg-white/5'
              }`}
            >
              <NavIcon id={id} />
              {t(key)}
            </button>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="md:hidden bg-dark border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-2 py-3 text-sm tracking-wider uppercase font-medium transition-colors ${
                active === id ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
              <NavIcon id={id} />
              {t(key)}
            </button>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
