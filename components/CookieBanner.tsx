'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Script from 'next/script';
import { Link } from '@/navigation';

const CONSENT_KEY = 'cookie_consent';

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored as 'accepted' | 'declined');
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-2ZB2FTTLTF"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-2ZB2FTTLTF');
          `}</Script>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3215849122189091"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-dark/95 backdrop-blur-sm text-white shadow-2xl">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-4">
            <p className="flex-1 text-sm text-white/80">
              {t('message')}{' '}
              <Link href="/privacy-policy" className="text-brand underline underline-offset-2 hover:opacity-80 transition-opacity">
                {t('learnMore')}
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded px-4 py-2 text-sm text-white/70 border border-white/20 hover:border-white/50 hover:text-white transition-colors"
              >
                {t('decline')}
              </button>
              <button
                onClick={accept}
                className="rounded px-4 py-2 text-sm font-semibold bg-brand text-dark hover:opacity-90 transition-opacity"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
