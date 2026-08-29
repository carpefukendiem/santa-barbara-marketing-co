// Add real, permissioned client data only. Do not invent entries.

export type CaseStudyMetric = {
  label: string;
  value: string;
  note?: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  services: string[];
  challenge: string;
  approach: string;
  whatWeBuilt: string;
  outcome: string;
  timeline: string;
  metrics: CaseStudyMetric[];
  testimonialSlug?: string;
  isPlaceholder: boolean;
};

export const caseStudies: CaseStudy[] = [];

export const hasCaseStudies = caseStudies.length > 0;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/*
Example (do not uncomment until numbers are verified and the client has approved publication):

{
  slug: 'example-client',
  client: 'Example Business',
  industry: 'Home Services',
  location: 'Goleta',
  services: ['local-seo', 'web-design'],
  challenge: 'What was broken, in plain language.',
  approach: 'What we actually did.',
  whatWeBuilt: 'The pages, tracking, and follow-up we put in place.',
  outcome: 'What changed, only if it can be shown.',
  timeline: '90 days',
  metrics: [{ label: 'Qualified calls', value: 'Verified number' }],
  isPlaceholder: false,
}
*/
