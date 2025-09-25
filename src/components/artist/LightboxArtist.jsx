
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Info } from 'lucide-react';

const Lightbox = ({ imageData, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!imageData) return null;

  const { imgSrc, title, year, technique, alt } = imageData;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Obra de arte: ${title}`}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative max-w-4xl w-full max-h-[95vh] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full md:w-3/4 h-auto md:h-full flex items-center justify-center bg-gray-100 p-2">
           <img 
  src={imgSrc}   // <-- esto es lo que queremos
  alt={alt || title}
  className="block max-w-full max-h-[70vh] md:max-h-[90vh] object-contain rounded"
/>
          </div>
          <div className="w-full md:w-1/4 p-6 bg-white flex flex-col justify-center">
            <h3 className="font-cormorant text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">Año:</span> {year}</p>
            <p className="text-sm text-gray-600 mb-4"><span className="font-semibold">Técnica:</span> {technique}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{alt}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label="Cerrar"
          >
            <X size={22} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
