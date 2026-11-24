// Booking / CRM widgets for Santa Barbara Marketing Co.
// Served on the sbmc.io link domain.
const ORIGIN = 'https://link.sbmc.io';
const DEFAULT_CALENDAR_ID = 'uWQ1f6dLxRJidjeDn7Cx';
const DEFAULT_SCHEDULING_PATH =
  '/widget/bookings/discovery-call-8649-2c7fe6b5-688f-41f3-ae6a-652d37173678';

export const booking = {
  calendarId: process.env.NEXT_PUBLIC_GHL_CALENDAR_ID || DEFAULT_CALENDAR_ID,
  origin: ORIGIN,
  embedSrc: `${ORIGIN}/widget/booking/${process.env.NEXT_PUBLIC_GHL_CALENDAR_ID || DEFAULT_CALENDAR_ID}`,
  schedulingUrl:
    process.env.NEXT_PUBLIC_GHL_BOOKING_URL || `${ORIGIN}${DEFAULT_SCHEDULING_PATH}`,
  scriptSrc: `${ORIGIN}/js/form_embed.js`,
} as const;
