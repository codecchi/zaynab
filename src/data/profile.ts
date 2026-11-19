/**
 * PERSONAL PROFILE — the client's identity, biography and statements.
 * Replace every [bracketed] value. Set a `public` flag to false to keep a
 * field off the website.
 */

export const profile = {
  fullName: "[Client Full Name]",
  designation: "[Professional Designation]",
  currentRole: "[Current Role / Title]",
  organization: "[Agency / Organization Name]",
  location: "[City], Pakistan",
  specialization: "[Primary Specialization]",
  languages: "[Languages Spoken]",

  /** Which background fields are approved for public display (About page). */
  public: {
    fullName: true,
    designation: true,
    location: true,
    specialization: true,
    languages: true,
    organization: true,
  },

  /** Put the photo in /public/images and set e.g. "/images/portrait.jpg". `null` shows a neutral placeholder. */
  portrait: null as string | null,

  shortBio:
    "[Short professional biography — two or three sentences introducing the client, their area of practice and the kind of clients they work with.]",

  bio: [
    "[Biography paragraph 1 — professional background and how the client's practice began.]",
    "[Biography paragraph 2 — areas of specialization, the types of individuals and businesses served, and the approach taken with each engagement.]",
    "[Biography paragraph 3 — current role, professional focus and commitments.]",
  ],

  careerHighlights: [
    "[Career highlight — e.g. a key role, milestone or specialization]",
    "[Career highlight]",
    "[Career highlight]",
  ],

  /** Technical knowledge beyond the service categories. Empty list hides the block. */
  technicalKnowledge: [
    "[Area of technical knowledge]",
    "[Area of technical knowledge]",
    "[Area of technical knowledge]",
    "[Area of technical knowledge]",
  ],

  philosophy: [
    { topic: "Client Relationships", text: "[How the client builds and maintains long-term client relationships.]" },
    { topic: "Professional Ethics", text: "[The ethical principles that guide every engagement.]" },
    { topic: "Financial Transparency", text: "[The approach to clear fees, honest advice and open communication.]" },
    { topic: "Regulatory Compliance", text: "[How compliance is treated as a foundation, not an afterthought.]" },
    { topic: "Business Growth", text: "[How good compliance supports sustainable business growth.]" },
  ],

  philosophyStatement: "[A short personal statement summarising the client's professional philosophy.]",

  vision: "[Vision statement — the long-term aspiration for the practice and its clients.]",
  mission: "[Mission statement — what the practice does every day, for whom, and how.]",
};
