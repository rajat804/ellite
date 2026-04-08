// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { FaPaw, FaPlay, FaChevronRight, FaHeart, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa';
import { MdPets, MdHealthAndSafety } from 'react-icons/md';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const words = ['Loving', 'Safe', 'Happy', 'Cage-Free'];
  
  // Typing animation effect
  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + words[wordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex]);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600',
      title: 'Your Pet\'s',
      highlight: 'Second Home',
      badge: '🐾 Premium Cat & Dog Boarding',
      desc: 'Loving, cage-free environment with professional care. Your furry family member deserves the best while you\'re away.',
      features: ['24/7 Veterinary Support', 'Daily Photo Updates', 'Cage-Free Environment']
    },
    {
      bg: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600',
      title: 'Expert Vet Care',
      highlight: 'At Your Doorstep',
      badge: '🏥 Professional Home Vet Services',
      desc: 'No travel. No waiting. Licensed veterinarians bring professional medical care to your home.',
      features: ['Same-Day Visits', 'Emergency Care', 'Affordable Consultation']
    },
    {
      bg: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1600',
      title: 'Happy Pettings',
      highlight: 'Trusted Since 2008',
      badge: '🏆 India\'s Most Trusted Pet Care',
      desc: 'Join 17,000+ happy families who trust us with their beloved pets. Experience the best care in Delhi NCR.',
      features: ['15+ Years Experience', '10,000+ Boarding Stays', '4.9 Rating']
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-4xl">
            {/* Animated Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#007B7F]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#007B7F]/30">
                <div className="w-2 h-2 bg-[#007B7F] rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">
                  {slides[currentSlide].badge}
                </span>
              </div>
            </div>

            {/* Main Heading with Typing Effect */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up animation-delay-200">
              {slides[currentSlide].title}{' '}
              <span className="text-[#FFD1B3] relative inline-block">
                {slides[currentSlide].highlight}
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2 L200 2" stroke="#FFD1B3" strokeWidth="3" strokeDasharray="4 4" className="animate-dash"/>
                </svg>
              </span>
            </h1>

            {/* Typing Animation Subtitle */}
            <div className="mb-6 animate-fade-in-up animation-delay-400">
              <p className="text-xl md:text-2xl text-white/90">
                Making your pet feel 
                <span className="text-[#FFD1B3] font-semibold ml-2 relative">
                  {typedText}
                  <span className="absolute -right-2 top-0 w-0.5 h-7 bg-[#FFD1B3] animate-blink"></span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl animate-fade-in-up animation-delay-600">
              {slides[currentSlide].desc}
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up animation-delay-800">
              {slides[currentSlide].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <FaCheckCircle className="text-[#FFD1B3] text-xs" />
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-1000">
              <button className="group bg-[#007B7F] hover:bg-[#007B7F]/80 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#007B7F]/30">
                Book a Stay <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2">
                <FaPlay className="group-hover:scale-110 transition-transform" />
                Watch Video
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20 animate-fade-in-up animation-delay-1200">
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">17k+</div>
                <div className="text-sm text-gray-300">Happy Families</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-300">Emergency Support</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-300 flex items-center justify-center md:justify-start gap-1">
                  <FaStar className="text-yellow-400 text-xs" /> Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx 
                ? 'w-10 h-2 bg-[#FFD1B3]' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll-down"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -200;
          }
        }
        
        @keyframes scroll-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }
        
        .animation-delay-1200 {
          animation-delay: 1.2s;
          opacity: 0;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-dash {
          animation: dash 10s linear infinite;
        }
        
        .animate-scroll-down {
          animation: scroll-down 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Helper component for checkmark
const FaCheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" width="12" height="12">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default HeroSection;