'use client';

import { useEffect, type RefObject } from 'react';

const REVEAL_SEL =
  '[data-reveal], section > :is(h2, p, .card, figure, img, ul, ol, blockquote), .rv';

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function runCountUp(el: HTMLElement) {
  const raw = el.getAttribute('data-count');
  if (!raw) return;
  const target = Number(raw);
  if (!Number.isFinite(target)) return;
  if (prefersReducedMotion()) {
    el.textContent = raw;
    return;
  }
  const isInt = Number.isInteger(target);
  const duration = 900;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = target * eased;
    el.textContent = isInt ? String(Math.round(value)) : value.toFixed(1);
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = raw;
  };
  requestAnimationFrame(tick);
}

/**
 * Scroll reveal, sticky-header compact state, and count-up for demo pages.
 * Adds `.js-reveal` only from JS so content stays visible without JS.
 */
export function useDemoReveal(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    root.classList.add('js-reveal');

    const onScroll = () => {
      root.classList.toggle('is-scrolled', window.scrollY > 80);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const nodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SEL));
    const filtered = nodes.filter((el) => {
      if (el.closest('.hero h1, .hero .ctas, .hero .cta, h1')) return false;
      if (el.matches('h1')) return false;
      return true;
    });

    // Stagger --i among siblings, capped at 6
    const byParent = new Map<Element | null, HTMLElement[]>();
    for (const el of filtered) {
      const p = el.parentElement;
      const list = byParent.get(p) ?? [];
      list.push(el);
      byParent.set(p, list);
    }
    for (const list of byParent.values()) {
      list.forEach((el, i) => {
        el.style.setProperty('--i', String(Math.min(i, 6)));
        el.classList.add('rv');
      });
    }

    if (prefersReducedMotion()) {
      filtered.forEach((el) => {
        el.classList.add('is-in');
        if (el.hasAttribute('data-count')) runCountUp(el);
      });
      return () => {
        window.removeEventListener('scroll', onScroll);
        root.classList.remove('js-reveal');
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add('is-in');
          if (el.hasAttribute('data-count')) runCountUp(el);
          const nested = el.querySelectorAll<HTMLElement>('[data-count]');
          nested.forEach(runCountUp);
          io.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
    );

    filtered.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      root.classList.remove('js-reveal');
    };
  }, [rootRef]);
}
