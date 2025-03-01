import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Unisex Razor Set',
    description: 'A high-quality razor set designed for all genders. Includes 5 replaceable blades and a sturdy handle.',
    price: 9.99,
    originalPrice: 14.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    reviews: 128,
    isUnisex: true,
    pinkTaxSavings: 35,
    comparisonProducts: {
      female: {
        id: 'f1',
        name: 'Women\'s Pink Razor',
        price: 15.49,
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm1',
        name: 'Men\'s Blue Razor',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1626715771722-a3c9118d2b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['5 sharp blades', 'Ergonomic handle', 'Moisturizing strip', 'Easy to clean'],
    inStock: true
  },
  {
    id: '2',
    name: 'Neutral Deodorant',
    description: 'An effective, long-lasting deodorant with a neutral scent suitable for everyone.',
    price: 4.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 95,
    isUnisex: true,
    pinkTaxSavings: 28,
    comparisonProducts: {
      female: {
        id: 'f2',
        name: 'Women\'s Floral Deodorant',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1619451683237-7066f0508d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm2',
        name: 'Men\'s Sport Deodorant',
        price: 5.49,
        image: 'https://images.unsplash.com/photo-1626714100232-7d7d3f5c7b5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['24-hour protection', 'Aluminum-free', 'No artificial fragrances', 'Non-staining formula'],
    inStock: true
  },
  {
    id: '3',
    name: 'Universal Shampoo',
    description: 'A gentle, effective shampoo formulated for all hair types regardless of gender.',
    price: 7.99,
    originalPrice: 9.99,
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.3,
    reviews: 76,
    isUnisex: true,
    pinkTaxSavings: 22,
    comparisonProducts: {
      female: {
        id: 'f3',
        name: 'Women\'s Volumizing Shampoo',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm3',
        name: 'Men\'s 2-in-1 Shampoo',
        price: 8.49,
        image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['pH balanced', 'Sulfate-free', 'For all hair types', 'Gentle cleansing'],
    inStock: true
  },
  {
    id: '4',
    name: 'Basic Cotton T-Shirt',
    description: 'A comfortable, durable cotton t-shirt with a modern fit that works for everyone.',
    price: 12.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    reviews: 210,
    isUnisex: true,
    pinkTaxSavings: 15,
    comparisonProducts: {
      female: {
        id: 'f4',
        name: 'Women\'s Fitted Tee',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm4',
        name: 'Men\'s Classic Tee',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['100% cotton', 'Pre-shrunk', 'Medium weight fabric', 'Double-stitched hems'],
    inStock: true
  },
  {
    id: '5',
    name: 'Unisex Skincare Set',
    description: 'A complete skincare routine with cleanser, moisturizer, and sunscreen suitable for all skin types.',
    price: 29.99,
    originalPrice: 39.99,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    reviews: 89,
    isUnisex: true,
    pinkTaxSavings: 40,
    comparisonProducts: {
      female: {
        id: 'f5',
        name: 'Women\'s Beauty Regimen',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm5',
        name: 'Men\'s Grooming Kit',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['Fragrance-free', 'Dermatologist tested', 'Non-comedogenic', 'Cruelty-free'],
    inStock: true
  },
  {
    id: '6',
    name: 'Universal Socks (5 Pack)',
    description: 'Comfortable, durable socks that fit all feet sizes 6-12. Available in multiple neutral colors.',
    price: 14.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.4,
    reviews: 132,
    isUnisex: true,
    pinkTaxSavings: 20,
    comparisonProducts: {
      female: {
        id: 'f6',
        name: 'Women\'s Ankle Socks',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1582966772680-860e372bb558?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm6',
        name: 'Men\'s Athletic Socks',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['Cotton blend', 'Reinforced heel and toe', 'Moisture-wicking', 'Non-slip design'],
    inStock: true
  },
  {
    id: '7',
    name: 'Basic Moisturizer',
    description: 'A simple, effective moisturizer for all skin types with no added fragrances or unnecessary ingredients.',
    price: 8.99,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 104,
    isUnisex: true,
    pinkTaxSavings: 30,
    comparisonProducts: {
      female: {
        id: 'f7',
        name: 'Women\'s Anti-Aging Cream',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm7',
        name: 'Men\'s Face Moisturizer',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['Hypoallergenic', 'Non-greasy formula', 'Fast-absorbing', '24-hour hydration'],
    inStock: true
  },
  {
    id: '8',
    name: 'Unisex Hoodie',
    description: 'A comfortable, warm hoodie with a modern cut that looks great on everyone.',
    price: 24.99,
    originalPrice: 29.99,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    reviews: 187,
    isUnisex: true,
    pinkTaxSavings: 18,
    comparisonProducts: {
      female: {
        id: 'f8',
        name: 'Women\'s Fitted Hoodie',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      male: {
        id: 'm8',
        name: 'Men\'s Pullover Hoodie',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    features: ['80% cotton, 20% polyester', 'Kangaroo pocket', 'Adjustable drawstring hood', 'Ribbed cuffs and hem'],
    inStock: true
  }
];

export const categories = [
  'Personal Care',
  'Hair Care',
  'Skincare',
  'Clothing',
  'Accessories',
  'Health Products'
];