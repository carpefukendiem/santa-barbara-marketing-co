'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { IconCircle } from '@/components/ui/IconCircle';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MobileNav } from '@/components/layout/MobileNav';
import { brand } from '@/data/images';
import { site } from '@/data/site';
import {
  locationLinks,
  primaryCta,
  primaryNav,
} from '@/data/navigation';
import { locations } from '@/data/locations';
import { cn, telHref } from '@/lib/utils';
import { MapPin } from '@/lib/lucideIcons';

const navItemClass = 'nav-link px-3 py-2 text-navy';

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
    /* eslint-disable react-hooks/set-state-in-effect */
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  const activeClass = 'underline decoration-ocean decoration-2 underline-offset-8';

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b border-line bg-white/80 backdrop-blur-md transition-[background-color] duration-200 ease-sbmc',
        scrolled && 'bg-white/95',
      )}
    >
      <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-6 lg:grid-cols-[auto_1fr_auto]">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Santa Barbara Marketing Co. home"
        >
          <Image
            src={brand.logo.src}
            alt=""
            width={144}
            height={144}
            className="h-14 w-14 object-contain"
            priority
          />
          <span className="hidden font-display text-sm italic text-navy xl:block">
            {site.tagline}
          </span>
        </Link>

        {isMinimal ? (
          <div className="flex items-center justify-end gap-4">
            {site.phone ? (
              <a
                href={telHref(site.phone)}
                className="hidden text-sm font-medium text-navy md:inline"
              >
                {site.phone}
              </a>
            ) : null}
          </div>
        ) : (
          <>
            <nav
              className="hidden items-center justify-center gap-1 lg:flex"
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
                            activeClass,
                        )}
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
                        className={cn(
                          navItemClass,
                          locationsOpen && activeClass,
                        )}
                        onClick={() => setLocationsOpen((value) => !value)}
                      >
                        Locations
                      </button>
                      {locationsOpen ? (
                        <div className="absolute left-0 top-full z-50 mt-3 w-[min(420px,calc(100vw-2rem))] rounded-2xl bg-white p-6 shadow-xl">
                          <ul className="grid gap-2">
                            {locationLinks.map((link) => {
                              const location = locations.find(
                                (entry) => `/${entry.slug}` === link.href,
                              );
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="flex gap-3 rounded-2xl p-3 hover:bg-sand"
                                    onClick={() => setLocationsOpen(false)}
                                  >
                                    <IconCircle icon={MapPin} />
                                    <span className="min-w-0">
                                      <span className="block font-medium text-navy">
                                        {link.label}
                                      </span>
                                      {location ? (
                                        <span className="mt-0.5 line-clamp-2 block text-sm text-stone">
                                          {location.heroLede}
                                        </span>
                                      ) : null}
                                    </span>
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
                const active =
                  item.href !== '/' && pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(navItemClass, active && activeClass)}
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy lg:hidden"
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
