import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import SpecsGrid from '../components/SpecsGrid';
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
                title="Fornecedor Premium de Camisetas para Corrida"
                description="Garanta a qualidade do kit do seu evento. Camisetas de poliamida com tecnologia anti-odor e proteção UV50+ direto da fábrica para organizadores de corrida."
            />
            <Hero />
            <SocialProof />
            <SpecsGrid />
            <Lookbook />
            <SizeTable />
            <ImageGallery />
            <Assessments />
            <BudgetForm />
        </>
    );
};

export default Home;
