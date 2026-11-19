/**
 * Homepage direct-response copy and editable placeholders.
 * Set SPOTS_PER_MONTH / ANCHOR_PRICES to show those sections.
 * Flip SHOW_WEBSITE_GUARANTEE to include the optional site-delivery line.
 */

export const SHOW_WEBSITE_GUARANTEE = false;

/** When unset (null), the scarcity section is not rendered. */
export const SPOTS_PER_MONTH: number | null = null;

export type AnchorPriceRow = {
  label: string;
  price: string;
  isTotal?: boolean;
};

/** When unset (null), the “What This Costs Separately” table is not rendered. */
export const ANCHOR_PRICES: AnchorPriceRow[] | null = null;

export const homepageHero = {
  eyebrow: 'For Santa Barbara, Goleta, Montecito & Carpinteria businesses',
  h1: 'Never Lose Another Customer to a Missed Call. A Website, CRM, and Follow-Up System That Gets You Leads, Built In Person for $297/mo.',
  subhead:
    'We come to your business, build your website and your own full CRM, set up text-back and follow-up so no lead goes cold, and train you to run it. You don’t need to be techy. You don’t chase anyone. We handle it.',
  primaryCta: 'Start The Local Lead Plan — $297/mo',
  primaryHref: '/get-started' as const,
  // TODO: swap secondaryHref to a dedicated audit page when that route exists.
  secondaryCta: 'Not sure yet? Get a free local lead audit →',
  secondaryHref: '/book-a-call' as const,
} as const;

export const riskReversal = [
  'Missed-call text-back live in 7 days, or your first month is free',
  'Cancel anytime with 30-day written notice',
  'A real local team, in person',
] as const;

export const painSection = {
  h2: 'You’re Probably Losing Customers Right Now',
  bullets: [
    'A call comes in while you’re on a job. It goes to voicemail. They call the next business.',
    'A website form comes in at 9pm. Nobody answers until tomorrow. They already booked someone else.',
    'You did great work last month. Nobody asked for the review.',
  ],
  closer: 'The Local Lead Plan fixes all three, and you never touch the tech.',
} as const;

export type StackItem = {
  title: string;
  tag?: string;
  description: string;
};

export const stackItems: StackItem[] = [
  {
    title: 'Your Custom Website',
    tag: 'Live in 3–6 weeks',
    description:
      'Fast, mobile-first, and wired directly into your CRM so every inquiry is captured.',
  },
  {
    title: 'Your Own Full CRM',
    tag: 'Set up under your name',
    description: 'Every lead, conversation, and customer in one place. You own it.',
  },
  {
    title: 'Missed-Call Text-Back',
    tag: 'Live in 7 days',
    description:
      'Miss a call and the customer gets a text in seconds, so they don’t call your competitor.',
  },
  {
    title: 'Automatic Follow-Up',
    tag: 'Email + text',
    description: 'Leads get followed up until they book or say no. You stop chasing.',
  },
  {
    title: 'Online Booking',
    description: 'Customers pick a time on your calendar without playing phone tag.',
  },
  {
    title: 'Review Machine',
    description:
      'Happy customers get asked automatically. We send your first review request to your existing list.',
  },
  {
    title: 'Website Chat',
    description: 'Visitors can message you from the site, and you reply from your phone.',
  },
  {
    title: 'Local SEO',
    description: 'So people searching in Santa Barbara find you first.',
  },
  {
    title: 'In-Person Setup + Training',
    description:
      'We come meet you, learn your business, build it with you, and train you and your team on the mobile app.',
  },
  {
    title: 'Monthly Reporting in Plain English',
    description: 'A walkthrough of the leads you got and what’s working. No jargon.',
  },
];

export const guarantee = {
  h2: 'Our Guarantee',
  primary:
    'Your missed-call text-back is live within 7 days of your setup meeting, or your first month is free.',
  website:
    'Your site is live within 6 weeks of your setup meeting, or we credit you a month for every week we’re late.',
} as const;

export const scarcityCopy = {
  h2: 'Limited Setup Spots Each Month',
  body: (spots: number) =>
    `Because we set up every client in person, we only onboard ${spots} businesses per month in Santa Barbara County. When this month’s spots are full, new clients start next month.`,
  primaryCta: 'Claim your spot — $297/mo',
  secondaryCta: 'Book a free call first',
} as const;

export const addOns = {
  h2: 'Optional Add-Ons',
  items: [
    {
      title: 'Voice AI: $99/mo.',
      body: 'Answers your calls when you can’t, books the job, and texts you the details.',
    },
    {
      title: 'Chat AI: $29/mo.',
      body: 'Answers website chats 24/7.',
    },
  ],
  note: 'Not included in the $297 plan. Add either, both, or neither.',
} as const;

export const howItWorks = {
  h2: 'How it works',
  steps: [
    {
      title: 'Start the plan or book a call.',
      body: 'Secure checkout by Stripe, or talk it through first.',
    },
    {
      title: 'We come meet you.',
      body: 'In person, at your business.',
    },
    {
      title: 'We build it.',
      body: 'Website, CRM, text-back, follow-up, booking, and reviews.',
    },
    {
      title: 'We train you.',
      body: 'You’re live, and you don’t need to be technical.',
    },
  ],
} as const;

export const serviceArea = {
  kicker: 'Santa Barbara and nearby',
  h2: 'We come to you.',
  note: 'In-person setup and training in Santa Barbara, Goleta, Carpinteria, and Montecito.',
  cities: ['Santa Barbara', 'Goleta', 'Carpinteria', 'Montecito'] as const,
} as const;

export const homepageFaqCopy = [
  {
    question: 'Do I need to be tech-savvy?',
    answer: 'No. We set it up under your name, train you in person, and handle the rest.',
  },
  {
    question: 'How fast is the text-back live?',
    answer: 'Within 7 days of your setup meeting.',
  },
  {
    question: 'How fast is my website live?',
    answer: '3 to 6 weeks.',
  },
  {
    question: 'What does it cost?',
    answer: 'The Local Lead Plan is $297/mo, or $2,970/yr (2 months free).',
  },
  {
    question: 'What’s not included?',
    answer:
      'Ad spend, Google Business Profile rebuilds, and print. These are quoted separately.',
  },
  {
    question: 'How do I cancel?',
    answer: 'Anytime, with 30-day written notice.',
  },
] as const;

export const finalCta = {
  h2: 'Start the plan, or book a free call.',
  sub: '$297/mo, or $2,970/yr. Cancel anytime with 30-day written notice.',
  primary: 'Start the plan',
  secondary: 'Book a free call',
} as const;

export const valueAnchor = {
  h2: 'What This Costs Separately',
  yourPrice: 'Your price: $297/mo.',
  annualLine: 'Or $2,970/yr, which is 2 months free.',
} as const;

export const homepageMeta = {
  title: 'Santa Barbara Marketing Co. | Website, CRM & Lead System $297/mo',
  description:
    'Never lose a customer to a missed call. A custom website, full CRM, text-back, and follow-up, built in person for Santa Barbara businesses. $297/mo.',
} as const;
