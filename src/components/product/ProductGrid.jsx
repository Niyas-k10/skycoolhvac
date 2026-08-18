import { ProductCard } from './ProductCard.jsx';
import { PackageSearch, RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button.jsx';

export function ProductGrid({ products = [], onResetFilters }) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto my-8 space-y-4">
        <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mx-auto text-sky-600">
          <PackageSearch className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-slate-900">No Matching Parts Found</h3>
          <p className="text-sm text-slate-500">
            We couldn't find any products matching your search terms or filters. Try adjusting your category or keyword.
          </p>
        </div>
        {onResetFilters && (
          <Button
            onClick={onResetFilters}
            variant="outline"
            size="md"
            icon={RefreshCw}
          >
            Reset All Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
