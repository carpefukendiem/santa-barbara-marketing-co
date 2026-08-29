import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/ui/LocationCard';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { overviewLocations } from '@/data/locations';

const taglines: Record<string, string> = {
  'santa-barbara-digital-marketing': 'Local. Vibrant. Together.',
  'goleta-digital-marketing': 'Businesses Build Community.',
  'montecito-digital-marketing': 'Local Roots. Lasting Impact.',
  'carpinteria-digital-marketing': 'Small Town. Big Opportunity.',
};

export function CommunityGrid() {
  return (
    <Section className="bg-sbmc-aqua-light" id="community">
      <Container wide>
        <SectionEyebrow>Serving our community</SectionEyebrow>
        <Heading className="mt-4 text-center">Proud to Support the 805.</Heading>
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
      </Container>
    </Section>
  );
}
