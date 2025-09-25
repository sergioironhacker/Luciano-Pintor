import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input_artist';
import { Textarea } from '@/components/ui/textarea_artist';
import { toast } from '@/components/ui/use-toast';
import { Send, Mail, MapPin } from 'lucide-react';

const ContactSectionArtist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, complete todos los campos obligatorios.",
        variant: "destructive",
        duration: 4000,
      });
      return;
    }
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por su interés. Luciano o su equipo se pondrán en contacto pronto.",
        className: "bg-yellow-500 border-yellow-500 text-white",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error al Enviar",
        description: "Hubo un problema al enviar su mensaje. Inténtelo de nuevo.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding-artist bg-gradient-to-b from-amber-50 to-amber-100">
      <div className="container-artist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-cormorant font-bold text-gray-800 mb-4 tracking-wide">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white/90 p-10 sm:p-12 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-200">
          <p className="text-center text-gray-700 mb-8 font-lato text-base sm:text-lg">
            Para consultas sobre adquisiciones, comisiones, exposiciones o prensa, por favor complete el formulario.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Su nombre"
                required
                className="border-gray-300 focus:border-amber-500 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="su.email@ejemplo.com"
                required
                className="border-gray-300 focus:border-amber-500 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Escriba su mensaje aquí..."
                required
                className="border-gray-300 focus:border-amber-500 focus:ring-amber-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3.5 text-base font-semibold bg-amber-600 text-white rounded-xl shadow hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Enviar Mensaje
                </>
              )}
            </Button>
          </form>
          <div className="mt-10 text-center text-sm sm:text-base text-gray-600 space-y-3">
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-amber-600"/> Lucianoesteban64@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-amber-600"/> Madrid | Segovia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionArtist;
