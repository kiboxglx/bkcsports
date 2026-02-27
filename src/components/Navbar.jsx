import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Quem Somos', path: '/quem-somos-nos', type: 'route' },
        { label: 'Tecnologia', path: '/#tecnologia', type: 'anchor' },
        { label: 'Produtos', path: '/#produtos', type: 'anchor' },
        { label: 'Medidas', path: '/#tabela-medidas', type: 'anchor' },
        { label: 'Contato', path: '/contato-camiseta-poliamida', type: 'route' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-3 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="text-2xl font-black tracking-tighter text-white">
                    BKC<span className="text-accent">.</span>SPORTS
                </Link>

                <nav className="hidden md:flex items-center gap-8">
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
                                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors tracking-wide uppercase"
                            >
                                {item.label}
                            </a>
                        )
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a href="#revendedores" className="hidden md:block px-6 py-3 bg-accent text-black font-black uppercase tracking-wider rounded-sm hover:scale-105 hover:bg-white transition-all duration-300">
                        SOLICITAR ORÇAMENTO
                    </a>
                    <button className="md:hidden text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
