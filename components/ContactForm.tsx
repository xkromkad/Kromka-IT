'use client';

import { useActionState } from 'react';
import { useTranslations } from 'next-intl';
import { sendContactEmail } from '@/app/actions/contact';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-dark placeholder-gray-400 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);

  if (state?.success) {
    return (
      <div className="max-w-lg mx-auto py-12 flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-dark font-semibold text-lg">{t('success')}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="max-w-lg mx-auto space-y-5 text-left">
      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t('name')}
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t('namePlaceholder')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t('email')}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          {t('message')}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder={t('messagePlaceholder')}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-dark text-white text-sm font-semibold py-3.5 rounded-full hover:bg-timeline transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? t('sending') : t('submit')}
      </button>

      {state?.success === false && (
        <p className="text-center text-sm text-red-500 font-medium">{t('error')}</p>
      )}
    </form>
  );
}
