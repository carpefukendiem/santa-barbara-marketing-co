import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { getService, services } from '@/data/services';
import { getPrintService, printServices } from '@/data/printServices';
import { ppcManagement } from '@/data/ppc-management';
import { ServicePageContent } from '@/components/sections/ServicePageContent';
import { PrintServicePageContent } from '@/components/sections/PrintServicePageContent';
import { PpcManagementPageContent } from '@/components/sections/PpcManagementPageContent';

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
  if (slug === ppcManagement.slug) {
    return buildMetadata({
      title: ppcManagement.metaTitle,
      description: ppcManagement.metaDescription,
      path: ppcManagement.href,
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
  if (slug === ppcManagement.slug) {
    return <PpcManagementPageContent />;
  }
  const service = getService(slug);
  if (!service) {
    notFound();
  }
  return <ServicePageContent service={service} />;
}
