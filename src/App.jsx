import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
{/* O Navbar será unificado e terá links que funcionam tanto como hash quanto rotas */ }
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

// Services
import { track } from './services/tracking';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CamisetaPoliamida from './pages/CamisetaPoliamida';
import Orcamento from './pages/Orcamento';

// Scroll to top on route change.
// Hash navigation across routes precisa de um pequeno delay porque
// o BudgetForm ainda nao montou no momento em que o useEffect dispara.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.replace('#', '');
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Tenta imediato + retry com delay (cobre cross-route navigation)
    tryScroll();
    const timeout = setTimeout(tryScroll, 150);
    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

// Meta Pixel + CAPI: dispara PageView a cada mudanca de rota (SPA).
const RouteTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    track('PageView');
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
          <ScrollToTop />
          <RouteTracker />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos-nos" element={<About />} />
            <Route path="/contato-camiseta-poliamida" element={<Contact />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/orcamento" element={<Orcamento />} />
            <Route path="/produtos" element={<Home />} />
            {/* SEO — Camiseta de Poliamida */}
            <Route path="/camiseta-de-poliamida" element={<CamisetaPoliamida />} />
            <Route path="/camiseta-de-corrida-personalizada" element={<CamisetaPoliamida />} />
            <Route path="/kit-corrida-personalizado" element={<CamisetaPoliamida />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
