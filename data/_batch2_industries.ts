import type { Industry } from './industries';
import { batch2IndustriesA } from './_batch2_industries_a';
import { batch2IndustriesB } from './_batch2_industries_b';

export const batch2Industries: Industry[] = [
  ...batch2IndustriesA,
  ...batch2IndustriesB,
];
