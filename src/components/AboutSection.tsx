
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const valuesList = [
  { id: 1, text: "Educação como base para o futuro" },
  { id: 2, text: "Amor e carinho em cada ação" },
  { id: 3, text: "Atenção individualizada" },
  { id: 4, text: "Comprometimento com a comunidade" },
  { id: 5, text: "Transparência em todas as atividades" },
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="sobre">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://source.unsplash.com/photo-1602810318383-e386cc2a3ccf" 
              alt="Crianças felizes participando de atividades"
              className="rounded-2xl shadow-subtle h-[500px] w-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Desde 2020
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a <span className="text-primary">Brothers do Bem</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Fundada em 2020, a Brothers do Bem nasceu do desejo de transformar a vida de crianças em Juiz de Fora através da educação, higiene, conforto e alimentação de qualidade.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Nossa missão é oferecer um ambiente de apoio e desenvolvimento para crianças em situação de vulnerabilidade social, promovendo valores essenciais para a formação cidadã.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
            
            <ul className="space-y-3 mb-8">
              {valuesList.map((value) => (
                <li key={value.id} className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 rounded-full bg-accent p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <span>{value.text}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/sobre" className="button-primary">
              Saiba Mais
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
