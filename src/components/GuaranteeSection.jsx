import React from 'react';

function GuaranteeSection() {
  return (
    <div className="text-center mt-12 animate-slide-in" style={{ animationDelay: '0.6s' }}>
      <img src="https://example.com/guarantee-badge.png" alt="100% Money Back Guarantee" className="mx-auto mb-4 w-24 h-24" />
      <h3 className="text-2xl font-bold text-navy bg-light-blue inline-block px-4 py-2 rounded-full mb-4">100% RISK FREE</h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We know you'll love our content. That's why we provide a no hassle, 30-day money back guarantee. No Questions Asked!
      </p>
    </div>
  );
}

export default GuaranteeSection;