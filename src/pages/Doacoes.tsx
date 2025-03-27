
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Wallet, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Doacoes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-16 md:pt-40 md:pb-20 bg-secondary text-secondary-foreground relative overflow-hidden">
          <div className="container-section relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Faça Uma <span className="text-primary">Doação</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
                Sua contribuição financeira é fundamental para mantermos nossos projetos e transformarmos vidas.
              </p>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/20"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/20"></div>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-16 md:py-24">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Como Sua Doação É Utilizada
              </h2>
              <p className="text-muted-foreground text-lg">
                Prezamos pela transparência. Conheça como os recursos são aplicados em nossos projetos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/5 border border-border rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alimentação</h3>
                <p className="text-muted-foreground">
                  Fornecemos refeições nutritivas diariamente para as crianças atendidas, garantindo seu desenvolvimento saudável.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary/5 border border-border rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <HeartHandshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Oficinas e Materiais</h3>
                <p className="text-muted-foreground">
                  Mantemos oficinas educativas com materiais de qualidade para o desenvolvimento intelectual e criativo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-secondary/5 border border-border rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Infraestrutura</h3>
                <p className="text-muted-foreground">
                  Mantemos um espaço seguro e adequado para as atividades, com condições dignas para atendimento.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-10 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-center">Faça Sua Doação Agora</h3>
                <p className="text-center mb-8">
                  Escolha a modalidade que mais se adequa à sua disponibilidade. Toda contribuição é importante!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-primary-foreground/10 p-5 rounded-lg flex flex-col items-center">
                    <CreditCard className="h-10 w-10 mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Doação Única</h4>
                    <p className="text-center text-sm mb-4">
                      Uma contribuição pontual de qualquer valor para ajudar nossos projetos.
                    </p>
                    <a 
                      href="https://doe.brothersdobem.org/unica" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-5 py-2 bg-primary-foreground text-primary font-medium rounded-full hover:bg-white/90 transition-standard flex items-center gap-2"
                    >
                      Doar Agora <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  
                  <div className="bg-primary-foreground/10 p-5 rounded-lg flex flex-col items-center">
                    <Wallet className="h-10 w-10 mb-3" />
                    <h4 className="text-xl font-semibold mb-2">Doação Mensal</h4>
                    <p className="text-center text-sm mb-4">
                      Seja um apoiador recorrente e ajude a manter nossos projetos continuamente.
                    </p>
                    <a 
                      href="https://doe.brothersdobem.org/mensal" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-5 py-2 bg-primary-foreground text-primary font-medium rounded-full hover:bg-white/90 transition-standard flex items-center gap-2"
                    >
                      Ser Apoiador <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="text-center text-sm">
                  <p className="mb-2">Também aceitamos transferências via PIX:</p>
                  <p className="font-semibold mb-1">contato@brothersdobem.org</p>
                  <p className="text-xs">Todos os dados são protegidos. Os recursos são auditados anualmente.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accountability Section */}
        <section className="py-16 md:py-24 bg-secondary/5">
          <div className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Transparência e Prestação de Contas
              </h2>
              
              <p className="text-center text-muted-foreground mb-12">
                Valorizamos a transparência em nossas ações. Anualmente, publicamos relatórios financeiros detalhados.
              </p>
              
              <div className="bg-background border border-border rounded-xl p-6 md:p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Resultados de 2023</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">•</span>
                    <span>120 crianças atendidas regularmente</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">•</span>
                    <span>15.000 refeições servidas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">•</span>
                    <span>300 cestas básicas distribuídas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-semibold">•</span>
                    <span>4 oficinas semanais de educação e cultura</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Para acessar nossos relatórios completos de prestação de contas ou tirar dúvidas sobre doações:
                </p>
                <Link 
                  to="/contato" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full shadow-subtle hover:shadow-hover transition-standard"
                >
                  Entre em Contato
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

export default Doacoes;
