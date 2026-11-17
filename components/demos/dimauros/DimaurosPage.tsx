import Image from 'next/image';
import type { DemoData } from '@/data/demos/types';
import { telHref } from '@/lib/utils';
import { DemoLogo } from '@/components/demos/DemoLogo';
import { DemoPreviewChrome } from '@/components/demos/DemoPreviewChrome';
import { DemoViewTracker } from '@/components/demos/DemoViewTracker';
import { HoursList } from '@/components/demos/HoursList';
import { HoursToday } from '@/components/demos/HoursToday';
import { MapEmbed } from '@/components/demos/MapEmbed';
import { NavIcon, PhoneIcon, PinIcon } from '@/components/demos/icons';
import './dimauros.css';

const ASSET = '/demos/dimauros-independent-honda-acura-repair';

export function DimaurosPage({ demo }: { demo: DemoData }) {
  return (
    <div className="sbmc-demo-page d-dimauros">
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
            width={180}
            height={60}
            wordmark={
              <>
                <b>DIMAURO&apos;S</b>
                <small>Independent Honda Acura Repair</small>
              </>
            }
          />
          <nav className="nav">
            <a href="#work">The work</a>
            <a href="#robert">Robert</a>
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
                src={`${ASSET}/hero-honda.jpg`}
                alt="Blue Honda Civic Type R parked by a river"
                width={2400}
                height={1600}
                priority
                sizes="(min-width:900px) 50vw, 100vw"
              />
              <div className="stamp">Honda + Acura only</div>
            </div>
            <div className="copy wrap">
              <div className="k">5798 Dawson Ave · Goleta</div>
              <h1>
                Honda and Acura service you can trust.{' '}
                <span>Without the dealer quote.</span>
              </h1>
              <p className="lead">
                Oil to timing belts to brakes, from Robert, the mechanic customers
                have gone back to for 10 to 25 years.
              </p>
              {demo.showWarrantyLine && demo.warrantyLine ? (
                <p className="lead">{demo.warrantyLine}</p>
              ) : null}
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
              <div className="meta">
                <div>
                  <b>5.0 ★</b>
                  <span>Yelp · 85 reviews</span>
                </div>
                <div>
                  <b data-today-text>Mon 8 AM – 5 PM</b>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="k">The work</div>
            <h2 className="h2">One specialty. Done every day.</h2>
            <div className="sheet">
              <div className="hd">
                <span>Service list</span>
                <span>Honda / Acura</span>
              </div>
              <div className="job">
                <span className="no">01</span>
                <div>
                  <h3>Oil changes</h3>
                  <p>Routine service for your Honda or Acura.</p>
                </div>
              </div>
              <div className="job">
                <span className="no">02</span>
                <div>
                  <h3>Timing belts</h3>
                  <p>Timing belt replacements.</p>
                </div>
              </div>
              <div className="job">
                <span className="no">03</span>
                <div>
                  <h3>Brakes</h3>
                  <p>Complete brake service with Honda original brake pads.</p>
                </div>
              </div>
              <div className="job">
                <span className="no">04</span>
                <div>
                  <h3>Electrical &amp; fuel injection</h3>
                  <p>Diagnosis and repair of electrical systems and fuel injection.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dealer">
          <div className="wrap">
            <div>
              <div className="k">Second opinion</div>
              <h2 className="h2">The dealer said brakes. Robert showed the photos.</h2>
            </div>
            <div>
              <blockquote>
                “The local dealer told me I needed breaks and received an outrageous
                quote. I went to DiMauros and they showed me pictures of my brake pads
                that obviously had 12 months or more worth of life? Robert is friendly
                and professional. Gained my trust and returned for services since.”
              </blockquote>
              <cite>Review, Oct 2025</cite>
            </div>
          </div>
        </section>

        <section className="rob" id="robert">
          <div className="wrap cols">
            <div>
              <div className="k">
                Ask for Robert
              </div>
              <h2 className="h2">Customers come back for decades.</h2>
              <p>
                Reviews keep naming the same person: Robert, the mechanic people have
                trusted with their Hondas and Acuras for 10 to 25 years.
              </p>
              <Image
                src={`${ASSET}/engine.jpg`}
                alt="Close-up of a car engine bay in sunlight"
                width={1200}
                height={800}
                sizes="(min-width:900px) 45vw, 100vw"
                style={{ marginTop: 24 }}
              />
            </div>
            <div>
              <div className="qs">
                <div className="qc">
                  <p>
                    Been going to him for 25 years. Almost don&apos;t want to leave a
                    review in case he gets too busy to see me. The most honest and
                    knowledgeable guy you could ever hope for. You&apos;ll never be
                    taken advantage of and always have great quality affordable work
                    performed.
                  </p>
                  <cite>Review, Mar 2026</cite>
                </div>
                <div className="qc">
                  <p>
                    I don&apos;t live in SB county anymore but Robert is/was the most
                    honest, knowledgeable, reliable mechanic I&apos;ve ever dealt with!
                  </p>
                  <cite>Barbara F. · Yahoo Local / Yelp, Aug 2025</cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <div className="k">Reviews</div>
            <h2 className="h2">A perfect score, earned slowly.</h2>
            <div className="score">
              <b>5.0</b>
              <div>
                <div className="s">★★★★★</div>
                <small>Yelp · 85 reviews</small>
              </div>
            </div>
            <div className="rv">
              <p>
                I cannot say enough positive things about Dimauro&apos;s! Robert &amp;
                the team are amazing! These guys deliver every single time. Some of the
                most hardworking and honest mechanics in the business. If you&apos;re
                considering having any work done here for your Honda or Acura, look no
                further! You will not be disappointed.
              </p>
              <cite>Review, Jan 2026</cite>
            </div>
            <div className="rv">
              <p>
                Everything the five star reviews say is true! Robert is a top of the
                line mechanic and businessman!
              </p>
              <cite>Adrienne M. · Yahoo Local / Yelp, Jan 2025</cite>
            </div>
          </div>
        </section>

        <section className="visit" id="visit" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="k">Shop hours</div>
            <h2 className="h2">Monday to Thursday.</h2>
            <HoursList hours={demo.hours} />
            <MapEmbed address={demo.address} title={`Map of ${demo.address}`} />
            <div className="contact">
              <a href={telHref(demo.phone)}>
                <PhoneIcon size={22} />
                <span>
                  <small>Call to book</small>
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
            width={180}
            height={60}
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
