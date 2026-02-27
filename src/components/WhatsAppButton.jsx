import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '553897379401';
    const message = encodeURIComponent('Olá! Vim pelo site da BKC Sports e gostaria de solicitar um orçamento.');
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-float"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
            aria-label="Fale conosco no WhatsApp"
        >
            {/* Tooltip */}
            <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-lg border border-white/10">
                Fale conosco
            </span>

            {/* Button */}
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] shadow-xl hover:scale-110 transition-transform duration-300">
                {/* Pulse animation ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
                {/* WhatsApp SVG icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-8 h-8 fill-white relative z-10"
                >
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.418-2.205A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.773-1.847l-.486-.29-5.003 1.312 1.336-4.868-.317-.5A13.248 13.248 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.29-9.895c-.399-.2-2.362-1.166-2.727-1.298-.366-.133-.632-.2-.899.2-.266.399-1.032 1.298-1.266 1.564-.233.267-.465.3-.864.1-.399-.2-1.685-.621-3.21-1.98-1.186-1.057-1.988-2.363-2.22-2.762-.233-.399-.025-.615.175-.814.18-.178.399-.465.598-.698.2-.233.267-.399.399-.665.133-.267.067-.499-.033-.698-.1-.2-.899-2.166-1.232-2.963-.324-.779-.654-.673-.899-.686l-.765-.013c-.266 0-.698.1-1.064.499-.366.399-1.398 1.365-1.398 3.33 0 1.964 1.431 3.863 1.631 4.13.199.265 2.816 4.301 6.822 6.03.954.412 1.698.658 2.279.842.957.305 1.829.262 2.517.159.768-.114 2.362-.966 2.695-1.898.333-.933.333-1.733.233-1.898-.099-.167-.365-.267-.765-.466z" />
                </svg>
            </div>
        </a>
    );
};

export default WhatsAppButton;
