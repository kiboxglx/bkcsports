import React, { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

const Lookbook = () => {
    const [activeImage, setActiveImage] = useState(0);

    // Placeholder images for the product lookbook
    const images = [
        "/images/image_2.png",
        "/images/image_3.png",
        "/images/image_4.png",
    ];

    return (
        <section className="py-24 bg-black" id="products">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="flex flex-col lg:flex-row gap-16 items-center">

                        {/* Gallery Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-900 group">
                                <img
                                    src={images[activeImage]}
                                    alt="BKC Lookbook"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 cursor-zoom-in"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                    Nova Coleção
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-accent opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2">
                            <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">Série Performance</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-8">
                                CAMISETA <br />
                                <span className="text-accent">POLIAMIDA TECH</span>
                            </h2>

                            <div className="space-y-6 text-gray-300 text-lg mb-10">
                                <p>
                                    Desenvolvida para máxima performance. Nossa tecnologia exclusiva em poliamida biodegradável oferece o equilíbrio perfeito entre leveza e durabilidade.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span>Tecido 100% Poliamida 6.6 Biodegradável</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span>Secagem ultra-rápida (3min)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span>Toque gelado e tratamento anti-odor</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Preço</p>
                                    <p className="text-white text-3xl font-bold">R$ 189,90</p>
                                </div>
                                <button className="flex-1 bg-white text-black font-bold uppercase py-4 hover:bg-accent transition-colors duration-300">
                                    Comprar Agora
                                </button>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Lookbook;
