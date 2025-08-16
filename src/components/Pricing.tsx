import React from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 'Free',
    period: 'forever',
    description: 'Perfect for individuals and small teams getting started',
    features: [
      'Up to 3 team members',
      '5 projects',
      'Basic task management',
      'Email support',
      'Mobile app access'
    ],
    buttonText: 'Get Started Free',
    buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    popular: false
  },
  {
    name: 'Professional',
    icon: Crown,
    price: '$19',
    period: 'per user/month',
    description: 'Ideal for growing teams that need advanced features',
    features: [
      'Up to 25 team members',
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Advanced reporting',
      'Time tracking'
    ],
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 'Custom',
    period: 'pricing',
    description: 'Built for large organizations with specific needs',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Advanced security features',
      'Dedicated success manager',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment'
    ],
    buttonText: 'Contact Sales',
    buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent
            </span>{' '}
            Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team's needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-105 border ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl' 
                  : 'border-gray-200 hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4">
                  <plan.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>

                <button className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial</p>
          <p className="text-sm text-gray-500">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;