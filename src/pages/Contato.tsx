
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Contato = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-black py-16">
          <div className="container-section">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-lg md:text-xl max-w-3xl">
              Estamos aqui para responder suas perguntas, ouvir suas ideias e receber seu apoio. 
              Entre em contato conosco e faça parte desta transformação.
            </p>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 bg-white">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Informações de Contato</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        R. Alencar Tristão, 121 – Santa Terezinha<br />
                        Juiz de Fora - MG – 36046-010
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full">
                      <Phone className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Telefone</h3>
                      <p className="text-muted-foreground">
                        <a href="https://wa.me/5500000000000" className="hover:text-primary transition-colors">
                          (00) 00000-0000
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full">
                      <Mail className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">E-mail</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contato@brothersdobem.org" className="hover:text-primary transition-colors">
                          contato@brothersdobem.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Instagram</h3>
                      <p className="text-muted-foreground">
                        <a href="https://instagram.com/brothersdobem" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          @brothersdobem
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-display text-2xl font-bold mb-4">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-semibold">Segunda a Sexta:</span> 9h às 18h
                  </p>
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Sábado:</span> 9h às 13h
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-subtle">
                <h2 className="font-display text-3xl font-bold mb-8">Envie uma Mensagem</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary">
          <div className="container-section">
            <h2 className="font-display text-3xl text-white font-bold mb-8 text-center">Como Chegar</h2>
            <div className="relative overflow-hidden pt-[56.25%] rounded-lg shadow-subtle">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.2729852299854!2d-43.3601261!3d-21.7598873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989ba1a2c78ae5%3A0x47895ef69c6c251!2sR.%20Alencar%20Trist%C3%A3o%2C%20121%20-%20Santa%20Terezinha%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036046-010!5e0!3m2!1spt-BR!2sbr!4v1692292970240!5m2!1spt-BR!2sbr" 
                className="absolute top-0 left-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Brothers do Bem"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
