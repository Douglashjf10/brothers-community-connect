
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Doacoes from "./pages/Doacoes";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";
import Galeria from "./pages/Galeria";
import Servicos from "./pages/Servicos";
import ComoAjudar from "./pages/ComoAjudar";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/como-ajudar" element={<ComoAjudar />} />
          <Route path ="/servicos" element={<Servicos/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
