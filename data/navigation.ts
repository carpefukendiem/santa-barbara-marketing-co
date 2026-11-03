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
      { label: 'Google Business Profile', href: '/services/google-business-profile' },
      { label: 'Web Design & Development', href: '/services/web-design' },
      { label: 'Conversion Optimization', href: '/services/conversion-optimization' },
      { label: 'Social Media', href: '/services/social-media' },
      { label: 'Marketing Automation', href: '/services/marketing-automation' },
      { label: 'AI Automation', href: '/services/ai-automation' },
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
    href: '/services/ai-automation',
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
    blurb: 'Pages that match how people search in the 805.',
    icon: 'search',
  },
];

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/#community' },
  { label: 'Work', href: '/work' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const locationLinks: NavLink[] = [
  { label: 'Santa Barbara', href: '/santa-barbara-digital-marketing' },
  { label: 'Goleta', href: '/goleta-digital-marketing' },
  { label: 'Montecito', href: '/montecito-digital-marketing' },
  { label: 'Carpinteria', href: '/carpinteria-digital-marketing' },
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
];

export const santaBarbaraServiceLinks: NavLink[] = [
  { label: 'Santa Barbara SEO', href: '/santa-barbara-seo' },
  { label: 'Santa Barbara Web Design', href: '/santa-barbara-web-design' },
  { label: 'Santa Barbara Google Ads', href: '/santa-barbara-google-ads' },
];

export const companyLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const getStartedLinks: NavLink[] = [
  { label: 'Book a Free Call', href: '/book-a-call' },
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
  label: 'Book a Free Call',
  href: '/book-a-call',
} as const;
