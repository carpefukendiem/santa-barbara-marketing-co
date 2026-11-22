import { SITE_URL } from '@/lib/siteUrl'

/**
 * Canonical NAP for visible copy and JSON-LD.
 * Service-area business: city/region only (no street address), matching the
 * hidden-address Google Business Profile.
 */
export const organizationSameAs = [
  'https://www.linkedin.com/company/sbmcio/',
  'https://www.youtube.com/@sbmcio',
  'https://www.pinterest.com/sbmcio/',
  'https://bsky.app/profile/sbmcio.bsky.social',
  'https://www.facebook.com/people/Santa-Barbara-Marketing-Co/61596529110070/',
] as const

export const founderSameAs = [
  'https://www.linkedin.com/in/rubenruiz/',
] as const

export const site = {
  name: 'Santa Barbara Marketing Co',
  /** NAP display name (same spelling as GBP). */
  napName: 'Santa Barbara Marketing Co',
  shortName: 'SBMC',
  alternateNames: ['SBMC', 'Ranking SB'] as const,
  url: SITE_URL,
  tagline: 'Local Businesses. Lasting Growth.',
  description:
    'Marketing agency based in Santa Barbara, serving all of Santa Barbara County. Websites live in 30 days, local SEO, Google Business Profile, ads and a full CRM for local businesses. English and Spanish.',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@sbmc.io',
  phone:
    process.env.NEXT_PUBLIC_PHONE ??
    process.env.NEXT_PUBLIC_CONTACT_PHONE ??
    '+18053077600',
  address: {
    addressLocality: 'Santa Barbara',
    addressRegion: 'CA',
    postalCode: '93101',
    addressCountry: 'US',
  },
  /**
   * Santa Barbara County places served. Used in schema areaServed and copy.
   * Includes incorporated cities and named communities (no separate thin pages
   * for every place).
   */
  areaServed: [
    { type: 'AdministrativeArea' as const, name: 'Santa Barbara County, CA' },
    { type: 'City' as const, name: 'Santa Barbara, CA' },
    { type: 'City' as const, name: 'Goleta, CA' },
    { type: 'Place' as const, name: 'Montecito, CA' },
    { type: 'City' as const, name: 'Carpinteria, CA' },
    { type: 'Place' as const, name: 'Summerland, CA' },
    { type: 'Place' as const, name: 'Isla Vista, CA' },
    { type: 'Place' as const, name: 'Hope Ranch, CA' },
    { type: 'City' as const, name: 'Santa Maria, CA' },
    { type: 'City' as const, name: 'Lompoc, CA' },
    { type: 'Place' as const, name: 'Orcutt, CA' },
    { type: 'City' as const, name: 'Guadalupe, CA' },
    { type: 'City' as const, name: 'Buellton, CA' },
    { type: 'City' as const, name: 'Solvang, CA' },
    { type: 'Place' as const, name: 'Santa Ynez, CA' },
    { type: 'Place' as const, name: 'Los Olivos, CA' },
    { type: 'Place' as const, name: 'Ballard, CA' },
    { type: 'Place' as const, name: 'Los Alamos, CA' },
    { type: 'Place' as const, name: 'New Cuyama, CA' },
  ],
  /**
   * Public social profiles for Organization sameAs and optional footer links.
   * Do not add Instagram, TikTok, X, Yelp, or Google Business Profile here.
   */
  social: {
    linkedin: organizationSameAs[0],
    youtube: organizationSameAs[1],
    pinterest: organizationSameAs[2],
    bluesky: organizationSameAs[3],
    facebook: organizationSameAs[4],
  },
  founder: {
    name: 'Ruben Ruiz',
    jobTitle: 'Founder',
    description:
      'Founder of Santa Barbara Marketing Co. Has marketed local businesses since 2007.',
    sameAs: founderSameAs,
  },
  founded: '2026',
} as const;

export type Site = typeof site;

export function siteCityLine(): string {
  const { addressLocality, addressRegion, postalCode } = site.address;
  return `${addressLocality}, ${addressRegion} ${postalCode}`;
}

export function organizationSameAsLinks(): string[] {
  return [...organizationSameAs]
}

export function founderSameAsLinks(): string[] {
  return [...founderSameAs]
}

/** Ordered footer/social link labels from site.social. */
export function siteSocialLinks(): Array<{ label: string; href: string }> {
  return [
    { label: 'LinkedIn', href: site.social.linkedin },
    { label: 'YouTube', href: site.social.youtube },
    { label: 'Pinterest', href: site.social.pinterest },
    { label: 'Bluesky', href: site.social.bluesky },
    { label: 'Facebook', href: site.social.facebook },
  ]
}
