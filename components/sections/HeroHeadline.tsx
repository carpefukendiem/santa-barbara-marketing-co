'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const lines = [
  { before: 'Local businesses.', accent: null, after: ' One system.' },
  { before: 'Website · Local SEO · Reviews · Follow‑up.', accent: null, after: null },
];

export function HeroHeadline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <h1 className="mt-3 text-display-md text-cream lg:text-display-lg max-md:leading-[1.08]">
      {lines.map((line, index) => (
        <span
          key={line.before + (line.accent ?? '')}
          className={cn(
            'block transition-[opacity,transform] duration-[700ms] ease-sbmc motion-reduce:translate-y-0 motion-reduce:transition-opacity',
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          )}
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          {line.before}
          {line.accent ? (
            <em className="font-display font-normal not-italic text-tile">
              {line.accent}
            </em>
          ) : null}
          {line.after ?? null}
        </span>
      ))}
    </h1>
  );
}
