import React from 'react';

function PricingCard({ title, price, period, feature, buttonText, popular, annualPrice, delay }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 flex flex-col ${
        popular ? 'border-4 border-coral' : ''
      } animate-slide-in hover:shadow-xl transition-all duration-300 ease-in-out`}
      style={{ animationDelay: `${delay}s` }}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-coral text-white px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <h2 className="text-2xl font-bold text-navy mb-4">{title}</h2>
      <div className="text-5xl font-bold text-gray-600 mb-2">
        <span className="text-3xl">$</span>{price}
      </div>
      <p className="text-gray-500 mb-6">{period}</p>
      <p className="flex-grow text-gray-700 mb-6">
        <span className="mr-2">{title === 'LIFETIME' ? '∞' : (title === 'ANNUAL' ? '📈' : '🎁')}</span>
        {feature}
      </p>
      <button className={`py-2 px-4 rounded-full font-bold transition-all duration-300 ease-in-out ${
        popular 
          ? 'bg-coral text-white hover:bg-opacity-90' 
          : 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white'
      }`}>
        {buttonText}
      </button>
      {annualPrice && <p className="text-sm text-gray-500 mt-2">{annualPrice}</p>}
    </div>
  );
}

export default PricingCard;