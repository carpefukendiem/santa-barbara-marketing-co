import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://santabarbaramarketingco.com',
  ),
  title: 'Santa Barbara Marketing Co.',
  description:
    'Digital marketing for Santa Barbara businesses. Local SEO, websites, Google Ads, and a connected follow-up system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
