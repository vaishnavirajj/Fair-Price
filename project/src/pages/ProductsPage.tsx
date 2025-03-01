import React, { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { mockProducts, categories } from '../data/mockData';

const ProductsPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [onlyUnisex, setOnlyUnisex] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);

  // Filter products based on selected filters
  const filteredProducts = mockProducts.filter(product => {
    // Filter by category
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Filter by unisex
    if (onlyUnisex && !product.isUnisex) {
      return false;
    }
    
    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    return true;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'savings':
        return b.pinkTaxSavings - a.pinkTaxSavings;
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0; // featured - no specific sort
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop All Products</h1>
      
      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full bg-gray-100 p-3 rounded-md flex items-center justify-center"
        >
          <Filter className="h-5 w-5 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filters sidebar */}
        <div className={`w-full md:w-64 md:block ${showFilters ? 'block' : 'hidden'}`}>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
            </div>
            
            {/* Category filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="all-categories"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor="all-categories" className="ml-2 text-sm text-gray-700">
                    All Categories
                  </label>
                </div>
                
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Unisex filter */}
            <div className="mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="unisex-only"
                  checked={onlyUnisex}
                  onChange={() => setOnlyUnisex(!onlyUnisex)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="unisex-only" className="ml-2 text-sm text-gray-700">
                  Unisex Products Only
                </label>
              </div>
            </div>
            
            {/* Price range filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">${priceRange[0]}</span>
                <span className="text-sm text-gray-600">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            {/* Clear filters button */}
            <button
              onClick={() => {
                setSelectedCategory(null);
                setOnlyUnisex(false);
                setPriceRange([0, 50]);
                setSortBy('featured');
              }}
              className="w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="flex-1 md:ml-6">
          {/* Sort options */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-600">
                  Showing {sortedProducts.length} products
                </span>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="savings">Highest Savings</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setOnlyUnisex(false);
                  setPriceRange([0, 50]);
                }}
                className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;