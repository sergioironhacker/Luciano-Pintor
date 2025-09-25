
import React, { useState, useEffect, useCallback } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/artist/Navbar';
import HeroSection from '@/components/artist/HeroSection';
import AboutSection from '@/components/artist/AboutSection';
import GallerySection from '@/components/artist/GallerySection';
import ExhibitionsSection from '@/components/artist/ExhibitionsSection';
import TestimonialsSection from '@/components/artist/TestimonialsSection';
import ContactSectionArtist from '@/components/artist/ContactSectionArtist';
import FooterArtist from '@/components/artist/FooterArtist';
import FloatingWhatsAppButtonArtist from '@/components/artist/FloatingWhatsAppButtonArtist';
import Lightbox from '@/components/artist/LightboxArtist';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isMobileMenuFixed, setIsMobileMenuFixed] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector('nav');
    
    if (element) {
      let topOffset = 0;
      if (navbar && sectionId !== 'inicio') { 
        topOffset = navbar.offsetHeight;
      }
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    const sections = ['inicio', 'sobre-el-artista', 'galeria', 'exposiciones', 'testimonios', 'contacto'];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px", 
      threshold: 0.1, 
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const scrollHandler = () => {
      const heroSectionHeight = document.getElementById('inicio')?.offsetHeight || 0;
      if (window.scrollY > heroSectionHeight) {
        setIsMobileMenuFixed(true);
      } else {
        setIsMobileMenuFixed(false);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    window.addEventListener('scroll', scrollHandler);

    return () => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const openLightbox = (imageData) => {
    setLightboxImage(imageData);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-lato">
      <Toaster />
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} isMobileMenuFixed={isMobileMenuFixed} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <GallerySection openLightbox={openLightbox} />
      <ExhibitionsSection />
      <TestimonialsSection />
      <ContactSectionArtist />
      <FooterArtist scrollToSection={scrollToSection} />
      <FloatingWhatsAppButtonArtist />
      {lightboxImage && <Lightbox imageData={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
};

export default App;
