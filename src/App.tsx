import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import VariationIndex from "./pages/VariationIndex";
import V1Editorial from "./pages/V1Editorial";
import V2Showroom from "./pages/V2Showroom";
import V3Split from "./pages/V3Split";
import V4Cinematic from "./pages/V4Cinematic";
import V5Grid from "./pages/V5Grid";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Inventory from "./pages/Inventory";
import CarDetail from "./pages/CarDetail";
import Services from "./pages/Services";
import Restoration from "./pages/Restoration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/AutoRama">
        <Routes>
          <Route path="/" element={<V1Editorial />} />
          <Route path="/variations" element={<VariationIndex />} />
          <Route path="/v1-editorial" element={<V1Editorial />} />
          <Route path="/v2-showroom" element={<V2Showroom />} />
          <Route path="/v3-split" element={<V3Split />} />
          <Route path="/v4-cinematic" element={<V4Cinematic />} />
          <Route path="/v5-grid" element={<V5Grid />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:carId" element={<CarDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/restoration" element={<Restoration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
