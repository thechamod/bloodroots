import React, { useEffect, useRef } from 'react';
import AnimatedElement from './AnimatedElement';

const ComingSoon = () => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    // Audio visualization setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Audio context will be created on user interaction
    let audioContext;
    let analyser;
    let dataArray;
    let source;
    
    // Function to animate audio visualization
    const animate = () => {
      if (!analyser) {
        // If no audio analyzer, just show static visualization
        staticVisualization();
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get frequency data
      analyser.getByteFrequencyData(dataArray);
      
      // Draw visualization
      const barWidth = (canvas.width / dataArray.length) * 2.5;
      let x = 0;
      
      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i] / 2;
        
        // Calculate gradient color based on frequency
        const r = 128 + barHeight;
        const g = 20 + barHeight / 4;
        const b = 20 + barHeight / 8;
        
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Static visualization for when no audio is playing
    const staticVisualization = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const barCount = 40;
      const barWidth = (canvas.width / barCount) - 1;
      
      for (let i = 0; i < barCount; i++) {
        // Create a pulsing effect
        const time = Date.now() / 1000;
        const pulse = Math.sin(time * 2 + i * 0.2) * 0.5 + 0.5;
        const barHeight = 10 + pulse * 50;
        
        ctx.fillStyle = `rgb(170, ${20 + pulse * 20}, ${20 + pulse * 10})`;
        ctx.fillRect(i * (barWidth + 1), canvas.height - barHeight, barWidth, barHeight);
      }
    };
    
    // Start animation
    animate();
    
    // Audio setup function (will be called on user interaction)
    const setupAudio = async () => {
      if (audioContext) return;
      
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 128;
        
        const audio = audioRef.current;
        // Check if audio has a valid source
        if (!audio.src || audio.src === window.location.href) {
          // If no valid audio source, just continue with visualization without connecting audio
          dataArray = new Uint8Array(analyser.frequencyBinCount);
          return;
        }
        
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      } catch (error) {
        console.error("Audio visualization failed to initialize:", error);
      }
    };
    
    // Add click event to initialize audio
    document.querySelector('.play-btn')?.addEventListener('click', setupAudio);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);
  
  const playAudioPreview = () => {
    const audio = audioRef.current;
    if (!audio.src || audio.src === window.location.href) {
      // If no valid audio source, just animate without playing audio
      alert('Audio preview not available');
      return;
    }
    
    if (audio.paused) {
      audio.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  
  return (
    <section id="coming-soon" className="py-20 px-4 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20 z-0"></div>
      
      <AnimatedElement className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center">
            COMING SOON
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden group">
                <div className="absolute inset-0 bg-black/50 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/60"></div>
                
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">CRIMSON REIGN</h3>
                  <p className="text-red-500 text-xl mb-6">NEW ALBUM | 12.21.2023</p>
                  
                  <button 
                    onClick={playAudioPreview}
                    className="play-btn w-16 h-16 rounded-full flex items-center justify-center bg-red-700 hover:bg-red-600 transition-all duration-300 group"
                  >
                    <span className="sr-only">Play preview</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-white group-hover:scale-110 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                
                {/* Album artwork placeholder - would be replaced with actual image */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-800 to-black"></div>
                
                {/* Hidden audio element */}
                <audio 
                  ref={audioRef} 
                  src="#" 
                  className="hidden"
                ></audio>
                
                {/* Corner blood splats */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-red-800 opacity-70 rounded-full -translate-y-1/2 translate-x-1/2 blur-md"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-800 opacity-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-md"></div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-black/70 p-6 border border-red-900/50">
                <h3 className="text-2xl text-red-600 font-bold mb-4">ALBUM TRACKLIST</h3>
                
                <ul className="space-y-3 text-gray-300">
                  {[
                    "1. Blood Lineage (Intro)",
                    "2. Streets Don't Lie",
                    "3. Crimson Paths",
                    "4. Underground Kings",
                    "5. Midnight Rituals feat. D-Venom",
                    "6. The Root of It All",
                    "7. No Surrender",
                    "8. City of Shadows",
                    "9. Last Man Standing"
                  ].map((track, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center ${index === 0 ? "text-red-500 font-bold" : ""}`}
                    >
                      <span className="mr-2">
                        {index === 0 && "▶"}
                        {index !== 0 && "○"}
                      </span>
                      {track}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <canvas 
                    ref={canvasRef} 
                    className="w-full h-24 bg-black/40"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
          
          <AnimatedElement delay={300}>
            <div className="text-center">
              <a 
                href="#" 
                className="inline-block px-8 py-3 bg-red-800 hover:bg-red-700 text-white font-bold rounded-none transform hover:translate-y-[-2px] transition-all duration-300 shadow-lg shadow-red-800/30"
              >
                PRE-ORDER NOW
              </a>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default ComingSoon;