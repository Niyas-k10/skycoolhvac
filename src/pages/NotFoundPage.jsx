import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { Snowflake, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <SEOHead
        title="Page Not Found | Sky Cool HVAC Trading LLC"
        description="The page you are looking for could not be found. Return to Sky Cool HVAC Trading LLC homepage."
        robots="noindex, follow"
      />

      <div className="w-20 h-20 rounded-3xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto text-sky-600 shadow-md">
        <Snowflake className="w-10 h-10 animate-spin-slow" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
          404 Error
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto">
          The requested page or spare part route does not exist. Explore our product categories or return home.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <Button href="/" variant="primary" size="md" icon={ArrowLeft}>
          Back to Home Page
        </Button>
        <Button href="/products" variant="outline" size="md">
          Browse All Products
        </Button>
      </div>
    </div>
  );
}
