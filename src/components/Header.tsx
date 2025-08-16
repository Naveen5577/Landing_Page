import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ProductPro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              FAQ
            </button>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;