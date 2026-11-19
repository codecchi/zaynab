/**
 * SITE CONFIGURATION — brand, location, contact details and SEO.
 *
 * Anything written in [square brackets] is a placeholder.
 * Placeholders are never linked (no fake phone/email/WhatsApp links) and are
 * left out of structured data. When every real detail is in, set
 * `showPlaceholders` to false: sample items and unreplaced fields then hide.
 */

export const siteConfig = {
  /** Show placeholder/sample content. Set to `false` before launch. */
  showPlaceholders: true,

  /** Production URL, no trailing slash. Can also be set with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",

  brand: {
    name: "Zaynab Ali",
    /** 1–2 letters shown in the logo mark and favicon area. */
    monogram: "ZA",
    tagline: "Tax, Compliance & Business Advisory",
    description:
      "Professional taxation, corporate compliance and business advisory services for individuals, freelancers and businesses in Pakistan.",
  },

  location: {
    /** Used in page titles and local SEO. Leave the brackets until confirmed. */
    city: "Wah Cantt",
    region: "Punjab",
    country: "Pakistan",
    countryCode: "PK",
    streetAddress: "[Office Address]",
    postalCode: "[Postal Code]",
  },

  contact: {
    email: "zaynabjaffreyacca@gmail.com",
    phone: "+92 314 9371415",
    /** WhatsApp number in international format, digits only, e.g. "923001234567". Empty = not configured. */
    whatsappNumber: "923149371415",
    whatsappDisplay: "+92 314 9371415",
    whatsappMessage: "Hello, I would like to book a consultation.",
    businessHours: ["[Monday – Friday: 00:00 – 00:00]", "[Saturday: 00:00 – 00:00]", "[Sunday: Closed]"],
    /** Google Maps embed URL (Share → Embed a map → copy the src). Empty = neutral placeholder. */
    mapEmbedUrl: "",
    /** Google Maps link for "Get directions". */
    mapLink: "",
  },

  /** Leave `href` empty to hide a network. */
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "X (Twitter)", href: "" },
  ],

  /**
   * Contact form delivery. With an endpoint (e.g. Formspree, a CRM webhook or
   * your own API route) the form POSTs JSON to it. Without one, the form
   * validates the inquiry and lets the visitor send it by email or WhatsApp —
   * it never pretends to have sent anything.
   */
  contactForm: {
    endpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
  },

  copyrightYear: 2026,

  seo: {
    defaultTitle: "Tax Consultant in Pakistan — Tax, Compliance & Business Advisory",
    keywords: [
      "Tax Consultant in Pakistan",
      "ACCA Tax Consultant",
      "Tax Consultant in [City]",
      "FBR Tax Return Filing",
      "NTN Registration Pakistan",
      "SECP Company Registration",
      "Sales Tax Registration Pakistan",
      "Corporate Tax Consultancy",
      "Business Tax Advisory",
      "Tax Filing Services",
    ],
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
