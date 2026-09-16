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
    <div className={cn('mx-auto max-w-3xl divide-y divide-line', className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-[1.125rem] font-medium text-navy"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    'text-ocean transition-transform duration-200',
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
              <p className="min-h-0 text-stone">
                <span className="block pb-5">{item.answer}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const Accordion = FAQAccordion;
