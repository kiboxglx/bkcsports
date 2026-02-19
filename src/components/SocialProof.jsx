import React from 'react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const SocialProof = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 blur-3xl rounded-full translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row items-center gap-12">

                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img
                                    src="/images/podium_moment.jpg"
                                    alt="Podium Moment"
                                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <div className="bg-black/80 backdrop-blur-md px-6 py-3 border-l-4 border-accent">
                                        <p className="text-white font-bold text-lg">Confiado por Atletas de Elite</p>
                                        <p className="text-gray-400 text-sm">Validado em maratonas internacionais</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="flex items-center gap-4 text-accent mb-2">
                                <Trophy className="w-8 h-8" />
                                <span className="text-sm font-bold tracking-widest uppercase">Performance Comprovada</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                O PADRÃO <br />
                                <span className="text-gray-500">PARA CAMPEÕES</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Mais do que apenas roupas esportivas, a BKC é um triunfo da engenharia.
                                Projetada para eliminar distrações, para que você possa focar inteiramente na linha de chegada.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="w-6 h-6 text-gray-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-xl">50+ Equipes</h4>
                                        <p className="text-gray-500 text-sm">Equipadas globalmente</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Star className="w-6 h-6 text-gray-400 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-xl">4.9/5</h4>
                                        <p className="text-gray-500 text-sm">Avaliação média dos atletas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default SocialProof;
