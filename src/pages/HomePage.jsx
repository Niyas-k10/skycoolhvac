import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { Hero } from '../components/sections/Hero.jsx';
import { OurProfile } from '../components/sections/OurProfile.jsx';
import { ProductCatalogSection } from '../components/sections/ProductCatalogSection.jsx';
import { BrandCarouselSection } from '../components/sections/BrandCarouselSection.jsx';
import { WhyChooseUs } from '../components/sections/WhyChooseUs.jsx';
import { Testimonials } from '../components/sections/Testimonials.jsx';
import { FAQSection } from '../components/sections/FAQSection.jsx';
import { ContactSection } from '../components/sections/ContactSection.jsx';
import { getHVACBusinessSchema } from '../utils/seoHelpers.js';

export function HomePage() {
  const location = useLocation();

  // Smooth scroll handler for incoming hash anchors (e.g. /#products, /#contact)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="space-y-0 pb-0 bg-white">
      <SEOHead
        title="AC Spare Parts Supplier in Dubai | Sky Cool HVAC Trading LLC"
        description="Sky Cool HVAC Trading LLC supplies AC and HVAC spare parts, compressors, motors, capacitors, thermostats, actuators and cooling components across Dubai and the UAE."
        jsonLd={getHVACBusinessSchema()}
      />

      {/* 1. HERO BANNER CAROUSEL */}
      <Hero />

      {/* 2. OUR PROFILE SECTION */}
      <OurProfile />

      {/* 3. PRODUCT SHOWCASE CATALOG */}
      <ProductCatalogSection />

      {/* 4. OUR TRUSTED BRANDS */}
      <BrandCarouselSection />

      {/* 5. WHY CHOOSE US? */}
      <WhyChooseUs />

      {/* 6. WHAT OUR CLIENTS SAY */}
      <Testimonials />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. CONTACT US / WHATSAPP ENQUIRY SECTION */}
      <ContactSection />
    </div>
  );
}
