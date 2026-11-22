type AnswerFirstProps = {
  /** 40 to 60 word direct answer shown near the top of the page. */
  answer: string;
  /** Optional quick facts shown under the answer. */
  facts?: Array<{ label: string; value: string }>;
  className?: string;
};

/**
 * Answer-first summary for AI search and scanners.
 * Place after the hero (or as the opening of the main content) on money pages.
 */
export function AnswerFirst({ answer, facts, className }: AnswerFirstProps) {
  return (
    <section
      aria-label="Summary"
      className={
        className ??
        'border-b border-rule bg-cream px-6 py-8 lg:px-14'
      }
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="max-w-3xl text-base leading-relaxed text-ink md:text-lg">
          {answer}
        </p>
        {facts && facts.length > 0 ? (
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-ink/50 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
