export function Card({ children, className = '', hover = true }) {
  const hoverStyles = hover
    ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/5 hover:border-sky-300'
    : '';

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
