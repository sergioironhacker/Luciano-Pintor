
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; 
import { ArrowDown } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover filter brightness-50"
          alt="Retrato artístico de Luciano Esteban o una de sus obras icónicas"
         src="https://images.unsplash.com/photo-1602465605153-a40a52556990" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <motion.div 
        className="relative z-10 p-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
  <span className="text-amber-600">L</span>uciano Esteban De Andrés
</h1>
        <p className="font-lato text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Pintor internacional explorando la intersección de la abstracción y la emoción, con una trayectoria destacada en el arte contemporáneo.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToSection('galeria')}
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out group text-sm sm:text-base px-8 py-3 rounded-none tracking-wider"
        >
          Descubre su Obra
          <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
        </Button>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <ArrowDown size={28} className="text-white/70" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
