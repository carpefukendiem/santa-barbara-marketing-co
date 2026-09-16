import Image from 'next/image';
import { Check } from 'lucide-react';
import { Chip } from '@/components/ui/Chip';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { Heading } from '@/components/ui/Heading';
import { Reveal } from '@/components/ui/Reveal';
import { photos } from '@/data/images';

const values = [
  'Local Focused',
  'Relationship Driven',
  'Strategy First',
  'Long-Term Partnerships',
];

export function LocalPanel() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Why Santa Barbara Marketing Co.</Eyebrow>
          <Heading className="mt-4">A Local Agency That Gets It.</Heading>
          <p className="mt-6 text-lg text-ink">
            We live here. We work here. We believe in Santa Barbara. Our mission
            is simple: help great local businesses grow with honest strategy,
            thoughtful design, and marketing that actually works.
          </p>
          <p className="mt-4 text-lg text-stone">
            A Funk Zone tasting room, a Goleta HVAC company, and a Coast Village
            Road practice do not have the same search problem. We plan around
            that. Resident searches from a home address behave differently from a
            visitor on a hotel phone deciding in ten seconds. We write for both
            when they exist, and we skip the noun-swapped city pages that
            pretend otherwise.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <li key={value}>
                <Chip className="bg-sand hover:bg-sand hover:text-navy">
                  <Check size={14} className="mr-1 text-ocean" aria-hidden="true" />
                  {value}
                </Chip>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl lg:min-h-[520px]">
            <Image
              src={photos.localStreet.src}
              alt={photos.localStreet.alt}
              fill
              quality={78}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="photo-treatment object-cover"
              style={{ objectPosition: photos.localStreet.focalPoint }}
            />
            <GrainOverlay />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"
              aria-hidden="true"
            />
            <p className="absolute inset-x-8 bottom-8 font-display text-2xl text-white md:text-3xl">
              Local People. Local Businesses. A Stronger 805.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
