import { useEffect } from 'react';
import { SITE_CONFIG } from '../../config/site.config.js';
import { SEO_CONFIG } from '../../config/seo.config.js';

export function SEOHead({
  title,
  description = SITE_CONFIG.description,
  canonicalUrl,
  ogImage = SEO_CONFIG.openGraph.defaultImage,
  robots = 'index, follow',
  jsonLd = null
}) {
  const fullTitle = title
    ? (title.includes(SITE_CONFIG.name) || title.includes('Sky Cool') ? title : `${title} | ${SITE_CONFIG.name}`)
    : `AC Spare Parts Supplier in Dubai | ${SITE_CONFIG.name}`;

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const effectiveCanonicalUrl = canonicalUrl || `${SEO_CONFIG.baseUrl}${pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to get or create meta tag
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description & Robots
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', robots);

    // 3. OpenGraph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage.startsWith('http') ? ogImage : `${SEO_CONFIG.baseUrl}${ogImage}`);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', effectiveCanonicalUrl);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', SEO_CONFIG.openGraph.type);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_CONFIG.name);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', SEO_CONFIG.openGraph.locale);

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', SEO_CONFIG.twitter.cardType);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${SEO_CONFIG.baseUrl}${ogImage}`);

    // 5. Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', effectiveCanonicalUrl);

    // 6. JSON-LD Injection
    let scriptTag = document.getElementById('jsonld-structured-data');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'jsonld-structured-data');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, description, effectiveCanonicalUrl, ogImage, robots, jsonLd]);

  return null;
}
