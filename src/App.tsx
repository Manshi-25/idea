
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SkillDevelopment from "./pages/SkillDevelopment";
import TryItYourself from "./pages/TryItYourself";
import TestYourSkills from "./pages/TestYourSkills";
import TestSkillDetail from "./pages/TestSkillDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/try-it-yourself" element={<TryItYourself />} />
          <Route path="/test-your-skills" element={<TestYourSkills />} />
          <Route path="/test-your-skills/:id" element={<TestSkillDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
