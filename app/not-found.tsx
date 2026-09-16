import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { featuredServiceSlugs, getService } from '@/data/services';
import { overviewLocations } from '@/data/locations';
import { decor } from '@/data/images';

export default function NotFound() {
  const services = featuredServiceSlugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });

  return (
    <Section className="relative overflow-hidden bg-sbmc-cream">
      <Image
        src={decor.palmTree.src}
        alt=""
        width={decor.palmTree.width}
        height={decor.palmTree.height}
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-12 hidden w-64 opacity-[0.14] md:block"
      />
      <Container>
        <p className="text-eyebrow text-sbmc-teal">404</p>
        <Heading as="h1" size="lg" className="mt-4 max-w-3xl">
          That page is not on this map.
        </Heading>
        <p className="mt-5 max-w-[54ch] text-body-lg text-sbmc-ink">
          The link may be old, or the page may still be on our writing list.
          Planned resource articles return here on purpose until they are
          actually written. Head home, or jump to a service or city we do
          cover.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Back to the homepage</Button>
          <Button variant="secondary" href="/contact">
            Contact us
          </Button>
        </div>

        <h2 className="mt-16 text-heading-sm">Services</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="block border-t border-rule py-4 font-display text-2xl text-ink"
              >
                {service.shortName}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-heading-sm">Locations</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {overviewLocations.map((location) => (
            <li key={location.slug}>
              <Link
                href={`/${location.slug}`}
                className="block border-t border-rule py-4 font-display text-2xl text-ink"
              >
                {location.city}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
