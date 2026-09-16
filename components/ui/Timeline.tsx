import { cn } from '@/lib/utils';

export type TimelineStep = {
  title: string;
  body: string;
};

export function Timeline({
  steps,
  className,
}: {
  steps: TimelineStep[];
  className?: string;
}) {
  return (
    <ol className={cn('relative grid gap-10 lg:grid-cols-4', className)}>
      <span
        className="pointer-events-none absolute top-5 left-[1.15rem] hidden h-[calc(100%-2.5rem)] w-px border-l-2 border-dashed border-ocean/40 lg:top-[1.15rem] lg:right-8 lg:left-8 lg:h-0 lg:w-auto lg:border-l-0 lg:border-t-2"
        aria-hidden="true"
      />
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
          <span className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ocean bg-white font-display text-sm text-tile">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="text-h3 text-navy">{step.title}</h3>
            <p className="mt-2 text-stone">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
