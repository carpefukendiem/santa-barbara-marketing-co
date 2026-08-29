export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint: `${number}% ${number}%`;
  needsHighRes: boolean;
};

export const photos = {
  hero: {
    src: '/images/photos/hero-santa-barbara.webp',
    alt: 'Santa Barbara coastline at golden hour, with palm trees, red-tile roofs, and the Pacific beyond.',
    width: 743,
    height: 314,
    focalPoint: '60% 50%',
    needsHighRes: true,
  },
  localStreet: {
    src: '/images/photos/local-street-santa-barbara.webp',
    alt: 'A Santa Barbara street lined with palms, looking toward the mountains.',
    width: 536,
    height: 208,
    focalPoint: '50% 45%',
    needsHighRes: true,
  },
  communitySantaBarbara: {
    src: '/images/photos/community-santa-barbara.webp',
    alt: 'Downtown Santa Barbara, looking toward the waterfront.',
    width: 227,
    height: 98,
    focalPoint: '50% 50%',
    needsHighRes: true,
  },
  communityGoleta: {
    src: '/images/photos/community-goleta.webp',
    alt: 'Goleta streetscape with palms and local storefronts.',
    width: 233,
    height: 98,
    focalPoint: '50% 50%',
    needsHighRes: true,
  },
  communityMontecito: {
    src: '/images/photos/community-montecito.webp',
    alt: 'Montecito village street with mountain backdrop.',
    width: 227,
    height: 98,
    focalPoint: '50% 50%',
    needsHighRes: true,
  },
  communityCarpinteria: {
    src: '/images/photos/community-carpinteria.webp',
    alt: 'Carpinteria downtown along Linden Avenue.',
    width: 233,
    height: 98,
    focalPoint: '50% 50%',
    needsHighRes: true,
  },
} as const satisfies Record<string, SiteImage>;

export const decor = {
  ctaWave: {
    src: '/images/decor/cta-wave-pattern.webp',
    alt: '',
    width: 729,
    height: 72,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
  palmFrondLeft: {
    src: '/images/decor/decor-palm-frond-left.webp',
    alt: '',
    width: 136,
    height: 117,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
  palmFrondCenter: {
    src: '/images/decor/decor-palm-frond-center.webp',
    alt: '',
    width: 144,
    height: 115,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
  palmTree: {
    src: '/images/decor/decor-palm-tree.webp',
    alt: '',
    width: 172,
    height: 141,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
} as const satisfies Record<string, SiteImage>;

export const brand = {
  logo: {
    src: '/images/brand/sbmc-logo.webp',
    alt: 'Santa Barbara Marketing Co. logo — a circular seal with the Santa Barbara Mission, palms, and a cresting wave.',
    width: 1254,
    height: 1254,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
  ogDefault: {
    src: '/images/brand/og-default.png',
    alt: 'Santa Barbara Marketing Co.',
    width: 1200,
    height: 630,
    focalPoint: '50% 50%',
    needsHighRes: false,
  },
} as const satisfies Record<string, SiteImage>;
