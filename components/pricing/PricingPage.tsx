'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { photos } from '@/data/images';
import styles from './pricing-page.module.css';

type Variant = 'hero' | 'mid' | 'final';

const crm = [
  ['Full CRM', 'Every contact, conversation, and job history in one place, set up under your name. No lead slips through.'],
  ['Pipelines', 'See every lead and where it stands, so you know who to call next.'],
  ['Booking & calendars', 'Customers book themselves, so jobs don’t get lost to phone tag.'],
  ['Email marketing + automated follow-ups', 'Leads turn into booked jobs instead of going cold.'],
  ['Texting & missed-call text-back', 'A missed call stops being a lost job.'],
  ['Website chat', 'Visitors who won’t pick up the phone can still reach you.'],
  ['Forms', 'Website visitors land in your CRM as leads, not in an inbox you forget to check.'],
  ['Automations', 'Follow-up runs without you chasing it, so your time goes to paying work.'],
  ['Review requests', 'Ask every happy customer, and build the reviews people check before they call.'],
  ['Reporting', 'See what’s actually bringing in money.'],
  ['Mobile app', 'Answer leads from the job site. We set it up and train you.'],
] as const;

const doneForYou = [
  ['Custom website', 'Connected to your CRM, so every visitor who reaches out becomes a tracked lead.'],
  ['Local SEO', 'Found by people nearby who are ready to buy.'],
  ['First review request or offer blast', 'Sent to your customer list, to bring past customers back.'],
  ['Monthly reporting walkthroughs', 'We walk you through what’s working, so you put money where the jobs come from.'],
] as const;

const glance = [
  ['Missed calls', ' stop being lost jobs.'],
  ['Follow-up', ' turns leads into booked jobs.'],
  ['Reviews', ' people check before they call.'],
  ['Website + local SEO', ' get you found by people ready to buy.'],
  ['Reporting', ' shows what brings in money.'],
  ['Training', ' so you run it from your phone.'],
] as const;

const quoted = [
  ['Google Ads management', 'Reach people searching for what you do right now. Ad spend is billed by Google, separate from the plan.'],
  ['Google Business Profile rebuild', 'A complete, accurate profile for the map results where locals choose who to call.'],
  ['Print & apparel', 'Shirts, uniforms, and promo that keep your name in front of customers. Garments and print runs are quoted per order.'],
] as const;

const faqs = [
  ['Is there a long-term contract?', 'No. The Local Lead Plan is billed monthly or annually and continues until you cancel with 30-day written notice.'],
  ['How does the annual option work?', 'Pay $2,970 once a year instead of $297 a month. That’s 2 months free, and you save $594 vs. monthly.'],
  ['Is Voice AI or Chat AI in the $297?', 'No. They’re optional add-ons: Voice AI is $99/mo and Chat AI is $29/mo. Add either, both, or neither. Website chat is already included in the plan.'],
  ['Is Google Ads spend included?', 'No. Google Ads management is quoted separately, and ad spend is billed by Google.'],
  ['Can I talk to someone before I start?', 'Yes. Book a call and talk it through first. When you start, a local team comes to meet you and learn the business.'],
] as const;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

function PinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.6A2.6 2.6 0 1 1 12 6.4a2.6 2.6 0 0 1 0 5.2z" />
    </svg>
  );
}

function PhoneIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5A8 8 0 1 1 21 12z" />
    </svg>
  );
}

function Rows({ items, plus }: { items: readonly (readonly [string, string])[]; plus?: string }) {
  return (
    <ul>
      {items.map(([name, body]) => (
        <li key={name} className={styles.row}>
          <span className={styles.check}>
            <CheckIcon />
          </span>
          <span className={styles.rowText}>
            <span className={styles.itemName}>{name}</span>
            <span className={styles.itemBody}>{body}</span>
          </span>
        </li>
      ))}
      {plus ? (
        <li className={`${styles.row} ${styles.plus}`}>
          <span className={styles.check}>+</span>
          <span className={styles.rowText}>
            <span className={styles.itemName}>{plus}</span>
          </span>
        </li>
      ) : null}
    </ul>
  );
}

function PlanCard({
  variant,
  annual,
  onAnnual,
}: {
  variant: Variant;
  annual: boolean;
  onAnnual: (annual: boolean) => void;
}) {
  const monthRef = useRef<HTMLButtonElement>(null);
  const yearRef = useRef<HTMLButtonElement>(null);
  const amount = annual ? '$2,970' : '$297';
  const unit = annual ? '/yr' : '/mo';
  const orLine = annual ? 'Or $297/mo' : 'Or $2,970/yr — 2 months free';
  const cta = annual ? 'Start The Local Lead Plan — $2,970/yr' : 'Start The Local Lead Plan — $297/mo';
  const label = variant === 'mid' ? 'All of this, one plan' : 'The Local Lead Plan';

  function select(next: boolean) {
    onAnnual(next);
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

  let cardClass = styles.card;
  if (variant === 'mid') cardClass = `${styles.card} ${styles.mid}`;

  return (
    <div className={cardClass}>
      {variant === 'hero' ? (
        <div className={styles.toggle} role="radiogroup" aria-label="Billing period" onKeyDown={onKeyDown}>
          <button ref={monthRef} type="button" role="radio" aria-checked={!annual} tabIndex={annual ? -1 : 0} onClick={() => onAnnual(false)}>
            Monthly
          </button>
          <button ref={yearRef} type="button" role="radio" aria-checked={annual} tabIndex={annual ? 0 : -1} onClick={() => onAnnual(true)}>
            Annually <span className={styles.freePill}>2 months free</span>
          </button>
        </div>
      ) : null}
      <div className={styles.priceRow}>
        <div>
          <p className={`${styles.priceLabel} ${styles.mono}`}>{label}</p>
          <p className={styles.price}>
            {amount}
            <span>{unit}</span>
          </p>
        </div>
        <div className={styles.priceRight}>
          <p className={styles.orLine}>{orLine}</p>
          <p className={styles.save}>Save $594 vs. monthly</p>
        </div>
      </div>
      {variant === 'mid' ? (
        <p className={styles.midExplain}>
          Everything on this page except the optional add-ons and the work quoted separately.
        </p>
      ) : null}
      <Link className={styles.cta} href="/get-started">
        {cta} <ArrowIcon />
      </Link>
      <Link className={styles.secondary} href="/book-a-call">
        Prefer to talk first? Book a call <ArrowIcon />
      </Link>
      {variant === 'mid' ? null : (
        <>
          <p className={styles.trust}>
            <span className={styles.lock}>
              <LockIcon /> Secure checkout by Stripe
            </span>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <span>Cancel with 30-day written notice · No long-term contract</span>
          </p>
          <ul className={styles.brands} aria-label="Accepted cards">
            <li className={styles.brand}>Visa</li>
            <li className={styles.brand}>Mastercard</li>
            <li className={styles.brand}>AmEx</li>
            <li className={styles.brand}>Discover</li>
          </ul>
        </>
      )}
    </div>
  );
}

function SectionHead({ kick, title, lede, kickClass }: { kick: string; title: ReactNode; lede?: string; kickClass?: string }) {
  return (
    <div className={styles.sectionHead}>
      <div>
        <p className={`${styles.kick} ${styles.mono} ${kickClass ?? ''}`}>{kick}</p>
        <h2 className={styles.h2}>{title}</h2>
      </div>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </div>
  );
}

export function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.photo} aria-hidden="true">
          <Image
            src={photos.hero.src}
            alt=""
            fill
            priority
            sizes="(min-width: 1100px) 46vw, 100vw"
            className={styles.photoImg}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.blob} aria-hidden="true" />
        <div className={styles.hgrid}>
          <div className={styles.copy}>
            <p className={`${styles.crumb} ${styles.mono}`}>
              <Link href="/">Home</Link> / <b>Pricing</b>
            </p>
            <p className={`${styles.eyebrow} ${styles.mono}`}>Pricing · The Local Lead Plan</p>
            <h1 className={styles.h1}>
              One plan to turn local searches into booked jobs. <span className={styles.h1Price}>$297/mo.</span>
            </h1>
            <p className={styles.support}>
              <span className={styles.long}>
                A custom website, your own full CRM, follow-up, reporting, and training — from a local team that will come meet you.
              </span>
              <span className={styles.short}>
                Website, full CRM, follow-up, reporting, and training — from a local team that will come meet you.
              </span>
            </p>
            <div className={styles.chips}>
              <span className={styles.chip}>
                <LockIcon /> Secure checkout by Stripe
              </span>
              <span className={styles.chip}>Cancel with 30-day written notice</span>
              <span className={styles.chip}>No long-term contract</span>
              <span className={styles.chip}>
                <PinIcon /> We’ll come meet you
              </span>
            </div>
            <div className={styles.glance}>
              <p className={`${styles.glanceLabel} ${styles.mono}`}>What it does for the business</p>
              <ul>
                {glance.map(([lead, rest]) => (
                  <li key={lead}>
                    <i className={styles.dot} aria-hidden="true" />
                    <span>
                      <b>{lead}</b>
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.plan}>
            <PlanCard variant="hero" annual={annual} onAnnual={setAnnual} />
            <div className={styles.addonMini}>
              <span className={`${styles.addonMiniLabel} ${styles.mono}`}>Optional add-ons · not in $297</span>
              <span className={styles.addonPill}>Voice AI · $99/mo</span>
              <span className={styles.addonPill}>Chat AI · $29/mo</span>
              <span>Add either, both, or neither.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="included">
        <div className={styles.wrap}>
          <SectionHead
            kick="What’s included · set up for you"
            title="Everything that gets you the call, the follow-up, and the booked job."
            lede="All in The Local Lead Plan, for one monthly price. Each piece is there to help more of the leads you already get turn into paying work."
          />
          <div className={styles.inc}>
            <div className={styles.group}>
              <div className={styles.groupHead}>
                <span className={`${styles.groupLeft} ${styles.mono}`}>Your full CRM</span>
                <em className={`${styles.groupRight} ${styles.mono}`}>What the system does</em>
              </div>
              <p className={styles.gt2}>Catch every lead and follow up until it books.</p>
              <Rows items={crm} plus="Plus the other built-in tools." />
            </div>
            <div className={styles.side}>
              <div className={`${styles.group} ${styles.groupNavy}`}>
                <div className={styles.groupHead}>
                  <span className={`${styles.groupLeft} ${styles.mono}`}>Done for you</span>
                  <em className={`${styles.groupRight} ${styles.mono}`}>Also included</em>
                </div>
                <p className={styles.gt2}>Built and run by us, so your hours stay on paying work.</p>
                <Rows items={doneForYou} />
              </div>
              <PlanCard variant="mid" annual={annual} onAnnual={setAnnual} />
              <p className={styles.closer}>
                <PinIcon /> Close enough to shake your hand. We’ll come to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.addons}`} id="add-ons">
        <div className={styles.wrap}>
          <SectionHead
            kick="Optional add-ons · not in $297"
            title="Cover the calls and chats you can’t get to."
            lede="Not part of the $297 plan. Add either, both, or neither, whenever it makes sense for the business."
          />
          <ul className={styles.addonGrid}>
            <li className={styles.addonCard}>
              <span className={styles.addonIcon}>
                <PhoneIcon />
              </span>
              <div>
                <h3>
                  Voice AI <span className={styles.addonPrice}>$99<span>/mo</span></span>{' '}
                  <span className={`${styles.tag} ${styles.mono}`}>Optional</span>
                </h3>
                <p>Answers calls when you can’t, so a busy day on the job doesn’t cost you the next one.</p>
              </div>
            </li>
            <li className={styles.addonCard}>
              <span className={styles.addonIcon}>
                <ChatIcon />
              </span>
              <div>
                <h3>
                  Chat AI <span className={styles.addonPrice}>$29<span>/mo</span></span>{' '}
                  <span className={`${styles.tag} ${styles.mono}`}>Optional</span>
                </h3>
                <p>Handles chats when you can’t, so after-hours visitors still get an answer.</p>
              </div>
            </li>
          </ul>
          <p className={styles.footnote}>Add either, both, or neither. Website chat is already included in the plan.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.stepsSection}`} id="how-it-starts">
        <div className={styles.wrap}>
          <SectionHead
            kick="How it starts"
            title="From first call to a system that works while you work."
            lede="A local team sets it up with you in person, then trains you to run it."
          />
          <ol className={styles.steps}>
            <li className={styles.step}>
              <b className={styles.badge}>1</b>
              <h3>Start the plan or book a call.</h3>
              <p>Secure checkout by Stripe, or talk it through first.</p>
            </li>
            <li className={styles.step}>
              <b className={styles.badge}>2</b>
              <h3>We come meet you.</h3>
              <p>A local team, in person, to learn the business.</p>
            </li>
            <li className={styles.step}>
              <b className={styles.badge}>3</b>
              <h3>Optional add-ons, if you want them.</h3>
              <div>
                <span className={`${styles.tag} ${styles.mono}`}>Optional · not in $297</span>
              </div>
              <p>
                Voice AI answers calls when you can’t — <strong>$99/mo</strong>. Chat AI handles chats when you can’t — <strong>$29/mo</strong>. Add either, both, or neither.
              </p>
            </li>
            <li className={styles.step}>
              <b className={styles.badge}>4</b>
              <h3>We set it all up.</h3>
              <p>Website, full CRM, follow-up, and the app — then we train you.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.section} id="quoted-separately">
        <div className={styles.wrap}>
          <SectionHead
            kick="Need more? Quoted per project"
            title="Extra reach when you’re ready for it."
            lede="Not part of The Local Lead Plan. Each is priced on its own, so you only pay for what you choose."
          />
          <ul className={styles.quoted}>
            {quoted.map(([title, body]) => (
              <li key={title} className={styles.quote}>
                <p className={`${styles.quoteLabel} ${styles.mono}`}>Quoted separately</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqs}`} id="faq">
        <div className={styles.wrap}>
          <SectionHead kick="Pricing questions" title="Straight answers before you start." />
          <div className={styles.faq}>
            {faqs.map(([question, answer]) => (
              <div key={question} className={styles.faqRow}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.finalGrid}>
            <div className={styles.finalCopy}>
              <p className={`${styles.eyebrow} ${styles.mono}`}>The Local Lead Plan</p>
              <h2 className={styles.h2}>
                Stop letting good leads go cold. <em>$297/mo.</em>
              </h2>
              <p className={styles.support}>
                Website, full CRM, follow-up, reporting, and training — from a local team that will come meet you.
              </p>
              <p className={styles.contact}>
                <a href="tel:+18053077600">
                  <PhoneIcon /> (805) 307-7600
                </a>
                <a href="mailto:info@sbmc.io">info@sbmc.io</a>
              </p>
            </div>
            <PlanCard variant="final" annual={annual} onAnnual={setAnnual} />
          </div>
        </div>
      </section>
    </div>
  );
}
