'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import pricingStyles from '@/components/pricing/pricing-page.module.css';
import {
  ANCHOR_PRICES,
  SHOW_WEBSITE_GUARANTEE,
  SPOTS_PER_MONTH,
  addOns,
  finalCta,
  guarantee,
  homepageFaqCopy,
  howItWorks,
  painSection,
  scarcityCopy,
  serviceArea,
  stackItems,
  valueAnchor,
} from '@/data/homepage';
import styles from './home-trim.module.css';

function ArrowIcon() {
  return (
    <svg
      className={pricingStyles.arrow}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="10.5" width="16" height="11" rx="2.2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function CloseArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function HomePriceCard() {
  const [annual, setAnnual] = useState(false);
  const monthRef = useRef<HTMLButtonElement>(null);
  const yearRef = useRef<HTMLButtonElement>(null);
  const amount = annual ? '$2,970' : '$297';
  const unit = annual ? '/yr' : '/mo';
  const orLine = annual ? 'Or $297/mo' : 'Or $2,970/yr, 2 months free';
  const cta = annual
    ? 'Start The Local Lead Plan — $2,970/yr'
    : 'Start The Local Lead Plan — $297/mo';

  function select(next: boolean) {
    setAnnual(next);
    (next ? yearRef : monthRef).current?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      select(true);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      select(false);
    }
  }

  return (
    <div className={`${pricingStyles.card} ${styles.priceCard}`} data-home-price>
      <div
        className={pricingStyles.toggle}
        role="radiogroup"
        aria-label="Billing period"
        onKeyDown={onKeyDown}
      >
        <button
          ref={monthRef}
          type="button"
          role="radio"
          aria-checked={!annual}
          tabIndex={annual ? -1 : 0}
          onClick={() => setAnnual(false)}
        >
          Monthly
        </button>
        <button
          ref={yearRef}
          type="button"
          role="radio"
          aria-checked={annual}
          tabIndex={annual ? 0 : -1}
          onClick={() => setAnnual(true)}
        >
          Annually <span className={pricingStyles.freePill}>2 months free</span>
        </button>
      </div>
      <div className={pricingStyles.priceRow}>
        <div>
          <p className={`${pricingStyles.priceLabel} ${pricingStyles.mono}`}>The Local Lead Plan</p>
          <p className={pricingStyles.price}>
            {amount}
            <span>{unit}</span>
          </p>
        </div>
        <div className={pricingStyles.priceRight}>
          <p className={pricingStyles.orLine}>{orLine}</p>
          <p className={pricingStyles.save}>Save $594 vs. monthly</p>
        </div>
      </div>
      <Link className={pricingStyles.cta} href="/get-started">
        {cta} <ArrowIcon />
      </Link>
      <Link className={pricingStyles.secondary} href="/book-a-call">
        Prefer to talk first? Book a call <ArrowIcon />
      </Link>
      <p className={pricingStyles.trust}>
        <span className={pricingStyles.lock}>
          <LockIcon /> Secure checkout by Stripe
        </span>
        <span className={pricingStyles.sep} aria-hidden="true">
          ·
        </span>
        <span>Cancel anytime with 30-day written notice</span>
      </p>
      <ul className={pricingStyles.brands} aria-label="Accepted cards">
        <li className={pricingStyles.brand}>Visa</li>
        <li className={pricingStyles.brand}>Mastercard</li>
        <li className={pricingStyles.brand}>AmEx</li>
        <li className={pricingStyles.brand}>Discover</li>
      </ul>
    </div>
  );
}

export function HomeTrim() {
  const anchorPrices = ANCHOR_PRICES;
  const spotsPerMonth = SPOTS_PER_MONTH;
  const showAnchor = anchorPrices != null && anchorPrices.length > 0;
  const showScarcity = typeof spotsPerMonth === 'number' && spotsPerMonth > 0;

  return (
    <div className={styles.root}>
      <section className={styles.sec} id="pain" aria-labelledby="pain-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="pain-title">
            {painSection.h2}
          </h2>
          <ul className={styles.painList}>
            {painSection.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className={styles.painCloser}>{painSection.closer}</p>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy}`} id="stack" aria-labelledby="stack-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="stack-title">
            Here’s Exactly What You Get
          </h2>
          <ol className={styles.stackList}>
            {stackItems.map((item, index) => (
              <li key={item.title} className={styles.stackItem}>
                <span className={styles.stackNum} aria-hidden="true">
                  {index + 1}
                </span>
                <div className={styles.stackBody}>
                  <div className={styles.stackTitleRow}>
                    <h3 className={styles.stackTitle}>{item.title}</h3>
                    {item.tag ? <span className={styles.stackTag}>{item.tag}</span> : null}
                  </div>
                  <p className={styles.stackDesc}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {showAnchor && anchorPrices ? (
        <section className={styles.sec} id="value-anchor" aria-labelledby="anchor-title">
          <div className={styles.wrap}>
            <h2 className={styles.h2} id="anchor-title">
              {valueAnchor.h2}
            </h2>
            <div className={styles.anchorTableWrap}>
              <table className={styles.anchorTable}>
                <caption className={styles.srOnly}>{valueAnchor.h2}</caption>
                <tbody>
                  {anchorPrices.map((row) => (
                    <tr key={row.label} className={row.isTotal ? styles.anchorTotal : undefined}>
                      <th scope="row">{row.label}</th>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.anchorPrice}>{valueAnchor.yourPrice}</p>
            <p className={styles.anchorAnnual}>{valueAnchor.annualLine}</p>
          </div>
        </section>
      ) : null}

      <section className={`${styles.sec} ${styles.secPrice}`} id="price" aria-labelledby="price-title">
        <div className={styles.priceShell}>
          <div className={styles.priceIntro}>
            <p className={styles.kicker}>The Local Lead Plan</p>
            <h2 className={styles.h2} id="price-title">
              One monthly price.
            </h2>
          </div>
          <HomePriceCard />
        </div>
      </section>

      <section className={styles.sec} id="guarantee" aria-labelledby="guarantee-title">
        <div className={styles.wrapNarrow}>
          <h2 className={styles.h2} id="guarantee-title">
            {guarantee.h2}
          </h2>
          <p className={styles.guaranteePrimary}>{guarantee.primary}</p>
          {SHOW_WEBSITE_GUARANTEE ? <p className={styles.guaranteeSecondary}>{guarantee.website}</p> : null}
        </div>
      </section>

      {showScarcity && spotsPerMonth != null ? (
        <section className={`${styles.sec} ${styles.secNavy}`} id="scarcity" aria-labelledby="scarcity-title">
          <div className={styles.wrapNarrow}>
            <h2 className={styles.h2} id="scarcity-title">
              {scarcityCopy.h2}
            </h2>
            <p className={styles.lede}>{scarcityCopy.body(spotsPerMonth)}</p>
            <div className={styles.closeActions}>
              <Link className={styles.closeBtn} href="/get-started">
                {scarcityCopy.primaryCta} <CloseArrow />
              </Link>
              <Link className={`${styles.closeBtn} ${styles.closeBtnSec}`} href="/book-a-call">
                {scarcityCopy.secondaryCta} <CloseArrow />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles.sec} id="add-ons" aria-labelledby="addons-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="addons-title">
            {addOns.h2}
          </h2>
          <ul className={styles.addonList}>
            {addOns.items.map((item) => (
              <li key={item.title} className={styles.addonItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          <p className={styles.addonNote}>{addOns.note}</p>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy}`} id="how-it-works" aria-labelledby="how-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="how-title">
            {howItWorks.h2}
          </h2>
          <ol className={styles.steps}>
            {howItWorks.steps.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>{index + 1}</span>
                <div>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.sec} id="local" aria-labelledby="local-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>{serviceArea.kicker}</p>
          <h2 className={styles.h2} id="local-title">
            {serviceArea.h2}
          </h2>
          <p className={styles.localNote}>{serviceArea.note}</p>
          <div className={styles.localCities} aria-label="Cities we come to">
            {serviceArea.cities.map((city) => (
              <span key={city} className={styles.localCity}>
                <i aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sec} id="faq" aria-labelledby="faq-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Questions</p>
          <h2 className={styles.h2} id="faq-title">
            A few straight answers.
          </h2>
          <div className={styles.faqList}>
            {homepageFaqCopy.map((item) => (
              <div key={item.question} className={styles.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy} ${styles.close}`} id="close" aria-labelledby="close-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>The Local Lead Plan</p>
          <h2 className={styles.h2} id="close-title">
            {finalCta.h2}
          </h2>
          <p className={styles.lede}>{finalCta.sub}</p>
          <div className={styles.closeActions}>
            <Link className={styles.closeBtn} href="/get-started">
              {finalCta.primary} <CloseArrow />
            </Link>
            <Link className={`${styles.closeBtn} ${styles.closeBtnSec}`} href="/book-a-call">
              {finalCta.secondary} <CloseArrow />
            </Link>
          </div>
          <p className={styles.closeContact}>
            <a href="tel:+18053077600">
              <PhoneIcon /> (805) 307-7600
            </a>
            <a href="mailto:info@sbmc.io">info@sbmc.io</a>
          </p>
        </div>
      </section>
    </div>
  );
}
