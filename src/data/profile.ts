/**
 * PERSONAL PROFILE — the client's identity, biography and statements.
 * Replace any remaining [bracketed] value. Set a `public` flag to false to keep
 * a field off the website.
 *
 * Copy below is based only on supplied facts: ACCA, 2+ years of experience,
 * based in Wah Cantt, and the seven service areas. Add employers, clients and
 * achievements only once confirmed.
 */

export const profile = {
  fullName: "Zaynab Ali",
  designation: "ACCA",
  currentRole: "Tax Consultant",
  organization: "[Agency / Organization Name]",
  location: "Wah Cantt, Pakistan",
  specialization: "Taxation & Corporate Compliance",
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
    "Zaynab Ali is an ACCA tax consultant based in Wah Cantt, Pakistan, with more than two years of experience helping individuals, freelancers and businesses stay compliant — from FBR and SECP registrations to tax returns, sales tax and practical tax planning.",

  bio: [
    "Zaynab Ali is an ACCA professional and tax consultant based in Wah Cantt, Pakistan, with more than two years of hands-on experience in taxation and regulatory compliance. ACCA training brings technical depth and professional discipline to every engagement — whether it is a first tax return or the compliance needs of an established company.",
    "The work spans the full compliance journey: NTN registration with the FBR, SECP company incorporation, sales tax registration and monthly returns, and income tax returns for salaried individuals, freelancers, businesses and companies. Clients also turn to Zaynab for bookkeeping and financial statements, careful responses to FBR notices and audits, and lawful tax planning on filer status, property and vehicle transactions, and business structuring.",
    "Every matter is approached with the same principles — accurate documentation, transparent communication, strict confidentiality and attention to deadlines — so that clients understand exactly where they stand and can make financial decisions with confidence.",
  ],

  careerHighlights: [
    "ACCA professional",
    "More than 2 years of experience in taxation and compliance",
    "FBR, SECP and sales tax matters handled end to end",
    "Serving individuals, freelancers and businesses",
  ],

  /** Technical knowledge beyond the service categories. Empty list hides the block. */
  technicalKnowledge: [
    "Income Tax Returns (FBR)",
    "Sales Tax Compliance",
    "SECP Corporate Compliance",
    "Withholding Tax Statements",
    "Bookkeeping & Financial Reporting",
    "Excel & Accounting Software",
    "Tax Planning & Advisory",
  ],

  philosophy: [
    {
      topic: "Client Relationships",
      text: "Direct, personal attention for every client, with advice shaped around their circumstances — salaried, freelancing or running a business.",
    },
    {
      topic: "Professional Ethics",
      text: "Honest, lawful advice at all times. No shortcuts and no promises that cannot be kept.",
    },
    {
      topic: "Financial Transparency",
      text: "Scope and fees agreed up front, with plain-language explanations of what is being filed and why.",
    },
    {
      topic: "Regulatory Compliance",
      text: "Compliance as the foundation: accurate records, complete documentation and every deadline taken seriously.",
    },
    {
      topic: "Business Growth",
      text: "Sound compliance gives a business the confidence to register, trade, bid for tenders and grow.",
    },
  ],

  philosophyStatement:
    "Good tax advice should be accurate, lawful and easy to understand — so clients can focus on their work with complete confidence.",

  vision:
    "To be a trusted name for tax and compliance in Wah Cantt and across Pakistan — known for accuracy, integrity and clear, practical advice.",
  mission:
    "To help individuals, freelancers and businesses meet their tax and regulatory obligations accurately and on time, through careful work, transparent communication and lawful guidance.",
};
