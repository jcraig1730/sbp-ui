"use client";

import Script from "next/script";
import { GA_TRACKING_ID } from "./gtag";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.GA_ID}
      />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GA_MEASUREMENT_ID');
      `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
