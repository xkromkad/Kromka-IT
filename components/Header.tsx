'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { id: 'kromka', key: 'home' },
  { id: 'experience', key: 'experience' },
  { id: 'projects', key: 'portfolio' },
  { id: 'contact', key: 'contact' },
] as const;

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
        <nav className="hidden md:flex items-center">
          {NAV_ITEMS.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-4 py-2 text-sm tracking-widest uppercase transition-colors font-medium ${
                active === id ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
              {t(key)}
            </button>
          ))}
          <LanguageSwitcher />
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
              className={`text-left py-3 text-sm tracking-widest uppercase font-medium transition-colors ${
                active === id ? 'text-brand' : 'text-white hover:text-brand'
              }`}
            >
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
