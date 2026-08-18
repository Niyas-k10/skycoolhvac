import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card.jsx';
import { Badge } from '../ui/Badge.jsx';
import { Button } from '../ui/Button.jsx';
import { ProductImageFallback } from '../ui/ProductImageFallback.jsx';
import { useWhatsAppLink } from '../../hooks/useWhatsAppLink.js';

export function ProductCard({ product }) {
  const { getProductWhatsAppUrl } = useWhatsAppLink();

  return (
    <Card className="flex flex-col h-full group border-slate-200 hover:border-sky-300">
      {/* Product Image Header */}
      <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
        <ProductImageFallback
          categorySlug={product.categorySlug}
          name={product.name}
          brand={product.brand}
        />

        {/* Featured Tag */}
        {product.isFeatured && (
          <div className="absolute top-3 left-3">
            <Badge variant="amber">Featured Part</Badge>
          </div>
        )}

        {/* Category Tag */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="dark" className="opacity-90 backdrop-blur-md">
            {product.categoryName}
          </Badge>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Brand & Model */}
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="text-sky-700 font-semibold">{product.brand}</span>
            {product.model && (
              <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-mono">
                Model: {product.model}
              </span>
            )}
          </div>

          {/* Product Name Title */}
          <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-sky-600 transition-colors line-clamp-2">
            <Link to={`/products/${product.categorySlug}/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Specifications Preview */}
          {product.specifications && (
            <div className="pt-2 grid grid-cols-2 gap-1.5 text-[11px] text-slate-600">
              {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
                <div key={key} className="bg-slate-50 p-1.5 rounded border border-slate-100 line-clamp-1">
                  <span className="font-bold text-slate-700">{key}:</span> {val}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Stock Note & CTAs */}
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Dubai Warehouse Ready</span>
            </span>
            <span className="text-slate-400 font-medium">Wholesale & Retail</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button
              href={getProductWhatsAppUrl(product)}
              variant="whatsapp"
              size="sm"
              icon={MessageSquare}
              fullWidth
            >
              Enquire
            </Button>
            <Link
              to={`/products/${product.categorySlug}/${product.slug}`}
              className="inline-flex items-center justify-center font-semibold rounded-xl text-xs px-3 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors gap-1"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
