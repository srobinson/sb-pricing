import React from 'react';
import PricingCard from './components/PricingCard';
import GuaranteeSection from './components/GuaranteeSection';

function App() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-center text-navy mb-8">Invest in Your New You!</h1>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6">
        <PricingCard
          title="LIFETIME"
          price="799"
          period="Paid Once"
          feature="Endless Evolution: Transform and Excel Lifelong!"
          buttonText="Start Now"
          delay={0}
        />
        <PricingCard
          title="ANNUAL"
          price="23"
          period="Per Month"
          feature="You Want a New Version of You by Next Year!"
          buttonText="START NOW"
          popular={true}
          annualPrice="276 Paid Annually"
          delay={0.2}
        />
        <PricingCard
          title="MONTHLY"
          price="39"
          period="Per Month"
          feature="Begin Your Transformation! New Skills This Month!"
          buttonText="Start Now"
          delay={0.4}
        />
      </div>
      <GuaranteeSection />
    </div>
  );
}

export default App;