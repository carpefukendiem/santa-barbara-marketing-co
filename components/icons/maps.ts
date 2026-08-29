import type { ComponentType } from 'react';
import type { IconProps } from '@/components/icons';
import {
  IconAutomations,
  IconCompass,
  IconGoogleAds,
  IconHeart,
  IconLeaf,
  IconLocalSeo,
  IconSocialMedia,
  IconStrategy,
  IconWaves,
  IconWebsites,
} from '@/components/icons';
import type { ServiceIconName } from '@/data/services';
import type { TrustItem } from '@/data/trust';

export const serviceIconMap: Record<
  ServiceIconName,
  ComponentType<IconProps>
> = {
  'local-seo': IconLocalSeo,
  'google-ads': IconGoogleAds,
  websites: IconWebsites,
  'social-media': IconSocialMedia,
  automations: IconAutomations,
  strategy: IconStrategy,
};

export const trustIconMap: Record<
  TrustItem['icon'],
  ComponentType<IconProps>
> = {
  waves: IconWaves,
  heart: IconHeart,
  compass: IconCompass,
  leaf: IconLeaf,
};
