import { useEffect, useRef } from 'react';
import AnimatedElement from './AnimatedElement';

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Blood dripping effect on the title
    const title = titleRef.current;
    if (title) {
      const addBloodDrip = () => {
        const drip = document.createElement('span');
        drip.className = 'blood-drop';
        drip.style.left = `${Math.random() * 100}%`;
        drip.style.animationDuration = `${Math.random() * 2 + 2}s`;
        drip.style.opacity = `${Math.random() * 0.5 + 0.5}`;
        title.appendChild(drip);
        
        // Remove the drip after animation
        setTimeout(() => {
          drip.remove();
        }, 4000);
      };
      
      // Add drops periodically
      const interval = setInterval(() => {
        addBloodDrip();
      }, 1500);
      
      return () => clearInterval(interval);
    }
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20 z-0"></div>
      
      <AnimatedElement className="w-full text-center z-10">
        <h1 
          ref={titleRef} 
          className="text-5xl sm:text-6xl md:text-8xl font-black text-red-600 mb-4 tracking-tighter relative overflow-visible px-2 w-full"
        >
          BLOODROOTS
        </h1>
        
        <AnimatedElement delay={200} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Raw. Unfiltered. Underground.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={400}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#music" 
              className="px-8 py-3 bg-red-800 hover:bg-red-700 text-white font-bold rounded-none transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-red-800/30"
            >
              LISTEN NOW
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-transparent border-2 border-red-800 text-red-600 hover:text-white hover:bg-red-800/50 font-bold rounded-none transform hover:translate-y-[-2px] transition-all duration-300"
            >
              DISCOVER
            </a>
          </div>
        </AnimatedElement>
      </AnimatedElement>
      
      <style jsx>{`
        .blood-drop {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: #dc2626;
          border-radius: 50%;
          transform: translateY(-10px);
          animation: dripping linear forwards;
        }
        
        @keyframes dripping {
          0% {
            transform: translateY(-10px) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
            transform: translateY(100px) scale(1);
            border-radius: 50%;
          }
          100% {
            opacity: 0;
            transform: translateY(120px) scale(1.5, 0.5);
            border-radius: 50% 50% 0 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;