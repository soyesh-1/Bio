// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-12 w-12">
    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-700"></div>
  </div>
);

export default LoadingSpinner;