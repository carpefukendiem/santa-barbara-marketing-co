// Add real, permissioned logos or review widgets only. Do not invent entries.

export type TrustItem = {
  id: string;
  label: string;
  icon: 'waves' | 'heart' | 'compass' | 'leaf';
};

export const trustCapabilities: TrustItem[] = [
  { id: 'serving-805', label: 'Serving the 805', icon: 'waves' },
  { id: 'one-roof', label: 'SEO, Ads & Websites Under One Roof', icon: 'compass' },
  { id: 'reporting', label: 'Plain-English Reporting', icon: 'heart' },
  // Only include no-contracts if the business actually operates that way.
  { id: 'no-contracts', label: 'No Long-Term Contracts', icon: 'leaf' },
];

export type TrustLogo = {
  name: string;
  src: string;
  href?: string;
  isPlaceholder: boolean;
};

export const trustLogos: TrustLogo[] = [];

export const hasTrustLogos = trustLogos.length > 0;
