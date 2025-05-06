import React, { useEffect, useRef } from 'react';
import { useInView } from '../utils/animations';

const AnimatedElement = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isInView 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-16'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;