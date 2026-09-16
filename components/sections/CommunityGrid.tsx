import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/ui/LocationCard';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { overviewLocations } from '@/data/locations';

const taglines: Record<string, string> = {
  'santa-barbara-digital-marketing': 'Local. Vibrant. Together.',
  'goleta-digital-marketing': 'Businesses Build Community.',
  'montecito-digital-marketing': 'Local Roots. Lasting Impact.',
  'carpinteria-digital-marketing': 'Small Town. Big Opportunity.',
};

export function CommunityGrid() {
  return (
    <Section bg="white" id="community">
      <Reveal>
        <div className="text-center">
          <Eyebrow align="center">Serving our community</Eyebrow>
          <Heading className="mt-4">Proud to Support the 805.</Heading>
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {overviewLocations.map((location) => (
            <LocationCard
              key={location.slug}
              href={`/${location.slug}`}
              city={location.city}
              tagline={taglines[location.slug] ?? location.heroLede}
              image={location.heroImage}
              className="snap-start"
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
