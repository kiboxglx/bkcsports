import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none" />
            {/* Background Image - Dynamic based on viewport could be handled with picture tag or CSS classes found in framework, 
          here using a high quality running image covering both for now with object-position adjustment if needed */}
            <div className="absolute inset-0 bg-gray-900">
                <div className="absolute inset-0 opacity-55 bg-[url('/images/bkc_camisa_1_lifestyle_action.png')] bg-cover bg-center mix-blend-luminosity"></div>
            </div>

            <div ref={ref} className={`relative z-20 text-center px-4 max-w-5xl mx-auto mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
                    PARCERIA DE ELITE
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
                    VISTA SEU EVENTO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">COMO GIGANTE</span>
                </h1>
                <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light">
                    Camisetas de poliamida de alta performance no atacado. O kit que os atletas vão querer usar, do evento à rotina.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#budget" className="px-10 py-4 bg-accent text-black font-bold uppercase tracking-wider hover:bg-white hover:scale-105 transition-all duration-300 min-w-[220px]">
                        Solicitar Orçamento
                    </a>
                    <a href="#tecnologia" className="px-10 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 min-w-[220px] backdrop-blur-md">
                        Conhecer Qualidade
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
