// FILE: src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className = "", delay = 0, /* ... other props ... */ }) => {
  const { ref, inView } = useInView({ /* ... options ... */ });
  // ... animation logic ...
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${ /* className prop is applied here */
        inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
export default AnimatedSection;