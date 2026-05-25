import type { ReactNode } from 'react';
import { Poppins, Lato } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400'],
  variable: '--font-lato',
  display: 'swap',
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value ?? 'sk';

  return (
    <html lang={locale} className={`${poppins.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
