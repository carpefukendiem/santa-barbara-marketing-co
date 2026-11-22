/**
 * Color-contrast + typography audit for SBMC.
 * Runs axe-core color-contrast at 390 and 1440, plus a small-type scan at 390.
 *
 * Usage: node scripts/audit-contrast.mjs [label] [baseUrl]
 * Writes JSON + markdown under /opt/cursor/artifacts/
 */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const require = createRequire(import.meta.url);
const axeSource = fs.readFileSync(require.resolve('axe-core'), 'utf8');

const label = process.argv[2] || 'before';
const baseUrl = (process.argv[3] || 'http://localhost:3000').replace(/\/$/, '');
const outDir = '/opt/cursor/artifacts';
fs.mkdirSync(outDir, { recursive: true });

const pages = [
  { path: '/', name: 'home' },
  { path: '/pricing', name: 'pricing' },
  { path: '/services', name: 'services' },
  { path: '/services/local-seo', name: 'service-slug' },
  { path: '/service-areas', name: 'service-areas' },
  { path: '/goleta-digital-marketing', name: 'city' },
  { path: '/work', name: 'work' },
  { path: '/resources', name: 'resources' },
  { path: '/resources/google-business-profile-optimization', name: 'resource-slug' },
  { path: '/about', name: 'about' },
  { path: '/contact', name: 'contact' },
  { path: '/book-a-call', name: 'book-a-call' },
];

const viewports = [
  { name: '390', width: 390, height: 844 },
  { name: '1440', width: 1440, height: 900 },
];

function uniqueKey(node) {
  return `${node.target?.join(' ') || ''}|${node.html?.slice(0, 120) || ''}`;
}

async function runAxe(page) {
  await page.evaluate(axeSource);
  return page.evaluate(async () => {
    // eslint-disable-next-line no-undef
    const results = await axe.run(document, {
      runOnly: { type: 'rule', values: ['color-contrast'] },
      resultTypes: ['violations'],
    });
    return results.violations;
  });
}

async function runSmallTypeScan(page) {
  return page.evaluate(() => {
    const issues = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    const seen = new Set();

    while (walker.nextNode()) {
      const el = walker.currentNode;
      if (!(el instanceof HTMLElement)) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const text = (el.innerText || '').trim();
      if (!text || text.length < 2) continue;
      // Prefer leaf-ish nodes: skip if every child also has the same text
      if ([...el.children].some((c) => (c.innerText || '').trim() === text)) continue;

      const fontSize = parseFloat(style.fontSize);
      const fontWeight = parseInt(style.fontWeight, 10) || 400;
      const lineHeight =
        style.lineHeight === 'normal' ? fontSize * 1.2 : parseFloat(style.lineHeight);
      const opacity = parseFloat(style.opacity);
      const color = style.color;
      const letterSpacing = style.letterSpacing;
      const textTransform = style.textTransform;
      const fontFamily = style.fontFamily;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;

      const flags = [];
      if (fontSize < 14) flags.push(`size=${fontSize.toFixed(1)}px<14`);
      if (fontWeight <= 300 && fontSize < 24) flags.push(`weight=${fontWeight}`);
      if (lineHeight / fontSize < 1.45 && fontSize >= 14 && fontSize < 22) {
        flags.push(`lh=${(lineHeight / fontSize).toFixed(2)}`);
      }
      if (opacity < 0.75) flags.push(`opacity=${opacity}`);
      if (/rgba?\(/.test(color)) {
        const m = color.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const parts = m[1].split(',').map((p) => p.trim());
          if (parts.length === 4 && parseFloat(parts[3]) < 0.75) {
            flags.push(`rgba-a=${parts[3]}`);
          }
        }
      }
      if (
        textTransform === 'uppercase' &&
        /mono|jetbrains/i.test(fontFamily) &&
        fontSize < 13
      ) {
        flags.push('tiny-mono-uppercase');
      }
      if (letterSpacing !== 'normal') {
        const ls = parseFloat(letterSpacing);
        if (!Number.isNaN(ls) && ls > fontSize * 0.18) {
          flags.push(`tracking=${letterSpacing}`);
        }
      }

      if (!flags.length) continue;
      const key = `${el.tagName}|${fontSize}|${color}|${text.slice(0, 40)}`;
      if (seen.has(key)) continue;
      seen.add(key);

      issues.push({
        selector: el.getAttribute('class')
          ? `${el.tagName.toLowerCase()}.${el.className.toString().split(/\s+/).slice(0, 3).join('.')}`
          : el.tagName.toLowerCase(),
        text: text.slice(0, 80),
        fontSize,
        fontWeight,
        lineHeight,
        opacity,
        color,
        letterSpacing,
        flags,
      });
    }
    return issues;
  });
}

async function sampleHeroContrast(page) {
  // Sample pixels behind hero text column via canvas from screenshot
  return page.evaluate(async () => {
    const candidates = [
      ...document.querySelectorAll(
        'section [class*="eyebrow"], section .text-eyebrow, nav[aria-label="Breadcrumb"], [data-hp-variant-hero] p, [data-hp-variant-hero] h1',
      ),
    ].slice(0, 12);

    const samples = [];
    for (const el of candidates) {
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2 || rect.top > window.innerHeight) continue;
      const style = getComputedStyle(el);
      samples.push({
        text: (el.innerText || '').trim().slice(0, 60),
        color: style.color,
        fontSize: parseFloat(style.fontSize),
        className: el.className?.toString?.().slice(0, 120) || '',
        x: Math.round(rect.left + rect.width / 2),
        y: Math.round(rect.top + rect.height / 2),
        box: {
          left: Math.round(rect.left),
          top: Math.round(rect.top),
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        },
      });
    }
    return samples;
  });
}

function parseRgb(color) {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(',').map((p) => parseFloat(p.trim()));
  if (parts.length < 3) return null;
  const a = parts.length === 4 ? parts[3] : 1;
  return { r: parts[0], g: parts[1], b: parts[2], a };
}

function relLuminance({ r, g, b }) {
  const toLin = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const R = toLin(r);
  const G = toLin(g);
  const B = toLin(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrast(fg, bg) {
  const L1 = relLuminance(fg);
  const L2 = relLuminance(bg);
  const hi = Math.max(L1, L2);
  const lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}

function blend(fg, bg) {
  const a = fg.a ?? 1;
  return {
    r: Math.round(fg.r * a + bg.r * (1 - a)),
    g: Math.round(fg.g * a + bg.g * (1 - a)),
    b: Math.round(fg.b * a + bg.b * (1 - a)),
  };
}

async function measureScreenshotContrast(page, samples, shotPath) {
  await page.screenshot({ path: shotPath, fullPage: false });
  // Use Chromium to read pixels via canvas in a blank page is hard; use sharp if available
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    return [];
  }

  const img = sharp(shotPath);
  const { width, height } = await img.metadata();
  const raw = await img.ensureAlpha().raw().toBuffer();

  const results = [];
  for (const sample of samples) {
    const points = [
      [sample.x, sample.y],
      [sample.box.left + 4, sample.box.top + 4],
      [sample.box.left + sample.box.width - 4, sample.box.top + sample.box.height - 4],
      [sample.box.left + Math.floor(sample.box.width / 2), sample.box.top + 2],
    ];
    const colors = [];
    for (const [x, y] of points) {
      const px = Math.max(0, Math.min(width - 1, Math.round(x)));
      const py = Math.max(0, Math.min(height - 1, Math.round(y)));
      const idx = (py * width + px) * 4;
      colors.push({ r: raw[idx], g: raw[idx + 1], b: raw[idx + 2] });
    }
    // Approximate "behind text" by sampling near the text edge; also report CSS color contrast vs darkest/lightest sample
    const fg = parseRgb(sample.color);
    if (!fg) continue;
    const ratios = colors.map((bg) => contrast(blend(fg, bg), bg));
    const minRatio = Math.min(...ratios);
    const maxRatio = Math.max(...ratios);
    const needed = sample.fontSize >= 18.66 || sample.fontSize >= 14 /* bold large approx */ ? 3 : 4.5;
    results.push({
      text: sample.text,
      className: sample.className,
      cssColor: sample.color,
      fontSize: sample.fontSize,
      minRatio: Number(minRatio.toFixed(2)),
      maxRatio: Number(maxRatio.toFixed(2)),
      needed,
      pass: minRatio >= needed,
      samples: colors.map((c) => `#${[c.r, c.g, c.b].map((n) => n.toString(16).padStart(2, '0')).join('')}`),
    });
  }
  return results;
}

const report = {
  label,
  baseUrl,
  generatedAt: new Date().toISOString(),
  pages: [],
  summary: { totalViolations: 0, byPage: {} },
};

const browser = await chromium.launch();

for (const pageInfo of pages) {
  const pageEntry = {
    path: pageInfo.path,
    name: pageInfo.name,
    viewports: {},
  };

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const url = `${baseUrl}${pageInfo.path}`;
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForLoadState('networkidle').catch(() => {});
      await page.waitForTimeout(800);

      const violations = await runAxe(page);
      const nodes = [];
      for (const v of violations) {
        for (const node of v.nodes || []) {
          const msg = node.any?.[0]?.message || node.failureSummary || '';
          const data = node.any?.[0]?.data || {};
          nodes.push({
            selector: node.target?.join(' ') || '',
            html: (node.html || '').slice(0, 200),
            message: msg,
            fg: data.fgColor,
            bg: data.bgColor,
            ratio: data.contrastRatio,
            expected: data.expectedContrastRatio,
            fontSize: data.fontSize,
            fontWeight: data.fontWeight,
            key: uniqueKey(node),
          });
        }
      }

      const smallType = vp.name === '390' ? await runSmallTypeScan(page) : [];
      let photoContrast = [];
      if (
        vp.name === '390' &&
        (pageInfo.name === 'home' || pageInfo.name === 'city' || pageInfo.name === 'pricing')
      ) {
        const samples = await sampleHeroContrast(page);
        const shot = path.join(
          outDir,
          `${label}-${pageInfo.name}-hero-${vp.name}.png`,
        );
        photoContrast = await measureScreenshotContrast(page, samples, shot);
      }

      pageEntry.viewports[vp.name] = {
        axeFailureCount: nodes.length,
        axeFailures: nodes,
        smallTypeCount: smallType.length,
        smallType: smallType.slice(0, 80),
        photoContrast,
      };
      report.summary.totalViolations += nodes.length;
    } catch (err) {
      pageEntry.viewports[vp.name] = {
        error: String(err?.message || err),
        axeFailureCount: 0,
        axeFailures: [],
      };
    } finally {
      await context.close();
    }
  }

  const count390 = pageEntry.viewports['390']?.axeFailureCount || 0;
  const count1440 = pageEntry.viewports['1440']?.axeFailureCount || 0;
  report.summary.byPage[pageInfo.path] = { '390': count390, '1440': count1440 };
  report.pages.push(pageEntry);
  console.log(
    `${label} ${pageInfo.path}: 390=${count390} 1440=${count1440}`,
  );
}

await browser.close();

const jsonPath = path.join(outDir, `contrast-audit-${label}.json`);
fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

const lines = [
  `# Contrast audit (${label})`,
  '',
  `Base: ${baseUrl}`,
  `Total axe color-contrast node failures: **${report.summary.totalViolations}**`,
  '',
  '| Page | 390 | 1440 |',
  '| --- | ---: | ---: |',
];
for (const [p, counts] of Object.entries(report.summary.byPage)) {
  lines.push(`| ${p} | ${counts['390']} | ${counts['1440']} |`);
}
lines.push('', '## Failures (selected)', '');

for (const pageEntry of report.pages) {
  for (const [vpName, data] of Object.entries(pageEntry.viewports)) {
    if (!data.axeFailures?.length) continue;
    lines.push(`### ${pageEntry.path} @ ${vpName}`);
    for (const f of data.axeFailures.slice(0, 40)) {
      lines.push(
        `- \`${f.selector}\` fg=${f.fg} bg=${f.bg} ratio=${f.ratio} need=${f.expected} size=${f.fontSize} weight=${f.fontWeight}`,
      );
      lines.push(`  - ${f.message}`);
    }
    lines.push('');
  }
}

const mdPath = path.join(outDir, `contrast-audit-${label}.md`);
fs.writeFileSync(mdPath, lines.join('\n'));
console.log(`Wrote ${jsonPath}`);
console.log(`Wrote ${mdPath}`);
