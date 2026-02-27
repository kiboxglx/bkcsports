import React from 'react';
import { Users, Calendar, Award, TrendingUp } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Assessments = () => {
    const benefits = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "Volume Personalizado",
            desc: "Pedidos sob demanda para equipes de qualquer tamanho, com grade flexível."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Design Exclusivo",
            desc: "Personalização completa com a identidade visual da sua assessoria."
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Entrega Programada",
            desc: "Cronograma ajustado ao calendário de provas da sua equipe."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Preços de Atacado",
            desc: "Tabela progressiva com descontos reais para grandes volumes."
        }
    ];

    return (
        <section className="py-12 md:py-24 bg-neutral-900 relative" id="time">
            <div className="absolute inset-0 bg-[url('/images/bkc_camisa_1_lifestyle_action.png')] bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                        <div className="w-full lg:w-1/2">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">Parceiros B2B</span>
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-4 md:mb-6 leading-tight">
                                POTENCIALIZE <br /> SUA ASSESSORIA
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                                A BKC oferece infraestrutura completa para vestir seus atletas com a mesma tecnologia dos campeões.
                                Elimine a dor de cabeça com fornecedores e foque nos treinos.
                            </p>
                            <a href="#budget" className="inline-block border-b-2 border-accent text-white font-bold pb-1 hover:text-accent transition-colors">
                                Solicitar contato comercial &rarr;
                            </a>
                        </div>

                        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-6">
                            {benefits.map((item, idx) => (
                                <div key={idx} className="bg-black/50 backdrop-blur-sm p-4 lg:p-6 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300">
                                    <div className="text-accent mb-2 lg:mb-4">
                                        {React.cloneElement(item.icon, { className: 'w-6 h-6 lg:w-8 lg:h-8' })}
                                    </div>
                                    <h3 className="text-white font-bold text-sm lg:text-lg mb-1 lg:mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-xs lg:text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Assessments;
