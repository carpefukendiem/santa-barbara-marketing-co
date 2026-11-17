import type { DemoData } from './types';

export const jewelryMartDemo: DemoData = {
  slug: 'jewelry-mart',
  name: "The Jewelry Mart",
  crmName: "The Jewelry Mart",
  title: "The Jewelry Mart \u00b7 Custom jewelry and repairs in Goleta",
  description: "Custom design, engagement rings, watch and jewelry repair at 5850 Hollister Ave, Goleta. Call (805) 683-6468.",
  address: "5850 Hollister Ave, Goleta, CA 93117",
  phone: "(805) 683-6468",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Jewelry+Mart%2C+5850+Hollister+Avenue%2C+Goleta%2C+CA+93117",
  logo: "/demos/jewelry-mart/logo-dark.svg",
  showWarrantyLine: false,
  chromeLocale: 'en',
  saturdayHours: "10 AM to 6 PM",
  weekdayHours: "10 AM to 6 PM",
  hours: [
    {
      day: 'Mon',
      label: 'Monday',
      hours: 'Closed',
      hoursText: 'Mon Closed',
      closed: true,
    },
    {
      day: 'Tue',
      label: 'Tuesday',
      hours: '10 AM to 6 PM',
      hoursText: 'Tue 10 AM to 6 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '10 AM to 6 PM',
      hoursText: 'Wed 10 AM to 6 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '10 AM to 6 PM',
      hoursText: 'Thu 10 AM to 6 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: '10 AM to 6 PM',
      hoursText: 'Fri 10 AM to 6 PM',
    },
    {
      day: 'Sat',
      label: 'Saturday',
      hours: '10 AM to 6 PM',
      hoursText: 'Sat 10 AM to 6 PM',
    },
    {
      day: 'Sun',
      label: 'Sunday',
      hours: 'Closed',
      hoursText: 'Sun Closed',
      closed: true,
    }
  ],
};
