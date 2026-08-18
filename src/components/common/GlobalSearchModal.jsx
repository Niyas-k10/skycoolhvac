import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products.js';
import { ProductImageFallback } from '../ui/ProductImageFallback.jsx';

export function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.brand.toLowerCase().includes(query.toLowerCase()) ||
          (p.model && p.model.toLowerCase().includes(query.toLowerCase())) ||
          p.categoryName.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl w-full max-w-2xl overflow-hidden space-y-0">
        {/* Input Bar */}
        <div className="relative flex items-center p-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-sky-600 absolute left-6" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 48 spare parts by name, model, brand (e.g. PH225, Honeywell)..."
            className="w-full pl-10 pr-10 py-2.5 text-base sm:text-lg text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <p className="text-center text-xs text-slate-400 py-6 font-medium">
              Start typing to search AC compressors, fan motors, control boards, tools, and gas...
            </p>
          ) : results.length === 0 ? (
            <p className="text-center text-sm text-slate-500 py-6 font-medium">
              No matching spare parts found for "{query}".
            </p>
          ) : (
            results.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.categorySlug}/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-sky-50/80 transition-colors group border border-transparent hover:border-sky-100"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-900">
                  <ProductImageFallback
                    categorySlug={product.categorySlug}
                    name={product.name}
                    brand={product.brand}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                    {product.brand} {product.model ? `• Model: ${product.model}` : ''}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-500 truncate">{product.shortDescription}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
