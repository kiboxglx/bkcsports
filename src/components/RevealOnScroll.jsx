import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const RevealOnScroll = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useScrollReveal();

    // Calculate transition delay style if needed, or use Tailwind classes
    const style = delay ? { transitionDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default RevealOnScroll;
