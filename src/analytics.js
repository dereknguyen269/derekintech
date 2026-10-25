/**
 * Google Analytics 4 loader.
 *
 * The measurement ID comes from the build environment so the repo never carries
 * a hardcoded tracking ID:
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build
 *
 * With no ID set (local dev, forks) nothing is injected and no network request
 * is made — the site behaves exactly as before.
 */
export function initAnalytics() {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });
}