import Script from 'next/script';

export function GhlChatWidget() {
  const widgetId = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID;
  if (!widgetId) return null;
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      strategy="lazyOnload"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
    />
  );
}
