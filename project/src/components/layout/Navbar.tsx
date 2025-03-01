import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, Tag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Tag className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">FairPrice</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="px-3 py-2 rounded-md hover:bg-purple-600 transition-colors">
              Products
            </Link>
            <Link to="/compare" className="px-3 py-2 rounded-md hover:bg-purple-600 transition-colors">
              Compare
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-purple-600 transition-colors">
              About
            </Link>
            <div className="relative mx-2">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-8 pr-4 py-1 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-500" />
            </div>
            <button className="bg-white text-purple-700 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/compare" 
              className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md hover:bg-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="relative mt-3 mx-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-8 pr-4 py-1 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-500" />
            </div>
            <button className="mt-3 w-full bg-white text-purple-700 p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span>Cart</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;