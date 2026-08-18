import { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products.js';

export function useProductFilter(initialCategorySlug = 'all') {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategorySlug);
  const [selectedBrand, setSelectedBrand] = useState('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      const matchesCategory =
        selectedCategory === 'all' || product.categorySlug === selectedCategory;

      // 2. Brand Filter
      const matchesBrand =
        selectedBrand === 'all' ||
        product.brand.toLowerCase().includes(selectedBrand.toLowerCase());

      // 3. Search Query Filter (matches name, brand, model, description, category)
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        (product.model && product.model.toLowerCase().includes(query)) ||
        product.categoryName.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedBrand]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    filteredProducts,
    totalProductsCount: PRODUCTS.length,
    filteredCount: filteredProducts.length,
    resetFilters
  };
}
