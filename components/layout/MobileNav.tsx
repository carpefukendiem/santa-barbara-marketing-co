'use client';

import { useEffect, useId, useRef, useState } from 'react';
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
  id,
}: {
  open: boolean;
  onClose: () => void;
  id?: string;
}) {
  const generatedId = useId();
  const panelId = id ?? generatedId;
  const closeRef = useRef<HTMLButtonElement>(null);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    digital: true,
    print: true,
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

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-navy text-white lg:hidden"
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
      <div className="flex-1 overflow-y-auto px-6 pb-8">
        <p className="text-xs tracking-[0.18em] text-white/50 uppercase">Services</p>
        <div className="mt-3">
          {megaColumns.map((column) => {
            const groupOpen = openGroups[column.id] ?? true;
            const buttonId = `${panelId}-${column.id}`;
            const regionId = `${panelId}-${column.id}-links`;
            return (
              <div key={column.id} className="border-b border-white/15">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={groupOpen}
                  aria-controls={regionId}
                  className="flex w-full items-center justify-between py-4 text-left font-mono text-xs tracking-[0.18em] text-white/70 uppercase"
                  onClick={() =>
                    setOpenGroups((current) => ({
                      ...current,
                      [column.id]: !groupOpen,
                    }))
                  }
                >
                  <span>{column.title}</span>
                  <span aria-hidden="true">{groupOpen ? '−' : '+'}</span>
                </button>
                {groupOpen ? (
                  <ul id={regionId} role="region" aria-labelledby={buttonId}>
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block border-t border-white/10 py-4 font-display text-3xl text-white"
                          onClick={onClose}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-xs tracking-[0.18em] text-white/50 uppercase">
          Locations
        </p>
        <ul className="mt-3 space-y-1">
          {locationLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 font-display text-2xl text-white"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-8 space-y-1 border-t border-white/10 pt-6">
          {companyLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-2 font-display text-2xl text-white"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <Button href={primaryCta.href} className="w-full" onClick={onClose}>
          {primaryCta.label}
        </Button>
        <p className="mt-3 text-sm text-white/70">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        {site.phone ? (
          <p className="mt-1 text-sm text-white/70">
            <a href={telHref(site.phone)}>{site.phone}</a>
          </p>
        ) : null}
      </div>
    </div>
  );
}
