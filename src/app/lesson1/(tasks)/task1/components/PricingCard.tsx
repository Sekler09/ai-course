import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  features,
  isFeatured = false 
}) => {
  return (
    <button 
      className={`flex flex-col h-full rounded-lg overflow-hidden text-left
        transition-all duration-200 w-full cursor-pointer
        hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isFeatured 
          ? 'bg-slate-700 text-white hover:shadow-slate-500/30 focus:ring-slate-400' 
          : 'bg-white text-slate-800 hover:shadow-slate-300/50 focus:ring-slate-700'
        }
        sm:hover:-translate-y-1
      `}
    >
      {/* Header section with plan name and price */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-medium mb-2">{plan}</h3>
        <div className="text-5xl font-bold mb-4">{price}</div>
      </div>

      {/* Features list */}
      <div className="flex-grow flex flex-col">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`py-4 px-6 text-center border-t ${
              isFeatured 
                ? 'border-slate-600' 
                : 'border-gray-200'
            }`}
          >
            {feature}
          </div>
        ))}
      </div>

      {/* Subscription status indicator */}
      <div 
        className={`p-6 text-center ${
          isFeatured 
            ? 'bg-slate-700' 
            : 'bg-white'
        }`}
      >
        <div
          className={`w-full py-2 px-4 rounded uppercase font-medium tracking-wide
            ${isFeatured 
              ? 'bg-white text-slate-700' 
              : 'bg-slate-700 text-white'
            }`}
        >
          {isFeatured ? 'Current Plan' : 'Subscribe'}
        </div>
      </div>
    </button>
  );
};

export default PricingCard;
