
import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_ICON_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png";

const FloatingWhatsAppButtonArtist = () => {
  const artistPhoneNumber = "665930344"; // Reemplazar con el número real

  return (
    <motion.a
      href={`https://wa.me/${artistPhoneNumber}?text=${encodeURIComponent("Hola Luciano, estoy interesado/a en tu obra.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-artist bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg transition-colors flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
      style={{ width: '52px', height: '52px' }} 
    >
      <img src={WHATSAPP_ICON_URL} alt="WhatsApp" className="w-6 h-6" />
    </motion.a>
  );
};

export default FloatingWhatsAppButtonArtist;
