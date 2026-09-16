import Image from 'next/image';
import { Eyebrow } from '@/components/ui/Eyebrow';
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
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:px-14">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative -mt-32 aspect-[4/5] overflow-hidden">
              <Image
                src={photos.localStreet.src}
                alt={photos.localStreet.alt}
                fill
                quality={78}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: photos.localStreet.focalPoint }}
              />
            </div>
            <blockquote className="mt-8 border-l-4 border-tile pl-6 font-display text-3xl font-light italic text-ink">
              Local People. Local Businesses. A Stronger 805.
            </blockquote>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow>Why Santa Barbara Marketing Co.</Eyebrow>
            <Heading className="mt-4">A Local Agency That Gets It.</Heading>
            <p className="mt-6 text-lg text-ink">
              We live here. We work here. We believe in Santa Barbara. Our mission
              is simple: help great local businesses grow with honest strategy,
              thoughtful design, and marketing that actually works. That includes
              the physical side. The same team that builds your website can print
              the shirts for your crew and the banner for the booth.
            </p>
            <p className="mt-4 text-lg text-stone">
              A Funk Zone tasting room, a Goleta HVAC company, and a Coast Village
              Road practice do not have the same search problem. We plan around
              that. Resident searches from a home address behave differently from a
              visitor on a hotel phone deciding in ten seconds. We write for both
              when they exist, and we skip the noun-swapped city pages that
              pretend otherwise.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
                >
                  <span className="h-2 w-2 bg-[--ochre]" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
