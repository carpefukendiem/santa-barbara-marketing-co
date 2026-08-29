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
        'sticky top-0 z-40 border-b border-transparent bg-sbmc-cream transition-[height,background-color,border-color,backdrop-filter] duration-200 ease-sbmc',
        scrolled &&
          'border-sbmc-border bg-[rgb(248_244_237/0.92)] backdrop-blur-[12px]',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-5 transition-[height] duration-200 md:px-8 lg:px-10',
          scrolled ? 'h-[68px]' : 'h-[84px]',
        )}
      >
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={64}
            height={64}
            className={cn(
              'h-14 w-14 object-contain lg:h-16 lg:w-16',
              scrolled && 'h-12 w-14 lg:h-14 lg:w-14',
            )}
            priority
          />
          <span
            className="font-script hidden text-[1.15rem] leading-tight text-sbmc-navy lg:block"
            aria-hidden="true"
          >
            {site.tagline}
          </span>
        </Link>

        {isMinimal ? (
          <div className="flex items-center gap-4">
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
              className="hidden items-center gap-1 lg:flex"
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
                          'px-3 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-sbmc-navy',
                          (pathname.startsWith('/services') || servicesOpen) &&
                            'underline decoration-sbmc-teal decoration-2 underline-offset-8',
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
                        className="px-3 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-sbmc-navy"
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
                      'px-3 py-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-sbmc-navy',
                      active &&
                        'underline decoration-sbmc-teal decoration-2 underline-offset-8',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-3">
              <Button href={primaryCta.href} className="hidden lg:inline-flex">
                {primaryCta.label}
              </Button>
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
