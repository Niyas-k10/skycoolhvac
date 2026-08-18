import { Check } from 'lucide-react';

export function ProductSpecsTable({ specifications }) {
  if (!specifications || Object.keys(specifications).length === 0) {
    return (
      <div className="bg-slate-50 p-4 rounded-xl text-slate-500 text-sm italic">
        Technical specifications available on direct WhatsApp enquiry.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
        <h4 className="font-bold text-sm sm:text-base tracking-wide">
          Technical Parameters & Specifications
        </h4>
        <span className="text-[11px] font-semibold text-sky-400 uppercase tracking-widest bg-sky-950 px-2.5 py-1 rounded-md border border-sky-800">
          T3 High Ambient Standard
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {Object.entries(specifications).map(([key, value], idx) => (
          <div
            key={key}
            className={`grid grid-cols-1 sm:grid-cols-3 px-5 py-3 text-xs sm:text-sm ${
              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
            }`}
          >
            <span className="font-semibold text-slate-700 flex items-center gap-2">
              <Check className="w-4 h-4 text-sky-600 shrink-0" />
              {key}
            </span>
            <span className="sm:col-span-2 text-slate-900 font-mono font-medium mt-0.5 sm:mt-0">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
