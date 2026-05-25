# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for David Kromka (kromka.it). Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS**, and **next-intl** for bilingual support. Deployed on Vercel.

## Commands

```bash
npm install       # Install dependencies (run first after migration)
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # ESLint
npm run format    # Prettier
```

No tests are implemented.

## Architecture

Single-page scrollable portfolio with four anchor sections: `#kromka`, `#experience`, `#projects`, `#contact`.

### Routing & i18n

- Slovak (default) at `/`, English at `/en` — powered by `next-intl` with `localePrefix: 'as-needed'`
- `middleware.ts` handles locale detection and redirects
- `navigation.ts` exports `Link`, `usePathname`, `useRouter` from next-intl (use these instead of `next/navigation` for internal links)
- `i18n.ts` is the next-intl request config (loaded automatically by the `next-intl/plugin` in `next.config.ts`)
- UI labels live in `messages/sk.json` and `messages/en.json`
- All bilingual content data (portfolio, experience, work) lives in `lib/data.ts` with `Record<Locale, T[]>` shape

### App structure

```
app/[locale]/
  layout.tsx          ← root layout: fonts, metadata, JSON-LD, GA, AdSense, providers
  page.tsx            ← home page, composes all four section components
  privacy-policy/page.tsx
  terms/page.tsx
app/sitemap.ts
app/robots.ts
```

### Components

- Server components by default; only `Header`, `VideoPlayer`, `LanguageSwitcher`, `ScrollButton` are `'use client'`
- `VideoPlayer` uses IntersectionObserver to autoplay once when entering viewport (plays once at 0.7× speed)
- `Header` tracks active section via scroll and updates the URL hash
- `LanguageSwitcher` uses next-intl's `Link` with a `locale` prop to switch languages without page reload

### Styling

- **Tailwind CSS** with custom tokens in `tailwind.config.ts`: `brand` (#FDC100), `dark` (#232323), `timeline` (#41516c)
- Fonts loaded via `next/font/google` (Poppins + Lato), exposed as CSS vars `--font-poppins` / `--font-lato`
- Global base styles in `app/globals.css`

### Assets

All static files are in `public/`:
- `public/images/` — profile photo and portfolio screenshots
- `public/icons/` — SVG social icons, logo PNG, favicons
- `public/videos/` — WebM animations (hello, rocket, laptop, contact)

### SEO

- Metadata generated per-locale in `app/[locale]/layout.tsx` via `generateMetadata`
- JSON-LD Person schema injected as a `<script>` tag in the layout
- `alternates.languages` set for hreflang (`sk` / `en`)
- Sitemap at `app/sitemap.ts`, robots at `app/robots.ts`
- Google Analytics (GA-2ZB2FTTLTF) and AdSense (ca-pub-3215849122189091) via `@next/third-parties`

## Code Style

- **Prettier**: single quotes, semicolons, trailing commas, 100-char width (`.prettierrc`)
- **TypeScript strict mode**
- Prefer server components; add `'use client'` only when needed for browser APIs or hooks
