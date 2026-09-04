import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { ProductCatalogSection } from '../components/sections/ProductCatalogSection.jsx';
import { getBreadcrumbSchema } from '../utils/seoHelpers.js';

export function ProductsPage() {
  const breadcrumbs = [{ name: 'Products Catalogue', url: '/products' }];

  return (
    <div className="space-y-6 pb-16">
      <SEOHead
        title="AC & HVAC Spare Parts Catalogue Dubai | Sky Cool HVAC Trading LLC"
        description="Explore our full catalogue of AC and HVAC spare parts in Dubai including compressors, fan motors, capacitors, thermostats, copper coils, actuators and refrigerants."
        jsonLd={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Main 10 Category Catalogue Navigation Section */}
      <ProductCatalogSection />
    </div>
  );
}
