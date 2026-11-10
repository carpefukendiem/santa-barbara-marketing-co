import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { photos } from '@/data/images';
import styles from './hero-atf.module.css';

type IncludedItem = {
  name: string;
  description: string;
};

const recap = [
  'Website + full CRM',
  'Email & text follow-up',
  'Website chat',
  'App setup + training',
  'Local SEO + reviews',
  'Monthly reporting',
] as const;

const crmItems: IncludedItem[] = [
  {
    name: 'Full CRM',
    description:
      'Contacts, conversations, and customer history in one place, set up under your name',
  },
  {
    name: 'Pipelines',
    description: 'See every lead and where they stand',
  },
  {
    name: 'Booking and calendars',
    description: 'Customers can schedule with you',
  },
  {
    name: 'Email marketing',
    description: 'Plus automated email follow-ups',
  },
  {
    name: 'Texting and missed-call text-back',
    description: 'If you miss a call, they get a text',
  },
  {
    name: 'Website chat',
    description: 'Visitors can message you from the site',
  },
  {
    name: 'Forms',
    description: 'Capture leads on the site',
  },
  {
    name: 'Automations',
    description: 'Follow-up that runs without you chasing it',
  },
  {
    name: 'Review requests',
    description: 'Ask happy customers for reviews',
  },
  {
    name: 'Reporting',
    description: 'See activity from your own account',
  },
  {
    name: 'Mobile app',
    description: 'We set it up and train you',
  },
];

const doneItems: IncludedItem[] = [
  {
    name: 'Custom website',
    description: 'Fully integrated and connected to the CRM',
  },
  {
    name: 'First review request or offer blast',
    description: 'Sent to your customer list',
  },
  {
    name: 'Monthly reporting',
    description: 'We walk you through what’s working',
  },
  {
    name: 'Local SEO',
    description: 'Show up locally',
  },
];

type Step =
  | { kind: 'plain'; lead: string; body: string }
  | { kind: 'addons'; lead: string };

const steps: Step[] = [
  {
    kind: 'plain',
    lead: 'Start the plan or book a call.',
    body: ' Secure checkout by Stripe, or talk it through first.',
  },
  {
    kind: 'plain',
    lead: 'We come meet you.',
    body: ' A local team, in person, to learn the business.',
  },
  {
    kind: 'addons',
    lead: 'Optional add-ons, if you want them.',
  },
  {
    kind: 'plain',
    lead: 'We set it all up.',
    body: ' Website, full CRM, follow-up, and the app — then we train you.',
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className={styles.arrow} width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="10.5"
        width="16"
        height="11"
        rx="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5V7a4 4 0 0 1 8 0v3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z"
      />
    </svg>
  );
}

function IncludedRow({ item }: { item: IncludedItem }) {
  return (
    <li className={styles.row}>
      <span className={styles.check}>
        <CheckIcon />
      </span>
      <p className={styles.rowText}>
        <span className={styles.itemName}>{item.name}</span>
        <span className={styles.itemDesc}> — {item.description}</span>
      </p>
    </li>
  );
}

function Group({
  title,
  aside,
  items,
  plus,
  next = false,
}: {
  title: string;
  aside: string;
  items: IncludedItem[];
  plus?: string;
  next?: boolean;
}) {
  return (
    <div className={next ? styles.groupNext : undefined}>
      <div className={styles.groupHead}>
        <h3>{title}</h3>
        <span>{aside}</span>
      </div>
      <ul className={styles.rows}>
        {items.map((item) => (
          <IncludedRow key={item.name} item={item} />
        ))}
        {plus ? (
          <li className={`${styles.row} ${styles.rowPlus}`}>
            <span className={styles.plus}>+</span>
            <p className={styles.rowText}>
              <span className={styles.itemName}>{plus}</span>
            </p>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

function stepBody(step: Step): ReactNode {
  switch (step.kind) {
    case 'plain':
      return (
        <p>
          <strong>{step.lead}</strong>
          {step.body}
        </p>
      );
    case 'addons':
      return (
        <p>
          <strong>{step.lead}</strong>{' '}
          <span className={styles.tag}>Optional · not in $297</span>
          <br />
          Voice AI answers calls when you can’t — $99/mo . Chat AI handles chats when you can’t — $29/mo . Add either, both, or neither.
        </p>
      );
    default: {
      const unreachable: never = step;
      return unreachable;
    }
  }
}

function HowItStarts() {
  return (
    <div className={styles.how}>
      <h2 className={styles.monoLabel}>How it starts</h2>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.lead} className={styles.step}>
            <span className={styles.badge}>{index + 1}</span>
            {stepBody(step)}
          </li>
        ))}
      </ol>
    </div>
  );
}

function AddonsBox() {
  return (
    <div className={styles.addons}>
      <p className={styles.addonsLabel}>Optional add-ons · not in $297</p>
      <span className={styles.pill}>Voice AI · $99/mo</span>
      <span className={styles.pill}>Chat AI · $29/mo</span>
      <p className={styles.addonsText}>Add either, both, or neither.</p>
    </div>
  );
}

function PriceBlock({ variant }: { variant: 'top' | 'end' | 'panel' }) {
  const variantClass =
    variant === 'top' ? styles.cardTop : variant === 'end' ? styles.cardEnd : styles.cardPanel;

  return (
    <div className={`${styles.priceCard} ${variantClass}`} data-price-variant={variant}>
      <div className={styles.priceTop}>
        <div className={styles.priceLeft}>
          <p className={styles.priceLabel}>The Local Lead Plan</p>
          <p className={styles.price}>
            $297<span>/mo</span>
          </p>
        </div>
        <div className={styles.priceRight}>
          <p>Or $2,970/yr — 2 months free</p>
          <p className={styles.save}>Save $594 vs. monthly</p>
        </div>
      </div>
      <Link className={styles.priceCta} href="/get-started">
        <span>Start The Local Lead Plan — $297/mo</span>
        <ArrowIcon />
      </Link>
      <Link className={styles.priceSecondary} href="/book-a-call">
        <span className={styles.linkLabel}>Prefer to talk first? Book a call</span>
        <ArrowIcon />
      </Link>
      <p className={styles.trust}>
        <span className={styles.trustLock}>
          <LockIcon />
          Secure checkout by Stripe
        </span>
        <span className={styles.trustSep} aria-hidden="true">
          ·
        </span>
        <span className={styles.trustRest}>Cancel anytime · No long-term contract</span>
      </p>
      <ul className={styles.brands} aria-label="Accepted cards">
        <li>Visa</li>
        <li>Mastercard</li>
        <li>AmEx</li>
        <li>Discover</li>
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.photo} aria-hidden="true">
        <Image
          src={photos.hero.src}
          alt=""
          fill
          priority
          sizes="(min-width: 1100px) 600px, 100vw"
          className={styles.photoImg}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.circle} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Local businesses in Santa Barbara and nearby</p>
          <h1 id="hero-title" className={styles.h1} data-hero-part="h1">
            The whole customer-getting system. Set up for you.{' '}
            <span className={styles.h1Price}>$297/mo.</span>
          </h1>
          <p className={styles.support}>
            <span className={styles.onlyNarrowInline}>
              Website, full CRM, follow-up, reporting, and training — from a local team that will come meet you.
            </span>
            <span className={styles.onlyDeskInline}>
              A custom website, your own full CRM, follow-up, reporting, and training — from a local team that will come meet you.
            </span>
          </p>

          <div className={styles.onlyDesk}>
            <Link className={styles.heroCta} href="/get-started">
              <span>Start The Local Lead Plan — $297/mo</span>
              <ArrowIcon />
            </Link>
            <Link className={styles.heroSecondary} href="/book-a-call">
              <span className={styles.linkLabel}>Prefer to talk first? Book a call</span>
              <ArrowIcon />
            </Link>
            <ul className={styles.chips}>
              <li>
                <LockIcon />
                Secure checkout by Stripe
              </li>
              <li>Cancel anytime</li>
              <li>No long-term contract</li>
              <li>
                <PinIcon />
                We’ll come meet you
              </li>
            </ul>
            <div className={styles.recap}>
              <p className={styles.monoLabel}>What’s included, set up for you</p>
              <ul>
                {recap.map((item) => (
                  <li key={item}>
                    <span className={styles.dot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <HowItStarts />
          </div>
        </div>

        <div className={styles.onlyNarrow}>
          <PriceBlock variant="top" />
        </div>

        <div className={styles.panel} data-hero-part="panel">
          <div className={styles.strip}>
            <span>The Local Lead Plan</span>
            <span>$297/mo · all included</span>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.includedHead}>
              <h2 className={styles.h2} data-hero-part="included-title">
                What’s included
              </h2>
              <p className={styles.sub}>
                <span className={styles.onlyNarrowInline}>
                  All in The Local Lead Plan · set up for you
                </span>
                <span className={styles.onlyDeskInline}>
                  All in The Local Lead Plan · set up for you · one monthly price
                </span>
              </p>
            </div>
            <div className={styles.groups}>
              <Group
                title="Your full CRM"
                aside="What the system does"
                items={crmItems}
                plus="Plus the other built-in tools."
              />
              <Group
                title="Done for you"
                aside="Also included"
                items={doneItems}
                next
              />
            </div>
            <p className={styles.closer}>
              <PinIcon />
              <span>Close enough to shake your hand. We’ll come to you.</span>
            </p>
            <div className={styles.onlyDesk}>
              <PriceBlock variant="panel" />
              <AddonsBox />
            </div>
          </div>
        </div>

        <div className={styles.onlyNarrow}>
          <HowItStarts />
        </div>
        <div className={`${styles.onlyNarrow} ${styles.end}`}>
          <PriceBlock variant="end" />
          <AddonsBox />
        </div>
      </div>

      <div className={`${styles.band} ${styles.onlyDesk}`}>
        <p>
          Santa Barbara · Goleta · Montecito · Carpinteria{'\u00A0·\u00A0'}
          One local system{'\u00A0·\u00A0'}
          Plain-English reporting{'\u00A0·\u00A0'}
          No long-term contracts
        </p>
      </div>
    </section>
  );
}
