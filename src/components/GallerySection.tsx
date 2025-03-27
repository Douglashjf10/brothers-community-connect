
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "https://source.unsplash.com/photo-1531482615713-2afd69097998",
    alt: "Crianças em atividade educativa"
  },
  {
    id: 2,
    src: "https://source.unsplash.com/photo-1551966775-a4ddc8df052b",
    alt: "Voluntários realizando oficina"
  },
  {
    id: 3,
    src: "https://source.unsplash.com/photo-1574362848149-11496d93a7c7",
    alt: "Crianças felizes brincando"
  },
  {
    id: 4,
    src: "https://source.unsplash.com/photo-1608889175638-9322300c643e",
    alt: "Entrega de doações"
  }
];

const GallerySection = () => {
  return (
    <section className="section-padding bg-white" id="galeria">
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Nossa Galeria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Momentos que Fazem a Diferença
            </h2>
            <p className="text-muted-foreground">
              Veja um pouco das nossas atividades, eventos e do impacto que causamos na vida de nossas crianças.
            </p>
          </div>
          
          <Link 
            to="/galeria" 
            className="group flex items-center gap-2 text-primary font-medium"
          >
            Ver Todas as Fotos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={image.id}
              className="relative overflow-hidden rounded-xl aspect-square card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover animate-photo-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
