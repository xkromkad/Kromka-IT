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
  const t = await getTranslations({ locale, namespace: 'terms' });
  return {
    title: `${t('title')} | Kromka IT`,
    description: t('description'),
    alternates: buildAlternates(locale, '/terms'),
    openGraph: { title: `${t('title')} | Kromka IT`, description: t('description') },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('terms');

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

      {isEn ? <TermsEn /> : <TermsSk />}
    </div>
  );
}

function TermsEn() {
  return (
    <div className="space-y-8 text-gray-800">
      <Section title="1. Acceptance of Terms">
        <p>
          By accessing and using <strong>kromka.it</strong> (the &quot;Site&quot;), you accept and agree to be bound
          by these Terms of Service. If you do not agree to these terms, please do not use this Site.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>
          Kromka.it is a personal portfolio website operated by Dávid Kromka. The Site presents professional
          information, projects, and contact details. No user accounts, transactions, or user-generated content
          are processed through this Site.
        </p>
      </Section>

      <Section title="3. Intellectual Property">
        <p>
          All content on this Site — including text, images, design, and code — is the property of Dávid Kromka
          and is protected by applicable copyright laws. You may not reproduce, distribute, or create derivative
          works without prior written permission.
        </p>
      </Section>

      <Section title="4. External Links">
        <p>
          This Site contains links to third-party websites. These links are provided for convenience only.
          I have no control over the content of those sites and accept no responsibility for them or for any
          loss or damage that may arise from your use of them.
        </p>
      </Section>

      <Section title="5. Disclaimer of Warranties">
        <p>
          The Site is provided &quot;as is&quot; without warranties of any kind, either express or implied. I do not
          warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Dávid Kromka shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use of, or inability to use, this Site.
        </p>
      </Section>

      <Section title="7. Changes to These Terms">
        <p>
          I reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting
          to the Site. Your continued use of the Site following any changes constitutes your acceptance of the new terms.
        </p>
      </Section>

      <Section title="8. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Slovak Republic,
          without regard to its conflict of law provisions.
        </p>
      </Section>

      <Section title="9. Contact">
        <p>
          For any questions regarding these Terms, please contact:{' '}
          <a href="mailto:david@kromka.it" className="text-timeline hover:underline">david@kromka.it</a>
        </p>
      </Section>
    </div>
  );
}

function TermsSk() {
  return (
    <div className="space-y-8 text-gray-800">
      <Section title="1. Prijatie podmienok">
        <p>
          Vstupom na stránku <strong>kromka.it</strong> (ďalej len „Stránka") a jej používaním súhlasíte s týmito
          Podmienkami používania. Ak nesúhlasíte, prosím, Stránku nepoužívajte.
        </p>
      </Section>

      <Section title="2. Opis služby">
        <p>
          Kromka.it je osobná portfólio stránka prevádzkovaná Dávidom Kromkom. Stránka prezentuje profesionálne
          informácie, projekty a kontaktné údaje. Cez Stránku sa nespracúvajú žiadne používateľské účty,
          transakcie ani obsah generovaný používateľmi.
        </p>
      </Section>

      <Section title="3. Duševné vlastníctvo">
        <p>
          Všetok obsah na tejto Stránke – vrátane textov, obrázkov, dizajnu a kódu – je vlastníctvom Dávida Kromku
          a je chránený príslušnými autorskými zákonmi. Bez predchádzajúceho písomného súhlasu ho nemôžete
          reprodukovať, distribuovať ani vytvárať odvodené diela.
        </p>
      </Section>

      <Section title="4. Externé odkazy">
        <p>
          Stránka obsahuje odkazy na webové stránky tretích strán. Tieto odkazy sú poskytované len pre pohodlie.
          Nemám kontrolu nad obsahom týchto stránok a nenesiem zodpovednosť za žiadne straty ani škody,
          ktoré by mohli vzniknúť ich používaním.
        </p>
      </Section>

      <Section title="5. Vylúčenie záruk">
        <p>
          Stránka je poskytovaná „tak, ako je", bez akýchkoľvek záruk, výslovných ani implicitných. Nezaručujem,
          že Stránka bude neprerušená, bezchybná alebo bez vírusov či iných škodlivých komponentov.
        </p>
      </Section>

      <Section title="6. Obmedzenie zodpovednosti">
        <p>
          V maximálnom rozsahu povolenom zákonom Dávid Kromka nezodpovedá za žiadne nepriame, náhodné, špeciálne,
          následné ani trestné škody vyplývajúce z vášho používania alebo neschopnosti používať túto Stránku.
        </p>
      </Section>

      <Section title="7. Zmeny podmienok">
        <p>
          Vyhradzujem si právo tieto Podmienky používania kedykoľvek zmeniť. Zmeny nadobudnú účinnosť ich
          zverejnením na Stránke. Ďalším používaním Stránky po zmenách vyjadrujete súhlas s novými podmienkami.
        </p>
      </Section>

      <Section title="8. Rozhodné právo">
        <p>
          Tieto Podmienky sa riadia a vykladajú v súlade s právom Slovenskej republiky.
        </p>
      </Section>

      <Section title="9. Kontakt">
        <p>
          V prípade otázok týkajúcich sa týchto Podmienok ma kontaktujte na:{' '}
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
