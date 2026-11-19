import Image from 'next/image';
import Link from 'next/link';
import { photos } from '@/data/images';
import { homepageHero, riskReversal } from '@/data/homepage';
import styles from './hero-atf.module.css';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
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

      <div className={styles.layout}>
        <div className={`${styles.copy} ${styles.heroSlim}`}>
          <p className={styles.eyebrow}>{homepageHero.eyebrow}</p>
          <h1 id="hero-title" className={styles.h1} data-hero-part="h1">
            {homepageHero.h1}
          </h1>
          <p className={styles.support}>{homepageHero.subhead}</p>

          <div className={styles.heroActions}>
            <Link className={styles.heroCta} href={homepageHero.primaryHref}>
              <span>{homepageHero.primaryCta}</span>
              <ArrowIcon />
            </Link>
            {/* TODO: swap secondaryHref to a dedicated audit page when that route exists. */}
            <Link className={styles.heroSecondary} href={homepageHero.secondaryHref}>
              <span className={styles.linkLabel}>{homepageHero.secondaryCta}</span>
            </Link>
          </div>

          <ul className={styles.riskStrip} aria-label="Risk reversal">
            {riskReversal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
