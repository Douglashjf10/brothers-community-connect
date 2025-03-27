// src/pages/ComoAjudar.tsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComoAjudar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container-section text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Como Ajudar</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Faça parte desta causa maior! Descubra como seu trabalho voluntário pode transformar vidas e fortalecer nossa comunidade.
            </p>
          </div>
        </section>

        {/* Seção de Voluntariado */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Conteúdo Textual */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Seja Voluntário</h2>
                <p className="text-muted-foreground">
                  O voluntariado é uma forma poderosa de impactar positivamente a comunidade. Ao se juntar a nós, você ajuda diretamente na oferta de educação, cuidados e oportunidades para crianças em situação de vulnerabilidade.
                </p>
                <p className="text-muted-foreground">
                  Nossas atividades incluem oficinas educativas, eventos culturais e campanhas de arrecadação que precisam do empenho de pessoas dedicadas e apaixonadas. Se você tem tempo e vontade de fazer a diferença, sua participação é fundamental para transformar sonhos em realidade.
                </p>
                <p className="text-muted-foreground">
                  Entre em contato conosco para saber mais sobre as oportunidades de voluntariado e como você pode se envolver nesta missão.
                </p>
                <Link to="/contato" className="button-primary inline-block mt-4">
                  Entre em Contato
                </Link>
              </div>
              {/* Imagem Ilustrativa */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="lovable-uploads/Snapins.ai_476274778_921399000076528_154000952395425234_n_1080 (1).jpg" 
                  alt="Voluntariado" 
                  className="rounded-2xl shadow-subtle w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Outras Formas de Ajudar */}
        <section className="py-16 bg-secondary/5">
          <div className="container-section text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Outras Formas de Ajudar</h2>
              <p className="text-muted-foreground mb-8">
                Além do voluntariado, você pode apoiar nossa causa fazendo doações e compartilhando nosso trabalho nas redes sociais. Cada gesto conta!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/doacoes" className="button-primary inline-block">
                  Faça uma Doação
                </Link>
                <Link to="/contato" className="button-secondary inline-block">
                  Fale Conosco
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComoAjudar;
