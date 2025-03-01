import React from 'react';
import { ArrowRight, Heart, DollarSign, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're on a mission to eliminate the "pink tax" by offering unisex alternatives 
            and transparent price comparisons, helping consumers make informed choices.
          </p>
        </div>
      </section>

      {/* What is Pink Tax */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">What is the Pink Tax?</h2>
              <p className="text-gray-600 mb-4">
                The "pink tax" refers to the extra amount women pay for specific products or services that are marketed to women, 
                despite being functionally identical or very similar to the male-targeted or gender-neutral alternatives.
              </p>
              <p className="text-gray-600 mb-4">
                This price discrimination affects a wide range of products, from razors and deodorant to clothing and services like dry cleaning.
                On average, products marketed to women cost about 42% more than similar products marketed to men.
              </p>
              <p className="text-gray-600">
                At FairPrice, we believe everyone deserves to pay a fair price for quality products, regardless of gender.
                That's why we offer unisex alternatives and transparent price comparisons.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Pink tax illustration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                We believe in transparent, gender-neutral pricing for all products.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality, offering products that work effectively for everyone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                Our products are designed for everyone, regardless of gender identity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide clear information about pricing and product comparisons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                FairPrice was founded in 2025 by a diverse team of consumers who were frustrated by the gender-based price 
                discrimination they encountered in everyday shopping.
              </p>
              <p className="text-gray-600 mb-4">
                After researching the issue and finding that women pay thousands of dollars more over their lifetimes for similar products, 
                we decided to create a platform that offers unisex alternatives at fair prices.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer a growing selection of products across multiple categories, all priced fairly 
                and designed to work effectively for everyone. Our price comparison tool helps consumers see the pink tax 
                in action and make informed choices.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What exactly is the "pink tax"?</h3>
              <p className="text-gray-600">
                The "pink tax" refers to the higher prices charged for products marketed to women compared to similar or identical products marketed to men. This price disparity affects a wide range of products from personal care items to clothing and services.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Are unisex products really as effective?</h3>
              <p className="text-gray-600">
                Yes! Most gendered products are functionally identical or very similar. The main differences are often in packaging, fragrance, and marketing. Our unisex products are designed to work effectively for everyone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do you calculate the pink tax savings?</h3>
              <p className="text-gray-600">
                We compare the prices of similar products marketed to different genders across major retailers. The percentage difference between the women's version and our unisex alternative is what we call the "pink tax savings."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Currently, we ship to the United States and Canada. We're working on expanding our shipping options to more countries in the near future.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How do you select your products?</h3>
              <p className="text-gray-600">
                We carefully research and test each product to ensure it meets our standards for quality, effectiveness, and value. We prioritize products that offer significant savings compared to gendered alternatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Is the pink tax legal?</h3>
              <p className="text-gray-600">
                In most places, yes. While some jurisdictions have laws against gender-based price discrimination for services, product pricing is generally unregulated. Our goal is to raise awareness and offer alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us fight the pink tax by shopping smart and spreading awareness.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/compare" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition-colors inline-flex items-center justify-center"
            >
              Compare Prices
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;