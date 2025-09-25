import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const achievements = [
    { year: "2023", event: "Exposición individual, Galerie Perrotin, París" },
    { year: "2021", event: "Premio Nacional de Pintura Contemporánea" },
    { year: "2019", event: "Residencia artística, The Watermill Center, Nueva York" },
    { year: "2017", event: "Bienal de Venecia, Pabellón Nacional" },
  ];

  return (
    <section id="sobre-el-artista" className="section-padding-artist bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container-artist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-cormorant font-bold text-gray-800 mb-4 tracking-wide">
            Sobre Luciano Esteban
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            className="md:col-span-2 relative h-96 md:h-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              className="w-full h-full object-cover rounded-2xl shadow-xl filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              alt="Luciano Esteban en su estudio de arte"
              src="/Luciano-Esteban.png" 
            />
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-lato">
              Luciano Esteban es un pintor de renombre internacional cuyo trabajo ha sido aclamado por su profunda exploración de la abstracción lírica y la materialidad de la pintura. Nacido en Buenos Aires y actualmente residiendo entre Madrid y Nueva York, su obra se caracteriza por una paleta de colores sofisticada y una técnica gestual que evoca paisajes emocionales complejos.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed font-lato">
              Su evolución estilística lo ha llevado desde una figuración temprana hacia una abstracción cada vez más depurada, donde la luz, la textura y el color son protagonistas. Esteban investiga la memoria, el paso del tiempo y la condición humana a través de lienzos que invitan a la contemplación y al diálogo introspectivo.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-lato">
              Con una trayectoria que abarca más de dos décadas, ha expuesto en prestigiosos museos y galerías de Europa, América y Asia, consolidándose como una voz influyente en el panorama del arte contemporáneo.
            </p>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-cormorant font-semibold text-gray-800 mb-4">Hitos Destacados:</h3>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start text-gray-700 font-lato"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-amber-600 font-semibold w-20 shrink-0">{item.year}:</span>
                    <span>{item.event}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
