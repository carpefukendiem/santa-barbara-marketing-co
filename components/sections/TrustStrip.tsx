import { CheckCircle2, FileText, Map, Layers } from 'lucide-react';
import { IconCircle } from '@/components/ui/IconCircle';
import { Reveal } from '@/components/ui/Reveal';
import { trustCapabilities } from '@/data/trust';
import type { LucideIcon } from 'lucide-react';

const icons: Record<(typeof trustCapabilities)[number]['icon'], LucideIcon> = {
  waves: Map,
  compass: Layers,
  heart: FileText,
  leaf: CheckCircle2,
};

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-sand">
      <Reveal>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-line">
          {trustCapabilities.map((item) => (
            <p
              key={item.id}
              className="flex items-center gap-3 px-2 text-sm font-medium text-navy md:px-5"
            >
              <IconCircle icon={icons[item.icon]} />
              {item.label}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
