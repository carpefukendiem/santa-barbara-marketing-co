export const HP_VARIANT_COOKIE = 'sbmc_hp_variant' as const;
export const HP_VISITOR_COOKIE = 'sbmc_vid' as const;
export const HP_VARIANT_MAX_AGE = 60 * 60 * 24 * 90; // 90 days
export const HP_VISITOR_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
export const HP_INTERNAL_PREFIX = '/hp' as const;

export const AB_EVENTS = [
  'exposure',
  'start_plan_click',
  'get_started_view',
  'checkout_start',
  'checkout_complete',
  'book_call_click',
  'book_call_view',
  'booking_complete',
] as const;

export type AbEventName = (typeof AB_EVENTS)[number];
