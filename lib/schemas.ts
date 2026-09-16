import { z } from 'zod';

const honeypot = z.object({
  company_website: z.string().max(0).optional().or(z.literal('')),
});

export const interestSchema = z.enum(['digital', 'print', 'both', 'unsure']);

export const contactSchema = z
  .object({
    name: z.string().trim().min(2, 'Name is required.').max(120),
    email: z.string().trim().email('Enter a valid email.'),
    phone: z.string().trim().max(40).optional().or(z.literal('')),
    businessName: z.string().trim().min(2, 'Business name is required.').max(160),
    message: z.string().trim().min(8, 'A short message is required.').max(4000),
    interest: interestSchema,
    pagePath: z.string().trim().max(200).optional().or(z.literal('')),
    startedAt: z.number().int().positive(),
  })
  .merge(honeypot);

export type ContactInput = z.infer<typeof contactSchema>;
