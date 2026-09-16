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
    <Section bg="navy" id="community">
      <Reveal>
        <Eyebrow dark>Serving our community</Eyebrow>
        <Heading className="mt-4 !text-cream">Proud to Support the 805.</Heading>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {overviewLocations.map((location) => (
            <LocationCard
              key={location.slug}
              href={`/${location.slug}`}
              city={location.city}
              tagline={taglines[location.slug] ?? location.heroLede}
              image={location.heroImage}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
