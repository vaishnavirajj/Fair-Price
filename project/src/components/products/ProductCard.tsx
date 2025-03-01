import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        
        {product.pinkTaxSavings > 0 && (
          <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
            Save {product.pinkTaxSavings}%
          </div>
        )}
        
        {product.isUnisex && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            Unisex
          </div>
        )}
        
        <button className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition-colors">
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">
          <Link to={`/products/${product.id}`} className="hover:text-purple-600 transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <div className="text-sm text-gray-500 mb-2">
          {product.category}
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {product.rating && (
            <div className="flex items-center">
              <div className="text-yellow-400">★</div>
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          )}
        </div>
        
        <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;