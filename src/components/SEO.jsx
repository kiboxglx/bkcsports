import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, canonical, schemaType = 'default' }) => {
    const siteName = 'BKC Sports';
    const siteUrl = 'https://tourmaline-sprite-226664.netlify.app';
    const defaultImage = `${siteUrl}/images/bkc_camisa_1_lifestyle_action.png`;

    const fullTitle = title
        ? `${title} | Camiseta de Poliamida | BKC Sports`
        : 'BKC Sports | Camiseta de Poliamida Personalizada para Corrida no Atacado';

    const fullDesc = description ||
        'Fornecedor B2B de camisetas de poliamida personalizadas. Kits de corrida, maratonas e eventos corporativos. Pedido mínimo por lote, entrega para todo o Brasil.';

    const fullKeywords = keywords ||
        'camiseta de poliamida, camiseta poliamida atacado, camiseta corrida personalizada, kit corrida personalizado, uniforme esportivo personalizado, camiseta maratona, fornecedor camiseta esportiva, camiseta sublimação poliamida, BKC Sports';

    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    // JSON-LD Organization Schema
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BKC Sports",
        "url": siteUrl,
        "logo": `${siteUrl}/images/bkc_camisa_1_front_view.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-38-99737-9401",
            "contactType": "sales",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
        },
        "sameAs": [
            "https://instagram.com/bkcsports"
        ]
    };

    // JSON-LD Product Schema
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Camiseta de Poliamida Personalizada para Corrida",
        "brand": {
            "@type": "Brand",
            "name": "BKC Sports"
        },
        "description": "Camiseta de poliamida com sublimação full print para kits de corrida, maratonas e eventos esportivos. Secagem ultra-rápida, toque gelado, tratamento anti-odor.",
        "image": defaultImage,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "BKC Sports"
            }
        },
        "category": "Roupas Esportivas",
        "material": "Poliamida",
        "audience": {
            "@type": "Audience",
            "audienceType": "Organizadores de Corrida, Assessorias Esportivas, Empresas"
        }
    };

    const schemas = schemaType === 'product'
        ? [orgSchema, productSchema]
        : [orgSchema];

    return (
        <Helmet>
            {/* Primary Meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDesc} />
            <meta name="keywords" content={fullKeywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots / indexing */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="language" content="pt-BR" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="BKC Sports" />

            {/* OpenGraph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDesc} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:locale" content="pt_BR" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDesc} />
            <meta name="twitter:image" content={image || defaultImage} />

            {/* Structured Data JSON-LD */}
            {schemas.map((schema, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
