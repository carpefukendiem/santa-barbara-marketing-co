import Link from 'next/link';
import styles from './hero-atf.module.css';

const valueStack = [
  {
    name: 'Custom website',
    description:
      'A fast site built for phones, so the person searching on their phone actually calls you.',
  },
  {
    name: 'Local SEO',
    description:
      'Your Google Business Profile and local pages set up so nearby customers find you, not the shop down the street.',
  },
  {
    name: 'Missed-call text-back',
    description:
      'Miss a call on the job and they get a text right away, before they call your competitor.',
  },
  {
    name: 'Lead follow-up that runs on its own',
    description:
      'Every form, call and message gets a follow-up, so no lead sits in an inbox and goes cold.',
  },
  {
    name: 'Your full CRM, set up under your name',
    description: 'Every contact, conversation and job in one place. You own it.',
  },
  {
    name: 'Booking and calendars',
    description: 'Customers can book a time with you without the phone tag.',
  },
  {
    name: 'Review requests',
    description:
      'Happy customers get an easy way to leave a review. We never write reviews or hide the bad ones.',
  },
  {
    name: 'Website chat',
    description: 'Visitors can message you right from your site.',
  },
  {
    name: 'Monthly reporting',
    description: "We walk you through what's working each month, in plain English.",
  },
  {
    name: 'Mobile app and training',
    description: 'We set it up on your phone and show you how to run it.',
  },
] as const;

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

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.layout}>
        <div className={styles.offer}>
          <p className={styles.eyebrow}>
            The Local Lead Plan for Santa Barbara County businesses
          </p>
          <h1 id="hero-title" className={styles.h1}>
            Get more calls from Google, and never lose another lead to a missed call.
          </h1>
          <p className={styles.subhead}>
            We build your website, set up your full CRM, and run the follow-up for you. Your site
            is live in 30 days. You get back to the work that pays.
          </p>

          <div className={styles.priceBlock} data-hero-part="price">
            <p className={styles.priceLine}>
              <span className={styles.priceAmount}>$297</span>
              <span className={styles.priceUnit}>/mo</span>
              <span className={styles.pricePipe} aria-hidden="true">
                |
              </span>
              <span className={styles.priceAlt}>or $2,970/yr (2 months free, save $594)</span>
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link className={styles.primaryCta} href="/get-started" data-hero-part="primary-cta">
              <span>Start the Plan</span>
              <ArrowIcon />
            </Link>
            <Link className={styles.secondaryCta} href="/book-a-call">
              Book a 20-Minute Call
            </Link>
          </div>

          <p className={styles.trust}>
            Cancel anytime with 30-day written notice. Secure checkout by Stripe.
          </p>
        </div>

        <div className={styles.valueStack} aria-labelledby="value-stack-title">
          <h2 id="value-stack-title" className={styles.valueHeading}>
            What you get for $297 a month
          </h2>
          <ul className={styles.valueList}>
            {valueStack.map((item) => (
              <li key={item.name} className={styles.valueItem}>
                <span className={styles.check}>
                  <CheckIcon />
                </span>
                <p>
                  <span className={styles.itemName}>{item.name}:</span>{' '}
                  <span className={styles.itemDesc}>{item.description}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.valueCloser}>
            One local team. One monthly price. Everything that gets you the call, the follow-up and
            the booked job.
          </p>
        </div>

        <div className={styles.risk} aria-labelledby="risk-title">
          <h2 id="risk-title" className={styles.riskHeading}>
            No long contract. No guesswork.
          </h2>
          <p className={styles.riskCopy}>
            Your site is live in 30 days. You can cancel anytime with 30 days&apos; written notice.
            We come meet you in person, set it all up, and train you on it. If you&apos;d rather
            talk first, book a 20-minute call and ask us anything.
          </p>
        </div>
      </div>
    </section>
  );
}
