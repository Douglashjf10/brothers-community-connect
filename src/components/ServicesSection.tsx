
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Image, ArrowUp } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Calendar,
    title: "Oficinas Educativas",
    description: "Oferecemos oficinas de segunda a sábado, com atividades lúdicas e educativas para o desenvolvimento integral das crianças."
  },
  {
    id: 2,
    icon: Users,
    title: "Refeições Nutritivas",
    description: "Proporcionamos refeições balanceadas, garantindo nutrição adequada para um crescimento saudável."
  },
  {
    id: 3,
    icon: Image,
    title: "Campanhas de Arrecadação",
    description: "Organizamos campanhas para arrecadar cestas básicas, materiais escolares e produtos de higiene pessoal."
  },
  {
    id: 4,
    icon: ArrowUp,
    title: "Bazar Solidário",
    description: "Nosso bazar funciona de segunda a sexta, das 11h às 17h, oferecendo produtos a preços acessíveis para a comunidade."
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-accent" id="servicos">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-accent-foreground text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Atendemos Nossa Comunidade
          </h2>
          <p className="text-muted-foreground">
            Conheça os principais serviços e atividades oferecidos pela Brothers do Bem para transformar vidas e fortalecer nossa comunidade.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className="card-standard p-6 flex flex-col card-hover bg-white"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link to="/servicos" className="button-primary">
            Ver Todos os Serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
