// src/components/PlayHours.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  FaPlay, 
  FaClock, 
  FaRupeeSign, 
  FaCar, 
  FaDog, 
  FaCat,
  FaHeart,
  FaSmile,
  FaUsers,
  FaLeaf,
  FaWater,
  FaShieldAlt,
  FaArrowRight,
  FaCheckCircle,
  FaSun,
  FaMoon,
  FaRunning,
  FaGem,
  FaCoffee,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { GiDogBowl, GiDogHouse, GiPawHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PlayHours = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('morning');
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check if mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const playSlots = [
    { 
      id: 'morning', 
      name: 'Morning Play', 
      icon: <FaSun />, 
      time: '7:00 AM - 9:00 AM',
      bg: 'from-[#D4A054]/20 to-[#F5C27B]/20',
      color: '#D4A054'
    },
    { 
      id: 'evening', 
      name: 'Evening Play', 
      icon: <FaMoon />, 
      time: '4:00 PM - 6:00 PM',
      bg: 'from-[#6B2E2E]/20 to-[#4A3728]/20',
      color: '#6B2E2E'
    }
  ];

  const allBenefits = [
    { icon: <FaHeart className="text-[#D4A054]" />, title: 'Reduces Anxiety', desc: 'Helps calm nervous pets' },
    { icon: <FaUsers className="text-[#8B5E3C]" />, title: 'Social Skills', desc: 'Better interaction with others' },
    { icon: <FaSmile className="text-[#D4A054]" />, title: 'Happy Pet', desc: 'Improved overall mood' },
    { icon: <FaLeaf className="text-[#6B2E2E]" />, title: 'Healthy Weight', desc: 'Maintains fitness' },
  ];

  const displayedBenefits = isMobile && !showAllBenefits ? allBenefits.slice(0, 2) : allBenefits;

  const features = [
    { icon: <FaShieldAlt className="text-[#8B5E3C]" />, title: 'Supervised Play', desc: 'Trained handlers always present' },
    { icon: <FaRunning className="text-[#D4A054]" />, title: 'Open Space', desc: 'Large, clean play area' },
    { icon: <FaWater className="text-[#6B2E2E]" />, title: 'Hydration', desc: 'Fresh water always available' },
    { icon: <GiDogBowl className="text-[#8B5E3C]" />, title: 'Separate Zones', desc: 'Small & large dog areas' },
  ];

  const whatIncluded = [
    'Open play & social interaction',
    'Exercise and activity time',
    'Supervised environment by trained handlers',
    'Fresh drinking water availability',
    'Clean and sanitized play area',
    'Stress-free engagement for your pet'
  ];

  const toggleBenefits = () => {
    setShowAllBenefits(!showAllBenefits);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-[#FDF8F0] to-[#F5EDE4]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 mx-auto w-fit">
            <FaPlay className="text-[#8B5E3C] text-base sm:text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Play Hours
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            🐾 Play Hours –{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Fun, Social & Active Time
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                <path d="M0 3 L200 3" stroke="#D4A054" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" className="animate-dash"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            At Bruno's Family, we believe <strong className="text-[#8B5E3C]">playtime is essential</strong> for a dog's happiness, 
            physical health, and mental stimulation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Left Column - Play Hours Info */}
          <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Timing Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border-l-4 border-l-[#D4A054]">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 p-2 sm:p-3 rounded-xl">
                  <FaClock className="text-[#8B5E3C] text-lg sm:text-xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">🕒 Play Hours Timing</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 gap-1 sm:gap-0">
                  <span className="text-gray-500 text-xs sm:text-sm">Daily Play Session Duration:</span>
                  <span className="font-bold text-[#D4A054] text-sm sm:text-base">2 Hours</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 gap-1 sm:gap-0">
                  <span className="text-gray-500 text-xs sm:text-sm">Available Timings:</span>
                  <span className="font-bold text-[#D4A054] text-sm sm:text-base">Morning & Evening Slots</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 gap-1 sm:gap-0">
                  <span className="text-gray-500 text-xs sm:text-sm">Supervision:</span>
                  <span className="font-bold text-[#D4A054] text-sm sm:text-base">Trained Handlers</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 gap-1 sm:gap-0">
                  <span className="text-gray-500 text-xs sm:text-sm">Play Areas:</span>
                  <span className="font-bold text-[#D4A054] text-sm sm:text-base">Separate for Small & Large Dogs</span>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-white/20 p-2 sm:p-3 rounded-xl">
                  <FaRupeeSign className="text-[#D4A054] text-lg sm:text-xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold">💰 Play Hours Pricing</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-white/20 gap-1 sm:gap-0">
                  <span className="text-white/90 text-sm sm:text-base">2 Hours Play Time:</span>
                  <span className="font-bold text-xl sm:text-2xl text-[#D4A054]">₹100 <span className="text-xs sm:text-sm font-normal text-white/80">only</span></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 gap-1 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <FaCar className="text-white/80 text-sm sm:text-base" />
                    <span className="text-white/90 text-sm sm:text-base">Pick & Drop Service:</span>
                  </div>
                  <span className="font-bold text-xl sm:text-2xl text-[#D4A054]">₹250</span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-2">(Doorstep pickup & drop by our team)</p>
              </div>
            </div>

            {/* Slot Selector */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">Choose Your Play Slot</h3>
              <div className="flex gap-3 sm:gap-4">
                {playSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`flex-1 p-3 sm:p-4 rounded-xl text-center transition-all duration-300 ${
                      selectedSlot === slot.id
                        ? `bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105`
                        : `bg-gradient-to-r ${slot.bg} text-gray-600 hover:scale-105`
                    }`}
                  >
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{slot.icon}</div>
                    <div className="font-semibold text-sm sm:text-base">{slot.name}</div>
                    <div className="text-[10px] sm:text-xs mt-1 opacity-80">{slot.time}</div>
                  </button>
                ))}
              </div>
              <Link to="/booknow" className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 block text-center text-sm sm:text-base">
                Book {selectedSlot === 'morning' ? 'Morning' : 'Evening'} Slot <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Column - What's Included & Benefits */}
          <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
            {/* What's Included */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 p-2 sm:p-3 rounded-xl">
                  <GiDogHouse className="text-[#8B5E3C] text-lg sm:text-xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">🐕 What's Included</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {whatIncluded.slice(0, isMobile ? 4 : 6).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-lg hover:bg-[#FDF8F0] transition-colors">
                    <FaCheckCircle className="text-[#D4A054] text-xs sm:text-sm flex-shrink-0" />
                    <span className="text-gray-600 text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Play Hours Matter - Mobile Optimized */}
            <div className="bg-gradient-to-br from-[#FDF8F0] to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-[#D4A054]/30">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 p-2 sm:p-3 rounded-xl">
                  <FaHeart className="text-[#D4A054] text-lg sm:text-xl" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">❤️ Why Play Hours Matter</h3>
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Regular play sessions help in:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {displayedBenefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                    <div className="text-xl sm:text-2xl mb-1 flex justify-center">{benefit.icon}</div>
                    <h4 className="font-bold text-gray-800 text-xs sm:text-sm">{benefit.title}</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs">{benefit.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Show More/Less Button - Mobile Only */}
              {isMobile && allBenefits.length > 2 && (
                <button
                  onClick={toggleBenefits}
                  className="mt-3 w-full flex items-center justify-center gap-1 text-[#D4A054] text-xs sm:text-sm font-semibold hover:underline"
                >
                  {showAllBenefits ? (
                    <>Show Less <FaChevronUp className="text-xs" /></>
                  ) : (
                    <>Show More Benefits <FaChevronDown className="text-xs" /></>
                  )}
                </button>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="text-xl sm:text-2xl mb-1 flex justify-center group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h4 className="font-bold text-gray-800 text-xs sm:text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-[10px] sm:text-xs">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Badge - Mobile Optimized */}
        <div className={`text-center mt-6 sm:mt-8 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full shadow-lg">
            <GiPawHeart className="text-white text-base sm:text-lg md:text-xl" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Premium Play Hours</span>
            <FaGem className="text-[#F5C27B] text-xs sm:text-sm" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PlayHours;