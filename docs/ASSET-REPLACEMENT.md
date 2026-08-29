# Asset replacement guide

The photography shipped with this build is the supplied source, used so the site can launch. Several files are far below a 2x retina premium standard. Replacing them is a drop-in: same filename, same path, no code changes.

## How to replace

1. Export or license a high-resolution original at the **required** dimensions below (or larger, same aspect).
2. Convert to WebP, quality 75–80.
3. Overwrite the file at the prepared path.
4. Rebuild. `next/image` will pick up the new file. Dimensions in `data/images.ts` can be updated when the new file is in, then set `needsHighRes: false`.

Do not set `quality` above 80 on an upscaled source.

## Files that need high-res replacements

| Current file | Supplied | Required for 2x retina | Drop-in path |
| --- | --- | --- | --- |
| Hero | 743×314 | 2400×1000 | `public/images/photos/hero-santa-barbara.webp` |
| Local street | 536×208 | 1600×1200 | `public/images/photos/local-street-santa-barbara.webp` |
| Community — Santa Barbara | 227×98 | 1200×900 | `public/images/photos/community-santa-barbara.webp` |
| Community — Goleta | 233×98 | 1200×900 | `public/images/photos/community-goleta.webp` |
| Community — Montecito | 227×98 | 1200×900 | `public/images/photos/community-montecito.webp` |
| Community — Carpinteria | 233×98 | 1200×900 | `public/images/photos/community-carpinteria.webp` |

Until replacements land, every photo rendered above 1.5× native width gets a navy scrim, a 3% grain overlay, and a slight saturate/contrast filter so softness reads as atmosphere rather than a defect.

## What not to replace

Brand icons were rebuilt as inline SVG in `components/icons/` and should not be swapped back to the 70×70 rasters.

Decorative palm overlays and the CTA wave were alpha-stripped into `public/images/decor/`. Replace those only if you have a higher-resolution original with a real alpha channel.

The logo at `public/images/brand/sbmc-logo.webp` is already 1254×1254 with the cream background removed. That resolution is adequate.

## Regenerating derivatives

If you update files in `public/images/raw/`:

```bash
npm run prepare-assets
```

This recopies photos, re-strips decorative backgrounds, and regenerates favicons, `app/icon.png`, `app/apple-icon.png`, and `public/images/brand/og-default.png`.
