import { SITE_CONFIG } from './site.config.js';

// Centralized Production Domain Configuration
// 1. Can be set via environment variable: VITE_SITE_URL=https://www.yourclientdomain.com
// 2. Defaults to placeholder: https://YOUR-DOMAIN.com
export const SITE_URL = (
  typeof import.meta !== 'undefined' &&
  import.meta?.env?.VITE_SITE_URL
)
  ? import.meta.env.VITE_SITE_URL.replace(/\/$/, '')
  : 'https://skycoolhvactrading.com';

export const SEO_CONFIG = {
  baseUrl: SITE_URL,
  siteTitle: SITE_CONFIG.name,
  defaultTitleTemplate: `%s | ${SITE_CONFIG.name}`,
  defaultDescription: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: SITE_CONFIG.name,
    defaultImage: `${SITE_URL}/images/skycool-og-banner.jpg`
  },
  twitter: {
    handle: '@skycoolhvac',
    cardType: 'summary_large_image'
  }
};
