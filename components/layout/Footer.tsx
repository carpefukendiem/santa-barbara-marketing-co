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
    <footer className="bg-navy pb-24 text-white lg:pb-0">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={160}
                height={160}
                className="h-16 w-16 object-contain"
              />
              <span className="font-display text-lg">{site.name}</span>
            </Link>
            <p className="mt-4 font-display text-xl italic text-white/80">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-white/75 hover:text-white"
            >
              {site.email}
            </a>
            {socials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {socials.map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <FooterColumn title="Services" links={allServiceLinks} />
            <FooterColumn title="Locations" links={locationLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
                Get Started
              </p>
              <ul className="mt-4 space-y-2">
                {getStartedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {site.phone ? (
                  <li>
                    <a
                      href={telHref(site.phone)}
                      className="text-sm text-white/80 hover:text-white"
                    >
                      {site.phone}
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
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
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
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
    </div>
  );
}
