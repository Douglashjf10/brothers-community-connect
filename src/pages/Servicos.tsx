// src/pages/Servicos.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Music, Activity, Calendar, Gift, Store, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    id: 1,
    icon: Cpu,
    title: "Aulas de Computação",
    description: "Capacitamos jovens e adultos com habilidades digitais e informática básica, preparando-os para o mundo conectado."
  },
  {
    id: 2,
    icon: Music,
    title: "Aulas de Dança",
    description: "Promovemos a expressão corporal e a arte através de aulas de dança, incentivando a autoestima e a criatividade."
  },
  {
    id: 3,
    icon: Activity,
    title: "Capoeira",
    description: "Oferecemos aulas de capoeira que fortalecem a disciplina, a coordenação e valorizam a cultura afro-brasileira."
  },
  {
    id: 4,
    icon: Calendar,
    title: "Eventos Juninos",
    description: "Organizamos festas juninas que resgatam tradições e proporcionam momentos de alegria e integração para a comunidade."
  },
  {
    id: 5,
    icon: Gift,
    title: "Eventos de Natal",
    description: "Realizamos celebrações natalinas que reforçam o espírito de solidariedade, unindo famílias e promovendo a cultura do bem."
  },
  {
    id: 6,
    icon: Store,
    title: "Bazar Solidário",
    description: "Nosso bazar funciona de segunda a sexta, das 11h às 17h, oferecendo produtos a preços acessíveis para a comunidade. Toda renda gerada é reinvestida na manutenção dos nossos projetos.",
    image: "lovable-uploads/Snapins.ai_341383977_965428894453092_7899880119379342387_n_1080.jpg"
  },
  {
    id: 7,
    icon: Globe,
    title: "Aulas de Inglês",
    description: "Oferecemos aulas de inglês aos terceiros sábados de cada mês em nossa sede, ampliando as oportunidades de comunicação e desenvolvimento pessoal em um mundo globalizado."
  }
];

const Servicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-secondary text-secondary-foreground text-center">
          <div className="container-section">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Descubra as atividades que oferecemos para transformar vidas: aulas de computação, dança, capoeira, eventos culturais, bazar solidário, aulas de inglês e muito mais.
            </p>
          </div>
        </section>

        {/* Grid de Serviços */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.id} variants={itemVariants} className="bg-gray-50 border border-border rounded-xl p-6 flex flex-col items-center text-center shadow-subtle">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  {service.image && (
                    <div className="w-full mt-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg object-cover w-full h-40"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground mt-4">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                E muito mais para transformar vidas e fortalecer nossa comunidade.
              </p>
              <Link to="/contato" className="button-primary inline-block">
                Entre em Contato
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
