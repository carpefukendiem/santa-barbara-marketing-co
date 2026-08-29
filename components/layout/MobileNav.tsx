'use client';

import { useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { site } from '@/data/site';
import {
  companyLinks,
  locationLinks,
  megaColumns,
  primaryCta,
} from '@/data/navigation';
import { telHref } from '@/lib/utils';

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

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

  return (
    <div
      className="fixed inset-0 z-50 bg-sbmc-cream md:hidden"
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-[100px] items-center justify-between px-5">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-sbmc-navy">
          Menu
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-sbmc-navy"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
      </div>
      <div className="h-[calc(100dvh-100px)] overflow-y-auto px-5 pb-10">
        <details className="border-b border-sbmc-border py-3">
          <summary className="cursor-pointer list-none py-2 font-sans text-[0.8rem] font-bold uppercase tracking-[0.1em] text-sbmc-navy">
            Services
          </summary>
          <ul className="space-y-1 pb-4 pt-2">
            {megaColumns.flatMap((column) =>
              column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sbmc-ink"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              )),
            )}
          </ul>
        </details>
        <details className="border-b border-sbmc-border py-3">
          <summary className="cursor-pointer list-none py-2 font-sans text-[0.8rem] font-bold uppercase tracking-[0.1em] text-sbmc-navy">
            Locations
          </summary>
          <ul className="space-y-1 pb-4 pt-2">
            {locationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sbmc-ink"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
        <ul className="space-y-1 py-4">
          {companyLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 font-sans text-[0.8rem] font-bold uppercase tracking-[0.1em] text-sbmc-navy"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-4">
          <Button href={primaryCta.href} className="w-full" onClick={onClose}>
            {primaryCta.label}
          </Button>
          <p className="text-body-sm text-sbmc-ink-muted">
            <a href={`mailto:${site.email}`} className="text-sbmc-teal">
              {site.email}
            </a>
          </p>
          {site.phone ? (
            <p className="text-body-sm">
              <a href={telHref(site.phone)} className="text-sbmc-teal">
                {site.phone}
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
