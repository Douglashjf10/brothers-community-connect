
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Share2 } from 'lucide-react';

const helpOptions = [
  {
    id: 1,
    icon: Heart,
    title: "Faça uma Doação",
    description: "Sua contribuição financeira é fundamental para mantermos nossas atividades e ampliarmos nosso impacto.",
    button: "Doar Agora",
    link: "/doacoes"
  },
  {
    id: 2,
    icon: Users,
    title: "Seja Voluntário",
    description: "Doe seu tempo e habilidades para ajudar em nossas oficinas, eventos e campanhas.",
    button: "Quero Ser Voluntário",
    link: "/como-ajudar#voluntario"
  },
  {
    id: 3,
    icon: Share2,
    title: "Compartilhe Nossa Causa",
    description: "Ajude a divulgar nosso trabalho nas redes sociais e amplie nosso alcance na comunidade.",
    button: "Compartilhar",
    link: "https://www.instagram.com/institutobrothersdobem"
  }
];

const HelpSection = () => {
  return (
    <section className="section-padding bg-white" id="como-ajudar">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Como Ajudar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte Dessa Transformação
          </h2>
          <p className="text-muted-foreground">
            Existem diversas maneiras de contribuir com nosso trabalho e fazer a diferença na vida de nossas crianças e famílias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <motion.div 
              key={option.id}
              className="card-standard overflow-hidden bg-white shadow-subtle flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent p-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{option.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>
                <Link 
                  to={option.link} 
                  className={option.id === 1 ? "button-primary w-full text-center" : "button-secondary w-full text-center"}
                >
                  {option.button}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
