import type { Resource } from './resources';
import { batch2ResourcesCost } from './_batch2_resources_cost';
import { batch2ResourcesGuides } from './_batch2_resources_guides';
import { batch2ResourcesHowto } from './_batch2_resources_howto';

export const batch2Resources: Resource[] = [
  ...batch2ResourcesCost,
  ...batch2ResourcesHowto,
  ...batch2ResourcesGuides,
];
