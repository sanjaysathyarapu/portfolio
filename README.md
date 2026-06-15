# Portfolio Website

A personal portfolio for a full-stack engineer, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Deploy-ready on Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Your Content

**All personal content lives in one file:** [`src/data/portfolio.ts`](src/data/portfolio.ts)

Search for `EDIT:` comments to find every field you should replace from your resume:

| Section | What to update |
|---------|------------------|
| `seo` | Page title, description, site URL, OG image path |
| `hero` | Name, title, pitch, availability, social links |
| `about` | Bio and 3 stat cards |
| `projects` | 4 project cards (title, description, tech, links) |
| `skills` | 5 skill groups |
| `experience` | Timeline roles with bullets |
| `education` | Degree, school, location, dates |
| `contact` | Email, phone, social links, footer text |

### Replace your CV

Drop your resume PDF into [`public/Sanjay-Sathyarapu.pdf`](public/Sanjay-Sathyarapu.pdf). The "Download CV" button links to this file automatically.

### Add an Open Graph image

Add a `1200×630` image to `public/` and update `seo.ogImage` in the data file. A placeholder SVG is included at `public/og-image.svg`.

## Project Structure

```
src/
├── app/           # Layout, page, global styles, SEO metadata
├── components/    # Section components (do not edit for content changes)
├── data/          # ← Edit this file for all content
├── hooks/         # usePrefersReducedMotion
└── types/         # TypeScript interfaces
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Update `seo.siteUrl` in `portfolio.ts` to your production domain
4. Deploy — no extra configuration needed

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Design

- **Fonts:** Fraunces (display) + IBM Plex Sans (body) via `next/font`
- **Palette:** Warm off-white canvas, deep forest green accent (`#2D5A4A`)
- **Features:** Sticky header with smooth-scroll nav, scroll-reveal animations (respects `prefers-reduced-motion`), fully responsive, accessible focus states
