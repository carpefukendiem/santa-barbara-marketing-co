import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { IconCompass, IconHeart, IconLeaf, IconWaves } from '@/components/icons';
import { photos } from '@/data/images';

const values = [
  { label: 'Local Focused', icon: IconWaves },
  { label: 'Relationship Driven', icon: IconHeart },
  { label: 'Strategy First', icon: IconCompass },
  { label: 'Long-Term Partnerships', icon: IconLeaf },
];

export function LocalPanel() {
  return (
    <Section padded={false} className="bg-sbmc-cream">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[560px]">
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
            className="absolute inset-0 bg-gradient-to-t from-[rgb(5_33_54/0.7)] to-transparent"
            aria-hidden="true"
          />
          <p
            className="font-display absolute inset-x-8 bottom-8 z-[3] text-2xl text-white italic md:text-3xl"
            aria-hidden="true"
          >
            Local People. Local Businesses. A Stronger 805.
          </p>
        </div>
        <div className="flex items-center px-5 py-16 md:px-12">
          <div>
            <SectionEyebrow align="left">Why Santa Barbara Marketing Co.</SectionEyebrow>
            <Heading className="mt-4">A Local Agency That Gets It.</Heading>
            <p className="mt-6 max-w-[65ch] text-body-lg text-sbmc-ink">
              We live here. We work here. We believe in Santa Barbara. Our mission
              is simple: help great local businesses grow with honest strategy,
              thoughtful design, and marketing that actually works.
            </p>
            <p className="mt-4 max-w-[65ch] text-body-lg text-sbmc-ink-muted">
              A Funk Zone tasting room, a Goleta HVAC company, and a Coast Village
              Road practice do not have the same search problem. We plan around
              that. Resident searches from a home address behave differently from a
              visitor on a hotel phone deciding in ten seconds. We write for both
              when they exist, and we skip the noun-swapped city pages that
              pretend otherwise.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {values.map((value) => (
                <li key={value.label} className="flex flex-col items-start gap-2.5">
                  <span className="text-sbmc-teal">
                    <value.icon size={24} />
                  </span>
                  <span className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.12em] text-sbmc-navy">
                    {value.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
