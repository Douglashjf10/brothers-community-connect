
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "lovable-uploads/Snapins.ai_481387033_990009909758810_3967970599670924563_n_1080.jpg",
    alt: "Crianças em atividade educativa"
  },
  {
    id: 2,
    src: "lovable-uploads/Snapins.ai_482377677_2082804855500689_2152407945527652237_n_1080 (1).jpg",
    alt: "Voluntários realizando oficina"
  },
  {
    id: 3,
    src: "lovable-uploads/Snapins.ai_481326423_532969333149556_4558732792512643052_n_1080.jpg",
    alt: "Crianças felizes brincando"
  },
  {
    id: 4,
    src: "lovable-uploads/Snapins.ai_476443655_933598285560306_6366711108629813502_n_1080.jpg",
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
