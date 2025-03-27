
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 pb-6">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-display mb-4">Brothers do Bem</h3>
            <p className="text-muted-foreground">
              Educação, higiene, conforto e alimentação para crianças desde 2020.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-standard">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-standard">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-foreground transition-standard">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-muted-foreground hover:text-foreground transition-standard">
                  Como Ajudar
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-muted-foreground hover:text-foreground transition-standard">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-foreground transition-standard">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-standard"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:contato@brothersdobem.org" 
                  className="text-muted-foreground hover:text-foreground transition-standard"
                >
                  contato@brothersdobem.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary" />
                <a 
                  href="https://instagram.com/brothersdobem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-standard"
                >
                  @brothersdobem
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              R. Alencar Tristão, 121 – Santa Terezinha<br />
              Juiz de Fora - MG – 36046-010
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display mb-4">Faça uma Doação</h4>
            <p className="text-muted-foreground mb-4">
              Sua ajuda é fundamental para mantermos nossos projetos e transformarmos vidas.
            </p>
            <Link to="/doacoes" className="button-primary inline-block">
              Doar Agora
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brothers do Bem. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
