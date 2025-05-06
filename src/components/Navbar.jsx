import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg shadow-red-900/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-red-600 font-extrabold text-xl tracking-wider">
            BLOODROOTS
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center text-red-600 hover:text-red-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 relative nav-link"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 relative nav-link"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 relative nav-link"
            >
              CONTACT
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} py-4`}
        >
          <a
            href="#"
            className="block py-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-300 hover:text-red-500 transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>
        </div>
      </div>

      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #dc2626;
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;