import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Sobre Nós', path: '/sobre' },
  { name: 'Serviços', path: '/servicos' },
  { name: 'Como Ajudar', path: '/como-ajudar' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Contato', path: '/contato' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Header fixo com navbar */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
          scrolled
            ? 'bg-white/90 backdrop-blur-md py-3 shadow-subtle'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-section flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl font-bold text-primary">Brothers do Bem</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                className="text-sm font-medium text-foreground hover:text-primary transition-standard"
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/doacoes"
              className="button-primary text-sm"
            >
              Faça uma Doação
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-[9999] bg-white transition-transform ease-in-out duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <span className="font-display text-2xl font-bold text-primary">Brothers do Bem</span>
            <button
              className="p-2 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            {routes.map((route) => (
              <Link
                key={route.name}
                to={route.path}
                className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/doacoes"
              className="button-primary text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Faça uma Doação
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
