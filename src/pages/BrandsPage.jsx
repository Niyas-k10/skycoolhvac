import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';

const AVAILABLE_BRANDS = [
  'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10',
  'b11', 'b12', 'b13', 'b14', 'b15', 'b17', 'b18', 'b20', 'b21', 'b23', 'b24'
];

const BRAND_IMAGES = AVAILABLE_BRANDS.map((num) => ({
  id: `brand-full-${num}`,
  number: num,
  image: `/brands/${num}.jpg`
}));

export function BrandsPage() {
  const { getGeneralWhatsAppUrl } = useWhatsAppLink();

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12 pb-20">
      <SEOHead
        title="HVAC Brands & OEM Components Dubai | Sky Cool HVAC Trading LLC"
        description="Explore genuine HVAC brand components supplied by Sky Cool HVAC Trading LLC in Dubai and the UAE, including Honeywell, Danfoss, Copeland, LG, and Panasonic."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Breadcrumbs items={[{ name: 'Our Trusted Brands', url: '/brands' }]} />
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#2563EB] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xs text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Our Trusted Brands
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Explore the brands we work with to provide reliable HVAC products and solutions across Dubai and the UAE.
            </p>
          </div>
        </div>

        {/* 21 Brands Responsive 5-Column Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {/* Heading without '24' string */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              All Brand Partners
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              Showing Verified Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {BRAND_IMAGES.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 h-32 sm:h-36 flex items-center justify-center shadow-2xs hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Full color image immediately without grayscale filter */}
                <img
                  src={brand.image}
                  alt="HVAC brand partner logo"
                  className="max-w-full max-h-full object-contain filter-none grayscale-0 opacity-100 transform group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Brand Enquiry Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Looking for a Specific Brand Component in Dubai?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact our sales desk on WhatsApp for instant availability and trade pricing on all OEM parts.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={getGeneralWhatsAppUrl('Hello SkyCool, I am looking for specific brand spare parts in Dubai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
