export type NavLink = {
  label: string;
  href: string;
};

export type MegaColumn = {
  id: 'found' | 'convert' | 'systems';
  title: string;
  links: NavLink[];
};

export type ServiceNavItem = NavLink & {
  group: MegaColumn['id'];
};

export const megaColumns: MegaColumn[] = [
  {
    id: 'found',
    title: 'Get Found',
    links: [
      { label: 'Local SEO', href: '/services/local-seo' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Google Business Profile', href: '/services/google-business-profile' },
    ],
  },
  {
    id: 'convert',
    title: 'Convert & Grow',
    links: [
      { label: 'Web Design & Development', href: '/services/web-design' },
      { label: 'Conversion Optimization', href: '/services/conversion-optimization' },
      { label: 'Social Media', href: '/services/social-media' },
    ],
  },
  {
    id: 'systems',
    title: 'Systems',
    links: [
      { label: 'Marketing Automation', href: '/services/marketing-automation' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'Analytics & Reporting', href: '/services/analytics' },
      { label: 'Digital Marketing Strategy', href: '/services/strategy' },
    ],
  },
];

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/#community' },
  { label: 'Work', href: '/work' },
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
  { label: 'Free Growth Plan', href: '/free-growth-plan' },
  { label: 'Contact', href: '/contact' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Accessibility', href: '/accessibility' },
];

export const allServiceLinks: NavLink[] = megaColumns.flatMap(
  (column) => column.links,
);

export const primaryCta = {
  label: 'Get a Free Growth Plan',
  href: '/free-growth-plan',
} as const;
