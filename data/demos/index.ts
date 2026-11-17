import { coastalDentistryDemo } from './coastal-dentistry';
import { dimaurosDemo } from './dimauros-independent-honda-acura-repair';
import { fairviewDemo } from './fairview-mattress-furniture';
import { javiersDemo } from './javiers-old-town-garage';
import { laGuerreritaDemo } from './la-guerrerita';
import { precisionMotorcycleDemo } from './precision-motorcycle-service';
import { shearEnvyDemo } from './shear-envy';
import type { DemoData, DemoSlug } from './types';

export type { DemoData, DemoHourRow, DemoReview, DemoSlug } from './types';

const demos = {
  [dimaurosDemo.slug]: dimaurosDemo,
  [coastalDentistryDemo.slug]: coastalDentistryDemo,
  [precisionMotorcycleDemo.slug]: precisionMotorcycleDemo,
  [javiersDemo.slug]: javiersDemo,
  [shearEnvyDemo.slug]: shearEnvyDemo,
  [laGuerreritaDemo.slug]: laGuerreritaDemo,
  [fairviewDemo.slug]: fairviewDemo,
} as const satisfies Record<string, DemoData>;

export function getDemo(slug: string): DemoData | undefined {
  if (slug in demos) {
    return demos[slug as DemoSlug];
  }
  return undefined;
}

export function getAllDemoSlugs(): DemoSlug[] {
  return Object.keys(demos) as DemoSlug[];
}

export { demos };
