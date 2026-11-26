/**
 * PPC / Google Ads management offer.
 * Centralized so pricing copy, the service page, schema, and display add-on
 * surfaces stay in sync. Revise here first.
 */

const MONTHLY_AMOUNT = 150;
const MIN_AD_BUDGET_MONTHLY = 300;

export const ppcManagement = {
  /** Public URL. Existing Google Ads service page (do not duplicate). */
  href: '/services/google-ads',
  slug: 'google-ads',

  name: 'PPC Management',
  shortName: 'Google Ads',
  serviceName: 'Google Ads Management',
  navLabel: 'Google Ads',

  monthlyAmount: MONTHLY_AMOUNT,
  minAdBudgetMonthly: MIN_AD_BUDGET_MONTHLY,

  /** Checkout / pricing add-on blurb. Ad spend stays separate from the fee. */
  addonBlurb: `Google Search ads and Local Services Ads where you qualify. Ad spend is paid to Google separately, with a $${MIN_AD_BUDGET_MONTHLY}/mo minimum.`,

  metaTitle: 'Google Ads Management for $150/mo',
  metaDescription:
    'Turn on Google Ads for $150 a month. Campaign build, tracking, and a monthly report. You pay Google for ad spend. Book a 20-Minute Call.',

  h1: 'Turn on Google Ads for $150 a month.',
  eyebrow: 'Paid Search',
  heroLede:
    'A $150/mo management fee for small and local businesses that want hire-intent Google ads without an agency-sized retainer. You keep the ad account. You pay Google for ad spend on your own card. We build and manage the campaigns.',

  cardBlurb:
    'Google Ads management at $150/mo. You pay Google for ad spend. Built for small and local businesses.',

  /** Plain-money explanation for clients. */
  moneyExplanation: {
    title: 'What you pay, in plain terms',
    management:
      'The $150/mo is our management fee. It covers campaign build, ongoing management, tracking, reporting, and a short monthly check-in.',
    adSpend: `Your ad budget is separate. You pay Google directly on your own card, and you own the ad account. There is a $${MIN_AD_BUDGET_MONTHLY}/mo minimum ad budget. $500+ recommended for competitive trades. There is no ad-spend cap.`,
    twoWays:
      'Same $150/mo price either way: as an add-on to The Local Lead Plan, or as a standalone service. Standalone starts with a 20-Minute Call.',
  },

  goLivePromise:
    "If your ads aren't live and tracking within 5 business days of us getting access, your first month's fee is on us.",

  goLiveFrame:
    'That is a promise about how we work, not a promise of leads, revenue, or results.',

  seoVsAds:
    'SEO typically takes 3 to 6 months; ads can start in days.',

  included: [
    {
      title: 'Google Search ads, plus Local Services Ads where you qualify',
      body: 'We run Google Search ads. When your category qualifies, we also run Google Local Services Ads. If LSA is not available for your trade, Search still runs.',
    },
    {
      title: 'Campaign build',
      body: 'We build the Google Ads campaigns around the services and geography you actually want to sell.',
    },
    {
      title: 'Keyword and negative-keyword tuning',
      body: 'Weekly in month 1, then monthly. We add negatives that waste spend and keep the search terms aimed at hire-intent queries.',
    },
    {
      title: 'Ad copy',
      body: 'Headlines and descriptions that match what you sell and where you serve.',
    },
    {
      title: 'Call and form conversion tracking',
      body: 'We set up tracking so calls and forms can be tied back to the ads, instead of guessing from clicks alone.',
    },
    {
      title: 'Monthly plain-English report',
      body: 'Spend, calls, forms, cost per lead, and what changes next. Written so you can read it without a media degree.',
    },
    {
      title: 'Short monthly check-in',
      body: 'A brief review of what the numbers show and what we will change next.',
    },
  ],

  notIncluded: [
    'Ad spend (you pay Google directly)',
    'Meta or TikTok ads',
    'Video production',
  ],

  multiLocationNote: 'Multi-location accounts get a quote.',

  planClientNote:
    'Local Lead Plan clients: every lead lands in your full CRM with instant follow-up. No setup fee for Local Lead Plan clients.',

  standaloneNote:
    'Standalone clients: we recommend a site that converts and fast lead follow-up. The Local Lead Plan is the upgrade when you want the website, Local SEO, and follow-up system in one monthly plan.',

  whoItsFor: {
    title: 'Who this is for',
    items: [
      'Small and local businesses that want hire-intent Google ads without a large retainer',
      `Owners who can fund at least $${MIN_AD_BUDGET_MONTHLY}/mo in ad spend paid directly to Google. $500+ recommended for competitive trades.`,
      'Businesses ready to own their Google Ads account and keep billing on their own card',
      'Local Lead Plan clients who want paid search as an add-on next to the full CRM',
      'Trades and local services that may also qualify for Google Local Services Ads',
    ],
  },

  whoItsNotFor: {
    title: 'Who this is not for',
    items: [
      'Businesses that need Meta, TikTok, or video production in the same fee',
      `Accounts that cannot fund the $${MIN_AD_BUDGET_MONTHLY}/mo minimum ad budget`,
      'Multi-location rollouts that need a custom quote before anything launches',
      'Anyone looking for a results, ranking, or revenue guarantee',
    ],
  },

  faqs: [
    {
      category: 'ads' as const,
      question: 'What does the $150/mo cover?',
      answer: `The $150/mo is the management fee: campaign build, keyword and negative-keyword tuning, ad copy, call and form conversion tracking, a monthly plain-English report, and a short monthly check-in. Ad spend is separate. You pay Google directly on your own card, with a $${MIN_AD_BUDGET_MONTHLY}/mo minimum. $500+ recommended for competitive trades. Cancel anytime with 30-day written notice.`,
    },
    {
      category: 'ads' as const,
      question: 'Do I own the ad account?',
      answer:
        'Yes. You own the Google Ads account and you pay Google for ad spend on your own card. We manage the account. We do not mark up your media spend.',
    },
    {
      category: 'ads' as const,
      question: 'Are Local Services Ads included?',
      answer:
        'Yes, where your category qualifies. Google Search ads are always in scope. Google Local Services Ads are included when Google offers them for your trade. If your category does not qualify, we run Search and say so plainly. See also our Local Services Ads page for how that product works.',
    },
    {
      category: 'ads' as const,
      question: 'Is this an add-on or a standalone service?',
      answer:
        'Both, at the same $150/mo price. As an add-on to The Local Lead Plan, leads land in your full CRM with instant follow-up, and there is no setup fee. As a standalone service, book a 20-Minute Call to start. We will recommend a site that converts and fast lead follow-up, and point you to The Local Lead Plan when that upgrade fits.',
    },
    {
      category: 'ads' as const,
      question: 'What if ads are not live within 5 business days?',
      answer:
        "If your ads aren't live and tracking within 5 business days of us getting access, your first month's fee is on us. That is a promise about how we work, not a promise of leads or revenue.",
    },
    {
      category: 'ads' as const,
      question: 'Can you guarantee leads or a cost per lead?',
      answer:
        'No. We control structure, copy, tracking, and the work listed above. We cannot control Google\'s auction, competitors, or whether your office answers the phone. The ROI calculator on this page uses only the numbers you enter. It is an estimate, not a prediction.',
    },
    {
      category: 'getting-started' as const,
      question: 'How do I get started?',
      answer:
        'Local Lead Plan clients can add PPC Management at checkout or ask us to add it later. Standalone clients book a 20-Minute Call. Email info@sbmc.io or call (805) 307-7600. Cancel anytime with 30-day written notice.',
    },
  ],

  /** Schema.org Offer description (ad spend separate, minimum noted). */
  offerDescription: `Google Ads management fee of $150 per month. Ad spend is paid directly to Google by the client on their own card, with a $${MIN_AD_BUDGET_MONTHLY} per month minimum ad budget. The client owns the ad account.`,

  schemaServiceType: 'Google Ads and PPC management',

  cancelNotice: 'Cancel anytime with 30-day written notice.',

  contactEmail: 'info@sbmc.io',
  contactPhoneDisplay: '(805) 307-7600',
  contactPhoneHref: 'tel:+18053077600',

  relatedServiceSlugs: [
    'local-service-ads',
    'conversion-optimization',
    'local-seo',
    'analytics',
  ] as const,

  relatedResourceSlugs: [
    'google-ads-for-local-business',
    'google-ads-cost-santa-barbara',
    'seo-vs-google-ads',
    'local-services-ads-vs-google-ads',
  ] as const,

  relatedIndustrySlugs: ['home-services', 'medical-wellness'] as const,

  dateModified: '2026-11-26',
} as const;

export type PpcManagement = typeof ppcManagement;
