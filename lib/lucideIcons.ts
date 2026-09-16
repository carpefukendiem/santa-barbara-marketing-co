import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BarChart3,
  Bot,
  Cog,
  Globe,
  LineChart,
  MapPin,
  Megaphone,
  MessageCircle,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import type { ServiceIconName } from '@/data/services';

export const lucideByServiceIcon: Record<ServiceIconName, LucideIcon> = {
  'local-seo': Search,
  'google-ads': Megaphone,
  websites: Globe,
  'social-media': MessageCircle,
  automations: Cog,
  strategy: LineChart,
};

export const lucideByServiceSlug: Record<string, LucideIcon> = {
  'local-seo': Search,
  seo: Search,
  'google-ads': Megaphone,
  'google-business-profile': MapPin,
  'web-design': Globe,
  'conversion-optimization': Target,
  'social-media': MessageCircle,
  'marketing-automation': Cog,
  'ai-automation': Bot,
  analytics: BarChart3,
  strategy: LineChart,
};

export function serviceLucide(slug: string, icon?: ServiceIconName): LucideIcon {
  return lucideByServiceSlug[slug] ?? (icon ? lucideByServiceIcon[icon] : Sparkles);
}

export { Award, MapPin, Megaphone, Search, Target };
