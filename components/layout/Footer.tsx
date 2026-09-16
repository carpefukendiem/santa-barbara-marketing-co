'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand } from '@/data/images';
import { site } from '@/data/site';
import {
  allServiceLinks,
  companyLinks,
  getStartedLinks,
  legalLinks,
  locationLinks,
  santaBarbaraServiceLinks,
} from '@/data/navigation';
import { telHref } from '@/lib/utils';

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(
    (entry): entry is [string, string] => typeof entry[1] === 'string' && entry[1].length > 0,
  );
  const isMinimal = pathname === '/free-growth-plan';

  if (isMinimal) {
    return (
      <footer className="bg-sbmc-navy text-white">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p className="text-xs text-white/60">
            © {year} Santa Barbara Marketing Co. · Est. {site.founded}
          </p>
          <ul className="flex flex-wrap gap-4 text-xs text-white/60">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-sbmc-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={160}
                height={160}
                className="h-20 w-20 object-contain"
              />
              <span className="font-sans text-[0.8rem] font-semibold uppercase tracking-[0.12em]">
                Santa Barbara Marketing Co.
              </span>
            </Link>
            <p className="font-display mt-5 text-[1.45rem] leading-tight text-white/80 italic" aria-hidden="true">
              {site.tagline}
            </p>
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {socials.map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-sm uppercase tracking-[0.08em] text-white/70 hover:text-white"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn title="Services" links={allServiceLinks} accordion />
            <FooterColumn
              title="Locations"
              links={[...locationLinks, ...santaBarbaraServiceLinks]}
              accordion
            />
            <FooterColumn title="Company" links={companyLinks} />
            <div>
              <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/70">
                Get Started
              </p>
              <ul className="mt-4 space-y-2">
                {getStartedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {site.email}
                  </a>
                </li>
                {site.phone ? (
                  <li>
                    <a
                      href={telHref(site.phone)}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {site.phone}
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Santa Barbara Marketing Co. · Santa Barbara, California · Est.{' '}
            {site.founded}
          </p>
          <ul className="flex gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  accordion = false,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  accordion?: boolean;
}) {
  const list = (
    <ul className="mt-4 space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="inline-flex min-h-11 items-center text-sm text-white/80 transition-colors duration-200 hover:text-white sm:min-h-0"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {accordion ? (
        <details className="sm:hidden">
          <summary className="cursor-pointer list-none py-2 font-sans text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/70">
            {title}
          </summary>
          {list}
        </details>
      ) : null}
      <div className={accordion ? 'hidden sm:block' : undefined}>
        <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/70">
          {title}
        </p>
        {list}
      </div>
    </div>
  );
}
