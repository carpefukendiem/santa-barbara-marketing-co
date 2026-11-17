'use client';

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { DemoChromeLocale } from '@/data/demos/types';
import { telHref } from '@/lib/utils';

const FALLBACK_PHONE = '(805) 307-7600';
const FALLBACK_TEL = telHref(FALLBACK_PHONE);

type DemoPreviewChromeProps = {
  businessName: string;
  /** Exact CRM deal name sent as business_name in the lead payload. */
  crmName: string;
  businessSlug: string;
  locale?: DemoChromeLocale;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type Copy = {
  barAria: string;
  barText: (name: string) => string;
  cta: ReactNode;
  dismissAria: string;
  title: ReactNode;
  closeAria: string;
  lead: (name: string) => ReactNode;
  success: ReactNode;
  name: ReactNode;
  phone: ReactNode;
  bestTime: ReactNode;
  select: string;
  morning: string;
  afternoon: string;
  evening: string;
  anytime: string;
  note: ReactNode;
  companyWebsite: string;
  requiredError: string;
  sendError: string;
  sending: string;
  send: string;
};

const EN: Copy = {
  barAria: 'Demo preview',
  barText: (name) =>
    `Free preview built for ${name} by Santa Barbara Marketing Co.`,
  cta: 'Make it mine',
  dismissAria: 'Dismiss preview bar',
  title: 'Make this site yours',
  closeAria: 'Close',
  lead: (name) => <>Tell us how to reach you about {name}.</>,
  success: <>Thanks, we&apos;ll reach out soon.</>,
  name: 'Name',
  phone: 'Phone',
  bestTime: 'Best time to reach you',
  select: 'Select…',
  morning: 'Morning',
  afternoon: 'Afternoon',
  evening: 'Evening',
  anytime: 'Anytime',
  note: 'Note (optional)',
  companyWebsite: 'Company website',
  requiredError: 'Name and phone are required.',
  sendError: `Couldn't send. Call or text ${FALLBACK_PHONE}.`,
  sending: 'Sending…',
  send: 'Send',
};

const ES: Copy = {
  barAria: 'Vista previa del demo',
  barText: (name) =>
    `Vista previa gratis hecha para ${name} por Santa Barbara Marketing Co.`,
  cta: (
    <>
      Hazla mía<small lang="en">Make it mine</small>
    </>
  ),
  dismissAria: 'Cerrar la barra de vista previa',
  title: (
    <>
      Haz tuyo este sitio <small lang="en">Make this site yours</small>
    </>
  ),
  closeAria: 'Cerrar',
  lead: (name) => (
    <>
      Dinos cómo contactarte sobre {name}.{' '}
      <span lang="en">Tell us how to reach you about {name}.</span>
    </>
  ),
  success: (
    <>
      Gracias, te contactaremos pronto.{' '}
      <span lang="en">Thanks, we&apos;ll reach out soon.</span>
    </>
  ),
  name: (
    <>
      Nombre <small lang="en">Name</small>
    </>
  ),
  phone: (
    <>
      Teléfono <small lang="en">Phone</small>
    </>
  ),
  bestTime: (
    <>
      Mejor hora para llamarte <small lang="en">Best time to reach you</small>
    </>
  ),
  select: 'Elegir…',
  morning: 'Mañana / Morning',
  afternoon: 'Tarde / Afternoon',
  evening: 'Noche / Evening',
  anytime: 'Cuando sea / Anytime',
  note: (
    <>
      Nota (opcional) <small lang="en">Note (optional)</small>
    </>
  ),
  companyWebsite: 'Sitio web de la empresa',
  requiredError: 'Nombre y teléfono son obligatorios. / Name and phone are required.',
  sendError: `No se pudo enviar. Llama o escribe al ${FALLBACK_PHONE}.`,
  sending: 'Enviando…',
  send: 'Enviar',
};

function storageKey(slug: string) {
  return `sbmc-demo-bar-dismissed:${slug}`;
}

export function DemoPreviewChrome({
  businessName,
  crmName,
  businessSlug,
  locale = 'en',
}: DemoPreviewChromeProps) {
  const copy = locale === 'es' ? ES : EN;
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey(businessSlug)) === '1') {
        document.documentElement.dataset.demoBar = 'off';
        setVisible(false);
        return;
      }
    } catch {
      // sessionStorage may be blocked
    }
    document.documentElement.dataset.demoBar = 'on';
    setVisible(true);
    return () => {
      delete document.documentElement.dataset.demoBar;
    };
  }, [businessSlug]);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(storageKey(businessSlug), '1');
    } catch {
      // ignore
    }
    document.documentElement.dataset.demoBar = 'off';
    setVisible(false);
    setModalOpen(false);
  }, [businessSlug]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (modalOpen) {
      if (!dialog.open) dialog.showModal();
      firstFieldRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setModalOpen(false);
        setFormState('idle');
        setErrorMessage('');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get('company_website') ?? '').trim()) {
      setFormState('success');
      return;
    }

    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const bestTime = String(data.get('best_time') ?? '').trim();
    const note = String(data.get('note') ?? '').trim();

    if (!name || !phone) {
      setFormState('error');
      setErrorMessage(copy.requiredError);
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/demo-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          best_time: bestTime,
          note,
          business_slug: businessSlug,
          business_name: crmName || businessName,
          demo_url:
            typeof window !== 'undefined' ? window.location.href : undefined,
          company_website: String(data.get('company_website') ?? ''),
        }),
      });

      if (!res.ok) {
        setFormState('error');
        setErrorMessage(copy.sendError);
        return;
      }

      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMessage(copy.sendError);
    }
  }

  if (!visible) return null;

  return (
    <>
      <div
        className="sbmc-demo-bar"
        role="region"
        aria-label={copy.barAria}
        lang={locale}
      >
        <p className="sbmc-demo-bar__text">{copy.barText(businessName)}</p>
        <div className="sbmc-demo-bar__actions">
          <button
            type="button"
            className="sbmc-demo-bar__cta"
            onClick={() => {
              setFormState('idle');
              setErrorMessage('');
              setModalOpen(true);
            }}
          >
            {copy.cta}
          </button>
          <button
            type="button"
            className="sbmc-demo-bar__dismiss"
            aria-label={copy.dismissAria}
            onClick={dismiss}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="sbmc-demo-modal"
        lang={locale}
        aria-labelledby={titleId}
        aria-describedby={descId}
        onClose={() => {
          setModalOpen(false);
          setFormState('idle');
          setErrorMessage('');
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            setModalOpen(false);
            setFormState('idle');
            setErrorMessage('');
          }
        }}
      >
        <div className="sbmc-demo-modal__panel">
          <div className="sbmc-demo-modal__head">
            <h2 id={titleId}>{copy.title}</h2>
            <button
              type="button"
              className="sbmc-demo-modal__close"
              aria-label={copy.closeAria}
              onClick={() => {
                setModalOpen(false);
                setFormState('idle');
                setErrorMessage('');
              }}
            >
              ×
            </button>
          </div>
          <p id={descId} className="sbmc-demo-modal__lead">
            {copy.lead(businessName)}
          </p>

          {formState === 'success' ? (
            <p className="sbmc-demo-modal__success" role="status">
              {copy.success}
            </p>
          ) : (
            <form className="sbmc-demo-modal__form" onSubmit={onSubmit} noValidate>
              <label>
                <span>{copy.name}</span>
                <input
                  ref={firstFieldRef}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={formState === 'submitting'}
                />
              </label>
              <label>
                <span>{copy.phone}</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  disabled={formState === 'submitting'}
                />
              </label>
              <label>
                <span>{copy.bestTime}</span>
                <select name="best_time" disabled={formState === 'submitting'} defaultValue="">
                  <option value="">{copy.select}</option>
                  <option value="Morning">{copy.morning}</option>
                  <option value="Afternoon">{copy.afternoon}</option>
                  <option value="Evening">{copy.evening}</option>
                  <option value="Anytime">{copy.anytime}</option>
                </select>
              </label>
              <label>
                <span>{copy.note}</span>
                <textarea
                  name="note"
                  rows={3}
                  disabled={formState === 'submitting'}
                />
              </label>
              <label className="sbmc-demo-hp" aria-hidden="true">
                <span>{copy.companyWebsite}</span>
                <input
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
              {formState === 'error' ? (
                <p className="sbmc-demo-modal__error" role="alert">
                  {errorMessage}{' '}
                  <a href={FALLBACK_TEL}>{FALLBACK_PHONE}</a>
                </p>
              ) : null}
              <button
                type="submit"
                className="sbmc-demo-modal__submit"
                disabled={formState === 'submitting'}
              >
                {formState === 'submitting' ? copy.sending : copy.send}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
