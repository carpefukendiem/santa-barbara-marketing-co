import type { DemoData } from './types';

export const fernandosDemo: DemoData = {
  slug: 'fernandos-smog-check',
  name: "Fernando's Smog Check",
  crmName: "Fernando's Smog Check",
  title: "Fernando's Smog Check · Smog checks in Goleta",
  description: "Fernando's Smog Check at 5940 Olney St #101, Goleta, CA 93117. Call (805) 284-7103.",
  listingDescription: "Smog checks at Olney St in Goleta.",
  category: "Smog check",
  city: 'Goleta',
  address: "5940 Olney St #101, Goleta, CA 93117",
  phone: "(805) 284-7103",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fernando%27s+Smog+Check%2C+5940+Olney+Street%2C+Goleta%2C+CA+93117",
  logo: '/demos/fernandos-smog-check/logo-light.svg',
  logoLight: '/demos/fernandos-smog-check/logo-light.svg',
  logoDark: '/demos/fernandos-smog-check/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "8 AM – 4:30 PM",
      hoursText: "Mon 8 AM – 4:30 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "8 AM – 4:30 PM",
      hoursText: "Tue 8 AM – 4:30 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "8 AM – 4:30 PM",
      hoursText: "Wed 8 AM – 4:30 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "8 AM – 4:30 PM",
      hoursText: "Thu 8 AM – 4:30 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "8 AM – 4:30 PM",
      hoursText: "Fri 8 AM – 4:30 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "Closed",
      hoursText: "Sat Closed",
      closed: true,
    },
    {
      day: 'Sun',
      label: "Sunday",
      hours: "Closed",
      hoursText: "Sun Closed",
      closed: true,
    }
  ],
};
