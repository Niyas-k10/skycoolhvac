import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage.jsx';
import { ProductsPage } from '../pages/ProductsPage.jsx';
import { CategoryPage } from '../pages/CategoryPage.jsx';
import { AboutPage } from '../pages/AboutPage.jsx';
import { BrandsPage } from '../pages/BrandsPage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:categorySlug" element={<CategoryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
