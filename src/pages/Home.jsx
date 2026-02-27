import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import PoliamidaTech from '../components/PoliamidaTech';
import Lookbook from '../components/Lookbook';
import SizeTable from '../components/SizeTable';
import ImageGallery from '../components/ImageGallery';
import Assessments from '../components/Assessments';
import BudgetForm from '../components/BudgetForm';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Fornecedor de Camiseta de Poliamida para Corrida no Atacado"
                description="Fabricante B2B de camisetas de poliamida personalizadas para kits de corrida, maratonas e eventos esportivos. Sublimação full print, pedido mínimo por lote, entrega para todo o Brasil."
                keywords="camiseta de poliamida, camiseta poliamida atacado, kit corrida personalizado, camiseta corrida personalizada, uniforme esportivo atacado, fornecedor camiseta maratona"
                canonical="/"
                schemaType="product"
            />
            <Hero />
            <SocialProof />
            <PoliamidaTech />
            <Lookbook />
            <SizeTable />
            <ImageGallery />
            <Assessments />
            <BudgetForm />
        </>
    );
};

export default Home;
