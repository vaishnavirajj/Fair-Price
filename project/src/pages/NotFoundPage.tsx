import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-12 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
          <Link 
            to="/" 
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;