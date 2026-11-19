# Zaynab — Portfolio

A personal portfolio built with Next.js, Tailwind CSS, Framer Motion and GSAP.

## Stack

| Area | Packages |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript |
| Styling | Tailwind CSS v4, `clsx`, `tailwind-merge`, `class-variance-authority`, `next-themes` (light/dark) |
| Animation | `framer-motion`, `gsap` + `@gsap/react` (ScrollTrigger, SplitText), `lenis` smooth scroll |
| 3D (ready to use) | `three`, `@react-three/fiber`, `@react-three/drei` |
| Icons | `lucide-react` |
| Tooling | ESLint, Prettier + `prettier-plugin-tailwindcss` |

## AI design skills

[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) is installed for Claude Code in `.claude/skills/`:
`ui-ux-pro-max`, `design`, `design-system`, `ui-styling`, `brand`, `banner-design`, `slides`.

The generated design system for this site lives in `design-system/zaynab/MASTER.md`
(palette, typography — Space Grotesk + Archivo — and UX rules). The search scripts need Python 3.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
npm run format
```

## Editing content

All text — name, tagline, projects, process steps, skills, socials, email — is in
[`src/content/site.ts`](src/content/site.ts).

## Structure

```
src/
  app/            layout, page, global styles + design tokens
  components/     nav, hero, marquee, work, process, contact
    providers/    theme + Lenis smooth scroll
  content/site.ts portfolio copy
  lib/gsap.ts     GSAP + plugin registration
  lib/utils.ts    cn() helper
```
