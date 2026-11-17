import Image from 'next/image';
import type { DemoData } from '@/data/demos/types';
import { telHref } from '@/lib/utils';
import { DemoLogo } from '@/components/demos/DemoLogo';
import { DemoPreviewChrome } from '@/components/demos/DemoPreviewChrome';
import { DemoViewTracker } from '@/components/demos/DemoViewTracker';
import { HoursList } from '@/components/demos/HoursList';
import { HoursToday } from '@/components/demos/HoursToday';
import { MapEmbed } from '@/components/demos/MapEmbed';
import { LinkIcon, MailIcon, NavIcon, PhoneIcon, PinIcon } from '@/components/demos/icons';
import './precision.css';

const ASSET = '/demos/precision-motorcycle-service';

export function PrecisionPage({ demo }: { demo: DemoData }) {
  return (
    <div className="sbmc-demo-page d-precision">
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
        <section className="hero" style={{ padding: 0 }}>
          <div className="wrap grid" style={{ padding: 0 }}>
            <div className="ph">
              <Image
                src={`${ASSET}/hero.jpg`}
                alt="Hands working on a motorcycle engine"
                width={1200}
                height={900}
                priority
                sizes="(min-width:900px) 50vw, 100vw"
              />
            </div>
            <div className="copy">
              <div className="k">6150 Francis Botello Rd #B · Goleta</div>
              <h1 style={{ marginTop: 12 }}>
                Motorcycle service from Dan. <span>Fair, local, not corporate.</span>
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
              <div className="today">
                Today: <b data-today-text>Mon Closed</b>
              </div>
            </div>
          </div>
        </section>

        <div className="tape" />
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
          <div className="wrap">
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
            <p style={{ marginTop: 14, fontSize: '15.5px', color: 'var(--muted)' }}>
              Harley-Davidson motor work: call first to ask.
            </p>
          </div>
        </section>

        <section className="dan" id="dan" style={{ padding: 0 }}>
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
            <div className="big30">
              30+ yrs
              <small>
                “I’ve been giving my business to Percision Motorcycles and Dan for over
                30 years.” From a review, Jun 2023
              </small>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <div className="k" style={{ color: '#b86d10' }}>
              Reviews
            </div>
            <h2 className="h2">What riders say.</h2>
            <div className="score">
              <b>4.8</b>
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

        <section className="visit" id="visit" style={{ paddingTop: 0 }}>
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

      <div className="bar">
        <a className="btn b1" href={telHref(demo.phone)}>
          <PhoneIcon />
          Call now
        </a>
        <a className="btn b2" href={demo.googleMapsUrl} target="_blank" rel="noopener">
          <NavIcon />
          Directions
        </a>
      </div>

      <DemoPreviewChrome
        businessName={demo.name}
        crmName={demo.crmName}
        businessSlug={demo.slug}
      />
    </div>
  );
}
