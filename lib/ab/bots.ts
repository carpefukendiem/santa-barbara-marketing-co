import type { NextRequest } from 'next/server';

// Real crawlers and link-preview agents. Do not treat HeadlessChrome /
// Playwright as bots: QA and synthetic monitors need normal assignment.
const BOT_UA =
  /(?:^|[^a-z])(?:googlebot|bingbot|yandex(?:bot)?|baiduspider|duckduckbot|semrushbot|ahrefsbot|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|anthropic-ai|perplexitybot|applebot|twitterbot|rogerbot|facebookexternalhit|linkedinbot|pinterestbot|slackbot|discordbot|whatsapp|telegrambot|embedly|quora link preview|vkshare|w3c_validator|screaming frog|chrome-lighthouse|pagespeed)(?:[^a-z]|$)|(?:bot|crawl|spider|slurp)(?:[^a-z]|$)/i;

/**
 * Bots and crawlers always get control (A) and never receive a variant cookie.
 * Also honors Vercel bot flags when present.
 */
export function isBotRequest(request: NextRequest): boolean {
  const vercelBot =
    request.headers.get('x-vercel-bot') ??
    request.headers.get('x-vercel-proxied-for-bot') ??
    request.headers.get('x-bot');
  if (vercelBot && vercelBot !== '0' && vercelBot.toLowerCase() !== 'false') {
    return true;
  }

  const ua = request.headers.get('user-agent') ?? '';
  if (!ua.trim()) return true;
  return BOT_UA.test(ua);
}
