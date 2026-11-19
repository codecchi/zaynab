import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { profile } from "@/data/profile";
import { services } from "@/data/services";
import { isReal, locationLabel } from "./content";

/** Keywords with the configured city substituted (or dropped while it is a placeholder). */
export function keywords(): string[] {
  const city = siteConfig.location.city;
  return siteConfig.seo.keywords
    .map((k) => (k.includes("[City]") ? (isReal(city) ? k.replace("[City]", city) : null) : k))
    .filter((k): k is string => Boolean(k));
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? "/" : path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: "en_PK",
      type: "website",
      // Re-attach the generated share image (a page-level openGraph replaces the root one).
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.brand.name }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** "Tax Consultant in Lahore, Pakistan" or "Tax Consultant in Pakistan". */
export function localTitle(prefix = "Tax Consultant") {
  return `${prefix} in ${locationLabel()}`;
}

/**
 * ProfessionalService structured data. Only verified (non-placeholder) details
 * are included — no invented addresses, phone numbers, ratings or reviews.
 */
export function professionalServiceJsonLd() {
  const { brand, location, contact, url, socials } = siteConfig;
  const address =
    isReal(location.city) || isReal(location.streetAddress)
      ? {
          "@type": "PostalAddress",
          ...(isReal(location.streetAddress) && { streetAddress: location.streetAddress }),
          ...(isReal(location.city) && { addressLocality: location.city }),
          ...(isReal(location.region) && { addressRegion: location.region }),
          ...(isReal(location.postalCode) && { postalCode: location.postalCode }),
          addressCountry: location.countryCode,
        }
      : undefined;
  const sameAs = socials.map((s) => s.href).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    url,
    description: brand.description,
    ...(isReal(brand.name) && { name: brand.name }),
    ...(isReal(contact.email) && { email: contact.email }),
    ...(isReal(contact.phone) && { telephone: contact.phone }),
    ...(address && { address }),
    areaServed: { "@type": "Country", name: location.country },
    ...(sameAs.length > 0 && { sameAs }),
    ...(isReal(profile.fullName) && {
      founder: {
        "@type": "Person",
        name: profile.fullName,
        ...(isReal(profile.designation) && { jobTitle: profile.designation }),
      },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tax, compliance and business advisory services",
      itemListElement: services.map((s) => ({
        "@type": "OfferCatalog",
        name: s.title,
        itemListElement: s.services.map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
      })),
    },
  };
}
