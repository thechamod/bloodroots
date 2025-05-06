import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to check if an element is in the viewport
 * @param {React.RefObject} ref - Reference to the element to observe
 * @param {Object} options - Intersection observer options
 * @param {Number} options.threshold - Percentage of element visible to trigger (0-1)
 * @param {String} options.root - Element that is used as the viewport
 * @param {String} options.rootMargin - Margin around the root
 * @returns {Boolean} - True if element is in view
 */
export const useInView = (ref, options = { threshold: 0 }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection status changes
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};

/**
 * Helper function to add a CSS animation
 * @param {String} name - Animation name
 * @param {String} keyframes - CSS keyframes
 */
export const addAnimation = (name, keyframes) => {
  if (typeof window === 'undefined') return;
  
  // Check if the animation already exists
  if (!document.querySelector(`style[data-animation="${name}"]`)) {
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-animation', name);
    styleEl.textContent = `@keyframes ${name} { ${keyframes} }`;
    document.head.appendChild(styleEl);
  }
};

/**
 * Create a blood drip animation at a specific position
 * @param {Number} x - X position in pixels or percentage
 * @param {Number} duration - Animation duration in seconds
 * @param {String} container - Selector for the container element
 * @returns {HTMLElement} - The created blood drip element
 */
export const createBloodDrip = (x, duration = 5, container = 'body') => {
  const drip = document.createElement('div');
  
  drip.style.position = 'absolute';
  drip.style.top = '0';
  drip.style.left = typeof x === 'string' ? x : `${x}px`;
  drip.style.width = '2px';
  drip.style.height = '0';
  drip.style.background = 'linear-gradient(to bottom, #8b0000, #dc2626)';
  drip.style.borderBottomLeftRadius = '3px';
  drip.style.borderBottomRightRadius = '3px';
  drip.style.opacity = '0.8';
  drip.style.animation = `bloodDrip ${duration}s forwards`;
  drip.style.zIndex = '10';
  
  // Add the animation if it doesn't exist yet
  addAnimation('bloodDrip', `
    0% {
      height: 0;
      opacity: 0;
    }
    5% {
      opacity: 0.8;
    }
    90% {
      height: 100vh;
      opacity: 0.6;
    }
    100% {
      height: 100vh;
      opacity: 0;
    }
  `);
  
  const containerEl = document.querySelector(container);
  if (containerEl) {
    containerEl.appendChild(drip);
  }
  
  // Remove the element when animation completes
  setTimeout(() => {
    drip.remove();
  }, duration * 1000);
  
  return drip;
};