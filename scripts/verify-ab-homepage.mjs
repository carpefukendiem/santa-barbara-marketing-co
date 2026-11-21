import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';

const BASE = process.env.AB_BASE_URL ?? 'http://localhost:3010';
const OUT = '/opt/cursor/artifacts';

async function main() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const results = [];

  const humanUA =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

  async function shot(name, width, height, url, extra = {}) {
    const context = await browser.newContext({
      viewport: { width, height },
      userAgent: extra.userAgent ?? humanUA,
    });
    const page = await context.newPage();
    const response = await page.goto(url, { waitUntil: 'networkidle' });
    const cookies = await context.cookies();
    const variantCookie = cookies.find((c) => c.name === 'sbmc_hp_variant');
    const eyebrow = await page
      .locator('section[aria-labelledby="hero-title"] p')
      .first()
      .textContent();
    const h1 = await page.locator('#hero-title').textContent();
    const headerCta = await page.locator('a.header-book').first().textContent().catch(() => null);
    results.push({
      name,
      status: response?.status(),
      eyebrow: eyebrow?.trim(),
      h1: h1?.replace(/\s+/g, ' ').trim().slice(0, 140),
      headerCta: headerCta?.replace(/\s+/g, ' ').trim() ?? null,
      variantCookie: variantCookie?.value ?? null,
      url: page.url(),
    });
    if (extra.screenshot) {
      const hero = page.locator('section[aria-labelledby="hero-title"]');
      await hero.screenshot({ path: `${OUT}/${extra.screenshot}` });
    }
    await context.close();
    return { variantCookie, eyebrow, h1 };
  }

  // Variant A / B screenshots
  await shot('a-390', 390, 844, `${BASE}/?variant=a`, { screenshot: 'hero-a-390.png' });
  await shot('b-390', 390, 844, `${BASE}/?variant=b`, { screenshot: 'hero-b-390.png' });
  await shot('a-1440', 1440, 900, `${BASE}/?variant=a`, { screenshot: 'hero-a-1440.png' });
  await shot('b-1440', 1440, 900, `${BASE}/?variant=b`, { screenshot: 'hero-b-1440.png' });

  // Sticky cookie
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      userAgent: humanUA,
    });
    const page = await context.newPage();
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    const first = (await context.cookies()).find((c) => c.name === 'sbmc_hp_variant')?.value;
    const h1First = (await page.locator('#hero-title').textContent())?.slice(0, 80);
    await page.reload({ waitUntil: 'networkidle' });
    const second = (await context.cookies()).find((c) => c.name === 'sbmc_hp_variant')?.value;
    const h1Second = (await page.locator('#hero-title').textContent())?.slice(0, 80);
    results.push({
      name: 'sticky',
      first,
      second,
      same: first === second && Boolean(first),
      h1First,
      h1Second,
      h1Same: h1First === h1Second,
    });
    await context.close();
  }

  // Googlebot gets A, no cookie
  {
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      userAgent:
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    });
    const page = await context.newPage();
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
    const cookies = await context.cookies();
    const variantCookie = cookies.find((c) => c.name === 'sbmc_hp_variant');
    const eyebrow = await page
      .locator('section[aria-labelledby="hero-title"] p')
      .first()
      .textContent();
    const h1 = await page.locator('#hero-title').textContent();
    results.push({
      name: 'googlebot',
      variantCookie: variantCookie?.value ?? null,
      eyebrow: eyebrow?.trim(),
      h1: h1?.replace(/\s+/g, ' ').trim().slice(0, 100),
    });
    await context.close();
  }

  // Internal route redirect + noindex headers on direct hit before redirect
  {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const response = await page.goto(`${BASE}/hp/a`, { waitUntil: 'networkidle' });
    results.push({
      name: 'internal-redirect',
      finalUrl: page.url(),
      status: response?.status(),
    });
    await context.close();
  }

  // Header CTA: desktop button at 1440; mobile menu CTA at 1024 (book is hidden until 1100px)
  {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      userAgent: humanUA,
    });
    const page = await context.newPage();
    await page.goto(`${BASE}/?variant=a`, { waitUntil: 'networkidle' });
    const text = await page.locator('a.header-book').first().evaluate((el) => {
      const styles = getComputedStyle(el);
      return {
        whiteSpace: styles.whiteSpace,
        text: el.textContent?.replace(/\s+/g, ' ').trim(),
        clientHeight: el.clientHeight,
        scrollHeight: el.scrollHeight,
      };
    });
    results.push({
      name: 'header-1440',
      ...text,
      singleLine: text.clientHeight === text.scrollHeight || text.whiteSpace === 'nowrap',
    });
    await context.close();
  }
  {
    const context = await browser.newContext({
      viewport: { width: 1024, height: 800 },
      userAgent: humanUA,
    });
    const page = await context.newPage();
    await page.goto(`${BASE}/?variant=a`, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: /open menu/i }).click();
    const cta = page.locator('a[href="/book-a-call"]').filter({ hasText: 'Book a 20-Minute Call' }).first();
    const text = await cta.evaluate((el) => {
      const styles = getComputedStyle(el);
      return {
        whiteSpace: styles.whiteSpace,
        text: el.textContent?.replace(/\s+/g, ' ').trim(),
        clientHeight: el.clientHeight,
        scrollHeight: el.scrollHeight,
      };
    });
    results.push({
      name: 'header-1024-mobile-menu',
      ...text,
      singleLine: text.clientHeight === text.scrollHeight,
    });
    await context.close();
  }

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
