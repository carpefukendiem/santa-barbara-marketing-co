'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/utils';

export type AccordionItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn('max-w-4xl', className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question} className="border-t border-rule py-7 last:border-b">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  'flex w-full items-center justify-between gap-4 text-left font-display text-2xl font-normal',
                  isOpen ? 'text-tile' : 'text-ink',
                )}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    'font-mono text-lg transition-transform duration-200',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-sbmc',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <p className="min-h-0 max-w-3xl text-lg text-stone">
                <span className="block pt-4">{item.answer}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Accordion = FAQAccordion;
