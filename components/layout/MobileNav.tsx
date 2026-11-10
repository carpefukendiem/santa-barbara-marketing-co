'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import {
  locationFeatures,
  megaFeatures,
  primaryCta,
  primaryNav,
} from '@/data/navigation';

const topLevelLinks = primaryNav.filter(
  (item) => item.label !== 'Services' && item.label !== 'Locations',
);

export function MobileNav({
  open,
  onClose,
  id,
}: {
  open: boolean;
  onClose: () => void;
  id?: string;
}) {
  const pathname = usePathname();
  const generatedId = useId();
  const panelId = id ?? generatedId;
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    services: false,
    locations: false,
  });

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggleGroup = (key: string) => {
    setOpenGroups((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-navy text-white min-[1100px]:hidden"
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-[4.5rem] items-center justify-between px-6">
        <p className="font-display text-lg">Menu</p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-6 pb-8" aria-label="Primary">
        <Accordion
          id={`${panelId}-services`}
          label="Services"
          open={Boolean(openGroups.services)}
          onToggle={() => toggleGroup('services')}
        >
          <ul>
            {megaFeatures.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-t border-white/10 py-3"
                  onClick={onClose}
                >
                  <span className="block text-lg text-white">{item.label}</span>
                  <span className="mt-0.5 block text-sm text-white/60">{item.blurb}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="block border-t border-white/10 py-3 text-sm text-white/70"
                onClick={onClose}
              >
                See all services
              </Link>
            </li>
          </ul>
        </Accordion>

        <Accordion
          id={`${panelId}-locations`}
          label="Locations"
          open={Boolean(openGroups.locations)}
          onToggle={() => toggleGroup('locations')}
        >
          <ul>
            {locationFeatures.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-t border-white/10 py-3"
                  onClick={onClose}
                >
                  <span className="block text-lg text-white">{item.label}</span>
                  <span className="mt-0.5 block text-sm text-white/60">{item.blurb}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#community"
                className="block border-t border-white/10 py-3 text-sm text-white/70"
                onClick={onClose}
              >
                See all locations
              </Link>
            </li>
          </ul>
        </Accordion>

        <ul className="border-t border-white/15">
          {topLevelLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-white/15 py-4 font-display text-3xl text-white"
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-white/10 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Button href={primaryCta.href} className="w-full" onClick={onClose}>
          {primaryCta.label}
        </Button>
      </div>
    </div>
  );
}

function Accordion({
  id,
  label,
  open,
  onToggle,
  children,
}: {
  id: string;
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  const regionId = `${id}-panel`;
  return (
    <div className="border-b border-white/15">
      <button
        type="button"
        id={id}
        aria-expanded={open}
        aria-controls={regionId}
        className="flex w-full items-center justify-between py-4 text-left font-display text-3xl text-white"
        onClick={onToggle}
      >
        <span>{label}</span>
        <span className="font-sans text-xl font-light text-white/50" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open ? (
        <div id={regionId} role="region" aria-labelledby={id} className="pb-2">
          {children}
        </div>
      ) : null}
    </div>
  );
}
