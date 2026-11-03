// Santa Barbara Marketing Co. GHL location `yDnbD2jIOGjslYuMeUok`.
// Widgets are served on the Ranking SB agency domain until this location has its own booking host.
const ORIGIN = 'https://link.rankingsb.com';
const DEFAULT_CALENDAR_ID = 'Zzp5TRRTwptdDEdra1wZ';
const DEFAULT_SCHEDULING_PATH = '/widget/bookings/discovery-call-8649';

export const booking = {
  calendarId: process.env.NEXT_PUBLIC_GHL_CALENDAR_ID || DEFAULT_CALENDAR_ID,
  origin: ORIGIN,
  embedSrc: `${ORIGIN}/widget/booking/${process.env.NEXT_PUBLIC_GHL_CALENDAR_ID || DEFAULT_CALENDAR_ID}`,
  schedulingUrl:
    process.env.NEXT_PUBLIC_GHL_BOOKING_URL || `${ORIGIN}${DEFAULT_SCHEDULING_PATH}`,
  scriptSrc: `${ORIGIN}/js/form_embed.js`,
} as const;
