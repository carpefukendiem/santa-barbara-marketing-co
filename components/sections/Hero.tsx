import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { photos } from '@/data/images';
import type { HomepageCopy, IncludedItemCopy } from '@/data/homepage-variants';
import { getHomepageCopy } from '@/data/homepage-variants';
import styles from './hero-atf.module.css';

type Step =
  | { kind: 'plain'; lead: string; body: string }
  | { kind: 'addons'; lead: string };

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

function IncludedRow({ item }: { item: IncludedItemCopy }) {
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
  items: readonly IncludedItemCopy[];
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

function HowItStarts({ copy }: { copy: HomepageCopy['hero'] }) {
  const [step1, step2, step3] = copy.howSteps;
  const steps: Step[] = [
    { kind: 'plain', lead: step1.lead, body: step1.body },
    { kind: 'plain', lead: step2.lead, body: step2.body },
    { kind: 'addons', lead: copy.howAddonsLead },
    { kind: 'plain', lead: step3.lead, body: step3.body },
  ];

  return (
    <div className={styles.how}>
      <h2 className={styles.monoLabel}>{copy.howLabel}</h2>
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

function PriceBlock({
  variant,
  copy,
}: {
  variant: 'top' | 'end' | 'panel';
  copy: HomepageCopy['hero'];
}) {
  const variantClass =
    variant === 'top' ? styles.cardTop : variant === 'end' ? styles.cardEnd : styles.cardPanel;

  return (
    <div className={`${styles.priceCard} ${variantClass}`} data-price-variant={variant}>
      <div className={styles.priceTop}>
        <div className={styles.priceLeft}>
          <p className={styles.priceLabel}>{copy.priceLabel}</p>
          <p className={styles.price}>
            {copy.priceMonthly}
            <span>{copy.priceMonthlySuffix}</span>
          </p>
        </div>
        <div className={styles.priceRight}>
          <p>{copy.priceAnnualLine}</p>
          <p className={styles.save}>{copy.priceSave}</p>
        </div>
      </div>
      <Link className={styles.priceCta} href="/get-started" data-ab-cta="start_plan">
        <span>{copy.pricePrimaryCta}</span>
        <ArrowIcon />
      </Link>
      <Link className={styles.priceSecondary} href="/book-a-call" data-ab-cta="book_call">
        <span className={styles.linkLabel}>{copy.priceSecondaryCta}</span>
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
        <span className={styles.trustRest}>Cancel anytime with 30-day written notice</span>
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

export function Hero({ copy = getHomepageCopy('a') }: { copy?: HomepageCopy }) {
  const hero = copy.hero;

  return (
    <section className={styles.hero} aria-labelledby="hero-title" data-hp-variant-hero>
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
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="hero-title" className={styles.h1} data-hero-part="h1">
            {hero.headline}
            {hero.headlinePrice ? (
              <>
                {' '}
                <span className={styles.h1Price}>{hero.headlinePrice}</span>
              </>
            ) : null}
          </h1>
          <p className={styles.support}>
            <span className={styles.onlyNarrowInline}>{hero.supportNarrow}</span>
            <span className={styles.onlyDeskInline}>{hero.supportDesk}</span>
          </p>
          {hero.priceLine ? (
            <p className={styles.support} data-hero-part="price-line">
              {hero.priceLine}
            </p>
          ) : null}

          <div className={styles.onlyDesk}>
            <Link className={styles.heroCta} href="/get-started" data-ab-cta="start_plan">
              <span>{hero.primaryCta}</span>
              <ArrowIcon />
            </Link>
            <Link className={styles.heroSecondary} href="/book-a-call" data-ab-cta="book_call">
              <span className={styles.linkLabel}>{hero.secondaryCta}</span>
              <ArrowIcon />
            </Link>
            <ul className={styles.chips}>
              <li>
                <LockIcon />
                {hero.trustChips[0]}
              </li>
              <li>{hero.trustChips[1]}</li>
              <li>
                <PinIcon />
                {hero.trustChips[2]}
              </li>
            </ul>
            <div className={styles.recap}>
              <p className={styles.monoLabel}>{hero.recapLabel}</p>
              <ul>
                {hero.recap.map((item) => (
                  <li key={item}>
                    <span className={styles.dot} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <HowItStarts copy={hero} />
          </div>
        </div>

        <div className={styles.onlyNarrow}>
          <PriceBlock variant="top" copy={hero} />
        </div>

        <div className={styles.panel} data-hero-part="panel">
          <div className={styles.strip}>
            <span>{hero.panelStripTitle}</span>
            <span>{hero.panelStripPrice}</span>
          </div>
          <div className={styles.panelBody}>
            <div className={styles.includedHead}>
              <h2 className={styles.h2} data-hero-part="included-title">
                {hero.includedTitle}
              </h2>
              <p className={styles.sub}>
                <span className={styles.onlyNarrowInline}>{hero.includedSubNarrow}</span>
                <span className={styles.onlyDeskInline}>{hero.includedSubDesk}</span>
              </p>
            </div>
            <div className={styles.groups}>
              <Group
                title={hero.crmTitle}
                aside={hero.crmAside}
                items={hero.crmItems}
                plus={hero.crmPlus}
              />
              <Group
                title={hero.doneTitle}
                aside={hero.doneAside}
                items={hero.doneItems}
                next
              />
            </div>
            <p className={styles.closer}>
              <PinIcon />
              <span>{hero.closer}</span>
            </p>
            <div className={styles.onlyDesk}>
              <PriceBlock variant="panel" copy={hero} />
              <AddonsBox />
            </div>
          </div>
        </div>

        <div className={styles.onlyNarrow}>
          <HowItStarts copy={hero} />
        </div>
        <div className={`${styles.onlyNarrow} ${styles.end}`}>
          <PriceBlock variant="end" copy={hero} />
          <AddonsBox />
        </div>
      </div>

      <div className={`${styles.band} ${styles.onlyDesk}`}>
        <p>{hero.band}</p>
      </div>
    </section>
  );
}
