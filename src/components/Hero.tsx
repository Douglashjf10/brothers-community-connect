
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden hero-pattern">
      <div className="container-section relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformando Vidas com <span className="text-primary">Educação e Amor</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
              Desde 2020 promovendo educação, higiene, conforto e alimentação para crianças em Juiz de Fora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/como-ajudar" className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard">
                Como Ajudar
              </Link>
              <Link to="/sobre" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard border border-border">
                Conheça Nossa História
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
