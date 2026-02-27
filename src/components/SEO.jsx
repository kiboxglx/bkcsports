import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | BKC Sports` : 'BKC Sports | Camisetas de Poliamida para Eventos de Corrida e Assessorias'}</title>
            <meta name="description" content={description || "A fábrica parceira dos maiores organizadores de corrida. Fornecemos camisetas de poliamida de alta performance no atacado para kits de maratonas e provas."} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* OpenGraph */}
            <meta property="og:title" content={title || "BKC Sports"} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:type" content="website" />

            {/* Standard Portuguese SEO Meta */}
            <meta name="language" content="Portuguese" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="BKC Sports" />
        </Helmet>
    );
};

export default SEO;
