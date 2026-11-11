import Script from 'next/script';
import { ga4MeasurementId } from '@/lib/ga4';
import { gtmContainerId } from '@/lib/gtm';

export function AnalyticsScripts() {
  const gtmId = gtmContainerId();
  const ga4Id = ga4MeasurementId();

  return (
    <>
      <Script
        id="gtm-gtag"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());`,
        }}
      />
      <Script
        id="gtm"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
        strategy="beforeInteractive"
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          className="hidden"
          title="Google Tag Manager"
        />
      </noscript>
      {ga4Id ? (
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `gtag('config','${ga4Id}');`,
          }}
        />
      ) : null}
    </>
  );
}
