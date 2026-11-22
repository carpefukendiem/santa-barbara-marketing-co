/** Shared props for above-the-fold hero photos (LCP). */
export const HERO_IMAGE_QUALITY = 75 as const;

/**
 * Mobile-first sizes: bias phones to a 640w candidate (covers ~390 CSS px at 1.5–2x)
 * so LCP does not pull 828/1080 unnecessarily. Desk still capped.
 */
export const HERO_IMAGE_SIZES =
  '(max-width: 640px) 640px, (max-width: 1099px) 100vw, 600px' as const;

export const PAGE_HERO_IMAGE_SIZES =
  '(max-width: 1024px) 100vw, 42vw' as const;

export const PRICING_HERO_IMAGE_SIZES =
  '(max-width: 1099px) 100vw, 46vw' as const;
