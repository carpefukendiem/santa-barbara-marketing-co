'use client';

import Script from 'next/script';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { site } from '@/data/site';

const BookCallContext = createContext<{
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}>({ open: false, openModal: () => undefined, closeModal: () => undefined });

export function useBookCall() {
  return useContext(BookCallContext);
}

export function BookCallProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, closeModal]);

  return (
    <BookCallContext.Provider value={{ open, openModal, closeModal }}>
      {children}
      {open ? <BookCallModal onClose={closeModal} /> : null}
    </BookCallContext.Provider>
  );
}

export function GhlCalendarEmbed({ className }: { className?: string }) {
  const calendarId = process.env.NEXT_PUBLIC_GHL_CALENDAR_ID;
  if (!calendarId) {
    return (
      <p className={className}>
        Calendar is not configured. Email {site.email} to book a call.
      </p>
    );
  }
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${calendarId}`}
        title="Book a free call"
        className={className ?? 'w-full min-h-[760px] border-0'}
        loading="lazy"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}

function BookCallModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-navy/70 p-4 pt-16 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-title"
    >
      <div className="relative w-full max-w-4xl bg-cream">
        <div className="flex items-center justify-between border-b border-rule px-6 py-4">
          <h2 id="book-call-title" className="font-display text-2xl text-ink">
            Book a Free Call
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-[0.16em] text-stone"
          >
            Close
          </button>
        </div>
        <GhlCalendarEmbed />
      </div>
    </div>
  );
}

export function BookCallButton({
  children,
  className,
  variant = 'primary',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'inverted';
}) {
  const { openModal } = useBookCall();

  return (
    <button
      type="button"
      className={className}
      data-variant={variant}
      onClick={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches) {
          openModal();
          return;
        }
        window.location.href = '/book-a-call';
      }}
    >
      {children}
    </button>
  );
}
