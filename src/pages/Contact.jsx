import React from 'react';
import SEO from '../components/SEO';
import RevealOnScroll from '../components/RevealOnScroll';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-24 bg-black min-h-screen">
            <SEO
                title="Orçamento de Camisetas Múltiplas | Kits de Corrida"
                description="Solicite um orçamento para o seu evento esportivo ou assessoria. Preços progressivos de atacado e entrega garantida para o seu kit de corrida."
                keywords="camisetas para corrida atacado, fornecedor de kit corrida, camisas de poliamida para eventos, uniformes para assessorias esportivas, camisetas para maratonas, fábrica de roupas esportivas"
            />
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/2">
                        <RevealOnScroll>
                            <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
                                Fale com a <br /><span className="text-accent underline decoration-accent/20 underline-offset-8">Fábrica</span>
                            </h1>
                            <p className="text-gray-400 text-xl mb-12">
                                Estamos prontos para atender sua assessoria ou evento com a agilidade que você precisa.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <a href="mailto:contato@bkcsports.com.br" className="group flex flex-col p-8 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-accent/40 transition-all">
                                    <Mail className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                                    <span className="text-white font-bold text-lg">E-mail</span>
                                    <span className="text-gray-500 text-sm">contato@bkcsports.com.br</span>
                                </a>
                                <a href="https://instagram.com/bkcsports" target="_blank" className="group flex flex-col p-8 bg-zinc-900/40 rounded-3xl border border-white/5 hover:border-accent/40 transition-all">
                                    <Instagram className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                                    <span className="text-white font-bold text-lg">Instagram</span>
                                    <span className="text-gray-500 text-sm">@bkcsports</span>
                                </a>
                                <div className="group flex flex-col p-8 bg-zinc-900/40 rounded-3xl border border-white/5">
                                    <MapPin className="text-accent mb-4" size={32} />
                                    <span className="text-white font-bold text-lg">Logística</span>
                                    <span className="text-gray-500 text-sm">Envio para todo o Brasil.</span>
                                </div>
                                <div className="group flex flex-col p-8 bg-accent rounded-3xl border border-white/5 shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                                    <Phone className="text-black mb-4" size={32} />
                                    <span className="text-black font-bold text-lg">Suporte B2B</span>
                                    <span className="text-black/70 text-sm">Atendimento Especializado.</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    <div className="w-full lg:w-1/2 bg-zinc-900/30 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
                        <RevealOnScroll delay={200}>
                            <h3 className="text-2xl font-bold mb-8">Envie uma mensagem direta</h3>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Assunto</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Ex: Orçamento Atacado" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Seu Nome</label>
                                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Nome completo" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Sua Mensagem</label>
                                    <textarea className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors h-40 resize-none" placeholder="Como podemos te ajudar?"></textarea>
                                </div>
                                <button className="w-full bg-white text-black font-black uppercase py-5 rounded-2xl hover:bg-accent transition-all duration-300 tracking-widest">
                                    Enviar Agora
                                </button>
                            </form>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
