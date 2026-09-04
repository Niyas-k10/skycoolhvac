import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CATEGORIES } from '../data/categories.js';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { getBreadcrumbSchema } from '../utils/seoHelpers.js';

const CATEGORY_ALIAS_MAP = {
  'ac-spare-parts': 'ac',
  'actuators': 'actuator',
  'capacitors': 'capacitor',
  'coils': 'coil',
  'compressors': 'compressor',
  'refrigerants': 'gas',
  'motors': 'motor',
  'fan-motors': 'motor',
  'thermostats': 'thermostat',
  'ac-remote-controls': 'ac',
  'ac-tools': 'copper',
  'hvac-components': 'duct-materials'
};

const CATEGORY_SEO = {
  ac: {
    title: 'AC Spare Parts Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'All types of air conditioners and AC spare parts available to meet your residential, commercial, and professional cooling requirements in Dubai and the UAE.'
  },
  'ac-spare-parts': {
    title: 'AC Spare Parts Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Explore genuine AC spare parts including PCB control boards, capacitors, contactors, expansion valves, and filter driers supplied in Dubai, UAE.'
  },
  actuator: {
    title: 'HVAC Actuators Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Electric actuators with valves for HVAC control systems. Contact Sky Cool HVAC Trading LLC in Dubai, UAE for technical support and quotes.'
  },
  actuators: {
    title: 'HVAC Actuators Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Electric actuators with valves for HVAC control systems. Contact Sky Cool HVAC Trading LLC in Dubai, UAE for technical support and quotes.'
  },
  capacitor: {
    title: 'HVAC Capacitors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Heavy-duty CBB65 run and start capacitors for AC compressors and fan motors in Dubai, UAE. Contact Sky Cool HVAC Trading LLC.'
  },
  capacitors: {
    title: 'HVAC Capacitors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Heavy-duty CBB65 run and start capacitors for AC compressors and fan motors in Dubai, UAE. Contact Sky Cool HVAC Trading LLC.'
  },
  coil: {
    title: 'Cooling & Evaporator Coils Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Cooling coils, evaporator coils, and straight copper pipes for HVAC systems supplied across Dubai and the UAE.'
  },
  coils: {
    title: 'Cooling & Evaporator Coils Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Cooling coils, evaporator coils, and straight copper pipes for HVAC systems supplied across Dubai and the UAE.'
  },
  compressor: {
    title: 'AC Compressors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Rotary, scroll, and reciprocating AC compressors for residential and commercial cooling systems in Dubai and the UAE.'
  },
  compressors: {
    title: 'AC Compressors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Rotary, scroll, and reciprocating AC compressors for residential and commercial cooling systems in Dubai and the UAE.'
  },
  copper: {
    title: 'Copper Refrigeration Components in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Refrigeration copper fittings, line sets, and copper tubing for HVAC and cooling systems supplied by Sky Cool HVAC in Dubai, UAE.'
  },
  'duct-materials': {
    title: 'HVAC Duct Materials & Accessories in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Air duct materials, flexible connectors, insulation pins, and ventilation accessories supplied across Dubai and the UAE.'
  },
  'hvac-components': {
    title: 'HVAC & Refrigeration Components in Dubai | Sky Cool HVAC Trading LLC',
    description: 'High-quality HVAC components, duct accessories, pressure gauges, heat exchangers, and plumbing valves in Dubai, UAE.'
  },
  gas: {
    title: 'Refrigerant Gas Cylinders Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'R22, R410A, R404A, R407C, and R134a refrigerant gas cylinders for AC servicing and cooling systems in Dubai, UAE.'
  },
  refrigerants: {
    title: 'Refrigerant Gas Cylinders Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'R22, R410A, R404A, R407C, and R134a refrigerant gas cylinders for AC servicing and cooling systems in Dubai, UAE.'
  },
  motor: {
    title: 'AC Motors & Fan Motors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'AC fan motors, condenser motors, blower motors, and BLDC inverter fan motors supplied by Sky Cool HVAC Trading LLC in Dubai.'
  },
  motors: {
    title: 'AC Motors & Fan Motors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'AC fan motors, condenser motors, blower motors, and BLDC inverter fan motors supplied by Sky Cool HVAC Trading LLC in Dubai.'
  },
  'fan-motors': {
    title: 'AC Motors & Fan Motors Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'AC fan motors, condenser motors, blower motors, and BLDC inverter fan motors supplied by Sky Cool HVAC Trading LLC in Dubai.'
  },
  'fan-blade': {
    title: 'HVAC Fan Blades Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Propeller fan blades and axial fan blades for air conditioning and ventilation equipment supplied by Sky Cool HVAC in Dubai.'
  },
  blowers: {
    title: 'HVAC Ventilation Blowers Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Centrifugal blowers and air conditioning ventilation blowers for commercial and residential HVAC systems in Dubai, UAE.'
  },
  thermostat: {
    title: 'HVAC Thermostats Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Digital LCD room thermostats, Honeywell fan coil thermostats, and temperature controllers for HVAC systems in Dubai and UAE.'
  },
  thermostats: {
    title: 'HVAC Thermostats Supplier in Dubai | Sky Cool HVAC Trading LLC',
    description: 'Digital LCD room thermostats, Honeywell fan coil thermostats, and temperature controllers for HVAC systems in Dubai and UAE.'
  }
};

function ProductCard({ product, categoryName }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex items-center justify-center shadow-xs hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 group overflow-hidden">
      <div className="w-full aspect-square sm:aspect-4/3 rounded-xl bg-slate-50/50 p-3 flex items-center justify-center overflow-hidden border border-slate-100/80">
        <img
          src={product.image}
          alt={product.name || `${categoryName} component supplied by Sky Cool HVAC Trading LLC Dubai`}
          className="max-w-full max-h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function CategoryPage() {
  const { categorySlug } = useParams();
  const targetSlug = CATEGORY_ALIAS_MAP[categorySlug] || categorySlug;
  const category = CATEGORIES.find((c) => c.slug === targetSlug);

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

  const categoryMeta = CATEGORY_SEO[categorySlug] || CATEGORY_SEO[category.slug] || {
    title: `${category.name} Supplier in Dubai | Sky Cool HVAC Trading LLC`,
    description: `Explore ${category.name} components supplied by Sky Cool HVAC Trading LLC in Dubai and across the UAE. ${category.shortDescription}`
  };

  const canonicalCategoryUrl = `https://skycoolhvactrading.com/products/${categorySlug}`;

  const breadcrumbs = [
    { name: 'Products Catalogue', url: '/products' },
    { name: category.name, url: `/products/${categorySlug}` }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12 pb-20">
      <SEOHead
        title={categoryMeta.title}
        description={categoryMeta.description}
        canonicalUrl={canonicalCategoryUrl}
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
              <ProductCard key={product.id} product={product} categoryName={category.name} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
