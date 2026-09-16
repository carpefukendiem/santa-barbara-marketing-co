import Link from 'next/link';
import { getPrintService, industryPrintLinks } from '@/data/printServices';

export function PrintApparelRow({ industrySlug }: { industrySlug: string }) {
  const slugs = industryPrintLinks[industrySlug];
  if (!slugs) return null;
  const services = slugs.flatMap((slug) => {
    const service = getPrintService(slug);
    return service ? [service] : [];
  });
  if (services.length === 0) return null;

  return (
    <div className="mt-10 border-t border-rule pt-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
        Print & Apparel
      </p>
      <p className="mt-3 text-lg text-ink">
        Uniforms, printed shirts, and promotional pieces that match the rest of
        your marketing.
      </p>
      <p className="mt-4 font-display text-3xl">
        {services.map((service, index) => (
          <span key={service.slug}>
            {index > 0 ? (
              <span className="text-ochre"> / </span>
            ) : null}
            <Link
              href={`/services/${service.slug}`}
              className="underline-offset-8 hover:underline hover:decoration-tile"
            >
              {service.name}
            </Link>
          </span>
        ))}
      </p>
    </div>
  );
}
