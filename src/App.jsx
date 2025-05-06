import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Blood dripping animation overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-10 opacity-20">
        <div className="blood-drip absolute top-0 left-1/4 w-1 h-16 bg-red-700"></div>
        <div className="blood-drip absolute top-0 left-1/2 w-1 h-24 bg-red-700"></div>
        <div className="blood-drip absolute top-0 left-3/4 w-1 h-12 bg-red-700"></div>
        <div className="blood-drip absolute top-0 left-1/6 w-1 h-20 bg-red-700"></div>
        <div className="blood-drip absolute top-0 left-5/6 w-1 h-16 bg-red-700"></div>
      </div>

      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto px-4">
          <Hero />
          <VideoPlayer videoId="dQw4w9WgXcQ" /> {/* Replace with actual video ID */}
          <ComingSoon />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .blood-drip {
          animation: drip 15s infinite;
          transform-origin: top center;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          opacity: 0.8;
        }
        
        .blood-drip:nth-child(2) {
          animation-delay: 2s;
        }
        
        .blood-drip:nth-child(3) {
          animation-delay: 5s;
        }
        
        .blood-drip:nth-child(4) {
          animation-delay: 8s;
        }
        
        .blood-drip:nth-child(5) {
          animation-delay: 12s;
        }
        
        @keyframes drip {
          0% {
            height: 0;
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          50% {
            height: 30vh;
            opacity: 0.6;
          }
          95% {
            opacity: 0.2;
          }
          100% {
            height: 100vh;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;