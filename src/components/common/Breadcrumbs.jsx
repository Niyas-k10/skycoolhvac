import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-1">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-slate-500">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-sky-600 transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.url ? (
                <span className="font-semibold text-slate-900 line-clamp-1">
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.url}
                  className="hover:text-sky-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
