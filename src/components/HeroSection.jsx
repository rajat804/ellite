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
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Images: 2 Golden Retrievers + 2 Cats
  const backgroundImages = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?w=1600',  // Golden Retriever smiling
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1600',  // Cute Persian Cat
    'https://images.unsplash.com/photo-1558788353-f76dae27f7d0?w=1600',  // Golden Retriever puppy
    'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1600'   // Beautiful Cat
  ];

  const imagesInfo = [
    { type: 'Golden Retriever', emoji: '🐕', description: 'Happy & Playful' },
    { type: 'Persian Cat', emoji: '🐱', description: 'Calm & Elegant' },
    { type: 'Golden Retriever Puppy', emoji: '🐕', description: 'Cute & Energetic' },
    { type: 'Beautiful Cat', emoji: '🐱', description: 'Graceful & Loving' }
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/95 via-[#2C1810]/85 to-[#1A0F0A]/90"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pet Type Indicator */}
      <div className="absolute top-24 right-4 sm:right-6 md:right-8 z-20">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-[#D4A054]/30">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl">{imagesInfo[currentImage].emoji}</span>
            <div>
              <span className="text-white text-xs sm:text-sm font-medium">{imagesInfo[currentImage].type}</span>
              <p className="text-white/60 text-[10px] sm:text-xs">{imagesInfo[currentImage].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A054]/10 rounded-full blur-3xl hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A054]/10 rounded-full blur-3xl hidden lg:block"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Welcome Badge */}
              <div className={`inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-[#D4A054]/30 transition-all duration-700 delay-100 mx-auto lg:mx-0 w-fit ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <FaCoffee className="text-[#D4A054] text-xs sm:text-sm" />
                <span className="text-white text-xs sm:text-sm">Welcome to Bruno's Family & Cafe</span>
                <FaPaw className="text-[#D4A054] text-xs sm:text-sm" />
              </div>

              {/* Main Heading */}
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Where Pets Are{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] bg-clip-text text-transparent">
                    Family
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 200 3">
                    <path d="M0 1.5 L200 1.5" stroke="#D4A054" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" className="animate-dash"/>
                  </svg>
                </span>
              </h1>

              {/* Description */}
              <p className={`text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Experience the perfect blend of luxury pet care and cozy café vibes. 
                Your furry friend deserves the best — and we're here to give it.
              </p>

              {/* Features List */}
              <div className={`flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-[#D4A054]/30">
                    <span className="text-[#D4A054] text-xs sm:text-sm">{feature.icon}</span>
                    <span className="text-white text-xs sm:text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link 
                  to="/book-now" 
                  className="group bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  Book a Stay <FaChevronRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-[#D4A054] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#D4A054]/10 transition-all flex items-center justify-center gap-2"
                >
                  <FaHeart className="text-xs sm:text-sm group-hover:scale-110 transition-transform" />
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 pt-4 border-t border-white/20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaStar className="text-[#D4A054] text-xs sm:text-sm" />
                  <FaStar className="text-[#D4A054] text-xs sm:text-sm" />
                  <FaStar className="text-[#D4A054] text-xs sm:text-sm" />
                  <FaStar className="text-[#D4A054] text-xs sm:text-sm" />
                  <FaStar className="text-[#D4A054] text-xs sm:text-sm" />
                  <span className="text-white/70 text-xs sm:text-sm ml-1 sm:ml-2">4.9 Rating</span>
                </div>
                <div className="w-px h-4 sm:h-5 bg-white/30 hidden xs:block"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaHeart className="text-[#D4A054] text-xs sm:text-sm" />
                  <span className="text-white/70 text-xs sm:text-sm">17k+ Families</span>
                </div>
                <div className="w-px h-4 sm:h-5 bg-white/30 hidden xs:block"></div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaClock className="text-[#D4A054] text-xs sm:text-sm" />
                  <span className="text-white/70 text-xs sm:text-sm">24/7 Care</span>
                </div>
              </div>
            </div>

            {/* Right Side - Cafe Card */}
            <div className={`flex-1 flex justify-center mt-8 lg:mt-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    {/* Cafe Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                      <FaCoffee className="text-2xl sm:text-3xl text-[#2C1810]" />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Pet-Friendly Café</h3>
                    <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6">Enjoy quality time with your furry friend</p>
                    
                    {/* Cafe Features */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      <div className="flex items-center justify-between text-white/80 text-xs sm:text-sm">
                        <span>☕ Special Coffee</span>
                        <span className="text-[#D4A054] font-medium">₹149</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-xs sm:text-sm">
                        <span>🍪 Dog Treats</span>
                        <span className="text-[#D4A054] font-medium">₹79</span>
                      </div>
                      <div className="flex items-center justify-between text-white/80 text-xs sm:text-sm">
                        <span>🍦 Pup Cup</span>
                        <span className="text-[#D4A054] font-medium">₹49</span>
                      </div>
                    </div>
                    
                    <Link 
                      to="/cafe" 
                      className="block w-full bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all hover:scale-105"
                    >
                      Visit Cafe →
                    </Link>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-[#D4A054] rounded-full p-2 sm:p-3 shadow-lg animate-float">
                  <FaPaw className="text-[#2C1810] text-base sm:text-xl" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-white rounded-full p-1.5 sm:p-2 shadow-lg">
                  <span className="text-[#8B5E3C] font-bold text-xs sm:text-sm">New</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
          <span className="text-white/50 text-[10px] sm:text-xs">Scroll Down</span>
          <FaArrowDown className="text-[#D4A054] text-xs sm:text-sm" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20 flex gap-1.5 sm:gap-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentImage === idx 
                ? 'w-6 sm:w-8 h-1 bg-[#D4A054]' 
                : 'w-1.5 h-1 bg-white/40 hover:bg-white/60'
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
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        
        @media (max-width: 640px) {
          .animate-float { animation: float 2s ease-in-out infinite; }
          .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;