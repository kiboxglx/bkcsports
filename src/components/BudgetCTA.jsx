import React from 'react';
import { useNavigate } from 'react-router-dom';

// Reusable CTA that always lands the user on the budget form.
// Behaviour:
// 1. If <section id="orcamento"> exists on the current page -> smooth scroll locally.
// 2. Otherwise -> navigate to "/#orcamento" so ScrollToTop in App.jsx scrolls
//    after Home renders.

const BudgetCTA = ({ children, className = '', onClick, ...rest }) => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        if (onClick) onClick(e);

        const el = document.getElementById('orcamento');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Atualiza hash sem disparar nova navegacao
            if (window.history.replaceState) {
                window.history.replaceState(null, '', '#orcamento');
            }
            return;
        }

        navigate('/#orcamento');
    };

    return (
        <a
            href="/#orcamento"
            onClick={handleClick}
            className={className}
            {...rest}
        >
            {children}
        </a>
    );
};

export default BudgetCTA;
