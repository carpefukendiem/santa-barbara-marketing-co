'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileNav } from '@/components/layout/MobileNav';
import { brand } from '@/data/images';
import { site } from '@/data/site';
import {
  locationLinks,
  primaryCta,
  primaryNav,
} from '@/data/navigation';
import { cn, telHref } from '@/lib/utils';

const navItemClass =
  'nav-link px-2.5 py-2 text-sbmc-navy xl:px-3.5';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesTriggerId = useId();
  const locationsTriggerId = useId();
  const isMinimal = pathname === '/free-growth-plan';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Pathname is an external App Router signal.
    /* eslint-disable react-hooks/set-state-in-effect */
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-transparent bg-sbmc-cream transition-[background-color,border-color,backdrop-filter] duration-200 ease-sbmc',
        scrolled &&
          'border-sbmc-border bg-[rgb(248_244_237/0.94)] backdrop-blur-[12px]',
      )}
    >
      <div
        className={cn(
          'mx-auto grid max-w-[1400px] items-center gap-3 px-5 transition-[height] duration-200 md:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-10',
          isMinimal ? 'grid-cols-[1fr_auto]' : 'grid-cols-[1fr_auto]',
          scrolled
            ? 'h-[76px] lg:h-[84px]'
            : 'h-[148px] lg:h-[162px] xl:h-[176px]',
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-0"
          aria-label="Santa Barbara Marketing Co. home"
        >
          <Image
            src={brand.logo.src}
            alt=""
            width={326}
            height={326}
            className={cn(
              'object-contain transition-[width,height] duration-200 ease-sbmc',
              scrolled
                ? 'h-[64px] w-[64px] lg:h-[70px] lg:w-[70px]'
                : 'h-[136px] w-[136px] lg:h-[150px] lg:w-[150px] xl:h-[163px] xl:w-[163px]',
            )}
            priority
          />
          <span
            className="mx-3 hidden h-20 w-px bg-sbmc-navy/18 lg:block xl:mx-4 xl:h-24"
            aria-hidden="true"
          />
          <span
            className="font-display hidden max-w-[10.5rem] text-[1.2rem] leading-[1.15] text-navy italic lg:block xl:max-w-[11.5rem] xl:text-[1.5rem]"
            aria-hidden="true"
          >
            {site.tagline}
          </span>
        </Link>

        {isMinimal ? (
          <div className="flex items-center justify-end gap-4">
            {site.phone ? (
              <a
                href={telHref(site.phone)}
                className="hidden text-sm font-semibold text-sbmc-navy md:inline"
              >
                {site.phone}
              </a>
            ) : null}
          </div>
        ) : (
          <>
            <nav
              className="hidden items-center justify-center gap-0.5 lg:flex"
              aria-label="Primary"
            >
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
                        className={cn(
                          navItemClass,
                          (pathname.startsWith('/services') || servicesOpen) &&
                            'underline decoration-sbmc-teal decoration-2 underline-offset-[10px]',
                        )}
                        onClick={() => setServicesOpen((value) => !value)}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setServicesOpen((value) => !value);
                          }
                        }}
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
                        <div className="absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-[12px] border border-sbmc-border bg-sbmc-white p-4 shadow-lift">
                          <ul className="space-y-1">
                            {locationLinks.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md px-2 py-2 text-sbmc-navy hover:text-sbmc-teal"
                                  onClick={() => setLocationsOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href="/#community"
                                className="block px-2 py-2 text-sbmc-teal"
                                onClick={() => setLocationsOpen(false)}
                              >
                                All service areas →
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  );
                }
                const active =
                  item.href !== '/' && pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      navItemClass,
                      active &&
                        'underline decoration-sbmc-teal decoration-2 underline-offset-[10px]',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center justify-end gap-3">
              <span className="hidden lg:inline-flex">
                <Button href={primaryCta.href}>{primaryCta.label}</Button>
              </span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sbmc-navy lg:hidden"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
            <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
          </>
        )}
      </div>
    </header>
  );
}
