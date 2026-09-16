'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand } from '@/data/images';
import { site } from '@/data/site';
import {
  digitalServiceLinks,
  printServiceLinks,
  companyLinks,
  getStartedLinks,
  legalLinks,
  locationLinks,
} from '@/data/navigation';
import { telHref } from '@/lib/utils';

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const socials = Object.entries(site.social).filter(
    (entry): entry is [string, string] => typeof entry[1] === 'string' && entry[1].length > 0,
  );
  const isMinimal = pathname === '/book-a-call';

  if (isMinimal) {
    return (
      <footer className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 md:flex-row md:items-center md:justify-between">
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
    <footer className="relative overflow-hidden bg-navy pb-24 text-cream lg:pb-0">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-14">
        <p className="border-b border-cream/20 pb-10 font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.95] text-cream lg:whitespace-nowrap">
          Santa Barbara Marketing Co.
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <span className="inline-flex rounded-full bg-cream p-1.5 ring-1 ring-rule">
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={176}
                  height={176}
                  className="h-[88px] w-[88px] object-contain"
                />
              </span>
            </Link>
            <p className="mt-4 font-display text-xl italic text-cream/80">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-mono text-sm text-cream/75 hover:text-cream"
            >
              {site.email}
            </a>
            {site.phone ? (
              <a
                href={telHref(site.phone)}
                className="mt-2 block font-mono text-sm text-cream/75"
              >
                {site.phone}
              </a>
            ) : null}
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {socials.map(([name, href]) => (
                  <li key={name}>
                    <a href={href} className="font-mono text-xs uppercase tracking-[0.16em] text-cream/70">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <FooterColumn title="Services" links={digitalServiceLinks} extra={printServiceLinks} />
            <FooterColumn title="Locations" links={locationLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] text-cream/60 uppercase">
                Get Started
              </p>
              <ul className="mt-4 space-y-2">
                {getStartedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-xs uppercase tracking-[0.12em] text-cream/80 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-cream/20 pt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Santa Barbara Marketing Co. · Santa Barbara, California · Est.{' '}
            {site.founded}
          </p>
          <ul className="flex gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream">
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
  extra,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
  extra?: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/80 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {extra ? (
        <>
          <p className="mt-6 text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
            Print & Apparel
          </p>
          <ul className="mt-4 space-y-2">
            {extra.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
