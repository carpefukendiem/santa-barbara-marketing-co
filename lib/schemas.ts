import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80),
  email: z.string().trim().email('Please enter a valid email.'),
  businessName: z.string().trim().min(2, 'Please enter your business name.').max(120),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Please add a short message.').max(2000),
  company_website: z.string().optional(),
  startedAt: z.number(),
});

export const growthPlanSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80),
  businessName: z.string().trim().min(2, 'Please enter your business name.').max(120),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(''))
    .refine(
      (value) => !value || /^https?:\/\//i.test(value) || /^[\w.-]+\.[a-z]{2,}/i.test(value),
      'Enter a website URL, or leave this blank.',
    ),
  email: z.string().trim().email('Please enter a valid email.'),
  phone: z.string().trim().max(30).optional().or(z.literal('')),
  primaryGoal: z.enum([
    'More Calls',
    'More Leads',
    'Better Google Rankings',
    'New Website',
    'Google Ads',
    'Marketing Automation',
    'Not Sure Yet',
  ]),
  challenge: z.string().trim().max(500).optional().or(z.literal('')),
  company_website: z.string().optional(),
  startedAt: z.number(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type GrowthPlanInput = z.infer<typeof growthPlanSchema>;

export const primaryGoals = [
  'More Calls',
  'More Leads',
  'Better Google Rankings',
  'New Website',
  'Google Ads',
  'Marketing Automation',
  'Not Sure Yet',
] as const;
