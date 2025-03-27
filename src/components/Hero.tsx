
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-24 lg:pb-32 overflow-hidden hero-pattern">
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformando Vidas com <span className="text-primary">Educação e Amor</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
              Desde 2020 promovendo educação, higiene, conforto e alimentação para crianças em Juiz de Fora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/como-ajudar" className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard">
                Como Ajudar
              </Link>
              <Link to="/sobre" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard border border-border">
                Conheça Nossa História
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-primary">
              <img 
                src="/lovable-uploads/f15e4cff-415a-46b0-be5b-bb94d0b81716.png" 
                alt="Crianças atendidas pela Brothers do Bem" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
