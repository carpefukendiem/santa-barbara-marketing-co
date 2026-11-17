import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@/components/demos/demo-chrome.css';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
