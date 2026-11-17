export type DemoSlug =
  | 'dimauros-independent-honda-acura-repair'
  | 'coastal-dentistry'
  | 'precision-motorcycle-service'
  | 'javiers-old-town-garage'
  | 'shear-envy'
  | 'la-guerrerita'
  | 'fairview-mattress-furniture'
  | 'domingos-cafe'
  | 'goleta-bakery'
  | 'jewelry-mart'
  | 'marys-beauty-center'
  | 'maya-income-tax-co'
  | 'ocean-nails-spa'
  | 'star-nails-spa'
  | 'ambiance-nail-care-services'
  | 'fernandos-smog-check'
  | 'airport-motors'
  | 'atlas-muffler-brakes'
  | 'fairview-motors-brakes-alignment'
  | 'economy-muffler-brake'
  | 'kamilas-garage'
  | 'hiens-auto-repair';

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

export type DemoChromeLocale = 'en' | 'es';

export type DemoData = {
  slug: DemoSlug;
  name: string;
  /** Exact CRM deal name for demo-lead business_name (falls back to name). */
  crmName: string;
  title: string;
  description: string;
  /**
   * One-sentence blurb for the /demos index. Factual only — no invented claims.
   * Required so new registry entries appear on the index with useful copy.
   */
  listingDescription: string;
  /** Business category label for the /demos index (e.g. Nail salon). */
  category: string;
  /** City shown on the /demos index (derived from the shop address). */
  city: string;
  address: string;
  /** Display phone; all tel: hrefs must come from telHref(phone). */
  phone: string;
  googleMapsUrl: string;
  /** Path under /public, or null for wordmark. Single-badge logos use this alone. */
  logo: string | null;
  /** Light-background wordmark/logo (Precision). */
  logoLight?: string | null;
  /** Dark-background wordmark/logo (Precision). */
  logoDark?: string | null;
  /** Dimauro's: keep warranty claims off until Robert OKs */
  showWarrantyLine: boolean;
  warrantyLine?: string;
  hours: DemoHourRow[];
  /** Preview bar + modal language. Default English. */
  chromeLocale?: DemoChromeLocale;
  /** Optional html lang on the demo root (e.g. Mary's Spanish-first). */
  lang?: string;
  /** Jewelry Mart: Saturday hours as one editable field. */
  saturdayHours?: string;
  /** Jewelry Mart: Tue–Fri open hours string when shared with Sat display. */
  weekdayHours?: string;
};
