import { siteConfig } from "@/data/site-config";
import type { Sampleable } from "@/data/types";

const PLACEHOLDER = /\[[^\]]*\]/;

/** True for empty values and anything still containing a [bracketed] placeholder. */
export function isPlaceholder(value?: string | null): boolean {
  return !value || PLACEHOLDER.test(value);
}

/** True when a value is real (filled in and not a placeholder). */
export function isReal(value?: string | null): value is string {
  return !isPlaceholder(value);
}

/**
 * Returns the value to render, or null when it should be hidden:
 * empty values always hide; placeholders hide once `showPlaceholders` is off.
 */
export function display(value?: string | null): string | null {
  if (!value) return null;
  if (!siteConfig.showPlaceholders && PLACEHOLDER.test(value)) return null;
  return value;
}

/** Filters a list for rendering: drops sample items once placeholders are off. */
export function visible<T extends Sampleable>(items: readonly T[]): T[] {
  return siteConfig.showPlaceholders ? [...items] : items.filter((item) => !item.sample);
}

/** Filters plain strings with the same rule as `display`. */
export function visibleStrings(items: readonly string[]): string[] {
  return items.filter((s) => display(s) !== null);
}

export function initials(name: string): string {
  const clean = name.replace(/[[\]]/g, "").trim();
  if (!clean || isPlaceholder(name)) return siteConfig.brand.monogram;
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/** wa.me link, or null when no WhatsApp number is configured. */
export function whatsappLink(message: string = siteConfig.contact.whatsappMessage): string | null {
  const n = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!n) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject?: string, body?: string): string | null {
  const email = siteConfig.contact.email;
  if (!isReal(email)) return null;
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString().replace(/\+/g, "%20");
  return `mailto:${email}${q ? `?${q}` : ""}`;
}

export function telLink(): string | null {
  const phone = siteConfig.contact.phone;
  if (!isReal(phone)) return null;
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** "Tax Consultant in Lahore" when a city is set, otherwise "Tax Consultant in Pakistan". */
export function locationLabel(): string {
  const { city, country } = siteConfig.location;
  return isReal(city) ? `${city}, ${country}` : country;
}
