import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-3 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="text-2xl font-black tracking-tighter text-white">
                    BKC<span className="text-accent">.</span>SPORTS
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    {['Tecnologia', 'Produtos', 'Time', 'Revendedores'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-accent transition-colors tracking-wide uppercase"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block px-5 py-2 text-xs font-bold uppercase tracking-wider border border-white/20 hover:border-accent hover:text-accent transition-all duration-300 rounded-sm">
                        B2B Login
                    </button>
                    <button className="md:hidden text-white">
                        {/* Burger icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
