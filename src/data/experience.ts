import type { Experience, JourneyStage } from "./types";

/** PROFESSIONAL EXPERIENCE (About page) — most recent first. */
export const experience: Experience[] = [
  {
    organization: "[Organization]",
    title: "[Job Title]",
    duration: "[Start Year] – Present",
    responsibilities: ["[Key responsibility]", "[Key responsibility]", "[Key responsibility]"],
    contributions: ["[Key contribution or result]", "[Key contribution or result]"],
    sample: true,
  },
  {
    organization: "[Organization]",
    title: "[Job Title]",
    duration: "[Start Year] – [End Year]",
    responsibilities: ["[Key responsibility]", "[Key responsibility]"],
    contributions: ["[Key contribution or result]"],
    sample: true,
  },
];

/** PROFESSIONAL JOURNEY (homepage timeline) — in chronological order. */
export const journey: JourneyStage[] = [
  {
    stage: "Career Beginning",
    period: "[Year]",
    title: "[Where the professional journey began]",
    description: "[A sentence or two about the first role or training.]",
    sample: true,
  },
  {
    stage: "Key Professional Position",
    period: "[Year – Year]",
    title: "[Position and organization]",
    description: "[What the role involved and what was learned.]",
    sample: true,
  },
  {
    stage: "Major Career Milestone",
    period: "[Year]",
    title: "[Milestone]",
    description: "[Why this milestone mattered.]",
    sample: true,
  },
  {
    stage: "Professional Development",
    period: "[Year]",
    title: "[Qualification, training or specialization]",
    description: "[How it strengthened the practice.]",
    sample: true,
  },
  {
    stage: "Important Achievement",
    period: "[Year]",
    title: "[Achievement]",
    description: "[A short description.]",
    sample: true,
  },
  {
    stage: "Current Professional Role",
    period: "Present",
    title: "ACCA Tax Consultant — Wah Cantt",
    description:
      "Providing taxation, corporate compliance and business advisory services to individuals, freelancers and businesses across Pakistan.",
  },
];
