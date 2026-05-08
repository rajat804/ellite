// src/components/ServicesOverview.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaHome, 
  FaWalking, 
  FaUtensils, 
  FaWater, 
  FaCamera, 
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaCoffee,
  FaPhoneAlt,
  FaCalendarAlt,
  FaGem,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { GiDogHouse, GiPawHeart } from 'react-icons/gi';
import { MdLocalCafe } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services-overview');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const ctaButtons = [
    { 
      icon: <GiDogHouse className="text-xl sm:text-2xl" />, 
      text: 'Book Boarding', 
      link: '/booknow',
      gradient: 'from-[#8B5E3C] to-[#6B2E2E]',
      color: '#8B5E3C'
    },
    // { 
    //   icon: <MdLocalCafe className="text-xl sm:text-2xl" />, 
    //   text: 'Visit Café', 
    //   link: '/cafe',
    //   gradient: 'from-[#D4A054] to-[#B8860B]',
    //   color: '#D4A054'
    // },
    { 
      icon: <FaPhoneAlt className="text-xl sm:text-2xl" />, 
      text: 'Contact Us', 
      link: '/contact',
      gradient: 'from-[#6B2E2E] to-[#4A3728]',
      color: '#6B2E2E'
    }
  ];

  const allFeatures = [
    { icon: <GiDogHouse />, title: 'Spacious & Hygienic Stay', desc: 'Premium climate-controlled kennels with soft bedding' },
    { icon: <FaWalking />, title: 'Daily Walks & Playtime', desc: 'Structured exercise with professional handlers' },
    { icon: <FaUtensils />, title: 'Regular Feeding', desc: 'Premium meals as per your instructions' },
    { icon: <FaWater />, title: 'Fresh Water & Clean Bedding', desc: 'Clean, sanitized bedding and fresh water always' },
    { icon: <FaHeart />, title: 'Personal Care & Attention', desc: 'Individualized care with one-on-one love' },
    { icon: <FaCamera />, title: 'Daily Photo/Video Updates', desc: 'Regular updates of your happy pet' }
  ];

  const displayedFeatures = isMobile && !showAllFeatures ? allFeatures.slice(0, 3) : allFeatures;

  const toggleShowAll = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <section id="services-overview" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 mx-auto w-fit">
            <FaPaw className="text-[#8B5E3C] text-sm sm:text-base" />
            <span className="text-[#8B5E3C] font-semibold text-xs sm:text-sm uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">
            What We{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">Complete pet care solutions for your furry family members</p>
        </div>

        {/* CTA Buttons Row - Mobile Optimized */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {ctaButtons.map((btn, idx) => (
            <Link
              key={idx}
              to={btn.link}
              className={`group bg-gradient-to-r ${btn.gradient} p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3`}
            >
              <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform">{btn.icon}</span>
              <span className="font-semibold text-sm sm:text-base md:text-lg">{btn.text}</span>
              <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Boarding Features Grid - Mobile Optimized with Show More */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {displayedFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 flex items-center justify-center text-[#8B5E3C] text-base sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1 group-hover:text-[#8B5E3C] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button - Mobile Only */}
        {isMobile && allFeatures.length > 3 && (
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <button
              onClick={toggleShowAll}
              className="group flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all hover:scale-105"
            >
              {showAllFeatures ? (
                <>
                  Show Less <FaChevronUp className="text-xs sm:text-sm group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More Features <FaChevronDown className="text-xs sm:text-sm group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Feature Count Indicator - Mobile */}
        {isMobile && !showAllFeatures && (
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs text-gray-400">
              Showing 3 of {allFeatures.length} premium features
            </p>
            <div className="w-24 h-1 bg-gray-200 rounded-full mx-auto mt-2">
              <div className="w-1/3 h-1 bg-[#D4A054] rounded-full"></div>
            </div>
          </div>
        )}

        {/* Premium Badge - Mobile Optimized */}
        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow-lg">
            <GiPawHeart className="text-white text-base sm:text-lg md:text-xl" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Premium Pet Care Since 2008</span>
            <FaGem className="text-amber-300 text-xs sm:text-sm" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default ServicesOverview;