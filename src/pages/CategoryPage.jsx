import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { CATEGORIES } from '../data/categories.js';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';
import { getBreadcrumbSchema } from '../utils/seoHelpers.js';

const CATEGORY_SEO = {
  ac: {
    title: 'AC Spare Parts & Air Conditioning Units in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Explore split AC units and air conditioning components supplied by Sky Cool HVAC Trading LLC in Dubai and across the UAE.'
  },
  actuator: {
    title: 'HVAC Actuators Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Browse precision electric damper actuators, spring-return actuators, and valve controls supplied by Sky Cool HVAC Trading LLC in Dubai, UAE.'
  },
  capacitor: {
    title: 'HVAC Capacitors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Quality CBB65 dual run capacitors and AC motor start capacitors supplied by Sky Cool HVAC Trading LLC across Dubai and the UAE.'
  },
  coil: {
    title: 'Cooling & Evaporator Coils Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Indoor evaporator coils, soft copper pancake coils, and heat exchangers supplied by Sky Cool HVAC Trading LLC in Dubai and the UAE.'
  },
  compressor: {
    title: 'AC Compressors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Genuine rotary, scroll, and reciprocating AC compressors for residential and commercial cooling supplied by Sky Cool HVAC Trading LLC in Dubai.'
  },
  copper: {
    title: 'Copper Refrigeration Components in Dubai | Sky Cool HVAC Trading LLC',
    description: 'ASTM ACR copper tubing, long turn elbows, and refrigeration copper fittings supplied by Sky Cool HVAC Trading LLC in Dubai, UAE.'
  },
  'duct-materials': {
    title: 'HVAC Duct Materials & Accessories in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Aluminium duct tape, flexible PVC ducts, pre-insulated phenolic sheets, and canvas cloth supplied by Sky Cool HVAC Trading LLC in Dubai.'
  },
  gas: {
    title: 'Refrigerant Gas Cylinders Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'R410A, R22, R134a, and R404A refrigerant gas cylinders supplied for AC servicing and cooling maintenance in Dubai and the UAE.'
  },
  motor: {
    title: 'AC Motors & Fan Motors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Outdoor condenser fan motors, indoor FCU blower motors, and air cooler motors supplied by Sky Cool HVAC Trading LLC in Dubai, UAE.'
  },
  thermostat: {
    title: 'HVAC Thermostats Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Honeywell digital room thermostats and FCU wall controllers supplied by Sky Cool HVAC Trading LLC in Dubai and the UAE.'
  }
};

function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { getProductWhatsAppUrl } = useWhatsAppLink();

  return (
<div className="rounded-2xl border border-slate-200 bg-white/80 p-6 flex flex-col justify-between shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:border-[#2563EB]/40 hover:shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition-all duration-300 group">      <div className="space-y-4">
        {/* Product Image Frame */}
        <div className="w-full h-60 rounded-xl bg-slate-50 p-1 flex items-center justify-center overflow-hidden border border-slate-100 bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain transform transition-transform duration-400 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Product Title */}
        <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl group-hover:text-[#2563EB] transition-colors leading-snug">
          {product.name}
        </h3>

        {/* Expandable Product Description */}
        <div className="space-y-2 text-slate-600 text-sm leading-relaxed">
          <p>
            {isExpanded ? product.fullDescription : product.shortDescription}
          </p>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#2563EB] hover:text-blue-700 transition-colors focus:outline-none cursor-pointer pt-1"
          >
            <span>{isExpanded ? 'View Less' : 'View More'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Card Footer: Stock Badge & WhatsApp Enquiry CTA */}
      <div className="pt-5 border-t border-slate-100 mt-5 space-y-3">
        {/* <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Dubai Warehouse Ready Stock</span>
        </div> */}

        <a
          href={getProductWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all hover:scale-[1.01]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Enquire on WhatsApp</span>
        </a>
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

        {/* 6 Reference Products Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Available {category.name} Products
            </h2>
            {/* <span className="text-xs font-semibold text-slate-500">
              Showing 6 Reference Items
            </span> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
