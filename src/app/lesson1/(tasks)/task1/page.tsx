import React from 'react';
import PricingCard from './components/PricingCard';

const PricingPage = () => {
  // Define pricing data
  const pricingPlans = [
    {
      plan: 'Standard',
      price: '$100',
      features: [
        '50,000 Requests',
        '4 contributors',
        'Up to 3 GB storage space'
      ],
      isFeatured: false
    },
    {
      plan: 'Pro',
      price: '$200',
      features: [
        '100,000 Requests',
        '7 contributors',
        'Up to 6 GB storage space'
      ],
      isFeatured: true
    },
    {
      plan: 'Expert',
      price: '$500',
      features: [
        '200,000 Requests',
        '11 contributors',
        'Up to 10 GB storage space'
      ],
      isFeatured: false
    }
  ];

  return (
    <div className=" bg-slate-900 ">
      <div className="container mx-auto py-12 px-4">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-16">Pricing</h1>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`${plan.isFeatured ? 'transform sm:-translate-y-2' : ''}`}>
              <PricingCard
                plan={plan.plan}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;