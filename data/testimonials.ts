// Add real, permissioned client data only. Do not invent entries.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  business: string;
  location: string;
  isPlaceholder: boolean;
};

export const testimonials: Testimonial[] = [];

export const hasTestimonials = testimonials.length > 0;

/*
Example (do not uncomment until the client has given written permission):

{
  quote: 'A specific result in the client's words.',
  name: 'First Last',
  role: 'Owner',
  business: 'Business Name',
  location: 'Santa Barbara',
  isPlaceholder: false,
}
*/
