import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
{/* O Navbar será unificado e terá links que funcionam tanto como hash quanto rotas */ }
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

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
            {/* Fallback for common SEO paths */}
            <Route path="/contato" element={<Contact />} />
            <Route path="/orcamento" element={<Home />} /> {/* Budget is on home section */}
            <Route path="/produtos" element={<Home />} /> {/* Products is on home section */}
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
