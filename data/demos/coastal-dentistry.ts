import type { DemoData } from './types';

const slug = 'coastal-dentistry' as const;

export const coastalDentistryDemo: DemoData = {
  slug,
  name: 'Coastal Dentistry',
  crmName: 'Coastal Dentistry',
  title: 'Coastal Dentistry · Dr. Loan Su, Goleta dentist',
  description:
    'Dr. Loan Su, general dentistry and cleanings at 5973 Encina Rd #108, Goleta. Call (805) 683-3801.',
  listingDescription: "General dentistry and cleanings with Dr. Loan Su in Goleta.",
  category: "Dentistry",
  city: "Goleta",
  address: '5973 Encina Rd #108, Goleta, CA 93117',
  phone: '(805) 683-3801',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Coastal+Dentistry%2C+5973+Encina+Road+108%2C+Goleta%2C+CA+93117',
  logo: null,
  showWarrantyLine: false,
  hours: [
    {
      day: 'Mon',
      label: 'Monday',
      hours: '9 AM – 6 PM',
      hoursText: 'Mon 9 AM – 6 PM',
    },
    {
      day: 'Tue',
      label: 'Tuesday',
      hours: '9 AM – 6 PM',
      hoursText: 'Tue 9 AM – 6 PM',
    },
    {
      day: 'Wed',
      label: 'Wednesday',
      hours: '9 AM – 6 PM',
      hoursText: 'Wed 9 AM – 6 PM',
    },
    {
      day: 'Thu',
      label: 'Thursday',
      hours: '9 AM – 6 PM',
      hoursText: 'Thu 9 AM – 6 PM',
    },
    {
      day: 'Fri',
      label: 'Friday',
      hours: '9 AM – 6 PM',
      hoursText: 'Fri 9 AM – 6 PM',
    },
    {
      day: 'Sat',
      label: 'Saturday',
      hours: 'Closed',
      hoursText: 'Sat Closed',
      closed: true,
    },
    {
      day: 'Sun',
      label: 'Sunday',
      hours: 'Closed',
      hoursText: 'Sun Closed',
      closed: true,
    },
  ],
};
