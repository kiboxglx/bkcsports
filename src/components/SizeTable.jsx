import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { Ruler } from 'lucide-react';

const SizeTable = () => {
    const [activeTab, setActiveTab] = useState('masculina');

    const tables = {
        feminina: [
            { tamanho: 'P', largura: '42', altura: '62', manga: '16' },
            { tamanho: 'M', largura: '45', altura: '64,5', manga: '17' },
            { tamanho: 'G', largura: '47', altura: '67,5', manga: '18' },
            { tamanho: 'GG', largura: '50', altura: '72,5', manga: '19' },
            { tamanho: 'XG', largura: '52', altura: '73,5', manga: '19' },
        ],
        masculina: [
            { tamanho: 'PP', largura: '49', altura: '71', manga: '20' },
            { tamanho: 'P', largura: '52', altura: '75,5', manga: '22' },
            { tamanho: 'M', largura: '55', altura: '77,5', manga: '23' },
            { tamanho: 'G', largura: '58', altura: '80,5', manga: '24' },
            { tamanho: 'GG', largura: '61', altura: '81,5', manga: '26' },
            { tamanho: 'EXG', largura: '63,5', altura: '84', manga: '26' },
        ]
    };

    return (
        <section id="tabela-medidas" className="py-10 lg:py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <RevealOnScroll>
                    <div className="text-center mb-8 lg:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/5 border border-white/10 text-accent text-xs lg:text-sm font-medium mb-3">
                            <Ruler size={14} />
                            <span>Guia de Tamanhos</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-3 tracking-tight uppercase">
                            Tabela de <span className="text-accent underline decoration-accent/30 underline-offset-8">Medidas</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto text-sm lg:text-lg">
                            Medidas em centímetros para garantir o ajuste perfeito da sua camiseta BKC Sports.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="flex justify-center mb-6 lg:mb-12">
                        <div className="flex p-1 lg:p-1.5 bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10 shadow-inner">
                            <button
                                onClick={() => setActiveTab('masculina')}
                                className={`px-5 py-2.5 lg:px-10 lg:py-3.5 rounded-lg lg:rounded-xl text-sm lg:text-base font-bold transition-all duration-500 relative z-10 ${activeTab === 'masculina'
                                    ? 'bg-accent text-black shadow-[0_4px_20px_rgba(204,255,0,0.4)] scale-105'
                                    : 'text-white hover:text-accent'
                                    }`}
                            >
                                MASCULINA
                            </button>
                            <button
                                onClick={() => setActiveTab('feminina')}
                                className={`px-5 py-2.5 lg:px-10 lg:py-3.5 rounded-lg lg:rounded-xl text-sm lg:text-base font-bold transition-all duration-500 relative z-10 ${activeTab === 'feminina'
                                    ? 'bg-accent text-black shadow-[0_4px_20px_rgba(204,255,0,0.4)] scale-105'
                                    : 'text-white hover:text-accent'
                                    }`}
                            >
                                FEMININA
                            </button>
                        </div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={400}>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl lg:rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative overflow-hidden bg-zinc-900/80 backdrop-blur-2xl rounded-2xl lg:rounded-[2rem] border border-white/10 shadow-2xl">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 bg-white/[0.03]">
                                            <th className="py-3 px-4 lg:py-7 lg:px-10 text-accent font-black uppercase tracking-widest text-xs lg:text-sm">Tamanho</th>
                                            <th className="py-3 px-4 lg:py-7 lg:px-10 text-accent font-black uppercase tracking-widest text-xs lg:text-sm text-center">Largura</th>
                                            <th className="py-3 px-4 lg:py-7 lg:px-10 text-accent font-black uppercase tracking-widest text-xs lg:text-sm text-center">Altura</th>
                                            <th className="py-3 px-4 lg:py-7 lg:px-10 text-accent font-black uppercase tracking-widest text-xs lg:text-sm text-center">Manga</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {tables[activeTab].map((row, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-accent/5 transition-colors group/row"
                                            >
                                                <td className="py-3 px-4 lg:py-6 lg:px-10 font-black text-white text-base lg:text-xl tracking-tighter group-hover/row:text-accent transition-colors">
                                                    {row.tamanho}
                                                </td>
                                                <td className="py-3 px-4 lg:py-6 lg:px-10 text-zinc-300 text-center text-base lg:text-xl font-medium">
                                                    {row.largura}<span className="text-zinc-600 text-xs lg:text-sm ml-1 font-normal">cm</span>
                                                </td>
                                                <td className="py-3 px-4 lg:py-6 lg:px-10 text-zinc-300 text-center text-base lg:text-xl font-medium">
                                                    {row.altura}<span className="text-zinc-600 text-xs lg:text-sm ml-1 font-normal">cm</span>
                                                </td>
                                                <td className="py-3 px-4 lg:py-6 lg:px-10 text-zinc-300 text-center text-base lg:text-xl font-medium">
                                                    {row.manga}<span className="text-zinc-600 text-xs lg:text-sm ml-1 font-normal">cm</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={600}>
                    <div className="mt-6 lg:mt-12 flex flex-col sm:flex-row items-center justify-between p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-white/[0.03] border border-white/5 gap-3">
                        <div className="flex items-center gap-3 text-zinc-400">
                            <div className="w-2 h-2 rounded-full bg-accent shrink-0"></div>
                            <p className="text-xs lg:text-sm font-medium uppercase tracking-wider">Qualidade de Fábrica BKC Sports — Precisão em cada fibra.</p>
                        </div>
                        <a
                            href="#revendedores"
                            className="text-accent hover:underline font-bold text-xs lg:text-sm tracking-widest uppercase whitespace-nowrap"
                        >
                            Fale com um especialista
                        </a>
                    </div>
                </RevealOnScroll>
            </div>

            <div className="absolute top-1/4 -left-20 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none opacity-40"></div>
            <div className="absolute bottom-1/4 -right-20 w-[250px] lg:w-[500px] h-[250px] lg:h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none opacity-30"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
        </section>
    );
};

export default SizeTable;
