import type { DemoData } from './types';

export const hollisterDemo: DemoData = {
  slug: 'hollister-barbershop',
  name: "Hollister Barbershop",
  crmName: "Hollister Barbershop",
  title: "Hollister Barbershop · Barbershop in Goleta",
  description: "Hollister Barbershop at 5879 Hollister Ave, Goleta, CA 93117. Call (805) 324-4914.",
  listingDescription: "Barbershop on Hollister Ave in Goleta.",
  category: "Barbershop",
  city: 'Goleta',
  address: "5879 Hollister Ave, Goleta, CA 93117",
  phone: "(805) 324-4914",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hollister+Barbershop%2C+5879+Hollister+Avenue%2C+Goleta%2C+CA+93117",
  logo: '/demos/hollister-barbershop/logo-dark.svg',
  logoLight: '/demos/hollister-barbershop/logo-light.svg',
  logoDark: '/demos/hollister-barbershop/logo-dark.svg',
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: "Monday",
      hours: "Closed",
      hoursText: "Mon Closed",
      closed: true,
    },
    {
      day: 'Tue',
      label: "Tuesday",
      hours: "10 AM to 8 PM",
      hoursText: "Tue 10 AM to 8 PM",
    },
    {
      day: 'Wed',
      label: "Wednesday",
      hours: "10 AM to 8 PM",
      hoursText: "Wed 10 AM to 8 PM",
    },
    {
      day: 'Thu',
      label: "Thursday",
      hours: "10 AM to 8 PM",
      hoursText: "Thu 10 AM to 8 PM",
    },
    {
      day: 'Fri',
      label: "Friday",
      hours: "10 AM to 8 PM",
      hoursText: "Fri 10 AM to 8 PM",
    },
    {
      day: 'Sat',
      label: "Saturday",
      hours: "9 AM to 4 PM",
      hoursText: "Sat 9 AM to 4 PM",
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
