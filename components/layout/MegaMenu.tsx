'use client';

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { megaColumns } from '@/data/navigation';

export function MegaMenu({
  open,
  onClose,
  triggerId,
  panelId,
}: {
  open: boolean;
  onClose: () => void;
  triggerId: string;
  panelId: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, handleKey]);

  useLayoutEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = document.getElementById(triggerId);
    if (!panel || !trigger) return;

    const place = () => {
      const margin = 16;
      const maxW = Math.min(56 * 16, window.innerWidth - margin * 2);
      panel.style.width = `${maxW}px`;
      const triggerRect = trigger.getBoundingClientRect();
      const overflowsRight = triggerRect.left + maxW > window.innerWidth - margin;
      if (overflowsRight) {
        panel.style.left = 'auto';
        panel.style.right = '0';
        if (triggerRect.right - maxW < margin) {
          panel.style.right = 'auto';
          panel.style.left = `${margin - triggerRect.left}px`;
        }
      } else {
        panel.style.left = '0';
        panel.style.right = 'auto';
      }
    };

    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [open, triggerId]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      className="absolute top-full z-50 max-w-[min(56rem,calc(100vw-2rem))] pt-2"
    >
      <div className="border-t border-rule bg-cream p-8">
        <div className="grid grid-cols-2 gap-10">
          {megaColumns.map((column) => (
            <div key={column.id}>
              <p className="text-eyebrow text-stone">{column.title}</p>
              <ul className="mt-5 space-y-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block py-1.5 text-sm text-ink hover:text-tile"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
