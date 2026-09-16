'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { FormField, Honeypot, inputClass } from '@/components/forms/FormField';
import { FormStatus } from '@/components/forms/FormStatus';
import { contactSchema, type ContactInput } from '@/lib/schemas';
import { track } from '@/lib/analytics';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      businessName: '',
      phone: '',
      message: '',
      company_website: '',
      startedAt: 0,
    },
  });

  async function onSubmit(values: ContactInput) {
    setStatus('idle');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, type: 'contact' }),
      });
      const json = (await response.json()) as { ok: boolean; error?: string };
      if (!response.ok || !json.ok) {
        setError(json.error ?? 'Could not send.');
        setStatus('error');
        track('form_error', { form: 'contact' });
        return;
      }
      setStatus('success');
      track('contact_form_submit');
    } catch {
      setError('Could not send.');
      setStatus('error');
      track('form_error', { form: 'contact' });
    }
  }

  if (status === 'success') {
    return <FormStatus state="success" />;
  }

  const submitting = form.formState.isSubmitting;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      noValidate
      className="relative space-y-4 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
      onFocusCapture={() => {
        if (!form.getValues('startedAt')) {
          form.setValue('startedAt', Date.now());
        }
      }}
    >
      {status === 'error' ? <FormStatus state="error" error={error} /> : null}
      <Honeypot inputProps={form.register('company_website')} />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="name" label="Name" required error={form.formState.errors.name?.message}>
          <input id="name" className={inputClass} autoComplete="name" {...form.register('name')} aria-invalid={Boolean(form.formState.errors.name)} aria-describedby={form.formState.errors.name ? 'name-error' : undefined} />
        </FormField>
        <FormField id="email" label="Email" required error={form.formState.errors.email?.message}>
          <input id="email" type="email" className={inputClass} autoComplete="email" {...form.register('email')} aria-invalid={Boolean(form.formState.errors.email)} />
        </FormField>
        <FormField id="businessName" label="Business name" required error={form.formState.errors.businessName?.message}>
          <input id="businessName" className={inputClass} {...form.register('businessName')} />
        </FormField>
        <FormField id="phone" label="Phone" error={form.formState.errors.phone?.message}>
          <input id="phone" type="tel" className={inputClass} autoComplete="tel" {...form.register('phone')} />
        </FormField>
      </div>
      <FormField id="message" label="Message" required error={form.formState.errors.message?.message}>
        <textarea id="message" rows={5} className={inputClass} {...form.register('message')} />
      </FormField>
      <Button type="submit" disabled={submitting} aria-busy={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
