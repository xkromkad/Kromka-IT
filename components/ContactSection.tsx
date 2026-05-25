import { useTranslations } from 'next-intl';
import type { Locale } from '@/lib/data';
import VideoPlayer from './VideoPlayer';
import ContactForm from './ContactForm';

export default function ContactSection({ locale }: { locale: Locale }) {
  const t = useTranslations('contact');
  void locale;

  return (
    <div className="max-w-4xl mx-auto text-center py-8">
      <div className="flex items-center gap-4 mb-5 justify-center">
        <h2 className="text-4xl font-poppins font-bold tracking-tight text-dark">{t('title')}</h2>
        <VideoPlayer src="/videos/contact.webm" className="w-12 h-auto" stopAt={2.4} />
      </div>

      <div className="w-12 h-1 bg-brand rounded-full mx-auto mb-12" />

      <ContactForm />
    </div>
  );
}
