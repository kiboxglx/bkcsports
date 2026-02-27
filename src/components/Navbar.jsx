import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { label: 'Quem Somos', path: '/quem-somos-nos', type: 'route' },
        { label: 'Tecnologia', path: '/#tecnologia', type: 'anchor' },
        { label: 'Produtos', path: '/#produtos', type: 'anchor' },
        { label: 'Medidas', path: '/#tabela-medidas', type: 'anchor' },
        { label: 'Contato', path: '/contato-camiseta-poliamida', type: 'route' },
    ];

    const handleAnchorClick = (e, path) => {
        setIsMenuOpen(false);
        if (path.startsWith('/#')) {
            e.preventDefault();
            const id = path.replace('/#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
                    ? 'py-3 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-white" onClick={() => setIsMenuOpen(false)}>
                        BKC<span className="text-accent">.</span>SPORTS
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            item.type === 'route' ? (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className="text-sm font-medium text-gray-300 hover:text-accent transition-colors tracking-wide uppercase"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    onClick={(e) => handleAnchorClick(e, item.path)}
                                    className="text-sm font-medium text-gray-300 hover:text-accent transition-colors tracking-wide uppercase"
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        {/* Desktop CTA */}
                        <a
                            href="#revendedores"
                            className="hidden lg:block px-6 py-3 bg-accent text-black font-black uppercase tracking-wider rounded-sm hover:scale-105 hover:bg-white transition-all duration-300"
                        >
                            SOLICITAR ORÇAMENTO
                        </a>

                        {/* Mobile Hamburger */}
                        <button
                            className="lg:hidden text-white p-2 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        >
                            {isMenuOpen ? (
                                // X icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <nav className="flex flex-col bg-black/95 border-t border-white/10 px-6 py-4 gap-1">
                        {navItems.map((item) => (
                            item.type === 'route' ? (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="py-3 text-base font-bold text-gray-300 hover:text-accent transition-colors tracking-wide uppercase border-b border-white/5"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    onClick={(e) => handleAnchorClick(e, item.path)}
                                    className="py-3 text-base font-bold text-gray-300 hover:text-accent transition-colors tracking-wide uppercase border-b border-white/5"
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                        <a
                            href="#revendedores"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-4 w-full text-center py-4 bg-accent text-black font-black uppercase tracking-wider hover:bg-white transition-colors duration-300"
                        >
                            SOLICITAR ORÇAMENTO
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;
