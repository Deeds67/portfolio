# Portfolio Template

A clean, single-page portfolio template built with **Next.js**, **TypeScript**, and **TailwindCSS**. Clone it, swap in your own content, and deploy.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing the template

All personal content lives in a handful of files. Each component has a data array at the top — edit those arrays to put your own info on the page.

| What you want to change | File |
| --- | --- |
| Name, tagline, profile picture, top skills | `src/components/ui/Introduction/index.tsx` |
| About blurb, GitHub & LinkedIn links | `src/components/ui/AboutMe/index.tsx` |
| Work history | `src/components/ui/Experience/index.tsx` |
| Education | `src/components/ui/Education/index.tsx` |
| Projects (on `/projects`) | `src/components/ui/Projects/index.tsx` |
| Page title & metadata | `src/app/layout.tsx` |
| Footer name | `src/app/layout.tsx` |
| Nav items | `src/components/ui/NavBar/index.tsx` |

### Images

Drop your images into `public/` and reference them as `/your-image.png`. The template ships with three placeholder SVGs you can replace:

- `profile-placeholder.svg` — your profile photo
- `logo-placeholder.svg` — company/project logos
- `school-placeholder.svg` — university logos

The favicon lives at `src/app/favicon.ico` — replace the file to change it.

### Styling

- Fonts: **DM Sans** (headings) and **Inter** (body) — configured in `src/app/layout.tsx`.
- Accent color: blue (`border-blue-500`, `bg-blue-600`). Search and replace if you want a different palette.
- Background dot grid and card styles live in `src/app/globals.css`.

## Deploy

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). Push this repo to GitHub and import it — Vercel will detect Next.js automatically.

[`@vercel/speed-insights`](https://vercel.com/docs/speed-insights) is included; it's a no-op until you enable Speed Insights in the Vercel dashboard.

## License

Use this template however you like.
