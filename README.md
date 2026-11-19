# Tax Consultancy & Professional Portfolio Website

A premium website for a tax consultant / consultancy in Pakistan, built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP and Lenis.

**Pages:** Home · About · Services · Contact · Privacy Policy · custom 404. Also included: sitemap, robots.txt, Open Graph image, favicon and JSON-LD structured data.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
npm run format
```

---

## Adding the client's information

**All content lives in `src/data/`. No personal details are hard-coded in components.**

| File | What it holds |
| --- | --- |
| `site-config.ts` | Brand name, monogram, city, address, phone, email, WhatsApp, hours, Google Maps, socials, site URL, SEO keywords, contact-form endpoint |
| `profile.ts` | Name, designation, portrait, short and full biography, career highlights, philosophy, vision, mission, which background fields are public |
| `achievements.ts` | Headline metrics (years, clients, cases…) and major achievements and awards |
| `education.ts` · `certifications.ts` | Qualifications and credentials (with optional verification links) |
| `experience.ts` | Career experience (About page) and the Professional Journey timeline (homepage) |
| `work.ts` | Work and accomplishments (never publish confidential client information) |
| `testimonials.ts` | Client reviews (sample entries are clearly labelled) |
| `services.ts` | The seven service categories, the "Why Choose Us" values and the disclaimer |
| `privacy.ts` | Privacy policy text (a template: have it reviewed) |

### How placeholders work

- Anything in `[square brackets]` is a placeholder. Items with `sample: true` are sample entries and get a visible **Sample** badge.
- Placeholder phone numbers, emails and WhatsApp numbers are **never linked**, and they are **left out of structured data**.
- Metrics stay `value: null` (shown as `[XX]`) until a verified number is supplied. Counters only animate for real numbers.
- **Before launch**, set `showPlaceholders: false` in `site-config.ts`. Every sample item and unreplaced field then hides automatically, and empty sections disappear without leaving broken layout.

### Images

- **Portrait:** put the file in `public/images/` and set `profile.portrait = "/images/portrait.jpg"`.
- **Work images and testimonial photos:** set `image: "/images/…"` on the item.
- Without an image, a neutral labelled placeholder is shown (no stock photos).
- **Favicon:** `src/app/icon.svg` contains the monogram. Update its text if you change `brand.monogram`.

### Contact form

- **Without an endpoint:** the form validates the inquiry, then offers to send it by email or WhatsApp. It never claims to have sent anything.
- **With an endpoint:** set `NEXT_PUBLIC_CONTACT_ENDPOINT` (e.g. Formspree or a CRM webhook) and the form POSTs JSON to it, with success and error states.

### Environment variables

```
NEXT_PUBLIC_SITE_URL=https://www.your-domain.com
NEXT_PUBLIC_CONTACT_ENDPOINT=   # optional
```

---

## Project structure

```
src/
  app/                     routes, metadata, sitemap, robots, OG image, icon, 404
  components/
    layout/                header (sticky + mobile menu), footer, logo, page hero, WhatsApp button
    sections/home|about|services|contact/   page sections
    sections/cta-band.tsx  shared closing call to action
    ui/                    button, reveal animations, portrait, counter, icons, badges
    providers/             Lenis smooth scroll + reduced-motion config
  data/                    ← all editable content
  lib/                     content helpers (placeholders, links), SEO, GSAP setup
```

## Design system

- **Palette:** "ReGrowth", dark-first.
  - `#1B2922` deep forest (base), `#1C1C1C` charcoal, `#435146` grey-green, `#4A6958` sage.
  - Readable tints derived from sage: `#A8CDB0` mint (buttons, accents), `#C7E3CC` pale mint (labels), `#8DB596` leaf (decorative).
- **Readability rules:**
  - Sage and grey-green are too dark for text on these backgrounds, so they appear as glows, surfaces and gradients.
  - Deep bands (stats, closing call to action, footer, vision/mission cards) add `.theme-deep`: a charcoal-to-forest gradient like the palette's backdrop.
  - All text tokens meet WCAG AA. Tokens live in `src/app/globals.css`.
- **Effects:**
  - Glass surfaces, green aurora glows, a masked grid and film grain
  - Cursor-following spotlight cards and rotating light-beam borders
  - Gradient headlines, a floating glass navigation bar, a service marquee and a hero showcase that tilts into place as you scroll
- **Type:** Montserrat throughout: bold or semibold for headings, regular for body text.
- **Motion:** Framer Motion reveals, a GSAP ScrollTrigger timeline beam and Lenis smooth scrolling. All motion respects `prefers-reduced-motion`.

## AI design skills

The UI UX Pro Max skills are installed for Claude Code in `.claude/skills/`.
