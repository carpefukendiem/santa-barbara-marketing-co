export type PrintService = {
  slug: string;
  name: string;
  shortName: string;
  cardBlurb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subhead: string;
  intro: string;
  whatsIncluded: Array<{ title: string; body: string }>;
  goodFit: string;
};

export const printServices: PrintService[] = [
  {
    slug: 'screen-printing',
    name: 'Screen Printing',
    shortName: 'Screen Printing',
    cardBlurb:
      'Shirts, hoodies, and workwear printed for your team, your event, or your customers.',
    metaTitle: 'Screen Printing in Santa Barbara',
    metaDescription:
      'Screen-printed shirts, hoodies, and workwear for Santa Barbara businesses, teams, and events. Managed by the same team that runs your marketing.',
    h1: 'Screen Printing.',
    subhead:
      'Shirts, hoodies, and workwear printed for your team, your event, or your customers.',
    intro:
      'Screen printing is still the right answer for most local businesses: a crew of ten in matching shirts, two hundred tees for a fun run, or a hoodie you sell at the counter. We handle the art, the proof, and the order, and it lands as part of the same plan as your website and ads.',
    whatsIncluded: [
      {
        title: 'Artwork and proof',
        body: 'We prepare print-ready art from your logo, or design it, and you approve a digital proof before anything runs.',
      },
      {
        title: 'Garment selection',
        body: 'We pick garments for the job: workwear that survives a job site, soft tees for retail, uniforms that match your brand colors.',
      },
      {
        title: 'Quantity and pricing',
        body: 'Per-piece pricing drops with quantity and color count. We quote before you commit.',
      },
      {
        title: 'Delivery',
        body: 'Orders are delivered locally or shipped. Timelines are set at quote, not guessed.',
      },
    ],
    goodFit: 'Contractors and home services, restaurants and tasting rooms, schools and clubs, events and fundraisers.',
  },
  {
    slug: 'custom-apparel',
    name: 'Custom Apparel & Uniforms',
    shortName: 'Custom Apparel',
    cardBlurb:
      'Uniforms, branded merchandise, and the promotional pieces that keep your name in the room.',
    metaTitle: 'Custom Apparel & Uniforms in Santa Barbara',
    metaDescription:
      'Branded uniforms and custom apparel for Santa Barbara businesses, from a single crew to a full retail line.',
    h1: 'Custom Apparel & Uniforms.',
    subhead: 'Uniforms and branded apparel that match the rest of your marketing.',
    intro:
      'A uniform is a marketing asset your customers see before they see your website. We design and produce apparel that matches your brand, from polos for the front desk to a retail line for the register, and we order it in sizes that make sense for real staff.',
    whatsIncluded: [
      {
        title: 'Brand-matched design',
        body: 'Logo placement, colors, and typography consistent with your site and signage.',
      },
      {
        title: 'Garment sourcing',
        body: 'Access to a full wholesale catalog: polos, work shirts, outerwear, hats, and more.',
      },
      {
        title: 'Sizing and reorders',
        body: 'We keep your spec on file so reorders are a message, not a project.',
      },
      {
        title: 'Decoration',
        body: 'Screen printing and other decoration methods chosen for the garment and the design.',
      },
    ],
    goodFit:
      'Medical and wellness practices, professional services, restaurants and hospitality, home services.',
  },
  {
    slug: 'promotional-products',
    name: 'Promotional Products',
    shortName: 'Promo Products',
    cardBlurb: 'Branded pieces people actually keep.',
    metaTitle: 'Promotional Products in Santa Barbara',
    metaDescription:
      'Branded promotional products for Santa Barbara businesses — pieces worth keeping, sourced and managed by your marketing team.',
    h1: 'Promotional Products.',
    subhead: 'Branded pieces people actually keep.',
    intro:
      'The right promotional product stays on a desk or in a truck for a year. The wrong one is in the trash by Tuesday. We pick pieces that fit the audience and the budget, put your brand on them properly, and tie them to a campaign, an event, or a customer thank-you.',
    whatsIncluded: [
      {
        title: 'Product selection',
        body: 'Drinkware, bags, hats, pens, and event pieces from a wholesale catalog, chosen for who will receive them.',
      },
      {
        title: 'Brand application',
        body: 'Art prepared for the imprint method each product needs.',
      },
      {
        title: 'Campaign fit',
        body: 'Tied to something: a grand opening, a trade show, a referral program, a season.',
      },
      {
        title: 'Ordering and reorders',
        body: 'Quoted before you commit; specs kept on file.',
      },
    ],
    goodFit: 'Real estate, professional services, events, hospitality.',
  },
  {
    slug: 'team-stores',
    name: 'Team & Fan Stores',
    shortName: 'Team Stores',
    cardBlurb:
      'An online store for your team’s gear. No inventory, no collecting cash in envelopes.',
    metaTitle: 'Team & Fan Stores in Santa Barbara',
    metaDescription:
      'Online team stores and fan shops for Santa Barbara schools, clubs, and businesses — no inventory, no collecting cash.',
    h1: 'Team & Fan Stores.',
    subhead:
      'An online store for your team’s gear. No inventory, no collecting cash in envelopes.',
    intro:
      'Schools, clubs, and businesses with a following need a way to sell branded gear without buying a garage full of it. We set up an online store with your designs, take the orders, produce them in a batch, and deliver. You get the gear out and the margin in without managing any of it.',
    whatsIncluded: [
      {
        title: 'Store setup',
        body: 'Your logo, your products, your colors, on a store link you share.',
      },
      {
        title: 'Order window',
        body: 'A set open-and-close window so production runs as one batch.',
      },
      {
        title: 'Production and delivery',
        body: 'Orders produced after the window closes and delivered to one location or shipped.',
      },
      {
        title: 'Fundraising option',
        body: 'A per-item margin that goes back to the team or program.',
      },
    ],
    goodFit: 'Schools, youth sports, clubs, gyms, businesses with a fan base.',
  },
];

export const printHub = {
  slug: 'print-and-apparel',
  name: 'Print & Apparel',
  metaTitle: 'Print & Apparel Services in Santa Barbara',
  metaDescription:
    'Screen printing, custom apparel, promotional products, and team stores for Santa Barbara businesses — managed by the same team that runs your marketing.',
  h1: 'Print & Apparel.',
  subhead:
    'The physical side of your marketing, handled by the same people who run the digital side.',
  intro:
    'Most agencies stop at the screen. We do not. The shirt on your crew, the hat at the counter, and the banner at the booth are marketing, and they should match the website and the ads. We manage the design, sourcing, production, and delivery so you have one team and one plan.',
} as const;

export function getPrintService(slug: string): PrintService | undefined {
  return printServices.find((service) => service.slug === slug);
}

export const printServiceLinks = printServices.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));

export const industryPrintLinks: Record<string, [string, string]> = {
  'home-services': ['screen-printing', 'custom-apparel'],
  'professional-services': ['custom-apparel', 'promotional-products'],
  'restaurants-hospitality': ['screen-printing', 'custom-apparel'],
  'medical-wellness': ['custom-apparel', 'promotional-products'],
  'real-estate': ['promotional-products', 'custom-apparel'],
};
