import React from 'react';
import AnimatedElement from './AnimatedElement';

const Footer = () => {
  return (
    <footer className="bg-black relative pb-6 z-20">
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-red-900/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <AnimatedElement>
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-red-600 font-black text-3xl mb-2">BLOODROOTS</h2>
              <p className="text-gray-400">Raw. Unfiltered. Underground.</p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-xl mb-4 text-center md:text-right">FOLLOW THE MOVEMENT</h3>
              <div className="flex space-x-4 justify-center md:justify-end">
                {/* Social Media Links */}
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-red-800 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-800 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-800 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://spotify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-800 hover:bg-red-700 flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Spotify"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.8-.179-.92-.6-.12-.421.18-.8.6-.942 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={200}>
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">HOME</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">ABOUT</a></li>
              <li><a href="#music" className="text-gray-400 hover:text-red-500 transition-colors">MUSIC</a></li>
              <li><a href="#coming-soon" className="text-gray-400 hover:text-red-500 transition-colors">RELEASES</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">CONTACT</a></li>
            </ul>
          </nav>
        </AnimatedElement>
        
        <AnimatedElement delay={300}>
          <div id="contact" className="mb-12">
            <h3 className="text-white text-center font-bold text-xl mb-6">JOIN THE MOVEMENT</h3>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 focus:border-red-600 focus:outline-none text-white"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-800 hover:bg-red-700 text-white font-bold transition-colors duration-300"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={400}>
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Bloodroots. All Rights Reserved.</p>
          </div>
        </AnimatedElement>
      </div>
      
      {/* Bottom blood splatter effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div 
          className="w-full h-2 bg-red-900"
          style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 900 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,100 L900,100 L900,0 C800,40 700,80 600,70 C500,60 400,30 300,20 C200,10 100,30 0,80 L0,100 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 900 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,100 L900,100 L900,0 C800,40 700,80 600,70 C500,60 400,30 300,20 C200,10 100,30 0,80 L0,100 Z\' fill=\'%23000\'/%3E%3C/svg%3E")',
            maskSize: 'cover',
            WebkitMaskSize: 'cover'
          }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;