import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Single Source of Truth Navigation Data
  const NAV_ITEMS_LEFT = [
    { label: 'About', type: 'route', path: '/about' },
    { label: 'Products', type: 'anchor', path: '/#products', targetId: 'products' }
  ];

  const NAV_ITEMS_RIGHT = [
    { label: 'Brands', type: 'route', path: '/brands' },
    { label: 'Contact', type: 'anchor', path: '/#contact', targetId: 'contact' }
  ];

  const ALL_NAV_ITEMS = [...NAV_ITEMS_LEFT, ...NAV_ITEMS_RIGHT];

  // Smooth navigation handler for route and anchor links
  const handleNavClick = (e, item) => {
    setMobileMenuOpen(false);

    if (item.type === 'route') {
      e.preventDefault();
      navigate(item.path);
      return;
    }

    if (item.type === 'anchor') {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', item.path);
        }
      } else {
        // From /about or /brands, navigate to homepage anchor /#products or /#contact
        e.preventDefault();
        navigate(`/${item.path}`);
      }
    }
  };

  // Active route & section checker
  const isItemActive = (item) => {
    if (item.type === 'route') {
      return location.pathname === item.path;
    }
    if (item.type === 'anchor') {
      return location.pathname === '/' && location.hash === `#${item.targetId}`;
    }
    return false;
  };

  const isHomeActive = location.pathname === '/';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs">
      {/* Centered-Logo Navbar Container with Equal Responsive Outer Spacing */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 h-20 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        
        {/* DESKTOP LEFT NAVIGATION GROUP */}
        <nav
          className="hidden lg:flex items-center justify-start gap-8 lg:gap-10"
          aria-label="Left Main Navigation"
        >
          {NAV_ITEMS_LEFT.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded ${
                isItemActive(item)
                  ? 'text-sky-600 font-bold border-b-2 border-sky-600'
                  : 'text-slate-700 hover:text-sky-600 hover:opacity-90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CENTER CLIENT BRAND */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            aria-label="Sky Cool HVAC Trading LLC Home"
            className="inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl p-1 transition-opacity hover:opacity-95"
          >
            <div className="flex items-center justify-center gap-0 sm:gap-0">
              <img
                src="/images/logo.webp"
                alt="Sky Cool HVAC Trading LLC Logo"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-12 sm:h-14 w-auto max-w-[240px] sm:max-w-[280px] object-contain"
              />
              <div className="flex flex-col items-start justify-center whitespace-nowrap">
                <span
                  className={`block text-[18px] sm:text-[21px] font-extrabold tracking-[0.02em] leading-none cursor-pointer select-none transition-[opacity,text-shadow] duration-500 ease-out ${
                    isHomeActive ? 'text-slate-950 opacity-75' : 'text-slate-950 opacity-100'
                  }`}
                  style={{ fontFamily: 'Manrope, Arial, sans-serif' }}
                >
                  SKY COOL
                </span>
                <span
                  className="block w-full mt-1 px-1.5 py-[3px] text-center text-[8px] sm:text-[10px] font-medium tracking-[0.075em] text-slate-600 bg-slate-200 leading-none"
                  style={{ fontFamily: 'Manrope, Arial, sans-serif' }}
                >
                  HVAC TRADING LLC
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* DESKTOP RIGHT NAVIGATION GROUP */}
        <nav
          className="hidden lg:flex items-center justify-end gap-8 lg:gap-10"
          aria-label="Right Main Navigation"
        >
          {NAV_ITEMS_RIGHT.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded ${
                isItemActive(item)
                  ? 'text-sky-600 font-bold border-b-2 border-sky-600'
                  : 'text-slate-700 hover:text-sky-600 hover:opacity-90'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex lg:hidden items-center justify-end">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {ALL_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isItemActive(item)
                    ? 'text-sky-600 bg-sky-50 font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}