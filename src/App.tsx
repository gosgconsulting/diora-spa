import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ContentEditor from "./cms/pages/ContentEditor";
import AdminIndex from "./cms/pages/AdminIndex";
import { AuthProvider } from "./cms/auth/auth";
import { SupabaseAuthProvider } from "./cms/auth/supabaseAuth";
import ProtectedRoute from "./cms/auth/ProtectedRoute";
import Login from "./cms/pages/Login";
import Signup from "./cms/pages/Signup";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SupabaseAuthProvider>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminIndex />} />
            <Route path="/admin/:slug" element={<ContentEditor />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        </AuthProvider>
        </SupabaseAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
