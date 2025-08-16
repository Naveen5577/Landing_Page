import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-600 ml-2">Trusted by 10,000+ teams</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Boost Your Team's{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Productivity
              </span>{' '}
              by 300%
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your workflow with our AI-powered productivity platform. 
              Streamline tasks, collaborate seamlessly, and achieve more in less time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Productivity Dashboard"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                #1 Productivity Tool
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Tasks Completed</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">1,247</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float-delayed">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Time Saved</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">32 hrs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;