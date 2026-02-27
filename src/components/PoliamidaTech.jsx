import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Zap, Droplets, Wind, CheckCircle } from 'lucide-react';

const PoliamidaTech = () => {
    const benefits = [
        {
            icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
            title: 'Secagem Ultra-Rápida',
            desc: 'Seca em até 3 minutos, mantendo o atleta seco durante toda a prova.'
        },
        {
            icon: <Droplets className="w-5 h-5 md:w-6 md:h-6" />,
            title: 'Gestão de Umidade',
            desc: 'Afasta o suor da pele para a superfície externa, evaporando rapidamente.'
        },
        {
            icon: <Wind className="w-5 h-5 md:w-6 md:h-6" />,
            title: 'Ultra Leveza',
            desc: 'Gramatura otimizada — a camiseta praticamente não é sentida pelo atleta.'
        },
        {
            icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
            title: 'Durabilidade Premium',
            desc: 'Resiste a inúmeras lavagens sem perder forma, cor ou qualidade.'
        },
    ];

    return (
        <section className="py-12 md:py-24 bg-neutral-900 relative" id="tecnologia">
            <div className="absolute inset-0 bg-[url('/images/bkc_camisa_1_lifestyle_action.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-8 md:mb-14">
                        <span className="text-accent tracking-widest uppercase text-xs md:text-sm font-bold">Material Técnico</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mt-3">
                            POR QUE ESCOLHER A <span className="text-accent">POLIAMIDA?</span>
                        </h2>
                        <p className="text-gray-400 mt-3 text-sm md:text-base max-w-xl mx-auto">O tecido técnico preferido em corridas de alto rendimento no Brasil e no mundo.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                        {benefits.map((b, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="bg-black p-4 md:p-7 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 h-full">
                                    <div className="text-accent mb-2 md:mb-4">{b.icon}</div>
                                    <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-3">{b.title}</h3>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default PoliamidaTech;
