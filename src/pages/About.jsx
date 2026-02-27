import React from 'react';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';

const About = () => {
    return (
        <div className="pt-32 pb-24 bg-black min-h-screen">
            <SEO
                title="A Fábrica por Trás dos Grandes Eventos"
                description="Conheça a infraestrutura da BKC Sports. Especialistas na produção em larga escala de camisetas esportivas premium para maratonas e assessorias em todo o Brasil."
            />
            <div className="container mx-auto px-6 max-w-4xl">
                <RevealOnScroll>
                    <h1 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
                        Nossa <span className="text-accent">Essência</span>
                    </h1>

                    <div className="space-y-8 text-gray-300 text-xl leading-relaxed">
                        <p>
                            Nascida da necessidade de performance real, a <span className="text-white font-bold">BKC Sports</span> não é apenas uma marca de roupas. Somos uma fábrica de tecnologia têxtil focada em um único objetivo: vestir o atleta para a vitória.
                        </p>

                        <div className="bg-zinc-900/50 p-8 border-l-4 border-accent rounded-r-2xl">
                            <h3 className="text-white font-black uppercase mb-4 tracking-wider">Por que existimos?</h3>
                            <p>
                                Percebemos que o mercado estava saturado de promessas e pouco resultado técnico. Decidimos então verticalizar nossa produção: controlamos desde a escolha do fio de poliamida biodegradável até o último ponto da costura zero-atrito.
                            </p>
                        </div>

                        <p>
                            Hoje, somos a escolha número 1 de assessorias esportivas que buscam uniformes que não pesam, não retêm cheiro e duram temporadas inteiras de treino intenso.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                            <div className="border border-white/10 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                                <h4 className="text-accent font-bold uppercase mb-2">Fábrica Própria</h4>
                                <p className="text-sm text-gray-400">Zero erro, zero atraso. Controle total da qualidade em cada peça produzida.</p>
                            </div>
                            <div className="border border-white/10 p-8 rounded-2xl hover:border-accent/30 transition-colors">
                                <h4 className="text-accent font-bold uppercase mb-2">DNA Esportivo</h4>
                                <p className="text-sm text-gray-400">Testado por atletas de elite em condições extremas de calor e umidade.</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default About;
