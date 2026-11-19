/**
 * Shared content types.
 *
 * Every list item can carry `sample: true`. Sample items are shown while
 * `siteConfig.showPlaceholders` is true and are hidden automatically once it is
 * set to false — so anything you have not replaced simply disappears at launch.
 */

export type Sampleable = { sample?: boolean };

export type IconKey =
  | "building"
  | "file-check"
  | "receipt"
  | "book-open-check"
  | "file-search"
  | "compass"
  | "briefcase"
  | "scale"
  | "landmark"
  | "handshake"
  | "lock"
  | "clock"
  | "messages"
  | "shield-check"
  | "award"
  | "graduation-cap"
  | "badge-check"
  | "target"
  | "eye";

export type Metric = Sampleable & {
  id: string;
  label: string;
  /** Verified number. Leave `null` until a real figure is supplied. */
  value: number | null;
  suffix?: string;
};

export type Achievement = Sampleable & {
  title: string;
  description?: string;
  year?: string;
  kind?: "award" | "recognition" | "milestone" | "accomplishment";
};

export type TimelineEntry = Sampleable & {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  points?: string[];
};

export type Education = Sampleable & {
  qualification: string;
  institution: string;
  year: string;
  specialization?: string;
};

export type Certification = Sampleable & {
  name: string;
  issuer: string;
  year: string;
  /** Optional credential / verification URL. */
  verifyUrl?: string;
};

export type Experience = Sampleable & {
  organization: string;
  title: string;
  duration: string;
  responsibilities?: string[];
  contributions?: string[];
};

export type JourneyStage = Sampleable & {
  stage: string;
  period: string;
  title: string;
  description: string;
};

export type WorkItem = Sampleable & {
  category: string;
  title: string;
  summary: string;
  year?: string;
  /** Path under /public, e.g. "/images/work/registration.jpg". `null` shows a neutral placeholder. */
  image: string | null;
  imageAlt?: string;
};

export type Testimonial = Sampleable & {
  name: string;
  role: string;
  quote: string;
  /** Optional profile image path under /public. */
  image?: string | null;
};

export type ServiceCategory = {
  slug: string;
  icon: IconKey;
  title: string;
  /** One line for cards on the homepage. */
  summary: string;
  /** Opening paragraph on the Services page. */
  intro: string;
  services: string[];
  benefits: string[];
};

export type ValueProp = {
  icon: IconKey;
  title: string;
  description: string;
};
