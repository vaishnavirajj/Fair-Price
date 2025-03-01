import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Search, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { mockProducts } from '../data/mockData';

const HomePage: React.FC = () => {
  // Get featured products (first 4 from mock data)
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop Fair. Pay Less.
              </h1>
              <p className="text-xl mb-8">
                Discover products without the "pink tax" markup. 
                We compare prices across genders to help you make informed choices.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/products" 
                  className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/compare" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  Compare Prices
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="People shopping" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help You Save</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Price Comparison</h3>
              <p className="text-gray-600">
                We analyze similar products marketed to different genders and show you the price difference.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our AI identifies price trends and predicts when products are marked up due to gender-specific marketing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unisex Alternatives</h3>
              <p className="text-gray-600">
                We offer a curated selection of unisex products that provide the same quality without the gender markup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/products" 
              className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Example */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">See The Pink Tax In Action</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <div className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full inline-block mb-4">
                  Women's Version
                </div>
                <h3 className="text-2xl font-bold mb-2">Women's Razor</h3>
                <p className="text-3xl font-bold text-pink-600 mb-4">$12.99</p>
                <p className="text-gray-600 mb-6">
                  5-blade razor with moisturizing strip and ergonomic handle. Pink color.
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">Price per unit: $2.60</span>
                </div>
              </div>
              
              <div className="p-8 bg-gray-50">
                <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full inline-block mb-4">
                  Men's Version
                </div>
                <h3 className="text-2xl font-bold mb-2">Men's Razor</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$8.99</p>
                <p className="text-gray-600 mb-6">
                  5-blade razor with moisturizing strip and ergonomic handle. Blue color.
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">Price per unit: $1.80</span>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-700 text-white p-4 text-center">
              <p className="text-lg font-semibold">
                Pink Tax Premium: <span className="text-2xl">44% Higher</span>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/compare" 
              className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors inline-flex items-center"
            >
              See More Comparisons
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest updates on new products, price comparisons, and tips to avoid the pink tax.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-l-md text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-purple-900 px-6 py-3 rounded-r-md font-medium hover:bg-purple-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;