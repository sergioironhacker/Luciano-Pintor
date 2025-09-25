import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Navbar = ({ scrollToSection, activeSection, isMobileMenuFixed }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-el-artista', label: 'Sobre el Artista' },
    { id: 'galeria', label: 'Galería' },
    { id: 'exposiciones', label: 'Exposiciones' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/lucianoesteban_art', icon: Instagram, aria: 'Instagram de Luciano Esteban' },
    { name: 'Facebook', href: 'https://facebook.com/lucianoesteban_art', icon: Facebook, aria: 'Facebook de Luciano Esteban' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkColor = (itemId) => {
    if (isScrolled || isMenuOpen || isMobileMenuFixed) {
      return activeSection === itemId ? 'text-yellow-600' : 'text-gray-800 hover:text-yellow-600';
    }
    return activeSection === itemId ? 'text-yellow-600' : 'text-gray-800 hover:text-yellow-600';
  };

  const getSocialIconColor = () => {
    if (isScrolled || isMenuOpen || isMobileMenuFixed) {
      return 'text-gray-800 hover:text-yellow-600';
    }
    return 'text-gray-800 hover:text-yellow-600';
  };

  const getMobileMenuButtonColor = () => {
    return 'text-gray-800';
  };

  const navLinkClasses = (itemId) =>
    `relative font-medium transition-colors uppercase tracking-wider text-xs px-3 py-2 rounded-sm ${getLinkColor(itemId)}`;

  const activeIndicator = (itemId) =>
    activeSection === itemId && (
      <motion.div
        layoutId="activeIndicatorNavbarArtist"
        className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-yellow-600`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    );

  const handleMobileLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);
  };

  // Navbar fijo con fondo blur translúcido
  const navClasses = `fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md`;

  const mobileNavClasses = `fixed top-0 w-full z-50 bg-white/4 backdrop-blur-md`;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className={`${navClasses} hidden md:block`}>
        <div className="container-artist">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <span className="font-cormorant text-3xl font-bold tracking-tight">
                <span className="text-amber-600">L</span>
                <span className="text-gray-800">uciano Esteban 🎨</span>
              </span>
            </motion.div>

            <div className="flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={navLinkClasses(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                  {activeIndicator(item.id)}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${getSocialIconColor()}`}
                  aria-label={social.aria}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`${mobileNavClasses} md:hidden`}>
        <div className="container-artist">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                if (isMenuOpen) handleMobileLinkClick('inicio');
                else scrollToSection('inicio');
              }}
            >
             <span className="font-cormorant text-2xl font-bold tracking-tight">
  <span className="text-amber-600">L</span>
  <span className="text-gray-900">uciano Esteban 🎨</span>
</span>
            </motion.div>

            <div className="flex items-center">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors mr-3 ${getSocialIconColor()}`}
                  aria-label={social.aria}
                >
                  <social.icon size={18} />
                </a>
              ))}
              <button
                className={`p-2 z-10 ${getMobileMenuButtonColor()}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/20 border-t border-gray-200 shadow-lg backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-5 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMobileLinkClick(item.id)}
                    className={`block w-full text-left px-3 py-3 rounded-md transition-colors uppercase tracking-wider text-sm font-medium
                      ${activeSection === item.id
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'text-gray-800 hover:text-yellow-600 hover:bg-yellow-50/50'
                      }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
