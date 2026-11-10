'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Wordmark } from '@/components/brand/Wordmark';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileNav } from '@/components/layout/MobileNav';
import { site } from '@/data/site';
import {
  locationFeatures,
  megaFeatures,
  primaryCta,
  primaryNav,
} from '@/data/navigation';
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
  const locationsPanelId = useId();
  const mobilePanelId = useId();
  const isMinimal = pathname === '/book-a-call';
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lightTop =
    pathname === '/work' || pathname.startsWith('/work/');
  const overDark = !scrolled && !lightTop;
  const navItemClass = cn(
    'nav-link px-3 py-2',
    overDark ? 'text-cream' : 'text-ink',
  );

  return (
    <header
      className={cn(
        'site-header fixed inset-x-0 top-0 z-40',
        scrolled || lightTop
          ? 'border-b border-rule bg-cream/95 text-ink backdrop-blur'
          : 'border-b border-transparent bg-transparent text-cream',
      )}
      data-scrolled={scrolled ? '' : undefined}
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-5 py-2 lg:px-14">
        <Link
          href="/"
          className="shrink-0 py-1 pr-6"
          aria-label="Santa Barbara Marketing Co. home"
        >
          <Wordmark inverted={overDark} priority />
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
            <nav className="hidden items-center justify-center gap-1 xl:gap-2 lg:flex" aria-label="Primary">
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
                        eyebrow="Services"
                        items={megaFeatures}
                        footerHref="/services"
                        footerLabel="See all services"
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
                        aria-haspopup="true"
                        aria-controls={locationsPanelId}
                        className={navItemClass}
                        onClick={() => setLocationsOpen((value) => !value)}
                      >
                        Locations
                      </button>
                      <MegaMenu
                        open={locationsOpen}
                        onClose={() => setLocationsOpen(false)}
                        triggerId={locationsTriggerId}
                        panelId={locationsPanelId}
                        eyebrow="Locations"
                        items={locationFeatures}
                        footerHref="/#community"
                        footerLabel="See all locations"
                        columns={2}
                      />
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
            <div className="flex items-center justify-end gap-3">
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
