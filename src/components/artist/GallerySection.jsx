import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const artworksData = [
  { id: 1, series: "Ecos del Silencio", title: "Óleo sobre lienzo", year: 2023, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0010.jpg", alt: "Pintura abstracta oscura con toques dorados" },
  { id: 2, series: "Ecos del Silencio", title: "Acrílico y técnica mixta", year: 2023, technique: "Acrílico y técnica mixta", imgSrc: "/imgs/IMG-20250925-WA0011.jpg", alt: "Pintura abstracta clara con texturas suaves" },
  { id: 3, series: "Cartografías Urbanas", title: "Óleo y collage sobre tabla", year: 2021, technique: "Óleo y collage sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0012.jpg", alt: "Pintura abstracta con líneas geométricas y colores vibrantes" },
  { id: 4, series: "Cartografías Urbanas", title: "Técnica mixta sobre lienzo", year: 2022, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0013.jpg", alt: "Pintura abstracta con formas orgánicas y tonos grises" },
  { id: 5, series: "Horizontes Efímeros", title: "Acuarela sobre papel", year: 2020, technique: "Acuarela sobre papel", imgSrc: "/imgs/IMG-20250925-WA0014.jpg", alt: "Pintura abstracta con tonos cálidos y dorados" },
  { id: 6, series: "Horizontes Efímeros", title: "Óleo sobre lino", year: 2020, technique: "Óleo sobre lino", imgSrc: "/imgs/IMG-20250925-WA0015.jpg", alt: "Pintura abstracta con tonos fríos y texturas suaves" },
  { id: 7, series: "Ecos del Silencio", title: "Técnica mixta sobre lienzo", year: 2024, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0016.jpg", alt: "Pintura abstracta con colores intensos y pinceladas marcadas" },
  { id: 8, series: "Cartografías Urbanas", title: "Acrílico sobre madera", year: 2022, technique: "Acrílico sobre madera", imgSrc: "/imgs/IMG-20250925-WA0017.jpg", alt: "Pintura abstracta con líneas fluidas y colores contrastantes" },
  { id: 9, series: "Horizontes Efímeros", title: "Óleo sobre lienzo", year: 2021, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0018.jpg", alt: "Pintura abstracta con tonos violetas y azules" },
  { id: 10, series: "Ecos del Silencio", title: "Técnica mixta sobre papel", year: 2024, technique: "Técnica mixta sobre papel", imgSrc: "/imgs/IMG-20250925-WA0019.jpg", alt: "Pintura abstracta con texturas y pequeños destellos de color" },
  { id: 11, series: "Cartografías Urbanas", title: "Acrílico y tinta sobre lienzo", year: 2023, technique: "Acrílico y tinta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0020.jpg", alt: "Pintura abstracta con formas arquitectónicas y colores neutros" },
  { id: 12, series: "Horizontes Efímeros", title: "Óleo y pan de oro sobre tabla", year: 2022, technique: "Óleo y pan de oro sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0021.jpg", alt: "Pintura abstracta con tonos ocres y detalles dorados" },
  { id: 13, series: "Ecos del Silencio", title: "Óleo sobre lienzo", year: 2023, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0022.jpg", alt: "Pintura abstracta oscura con toques dorados" },
  { id: 14, series: "Ecos del Silencio", title: "Acrílico y técnica mixta", year: 2023, technique: "Acrílico y técnica mixta", imgSrc: "/imgs/IMG-20250925-WA0023.jpg", alt: "Pintura abstracta clara con texturas suaves" },
  { id: 15, series: "Cartografías Urbanas", title: "Óleo y collage sobre tabla", year: 2021, technique: "Óleo y collage sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0024.jpg", alt: "Pintura abstracta con líneas geométricas y colores vibrantes" },
  { id: 16, series: "Cartografías Urbanas", title: "Técnica mixta sobre lienzo", year: 2022, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0025.jpg", alt: "Pintura abstracta con formas orgánicas y tonos grises" },
  { id: 17, series: "Horizontes Efímeros", title: "Acuarela sobre papel", year: 2020, technique: "Acuarela sobre papel", imgSrc: "/imgs/IMG-20250925-WA0026.jpg", alt: "Pintura abstracta con tonos cálidos y dorados" },
  { id: 18, series: "Horizontes Efímeros", title: "Óleo sobre lino", year: 2020, technique: "Óleo sobre lino", imgSrc: "/imgs/IMG-20250925-WA0027.jpg", alt: "Pintura abstracta con tonos fríos y texturas suaves" },
  { id: 19, series: "Ecos del Silencio", title: "Técnica mixta sobre lienzo", year: 2024, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0028.jpg", alt: "Pintura abstracta con colores intensos y pinceladas marcadas" },
  { id: 20, series: "Cartografías Urbanas", title: "Acrílico sobre madera", year: 2022, technique: "Acrílico sobre madera", imgSrc: "/imgs/IMG-20250925-WA0029.jpg", alt: "Pintura abstracta con líneas fluidas y colores contrastantes" },
  { id: 21, series: "Horizontes Efímeros", title: "Óleo sobre lienzo", year: 2021, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0030.jpg", alt: "Pintura abstracta con tonos violetas y azules" },
  { id: 22, series: "Ecos del Silencio", title: "Técnica mixta sobre papel", year: 2024, technique: "Técnica mixta sobre papel", imgSrc: "/imgs/IMG-20250925-WA0031.jpg", alt: "Pintura abstracta con texturas y pequeños destellos de color" },
  { id: 23, series: "Cartografías Urbanas", title: "Acrílico y tinta sobre lienzo", year: 2023, technique: "Acrílico y tinta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0032.jpg", alt: "Pintura abstracta con formas arquitectónicas y colores neutros" },
  { id: 24, series: "Horizontes Efímeros", title: "Óleo y pan de oro sobre tabla", year: 2022, technique: "Óleo y pan de oro sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0033.jpg", alt: "Pintura abstracta con tonos ocres y detalles dorados" },
  { id: 25, series: "Ecos del Silencio", title: "Óleo sobre lienzo", year: 2023, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0034.jpg", alt: "Pintura abstracta oscura con toques dorados" },
  { id: 26, series: "Ecos del Silencio", title: "Acrílico y técnica mixta", year: 2023, technique: "Acrílico y técnica mixta", imgSrc: "/imgs/IMG-20250925-WA0035.jpg", alt: "Pintura abstracta clara con texturas suaves" },
  { id: 27, series: "Cartografías Urbanas", title: "Óleo y collage sobre tabla", year: 2021, technique: "Óleo y collage sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0036.jpg", alt: "Pintura abstracta con líneas geométricas y colores vibrantes" },
  { id: 28, series: "Cartografías Urbanas", title: "Técnica mixta sobre lienzo", year: 2022, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0037.jpg", alt: "Pintura abstracta con formas orgánicas y tonos grises" },
  { id: 29, series: "Horizontes Efímeros", title: "Acuarela sobre papel", year: 2020, technique: "Acuarela sobre papel", imgSrc: "/imgs/IMG-20250925-WA0038.jpg", alt: "Pintura abstracta con tonos cálidos y dorados" },
  { id: 30, series: "Horizontes Efímeros", title: "Óleo sobre lino", year: 2020, technique: "Óleo sobre lino", imgSrc: "/imgs/IMG-20250925-WA0039.jpg", alt: "Pintura abstracta con tonos fríos y texturas suaves" },
  { id: 31, series: "Ecos del Silencio", title: "Técnica mixta sobre lienzo", year: 2024, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0040.jpg", alt: "Pintura abstracta con colores intensos y pinceladas marcadas" },
  { id: 32, series: "Cartografías Urbanas", title: "Acrílico sobre madera", year: 2022, technique: "Acrílico sobre madera", imgSrc: "/imgs/IMG-20250925-WA0041.jpg", alt: "Pintura abstracta con líneas fluidas y colores contrastantes" },
  { id: 33, series: "Horizontes Efímeros", title: "Óleo sobre lienzo", year: 2021, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0042.jpg", alt: "Pintura abstracta con tonos violetas y azules" },
  { id: 34, series: "Ecos del Silencio", title: "Técnica mixta sobre papel", year: 2024, technique: "Técnica mixta sobre papel", imgSrc: "/imgs/IMG-20250925-WA0043.jpg", alt: "Pintura abstracta con texturas y pequeños destellos de color" },
  { id: 35, series: "Cartografías Urbanas", title: "Acrílico y tinta sobre lienzo", year: 2023, technique: "Acrílico y tinta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0044.jpg", alt: "Pintura abstracta con formas arquitectónicas y colores neutros" },
  { id: 36, series: "Horizontes Efímeros", title: "Óleo y pan de oro sobre tabla", year: 2022, technique: "Óleo y pan de oro sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0045.jpg", alt: "Pintura abstracta con tonos ocres y detalles dorados" },
  { id: 37, series: "Ecos del Silencio", title: "Óleo sobre lienzo", year: 2023, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0046.jpg", alt: "Pintura abstracta oscura con toques dorados" },
  { id: 38, series: "Ecos del Silencio", title: "Acrílico y técnica mixta", year: 2023, technique: "Acrílico y técnica mixta", imgSrc: "/imgs/IMG-20250925-WA0047.jpg", alt: "Pintura abstracta clara con texturas suaves" },
  { id: 39, series: "Cartografías Urbanas", title: "Óleo y collage sobre tabla", year: 2021, technique: "Óleo y collage sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0048.jpg", alt: "Pintura abstracta con líneas geométricas y colores vibrantes" },
  { id: 40, series: "Cartografías Urbanas", title: "Técnica mixta sobre lienzo", year: 2022, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0049.jpg", alt: "Pintura abstracta con formas orgánicas y tonos grises" },
  { id: 41, series: "Horizontes Efímeros", title: "Acuarela sobre papel", year: 2020, technique: "Acuarela sobre papel", imgSrc: "/imgs/IMG-20250925-WA0050.jpg", alt: "Pintura abstracta con tonos cálidos y dorados" },
  { id: 42, series: "Horizontes Efímeros", title: "Óleo sobre lino", year: 2020, technique: "Óleo sobre lino", imgSrc: "/imgs/IMG-20250925-WA0051.jpg", alt: "Pintura abstracta con tonos fríos y texturas suaves" },
  { id: 43, series: "Ecos del Silencio", title: "Técnica mixta sobre lienzo", year: 2024, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0052.jpg", alt: "Pintura abstracta con colores intensos y pinceladas marcadas" },
  { id: 44, series: "Cartografías Urbanas", title: "Acrílico sobre madera", year: 2022, technique: "Acrílico sobre madera", imgSrc: "/imgs/IMG-20250925-WA0053.jpg", alt: "Pintura abstracta con líneas fluidas y colores contrastantes" },
  { id: 45, series: "Horizontes Efímeros", title: "Óleo sobre lienzo", year: 2021, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0054.jpg", alt: "Pintura abstracta con tonos violetas y azules" },
  { id: 46, series: "Ecos del Silencio", title: "Técnica mixta sobre papel", year: 2024, technique: "Técnica mixta sobre papel", imgSrc: "/imgs/IMG-20250925-WA0055.jpg", alt: "Pintura abstracta con texturas y pequeños destellos de color" },
  { id: 47, series: "Cartografías Urbanas", title: "Acrílico y tinta sobre lienzo", year: 2023, technique: "Acrílico y tinta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0056.jpg", alt: "Pintura abstracta con formas arquitectónicas y colores neutros" },
  { id: 48, series: "Horizontes Efímeros", title: "Óleo y pan de oro sobre tabla", year: 2022, technique: "Óleo y pan de oro sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0057.jpg", alt: "Pintura abstracta con tonos ocres y detalles dorados" },
  { id: 49, series: "Ecos del Silencio", title: "Óleo sobre lienzo", year: 2023, technique: "Óleo sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0058.jpg", alt: "Pintura abstracta oscura con toques dorados" },
  { id: 50, series: "Ecos del Silencio", title: "Acrílico y técnica mixta", year: 2023, technique: "Acrílico y técnica mixta", imgSrc: "/imgs/IMG-20250925-WA0059.jpg", alt: "Pintura abstracta clara con texturas suaves" },
  { id: 51, series: "Cartografías Urbanas", title: "Óleo y collage sobre tabla", year: 2021, technique: "Óleo y collage sobre tabla", imgSrc: "/imgs/IMG-20250925-WA0060.jpg", alt: "Pintura abstracta con líneas geométricas y colores vibrantes" },
  { id: 52, series: "Cartografías Urbanas", title: "Técnica mixta sobre lienzo", year: 2022, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0061.jpg", alt: "Pintura abstracta con formas orgánicas y tonos grises" },
  { id: 53, series: "Horizontes Efímeros", title: "Acuarela sobre papel", year: 2020, technique: "Acuarela sobre papel", imgSrc: "/imgs/IMG-20250925-WA0062.jpg", alt: "Pintura abstracta con tonos cálidos y dorados" },
  { id: 54, series: "Horizontes Efímeros", title: "Óleo sobre lino", year: 2020, technique: "Óleo sobre lino", imgSrc: "/imgs/IMG-20250925-WA0063.jpg", alt: "Pintura abstracta con tonos fríos y texturas suaves" },
  { id: 55, series: "Ecos del Silencio", title: "Técnica mixta sobre lienzo", year: 2024, technique: "Técnica mixta sobre lienzo", imgSrc: "/imgs/IMG-20250925-WA0064.jpg", alt: "Pintura abstracta con colores intensos y pinceladas marcadas" },
  { id: 56, series: "Cartografías Urbanas", title: "Acrílico sobre madera", year: 2022, technique: "Acrílico sobre madera", imgSrc: "/imgs/IMG-20250925-WA0065.jpg", alt: "Pintura abstracta con líneas fluidas y colores contrastantes"},
];
const INITIAL_VISIBLE_COUNT = 6;

const GallerySection = ({ openLightbox }) => {
  const [filter, setFilter] = useState('Todos');
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const seriesOptions = ['Todos', ...new Set(artworksData.map(art => art.series))];

  const filteredArtworks = filter === 'Todos' ? artworksData : artworksData.filter(art => art.series === filter);
  const displayedArtworks = filteredArtworks.slice(0, visibleCount);

  const toggleShowAll = () => {
    if (visibleCount === filteredArtworks.length) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      // Scroll to top of gallery section smoothly
      const galleryElement = document.getElementById('galeria');
      if (galleryElement) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
        const elementPosition = galleryElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      setVisibleCount(filteredArtworks.length);
    }
  };

  return (
   <section id="galeria" className="section-padding-artist bg-amber-50">
      <div className="container-artist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-cormorant font-bold text-gray-700 mb-4">
            Galería de Obras
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {seriesOptions.map(series => (
              <button
                key={series}
                onClick={() => {
                  setFilter(series);
                  setVisibleCount(INITIAL_VISIBLE_COUNT); // Reset visible count on filter change
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ease-in-out
                  ${filter === series 
                    ? 'bg-gray-800 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {series}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {displayedArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => openLightbox(artwork)}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  src={artwork.imgSrc}
                  alt={artwork.alt}
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-4">
                  <h3 className="text-white font-cormorant text-lg font-semibold">{artwork.title}</h3>
                  <p className="text-gray-200 text-xs">{artwork.year} - {artwork.technique}</p>
                </div>
                <div className="absolute top-3 right-3 p-2 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={18} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArtworks.length === 0 && (
          <p className="text-center text-gray-500 mt-12 font-lato">No hay obras disponibles para esta selección.</p>
        )}

        {filteredArtworks.length > INITIAL_VISIBLE_COUNT && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              onClick={toggleShowAll}
              variant="outline"
              className="btn-outline-artist group hover:border-yellow-600 hover:bg-yellow-600 hover:text-white"
            >
              {visibleCount === filteredArtworks.length ? 'Mostrar Menos Obras' : 'Ver Todas las Obras'}
              {visibleCount === filteredArtworks.length ? 
                <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-300" /> :
                <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
              }
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;