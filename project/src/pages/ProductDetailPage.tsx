import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ArrowLeft, Check, Info } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { Product } from '../types/product';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Find the product based on the ID
  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);
  
  // Get similar products (excluding the current one)
  const similarProducts = product 
    ? mockProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="inline-flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <Link to="/products" className="hover:text-purple-600 transition-colors">Products</Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <Link 
              to={`/products?category=${encodeURIComponent(product.category)}`} 
              className="hover:text-purple-600 transition-colors"
            >
              {product.category}
            </Link>
          </li>
          <li>
            <span>/</span>
          </li>
          <li className="text-gray-800 font-medium truncate">{product.name}</li>
        </ol>
      </nav>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="p-6 flex items-center justify-center bg-gray-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-96 object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="p-6">
            <div className="flex flex-wrap items-center mb-2">
              {product.isUnisex && (
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                  Unisex
                </span>
              )}
              {product.pinkTaxSavings > 0 && (
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Save {product.pinkTaxSavings}%
                </span>
              )}
            </div>
            
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            
            {product.rating && (
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Pink Tax Comparison */}
            {product.comparisonProducts && (
              <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-1 text-purple-600" />
                  Pink Tax Comparison
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.comparisonProducts.female && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-pink-600 font-bold">F</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Women's Version</p>
                        <p className="font-semibold">${product.comparisonProducts.female.price.toFixed(2)}</p>
                      </div>
                    </div>
                  )}
                  
                  {product.comparisonProducts.male && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">M</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Men's Version</p>
                        <p className="font-semibold">${product.comparisonProducts.male.price.toFixed(2)}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-2 text-sm">
                  <span className="font-medium">You save: </span>
                  <span className="text-green-600 font-semibold">
                    ${(Math.max(
                      (product.comparisonProducts.female?.price || 0),
                      (product.comparisonProducts.male?.price || 0)
                    ) - product.price).toFixed(2)}
                  </span>
                  <span> compared to the highest priced gendered version</span>
                </div>
              </div>
            )}
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-t border-b border-gray-300 py-1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mb-6">
              <button className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 sm:flex-none border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                Wishlist
              </button>
              <button className="flex-1 sm:flex-none border border-gray-300 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
            
            {/* Product Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Stock Status */}
            <div className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
              <span className={product.inStock ? 'text-green-700' : 'text-red-700'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'details'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  This product is part of our commitment to fair pricing. We've eliminated the "pink tax" 
                  markup that's often applied to products marketed towards women, ensuring you get the 
                  same quality at a fair price regardless of gender.
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div>
                <h3 className="font-semibold mb-2">Product Specifications</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Category</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{product.category}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Product ID</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{product.id}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Unisex</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{product.isUnisex ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Pink Tax Savings</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{product.pinkTaxSavings}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Customer Reviews</h3>
                  <button className="text-sm bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews - in a real app, these would come from a database */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="ml-2 text-sm font-medium">Great product!</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      I love that this is unisex and works just as well as the more expensive "women's" version I used to buy.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Sarah T.</span>
                      <span className="mx-2">•</span>
                      <span>2 weeks ago</span>
                    </div>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">★★★★☆</div>
                      <span className="ml-2 text-sm font-medium">Good value</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Works well and I appreciate the fair pricing. Would give 5 stars but the packaging could be improved.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Michael R.</span>
                      <span className="mx-2">•</span>
                      <span>1 month ago</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">★★★★★</div>
                      <span className="ml-2 text-sm font-medium">Finally!</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      So tired of paying more for the same product just because it's marketed to women. This is exactly what I needed.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Jamie L.</span>
                      <span className="mx-2">•</span>
                      <span>3 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;