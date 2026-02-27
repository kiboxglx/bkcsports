import React from 'react';
import SEO from '../components/SEO';
import BudgetForm from '../components/BudgetForm';
import RevealOnScroll from '../components/RevealOnScroll';
import { CheckCircle, Zap, Droplets, Wind } from 'lucide-react';

const CamisetaPoliamida = () => {
    const benefits = [
        { icon: <Zap className="w-6 h-6" />, title: 'Secagem Ultra-Rápida', desc: 'A poliamida seca em até 3 minutos, mantendo o atleta seco e confortável durante toda a prova.' },
        { icon: <Droplets className="w-6 h-6" />, title: 'Gestão de Umidade', desc: 'O tecido afasta o suor da pele para a superfície externa, evaporando rapidamente.' },
        { icon: <Wind className="w-6 h-6" />, title: 'Ultra Leveza', desc: 'Gramatura otimizada garante que a camiseta praticamente não seja sentida pelo atleta.' },
        { icon: <CheckCircle className="w-6 h-6" />, title: 'Durabilidade Premium', desc: 'Resistente a inúmeras lavagens sem perder a forma, a cor ou a qualidade do tecido.' },
    ];

    return (
        <>
            <SEO
                title="Camiseta de Poliamida Personalizada para Corrida | BKC Sports"
                description="Camisetas de poliamida personalizadas para corridas de rua, maratonas e eventos esportivos. Produção em lote para organizadores. Solicite orçamento B2B."
                keywords="camiseta de poliamida, camiseta de corrida personalizada, kit corrida, uniforme esportivo personalizado, camiseta para corrida de rua, uniforme para maratona, camiseta sublimação poliamida"
            />

            {/* Hero */}
            <section className="pt-32 pb-16 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/bkc_camisa_1_lifestyle_action.png')] bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm">Fabricante B2B</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
                        CAMISETA DE <span className="text-accent">POLIAMIDA</span> PARA CORRIDA
                    </h1>
                    <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
                        Produção em lote para organizadores de corrida, assessorias esportivas e eventos. Design exclusivo com patrocinadores incluído.
                    </p>
                    <a href="#budget" className="inline-block bg-accent text-black font-black uppercase px-10 py-4 text-lg hover:bg-white transition-colors duration-300">
                        Solicitar Orçamento
                    </a>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-neutral-900">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-white">POR QUE ESCOLHER A <span className="text-accent">POLIAMIDA?</span></h2>
                            <p className="text-gray-400 mt-4 max-w-xl mx-auto">O tecido técnico preferido em corridas de alto rendimento no Brasil e no mundo.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((b, i) => (
                                <div key={i} className="bg-black p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all">
                                    <div className="text-accent mb-4">{b.icon}</div>
                                    <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Products Preview */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-full md:w-1/2">
                                <img src="/images/image_4.png" alt="Atleta correndo com camiseta de poliamida BKC" className="rounded-xl w-full object-cover max-h-[500px]" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="text-accent font-bold tracking-widest uppercase text-sm">Produção B2B</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">CAMISETAS PRONTAS PARA O DIA DA PROVA</h2>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        'Seu logo + patrocinadores no design sem custo extra',
                                        'Pedido mínimo por lote com preço de atacado',
                                        'Entrega programada para o dia da corrida',
                                        'Sublimação premium — cores não desbotam nem com muitas lavagens',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#budget" className="inline-block border-2 border-white text-white font-bold uppercase px-8 py-3 hover:bg-accent hover:border-accent hover:text-black transition-all duration-300">
                                    Solicitar Tabela de Atacado →
                                </a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Form */}
            <BudgetForm />
        </>
    );
};

export default CamisetaPoliamida;
