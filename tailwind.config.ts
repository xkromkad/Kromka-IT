import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FDC100',
        dark: '#232323',
        timeline: '#41516c',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
