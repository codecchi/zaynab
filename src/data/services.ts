import type { ServiceCategory, ValueProp } from "./types";

/**
 * SERVICES — the seven practice areas.
 * `slug` becomes the anchor on /services (e.g. /services#tax-returns) and the
 * value used to preselect the service on the contact form.
 */
export const services: ServiceCategory[] = [
  {
    slug: "business-registration",
    icon: "building",
    title: "Business & Tax Registration",
    summary:
      "Start on the right footing — registrations with FBR, SECP and other bodies, handled correctly from day one.",
    intro:
      "Whether you are a freelancer, a sole proprietor or launching a private limited company, correct registration is the foundation of everything that follows. We guide you through the requirements, prepare the documentation and follow the process through with the relevant authorities.",
    services: [
      "NTN Registration (FBR)",
      "SECP Company Incorporation",
      "Sales Tax Registration (STRN)",
      "PSEB Registration",
      "Chamber of Commerce Registration",
      "Business Banking Documentation Assistance",
    ],
    benefits: [
      "Clear guidance on which registrations apply to your situation",
      "Documents prepared and checked before submission",
      "Fewer delays caused by incomplete or incorrect applications",
      "A compliant structure you can build on as you grow",
    ],
  },
  {
    slug: "tax-returns",
    icon: "file-check",
    title: "Tax Return Filing & Compliance",
    summary: "Accurate, timely income tax returns and statements for individuals, freelancers and companies.",
    intro:
      "Filing a tax return is an annual obligation, but getting it right requires care — correct income heads, eligible adjustments and complete wealth statements. We prepare and file returns on your behalf and help you stay on the Active Taxpayers List.",
    services: [
      "Individual Tax Returns",
      "Salaried Individual Tax Returns",
      "Freelancer Tax Returns",
      "Business Tax Returns",
      "Corporate Tax Returns",
      "SECP Annual Compliance",
      "Withholding Tax Statements",
    ],
    benefits: [
      "Returns prepared from properly reviewed records",
      "Reminders and support around filing deadlines",
      "Wealth statements reconciled with your declared income",
      "Clear explanations of what was filed and why",
    ],
  },
  {
    slug: "sales-tax",
    icon: "receipt",
    title: "Sales Tax & GST Management",
    summary: "Monthly sales tax returns, invoicing guidance and record-keeping that stands up to review.",
    intro:
      "Sales tax brings recurring monthly obligations and detailed record-keeping requirements. We manage registration, monthly returns and the supporting records so your business stays compliant without the administrative burden.",
    services: [
      "Monthly Sales Tax Returns",
      "Sales Tax Registration",
      "Sales Tax Invoice Guidance",
      "Sales Tax Record Management",
      "FBR Sales Tax Audit Assistance",
    ],
    benefits: [
      "Monthly returns filed on schedule",
      "Invoices that meet documentation requirements",
      "Organised records ready if questions arise",
      "Support during sales tax audits and queries",
    ],
  },
  {
    slug: "bookkeeping",
    icon: "book-open-check",
    title: "Bookkeeping & Financial Management",
    summary: "Clean, organised books and clear financial reports that support better decisions.",
    intro:
      "Reliable bookkeeping makes tax compliance simpler and gives you a clear view of how your business is performing. We maintain your records, prepare financial statements and keep your accounts in order month after month.",
    services: [
      "Monthly Sales and Purchase Records",
      "Financial Transaction Recording",
      "Accounting Entries",
      "Profit & Loss Statements",
      "Financial Reporting",
      "Excel and Accounting Software Management",
    ],
    benefits: [
      "Up-to-date records you can rely on",
      "Financial statements ready for tax filing and banks",
      "Clearer visibility of income, expenses and profit",
      "More time to focus on running your business",
    ],
  },
  {
    slug: "fbr-notices",
    icon: "file-search",
    title: "FBR Notices & Audit Assistance",
    summary: "Measured, well-documented responses to FBR notices, audits and assessments.",
    intro:
      "Receiving a notice from the FBR can be unsettling. We review the notice carefully, explain what it requires, and help prepare a clear, documented response within the applicable timelines — supporting you through audits and assessments where needed.",
    services: [
      "FBR Notice Review and Responses",
      "Tax Audit Documentation",
      "Tax Assessment Assistance",
      "Tax Dispute Support",
      "Penalty and Compliance Guidance",
    ],
    benefits: [
      "A clear explanation of what the notice means",
      "Responses prepared with supporting documentation",
      "Attention to deadlines to avoid further complications",
      "Guidance on preventing similar issues in future",
    ],
  },
  {
    slug: "tax-planning",
    icon: "compass",
    title: "Tax Planning & Business Advisory",
    summary: "Lawful, forward-looking tax planning for individuals, property, vehicles and business structures.",
    intro:
      "Good planning means understanding the tax consequences of a decision before you make it. We provide practical, lawful guidance on filer status, property and vehicle transactions, and how your business is structured — so you can decide with confidence.",
    services: [
      "Legal Tax Planning",
      "Filer and Non-Filer Guidance",
      "Property Transaction Tax Consultation",
      "Vehicle Purchase and Transfer Tax Guidance",
      "Business Tax Structuring",
      "Professional Tax Consultation",
    ],
    benefits: [
      "Decisions made with the tax implications understood",
      "Advice that stays within the law",
      "Guidance tailored to your personal or business circumstances",
      "A trusted point of contact for ongoing questions",
    ],
  },
  {
    slug: "corporate-documentation",
    icon: "briefcase",
    title: "Corporate, Commercial & Documentation Services",
    summary: "Trademarks, import/export, customs, licensing and tender documentation — prepared with precision.",
    intro:
      "Growing businesses need more than tax compliance. We assist with the commercial registrations, licences and documentation that open new markets and opportunities, coordinating the paperwork so nothing is overlooked.",
    services: [
      "Trademark Registration Assistance",
      "Import & Export Registration",
      "WeBOC and Customs Registration",
      "Business Licensing",
      "Government Tender Documentation",
      "Corporate Documentation",
    ],
    benefits: [
      "Complete, well-organised documentation",
      "Guidance through unfamiliar registration processes",
      "Support for trading, tendering and expansion",
      "One advisor coordinating multiple requirements",
    ],
  },
];

export const servicesDisclaimer =
  "All services are provided subject to applicable laws, regulations and eligibility requirements, and to the terms of a professional engagement. Information on this website is general in nature and is not tax or legal advice for your specific situation. Outcomes depend on individual circumstances and on decisions made by the relevant authorities.";

/** WHY CHOOSE US — value propositions. */
export const values: ValueProp[] = [
  {
    icon: "scale",
    title: "Professional Integrity",
    description: "Honest advice, even when it is not what you hoped to hear. Every engagement is handled ethically.",
  },
  {
    icon: "landmark",
    title: "Regulatory Understanding",
    description: "Working knowledge of FBR, SECP and related requirements, kept current as rules change.",
  },
  {
    icon: "handshake",
    title: "Client-Focused Solutions",
    description: "Advice shaped around your circumstances — whether you are salaried, a freelancer or a business.",
  },
  {
    icon: "file-check",
    title: "Accurate Documentation",
    description: "Careful preparation and review, so filings and applications are complete and consistent.",
  },
  {
    icon: "lock",
    title: "Confidentiality & Trust",
    description: "Your financial information is handled discreetly and shared only as your matter requires.",
  },
  {
    icon: "clock",
    title: "Timely Professional Support",
    description: "Deadlines are taken seriously. You receive responses and reminders when they matter.",
  },
  {
    icon: "messages",
    title: "Transparent Communication",
    description: "Clear explanations, agreed fees and regular updates — no jargon, no surprises.",
  },
];
