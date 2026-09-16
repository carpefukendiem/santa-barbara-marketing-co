# Asset replacement guide

Photography now comes from the high-resolution sources in `public/images/bg/`. `next/image` serves WebP/AVIF derivatives from `public/images/photos/`.

## How to replace

1. Drop the new original into `public/images/bg/` using the same naming prefix (`Hero`, `Street photo`, `Santa Barbara card`, and so on).
2. Run `npm run prepare-assets` to rewrite the WebP files in `public/images/photos/`.
3. Update width, height, alt, and focal point in `data/images.ts` if the crop changed.

Do not set `quality` above 80.

## Current files

| Use | Aspect | Source prefix | Served path | Native size |
| --- | --- | --- | --- | --- |
| Hero | 3:2 landscape | `Hero` | `public/images/photos/hero-santa-barbara.webp` | 1536×1024 |
| Local street | 4:5 portrait | `Street photo` | `public/images/photos/local-street-santa-barbara.webp` | 1122×1402 |
| Community — Santa Barbara | 3:4 portrait | `Santa Barbara card` | `public/images/photos/community-santa-barbara.webp` | 1086×1448 |
| Community — Goleta | 3:4 portrait | `Goleta card` | `public/images/photos/community-goleta.webp` | 1086×1448 |
| Community — Montecito | 3:4 portrait | `Montecito card` | `public/images/photos/community-montecito.webp` | 1086×1448 |
| Community — Carpinteria | 3:4 portrait | `Carpinteria card` | `public/images/photos/community-carpinteria.webp` | 1086×1448 |

## What not to replace

Brand icons were rebuilt as inline SVG in `components/icons/` and should not be swapped back to the 70×70 rasters.

Decorative palm overlays and the CTA wave were alpha-stripped into `public/images/decor/`. Replace those only if you have a higher-resolution original with a real alpha channel.

The logo at `public/images/brand/sbmc-logo.webp` is already 1254×1254. That resolution is adequate.
