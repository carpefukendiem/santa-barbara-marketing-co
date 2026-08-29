import { hasTestimonials } from '@/data/testimonials';
import type { Testimonial } from '@/data/testimonials';

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!hasTestimonials) return null;
  return (
    <section className="section-pad bg-sbmc-cream-warm">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <blockquote
              key={`${item.name}-${item.business}`}
              className="rounded-[12px] border border-sbmc-border bg-sbmc-white p-8 shadow-card"
            >
              <p className="text-body-lg text-sbmc-ink">{item.quote}</p>
              <footer className="mt-4 text-body-sm text-sbmc-ink-muted">
                {item.name}, {item.role}, {item.business}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
