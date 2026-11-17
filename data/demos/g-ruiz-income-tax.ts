import type { DemoData } from './types';

export const gRuizDemo: DemoData = {
  slug: 'g-ruiz-income-tax',
  name: "G Ruiz Income Tax",
  crmName: "G Ruiz Income Tax",
  title: "G Ruiz Income Tax · Tax preparation in Goleta",
  description: "G Ruiz Income Tax at 5848 Hollister Ave, Goleta, CA 93117. Call (805) 698-9119.",
  listingDescription: "Tax preparation and notary on Hollister Ave.",
  category: "Tax preparation",
  city: 'Goleta',
  address: "5848 Hollister Ave, Goleta, CA 93117",
  phone: "(805) 698-9119",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=G+Ruiz+Income+Tax%2C+5848+Hollister+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/g-ruiz-income-tax/logo-light.svg',
  logoLight: '/demos/g-ruiz-income-tax/logo-light.svg',
  logoDark: '/demos/g-ruiz-income-tax/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "10 AM to 7 PM",
      hoursText: "Mon 10 AM to 7 PM",
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "10 AM to 7 PM",
      hoursText: "Tue 10 AM to 7 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "10 AM to 7 PM",
      hoursText: "Wed 10 AM to 7 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "10 AM to 7 PM",
      hoursText: "Thu 10 AM to 7 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "10 AM to 7 PM",
      hoursText: "Fri 10 AM to 7 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "10 AM to 5 PM",
      hoursText: "Sat 10 AM to 5 PM",
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
