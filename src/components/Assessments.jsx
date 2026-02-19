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
        <section className="py-24 bg-neutral-900 relative" id="assessments">
            <div className="absolute inset-0 bg-[url('/images/image_5.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        <div className="w-full md:w-1/2">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">Parceiros B2B</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
                                POTENCIALIZE <br /> SUA ASSESSORIA
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                A BKC oferece infraestrutura completa para vestir seus atletas com a mesma tecnologia dos campeões.
                                Elimine a dor de cabeça com fornecedores e foque nos treinos.
                            </p>
                            <a href="#budget" className="inline-block border-b-2 border-accent text-white font-bold pb-1 hover:text-accent transition-colors">
                                Solicitar contato comercial &rarr;
                            </a>
                        </div>

                        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((item, idx) => (
                                <div key={idx} className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-accent/50 transition-all duration-300">
                                    <div className="text-accent mb-4">{item.icon}</div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
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
