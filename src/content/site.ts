// All portfolio copy lives here — edit this file to make the site yours.

export const site = {
  name: "Zaynab",
  role: "Designer & Developer",
  tagline:
    "I design and build thoughtful digital experiences — interfaces that feel as good as they look.",
  location: "Available worldwide",
  email: "hello@example.com",
  copyrightYear: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],
  skills: [
    "UI/UX Design",
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "GSAP",
    "Three.js",
    "Tailwind CSS",
    "Design Systems",
    "Prototyping",
  ],
  projects: [
    {
      title: "Project One",
      year: "2026",
      tags: ["Web App", "Product Design"],
      description: "A short sentence about what you built, for whom, and the result.",
      href: "#",
    },
    {
      title: "Project Two",
      year: "2026",
      tags: ["Branding", "Motion"],
      description: "A short sentence about what you built, for whom, and the result.",
      href: "#",
    },
    {
      title: "Project Three",
      year: "2025",
      tags: ["E-commerce", "Next.js"],
      description: "A short sentence about what you built, for whom, and the result.",
      href: "#",
    },
    {
      title: "Project Four",
      year: "2025",
      tags: ["Mobile", "UI Kit"],
      description: "A short sentence about what you built, for whom, and the result.",
      href: "#",
    },
  ],
  story: [
    {
      kicker: "01 — Discover",
      title: "Understand the problem first.",
      body: "Research, conversations and sketches. I start by learning who the work is for and what success looks like.",
    },
    {
      kicker: "02 — Design",
      title: "Shape it until it feels right.",
      body: "Wireframes, systems and high-fidelity prototypes, tested early and refined often.",
    },
    {
      kicker: "03 — Build",
      title: "Ship it with care.",
      body: "Accessible, fast, animated where it matters — production code that matches the design.",
    },
  ],
} as const;
