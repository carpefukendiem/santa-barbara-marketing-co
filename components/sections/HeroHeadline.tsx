'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const lines = [
  { before: 'More calls.', accent: null, after: null },
  { before: 'More customers.', accent: null, after: null },
  { before: 'Less guessing.', accent: null, after: null },
];

export function HeroHeadline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const id = window.requestAnimationFrame(() => setVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <h1 className="mt-5 text-h1 text-cream max-md:text-[2.75rem] max-md:leading-[1.05]">
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
            <em className="font-display font-light italic text-tile">
              {line.accent}
            </em>
          ) : null}
          {line.after ?? null}
        </span>
      ))}
    </h1>
  );
}
