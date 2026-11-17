import type { DemoData } from './types';

export const imperialDemo: DemoData = {
  slug: 'the-imperial',
  name: "The Imperial",
  crmName: "The Imperial",
  title: "The Imperial · Cocktail lounge in Goleta",
  description: "The Imperial at 320 S Kellogg Ave, Goleta, CA 93117. Call (805) 967-3001.",
  listingDescription: "Cocktail lounge on Kellogg Ave in Goleta.",
  category: "Cocktail bar",
  city: 'Goleta',
  address: "320 S Kellogg Ave, Goleta, CA 93117",
  phone: "(805) 967-3001",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Imperial%2C+320+South+Kellogg+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/the-imperial/logo-light.svg',
  logoLight: '/demos/the-imperial/logo-light.svg',
  logoDark: '/demos/the-imperial/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "5 PM to 12 AM",
      hoursText: "Mon 5 PM to 12 AM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "5 PM to 12 AM",
      hoursText: "Tue 5 PM to 12 AM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "5 PM to 1 AM",
      hoursText: "Wed 5 PM to 1 AM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "5 PM to 1 AM",
      hoursText: "Thu 5 PM to 1 AM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "5 PM to 1 AM",
      hoursText: "Fri 5 PM to 1 AM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "5 PM to 1 AM",
      hoursText: "Sat 5 PM to 1 AM",
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
