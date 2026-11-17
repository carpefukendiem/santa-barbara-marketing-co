import { ambianceDemo } from './ambiance-nail-care-services';
import { coastalDentistryDemo } from './coastal-dentistry';
import { dimaurosDemo } from './dimauros-independent-honda-acura-repair';
import { domingosDemo } from './domingos-cafe';
import { fairviewDemo } from './fairview-mattress-furniture';
import { goletaBakeryDemo } from './goleta-bakery';
import { javiersDemo } from './javiers-old-town-garage';
import { jewelryMartDemo } from './jewelry-mart';
import { laGuerreritaDemo } from './la-guerrerita';
import { marysDemo } from './marys-beauty-center';
import { mayaDemo } from './maya-income-tax-co';
import { oceanNailsDemo } from './ocean-nails-spa';
import { precisionMotorcycleDemo } from './precision-motorcycle-service';
import { shearEnvyDemo } from './shear-envy';
import { starNailsDemo } from './star-nails-spa';
import type { DemoData, DemoSlug } from './types';

export type { DemoChromeLocale, DemoData, DemoHourRow, DemoReview, DemoSlug } from './types';

const demos = {
  [dimaurosDemo.slug]: dimaurosDemo,
  [coastalDentistryDemo.slug]: coastalDentistryDemo,
  [precisionMotorcycleDemo.slug]: precisionMotorcycleDemo,
  [javiersDemo.slug]: javiersDemo,
  [shearEnvyDemo.slug]: shearEnvyDemo,
  [laGuerreritaDemo.slug]: laGuerreritaDemo,
  [fairviewDemo.slug]: fairviewDemo,
  [domingosDemo.slug]: domingosDemo,
  [goletaBakeryDemo.slug]: goletaBakeryDemo,
  [jewelryMartDemo.slug]: jewelryMartDemo,
  [marysDemo.slug]: marysDemo,
  [mayaDemo.slug]: mayaDemo,
  [oceanNailsDemo.slug]: oceanNailsDemo,
  [starNailsDemo.slug]: starNailsDemo,
  [ambianceDemo.slug]: ambianceDemo,
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
