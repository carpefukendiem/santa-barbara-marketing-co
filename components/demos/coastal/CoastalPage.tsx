import type { DemoData } from '@/data/demos/types';
import { telHref } from '@/lib/utils';
import { DemoLogo } from '@/components/demos/DemoLogo';
import { DemoPreviewChrome } from '@/components/demos/DemoPreviewChrome';
import { DemoViewTracker } from '@/components/demos/DemoViewTracker';
import { HoursList } from '@/components/demos/HoursList';
import { HoursToday } from '@/components/demos/HoursToday';
import { MapEmbed } from '@/components/demos/MapEmbed';
import { NavIcon, PhoneIcon, PinIcon } from '@/components/demos/icons';
import './coastal.css';

function Waves() {
  return (
    <svg
      className="waves"
      viewBox="0 0 400 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 C 60 8, 120 32, 200 20 S 340 8, 400 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.90"
      />
      <path
        d="M0 38 C 60 26, 120 50, 200 38 S 340 26, 400 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.80"
      />
      <path
        d="M0 56 C 60 44, 120 68, 200 56 S 340 44, 400 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.70"
      />
      <path
        d="M0 74 C 60 62, 120 86, 200 74 S 340 62, 400 74"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.60"
      />
      <path
        d="M0 92 C 60 80, 120 104, 200 92 S 340 80, 400 92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.50"
      />
      <path
        d="M0 110 C 60 98, 120 122, 200 110 S 340 98, 400 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.40"
      />
      <path
        d="M0 128 C 60 116, 120 140, 200 128 S 340 116, 400 128"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.30"
      />
      <path
        d="M0 146 C 60 134, 120 158, 200 146 S 340 134, 400 146"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.20"
      />
    </svg>
  );
}

export function CoastalPage({ demo }: { demo: DemoData }) {
  return (
    <div className="sbmc-demo-page d-coastal">
      <DemoViewTracker slug={demo.slug} />
      <HoursToday hours={demo.hours} />

      <header>
        <div className="wrap hdr">
          <DemoLogo
            logo={demo.logo}
            name={demo.name}
            className="logo"
            wordmark={
              <>
                <i>CD</i>Coastal Dentistry
              </>
            }
          />
          <nav className="nav">
            <a href="#meet">Dr. Su</a>
            <a href="#care">Care</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </nav>
          <a className="hc" href={telHref(demo.phone)}>
            <PhoneIcon size={16} />
            Call
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ paddingBottom: 0 }}>
          <div className="wrap grid">
            <div>
              <div className="k">5973 Encina Rd #108 · Goleta</div>
              <h1 style={{ marginTop: 14 }}>
                Your Goleta dentist.{' '}
                <em>Dr. Loan Su, and a small office that knows you.</em>
              </h1>
              <p className="lead">
                Careful, personal general dentistry and cleanings, from one dentist who
                sees you every visit.
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
                Today: <b data-today-text>Mon 9 AM – 6 PM</b>
              </div>
            </div>
            <div className="card">
              <div className="k" style={{ color: 'var(--glass)' }}>
                Meet your dentist
              </div>
              <div className="sig" style={{ marginTop: 10 }}>
                Dr. Loan Su
              </div>
              <p>General dentistry and cleanings on Encina Road.</p>
              <div className="facts">
                <div>
                  <b>One dentist</b>
                  <span>Care, admin and billing</span>
                </div>
                <div>
                  <b>Mon to Fri</b>
                  <span>9 AM – 6 PM</span>
                </div>
              </div>
              <Waves />
            </div>
          </div>
        </section>

        <section className="meet" id="meet">
          <div className="wrap">
            <div>
              <div className="k">Meet Dr. Su</div>
              <h2 className="h2">Twenty years with the same dentist.</h2>
            </div>
            <div>
              <p className="big">
                “Dr. Su has been my dentist for twenty years and she is perhaps the best
                dentist I&apos;ve ever seen, and I&apos;ve seen quite a few. She&apos;s
                very efficient,{' '}
                <em>doesn&apos;t do &quot;extra&quot; work unless it&apos;s absolutely necessary</em>,
                and she&apos;s really fun to visit! I highly recommend her.”
              </p>
              <cite>Donald Lewis · Birdeye</cite>
            </div>
          </div>
        </section>

        <section className="what" id="care">
          <div className="wrap">
            <div className="k">What we do</div>
            <h2 className="h2">A small office, on purpose.</h2>
            <div className="list">
              <div className="it">
                <b>General dentistry</b>
                <p>Everyday dental care with Dr. Su.</p>
              </div>
              <div className="it">
                <b>Cleanings</b>
                <p>Regular cleanings to keep your smile healthy.</p>
              </div>
              <div className="it alt">
                <b>One person, start to finish</b>
                <p>
                  Patients say Dr. Su handles the clinical work and the admin and billing
                  herself, so you deal with the same person every time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rv" id="reviews">
          <div className="wrap">
            <div className="k">Patient reviews</div>
            <h2 className="h2">Warm, careful, consistent.</h2>
            <div className="rates">
              <div>
                <b>4.3</b>
                <span className="s">★★★★☆</span>
                <small>Birdeye · 6 reviews</small>
              </div>
              <div>
                <b>5.0</b>
                <span className="s">★★★★★</span>
                <small>Map listing · 4 reviews</small>
              </div>
            </div>
            <blockquote className="q">
              <p>
                Dr. Su is wonderful! Helped me so much when I needed it the most. Changed
                my smile forever. Dr. Su basically does everything in the office, from
                admin, to billing, to the surgery and regular cleanings. That way, you
                know it&apos;s high quality work and consistent! Highly recommend this
                cute little dentist office!
              </p>
              <cite>Kathy Phan · Birdeye</cite>
            </blockquote>
            <blockquote className="q">
              <p>super friendly - love her ! she is great at what she does 😄</p>
              <cite>Review, Dec 2018</cite>
            </blockquote>
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="wrap">
            <div className="k">Visit</div>
            <h2 className="h2">Suite 108 on Encina Road.</h2>
            <HoursList hours={demo.hours} />
            <MapEmbed address={demo.address} title={`Map of ${demo.address}`} />
            <div className="contact">
              <a href={telHref(demo.phone)}>
                <PhoneIcon size={22} />
                <span>
                  <small>Call for an appointment</small>
                  {demo.phone}
                </span>
              </a>
              <a href={demo.googleMapsUrl} target="_blank" rel="noopener">
                <PinIcon />
                <span>
                  <small>Office</small>
                  {demo.address}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          {demo.logo ? (
            <DemoLogo
              logo={demo.logo}
              name={demo.name}
              className="logo"
              wordmark={null}
            />
          ) : (
            <b>{demo.name}</b>
          )}
          Dr. Loan Su · {demo.address} · {demo.phone}
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
