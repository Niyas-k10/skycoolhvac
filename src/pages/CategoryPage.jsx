import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES } from '../data/categories.js';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { getBreadcrumbSchema } from '../utils/seoHelpers.js';

const CATEGORY_SEO = {
  ac: {
    title: 'Air Conditioner Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of air conditioners are available to meet your residential, commercial, and professional cooling requirements. Contact Sky Cool HVAC Trading LLC in Dubai.'
  },
  actuator: {
    title: 'Actuator With Valve Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Actuactor with valve are available. Contact Sky Cool HVAC Trading LLC in Dubai, UAE for expert assistance.'
  },
  capacitor: {
    title: 'HVAC Capacitors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Capacitors are available. Contact Sky Cool HVAC Trading LLC in Dubai for run and start capacitor enquiries.'
  },
  coil: {
    title: 'Cooling & Evaporator Coils Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Coils are available. Contact Sky Cool HVAC Trading LLC in Dubai for cooling and evaporator coil enquiries.'
  },
  compressor: {
    title: 'AC Compressors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Compressors are available. Contact Sky Cool HVAC Trading LLC in Dubai for rotary, scroll, and reciprocating compressors.'
  },
  copper: {
    title: 'Copper Fittings Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Copper Fittings are available. Contact Sky Cool HVAC Trading LLC in Dubai for refrigeration copper fitting enquiries.'
  },
  'duct-materials': {
    title: 'HVAC Duct Materials & Accessories in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Duct Materials are available. Contact Sky Cool HVAC Trading LLC in Dubai for ducting and ventilation materials.'
  },
  gas: {
    title: 'Refrigerant Gas Cylinders Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Gases are available. Contact Sky Cool HVAC Trading LLC in Dubai for refrigerant gas cylinder enquiries.'
  },
  motor: {
    title: 'AC Motors & Fan Motors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Motors are available. Contact Sky Cool HVAC Trading LLC in Dubai for fan motors and blower motors.'
  },
  'fan-blade': {
    title: 'Fan Blade Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Fan Blades are available. Contact Sky Cool HVAC Trading LLC in Dubai for HVAC fan blades and propellers.'
  },
  blowers: {
    title: 'Blowers Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of Blowers are available. Contact Sky Cool HVAC Trading LLC in Dubai for HVAC ventilation blowers.'
  }
};

function ProductCard({ product }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex items-center justify-center shadow-xs hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="w-full aspect-square sm:aspect-4/3 rounded-xl bg-slate-50/50 p-3 flex items-center justify-center overflow-hidden border border-slate-100/80">
        <img
          src={product.image}
          alt=""
          className="max-w-full max-h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function CategoryPage() {
  const { categorySlug } = useParams();
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Category Not Found</h1>
        <p className="text-slate-600">The requested product category does not exist in our catalogue.</p>
        <Link to="/products" className="inline-flex items-center gap-2 text-[#2563EB] font-bold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>
      </div>
    );
  }

  const categoryMeta = CATEGORY_SEO[category.slug] || {
    title: `${category.name} Supplier in Dubai | Sky Cool HVAC Trading LLC`,
    description: `Explore ${category.name} components supplied by Sky Cool HVAC Trading LLC in Dubai and across the UAE. ${category.shortDescription}`
  };

  const breadcrumbs = [
    { name: 'Products Catalogue', url: '/products' },
    { name: category.name, url: `/products/${category.slug}` }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12 pb-20">
      <SEOHead
        title={categoryMeta.title}
        description={categoryMeta.description}
        jsonLd={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Back Link & Category Page Header */}
        <div className="space-y-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#2563EB] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                PRODUCT CATEGORY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                {category.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#2563EB]">
                {category.subtitle}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
              {category.longDescription}
            </p>
          </div>
        </div>

        {/* Reference Products Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Available {category.name} Products
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
