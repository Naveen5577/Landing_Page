import React from 'react';
import { Zap, Shield, Users, BarChart3, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing-fast performance with our optimized platform that keeps your team moving at the speed of thought.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced access controls.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools that bring your team together, no matter where they are in the world.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get deep insights into your productivity patterns with comprehensive analytics and reporting.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Automatic time tracking and smart scheduling to help you make the most of every minute.',
    image: 'https://images.pexels.com/photos/1191373/pexels-photo-1191373.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Full-featured mobile apps for iOS and Android, so you can stay productive anywhere.',
    image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools is designed to streamline your workflow 
            and boost productivity across your entire organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                
                <div className="mb-6 h-48 overflow-hidden rounded-xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-200 transform hover:scale-105 font-semibold">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;