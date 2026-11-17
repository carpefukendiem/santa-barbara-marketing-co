export type DemoSlug =
  | 'dimauros-independent-honda-acura-repair'
  | 'coastal-dentistry'
  | 'precision-motorcycle-service'
  | 'javiers-old-town-garage'
  | 'shear-envy'
  | 'la-guerrerita'
  | 'fairview-mattress-furniture';

export type DemoHourRow = {
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  label: string;
  hours: string;
  hoursText: string;
  closed?: boolean;
};

export type DemoReview = {
  text: string;
  cite: string;
};

export type DemoData = {
  slug: DemoSlug;
  name: string;
  /** Exact CRM deal name for demo-lead business_name (falls back to name). */
  crmName: string;
  title: string;
  description: string;
  address: string;
  /** Display phone; all tel: hrefs must come from telHref(phone). */
  phone: string;
  googleMapsUrl: string;
  /** Path under /public, or null for wordmark */
  logo: string | null;
  /** Dimauro's: keep warranty claims off until Robert OKs */
  showWarrantyLine: boolean;
  warrantyLine?: string;
  hours: DemoHourRow[];
};
