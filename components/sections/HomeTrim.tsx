import Image from 'next/image';
import Link from 'next/link';
import styles from './home-trim.module.css';

const facts = [
  'Marketing local businesses since 2007',
  'Based in Santa Barbara, serving all of SB County',
  'We meet you in person',
  'Hablamos español',
] as const;

const services = [
  {
    name: 'Google Ads management',
    body: 'Ads that put you at the top of Google for the jobs you want. Ad spend is billed by Google, separate from the plan.',
    href: '/services/google-ads',
  },
  {
    name: 'Google Business Profile rebuild',
    body: "A full cleanup of a profile that's been neglected, suspended or set up wrong.",
    href: '/services/google-business-profile',
  },
  {
    name: 'Website and e-commerce builds',
    body: 'Bigger sites, Shopify stores and custom builds beyond the plan website.',
    href: '/services/web-design',
  },
  {
    name: 'Print and apparel',
    body: 'Cards, signs, shirts and more for the business. Quoted per order.',
    href: '/services/print-and-apparel',
  },
] as const;

const faqs = [
  ['How fast is my site live?', 'Live in 30 days once we have your logins, photos and content.'],
  ['What does it cost?', 'The Local Lead Plan is $297/mo, or $2,970/yr (2 months free).'],
  [
    "What's not included?",
    'Ad spend, Google Business Profile rebuilds, and print. They are quoted separately if you want them.',
  ],
  ['How do I cancel?', 'Cancel anytime with 30-day written notice.'],
  [
    'Do I need to be tech-savvy?',
    'No. We set it up under your name, train you in person, and handle it for you.',
  ],
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function HomeTrim() {
  return (
    <div className={styles.root}>
      <section className={styles.sec} id="proof" aria-labelledby="proof-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="proof-title">
            See exactly what you&apos;re getting.
          </h2>

          <div className={styles.proofGrid}>
            <figure className={styles.proofTile}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} aria-hidden="true" />
                <div className={styles.phoneScreen}>
                  <Image
                    src="/images/proof/dimauros-phone.webp"
                    alt="Mobile website for DiMauro's Independent Honda Acura Repair, a real site we built"
                    width={390}
                    height={844}
                    className={styles.phoneImg}
                    sizes="(max-width: 480px) 220px, 260px"
                  />
                </div>
              </div>
              <figcaption className={styles.proofCaption}>
                A real site we built, on the phone your customers use.
              </figcaption>
            </figure>
          </div>

          <ul className={styles.facts} aria-label="Company facts">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secCream2}`} id="add-ons" aria-labelledby="addons-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Optional add-ons. Not included in the $297 plan.</p>
          <h2 className={styles.h2} id="addons-title">
            Want help answering when you can&apos;t?
          </h2>
          <ul className={styles.addonGrid}>
            <li className={styles.addonCard}>
              <div className={styles.addonTop}>
                <h3>Voice AI</h3>
                <p className={styles.addonPrice}>
                  $99<span>/mo</span>
                </p>
              </div>
              <p className={styles.addonBody}>
                Answers your calls when you&apos;re busy on a job, so a busy day doesn&apos;t cost
                you the next customer.
              </p>
            </li>
            <li className={styles.addonCard}>
              <div className={styles.addonTop}>
                <h3>Chat AI</h3>
                <p className={styles.addonPrice}>
                  $29<span>/mo</span>
                </p>
              </div>
              <p className={styles.addonBody}>
                Answers chats after hours, so late-night visitors still get a reply.
              </p>
            </li>
          </ul>
          <p className={styles.addonNote}>
            Add either, both, or neither. Basic website chat is already included in the plan.
          </p>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy}`} id="expertise" aria-labelledby="expertise-title">
        <div className={styles.wrapNarrow}>
          <p className={styles.kicker}>Who you&apos;re working with</p>
          <h2 className={styles.h2} id="expertise-title">
            A local marketer who has been doing this since 2007.
          </h2>
          <p className={styles.lede}>
            Santa Barbara Marketing Co is run by Ruben Ruiz, who has been marketing local
            businesses since 2007. He has managed Google Ads budgets, built websites in Next.js,
            WordPress and Shopify, and set up the follow-up systems that turn leads into booked
            jobs. You work with someone in town who answers the phone, in English or Spanish.
          </p>
          <Link className={`${styles.closeBtn} ${styles.closeBtnSec} ${styles.expertiseCta}`} href="/book-a-call">
            Book a 20-Minute Call <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className={styles.sec} id="services" aria-labelledby="services-title">
        <div className={styles.wrap}>
          <p className={styles.kicker}>Need more? Quoted per project.</p>
          <h2 className={styles.h2Wide} id="services-title">
            Extra reach when you&apos;re ready for it.
          </h2>
          <p className={styles.lede}>
            Not part of The Local Lead Plan. Each is priced on its own, so you only pay for what
            you choose.
          </p>
          <ul className={styles.serviceList}>
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className={styles.serviceLink}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.serviceBody}>{service.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.sec} ${styles.secNavy} ${styles.close}`} id="close" aria-labelledby="close-title">
        <div className={styles.wrap}>
          <h2 className={styles.h2} id="close-title">
            Stop letting good leads go cold.
          </h2>
          <p className={styles.lede}>
            Website, full CRM, follow-up, reporting and training from a local team that comes to
            meet you. Live in 30 days.
          </p>
          <p className={styles.closePrice}>$297/mo or $2,970/yr</p>
          <div className={styles.closeActions}>
            <Link className={styles.closeBtn} href="/get-started">
              Start the Plan <ArrowIcon />
            </Link>
            <Link className={`${styles.closeBtn} ${styles.closeBtnSec}`} href="/book-a-call">
              Book a 20-Minute Call <ArrowIcon />
            </Link>
          </div>
          <p className={styles.closeTrust}>
            Cancel anytime with 30-day written notice. Call{' '}
            <a href="tel:+18053077600">(805) 307-7600</a> or email{' '}
            <a href="mailto:info@sbmc.io">info@sbmc.io</a>.
          </p>
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
    </div>
  );
}
