import Script from 'next/script'

/**
 * Loads Google Analytics 4 (gtag.js) only when NEXT_PUBLIC_GA_ID is set, to
 * carry over measurement continuity from the previous r3tech.site. Mirrors
 * components/analytics/clarity.tsx: no ID hardcoded, inert with zero script
 * and zero request when the env var is absent, loaded with
 * strategy="afterInteractive" so it never blocks rendering or hydration.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');`}
      </Script>
    </>
  )
}
