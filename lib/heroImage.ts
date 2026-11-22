/** Shared props for above-the-fold hero photos (LCP). */
export const HERO_IMAGE_QUALITY = 75 as const;

/** Mobile-first sizes: pull a narrow width on phones, full-bleed up to tablet, capped on desk. */
export const HERO_IMAGE_SIZES =
  '(max-width: 640px) 100vw, (max-width: 1099px) 100vw, 600px' as const;

export const PAGE_HERO_IMAGE_SIZES =
  '(max-width: 1024px) 100vw, 42vw' as const;

export const PRICING_HERO_IMAGE_SIZES =
  '(max-width: 1099px) 100vw, 46vw' as const;
