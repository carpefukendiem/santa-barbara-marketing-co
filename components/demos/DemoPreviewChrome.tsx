'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { telHref } from '@/lib/utils';

const FALLBACK_PHONE = '(805) 307-7600';
const FALLBACK_TEL = telHref(FALLBACK_PHONE);

type DemoPreviewChromeProps = {
  businessName: string;
  /** Exact CRM deal name sent as business_name in the lead payload. */
  crmName: string;
  businessSlug: string;
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function storageKey(slug: string) {
  return `sbmc-demo-bar-dismissed:${slug}`;
}

export function DemoPreviewChrome({
  businessName,
  crmName,
  businessSlug,
}: DemoPreviewChromeProps) {
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
      setErrorMessage('Name and phone are required.');
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
        setErrorMessage(
          `Couldn't send. Call or text ${FALLBACK_PHONE}.`,
        );
        return;
      }

      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMessage(`Couldn't send. Call or text ${FALLBACK_PHONE}.`);
    }
  }

  if (!visible) return null;

  return (
    <>
      <div className="sbmc-demo-bar" role="region" aria-label="Demo preview">
        <p className="sbmc-demo-bar__text">
          Free preview built for {businessName} by Santa Barbara Marketing Co.
        </p>
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
            Make it mine
          </button>
          <button
            type="button"
            className="sbmc-demo-bar__dismiss"
            aria-label="Dismiss preview bar"
            onClick={dismiss}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="sbmc-demo-modal"
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
            <h2 id={titleId}>Make this site yours</h2>
            <button
              type="button"
              className="sbmc-demo-modal__close"
              aria-label="Close"
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
            Tell us how to reach you about {businessName}.
          </p>

          {formState === 'success' ? (
            <p className="sbmc-demo-modal__success" role="status">
              Thanks, we&apos;ll reach out soon.
            </p>
          ) : (
            <form className="sbmc-demo-modal__form" onSubmit={onSubmit} noValidate>
              <label>
                <span>Name</span>
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
                <span>Phone</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  disabled={formState === 'submitting'}
                />
              </label>
              <label>
                <span>Best time to reach you</span>
                <select name="best_time" disabled={formState === 'submitting'} defaultValue="">
                  <option value="">Select…</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </label>
              <label>
                <span>Note (optional)</span>
                <textarea
                  name="note"
                  rows={3}
                  disabled={formState === 'submitting'}
                />
              </label>
              <label className="sbmc-demo-hp" aria-hidden="true">
                <span>Company website</span>
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
                {formState === 'submitting' ? 'Sending…' : 'Send'}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
