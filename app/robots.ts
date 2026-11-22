import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

const disallow = [
  '/api/',
  '/demos',
  '/demos/',
  '/hp',
  '/hp/',
  '/admin',
  '/admin/',
] as const;

/** AI search and training crawlers allowed on purpose (same path rules). */
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'cohere-ai',
  'DuckAssistBot',
  'Bingbot',
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...disallow],
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: [...disallow],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
