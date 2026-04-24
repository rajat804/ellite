// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaPlay, 
  FaChevronRight, 
  FaHeart, 
  FaClock, 
  FaStar, 
  FaCoffee, 
  FaBone,
  FaDog,
  FaCat,
  FaArrowDown
} from 'react-icons/fa';
import { MdPets, MdLocalCafe } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600',
    'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1600',
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1600'
  ];

  const features = [
    { icon: <FaDog />, text: 'Dog Boarding', color: '#D4A054' },
    { icon: <FaCat />, text: 'Cat Boarding', color: '#D4A054' },
    { icon: <MdLocalCafe />, text: 'Pet Café', color: '#D4A054' },
    { icon: <FaHeart />, text: 'Pet Care', color: '#D4A054' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#2C1810] to-[#1A0F0A]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/95 via-[#2C1810]/80 to-[#1A0F0A]/90"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A054]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A054]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4A054]/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div>
              {/* Welcome Badge */}
              <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#D4A054]/30 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaCoffee className="text-[#D4A054] text-sm" />
                <span className="text-white text-sm">Welcome to Bruno's Family & Cafe</span>
                <FaPaw className="text-[#D4A054] text-sm" />
              </div>

              {/* Main Heading */}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Where Pets Are{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] bg-clip-text text-transparent">
                    Family
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                    <path d="M0 2 L200 2" stroke="#D4A054" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" className="animate-dash"/>
                  </svg>
                </span>
              </h1>

              <p className={`text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Experience the perfect blend of luxury pet care and cozy café vibes. 
                Your furry friend deserves the best — and we're here to give it.
              </p>

              {/* Features List */}
              <div className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4A054]/30">
                    <span className="text-[#D4A054] text-sm">{feature.icon}</span>
                    <span className="text-white text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/book-now" 
                  className="group bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  Book a Stay <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-[#D4A054] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#D4A054]/10 transition-all flex items-center gap-2"
                >
                  <FaHeart className="group-hover:scale-110 transition-transform" />
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex items-center gap-6 mt-8 pt-4 border-t border-white/20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-2">
                  <FaStar className="text-[#D4A054] text-sm" />
                  <FaStar className="text-[#D4A054] text-sm" />
                  <FaStar className="text-[#D4A054] text-sm" />
                  <FaStar className="text-[#D4A054] text-sm" />
                  <FaStar className="text-[#D4A054] text-sm" />
                  <span className="text-white/80 text-sm ml-2">4.9 Rating</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-[#D4A054]" />
                  <span className="text-white/80 text-sm">17k+ Families</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#D4A054]" />
                  <span className="text-white/80 text-sm">24/7 Care</span>
                </div>
              </div>
            </div>

            {/* Right Side - Cafe Card */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    {/* Cafe Icon */}
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <FaCoffee className="text-3xl text-[#2C1810]" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Pet-Friendly Café</h3>
                    <p className="text-white/70 mb-6">Enjoy quality time with your furry friend</p>
                    
                    {/* Cafe Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span>☕ Special Coffee</span>
                        <span className="text-[#D4A054]">₹149</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span>🍪 Dog Treats</span>
                        <span className="text-[#D4A054]">₹79</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-sm">
                        <span>🍦 Pup Cup</span>
                        <span className="text-[#D4A054]">₹49</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="/cafe" 
                      className="block w-full bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                    >
                      Visit Cafe →
                    </Link>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-[#D4A054] rounded-full p-3 shadow-lg animate-float">
                  <FaPaw className="text-[#2C1810] text-xl" />
                </div>
                
                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-2 shadow-lg">
                  <span className="text-[#8B5E3C] font-bold text-sm">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <span className="text-white/60 text-xs">Scroll Down</span>
          <FaArrowDown className="text-[#D4A054] text-sm" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentImage === idx 
                ? 'w-8 h-1.5 bg-[#D4A054]' 
                : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HeroSection;