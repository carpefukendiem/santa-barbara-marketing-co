import type { DemoData } from './types';

export const airportDemo: DemoData = {
  slug: 'airport-motors',
  name: "Airport Motors",
  crmName: "Airport Motors",
  title: "Airport Motors · Family auto repair in Goleta since 1982",
  description: "Airport Motors at 5950 Olney St, Goleta, CA 93117. Call (805) 681-7297.",
  listingDescription: "Family auto repair in Goleta since 1982.",
  category: "Auto repair",
  city: 'Goleta',
  address: "5950 Olney St, Goleta, CA 93117",
  phone: "(805) 681-7297",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Airport+Motors%2C+5950+Olney+Street%2C+Goleta%2C+CA+93117",
  logo: '/demos/airport-motors/logo-light.svg',
  logoLight: '/demos/airport-motors/logo-light.svg',
  logoDark: '/demos/airport-motors/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "7 AM – 5:30 PM",
      hoursText: "Mon 7 AM – 5:30 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "7 AM – 5:30 PM",
      hoursText: "Tue 7 AM – 5:30 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "7 AM – 5:30 PM",
      hoursText: "Wed 7 AM – 5:30 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "7 AM – 5:30 PM",
      hoursText: "Thu 7 AM – 5:30 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "7 AM – 1 PM",
      hoursText: "Fri 7 AM – 1 PM",
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
