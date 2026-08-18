import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { ProductGallery } from '../components/product/ProductGallery.jsx';
import { ProductSpecsTable } from '../components/product/ProductSpecsTable.jsx';
import { RelatedProducts } from '../components/product/RelatedProducts.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';
import { getProductSchema, getBreadcrumbSchema } from '../utils/seoHelpers.js';
import { MessageSquare, Phone, ShieldCheck, MapPin, CheckCircle2, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config.js';

export function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();
  const { getProductWhatsAppUrl } = useWhatsAppLink();

  const product = PRODUCTS.find(
    (p) => p.categorySlug === categorySlug && p.slug === productSlug
  );

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Product Showcase Not Found</h1>
        <p className="text-slate-600">The product spare part you are looking for is not listed in our reference catalog.</p>
        <Link to="/products" className="inline-flex items-center gap-2 text-sky-600 font-bold">
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Products</span>
        </Link>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.slug === product.categorySlug);

  const breadcrumbs = [
    { name: 'Products Showcase', url: '/products' },
    { name: category?.name || product.categoryName, url: `/products/${product.categorySlug}` },
    { name: product.name, url: `/products/${product.categorySlug}/${product.slug}` }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12 pb-16">
      <SEOHead
        title={product.seo?.metaTitle || `${product.name} | Sky Cool HVAC Trading LLC`}
        description={product.seo?.metaDescription || `${product.shortDescription || product.name} Supplied by Sky Cool HVAC Trading LLC in Dubai, UAE.`}
        jsonLd={[
          getProductSchema(product),
          getBreadcrumbSchema(breadcrumbs)
        ]}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Gallery & Overview */}
        <div className="lg:col-span-7 space-y-8">
          <ProductGallery product={product} />

          {/* Description Section */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-2xs">
            <h3 className="font-bold text-slate-900 text-lg sm:text-xl">
              Product Overview & Application
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-sky-700">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Original OEM Specification
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dubai Warehouse Pickup Ready
              </span>
            </div>
          </div>

          {/* Technical Specs Table */}
          <ProductSpecsTable specifications={product.specifications} />
        </div>

        {/* Right Sticky Conversion Card */}
        <div className="lg:col-span-5">
          <div className="sticky top-28 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="primary">{product.brand}</Badge>
                {product.model && (
                  <span className="text-xs font-mono font-semibold bg-slate-100 px-2.5 py-1 rounded text-slate-700">
                    Model: {product.model}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Available for Immediate WhatsApp Quote</span>
              </div>
            </div>

            {/* Note on Price & Quote */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">Why are prices not shown online?</p>
              <p>We provide real-time wholesale and retail trade pricing in UAE Dirhams (AED) via WhatsApp based on your order quantity.</p>
            </div>

            {/* Conversion Actions */}
            <div className="space-y-3 pt-2">
              <Button
                href={getProductWhatsAppUrl(product)}
                variant="whatsapp"
                size="lg"
                fullWidth
                icon={MessageSquare}
              >
                Enquire Price on WhatsApp
              </Button>

              <Button
                href={`tel:${SITE_CONFIG.contact.phoneCall}`}
                variant="outline"
                size="lg"
                fullWidth
                icon={Phone}
              >
                Call Sales Desk
              </Button>
            </div>

            {/* Dubai Pickup & Support info */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                * Same-day delivery available across Dubai, Sharjah, Abu Dhabi & all UAE Emirates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Category Products */}
      <RelatedProducts
        currentProductId={product.id}
        categorySlug={product.categorySlug}
      />
    </div>
  );
}
