import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getService, services } from '@/data/services';
import { getPrintService, printServices } from '@/data/printServices';
import { ServicePageContent } from '@/components/sections/ServicePageContent';
import { PrintServicePageContent } from '@/components/sections/PrintServicePageContent';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...services.map((service) => ({ slug: service.slug })),
    ...printServices.map((service) => ({ slug: service.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const print = getPrintService(slug);
  if (print) {
    return buildMetadata({
      title: print.metaTitle,
      description: print.metaDescription,
      path: `/services/${print.slug}`,
    });
  }
  const service = getService(slug);
  if (!service) {
    return { title: 'Service not found' };
  }
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const print = getPrintService(slug);
  if (print) {
    return <PrintServicePageContent service={print} />;
  }
  const service = getService(slug);
  if (!service) {
    notFound();
  }
  return <ServicePageContent service={service} />;
}
