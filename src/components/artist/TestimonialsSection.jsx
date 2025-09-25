
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "La obra de Luciano Esteban es una meditación visual que trasciende el lienzo. Su dominio del color y la textura es simplemente magistral.",
    author: "Dra. Elena Vargas",
    title: "Crítica de Arte, ArtForum"
  },
  {
    quote: "Coleccionar una pieza de Esteban es invertir en un diálogo continuo con la belleza y la profundidad. Cada obra revela nuevas capas con el tiempo.",
    author: "Javier Mendoza",
    title: "Coleccionista Privado"
  },
  {
    quote: "La sensibilidad de Luciano para capturar la luz y la emoción es única. Sus exposiciones son siempre una experiencia transformadora.",
    author: "Isabelle Dubois",
    title: "Curadora, Centre Pompidou"
  },
  {
    quote: "Trabajar con Luciano en la comisión de una obra para nuestro espacio corporativo fue un placer. Su profesionalismo y visión artística son excepcionales.",
    author: "Carlos Fernández",
    title: "CEO, Tech Innovators Inc."
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 7000); // Auto-play
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonios" className="section-padding-artist bg-white">
      <div className="container-artist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-cormorant font-bold text-gray-800 mb-4">
            Voces sobre su Obra
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-lg shadow-xl overflow-hidden">
          <Quote className="absolute top-6 left-6 w-10 h-10 text-yellow-300 opacity-50 transform -translate-x-2 -translate-y-2" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <p className="font-cormorant italic text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed">
                "{testimonialsData[currentIndex].quote}"
              </p>
              <p className="font-lato font-semibold text-gray-800 text-sm">
                {testimonialsData[currentIndex].author}
              </p>
              <p className="font-lato text-gray-500 text-xs">
                {testimonialsData[currentIndex].title}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-800 transition-colors rounded-full hover:bg-gray-100"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
