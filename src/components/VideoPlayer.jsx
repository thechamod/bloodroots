import React from 'react';
import AnimatedElement from './AnimatedElement';

const VideoPlayer = ({ videoId }) => {
  return (
    <AnimatedElement>
      <section id="music" className="py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
          LATEST VIDEO
        </h2>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video mb-8 bg-black/50">
          <div className="absolute inset-0 bg-red-900/20 z-0"></div>
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/KgOjCzBfuGA"
            title="Bloodroots Music Video" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          {/* Video border with animated blood effect */}
          <div className="absolute inset-0 border-2 border-red-800 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute bg-red-700"
                  style={{
                    top: 0,
                    left: `${15 + i * 20}%`,
                    width: '2px',
                    height: '20px',
                    animation: `bloodTrickle ${3 + i}s infinite ${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
            Experience the raw passion and unfiltered truth that defines Bloodroots. Our music speaks to the streets and the struggles we've overcome.
          </p>
          <a 
            href="https://www.youtube.com/@bloodrootz1793/videos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 bg-red-800 hover:bg-red-700 text-white font-bold transition-all duration-300 shadow-lg shadow-red-900/30"
          >
            WATCH MORE
          </a>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes bloodTrickle {
          0% { height: 0; opacity: 0; }
          5% { opacity: 1; }
          90% { height: 100%; opacity: 0.7; }
          100% { height: 100%; opacity: 0; }
        }
      `}</style>
    </AnimatedElement>
  );
};

export default VideoPlayer;
