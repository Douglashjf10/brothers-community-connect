// src/pages/Sobre.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-black">
          <div className="container-section text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Unidos pelo bem, guiados pela educação! Desde 2020, somos um farol de esperança em Santa Terezinha.
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagem Ilustrativa */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src="lovable-uploads/sobre.jpg" 
                  alt="Crianças felizes participando de atividades"
                  className="rounded-2xl shadow-subtle h-[400px] w-full object-cover"
                />
              </motion.div>

              {/* Conteúdo Textual */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
                <p className="text-muted-foreground mb-6">
                  Fundada em 2020, a Brothers do Bem nasceu do desejo de transformar a vida de crianças em situação de vulnerabilidade em Juiz de Fora. 
                  Através da educação, higiene, conforto e alimentação de qualidade, nossa missão é mostrar que cada criança tem o potencial de alcançar grandes sonhos.
                </p>
                <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
                <ul className="list-disc pl-6 text-muted-foreground mb-6">
                  <li>Educação</li>
                  <li>Amor e Carinho</li>
                  <li>Atenção e Comprometimento</li>
                  <li>Transparência</li>
                </ul>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Projetos</h2>
                <p className="text-muted-foreground mb-6">
                  Desenvolvemos oficinas educativas de segunda a sábado e oferecemos refeições nutritivas para promover o desenvolvimento integral das crianças. 
                  Além disso, organizamos campanhas de arrecadação de cestas básicas, materiais escolares e produtos de higiene, e mantemos um Bazar Solidário, 
                  onde toda a renda gerada é reinvestida em nossos projetos.
                </p>
                <p className="text-muted-foreground">
                  Junte-se a nós nessa jornada transformadora e ajude a construir um futuro melhor para nossas crianças!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
