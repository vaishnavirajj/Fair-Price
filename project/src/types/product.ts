export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating?: number;
  reviews?: number;
  isUnisex: boolean;
  pinkTaxSavings: number; // Percentage saved compared to gendered alternatives
  comparisonProducts?: {
    female?: {
      id: string;
      name: string;
      price: number;
      image: string;
    };
    male?: {
      id: string;
      name: string;
      price: number;
      image: string;
    };
  };
  features?: string[];
  inStock: boolean;
}