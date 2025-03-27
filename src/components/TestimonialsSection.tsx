
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "A Brothers do Bem mudou a vida do meu filho. Ele agora está mais confiante, tem novas amizades e aprendeu muito nas oficinas. A alimentação saudável também fez toda diferença no seu desenvolvimento.",
    name: "Maria Silva",
    role: "Mãe do João, 8 anos"
  },
  {
    id: 2,
    content: "A dedicação dos voluntários é impressionante. Minha filha adora as oficinas de artes e música, e notei grande melhora no seu desempenho escolar desde que começou a frequentar a ONG.",
    name: "Carlos Pereira",
    role: "Pai da Ana, 10 anos"
  },
  {
    id: 3,
    content: "Como mãe solo, as oficinas e refeições oferecidas pela Brothers do Bem são fundamentais para que eu possa trabalhar tranquila, sabendo que meus filhos estão em boas mãos e aprendendo valores importantes.",
    name: "Juliana Mendes",
    role: "Mãe do Pedro e da Luísa"
  },
  {
    id: 4,
    content: "Meu filho sempre volta para casa feliz e ansioso para contar tudo o que aprendeu. As campanhas de arrecadação também nos ajudaram muito em momentos difíceis.",
    name: "Roberto Alves",
    role: "Pai do Miguel, 7 anos"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-accent">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-accent-foreground text-sm font-medium mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Que os Pais Dizem Sobre Nosso Trabalho
          </h2>
          <p className="text-muted-foreground">
            O impacto do nosso trabalho pode ser visto através dos relatos de pais e responsáveis pelas crianças atendidas.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div 
                    className="bg-white rounded-2xl shadow-subtle p-8 md:p-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6">
                        <svg width="45" height="36" className="text-primary/30 fill-current">
                          <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                        </svg>
                      </div>
                      
                      <blockquote className="text-lg md:text-xl mb-8 font-medium">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-subtle hover:shadow-md transition-standard focus:outline-none"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-standard ${
                    index === activeIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-subtle hover:shadow-md transition-standard focus:outline-none"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
