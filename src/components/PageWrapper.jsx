// src/components/PageWrapper.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  // The key on the outer div ensures the animation re-triggers on route change
  return (
    <div key={location.pathname} className="animate-page-fade-in">
      {children}
    </div>
  );
};

export default PageWrapper;