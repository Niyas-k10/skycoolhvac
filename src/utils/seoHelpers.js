import { SITE_CONFIG } from '../config/site.config.js';
import { SEO_CONFIG } from '../config/seo.config.js';

export function getHVACBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SEO_CONFIG.baseUrl}/#organization`,
    "name": SITE_CONFIG.name,
    "url": SEO_CONFIG.baseUrl,
    "telephone": SITE_CONFIG.contact.phoneCall,
    "email": SITE_CONFIG.contact.email,
    "description": SITE_CONFIG.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.contact.address,
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    }
  };
}

export function getProductSchema(product) {
  if (!product) return null;
  const image = product.image ? (product.image.startsWith('http') ? product.image : `${SEO_CONFIG.baseUrl}${product.image}`) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    ...(image && { "image": image }),
    "description": product.shortDescription || product.fullDescription || product.name,
    "sku": product.id,
    "mpn": product.model || product.id,
    "brand": {
      "@type": "Brand",
      "name": product.brand || SITE_CONFIG.name
    },
    "offers": {
      "@type": "Offer",
      "url": `${SEO_CONFIG.baseUrl}/products/${product.categorySlug}/${product.slug}`,
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    }
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${SEO_CONFIG.baseUrl}${item.url}`
    }))
  };
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
