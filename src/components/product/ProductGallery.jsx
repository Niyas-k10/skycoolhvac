import { ProductImageFallback } from '../ui/ProductImageFallback.jsx';
import { Badge } from '../ui/Badge.jsx';

export function ProductGallery({ product }) {
  return (
    <div className="space-y-4">
      {/* Main Image Frame */}
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
        <ProductImageFallback
          categorySlug={product.categorySlug}
          name={product.name}
          brand={product.brand}
        />
        <div className="absolute top-4 left-4">
          <Badge variant="whatsapp">Genuine OEM Standard</Badge>
        </div>
      </div>
    </div>
  );
}
