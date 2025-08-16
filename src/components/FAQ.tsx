import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does the free trial work?',
    answer: 'You get full access to all Professional features for 14 days, no credit card required. You can upgrade, downgrade, or cancel anytime during or after the trial.'
  },
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges accordingly.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use bank-level encryption, SOC 2 compliance, and follow industry best practices to ensure your data is always safe and secure.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with ProductPro, we\'ll refund your payment in full.'
  },
  {
    question: 'How does team collaboration work?',
    answer: 'Teams can share projects, assign tasks, track progress in real-time, and communicate through integrated chat and comments. Everyone stays synchronized automatically.'
  },
  {
    question: 'Can I integrate with other tools?',
    answer: 'Yes! We offer integrations with 50+ popular tools including Slack, Google Workspace, Microsoft Teams, Jira, and many more.'
  }
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ProductPro
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;