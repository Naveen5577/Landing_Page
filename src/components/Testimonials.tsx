import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'ProductPro transformed our team\'s productivity. We\'ve seen a 300% increase in task completion rates and our team morale has never been higher.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Michael Chen',
    role: 'Project Manager, DesignCorp',
    content: 'The analytics features are incredible. We can now identify bottlenecks before they become problems and optimize our workflow in real-time.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Director, GrowthLab',
    content: 'Implementation was seamless and the ROI was immediate. Our team collaboration has improved dramatically since switching to ProductPro.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              10,000+
            </span>{' '}
            Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600">
            See what industry leaders are saying about ProductPro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <div className="flex items-center space-x-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of satisfied customers</p>
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechStart</div>
            <div className="text-2xl font-bold text-gray-400">DesignCorp</div>
            <div className="text-2xl font-bold text-gray-400">GrowthLab</div>
            <div className="text-2xl font-bold text-gray-400">InnovateCo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;