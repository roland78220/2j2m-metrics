
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-tight flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-xl font-bold text-brand-blue">2J2M Métrés</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-brand-darkGray hover:text-brand-blue transition-colors">
            À propos
          </a>
          <a href="#services" className="text-brand-darkGray hover:text-brand-blue transition-colors">
            Services
          </a>
          <a href="#technology" className="text-brand-darkGray hover:text-brand-blue transition-colors">
            Technologies
          </a>
          <a href="#contact" className="btn-primary">
            Contactez-nous
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-darkGray" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white pt-24 px-6 z-40 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-center">
            <a 
              href="#about" 
              className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              À propos
            </a>
            <a 
              href="#services" 
              className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Services
            </a>
            <a 
              href="#technology" 
              className="text-xl text-brand-darkGray hover:text-brand-blue transition-colors"
              onClick={toggleMobileMenu}
            >
              Technologies
            </a>
            <a 
              href="#contact" 
              className="btn-primary mx-auto"
              onClick={toggleMobileMenu}
            >
              Contactez-nous
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
