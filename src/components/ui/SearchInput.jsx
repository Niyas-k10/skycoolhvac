import { Search, X } from 'lucide-react';

export function SearchInput({ value, onChange, onClear, placeholder = 'Search AC spare parts, compressors, models...', className = '' }) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all shadow-sm"
      />
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search query"
          className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
