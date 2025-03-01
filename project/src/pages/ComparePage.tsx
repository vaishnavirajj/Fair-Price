import React, { useState } from 'react';
import { ArrowRight, Search, TrendingUp, BarChart3 } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { Link } from 'react-router-dom';

const ComparePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products that have comparison data
  const productsWithComparisons = mockProducts.filter(
    product => product.comparisonProducts && 
    (product.comparisonProducts.female || product.comparisonProducts.male)
  );
  
  // Filter based on search term
  const filteredProducts = searchTerm 
    ? productsWithComparisons.filter(
        product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productsWithComparisons;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Compare & Save</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            See the "pink tax" in action. We compare similar products marketed to different genders
            to show you how much you can save by choosing unisex alternatives.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products to compare..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 pl-12"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">42%</div>
              <p className="text-gray-600">
                Average markup on women's personal care products compared to men's
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$1,300</div>
              <p className="text-gray-600">
                Average annual cost of the pink tax per woman
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25%</div>
              <p className="text-gray-600">
                Average savings when choosing unisex alternatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Product Comparisons</h2>
          
          {filteredProducts.length > 0 ? (
            <div className="space-y-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Female Product */}
                    {product.comparisonProducts?.female && (
                      <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-pink-50">
                        <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full inline-block mb-4">
                          Women's Version
                        </div>
                        <div className="flex items-start">
                          <img 
                            src={product.comparisonProducts.female.image} 
                            alt={product.comparisonProducts.female.name}
                            className="w-20 h-20 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="font-semibold mb-1">{product.comparisonProducts.female.name}</h3>
                            <p className="text-2xl font-bold text-pink-600 mb-2">
                              ${product.comparisonProducts.female.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Unisex Product */}
                    <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-purple-50">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-block mb-4">
                        Unisex Alternative
                      </div>
                      <div className="flex items-start">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />
                        <div>
                          <h3 className="font-semibold mb-1">{product.name}</h3>
                          <p className="text-2xl font-bold text-purple-600 mb-2">
                            ${product.price.toFixed(2)}
                          </p>
                          <Link 
                            to={`/products/${product.id}`}
                            className="text-sm text-purple-600 hover:text-purple-800 inline-flex items-center"
                          >
                            View Product
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Male Product */}
                    {product.comparisonProducts?.male && (
                      <div className="p-6 bg-blue-50">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mb-4">
                          Men's Version
                        </div>
                        <div className="flex items-start">
                          <img 
                            src={product.comparisonProducts.male.image} 
                            alt={product.comparisonProducts.male.name}
                            className="w-20 h-20 object-cover rounded-md mr-4"
                          />
                          <div>
                            <h3 className="font-semibold mb-1">{product.comparisonProducts.male.name}</h3>
                            <p className="text-2xl font-bold text-blue-600 mb-2">
                              ${product.comparisonProducts.male.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-gray-100 p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <span className="font-medium">Pink Tax Premium: </span>
                        <span className="text-xl font-bold text-red-600">
                          {product.comparisonProducts?.female && 
                            `${Math.round((product.comparisonProducts.female.price - product.price) / product.price * 100)}%`}
                        </span>
                        <span className="text-gray-600 ml-2">
                          (${product.comparisonProducts?.female && 
                            (product.comparisonProducts.female.price - product.price).toFixed(2)} more)
                        </span>
                      </div>
                      
                      <div>
                        <span className="font-medium">Savings vs Women's Version: </span>
                        <span className="text-xl font-bold text-green-600">
                          ${product.comparisonProducts?.female && 
                            (product.comparisonProducts.female.price - product.price).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search term to find what you're looking for.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Price Trends */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Price Trend Analysis</h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered analysis tracks price trends across different product categories to identify 
                where the pink tax is most prevalent. This helps you make informed purchasing decisions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Price Tracking</h3>
                    <p className="text-sm text-gray-600">
                      We monitor prices across major retailers to find the best deals.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Category Analysis</h3>
                    <p className="text-sm text-gray-600">
                      See which product categories have the highest gender price disparities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Pink Tax by Category</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Razors & Shaving</span>
                      <span className="text-sm font-medium text-red-600">+42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Deodorant</span>
                      <span className="text-sm font-medium text-red-600">+35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Shampoo & Conditioner</span>
                      <span className="text-sm font-medium text-red-600">+28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Body Wash</span>
                      <span className="text-sm font-medium text-red-600">+25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Clothing</span>
                      <span className="text-sm font-medium text-red-600">+15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Paying the Pink Tax?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our collection of unisex products and start saving today.
          </p>
          
          <Link 
            to="/products" 
            className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComparePage;