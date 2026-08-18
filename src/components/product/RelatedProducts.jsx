import { PRODUCTS } from '../../data/products.js';
import { ProductCard } from './ProductCard.jsx';

export function RelatedProducts({ currentProductId, categorySlug }) {
  const related = PRODUCTS.filter(
    (p) => p.categorySlug === categorySlug && p.id !== currentProductId
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="pt-12 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Related AC Spare Parts
          </h3>
          <p className="text-slate-500 text-sm">
            Other frequently requested items in this category
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
