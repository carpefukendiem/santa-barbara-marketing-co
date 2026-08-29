'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { FormField, Honeypot, inputClass } from '@/components/forms/FormField';
import { FormStatus } from '@/components/forms/FormStatus';
import { growthPlanSchema, primaryGoals, type GrowthPlanInput } from '@/lib/schemas';
import { track } from '@/lib/analytics';

export function GrowthPlanForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const form = useForm<GrowthPlanInput>({
    resolver: zodResolver(growthPlanSchema),
    defaultValues: {
      name: '',
      businessName: '',
      website: '',
      email: '',
      phone: '',
      primaryGoal: 'Not Sure Yet',
      challenge: '',
      company_website: '',
      startedAt: 0,
    },
  });

  async function onSubmit(values: GrowthPlanInput) {
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, type: 'growth-plan' }),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setError(json.error ?? 'Could not send.');
        setStatus('error');
        track('form_error', { form: 'growth-plan' });
        return;
      }
      setStatus('success');
      track('growth_plan_submit');
    } catch {
      setError('Could not send.');
      setStatus('error');
      track('form_error', { form: 'growth-plan' });
    }
  }

  if (status === 'success') return <FormStatus state="success" />;

  const submitting = form.formState.isSubmitting;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="relative space-y-4"
      onFocusCapture={() => {
        if (!form.getValues('startedAt')) {
          form.setValue('startedAt', Date.now());
        }
      }}
    >
      {status === 'error' ? <FormStatus state="error" error={error} /> : null}
      <Honeypot inputProps={form.register('company_website')} />
      <FormField id="gp-name" label="Name" required error={form.formState.errors.name?.message}>
        <input id="gp-name" className={inputClass} autoComplete="name" {...form.register('name')} />
      </FormField>
      <FormField id="gp-business" label="Business name" required error={form.formState.errors.businessName?.message}>
        <input id="gp-business" className={inputClass} {...form.register('businessName')} />
      </FormField>
      <FormField id="gp-website" label="Website" error={form.formState.errors.website?.message}>
        <input id="gp-website" className={inputClass} placeholder="https://" {...form.register('website')} />
      </FormField>
      <FormField id="gp-email" label="Email" required error={form.formState.errors.email?.message}>
        <input id="gp-email" type="email" className={inputClass} autoComplete="email" {...form.register('email')} />
      </FormField>
      <FormField id="gp-phone" label="Phone" error={form.formState.errors.phone?.message}>
        <input id="gp-phone" type="tel" className={inputClass} autoComplete="tel" {...form.register('phone')} />
      </FormField>
      <FormField id="gp-goal" label="Primary goal" required error={form.formState.errors.primaryGoal?.message}>
        <select id="gp-goal" className={inputClass} {...form.register('primaryGoal')}>
          {primaryGoals.map((goal) => (
            <option key={goal} value={goal}>
              {goal}
            </option>
          ))}
        </select>
      </FormField>
      <FormField id="gp-challenge" label="Biggest marketing challenge" error={form.formState.errors.challenge?.message}>
        <textarea id="gp-challenge" rows={4} maxLength={500} className={inputClass} {...form.register('challenge')} />
      </FormField>
      <Button type="submit" disabled={submitting} aria-busy={submitting} className="w-full">
        {submitting ? 'Sending…' : 'Get my growth plan'}
      </Button>
    </form>
  );
}
