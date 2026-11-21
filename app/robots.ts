import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Cover both /demos and /demos/<slug> (trailing-slash form alone can miss /demos).
      disallow: ['/api/', '/demos', '/demos/', '/hp', '/hp/', '/admin', '/admin/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
