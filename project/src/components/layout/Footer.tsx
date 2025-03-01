import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Tag className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">FairPrice</span>
            </div>
            <p className="text-gray-300 mb-4">
              Fighting the pink tax with transparent pricing and unisex alternatives.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-300 hover:text-white transition-colors">Compare Prices</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=personal-care" className="text-gray-300 hover:text-white transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link to="/products?category=clothing" className="text-gray-300 hover:text-white transition-colors">
                  Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=health" className="text-gray-300 hover:text-white transition-colors">
                  Health Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="flex items-center text-gray-300 mb-2">
              <Mail className="h-5 w-5 mr-2" />
              info@fairprice.com
            </p>
            <form className="mt-4">
              <label htmlFor="newsletter" className="block text-sm font-medium text-gray-300 mb-2">
                Subscribe to our newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="newsletter"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2025 FairPrice. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;