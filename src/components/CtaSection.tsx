
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
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
          
          <p className="text-secondary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Sua contribuição pode transformar vidas. Cada ajuda faz a diferença no futuro dessas crianças.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/doacoes" className="px-6 py-3 md:px-8 md:py-4 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard">
              Fazer uma Doação
            </Link>
            <Link to="/contato" className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-secondary-foreground border border-secondary-foreground hover:bg-white/10 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard">
              Entre em Contato
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/20"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10"></div>
      </div>
    </section>
  );
};

export default CtaSection;
