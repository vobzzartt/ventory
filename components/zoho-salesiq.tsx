"use client";

import Script from "next/script";

const ZOHO_WIDGET_CODE = process.env.NEXT_PUBLIC_ZOHO_WIDGET_CODE;

export function ZohoSalesIQ() {
  if (!ZOHO_WIDGET_CODE) return null;

  return (
    <Script id="zoho-salesiq" strategy="afterInteractive">
      {`
        window.$zoho = window.$zoho || {};
        $zoho.salesiq = $zoho.salesiq || {
          widgetcode: "${ZOHO_WIDGET_CODE}",
          values: {},
          ready: function() {}
        };
        var d = document;
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.id = "zsiqscript";
        s.defer = true;
        s.src = "https://salesiq.zohopublic.com/widget";
        var t = d.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(s, t);
      `}
    </Script>
  );
}
