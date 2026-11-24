export type NavLink = {
  label: string;
  href: string;
};

export type MegaColumn = {
  id: 'digital' | 'print';
  title: string;
  links: NavLink[];
};

export type MegaFeatureIcon =
  | 'globe'
  | 'phone'
  | 'printer'
  | 'inbox'
  | 'ads'
  | 'map'
  | 'star'
  | 'share'
  | 'search'
  | 'waves'
  | 'building'
  | 'trees'
  | 'anchor';

export type MegaFeature = {
  label: string;
  href: string;
  blurb: string;
  icon: MegaFeatureIcon;
};

export type ServiceNavItem = NavLink & {
  group: MegaColumn['id'];
};

export const megaColumns: MegaColumn[] = [
  {
    id: 'digital',
    title: 'Digital Marketing',
    links: [
      { label: 'Local SEO', href: '/services/local-seo' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Local Service Ads', href: '/services/local-service-ads' },
      { label: 'Meta Ads', href: '/services/meta-ads' },
      { label: 'Google Business Profile', href: '/services/google-business-profile' },
      { label: 'Review Management', href: '/services/review-management' },
      { label: 'Web Design & Development', href: '/services/web-design' },
      { label: 'E-commerce Websites', href: '/services/ecommerce-websites' },
      { label: 'Website Maintenance', href: '/services/website-maintenance' },
      { label: 'Website Redesign', href: '/services/website-redesign' },
      { label: 'Conversion Optimization', href: '/services/conversion-optimization' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'Email & SMS Marketing', href: '/services/email-sms-marketing' },
      { label: 'Spanish-Language Marketing', href: '/services/spanish-language-marketing' },
      { label: 'Marketing Automation', href: '/services/marketing-automation' },
      { label: 'Missed Call Text-Back', href: '/services/missed-call-text-back' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'AI Receptionist', href: '/services/ai-receptionist' },
      { label: 'Analytics & Reporting', href: '/services/analytics' },
      { label: 'Digital Marketing Strategy', href: '/services/strategy' },
    ],
  },
  {
    id: 'print',
    title: 'Print & Apparel',
    links: [
      { label: 'Print & Apparel', href: '/services/print-and-apparel' },
      { label: 'Screen Printing', href: '/services/screen-printing' },
      { label: 'Custom Apparel & Uniforms', href: '/services/custom-apparel' },
      { label: 'Promotional Products', href: '/services/promotional-products' },
      { label: 'Team & Fan Stores', href: '/services/team-stores' },
    ],
  },
];

export const megaFeatures: MegaFeature[] = [
  {
    label: 'Web Design & Development',
    href: '/services/web-design',
    blurb: 'A site that can take the call on a phone.',
    icon: 'globe',
  },
  {
    label: 'Missed-call follow-up',
    href: '/services/missed-call-text-back',
    blurb: 'Text back when a call is missed.',
    icon: 'phone',
  },
  {
    label: 'Print & Apparel',
    href: '/services/print-and-apparel',
    blurb: 'Uniforms, print, and promo in the same plan.',
    icon: 'printer',
  },
  {
    label: 'Marketing Automation',
    href: '/services/marketing-automation',
    blurb: 'Forms, texts, and follow-up in one path.',
    icon: 'inbox',
  },
  {
    label: 'Google Ads',
    href: '/services/google-ads',
    blurb: 'Hire-intent search, tracked to the phone.',
    icon: 'ads',
  },
  {
    label: 'Local SEO',
    href: '/services/local-seo',
    blurb: 'Show up in Maps when locals are ready to buy.',
    icon: 'map',
  },
  {
    label: 'Google Business Profile',
    href: '/services/google-business-profile',
    blurb: 'Reviews, photos, and a listing that matches the door.',
    icon: 'star',
  },
  {
    label: 'Social Media',
    href: '/services/social-media',
    blurb: 'A cadence you can keep, tied to real work.',
    icon: 'share',
  },
  {
    label: 'SEO',
    href: '/services/seo',
    blurb: 'Technical health, architecture, and content pages.',
    icon: 'search',
  },
];

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/#community' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const locationLinks: NavLink[] = [
  { label: 'All service areas', href: '/service-areas' },
  { label: 'Santa Barbara', href: '/santa-barbara-digital-marketing' },
  { label: 'Santa Barbara SEO', href: '/santa-barbara-seo' },
  { label: 'Santa Barbara Web Design', href: '/santa-barbara-web-design' },
  { label: 'Santa Barbara Google Ads', href: '/santa-barbara-google-ads' },
  { label: 'Santa Barbara Social Media', href: '/santa-barbara-social-media' },
  { label: 'Goleta', href: '/goleta-digital-marketing' },
  { label: 'Goleta SEO', href: '/goleta-seo' },
  { label: 'Goleta Web Design', href: '/goleta-web-design' },
  { label: 'Goleta Google Ads', href: '/goleta-google-ads' },
  { label: 'Montecito', href: '/montecito-digital-marketing' },
  { label: 'Montecito SEO', href: '/montecito-seo' },
  { label: 'Montecito Web Design', href: '/montecito-web-design' },
  { label: 'Carpinteria', href: '/carpinteria-digital-marketing' },
  { label: 'Carpinteria SEO', href: '/carpinteria-seo' },
  { label: 'Santa Maria', href: '/santa-maria-digital-marketing' },
  { label: 'Santa Maria SEO', href: '/santa-maria-seo' },
  { label: 'Santa Maria Web Design', href: '/santa-maria-web-design' },
  { label: 'Lompoc', href: '/lompoc-digital-marketing' },
  { label: 'Santa Ynez Valley', href: '/santa-ynez-valley-digital-marketing' },
];

export const industryLinks: NavLink[] = [
  { label: 'All industries', href: '/industries' },
  { label: 'Home Services', href: '/industries/home-services' },
  { label: 'HVAC', href: '/industries/hvac' },
  { label: 'Plumbing', href: '/industries/plumbing' },
  { label: 'Electricians', href: '/industries/electricians' },
  { label: 'Roofing', href: '/industries/roofing' },
  { label: 'Contractors', href: '/industries/contractors' },
  { label: 'Landscaping', href: '/industries/landscaping' },
  { label: 'Cleaning Services', href: '/industries/cleaning-services' },
  { label: 'Pest Control', href: '/industries/pest-control' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'Lawyers', href: '/industries/lawyers' },
  { label: 'Restaurants & Hospitality', href: '/industries/restaurants-hospitality' },
  { label: 'Wineries', href: '/industries/wineries' },
  { label: 'Medical & Wellness', href: '/industries/medical-wellness' },
  { label: 'Dentists', href: '/industries/dentists' },
  { label: 'Salons', href: '/industries/salons' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Ecommerce', href: '/industries/ecommerce' },
  { label: 'Martial Arts', href: '/industries/martial-arts' },
];

export const resourceLinks: NavLink[] = [
  { label: 'All resources', href: '/resources' },
  { label: 'Local SEO in Santa Barbara', href: '/resources/local-seo-santa-barbara' },
  {
    label: 'Google Business Profile checklist',
    href: '/resources/google-business-profile-optimization',
  },
  {
    label: 'How to get more Google reviews',
    href: '/resources/how-to-get-more-google-reviews',
  },
  {
    label: 'How to rank in Google Maps',
    href: '/resources/how-to-rank-in-google-maps',
  },
  {
    label: 'What SEO costs in Santa Barbara',
    href: '/resources/how-much-does-seo-cost-santa-barbara',
  },
  {
    label: 'Google Ads cost in Santa Barbara',
    href: '/resources/google-ads-cost-santa-barbara',
  },
  {
    label: 'Marketing agency cost in Santa Barbara',
    href: '/resources/marketing-agency-cost-santa-barbara',
  },
  {
    label: 'Website cost in Santa Barbara',
    href: '/resources/web-design-cost-santa-barbara',
  },
  {
    label: 'Google Ads for local business',
    href: '/resources/google-ads-for-local-business',
  },
  {
    label: 'AI search visibility',
    href: '/resources/ai-search-visibility-local-business',
  },
];

export const locationFeatures: MegaFeature[] = [
  {
    label: 'Santa Barbara',
    href: '/santa-barbara-digital-marketing',
    blurb: 'Residents and visitors, two search jobs.',
    icon: 'waves',
  },
  {
    label: 'Goleta',
    href: '/goleta-digital-marketing',
    blurb: 'West-side pins, UCSB-adjacent demand.',
    icon: 'building',
  },
  {
    label: 'Montecito',
    href: '/montecito-digital-marketing',
    blurb: 'Low volume, high consideration.',
    icon: 'trees',
  },
  {
    label: 'Carpinteria',
    href: '/carpinteria-digital-marketing',
    blurb: 'Linden Avenue and beach-day intent.',
    icon: 'anchor',
  },
  {
    label: 'Santa Maria',
    href: '/santa-maria-digital-marketing',
    blurb: 'Broadway, Main, Orcutt, and North County.',
    icon: 'building',
  },
  {
    label: 'Santa Ynez Valley',
    href: '/santa-ynez-valley-digital-marketing',
    blurb: 'Solvang, Buellton, tasting rooms, Highway 246.',
    icon: 'trees',
  },
];

export const santaBarbaraServiceLinks: NavLink[] = [
  { label: 'Santa Barbara SEO', href: '/santa-barbara-seo' },
  { label: 'Santa Barbara Web Design', href: '/santa-barbara-web-design' },
  { label: 'Santa Barbara Google Ads', href: '/santa-barbara-google-ads' },
  { label: 'Santa Barbara Social Media', href: '/santa-barbara-social-media' },
];

export const companyLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Ruben Ruiz', href: '/about/ruben-ruiz' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const getStartedLinks: NavLink[] = [
  { label: 'Book a 20-Minute Call', href: '/book-a-call' },
  { label: 'Local Lead Plan', href: '/local-lead-plan' },
  { label: 'Get Started', href: '/get-started' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

export const digitalServiceLinks: NavLink[] =
  megaColumns.find((column) => column.id === 'digital')?.links ?? [];

export const printServiceLinks: NavLink[] =
  megaColumns.find((column) => column.id === 'print')?.links ?? [];

export const allServiceLinks: NavLink[] = megaColumns.flatMap(
  (column) => column.links,
);

export const primaryCta = {
  label: 'Book a 20-Minute Call',
  href: '/book-a-call',
} as const;

export const checkoutCta = {
  label: 'Get Started',
  href: '/get-started',
} as const;
