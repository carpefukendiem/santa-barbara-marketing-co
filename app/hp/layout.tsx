/**
 * Internal prerender targets for the homepage A/B rewrite.
 * Do not mark noindex here: proxy rewrites `/` onto these routes, and that
 * metadata would otherwise noindex the public homepage. Direct `/hp/*` hits
 * are redirected in proxy.ts and get X-Robots-Tag via next.config headers.
 */
export default function HpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
