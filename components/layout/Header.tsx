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
  const locationsTriggerId = useId();
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
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-14">
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
              sizes="160px"
              className="header-seal object-contain"
              priority
            />
          </span>
        </Link>

        {isMinimal ? (
          <div className="flex items-center justify-end gap-4">
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
                        className={navItemClass}
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        Services
                      </button>
                      <MegaMenu
                        open={servicesOpen}
                        onClose={() => setServicesOpen(false)}
                        triggerId={servicesTriggerId}
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
                  'nav-link inline-flex items-center px-3.5 py-2.5 lg:hidden',
                  overDark ? 'text-cream' : 'text-ink',
                )}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                Menu
              </button>
            </div>
            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
          </>
        )}
      </div>
    </header>
  );
}
