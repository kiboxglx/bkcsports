import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
{/* O Navbar será unificado e terá links que funcionam tanto como hash quanto rotas */ }
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CamisetaPoliamida from './pages/CamisetaPoliamida';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos-nos" element={<About />} />
            <Route path="/contato-camiseta-poliamida" element={<Contact />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/orcamento" element={<Home />} />
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
