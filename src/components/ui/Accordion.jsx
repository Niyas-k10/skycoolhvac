import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionItem({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left px-5 py-4 flex items-center justify-between font-semibold text-slate-800 hover:text-sky-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <span className="text-base sm:text-lg">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-sky-600' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export function Accordion({ items, className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.question} defaultOpen={index === 0}>
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
