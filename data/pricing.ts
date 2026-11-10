export type PricingIncluded = {
  title: string;
  href: string;
  body: string;
};

export type PricingExtra = {
  title: string;
  href: string;
  note?: string;
};

export const pricingTestimonial = {
  text: '',
  author: '',
} as const;

export const pricingPlan = {
  name: 'The 805 System',
  badge: '',
  monthlyAmount: 297,
  annualAmount: 2970,
  annualBonus: '+2 months FREE',
  included: [
    {
      title: 'Marketing website',
      href: '/services/web-design',
      body: 'A site built to take the call on a phone, not a brochure that dies in a PDF.',
    },
    {
      title: 'Lead follow-up',
      href: '/services/marketing-automation',
      body: 'Forms and missed inquiries get a path back to you instead of sitting in an inbox.',
    },
    {
      title: 'Missed-call text back',
      href: '/services/ai-automation',
      body: 'When a call is missed, the next message is a text, not a voicemail they will not return.',
    },
    {
      title: 'Review requests',
      href: '/services/google-business-profile',
      body: 'A request process that is easy for customers. We do not write reviews or hide the bad ones.',
    },
    {
      title: 'Local SEO',
      href: '/services/local-seo',
      body: 'Google Business Profile and local pages aimed at the searches you can actually win in this county.',
    },
    {
      title: 'On-site SEO',
      href: '/services/seo',
      body: 'Titles, pages, and technical cleanup so the site agrees with the listing.',
    },
  ] satisfies PricingIncluded[],
  extras: [
    {
      title: 'Google Ads management',
      href: '/services/google-ads',
      note: 'Media spend is billed by Google, separate from the system rate.',
    },
    {
      title: 'Google Business Profile rebuild',
      href: '/services/google-business-profile',
    },
    {
      title: 'Print & apparel production',
      href: '/services/print-and-apparel',
      note: 'Garments and print runs are quoted per order.',
    },
  ] satisfies PricingExtra[],
  steps: [
    {
      title: 'Talk first, or start now',
      body: 'Book a free call and we look at your listing and site. Already decided? Get Started is the pay-and-enroll page.',
    },
    {
      title: 'We build the system',
      body: 'A website is typically four to eight weeks when content arrives on time. Automations and the listing follow the same plan.',
    },
    {
      title: 'Launch',
      body: 'We walk through what is live, what you have to do, and how we will report. Monthly or annual billing continues until you cancel with 30-day written notice.',
    },
  ],
} as const;
