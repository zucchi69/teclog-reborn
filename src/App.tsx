import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollManager } from "@/components/ScrollManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contato from "./pages/Contato";
import Inertizacao from "./pages/services/Inertizacao";
import LimpezaDutos from "./pages/services/LimpezaDutos";
import TesteHidrostatico from "./pages/services/TesteHidrostatico";
import EnchimentoDutos from "./pages/services/EnchimentoDutos";
import ManutencaoIndustrial from "./pages/services/ManutencaoIndustrial";
import EsvaziamentoSecagem from "./pages/services/EsvaziamentoSecagem";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos/inertizacao" element={<Inertizacao />} />
          <Route path="/servicos/limpeza-de-dutos" element={<LimpezaDutos />} />
          <Route path="/servicos/teste-hidrostatico" element={<TesteHidrostatico />} />
          <Route path="/servicos/enchimento-de-dutos" element={<EnchimentoDutos />} />
          <Route path="/servicos/manutencao-industrial" element={<ManutencaoIndustrial />} />
          <Route path="/servicos/esvaziamento-e-secagem" element={<EsvaziamentoSecagem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
