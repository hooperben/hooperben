import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
