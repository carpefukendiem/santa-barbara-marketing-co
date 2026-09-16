// Real, permissioned client data only. Do not invent entries or metrics.
// Any TODO_METRIC / TODO_CONFIRM value must be left out of the render, not filled.

export type CaseStudyMetric = {
  label: string;
  value?: string;
  note?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  servicesUsed: string[];
  challenge: string;
  approach: string;
  whatWeBuilt: string[];
  outcome?: string;
  timeline?: string;
  metrics?: CaseStudyMetric[];
  testimonial?: string;
  beforeAfter?: string;
  liveUrl?: string;
  formerBrandNote?: boolean;
  status: 'active' | 'delivered' | 'anonymized';
  isPlaceholder?: boolean;
};

const TODO = /TODO_METRIC|TODO_CONFIRM/;

export function isTodoField(value?: string): boolean {
  return Boolean(value && TODO.test(value));
}

export function visibleMetrics(metrics?: CaseStudyMetric[]): CaseStudyMetric[] {
  if (!metrics?.length) return [];
  if (metrics.some((metric) => isTodoField(metric.label) || isTodoField(metric.value) || isTodoField(metric.note))) {
    return [];
  }
  return metrics.filter((metric) => Boolean(metric.value) && !isTodoField(metric.value));
}

const SERVICE_SLUGS: Record<string, string> = {
  'Web Design & Development': 'web-design',
  'Local SEO': 'local-seo',
  'Marketing Automation': 'marketing-automation',
  'Google Ads': 'google-ads',
  'Google Business Profile': 'google-business-profile',
  SEO: 'seo',
  'Digital Marketing Strategy': 'strategy',
  'Social Media': 'social-media',
};

export function serviceSlugFromName(name: string): string | undefined {
  return SERVICE_SLUGS[name];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'enso-mma',
    client: 'Enso MMA',
    industry: 'Martial Arts Gym',
    location: 'Santa Barbara',
    servicesUsed: ['Web Design & Development', 'Local SEO', 'Marketing Automation'],
    challenge: 'Needed a website and search presence built from nothing.',
    approach:
      'Keyword research first, then a full site build with the SEO foundation in place from day one, then ongoing local SEO and CRM-based follow-up.',
    whatWeBuilt: [
      'Custom website',
      'keyword-mapped service pages',
      'Google Business Profile optimization',
      'automated lead follow-up',
    ],
    outcome: 'Ranks on page 1 for martial arts searches in Santa Barbara.',
    metrics: [
      {
        label: 'Page 1 — martial arts, Santa Barbara',
        note: 'TODO_METRIC: keyword, position, date checked',
      },
    ],
    liveUrl: 'https://ensomma.com',
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: '101-jiu-jitsu-kickboxing',
    client: '101 Jiu Jitsu & Kickboxing',
    industry: 'Martial Arts Gym',
    location: 'Goleta',
    servicesUsed: ['Web Design & Development', 'Local SEO', 'Google Ads'],
    challenge:
      'Second gym in the same county as an existing client; needed to rank without paid search and later drive membership specials with ads.',
    approach:
      'Migrated the site from static HTML to Next.js, rebuilt the schedule and offer pages, restored mobile usability, ran local SEO, then layered a Google Ads campaign for a summer 2026 membership special.',
    whatWeBuilt: [
      'Next.js site migration',
      'class schedule page',
      'special-offer landing page with CRM integration',
      'mobile menu and responsive overhaul',
      'Google Ads campaign across Search, Display, Performance Max, Demand Gen, and YouTube',
    ],
    outcome: 'Page 1 for jiu jitsu searches in Goleta with no paid ads; both gyms on page 1 in the same county.',
    metrics: [
      {
        label: 'Page 1 — jiu jitsu, Goleta (organic)',
        note: 'TODO_METRIC',
      },
    ],
    liveUrl: 'https://101jiujitsugoleta.com',
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'santa-barbara-pest-control',
    client: 'Local Pest Control Company',
    industry: 'Pest Control',
    location: 'Downtown Santa Barbara',
    servicesUsed: ['Web Design & Development', 'Local SEO', 'Google Business Profile'],
    challenge: 'No website and zero Google visibility.',
    approach: 'Built the entire presence from scratch — site, profile, citations, content.',
    whatWeBuilt: ['New website', 'Google Business Profile setup', 'local citations'],
    outcome: 'Page 1 for pest control searches in its service area.',
    formerBrandNote: true,
    status: 'anonymized',
  },
  {
    slug: 'mission-sanitation',
    client: 'Mission Sanitation',
    industry: 'Portable Restroom Rentals',
    location: 'Solvang / Santa Ynez Valley',
    servicesUsed: ['Web Design & Development', 'Marketing Automation'],
    challenge: 'Leads arriving through the site chat needed to reach the owner immediately, not sit in an inbox.',
    approach:
      'Built the site on Next.js and wired the CRM so chat-initiated leads trigger an instant SMS to the owner.',
    whatWeBuilt: [
      'Next.js website',
      'CRM chat widget',
      'inbound webhook',
      'chat-to-SMS lead notification',
    ],
    outcome: 'Chat leads reach the owner by text the moment they come in.',
    liveUrl: 'https://missionsanitation.net',
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'freds-upholstery',
    client: "Fred's Upholstery",
    industry: 'Upholstery & Furniture Repair',
    location: 'Santa Barbara',
    servicesUsed: ['Web Design & Development', 'SEO', 'Local SEO'],
    challenge:
      'A small site that did not represent the full range of services or generate consistent lead flow.',
    approach:
      'Expanded the site into a full content and SEO build with a dedicated page for every service, structured as a hub-and-silo architecture, migrated off a page builder to Next.js.',
    whatWeBuilt: [
      'Next.js rebuild',
      'dedicated service pages',
      'furniture-repair content section',
      'hub-and-silo internal linking',
    ],
    liveUrl: 'https://fredsupholstery.com',
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'montecito-electric',
    client: 'Montecito Electric',
    industry: 'Electrical Contractor (C-10, est. 1985)',
    location: 'Montecito',
    servicesUsed: ['Web Design & Development', 'Digital Marketing Strategy'],
    challenge:
      'Needed a web presence that positioned a long-established business as a trusted local repair specialist rather than a general contractor.',
    approach:
      "Scoped the site down to three focused pages, removed off-strategy services from the copy and navigation, and built an editorial design around the company's own photography and heritage mark.",
    whatWeBuilt: [
      'Three-page static site',
      'custom design system',
      'real photography',
      'repair-specialist copy and navigation',
    ],
    outcome: "A site that says exactly what the business does and nothing it doesn't.",
    formerBrandNote: true,
    status: 'delivered',
  },
  {
    slug: 'junk-dogs',
    client: 'Junk Dogs',
    industry: 'Junk Removal',
    location: 'Santa Barbara area',
    servicesUsed: ['Web Design & Development', 'Local SEO', 'Marketing Automation'],
    challenge: 'Small local footprint that needed a site and an ongoing system rather than a one-time build.',
    approach: 'Built the website and run a monthly local SEO and follow-up system.',
    whatWeBuilt: ['Website', 'monthly local SEO', 'CRM follow-up'],
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'tastes-and-tunes',
    client: 'Tastes & Tunes Santa Barbara',
    industry: 'Food & Music Festival',
    location: 'Santa Barbara',
    servicesUsed: ['Web Design & Development', 'Digital Marketing Strategy', 'Social Media'],
    challenge: 'An event needing a website and a marketing plan for its 2027 edition.',
    approach: 'Built the event site and hold the marketing contract for the event.',
    whatWeBuilt: ['Event website', 'marketing plan'],
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'royal-latin-dance-cup',
    client: 'Royal Latin Dance Cup',
    industry: 'Dance Competition / Events',
    location: 'Santa Barbara',
    servicesUsed: ['Web Design & Development'],
    challenge: 'Competition needed a site it could update every season.',
    approach: 'Built and maintain the site.',
    whatWeBuilt: ['Event website', 'ongoing updates'],
    liveUrl: 'https://royallatindancecup.com',
    formerBrandNote: true,
    status: 'active',
  },
  {
    slug: 'glow-installations',
    client: 'Glow Installations',
    industry: 'Holiday Lighting Installation',
    location: 'Santa Barbara area',
    servicesUsed: ['Web Design & Development'],
    challenge: 'Existing site needed a modern, fast rebuild.',
    approach: 'Rebuilt in Next.js.',
    whatWeBuilt: ['Next.js rebuild'],
    formerBrandNote: true,
    status: 'delivered',
  },
];

export const hasCaseStudies = caseStudies.length > 0;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
