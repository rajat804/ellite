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
  FaChevronUp,
  FaCut,
  FaBath,
  FaSnowflake,
  FaCalendarAlt,
  FaCalendarWeek,
  FaCalendarCheck,
  FaUtensils,
  FaBed
} from 'react-icons/fa';
import { GiDogBowl, GiDogHouse, GiPawHeart, GiMuscleUp } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PlayHours = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('morning');
  const [showAllBenefits, setShowAllBenefits] = useState(false);
  const [activeTab, setActiveTab] = useState('play');
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

  // Grooming Services
  const groomingServices = [
    { icon: <FaCut />, title: 'Small Bread', price: '₹500', description: 'Complete grooming package for small breed dogs', color: '#D4A054' },
    { icon: <FaDog />, title: 'Large Bread', price: '₹700', description: 'Complete grooming package for large breed dogs', color: '#8B5E3C' }
  ];

  // Spa Services
  const spaServices = [
    { icon: <FaBath />, title: 'Small Bread', price: '₹1200', description: 'Premium spa therapy for small breeds', color: '#D4A054' },
    { icon: <FaDog />, title: 'Large Bread', price: '₹2000', description: 'Premium spa therapy for large breeds', color: '#8B5E3C' }
  ];

  const spaFeatures = [
    'Oil Massage',
    'Deep Tissue Massage',
    'Bath with Premium Products',
    'Relaxing Foot Massage',
    'Aromatherapy',
    'Stress Relief Treatment'
  ];

  // Summer Packages
  const summerPackages = [
    { days: '3 Days Package', price: '₹2200', savings: 'Save ₹800', icon: <FaCalendarAlt /> },
    { days: '7 Days Package', price: '₹5000', savings: 'Save ₹2000', icon: <FaCalendarWeek /> }
  ];

  // Summer Drinks Menu
  const summerDrinks = [
    { day: 1, name: 'Coconut Water Cooler', ingredients: 'Fresh coconut water (no added sugar)', benefit: 'Great for hydration & electrolytes', icon: '🥥', color: 'green' },
    { day: 2, name: 'Cucumber Splash', ingredients: 'Cucumber slices + water', benefit: 'Cooling and safe', icon: '🥒', color: 'green' },
    { day: 3, name: 'Apple Hydration Drink', ingredients: 'Apple slices (no seeds) + water', benefit: 'Naturally slightly sweet', icon: '🍎', color: 'red' },
    { day: 4, name: 'Watermelon Refresher', ingredients: 'Blended watermelon + water (no seeds)', benefit: 'Super refreshing & hydrating', icon: '🍉', color: 'pink' },
    { day: 5, name: 'Doggy "Mojito Style"', ingredients: 'Water + Tiny mint leaf + Crushed ice', benefit: 'Safe & refreshing mocktail for dogs', icon: '🍃', color: 'lime' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white via-[#FDF8F0] to-[#F5EDE4]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 mx-auto w-fit">
            <FaPlay className="text-[#8B5E3C] text-base sm:text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Premium Services
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Complete{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Pet Care Solutions
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                <path d="M0 3 L200 3" stroke="#D4A054" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" className="animate-dash"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From play hours to luxury spa, we provide everything your furry friend needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { id: 'play', label: 'Play Hours', icon: <FaPlay /> },
            { id: 'grooming', label: 'Grooming', icon: <FaCut /> },
            { id: 'spa', label: 'Spa Therapy', icon: <GiMuscleUp /> },
            { id: 'summer', label: 'Summer Special', icon: <FaSnowflake /> },
            { id: 'drinks', label: 'Summer Drinks', icon: <FaCoffee /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ==================== PLAY HOURS TAB ==================== */}
        {activeTab === 'play' && (
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Left Column - Play Hours Info */}
            <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border-l-4 border-l-[#D4A054]">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 p-2 sm:p-3 rounded-xl">
                    <FaClock className="text-[#8B5E3C] text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">🕒 Play Hours Timing</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-xs sm:text-sm">Daily Play Session Duration:</span>
                    <span className="font-bold text-[#D4A054] text-sm sm:text-base">2 Hours</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-xs sm:text-sm">Available Timings:</span>
                    <span className="font-bold text-[#D4A054] text-sm sm:text-base">Morning & Evening Slots</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-xs sm:text-sm">Supervision:</span>
                    <span className="font-bold text-[#D4A054] text-sm sm:text-base">Trained Handlers</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2">
                    <span className="text-gray-500 text-xs sm:text-sm">Play Areas:</span>
                    <span className="font-bold text-[#D4A054] text-sm sm:text-base">Separate for Small & Large Dogs</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-white shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="bg-white/20 p-2 sm:p-3 rounded-xl">
                    <FaRupeeSign className="text-[#D4A054] text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">💰 Play Hours Pricing</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2 border-b border-white/20">
                    <span className="text-white/90 text-sm sm:text-base">2 Hours Play Time:</span>
                    <span className="font-bold text-xl sm:text-2xl text-[#D4A054]">₹100 <span className="text-xs sm:text-sm font-normal text-white/80">only</span></span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 sm:py-2">
                    <div className="flex items-center gap-2">
                      <FaCar className="text-white/80 text-sm sm:text-base" />
                      <span className="text-white/90 text-sm sm:text-base">Pick & Drop Service:</span>
                    </div>
                    <span className="font-bold text-xl sm:text-2xl text-[#D4A054]">₹250</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-2">(Doorstep pickup & drop by our team)</p>
                </div>
              </div>

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

            {/* Right Column */}
            <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
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

              <div className="bg-gradient-to-br from-[#FDF8F0] to-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-[#D4A054]/30">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 p-2 sm:p-3 rounded-xl">
                    <FaHeart className="text-[#D4A054] text-lg sm:text-xl" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">❤️ Why Play Hours Matter</h3>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Regular play sessions help in:</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {displayedBenefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                      <div className="text-xl sm:text-2xl mb-1 flex justify-center">{benefit.icon}</div>
                      <h4 className="font-bold text-gray-800 text-xs sm:text-sm">{benefit.title}</h4>
                      <p className="text-gray-500 text-[10px] sm:text-xs">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                {isMobile && allBenefits.length > 2 && (
                  <button onClick={toggleBenefits} className="mt-3 w-full flex items-center justify-center gap-1 text-[#D4A054] text-xs sm:text-sm font-semibold hover:underline">
                    {showAllBenefits ? <>Show Less <FaChevronUp className="text-xs" /></> : <>Show More Benefits <FaChevronDown className="text-xs" /></>}
                  </button>
                )}
              </div>

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
        )}

        {/* ==================== GROOMING TAB ==================== */}
        {activeTab === 'grooming' && (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {groomingServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] flex items-center justify-center text-white text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                <p className="text-3xl font-bold text-[#D4A054] mb-4">{service.price}</p>
                <Link to="/booknow" className="w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 block text-center">
                  Book Now →
                </Link>
              </div>
            ))}
            <div className="md:col-span-2 text-center mt-4">
              <div className="inline-block bg-white rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-gray-800 mb-2">✨ Grooming Includes:</h4>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
                  <span>• Premium Shampoo Bath</span>
                  <span>• Breed-Specific Haircut</span>
                  <span>• Nail Trimming</span>
                  <span>• Ear Cleaning</span>
                  <span>• Teeth Brushing</span>
                  <span>• Paw Pad Trimming</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SPA THERAPY TAB ==================== */}
        {activeTab === 'spa' && (
          <div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {spaServices.map((service, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] flex items-center justify-center text-white text-3xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                  <p className="text-3xl font-bold text-[#D4A054] mb-4">{service.price}</p>
                  <Link to="/booknow" className="w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 block text-center">
                    Book Spa →
                  </Link>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-6 text-white max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-3 text-center">💆 Spa Package Includes:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {spaFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#D4A054] text-sm" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUMMER SPECIAL TAB (Therapy + Packages) ==================== */}
        {activeTab === 'summer' && (
          <div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Cold Water Therapy Card */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 md:p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaSnowflake className="text-5xl animate-pulse" />
                  <div>
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Summer Special</span>
                    <h3 className="text-2xl font-bold mt-1">Cold Water Therapy</h3>
                  </div>
                </div>
                <p className="text-white/90 mb-4">Perfect for preventing heat strokes and keeping your pet cool</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold">₹800</span>
                    <span className="text-sm ml-1">for 2 Hours</span>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Limited Time Offer</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><FaCheckCircle /> Cold Water Hydrotherapy</div>
                  <div className="flex items-center gap-2"><FaCheckCircle /> Prevents Heat Strokes</div>
                  <div className="flex items-center gap-2"><FaCheckCircle /> Cooling Down Treatment</div>
                  <div className="flex items-center gap-2"><FaCheckCircle /> Relaxing & Refreshing</div>
                </div>
              </div>

              {/* Packages Card */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCalendarCheck className="text-[#D4A054]" /> Special Packages
                  </h3>
                  <div className="space-y-4">
                    {summerPackages.map((pkg, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5E3C]/20 to-[#D4A054]/20 flex items-center justify-center text-[#D4A054]">
                            {pkg.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{pkg.days}</h4>
                            <p className="text-xs text-green-600">{pkg.savings}</p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-[#D4A054]">{pkg.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link to="/booknow" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                  Book Summer Special →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ==================== SUMMER DRINKS TAB ==================== */}
        {activeTab === 'drinks' && (
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 px-4 py-2 rounded-full mb-3 mx-auto w-fit">
                <FaCoffee className="text-[#D4A054]" />
                <span className="text-sm font-semibold text-[#D4A054]">7 Days Summer Special</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Refreshing{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Drinks for Dogs
                </span>
              </h3>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Healthy, natural, and safe drinks to keep your dog cool and hydrated this summer!
              </p>
            </div>

            {/* Important Safety Rules */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-4 mb-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="text-red-500 text-xl">⚠️</div>
                <div>
                  <h4 className="font-bold text-red-700 mb-1">Important Safety Rules</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-red-600">
                    <span>❌ No Sugar</span>
                    <span>❌ No Salt</span>
                    <span>❌ No Artificial Syrups</span>
                    <span>❌ No Caffeine</span>
                    <span>❌ No Soda</span>
                    <span>❌ No Alcohol</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Drinks Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {summerDrinks.map((drink) => (
                <div key={drink.day} className={`bg-gradient-to-br from-white to-${drink.color}-50 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-${drink.color}-200`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full bg-${drink.color}-500 flex items-center justify-center text-white text-xl`}>
                      {drink.icon}
                    </div>
                    <div>
                      <span className={`text-xs font-semibold text-${drink.color}-600 bg-${drink.color}-100 px-2 py-0.5 rounded-full`}>Day {drink.day}</span>
                      <h4 className="font-bold text-gray-800">{drink.name}</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{drink.ingredients}</p>
                  <div className={`flex items-center gap-2 text-xs text-${drink.color}-600`}>
                    <FaCheckCircle /> {drink.benefit}
                  </div>
                  <div className="mt-3 text-right">
                    <span className="text-sm font-semibold text-green-600">🆓 Free with Boarding</span>
                  </div>
                </div>
              ))}

              {/* Day 6 & 7 Combo Card */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-5 shadow-lg text-white md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                    🎉
                  </div>
                  <div>
                    <span className="text-xs font-semibold bg-white/30 px-2 py-0.5 rounded-full">Day 6 & 7</span>
                    <h4 className="font-bold text-white">Summer Special Combo</h4>
                  </div>
                </div>
                <p className="text-white/90 text-sm mb-2">Choose any 2 drinks from above menu</p>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <FaCheckCircle /> Double hydration treat!
                </div>
                <div className="mt-3 text-right">
                  <span className="text-sm font-semibold text-white">✨ Best Value</span>
                </div>
              </div>
            </div>

            {/* Complete 7-Day Menu List */}
            <div className="mt-8 bg-white rounded-2xl p-5 shadow-lg max-w-4xl mx-auto">
              <h4 className="font-bold text-gray-800 mb-3 text-center flex items-center justify-center gap-2">
                <span className="text-xl">📋</span> Complete 7-Day Summer Drinks Menu <span className="text-xl">☀️</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-green-600 w-24">Day 1:</span>
                  <span>🥥 Coconut Water Cooler</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-green-600 w-24">Day 2:</span>
                  <span>🥒 Cucumber Splash</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-red-600 w-24">Day 3:</span>
                  <span>🍎 Apple Hydration Drink</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-pink-600 w-24">Day 4:</span>
                  <span>🍉 Watermelon Refresher</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg sm:col-span-2">
                  <span className="font-semibold text-lime-600 w-24">Day 5:</span>
                  <span>🍃 Doggy "Mojito Style" (Water + Mint + Ice)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg sm:col-span-2">
                  <span className="font-semibold text-cyan-600 w-24">Day 6 & 7:</span>
                  <span>🎉 Summer Special Combo - Choose any 2 drinks</span>
                </div>
              </div>
            </div>

            {/* Safety Reminder */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
                <span className="text-amber-600">💚</span>
                <span className="text-xs text-amber-700">All drinks are 100% natural, sugar-free, and vet-approved!</span>
              </div>
            </div>
          </div>
        )}

        {/* Premium Badge */}
        <div className={`text-center mt-10 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
            <GiPawHeart className="text-white text-lg sm:text-xl" />
            <span className="text-white font-semibold text-xs sm:text-sm md:text-base">Premium Services • Limited Slots</span>
            <FaGem className="text-[#F5C27B] text-sm" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dash { to { stroke-dashoffset: -200; } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; opacity: 0; }
        .animate-dash { animation: dash 20s linear infinite; }
        .animate-pulse { animation: pulse 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default PlayHours;