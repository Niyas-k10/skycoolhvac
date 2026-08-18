import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';
import { ShieldCheck, Boxes, Headphones, Handshake, Building2, Home, Factory, Wrench } from 'lucide-react';

export function AboutPage() {
  const { getGeneralWhatsAppUrl } = useWhatsAppLink();

  return (
    <div className="bg-slate-50/50 min-h-screen py-8 sm:py-12 pb-20">
      <SEOHead
        title="About Us | Sky Cool HVAC Trading LLC Dubai"
        description="Learn about Sky Cool HVAC Trading LLC, a trusted supplier of AC spare parts and HVAC cooling components located in Jebel Ali, Dubai, UAE."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Breadcrumb & Main Page Header */}
        <div className="space-y-4">
          <Breadcrumbs items={[{ name: 'About Our Service', url: '/about' }]} />

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              DUBAI HVAC SUPPLIER
            </span>
            
            {/* EXACT REQUIRED PRIMARY HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              ABOUT OUR SERVICE
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-4xl pt-1">
              Sky Cool HVAC Trading LLC is a Dubai-based supplier specializing in HVAC and air-conditioning spare parts and cooling components for residential, commercial, and industrial applications.
            </p>
          </div>
        </div>

        {/* SECTION 1: OUR APPROACH */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              OUR APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Dependable Sourcing & Service Focus
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            <p>
              We focus on providing dependable products and practical sourcing solutions for HVAC professionals, businesses, technicians, and customers looking for reliable replacement components. Our product range covers a variety of HVAC and AC spare parts to support different cooling and air-conditioning requirements.
            </p>
            <p>
              With a commitment to reliable products, competitive solutions, and responsive service, we aim to make HVAC spare-parts sourcing simple, efficient, and convenient for our customers across Dubai and the wider UAE.
            </p>
            <p>
              Our approach is straightforward: understand the requirement, provide suitable product options, and support customers with responsive service throughout the enquiry process.
            </p>
          </div>
        </div>

        {/* SECTION 2: WHAT WE PROVIDE */}
        <div className="space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              PRODUCT & SERVICE COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              What We Provide
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive AC replacement parts and climate control components tailored for diverse UAE applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#2563EB]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                HVAC & AC Spare Parts
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Essential replacement components including compressors, fan motors, control boards, capacitors, and digital thermostats.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#2563EB]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Cooling Components
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Quality heat exchange coils, copper tubing line sets, expansion valves, actuators, and refrigeration gas cylinders.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#2563EB]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Commercial HVAC Requirements
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Practical component sourcing for office buildings, shopping malls, retail outlets, and commercial facility management.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#2563EB]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Industrial HVAC Requirements
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Heavy-duty replacement parts suitable for warehouse cooling, factory climate systems, and industrial plant maintenance.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#2563EB]/40 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                Residential AC Requirements
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dependable spare parts for split AC units, window air conditioners, and residential climate maintenance technicians.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHY CHOOSE SKY COOL */}
        <div className="space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              SERVICE COMMITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Why Choose Sky Cool
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Built on dependable product options and practical customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
              <h3 className="font-bold text-slate-900 text-base">
                Reliable Product Options
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sourcing quality HVAC spare parts engineered for demanding Middle East cooling conditions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <Boxes className="w-6 h-6 text-[#2563EB]" />
              <h3 className="font-bold text-slate-900 text-base">
                Competitive Solutions
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Practical product options and competitive pricing designed for contractors, technicians, and businesses.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <Headphones className="w-6 h-6 text-[#2563EB]" />
              <h3 className="font-bold text-slate-900 text-base">
                Responsive Service
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Quick assistance with product enquiries, availability checks, and technical specification guidance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3">
              <Handshake className="w-6 h-6 text-[#2563EB]" />
              <h3 className="font-bold text-slate-900 text-base">
                Practical HVAC Sourcing
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Aiming to build long-term business relationships through consistent product quality and service.
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION BLOCK */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have an HVAC Enquiry?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Contact our sales desk on WhatsApp for instant product availability checks and technical specification support.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={getGeneralWhatsAppUrl('Hello SkyCool, I would like to enquire about your HVAC spare parts service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-transform hover:scale-105 cursor-pointer"
            >
              <span>Contact Sales on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
