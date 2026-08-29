# Santa Barbara Marketing Co.

Production website for [santabarbaramarketingco.com](https://santabarbaramarketingco.com).

## Asset pipeline

Brand photography and decorative overlays are prepared from the supplied WebP files:

```bash
npm run prepare-assets
```

That script copies photos, strips cream/white mattes from decorative overlays, circular-masks the logo, and writes favicons plus the default Open Graph image. See `docs/ASSET-REPLACEMENT.md` for photography that still needs high-resolution originals.
