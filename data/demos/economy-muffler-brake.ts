import type { DemoData } from './types';

export const economyDemo: DemoData = {
  slug: 'economy-muffler-brake',
  name: "Economy Muffler & Brake",
  crmName: "Economy Muffler & Brake",
  title: "Economy Muffler & Brake · Muffler and brakes in Goleta",
  description: "Economy Muffler & Brake at 5930 Hollister Ave, Goleta, CA 93117. Call (805) 964-3030.",
  listingDescription: "Muffler and brake shop on Hollister Ave.",
  category: "Muffler & brakes",
  city: 'Goleta',
  address: "5930 Hollister Ave, Goleta, CA 93117",
  phone: "(805) 964-3030",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Economy+Muffler+%26+Brake%2C+5930+Hollister+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/economy-muffler-brake/logo-badge.svg',
  logoLight: '/demos/economy-muffler-brake/logo-light.svg',
  logoDark: '/demos/economy-muffler-brake/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "8 AM – 5 PM",
      hoursText: "Mon 8 AM – 5 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "8 AM – 5 PM",
      hoursText: "Tue 8 AM – 5 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "8 AM – 5 PM",
      hoursText: "Wed 8 AM – 5 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "8 AM – 5 PM",
      hoursText: "Thu 8 AM – 5 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "8 AM – 5 PM",
      hoursText: "Fri 8 AM – 5 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "8 AM – 1 PM",
      hoursText: "Sat 8 AM – 1 PM",
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
