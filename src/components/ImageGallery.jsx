import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const ImageGallery = () => {
    const images = [
        {
            src: '/images/image_4.png',
            alt: 'Atleta Feminina em Maratona com Camiseta BKC',
            span: 'col-span-1 md:col-span-2 row-span-2',
            tag: 'Evento Real BKC'
        },
        {
            src: '/images/bkc_runner_city.png',
            alt: 'Corredor Urbano de Alta Performance',
            span: 'col-span-1',
            tag: 'Corrida Urbana'
        },
        {
            src: '/images/bkc_gym_training.png',
            alt: 'Atleta em Treino de Alta Intensidade',
            span: 'col-span-1',
            tag: 'Treino Intenso'
        },
        {
            src: '/images/bkc_lifestyle_sport.png',
            alt: 'Casal Atleta no Lifestyle Esportivo',
            span: 'col-span-1 md:col-span-2',
            tag: 'Lifestyle Esportivo'
        },
    ];

    return (
        <section className="py-12 md:py-24 bg-neutral-900" id="galeria">
            <div className="container mx-auto px-6">
                <RevealOnScroll>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Visual</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-6 uppercase tracking-tight">
                            A Nova <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Coleção</span>
                        </h2>
                        <p className="text-gray-400">
                            Imagens exclusivas destacando a verdadeira essência da BKC Sports: design premium aliado à tecnologia de ponta.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                    {images.map((img, index) => (
                        <RevealOnScroll key={index} delay={index * 100} className={img.span}>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden group border border-white/5 shadow-2xl">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {img.tag}
                                    </span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
