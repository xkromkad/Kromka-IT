import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/lib/data';
import HeroSection from '@/components/HeroSection';
import CompanySection from '@/components/CompanySection';
import PortfolioSection from '@/components/PortfolioSection';
import TechSection from '@/components/TechSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <section id="kromka">
        <HeroSection locale={locale as Locale} />
      </section>
      <section id="companies" className="py-24 px-4 bg-gray-50">
        <CompanySection locale={locale as Locale} />
      </section>
      <section id="projects" className="py-24 px-4">
        <PortfolioSection locale={locale as Locale} />
      </section>
      <section id="technologies" className="py-24 px-4 bg-gray-50">
        <TechSection locale={locale as Locale} />
      </section>
      <section id="experience" className="py-24 px-4">
        <ExperienceSection locale={locale as Locale} />
      </section>
      <section id="contact" className="py-24 px-4 bg-gray-50">
        <ContactSection locale={locale as Locale} />
      </section>
    </>
  );
}
