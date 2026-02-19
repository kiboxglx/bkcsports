import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import SpecsGrid from './components/SpecsGrid';
import Lookbook from './components/Lookbook';

import Assessments from './components/Assessments';
import BudgetForm from './components/BudgetForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <SpecsGrid />
      <Lookbook />
      <Assessments />
      <BudgetForm />
    </div>
  );
}

export default App;
