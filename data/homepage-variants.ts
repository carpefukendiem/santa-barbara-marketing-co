export type HomepageVariantId = 'a' | 'b';

export type IncludedItemCopy = {
  name: string;
  description: string;
};

export type HomepageCopy = {
  hero: {
    eyebrow: string;
    /** When set, rendered inside the H1 after the main headline. */
    headline: string;
    headlinePrice: string | null;
    supportNarrow: string;
    supportDesk: string;
    /** Optional short price line under the subhead (variant B). */
    priceLine: string | null;
    primaryCta: string;
    secondaryCta: string;
    trustChips: [string, string, string];
    trustCombined: string;
    recapLabel: string;
    recap: readonly string[];
    panelStripTitle: string;
    panelStripPrice: string;
    includedTitle: string;
    includedSubNarrow: string;
    includedSubDesk: string;
    crmTitle: string;
    crmAside: string;
    crmPlus: string;
    doneTitle: string;
    doneAside: string;
    crmItems: readonly IncludedItemCopy[];
    doneItems: readonly IncludedItemCopy[];
    closer: string;
    priceLabel: string;
    priceMonthly: string;
    priceMonthlySuffix: string;
    priceAnnualLine: string;
    priceSave: string;
    pricePrimaryCta: string;
    priceSecondaryCta: string;
    howLabel: string;
    howSteps: readonly [
      { lead: string; body: string },
      { lead: string; body: string },
      { lead: string; body: string },
    ];
    howAddonsLead: string;
    band: string;
  };
  trim: {
    includedKicker: string;
    includedTitle: string;
    includedLede: string;
    crmLab: string;
    crmSub: string;
    crmSubh: string;
    crmPrimary: readonly [string, string][];
    crmExtra: readonly [string, string][];
    crmPlus: string;
    doneLab: string;
    doneSub: string;
    doneSubh: string;
    doneForYou: readonly [string, string][];
    howKicker: string;
    howTitle: string;
    howLede: string;
    howSteps: readonly { title: string; body: string; tag?: string }[];
    localKicker: string;
    localTitle: string;
    localNote: string;
    priceKicker: string;
    priceTitle: string;
    closeKicker: string;
    closeTitle: string;
    closeLede: string;
    closePrimaryCta: string;
    closeSecondaryCta: string;
    riskReversal: { headline: string; copy: string } | null;
  };
};

const variantA: HomepageCopy = {
  hero: {
    eyebrow: 'Local businesses in Santa Barbara and nearby',
    headline: 'The whole customer-getting system. Set up for you.',
    headlinePrice: '$297/mo.',
    supportNarrow:
      'Website, full CRM, follow-up, reporting, and training, from a local team that will come meet you.',
    supportDesk:
      'A custom website, your own full CRM, follow-up, reporting, and training, from a local team that will come meet you.',
    priceLine: null,
    primaryCta: 'Start The Local Lead Plan, $297/mo',
    secondaryCta: 'Prefer to talk first? Book a call',
    trustChips: [
      'Secure checkout by Stripe',
      'Cancel anytime with 30-day written notice',
      'We’ll come meet you',
    ],
    trustCombined:
      'Secure checkout by Stripe · Cancel anytime with 30-day written notice',
    recapLabel: 'What’s included, set up for you',
    recap: [
      'Website + full CRM',
      'Email & text follow-up',
      'Website chat',
      'App setup + training',
      'Local SEO + reviews',
      'Monthly reporting',
    ],
    panelStripTitle: 'The Local Lead Plan',
    panelStripPrice: '$297/mo · all included',
    includedTitle: 'What’s included',
    includedSubNarrow: 'All in The Local Lead Plan · set up for you',
    includedSubDesk: 'All in The Local Lead Plan · set up for you · one monthly price',
    crmTitle: 'Your full CRM',
    crmAside: 'What the system does',
    crmPlus: 'Plus the other built-in tools.',
    doneTitle: 'Done for you',
    doneAside: 'Also included',
    crmItems: [
      {
        name: 'Full CRM',
        description:
          'Contacts, conversations, and customer history in one place, set up under your name',
      },
      {
        name: 'Pipelines',
        description: 'See every lead and where they stand',
      },
      {
        name: 'Booking and calendars',
        description: 'Customers can schedule with you',
      },
      {
        name: 'Email marketing',
        description: 'Plus automated email follow-ups',
      },
      {
        name: 'Texting and missed-call text-back',
        description: 'If you miss a call, they get a text',
      },
      {
        name: 'Website chat',
        description: 'Visitors can message you from the site',
      },
      {
        name: 'Forms',
        description: 'Capture leads on the site',
      },
      {
        name: 'Automations',
        description: 'Follow-up that runs without you chasing it',
      },
      {
        name: 'Review requests',
        description: 'Ask happy customers for reviews',
      },
      {
        name: 'Reporting',
        description: 'See activity from your own account',
      },
      {
        name: 'Mobile app',
        description: 'We set it up and train you',
      },
    ],
    doneItems: [
      {
        name: 'Custom website',
        description: 'Fully integrated and connected to the CRM',
      },
      {
        name: 'First review request or offer blast',
        description: 'Sent to your customer list',
      },
      {
        name: 'Monthly reporting',
        description: 'We walk you through what’s working',
      },
      {
        name: 'Local SEO',
        description: 'Show up locally',
      },
    ],
    closer: 'Close enough to shake your hand. We’ll come to you.',
    priceLabel: 'The Local Lead Plan',
    priceMonthly: '$297',
    priceMonthlySuffix: '/mo',
    priceAnnualLine: 'Or $2,970/yr, 2 months free',
    priceSave: 'Save $594 vs. monthly',
    pricePrimaryCta: 'Start The Local Lead Plan, $297/mo',
    priceSecondaryCta: 'Prefer to talk first? Book a call',
    howLabel: 'How it starts',
    howSteps: [
      {
        lead: 'Start the plan or book a call.',
        body: ' Secure checkout by Stripe, or talk it through first.',
      },
      {
        lead: 'We come meet you.',
        body: ' A local team, in person, to learn the business.',
      },
      {
        lead: 'We set it all up.',
        body: ' Website, full CRM, follow-up, and the app, then we train you.',
      },
    ],
    howAddonsLead: 'Optional add-ons, if you want them.',
    band:
      'Santa Barbara · Goleta · Montecito · Carpinteria · One local system · Plain-English reporting · Cancel anytime with 30-day written notice',
  },
  trim: {
    includedKicker: 'What’s included',
    includedTitle: 'Your full CRM, and the work we do for you.',
    includedLede:
      'All in The Local Lead Plan, for one monthly price. Set up under your name.',
    crmLab: 'Your full CRM',
    crmSub: 'What the system does',
    crmSubh: 'Catch every lead and follow up until it books.',
    crmPrimary: [
      [
        'Full CRM',
        'Contacts, conversations, and customer history in one place, set up under your name.',
      ],
      ['Pipelines', 'See every lead and where they stand.'],
      ['Booking and calendars', 'Customers can schedule with you.'],
      ['Email marketing', 'Plus automated email follow-ups.'],
      [
        'Texting and missed-call text-back',
        'If you miss a call, they get a text.',
      ],
    ],
    crmExtra: [
      ['Website chat', 'Visitors can message you from the site.'],
      ['Forms', 'Capture leads on the site.'],
      ['Automations', 'Follow-up that runs without you chasing it.'],
      ['Review requests', 'Ask happy customers for reviews.'],
      ['Reporting', 'See activity from your own account.'],
      ['Mobile app', 'We set it up and train you.'],
    ],
    crmPlus: 'Plus the other built-in tools.',
    doneLab: 'Done for you',
    doneSub: 'Also included',
    doneSubh: 'Built and run by us, so your hours stay on paying work.',
    doneForYou: [
      [
        'Custom website',
        'Fast, mobile-first website, fully integrated and connected to the CRM.',
      ],
      [
        'First review request or offer blast',
        'Sent to your customer list.',
      ],
      ['Monthly reporting', 'We walk you through what’s working.'],
      ['Local SEO', 'Show up locally.'],
    ],
    howKicker: 'How it starts',
    howTitle: 'From first call to a system that works while you work.',
    howLede:
      'The same four steps as above. A local team sets it up with you in person, then trains you to run it.',
    howSteps: [
      {
        title: 'Start the plan or book a call.',
        body: 'Secure checkout by Stripe, or talk it through first.',
      },
      {
        title: 'We come meet you.',
        body: 'A local team, in person, to learn the business.',
      },
      {
        title: 'Optional add-ons, if you want them.',
        body: 'Voice AI answers calls when you can’t, $99/mo. Chat AI handles chats when you can’t, $29/mo. Add either, both, or neither. Website chat is included.',
        tag: 'Optional · not in $297',
      },
      {
        title: 'We set it all up.',
        body: 'Website, full CRM, follow-up, and the app, then we train you.',
      },
    ],
    localKicker: 'Santa Barbara and nearby',
    localTitle: 'We come to you.',
    localNote:
      'In-person setup and training in Santa Barbara, Goleta, Carpinteria, and Montecito.',
    priceKicker: 'The Local Lead Plan',
    priceTitle: 'One monthly price.',
    closeKicker: 'The Local Lead Plan',
    closeTitle: 'Start the plan, or book a 20-minute call.',
    closeLede: '$297/mo, or $2,970/yr. Cancel anytime with 30-day written notice.',
    closePrimaryCta: 'Start the plan',
    closeSecondaryCta: 'Book a 20-minute call',
    riskReversal: null,
  },
};

/**
 * Variant B maps new copy into existing slots only.
 * Skipped (no matching slot): dedicated risk-reversal section;
 * value-stack lines without a name match stay on control wording
 * (Pipelines, Email marketing, Forms, First review request or offer blast).
 */
const variantB: HomepageCopy = {
  hero: {
    eyebrow: 'The Local Lead Plan for Santa Barbara County businesses',
    headline:
      'Get more calls from Google, and never lose another lead to a missed call.',
    headlinePrice: null,
    supportNarrow:
      'We build your website, set up your full CRM, and run the follow-up for you. Your site is live in 30 days. You get back to the work that pays.',
    supportDesk:
      'We build your website, set up your full CRM, and run the follow-up for you. Your site is live in 30 days. You get back to the work that pays.',
    priceLine: '$297/mo or $2,970/yr (2 months free, save $594)',
    primaryCta: 'Start the Plan',
    secondaryCta: 'Book a 20-Minute Call',
    trustChips: [
      'Secure checkout by Stripe',
      'Cancel anytime with 30-day written notice',
      'We’ll come meet you',
    ],
    trustCombined:
      'Cancel anytime with 30-day written notice. Secure checkout by Stripe.',
    recapLabel: 'What’s included, set up for you',
    recap: [
      'Website + full CRM',
      'Email & text follow-up',
      'Website chat',
      'App setup + training',
      'Local SEO + reviews',
      'Monthly reporting',
    ],
    panelStripTitle: 'The Local Lead Plan',
    panelStripPrice: '$297/mo · all included',
    includedTitle: 'What’s included',
    includedSubNarrow: 'All in The Local Lead Plan · set up for you',
    includedSubDesk: 'All in The Local Lead Plan · set up for you · one monthly price',
    crmTitle: 'Your full CRM',
    crmAside: 'What the system does',
    crmPlus: 'Plus the other built-in tools.',
    doneTitle: 'Done for you',
    doneAside: 'Also included',
    crmItems: [
      {
        name: 'Full CRM',
        description:
          'Every contact, conversation and job in one place. You own it.',
      },
      {
        name: 'Pipelines',
        description: 'See every lead and where they stand',
      },
      {
        name: 'Booking and calendars',
        description:
          'Customers can book a time with you without the phone tag.',
      },
      {
        name: 'Email marketing',
        description: 'Plus automated email follow-ups',
      },
      {
        name: 'Texting and missed-call text-back',
        description:
          'Miss a call on the job and they get a text right away, before they call your competitor.',
      },
      {
        name: 'Website chat',
        description: 'Visitors can message you right from your site.',
      },
      {
        name: 'Forms',
        description: 'Capture leads on the site',
      },
      {
        name: 'Automations',
        description:
          'Every form, call and message gets a follow-up, so no lead sits in an inbox and goes cold.',
      },
      {
        name: 'Review requests',
        description:
          'Happy customers get an easy way to leave a review. We never write reviews or hide the bad ones.',
      },
      {
        name: 'Reporting',
        description:
          'We walk you through what\'s working each month, in plain English.',
      },
      {
        name: 'Mobile app',
        description:
          'We set it up on your phone and show you how to run it.',
      },
    ],
    doneItems: [
      {
        name: 'Custom website',
        description:
          'A fast site built for phones, so the person searching on their phone actually calls you.',
      },
      {
        name: 'First review request or offer blast',
        description: 'Sent to your customer list',
      },
      {
        name: 'Monthly reporting',
        description:
          'We walk you through what\'s working each month, in plain English.',
      },
      {
        name: 'Local SEO',
        description:
          'Your Google Business Profile and local pages set up so nearby customers find you, not the shop down the street.',
      },
    ],
    closer:
      'One local team. One monthly price. Everything that gets you the call, the follow-up and the booked job.',
    priceLabel: 'The Local Lead Plan',
    priceMonthly: '$297',
    priceMonthlySuffix: '/mo',
    priceAnnualLine: 'Or $2,970/yr (2 months free)',
    priceSave: 'Save $594 vs. monthly',
    pricePrimaryCta: 'Start the Plan',
    priceSecondaryCta: 'Book a 20-Minute Call',
    howLabel: 'How it starts',
    howSteps: [
      {
        lead: 'Start the plan or book a call.',
        body: ' Secure checkout by Stripe, or talk it through first.',
      },
      {
        lead: 'We come meet you.',
        body: ' A local team, in person, to learn the business.',
      },
      {
        lead: 'We set it all up.',
        body: ' Website, full CRM, follow-up, and the app, then we train you.',
      },
    ],
    howAddonsLead: 'Optional add-ons, if you want them.',
    band:
      'Santa Barbara · Goleta · Montecito · Carpinteria · One local system · Plain-English reporting · Cancel anytime with 30-day written notice',
  },
  trim: {
    includedKicker: 'What’s included',
    includedTitle: 'Your full CRM, and the work we do for you.',
    includedLede:
      'All in The Local Lead Plan, for one monthly price. Set up under your name.',
    crmLab: 'Your full CRM',
    crmSub: 'What the system does',
    crmSubh: 'Catch every lead and follow up until it books.',
    crmPrimary: [
      [
        'Full CRM',
        'Every contact, conversation and job in one place. You own it.',
      ],
      ['Pipelines', 'See every lead and where they stand.'],
      [
        'Booking and calendars',
        'Customers can book a time with you without the phone tag.',
      ],
      ['Email marketing', 'Plus automated email follow-ups.'],
      [
        'Texting and missed-call text-back',
        'Miss a call on the job and they get a text right away, before they call your competitor.',
      ],
    ],
    crmExtra: [
      ['Website chat', 'Visitors can message you right from your site.'],
      ['Forms', 'Capture leads on the site.'],
      [
        'Automations',
        'Every form, call and message gets a follow-up, so no lead sits in an inbox and goes cold.',
      ],
      [
        'Review requests',
        'Happy customers get an easy way to leave a review. We never write reviews or hide the bad ones.',
      ],
      [
        'Reporting',
        'We walk you through what\'s working each month, in plain English.',
      ],
      [
        'Mobile app',
        'We set it up on your phone and show you how to run it.',
      ],
    ],
    crmPlus: 'Plus the other built-in tools.',
    doneLab: 'Done for you',
    doneSub: 'Also included',
    doneSubh: 'Built and run by us, so your hours stay on paying work.',
    doneForYou: [
      [
        'Custom website',
        'A fast site built for phones, so the person searching on their phone actually calls you.',
      ],
      [
        'First review request or offer blast',
        'Sent to your customer list.',
      ],
      [
        'Monthly reporting',
        'We walk you through what\'s working each month, in plain English.',
      ],
      [
        'Local SEO',
        'Your Google Business Profile and local pages set up so nearby customers find you, not the shop down the street.',
      ],
    ],
    howKicker: 'How it starts',
    howTitle: 'From first call to a system that works while you work.',
    howLede:
      'The same four steps as above. A local team sets it up with you in person, then trains you to run it.',
    howSteps: [
      {
        title: 'Start the plan or book a call.',
        body: 'Secure checkout by Stripe, or talk it through first.',
      },
      {
        title: 'We come meet you.',
        body: 'A local team, in person, to learn the business.',
      },
      {
        title: 'Optional add-ons, if you want them.',
        body: 'Voice AI answers calls when you can’t, $99/mo. Chat AI handles chats when you can’t, $29/mo. Add either, both, or neither. Website chat is included.',
        tag: 'Optional · not in $297',
      },
      {
        title: 'We set it all up.',
        body: 'Website, full CRM, follow-up, and the app, then we train you.',
      },
    ],
    localKicker: 'Santa Barbara and nearby',
    localTitle: 'We come to you.',
    localNote:
      'In-person setup and training in Santa Barbara, Goleta, Carpinteria, and Montecito.',
    priceKicker: 'The Local Lead Plan',
    priceTitle: 'One monthly price.',
    closeKicker: 'The Local Lead Plan',
    closeTitle: 'Stop letting good leads go cold.',
    closeLede:
      'Website, full CRM, follow-up, reporting and training from a local team that comes to meet you. Live in 30 days.',
    closePrimaryCta: 'Start the Plan',
    closeSecondaryCta: 'Book a 20-Minute Call',
    // No dedicated risk-reversal section on the live homepage.
    riskReversal: null,
  },
};

export const homepageVariants: Record<HomepageVariantId, HomepageCopy> = {
  a: variantA,
  b: variantB,
};

export function isHomepageVariantId(value: string): value is HomepageVariantId {
  return value === 'a' || value === 'b';
}

export function getHomepageCopy(variant: HomepageVariantId): HomepageCopy {
  return homepageVariants[variant];
}
