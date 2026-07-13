import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/navigation';
import { buildAlternates } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return {
    title: `${t('title')} | Kromka IT`,
    description: t('description'),
    alternates: buildAlternates(locale, '/privacy-policy'),
    openGraph: { title: `${t('title')} | Kromka IT`, description: t('description') },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('privacy');

  const isEn = locale === 'en';

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-block mb-8 text-timeline hover:underline font-medium">
        ← {t('backHome')}
      </Link>

      <h1 className="text-3xl font-bold font-poppins mb-2 tracking-wide text-left">
        {t('title')}
      </h1>
      <p className="text-gray-500 mb-10 text-sm">{t('lastUpdated')}</p>

      {isEn ? <PrivacyEn /> : <PrivacySk />}
    </div>
  );
}

function PrivacyEn() {
  return (
    <div className="prose prose-gray max-w-none space-y-8 text-gray-800">
      <Section title="1. Introduction">
        <p>
          This Privacy Policy explains how Dávid Kromka (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) collects,
          uses, and protects information when you visit <strong>kromka.it</strong> (the &quot;Site&quot;). I respect
          your privacy and am committed to complying with applicable data protection laws, including the GDPR.
        </p>
      </Section>

      <Section title="2. Information I Collect">
        <p>I do not collect any personal information directly. However, third-party services used on this Site may
        automatically collect certain data:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <strong>Usage data</strong> – pages visited, time spent, browser type, device type, and IP address
            (anonymised), collected via Google Analytics.
          </li>
          <li>
            <strong>Advertising data</strong> – anonymised interest and browsing data used for ad personalisation by
            Google AdSense.
          </li>
        </ul>
      </Section>

      <Section title="3. Cookies">
        <p>
          The Site uses cookies set by Google Analytics and Google AdSense. Cookies are small text files stored on
          your device. You can control or delete cookies through your browser settings. Disabling cookies may affect
          the functionality of third-party services on this Site.
        </p>
        <p className="mt-2">Cookies used:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <strong>Google Analytics</strong> (_ga, _gid) – session and user tracking for analytics purposes.
            Data is anonymised and not used to personally identify you.
          </li>
          <li>
            <strong>Google AdSense</strong> – used to serve relevant advertisements. Google may use this data
            in accordance with its own privacy policy.
          </li>
        </ul>
      </Section>

      <Section title="4. Third-Party Services">
        <p>This Site uses the following third-party services, each governed by their own privacy policies:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              className="text-timeline hover:underline">Google Analytics Privacy Policy</a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
              className="text-timeline hover:underline">Google AdSense & Advertising</a>
          </li>
        </ul>
      </Section>

      <Section title="5. Your Rights (GDPR)">
        <p>If you are located in the European Economic Area, you have the following rights under the GDPR:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The right to access, rectify, or erase your personal data</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
        </ul>
        <p className="mt-2">To exercise these rights, contact me at <a href="mailto:david@kromka.it"
          className="text-timeline hover:underline">david@kromka.it</a>.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>
          I do not store personal data directly. Third-party services retain data according to their own policies.
          Google Analytics data is retained for 14 months by default.
        </p>
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          I may update this Privacy Policy occasionally. Any changes will be reflected by the &quot;Last updated&quot; date
          at the top of this page. Continued use of the Site after changes constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="8. Contact">
        <p>
          For any privacy-related questions, please contact:{' '}
          <a href="mailto:david@kromka.it" className="text-timeline hover:underline">david@kromka.it</a>
        </p>
      </Section>
    </div>
  );
}

function PrivacySk() {
  return (
    <div className="prose prose-gray max-w-none space-y-8 text-gray-800">
      <Section title="1. Úvod">
        <p>
          Táto politika ochrany osobných údajov vysvetľuje, ako Dávid Kromka (ďalej len „ja" alebo „prevádzkovateľ")
          spracúva informácie pri návšteve stránky <strong>kromka.it</strong>. Rešpektujem vaše súkromie a snažím sa
          dodržiavať platné predpisy o ochrane osobných údajov vrátane nariadenia GDPR.
        </p>
      </Section>

      <Section title="2. Zhromažďované informácie">
        <p>Osobné údaje priamo nezhromažďujem. Tretie strany používané na tejto stránke však môžu automaticky
        zbierať určité dáta:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <strong>Údaje o používaní</strong> – navštívené stránky, čas strávený na stránke, typ prehliadača, typ
            zariadenia a IP adresa (anonymizovaná), zbierané prostredníctvom Google Analytics.
          </li>
          <li>
            <strong>Reklamné dáta</strong> – anonymizované záujmové a prehliadacie dáta využívané na personalizáciu
            reklám cez Google AdSense.
          </li>
        </ul>
      </Section>

      <Section title="3. Cookies">
        <p>
          Stránka používa súbory cookie nastavené službami Google Analytics a Google AdSense. Cookies sú malé
          textové súbory ukladané do vášho zariadenia. Správu cookies môžete vykonávať v nastaveniach prehliadača.
        </p>
        <p className="mt-2">Používané cookies:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <strong>Google Analytics</strong> (_ga, _gid) – sledovanie relácií a používateľov na analytické účely.
            Dáta sú anonymizované.
          </li>
          <li>
            <strong>Google AdSense</strong> – slúži na zobrazovanie relevantných reklám. Google môže tieto dáta
            spracúvať podľa vlastnej politiky ochrany súkromia.
          </li>
        </ul>
      </Section>

      <Section title="4. Služby tretích strán">
        <p>Táto stránka využíva nasledovné služby tretích strán s vlastnými zásadami ochrany osobných údajov:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
              className="text-timeline hover:underline">Zásady ochrany súkromia Google</a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
              className="text-timeline hover:underline">Google AdSense a reklamy</a>
          </li>
        </ul>
      </Section>

      <Section title="5. Vaše práva (GDPR)">
        <p>Ak sa nachádzate v Európskom hospodárskom priestore, máte nasledujúce práva podľa nariadenia GDPR:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Právo na prístup, opravu alebo vymazanie osobných údajov</li>
          <li>Právo na obmedzenie alebo námietku voči spracúvaniu</li>
          <li>Právo na prenosnosť údajov</li>
          <li>Právo kedykoľvek odvolať súhlas</li>
        </ul>
        <p className="mt-2">Na uplatnenie týchto práv ma kontaktujte na{' '}
          <a href="mailto:david@kromka.it" className="text-timeline hover:underline">david@kromka.it</a>.</p>
      </Section>

      <Section title="6. Uchovávanie údajov">
        <p>
          Osobné údaje priamo neukladám. Tretie strany uchovávajú dáta podľa vlastných zásad.
          Dáta Google Analytics sú predvolene uchovávané 14 mesiacov.
        </p>
      </Section>

      <Section title="7. Zmeny tejto politiky">
        <p>
          Tieto zásady môžem príležitostne aktualizovať. Zmeny budú zohľadnené v dátume „Posledná aktualizácia"
          v hornej časti tejto stránky. Ďalšie používanie stránky po zmenách znamená prijatie aktualizovanej politiky.
        </p>
      </Section>

      <Section title="8. Kontakt">
        <p>
          Pre otázky týkajúce sa ochrany osobných údajov ma kontaktujte na:{' '}
          <a href="mailto:david@kromka.it" className="text-timeline hover:underline">david@kromka.it</a>
        </p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold font-poppins tracking-normal text-left mb-3">{title}</h2>
      {children}
    </div>
  );
}
