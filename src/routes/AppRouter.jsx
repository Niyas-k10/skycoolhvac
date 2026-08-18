import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.jsx';
import { ProductsPage } from '../pages/ProductsPage.jsx';
import { CategoryPage } from '../pages/CategoryPage.jsx';
import { ProductDetailPage } from '../pages/ProductDetailPage.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { BrandsPage } from '../pages/BrandsPage.jsx';
import { FAQPage } from '../pages/FAQPage.jsx';
import { ContactPage } from '../pages/ContactPage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:categorySlug" element={<CategoryPage />} />
      <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
