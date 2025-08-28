'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';

export default function PricingSection() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      id: 'basic',
      name: 'Quick Roast',
      price: 2.99,
      duration: '5 minutes',
      features: [
        'Personalized AI roasting',
        'Voice or text option',
        'Basic personality analysis',
        'Session recording'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Deep Roast',
      price: 4.99,
      duration: '10 minutes',
      features: [
        'Everything in Quick Roast',
        'Advanced personality profiling',
        'Custom roast themes',
        'Priority support',
        'Session analytics'
      ],
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Epic Roast',
      price: 9.99,
      duration: '20 minutes',
      features: [
        'Everything in Deep Roast',
        'Multiple AI personalities',
        'Group roasting sessions',
        'Premium themes',
        'Unlimited replays',
        'Exclusive content'
      ],
      popular: false
    }
  ];

  const handlePurchase = async (planId: string) => {
    if (!user) {
      alert('Please sign in to purchase a session');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          userId: user.id,
          userEmail: user.email
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(m => m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!));
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to create checkout session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Roasting Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick burns to epic roasting sessions, we have the perfect package for your comedy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100 scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${plan.price}
                </div>
                <div className="text-gray-600 mb-4">{plan.duration}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mr-3">
                      ✓
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePurchase(plan.id)}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading ? 'Processing...' : `Get ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              100% Money Back Guarantee
            </h3>
            <p className="text-gray-600">
              If you don&apos;t laugh at least once during your session, we&apos;ll give you a full refund. 
              No questions asked!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
