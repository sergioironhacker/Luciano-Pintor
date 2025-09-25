import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const exhibitionsData = [
  {
    date: "Octubre 15 - Diciembre 20, 2025",
    location: "Museo Thyssen-Bornemisza, Madrid",
    name: "Luciano Esteban: Horizontes Interiores",
    link: "#",
    imgSrc: "/descarga (1).jpeg",
    alt: "Exposición Luciano Esteban: Horizontes Interiores en el Museo Thyssen-Bornemisza"
  },
  {
    date: "Febrero 5 - Abril 10, 2026",
    location: "Gagosian Gallery, Nueva York",
    name: "Nuevas Abstracciones: Luciano Esteban",
    link: "#",
    imgSrc: "/descarga.jpeg",
    alt: "Exposición Nuevas Abstracciones: Luciano Esteban en Gagosian Gallery"
  },
  {
    date: "Junio 1 - Agosto 15, 2026",
    location: "Tate Modern, Londres",
    name: "Colectiva: Visiones Contemporáneas Globales",
    link: "#",
    imgSrc: "/av_imagen_vertical.webp",
    alt: "Exposición Colectiva: Visiones Contemporáneas Globales en Tate Modern"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExhibitionsSection = () => {
  return (
    <section id="exposiciones" className="section-padding-artist bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container-artist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-cormorant font-bold text-gray-800 mb-4 tracking-wide">
            Próximas Exposiciones
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
          role="list"
        >
          {exhibitionsData.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              role="listitem"
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="md:w-1/3">
                <div className="w-full h-64 md:h-full aspect-[4/3] overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-l-2xl"
                    src={event.imgSrc}
                    alt={event.alt}
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="md:w-2/3 p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-cormorant font-semibold text-gray-800 mb-3">
                  {event.name}
                </h3>
                <div className="flex items-center text-sm text-amber-700 mb-2">
                  <Calendar size={16} className="mr-2 shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2 shrink-0" />
                  <span>{event.location}</span>
                </div>
                {event.link && event.link !== "#" && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Más información sobre ${event.name}`}
                    className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 font-medium group transition-colors"
                  >
                    Más Información
                    <ExternalLink
                      size={14}
                      className="ml-1.5 transform transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
