import { CATEGORIES } from '../../data/categories.js';
import { SearchInput } from '../ui/SearchInput.jsx';
import { Filter, RotateCcw } from 'lucide-react';

export function ProductFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedBrand,
  onBrandChange,
  totalCount,
  filteredCount,
  onReset
}) {
  const BRANDS_LIST = [
    'Copeland',
    'Danfoss',
    'Honeywell',
    'GMCC',
    'Panasonic',
    'LG',
    'Carrier',
    'Value'
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4 mb-8">
      {/* Top Search Bar & Brand Selector Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-8">
          <SearchInput
            value={searchQuery}
            onChange={onSearchChange}
            onClear={() => onSearchChange('')}
            placeholder="Search by part name, brand, model (e.g., PH225, Honeywell, Copeland)..."
          />
        </div>

        <div className="md:col-span-4 flex items-center gap-2">
          <div className="relative w-full">
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 cursor-pointer appearance-none"
            >
              <option value="all">All Brands (OEM & Compatible)</option>
              {BRANDS_LIST.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <Filter className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>

          {(searchQuery || selectedCategory !== 'all' || selectedBrand !== 'all') && (
            <button
              type="button"
              onClick={onReset}
              title="Reset Filters"
              className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Browse Category:
          </span>
          <span className="text-xs font-semibold text-slate-600">
            Showing {filteredCount} of {totalCount} spare parts
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => onCategoryChange('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories ({totalCount})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onCategoryChange(cat.slug)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.slug
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
