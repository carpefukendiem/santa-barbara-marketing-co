#!/usr/bin/env node
/**
 * One-time asset preparation.
 *
 * - Copies photography to public/images/photos/
 * - Strips near-white / cream backgrounds from logo + decorative overlays
 *   and feathers the edge by 1px. The logo is also circular-masked because
 *   it is a circular seal sitting on #FBF8F2 (B channel 242, below the
 *   spec's 245 threshold).
 * - Writes favicon.ico, app/icon.png, app/apple-icon.png, og-default.png
 *
 * Run: npm run prepare-assets
 */
import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const RAW = path.join(ROOT, 'public', 'images', 'raw');
const PHOTOS = path.join(ROOT, 'public', 'images', 'photos');
const DECOR = path.join(ROOT, 'public', 'images', 'decor');
const BRAND = path.join(ROOT, 'public', 'images', 'brand');
const APP = path.join(ROOT, 'app');
const PUBLIC = path.join(ROOT, 'public');

const WHITE_THRESHOLD = 245;
const CREAM = { r: 251, g: 248, b: 242 };
const CREAM_DISTANCE = 18;

const PHOTOS_TO_COPY = [
  'hero-santa-barbara.webp',
  'local-street-santa-barbara.webp',
  'community-santa-barbara.webp',
  'community-goleta.webp',
  'community-montecito.webp',
  'community-carpinteria.webp',
];

const DECOR_TO_STRIP = [
  'cta-wave-pattern.webp',
  'decor-palm-frond-left.webp',
  'decor-palm-frond-center.webp',
  'decor-palm-tree.webp',
];

function isBackgroundPixel(r, g, b) {
  if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
    return true;
  }
  const dist = Math.hypot(r - CREAM.r, g - CREAM.g, b - CREAM.b);
  return dist < CREAM_DISTANCE && Math.min(r, g, b) >= 220;
}

async function stripNearWhite(inputPath, outputPath, options = {}) {
  const { circularMask = false } = options;
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const width = info.width;
  const height = info.height;
  const pixels = new Uint8Array(data);
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) / 2 - 1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      if (circularMask) {
        const d = Math.hypot(x - cx, y - cy);
        if (d > radius + 1) {
          pixels[i + 3] = 0;
          continue;
        }
        if (d > radius) {
          pixels[i + 3] = Math.round(255 * (1 - (d - radius)));
        }
        // Keep interior cream — it is part of the seal, not a matte.
        continue;
      }
      if (isBackgroundPixel(pixels[i], pixels[i + 1], pixels[i + 2])) {
        pixels[i + 3] = 0;
      }
    }
  }

  const feathered = new Uint8Array(pixels);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (pixels[idx + 3] === 0) continue;
      let hasTransparentNeighbor = false;
      for (let dy = -1; dy <= 1 && !hasTransparentNeighbor; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
          const nidx = (ny * width + nx) * channels;
          if (pixels[nidx + 3] === 0) hasTransparentNeighbor = true;
        }
      }
      if (hasTransparentNeighbor) {
        feathered[idx + 3] = Math.min(pixels[idx + 3], 128);
      }
    }
  }

  await sharp(feathered, {
    raw: { width, height, channels },
  })
    .webp({ lossless: true })
    .toFile(outputPath);
}

function pngToIco(pngBuffer, width, height) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);
  entry.writeUInt8(height >= 256 ? 0 : height, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);

  return Buffer.concat([header, entry, pngBuffer]);
}

async function generateOgDefault(logoPath) {
  const width = 1200;
  const height = 630;
  const logoSize = 280;

  const logoPng = await sharp(logoPath)
    .resize(logoSize, logoSize)
    .png()
    .toBuffer();

  const svg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#052136"/>
      <text x="640" y="290" font-family="Georgia, serif" font-size="42" fill="#F8F4ED">Santa Barbara</text>
      <text x="640" y="348" font-family="Georgia, serif" font-size="42" fill="#F8F4ED">Marketing Co.</text>
      <text x="640" y="400" font-family="Georgia, serif" font-size="22" fill="#BFD7D7">Local Businesses. Lasting Growth.</text>
    </svg>
  `);

  await sharp(svg)
    .composite([{ input: logoPng, left: 280, top: Math.round((height - logoSize) / 2) }])
    .png()
    .toFile(path.join(BRAND, 'og-default.png'));
}

async function generateBrandDerivatives() {
  const logoRaw = path.join(RAW, 'sbmc-logo.webp');
  const logoOut = path.join(BRAND, 'sbmc-logo.webp');
  await stripNearWhite(logoRaw, logoOut, { circularMask: true });

  const faviconSource = path.join(RAW, 'sbmc-favicon-256.webp');
  const faviconOut = path.join(BRAND, 'sbmc-favicon.webp');
  await stripNearWhite(faviconSource, faviconOut, { circularMask: true });

  const png32 = await sharp(faviconOut).resize(32, 32).png().toBuffer();
  await sharp(png32).toFile(path.join(PUBLIC, 'favicon-32.png'));
  await writeFile(path.join(PUBLIC, 'favicon.ico'), pngToIco(png32, 32, 32));

  await sharp(faviconOut)
    .resize(512, 512)
    .png()
    .toFile(path.join(APP, 'icon.png'));

  await sharp(faviconOut)
    .resize(180, 180)
    .png()
    .toFile(path.join(APP, 'apple-icon.png'));

  await sharp(logoOut)
    .png()
    .toFile(path.join(BRAND, 'sbmc-logo.png'));

  await generateOgDefault(logoOut);
}

async function main() {
  await mkdir(PHOTOS, { recursive: true });
  await mkdir(DECOR, { recursive: true });
  await mkdir(BRAND, { recursive: true });
  await mkdir(APP, { recursive: true });
  await mkdir(PUBLIC, { recursive: true });

  for (const file of PHOTOS_TO_COPY) {
    await copyFile(path.join(RAW, file), path.join(PHOTOS, file));
    console.log('copied photo', file);
  }

  for (const file of DECOR_TO_STRIP) {
    await stripNearWhite(path.join(RAW, file), path.join(DECOR, file));
    console.log('stripped decor', file);
  }

  await generateBrandDerivatives();
  console.log('brand derivatives written');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
