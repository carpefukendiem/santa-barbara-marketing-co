'use client';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { primaryCta } from '@/data/navigation';

const HIDDEN_ON = ['/', '/book-a-call', '/contact'];

export function StickyMobileCta() {
  const pathname = usePathname();

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <Button href={primaryCta.href} className="w-full">
        {primaryCta.label}
      </Button>
    </div>
  );
}
