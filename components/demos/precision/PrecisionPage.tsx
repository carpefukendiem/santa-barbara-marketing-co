'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { DemoData } from '@/data/demos/types';
import { telHref } from '@/lib/utils';
import { DemoLogo } from '@/components/demos/DemoLogo';
import { DemoPreviewChrome } from '@/components/demos/DemoPreviewChrome';
import { DemoViewTracker } from '@/components/demos/DemoViewTracker';
import { HoursList } from '@/components/demos/HoursList';
import { HoursToday } from '@/components/demos/HoursToday';
import { MapEmbed } from '@/components/demos/MapEmbed';
import { useDemoReveal } from '@/components/demos/useDemoReveal';
import { LinkIcon, MailIcon, NavIcon, PhoneIcon, PinIcon } from '@/components/demos/icons';
import './precision.css';

const ASSET = '/demos/precision-motorcycle-service';

/** Tach needle sweeps to open (~120deg) or closed (~18deg) after HoursToday fills status. */
function TachHours() {
  const dialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = () => {
      const status =
        document.querySelector('[data-open-status]')?.textContent?.trim() ?? '';
      const open = /^Open now/i.test(status);
      const el = dialRef.current;
      if (!el) return;
      el.style.setProperty('--needle', open ? '120deg' : '18deg');
      el.dataset.state = open ? 'open' : 'closed';
      el.classList.add('is-set');
    };
    apply();
    const t = window.setTimeout(apply, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="tach" ref={dialRef} aria-hidden="true">
      <svg viewBox="0 0 120 78" className="tach-svg">
        <path
          className="tach-arc"
          d="M12 66 A48 48 0 0 1 108 66"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          className="tach-zone"
          d="M70 20 A48 48 0 0 1 108 66"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <g className="tach-needle">
          <line x1="60" y1="66" x2="60" y2="22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="66" r="5" fill="currentColor" />
        </g>
      </svg>
      <span className="tach-label">Today&apos;s hours</span>
    </div>
  );
}

export function PrecisionPage({ demo }: { demo: DemoData }) {
  const rootRef = useRef<HTMLDivElement>(null);
  useDemoReveal(rootRef);

  return (
    <div ref={rootRef} className="sbmc-demo-page d-precision">
      <DemoViewTracker slug={demo.slug} />
      <HoursToday hours={demo.hours} />

      <header>
        <div className="wrap hdr">
          <DemoLogo
            logo={demo.logo}
            logoLight={demo.logoLight}
            logoDark={demo.logoDark}
            tone="dark"
            name={demo.name}
            className="logo"
            width={176}
            height={100}
            wordmark={
              <>
                <b>PRECISION</b>
                <small>Motorcycle Service</small>
              </>
            }
          />
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#dan">Dan</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Hours</a>
          </nav>
          <a className="hc" href={telHref(demo.phone)}>
            <PhoneIcon size={16} />
            Call
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="stripe" aria-hidden="true" />
          <div className="wrap grid">
            <div className="ph hero-kb">
              <Image
                src={`${ASSET}/hero.jpg`}
                alt="Hands working on a motorcycle engine"
                width={1200}
                height={900}
                priority
                sizes="(min-width:900px) 50vw, 100vw"
              />
            </div>
            <div className="copy hero-rise">
              <div className="k">6150 Francis Botello Rd #B · Goleta</div>
              <h1>
                Motorcycle service from Dan.
                <span className="sub">Fair, local, not corporate.</span>
              </h1>
              <p className="lead">
                Service, parts and tires for street and dirt bikes, from an independent
                shop riders trust.
              </p>
              <div className="cta">
                <a className="btn b1" href={telHref(demo.phone)}>
                  <PhoneIcon />
                  {demo.phone}
                </a>
                <a
                  className="btn b2"
                  href={demo.googleMapsUrl}
                  target="_blank"
                  rel="noopener"
                >
                  <NavIcon />
                  Directions
                </a>
              </div>
              <div className="hero-meta">
                <span className="sbmc-status" data-open-status>
                  Hours today
                </span>
                <div className="tach-row">
                  <TachHours />
                  <div className="today">
                    Today: <b data-today-text>Mon Closed</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="ahead">
          <div className="wrap">
            <b>Big job? Call ahead.</b>
            <p>
              Larger jobs can book out, so call {demo.phone} early to get on the
              schedule.
            </p>
          </div>
        </div>

        <section id="work">
          <div className="wrap work-grid">
            <div>
              <div className="k" style={{ color: '#b86d10' }}>
                What we do
              </div>
              <h2 className="h2">Street. Dirt. Minis.</h2>
              <div className="svc">
                <div className="wide">
                  <h3>Service</h3>
                  <p>Motorcycle service and repair for street and dirt bikes.</p>
                </div>
                <div>
                  <h3>Parts</h3>
                  <p>Motorcycle parts for street and dirt.</p>
                </div>
                <div>
                  <h3>Tires</h3>
                  <p>Tires for your bike.</p>
                </div>
                <div>
                  <h3>Minis</h3>
                  <p>Yes, minis too.</p>
                </div>
              </div>
              <p className="note">Harley-Davidson motor work: call first to ask.</p>
            </div>
            <figure className="work-ph">
              <Image
                src={`${ASSET}/dirt.jpg`}
                alt="Close-up of a motorcycle exhaust pipe"
                width={1200}
                height={900}
                sizes="(min-width:900px) 40vw, 100vw"
              />
            </figure>
          </div>
        </section>

        <section className="dan" id="dan">
          <div className="ph">
            <Image
              src={`${ASSET}/wheel.jpg`}
              alt="Mechanic tightening motorcycle wheel spokes with a wrench"
              width={1200}
              height={900}
              sizes="(min-width:900px) 50vw, 100vw"
            />
          </div>
          <div className="wrap">
            <div className="k">Meet Dan</div>
            <h2 className="h2">The non-corporate moto shop in town.</h2>
            <p>
              Riders say Dan looks a bike over, tells you straight what it needs, and
              charges fairly. One rider says he has trusted Dan for over 30 years.
            </p>
            <blockquote className="pull">
              <p>
                “I&apos;ve been giving my business to Percision Motorcycles and Dan for
                over 30 years.”
              </p>
              <cite>From a review, Jun 2023</cite>
            </blockquote>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <div className="k" style={{ color: '#b86d10' }}>
              Reviews
            </div>
            <h2 className="h2">What riders say.</h2>
            <div className="score" data-reveal>
              <b data-count="4.8">4.8</b>
              <div>
                <div className="s">★★★★★</div>
                <small>Map listing · 65 reviews</small>
              </div>
            </div>
            <blockquote className="q">
              <p>
                Traveled up to SB to purchase a used motorcycle, but wanted it
                looked-over by a pro before signing anything. Dan took time out of his
                busy day to tighten the chain a little and recommend some updates. Super
                quick service, extremely reasonably priced, and as far as I can tell,
                pretty much the only non-corporate shop in town. If I could give 6 stars,
                I would, and if I was local, this would be my shop of choice.
              </p>
              <cite>Review, Sep 2025</cite>
            </blockquote>
            <blockquote className="q">
              <p>
                My most favorite motorcycle shop! I own far too many bikes and Dan has
                always been there to help keep them in top condition. Hands down, the
                best!
              </p>
              <cite>Review, Jul 2025</cite>
            </blockquote>
            <blockquote className="q">
              <p>
                Quality, dependable service from an honest and fair priced individual.
                Great customer service, if it&apos;s a bigger scale job I recommend
                calling ahead of time to secure an appointment. Bookings can take some
                months to get in the shop.
              </p>
              <cite>Review, May 2024</cite>
            </blockquote>
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="wrap">
            <div className="k" style={{ color: '#b86d10' }}>
              Shop hours
            </div>
            <h2 className="h2">Tuesday to Saturday.</h2>
            <HoursList hours={demo.hours} />
            <MapEmbed address={demo.address} title={`Map of ${demo.address}`} />
            <div className="contact">
              <a href={telHref(demo.phone)}>
                <PhoneIcon size={22} />
                <span>
                  <small>Call the shop</small>
                  {demo.phone}
                </span>
              </a>
              <a href={demo.googleMapsUrl} target="_blank" rel="noopener">
                <PinIcon />
                <span>
                  <small>Shop</small>
                  {demo.address}
                </span>
              </a>
              <a href="mailto:precisionmotoparts@aol.com">
                <MailIcon />
                <span>
                  <small>Email</small>
                  precisionmotoparts@aol.com
                </span>
              </a>
              <a
                href="https://www.facebook.com/precisionmotoservice"
                target="_blank"
                rel="noopener"
              >
                <LinkIcon />
                <span>
                  <small>Facebook</small>
                  facebook.com/precisionmotoservice
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <DemoLogo
            logo={demo.logo}
            logoLight={demo.logoLight}
            logoDark={demo.logoDark}
            tone="dark"
            name={demo.name}
            className="logo"
            width={176}
            height={100}
            wordmark={<b>{demo.name}</b>}
          />
          {demo.address} · {demo.phone}
          <div className="credit">Demo site by Santa Barbara Marketing Co</div>
        </div>
      </footer>

      <DemoPreviewChrome
        businessName={demo.name}
        crmName={demo.crmName}
        businessSlug={demo.slug}
      />
    </div>
  );
}
