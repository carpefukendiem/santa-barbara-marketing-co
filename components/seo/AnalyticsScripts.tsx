import Script from 'next/script';
import { ga4MeasurementId } from '@/lib/ga4';
import { gtmContainerId } from '@/lib/gtm';

/**
 * GTM + optional GA4. Loaded with lazyOnload so the container never blocks
 * first paint / LCP. dataLayer stubs early so any pre-load pushes queue safely.
 */
export function AnalyticsScripts() {
  const gtmId = gtmContainerId();
  const ga4Id = ga4MeasurementId();

  return (
    <>
      <Script
        id="gtm-datalayer"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;`,
        }}
      />
      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
        }}
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
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `gtag('js',new Date());gtag('config','${ga4Id}');`,
          }}
        />
      ) : null}
    </>
  );
}
