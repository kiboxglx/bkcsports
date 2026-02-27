import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Lookbook = () => {
    const models = [
        {
            id: 'tshirt-corrida',
            name: 'T-Shirt Corrida',
            category: 'Evento de Corrida',
            desc: 'A camisa perfeita para kits de corrida de rua e maratonas. Sublimação total dos dois lados, cor viva mesmo após 100 lavagens, com logomarca do evento e patrocinadores na parte de trás.',
            features: [
                'Sublimação Full Print frente e verso',
                'Secagem ultra-rápida (3min)',
                'Toque gelado e tratamento anti-odor'
            ],
            images: [
                "/images/image_2.png",
                "/images/image_4.png",
                "/images/bkc_camisa_1_front_view.png",
            ]
        },
        {
            id: 'beachtennis-kit',
            name: 'Kit Beach Sports',
            category: 'Torneios de Beach Sports',
            desc: 'Especialistas em uniformes para torneios de Beach Tennis, Vôlei e outras modalidades de praia. Tecido resistente ao sal, cloro e areia com sublimação Premium.',
            features: [
                'Tecido resistente ao ambiente de praia',
                'Sublimação Premium sem desbotamento',
                'Design personalizado por torneio'
            ],
            images: [
                "/images/image_1.png",
                "/images/bkc_camisa_1_back_view.png",
                "/images/bkc_camisa_1_lifestyle.png",
            ]
        },
        {
            id: 'copa-personalizada',
            name: 'Copa & Eventos',
            category: 'Personalização Corporativa',
            desc: 'Ideal para eventos corporativos, corridas sociais e campanhas de saúde. Entregamos o design completo com logomarcas dos patrocinadores no verso, pronto para o dia da prova.',
            features: [
                'Espaço para Patrocinadores no Dorso',
                'Montagem completa do design grátis',
                'Entrega programada via cronograma'
            ],
            images: [
                "/images/bkc_camisa_1_lifestyle_action.png",
                "/images/trust_06_track.png",
                "/images/trust_05_flatlay.png",
            ]
        }
    ];

    const [activeModel, setActiveModel] = useState(0);
    const [activeImage, setActiveImage] = useState(0);

    const current = models[activeModel];

    return (
        <section className="py-12 md:py-24 bg-black" id="produtos">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="text-center mb-16">
                        <span className="text-accent tracking-widest uppercase text-sm font-bold">Catálogo B2B</span>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mt-3 mb-8 md:mb-12">NOSSAS LINHAS DE PRODUÇÃO</h2>

                        {/* Model Selector Tabs */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {models.map((model, idx) => (
                                <button
                                    key={model.id}
                                    onClick={() => { setActiveModel(idx); setActiveImage(0); }}
                                    className={`px-6 py-3 font-bold uppercase tracking-wider text-sm border transition-all duration-300 ${activeModel === idx ? 'border-accent bg-accent text-black' : 'border-white/20 text-gray-400 hover:border-white hover:text-white'
                                        }`}
                                >
                                    {model.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center">
                        {/* Gallery Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[3/4] max-h-[420px] sm:max-h-none overflow-hidden rounded-lg bg-neutral-900 group">
                                <img
                                    src={current.images[activeImage]}
                                    alt={current.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                    {current.category}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                {current.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt={`${current.name} thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-8">
                                {current.name.split(' ')[0]} <br />
                                <span className="text-accent">{current.name.split(' ').slice(1).join(' ')}</span>
                            </h2>

                            <div className="space-y-6 text-gray-300 text-lg mb-10">
                                <p>
                                    {current.desc}
                                </p>
                                <ul className="space-y-4">
                                    {current.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-accent rounded-full shrink-0"></span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Venda Exclusiva</p>
                                    <p className="text-white text-xl font-bold">Atacado / Lote</p>
                                </div>
                                <a href="#budget" className="flex-1 text-center bg-white text-black font-bold uppercase py-4 hover:bg-accent transition-colors duration-300">
                                    Receber Tabela de Atacado
                                </a>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Lookbook;
