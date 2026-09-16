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
    alt: 'Santa Barbara at sunset from the hills, with red-tile roofs, palms, the harbor, and the Channel Islands on the horizon.',
    width: 1536,
    height: 1024,
    focalPoint: '72% 42%',
    needsHighRes: false,
  },
  localStreet: {
    src: '/images/photos/local-street-santa-barbara.webp',
    alt: 'A Santa Barbara street of white Spanish-colonial houses, palms, and the Santa Ynez Mountains.',
    width: 1122,
    height: 1402,
    focalPoint: '50% 42%',
    needsHighRes: false,
  },
  communitySantaBarbara: {
    src: '/images/photos/community-santa-barbara.webp',
    alt: 'Santa Barbara County Courthouse, with its clock tower, palms, and lawn.',
    width: 1086,
    height: 1448,
    focalPoint: '55% 38%',
    needsHighRes: false,
  },
  communityGoleta: {
    src: '/images/photos/community-goleta.webp',
    alt: 'A Goleta bluff trail at sunset above the Pacific, looking toward the Santa Barbara coastline.',
    width: 1086,
    height: 1448,
    focalPoint: '50% 45%',
    needsHighRes: false,
  },
  communityMontecito: {
    src: '/images/photos/community-montecito.webp',
    alt: 'An oak-lined lane in Montecito with a stone wall, red-tile roof, and mountains beyond.',
    width: 1086,
    height: 1448,
    focalPoint: '62% 48%',
    needsHighRes: false,
  },
  communityCarpinteria: {
    src: '/images/photos/community-carpinteria.webp',
    alt: 'Carpinteria beach at golden hour, with driftwood on the sand, palms, and the mountains.',
    width: 1086,
    height: 1448,
    focalPoint: '50% 48%',
    needsHighRes: false,
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
