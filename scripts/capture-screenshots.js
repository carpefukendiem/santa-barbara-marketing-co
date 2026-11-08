// Capture before/after screenshots for homepage and /get-started at desktop and mobile widths
// Saves files under /opt/cursor/artifacts for PR attachment
const { chromium } = require('playwright');

async function capture(url, path, width, height) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Allow hydration/animations to stabilize
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(2500);
    await page.screenshot({ path, fullPage: false });
    console.log(`Saved ${path}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  const beforeHome = 'https://santa-barbara-marketing-co.vercel.app/';
  const beforeStart = 'https://santa-barbara-marketing-co.vercel.app/get-started';
  const afterHome = 'http://localhost:3000/';
  const afterStart = 'http://localhost:3000/get-started';
  const afterDeep = 'http://localhost:3000/resources/google-business-profile-optimization';

  const outDir = '/opt/cursor/artifacts';
  const shots = [
    { url: beforeHome, file: `${outDir}/home-before-desktop-1440x900.png`, w: 1440, h: 900 },
    { url: beforeHome, file: `${outDir}/home-before-mobile-390x844.png`, w: 390, h: 844 },
    { url: afterHome, file: `${outDir}/home-after-desktop-1440x900.png`, w: 1440, h: 900 },
    { url: afterHome, file: `${outDir}/home-after-mobile-390x844.png`, w: 390, h: 844 },
    { url: beforeStart, file: `${outDir}/get-started-before-desktop-1440x900.png`, w: 1440, h: 900 },
    { url: beforeStart, file: `${outDir}/get-started-before-mobile-390x844.png`, w: 390, h: 844 },
    { url: afterStart, file: `${outDir}/get-started-after-desktop-1440x900.png`, w: 1440, h: 900 },
    { url: afterStart, file: `${outDir}/get-started-after-mobile-390x844.png`, w: 390, h: 844 },
    { url: afterDeep, file: `${outDir}/resources-after-desktop-1440x900.png`, w: 1440, h: 900 },
    { url: afterDeep, file: `${outDir}/resources-after-mobile-390x844.png`, w: 390, h: 844 },
  ];

  for (const s of shots) {
    try {
      await capture(s.url, s.file, s.w, s.h);
    } catch (err) {
      console.error(`Failed to capture ${s.file}:`, err?.message || err);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

