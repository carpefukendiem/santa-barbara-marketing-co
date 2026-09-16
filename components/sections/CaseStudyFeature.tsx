import { hasCaseStudies } from '@/data/caseStudies';
import type { CaseStudy } from '@/data/caseStudies';
import { Button } from '@/components/ui/Button';

export function CaseStudyFeature({ items }: { items: CaseStudy[] }) {
  const featured = items[0];
  if (!hasCaseStudies || !featured) return null;
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <p className="text-eyebrow text-center text-ocean">Featured work</p>
        <h2 className="mt-4 text-center text-h2 text-navy">{featured.client}</h2>
        <p className="measure-lede mx-auto mt-4 text-center text-lg text-stone">
          {featured.challenge}
        </p>
        <div className="mt-8 text-center">
          <Button href={`/work/${featured.slug}`}>See the work</Button>
        </div>
      </div>
    </section>
  );
}
