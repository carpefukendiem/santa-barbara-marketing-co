import { hasTestimonials } from '@/data/testimonials';
import type { Testimonial } from '@/data/testimonials';

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (!hasTestimonials) return null;
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <blockquote
              key={`${item.name}-${item.business}`}
              className="rounded-2xl border border-line bg-white p-8 shadow-card"
            >
              <p className="text-lg text-ink">{item.quote}</p>
              <footer className="mt-4 text-sm text-stone">
                {item.name}, {item.role}, {item.business}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
