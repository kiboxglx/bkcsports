import React from 'react';
import { Wind, Feather, Activity, Sun } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const SpecsGrid = () => {
    const specs = [
        {
            id: 1,
            title: "Troca Térmica Ativa",
            desc: "Tecnologia que reage ao calor do corpo, mantendo a temperatura ideal.",
            icon: <Wind className="w-10 h-10" />
        },
        {
            id: 2,
            title: "Peso Pena (Ultra Leve)",
            desc: "Menos de 100g. Você nem vai sentir que está vestindo.",
            icon: <Feather className="w-10 h-10" />
        },
        {
            id: 3,
            title: "Costuras Zero Atrito",
            desc: "Costuras planas seladas para eliminar qualquer risco de assadura.",
            icon: <Activity className="w-10 h-10" />
        },
        {
            id: 4,
            title: "Proteção UV50+",
            desc: "Bloqueio de 98% dos raios solares para corridas de longa duração.",
            icon: <Sun className="w-10 h-10" />
        }
    ];

    return (
        <section className="py-24 bg-neutral-900" id="technology">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Superioridade Técnica</span>
                        <h2 className="text-4xl font-black text-white mt-4 mb-6">PROJETADO PARA O EXTREMO</h2>
                        <p className="text-gray-400">
                            Cada detalhe foi matematicamente calculado para reduzir o arrasto e maximizar o seu desempenho.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specs.map((spec, index) => (
                        <RevealOnScroll key={spec.id} delay={index * 100}>
                            <div className="group p-8 bg-black border border-white/5 hover:border-accent transition-all duration-300 rounded-xl relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                                    {spec.icon}
                                </div>

                                <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                                    {spec.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                    {spec.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {spec.desc}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecsGrid;
