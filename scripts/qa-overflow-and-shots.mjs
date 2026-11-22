/**
 * Overflow checks at key widths + after screenshots for report.
 */
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const baseUrl = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const outDir = '/opt/cursor/artifacts';
fs.mkdirSync(outDir, { recursive: true });

const widths = [360, 390, 768, 1440];
const pages = [
  '/',
  '/pricing',
  '/services',
  '/services/local-seo',
  '/service-areas',
  '/goleta-digital-marketing',
  '/work',
  '/resources',
  '/about',
  '/contact',
  '/book-a-call',
];

const heroShots = [
  { path: '/', name: 'home' },
  { path: '/goleta-digital-marketing', name: 'city' },
  { path: '/pricing', name: 'pricing' },
];

const browser = await chromium.launch();
const overflow = [];

for (const width of widths) {
  const context = await browser.newContext({
    viewport: { width, height: width >= 768 ? 900 : 844 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  for (const route of pages) {
    await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(400);
    const result = await page.evaluate(() => {
      const doc = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(doc.scrollWidth, body.scrollWidth);
      const clientWidth = doc.clientWidth;
      const overflowing = [];
      for (const el of document.querySelectorAll('body *')) {
        if (!(el instanceof HTMLElement)) continue;
        if (el.scrollWidth > clientWidth + 1) {
          const rect = el.getBoundingClientRect();
          if (rect.width > clientWidth + 1) {
            overflowing.push({
              tag: el.tagName.toLowerCase(),
              className: (el.className?.toString?.() || '').slice(0, 80),
              scrollWidth: el.scrollWidth,
              clientWidth,
            });
          }
        }
      }
      return {
        scrollWidth,
        clientWidth,
        overflowX: scrollWidth > clientWidth + 1,
        samples: overflowing.slice(0, 8),
      };
    });
    overflow.push({ width, route, ...result });
    console.log(
      `${width} ${route}: overflow=${result.overflowX} scroll=${result.scrollWidth} client=${result.clientWidth}`,
    );
  }
  await context.close();
}

const shotContext = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});
const shotPage = await shotContext.newPage();
for (const hero of heroShots) {
  await shotPage.goto(`${baseUrl}${hero.path}`, {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });
  await shotPage.waitForLoadState('networkidle').catch(() => {});
  await shotPage.waitForTimeout(1000);
  const file = path.join(outDir, `after_${hero.name}_hero_390.png`);
  await shotPage.screenshot({ path: file, fullPage: false });
  console.log(`Saved ${file}`);
}
await shotContext.close();
await browser.close();

const report = {
  generatedAt: new Date().toISOString(),
  overflow,
  failing: overflow.filter((o) => o.overflowX),
};
fs.writeFileSync(
  path.join(outDir, 'overflow-audit.json'),
  JSON.stringify(report, null, 2),
);
console.log(`Overflow failures: ${report.failing.length}`);
if (report.failing.length) {
  process.exitCode = 1;
}
