import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const FooterArtist = ({ scrollToSection }) => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/lucianoesteban_art', icon: Instagram, aria: 'Instagram de Luciano Esteban' },
    { name: 'Facebook', href: 'https://facebook.com/lucianoesteban_art', icon: Facebook, aria: 'Facebook de Luciano Esteban' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/lucianoesteban_art', icon: Linkedin, aria: 'LinkedIn de Luciano Esteban' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-400">
      <div className="container-artist py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span 
              className="font-cormorant text-3xl font-bold text-white cursor-pointer hover:text-yellow-500 transition-colors"
              onClick={() => scrollToSection('inicio')}
            >
              Luciano Esteban
            </span>
            <p className="text-sm text-gray-500 mt-1 italic">Arte que trasciende horizontes</p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.aria} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-500 text-gray-300 hover:text-white shadow-md transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">© {currentYear} Luciano Esteban. Todos los derechos reservados.</p>
          <div className="space-x-3">
            <a href="#" className="hover:text-yellow-500 transition-colors">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-500 transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArtist;
