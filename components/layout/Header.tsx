'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileNav } from '@/components/layout/MobileNav';
import { brand } from '@/data/images';
import { site } from '@/data/site';
import { locationLinks, primaryCta, primaryNav } from '@/data/navigation';
import { locations } from '@/data/locations';
import { cn, telHref } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesTriggerId = useId();
  const servicesPanelId = useId();
  const locationsTriggerId = useId();
  const mobilePanelId = useId();
  const isMinimal = pathname === '/book-a-call';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  const overDark = !scrolled;
  const navItemClass = cn(
    'nav-link px-3.5 py-2.5',
    overDark ? 'text-cream' : 'text-ink',
  );

  return (
    <header
      className={cn(
        'site-header fixed inset-x-0 top-0 z-40',
        scrolled
          ? 'border-b border-rule bg-cream/95 text-ink backdrop-blur'
          : 'border-b border-transparent bg-transparent text-cream',
      )}
      data-scrolled={scrolled ? '' : undefined}
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-center gap-4 px-6 md:justify-between lg:px-14">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Santa Barbara Marketing Co. home"
        >
          <span className="inline-flex rounded-full bg-cream p-1 ring-1 ring-rule">
            <Image
              src={brand.logo.src}
              alt=""
              width={256}
              height={256}
              sizes="(max-width: 767px) 112px, 160px"
              className="header-seal object-contain"
              priority
            />
          </span>
        </Link>

        {isMinimal ? (
          <div className="hidden items-center justify-end gap-4 md:flex">
            {site.phone ? (
              <a
                href={telHref(site.phone)}
                className={cn('hidden text-sm md:inline lg:hidden', overDark ? 'text-cream' : 'text-ink')}
              >
                {site.phone}
              </a>
            ) : null}
          </div>
        ) : (
          <>
            <nav className="hidden items-center justify-center gap-3 lg:flex" aria-label="Primary">
              {primaryNav.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        id={servicesTriggerId}
                        type="button"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        aria-controls={servicesPanelId}
                        className={navItemClass}
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        Services
                      </button>
                      <MegaMenu
                        open={servicesOpen}
                        onClose={() => setServicesOpen(false)}
                        triggerId={servicesTriggerId}
                        panelId={servicesPanelId}
                      />
                    </div>
                  );
                }
                if (item.label === 'Locations') {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setLocationsOpen(true)}
                      onMouseLeave={() => setLocationsOpen(false)}
                    >
                      <button
                        id={locationsTriggerId}
                        type="button"
                        aria-expanded={locationsOpen}
                        className={navItemClass}
                        onClick={() => setLocationsOpen((value) => !value)}
                      >
                        Locations
                      </button>
                      {locationsOpen ? (
                        <div className="absolute left-1/2 top-full z-50 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 border-t border-rule bg-cream p-8">
                          <ul className="grid gap-4">
                            {locationLinks.map((link) => {
                              const location = locations.find(
                                (entry) => `/${entry.slug}` === link.href,
                              );
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="block"
                                    onClick={() => setLocationsOpen(false)}
                                  >
                                    <span className="font-display text-2xl text-ink">
                                      {link.label}
                                    </span>
                                    {location ? (
                                      <span className="mt-1 block text-sm text-stone">
                                        {location.heroLede}
                                      </span>
                                    ) : null}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <Link key={item.href} href={item.href} className={navItemClass}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center justify-end gap-3 max-md:contents">
              {site.phone ? (
                <a
                  href={telHref(site.phone)}
                  className={cn(
                    'hidden font-mono text-xs tracking-[0.16em] uppercase md:inline lg:hidden',
                    overDark ? 'text-cream' : 'text-ink',
                  )}
                >
                  {site.phone}
                </a>
              ) : null}
              <span className="hidden lg:inline-flex">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </span>
              <button
                type="button"
                className={cn(
                  'inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] backdrop-blur-sm lg:hidden',
                  'max-md:absolute max-md:right-5 max-md:top-1/2 max-md:-translate-y-1/2',
                  overDark
                    ? 'border-cream/40 text-cream active:bg-cream/12'
                    : 'border-navy/25 text-ink active:bg-navy/10',
                )}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls={mobilePanelId}
                onClick={() => setMobileOpen((value) => !value)}
              >
                {mobileOpen ? <CloseGlyph /> : <MenuGlyph />}
                <span>{mobileOpen ? 'Close' : 'Menu'}</span>
              </button>
            </div>
            <MobileNav
              id={mobilePanelId}
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            />
          </>
        )}
      </div>
    </header>
  );
}

function MenuGlyph() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 1h14M0 9h10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CloseGlyph() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
