import type { Achievement, Metric } from "./types";

/**
 * PROFESSIONAL HIGHLIGHTS
 * Keep `value: null` until a verified figure is supplied. A null value shows as
 * "[XX]" in placeholder mode and is hidden entirely once placeholders are off.
 * Counters only animate for real numbers.
 */
export const metrics: Metric[] = [
  { id: "experience", label: "Years of Professional Experience", value: 2, suffix: "+" },
  { id: "clients", label: "Clients Served", value: null, suffix: "+" },
  { id: "businesses", label: "Businesses Assisted", value: null, suffix: "+" },
  { id: "cases", label: "Tax & Corporate Cases Handled", value: null, suffix: "+" },
  { id: "certifications", label: "Professional Certifications", value: null },
];

/** Major career achievements, awards and recognitions. */
export const achievements: Achievement[] = [
  {
    kind: "accomplishment",
    title: "[Major Career Achievement]",
    description: "[One or two sentences describing the achievement and its significance.]",
    year: "[Year]",
    sample: true,
  },
  {
    kind: "recognition",
    title: "[Award or Recognition]",
    description: "[Awarding body and what the recognition was for.]",
    year: "[Year]",
    sample: true,
  },
  {
    kind: "milestone",
    title: "[Professional Milestone]",
    description: "[A short description of the milestone.]",
    year: "[Year]",
    sample: true,
  },
];
