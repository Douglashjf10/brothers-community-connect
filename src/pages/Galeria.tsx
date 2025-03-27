// src/pages/Galeria.tsx
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';

const Galeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section para a Galeria */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container-section text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Galeria</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Explore os momentos especiais e as atividades que transformam a vida das crianças na Brothers do Bem.
            </p>
          </div>
        </section>

        {/* Seção da Galeria */}
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Galeria;
