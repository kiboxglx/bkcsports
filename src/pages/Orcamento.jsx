import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import BudgetForm from '../components/BudgetForm';
import RevealOnScroll from '../components/RevealOnScroll';
import { Clock, Award, Truck, CheckCircle } from 'lucide-react';
import { track } from '../services/tracking';

const Orcamento = () => {
    // ViewContent sinaliza intencao de conversao pro algoritmo do Meta.
    // Dispara apenas quando a pagina monta.
    useEffect(() => {
        track('ViewContent', {
            custom_data: {
                content_name: 'Orcamento - Landing Page',
                content_category: 'lead_generation',
            },
        });
    }, []);

    const trustSignals = [
        {
            icon: <Clock className="w-6 h-6 md:w-7 md:h-7" />,
            title: 'Resposta em 24h úteis',
            desc: 'Equipe comercial B2B retorna seu orçamento no mesmo dia útil.',
        },
        {
            icon: <Award className="w-6 h-6 md:w-7 md:h-7" />,
            title: '+50.000 atletas vestidos',
            desc: 'Camisetas em maratonas, eventos corporativos e assessorias Brasil afora.',
        },
        {
            icon: <Truck className="w-6 h-6 md:w-7 md:h-7" />,
            title: 'Entrega programada',
            desc: 'Lote produzido e entregue no cronograma do seu evento.',
        },
    ];

    const features = [
        'Tabela de atacado com preço por faixa de quantidade',
        'Mockup do design com seu logo + patrocinadores incluído',
        'Cronograma de produção alinhado ao seu evento',
        'Poliamida full print — secagem rápida, dry fit, anti-odor',
        'Entrega monitorada pra qualquer cidade do Brasil',
        'Equipe comercial dedicada — sem rodeios, direto ao ponto',
    ];

    return (
        <>
            <SEO
                title="Solicite Orçamento — Camiseta de Poliamida no Atacado | BKC Sports"
                description="Receba orçamento em 24h úteis para camisetas de poliamida personalizadas no atacado. Para assessorias esportivas, organizadores de eventos e revenda. Sublimação full print, entrega Brasil todo."
                keywords="orcamento camiseta poliamida, atacado camiseta corrida, fornecedor camiseta atacado, cotacao camiseta evento, kit corrida sob medida"
                canonical="/orcamento"
                schemaType="product"
            />

            {/* Compact Hero — direto ao ponto */}
            <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/bkc_camisa_1_lifestyle_action.png')] bg-cover bg-center mix-blend-luminosity"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <span className="inline-block bg-accent/10 border border-accent/30 text-accent font-bold tracking-widest uppercase text-xs px-4 py-2 rounded-full mb-6">
                        Atacado B2B · Resposta em 24h úteis
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                        SUA CAMISETA DE <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">POLIAMIDA</span>
                        <br />
                        <span className="text-2xl sm:text-4xl md:text-5xl text-white/80">com preço de fábrica</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                        Para assessorias esportivas, organizadores de eventos e revenda. Sublimação full print, pedido mínimo por lote, entrega Brasil todo.
                    </p>
                </div>
            </section>

            {/* Trust signals — strip antes do form */}
            <section className="bg-black border-y border-white/10 py-6">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {trustSignals.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className="text-accent shrink-0 mt-1">{item.icon}</div>
                                <div>
                                    <h3 className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                                    <p className="text-gray-400 text-xs md:text-sm leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulario — objetivo unico da pagina */}
            <BudgetForm />

            {/* Reforco pos-form */}
            <section className="py-16 bg-neutral-900">
                <div className="container mx-auto px-6 max-w-5xl">
                    <RevealOnScroll>
                        <div className="text-center mb-10">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">O que você recebe</span>
                            <h2 className="text-2xl md:text-4xl font-black text-white mt-3">DA COTAÇÃO À ENTREGA</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {features.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 bg-black/50 p-4 rounded-lg border border-white/5 hover:border-accent/30 transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-gray-300 text-sm md:text-base">{feat}</span>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    );
};

export default Orcamento;
