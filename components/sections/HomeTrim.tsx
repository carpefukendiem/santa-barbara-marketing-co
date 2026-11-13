'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import pricingStyles from '@/components/pricing/pricing-page.module.css';
import styles from './home-trim.module.css';

const crmPrimary = [
  ['Full CRM', 'Contacts, conversations, and customer history in one place, set up under your name.'],
  ['Pipelines', 'See every lead and where they stand.'],
  ['Booking and calendars', 'Customers can schedule with you.'],
  ['Email marketing', 'Plus automated email follow-ups.'],
  ['Texting and missed-call text-back', 'If you miss a call, they get a text.'],
] as const;

const crmExtra = [
  ['Website chat', 'Visitors can message you from the site.'],
  ['Forms', 'Capture leads on the site.'],
  ['Automations', 'Follow-up that runs without you chasing it.'],
  ['Review requests', 'Ask happy customers for reviews.'],
  ['Reporting', 'See activity from your own account.'],
  ['Mobile app', 'We set it up and train you.'],
] as const;

const doneForYou = [
  ['Custom website', 'Fast, mobile-first website, fully integrated and connected to the CRM.'],
  ['First review request or offer blast', 'Sent to your customer list.'],
  ['Monthly reporting', 'We walk you through what’s working.'],
  ['Local SEO', 'Show up locally.'],
] as const;

const faqs = [
  ['How fast is my site live?', 'In 3 to 6 weeks.'],
  ['What does it cost?', 'The Local Lead Plan is $297/mo, or $2,970/yr (2 months free).'],
  ['What’s not included?', 'Ad spend, Google Business Profile rebuilds, and print. They are quoted separately if you want them.'],
  ['How do I cancel?', 'Cancel anytime with 30-day written notice.'],
  ['Do I need to be tech-savvy?', 'No. We set it up under your name, train you in person, and handle it for you.'],
] as const;

const cities = ['Santa Barbara', 'Goleta', 'Carpinteria', 'Montecito'] as const;

function CheckDot() {
  return (
    <span className={styles.incDot} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B1F33" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.5l4.2 4.2L19 7.5" />
      </svg>
    </span>
  );
}

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
    ? 'Start The Local Lead Plan, $2,970/yr'
    : 'Start The Local Lead Plan, $297/mo';

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
      <p className={styles.notIncluded}>
        <strong>Not included:</strong> ad spend, GBP rebuilds, print.
      </p>
    </div>
  );
}

export function HomeTrim() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.root}${expanded ? ` ${styles.expanded}` : ''}`}>
      <section className={styles.sec} id="included" aria-labelledby="inc-title">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <p className={styles.kicker}>What’s included</p>
              <h2 className={styles.h2} id="inc-title">
                Your full CRM, and the work we do for you.
              </h2>
            </div>
            <p className={styles.lede}>
              All in The Local Lead Plan, for one monthly price. Set up under your name.
            </p>
          </div>

          <div className={styles.incGrid}>
            <div className={styles.incCard}>
              <div className={styles.incCardH}>
                <span className={styles.lab}>Your full CRM</span>
                <span className={styles.sub}>What the system does</span>
              </div>
              <p className={styles.incSubh}>Catch every lead and follow up until it books.</p>
              <ul className={styles.incList}>
                {crmPrimary.map(([name, outcome]) => (
                  <li key={name}>
                    <CheckDot />
                    <span>
                      <span className={styles.incName}>{name}</span>
                      <span className={styles.incOut}>{outcome}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className={styles.incList}>
                {crmExtra.map(([name, outcome]) => (
                  <li key={name} className={styles.crmExtra}>
                    <CheckDot />
                    <span>
                      <span className={styles.incName}>{name}</span>
                      <span className={styles.incOut}>{outcome}</span>
                    </span>
                  </li>
                ))}
                <li className={styles.crmExtra}>
                  <span className={`${styles.incDot} ${styles.incDotPlus}`} aria-hidden="true">
                    +
                  </span>
                  <span>
                    <span className={styles.incName}>Plus the other built-in tools.</span>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className={styles.seeAll}
                aria-expanded={expanded}
                onClick={() => setExpanded((value) => !value)}
              >
                <span className={styles.whenClosed}>See everything included</span>
                <span className={styles.whenOpen}>Show less</span>
              </button>
            </div>

            <div className={`${styles.incCard} ${styles.incCardNavy}`}>
              <div className={styles.incCardH}>
                <span className={styles.lab}>Done for you</span>
                <span className={styles.sub}>Also included</span>
              </div>
              <p className={styles.incSubh}>Built and run by us, so your hours stay on paying work.</p>
              <ul className={styles.incList}>
                {doneForYou.map(([name, outcome]) => (
                  <li key={name}>
                    <CheckDot />
                    <span>
                      <span className={styles.incName}>{name}</span>
                      <span className={styles.incOut}>{outcome}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy}`} id="how-it-starts" aria-labelledby="how-title">
        <div className={styles.wrap}>
          <div className={styles.head}>
            <div>
              <p className={styles.kicker}>How it starts</p>
              <h2 className={styles.h2} id="how-title">
                From first call to a system that works while you work.
              </h2>
            </div>
            <p className={styles.lede}>
              The same four steps as above. A local team sets it up with you in person, then trains you to run it.
            </p>
          </div>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <div>
                <p className={styles.stepTitle}>Start the plan or book a call.</p>
                <p className={styles.stepBody}>Secure checkout by Stripe, or talk it through first.</p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <div>
                <p className={styles.stepTitle}>We come meet you.</p>
                <p className={styles.stepBody}>A local team, in person, to learn the business.</p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <div>
                <p className={styles.stepTitle}>Optional add-ons, if you want them.</p>
                <p className={styles.stepBody}>
                  <span className={styles.stepTag}>Optional · not in $297</span>
                  <br />
                  Voice AI answers calls when you can’t, $99/mo. Chat AI handles chats when you can’t, $29/mo. Add
                  either, both, or neither. Website chat is included.
                </p>
              </div>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>4</span>
              <div>
                <p className={styles.stepTitle}>We set it all up.</p>
                <p className={styles.stepBody}>Website, full CRM, follow-up, and the app, then we train you.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.sec} id="local" aria-labelledby="local-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Santa Barbara and nearby</p>
          <h2 className={styles.h2} id="local-title">
            We come to you.
          </h2>
          <p className={styles.localNote}>
            In-person setup and training in Santa Barbara, Goleta, Carpinteria, and Montecito.
          </p>
          <div className={styles.localCities} aria-label="Cities we come to">
            {cities.map((city) => (
              <span key={city} className={styles.localCity}>
                <i aria-hidden="true" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

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

      <section className={styles.sec} id="faq" aria-labelledby="faq-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Questions</p>
          <h2 className={styles.h2} id="faq-title">
            A few straight answers.
          </h2>
          <div className={styles.faqList}>
            {faqs.map(([question, answer]) => (
              <div key={question} className={styles.faqItem}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy} ${styles.close}`} id="close" aria-labelledby="close-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>The Local Lead Plan</p>
          <h2 className={styles.h2} id="close-title">
            Start the plan, or book a free call.
          </h2>
          <p className={styles.lede}>$297/mo, or $2,970/yr. Cancel anytime with 30-day written notice.</p>
          <div className={styles.closeActions}>
            <Link className={styles.closeBtn} href="/get-started">
              Start the plan <CloseArrow />
            </Link>
            <Link className={`${styles.closeBtn} ${styles.closeBtnSec}`} href="/book-a-call">
              Book a free call <CloseArrow />
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
