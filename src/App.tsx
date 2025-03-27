
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Doacoes from "./pages/Doacoes";
import Contato from "./pages/Contato";
// We'll need to implement these pages later
// import Sobre from "./pages/Sobre";
// import Servicos from "./pages/Servicos";
// import ComoAjudar from "./pages/ComoAjudar";
// import Galeria from "./pages/Galeria";

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
          {/* These routes will be implemented in future iterations */}
          {/* <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/como-ajudar" element={<ComoAjudar />} />
          <Route path="/galeria" element={<Galeria />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
