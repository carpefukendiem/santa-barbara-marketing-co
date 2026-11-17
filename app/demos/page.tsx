import type { Metadata } from 'next';
import Link from 'next/link';
import { getListedDemos } from '@/data/demos';

/**
 * /demos index — generated from data/demos registry only.
 * New demos appear here automatically once registered (see data/demos/index.ts).
 * No demo preview bar / Make it mine chrome on this page.
 */
export const metadata: Metadata = {
  title: { absolute: 'Demo sites · Santa Barbara Marketing Co.' },
  description: 'Private preview sites for Santa Barbara County businesses.',
  robots: { index: false, follow: false },
};

export default function DemosIndexPage() {
  const demos = getListedDemos();

  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-stone">
          Santa Barbara Marketing Co.
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-navy sm:text-4xl">
          Demo sites
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
          Private preview pages for local businesses. Each link opens a noindex
          demo built from the live registry — add a registry entry and it shows
          up here.
        </p>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {demos.map((demo) => (
            <li key={demo.slug} className="py-5">
              <Link
                href={`/demos/${demo.slug}`}
                className="group block text-lg font-medium text-navy underline-offset-4 transition-colors hover:text-tile hover:underline sm:text-xl"
              >
                {demo.name}
              </Link>
              <p className="mt-1.5 text-sm leading-relaxed text-stone sm:text-base">
                {demo.listingDescription}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-stone">
                {demo.category}
                <span className="mx-2 text-line" aria-hidden="true">
                  ·
                </span>
                {demo.city}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-stone">
          {demos.length} demos · not indexed
        </p>
      </div>
    </main>
  );
}
