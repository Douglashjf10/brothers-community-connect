
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container-section relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Junte-se a Nós Nessa Missão
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Sua contribuição pode transformar vidas. Seja através de doações, voluntariado ou simplesmente compartilhando nossa causa, cada ajuda faz a diferença.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doacoes" className="button-secondary bg-white text-primary hover:bg-white/90">
              Fazer uma Doação
            </Link>
            <Link to="/contato" className="button-secondary bg-transparent text-white border-white hover:bg-white/10">
              Entre em Contato
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/10"></div>
      </div>
    </section>
  );
};

export default CtaSection;
