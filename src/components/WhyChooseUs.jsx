// src/components/WhyChooseUs.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaHeart, 
  FaHome, 
  FaShieldAlt, 
  FaClock, 
  FaSmile, 
  FaVideo,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaDog,
  FaCat,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHandHoldingHeart,
  FaLeaf,
  FaRegSmile,
  FaRegHeart,
  FaGem,
  FaCrown,
  FaInfinity,
  FaCoffee
} from 'react-icons/fa';
import { MdPets, MdHealthAndSafety, MdVerified, MdCake, MdCleaningServices, MdUpdate, MdOutlineSecurity, MdLocalCafe } from 'react-icons/md';
import { GiDogHouse, GiCat, GiMeditation, GiPawHeart, GiLoveInjection } from 'react-icons/gi';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-choose-us');
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

  // Bruno's Family & Cafe Color Palette
  const colors = {
    primary: '#8B5E3C',      // Warm Brown
    secondary: '#6B2E2E',     // Deep Maroon
    accent1: '#D4A054',       // Golden Amber
    accent2: '#F5C27B',       // Light Gold
    accent3: '#4A3728',       // Dark Brown
    accent4: '#A0714F',       // Medium Brown
    dark: '#2C1810',          // Darkest Brown
    light: '#FDF8F0',         // Soft Cream
    gradient1: 'from-[#8B5E3C] to-[#6B2E2E]',
    gradient2: 'from-[#6B2E2E] to-[#4A3728]',
    gradient3: 'from-[#D4A054] to-[#B8860B]',
    gradient4: 'from-[#A0714F] to-[#8B5E3C]',
    gradient5: 'from-[#F5C27B] to-[#D4A054]'
  };

  const features = [
    {
      icon: <FaHandHoldingHeart className="text-2xl md:text-3xl" />,
      title: 'Trusted & Caring Environment',
      subtitle: 'Home Away From Home',
      description: 'We provide a warm, loving, and nurturing environment where your pet feels safe, comfortable, and truly at home.',
      benefits: ['Stress-free atmosphere', 'Loving caretakers', 'Home-like comfort'],
      gradient: colors.gradient1,
      color: colors.primary
    },
    {
      icon: <MdCleaningServices className="text-2xl md:text-3xl" />,
      title: 'Clean & Safe Facility',
      subtitle: 'Highest Hygiene Standards',
      description: 'Our facility is meticulously maintained with professional cleaning protocols, air purifiers, and sanitized play areas.',
      benefits: ['Daily deep cleaning', 'Air purification', 'Sanitized equipment'],
      gradient: colors.gradient4,
      color: colors.accent4
    },
    {
      icon: <FaHeart className="text-2xl md:text-3xl" />,
      title: 'Personalized Attention',
      subtitle: 'Every Pet is Unique',
      description: 'We understand that every pet has different needs. Our customized care plans ensure individual attention for each furry guest.',
      benefits: ['Individual care plans', 'One-on-one time', 'Special diet handling'],
      gradient: colors.gradient2,
      color: colors.secondary
    },
    {
      icon: <MdUpdate className="text-2xl md:text-3xl" />,
      title: 'Regular Updates',
      subtitle: 'Stay Connected Always',
      description: 'Never worry about your pet while you\'re away. We send daily photo and video updates via WhatsApp.',
      benefits: ['Daily photos/videos', 'Real-time updates', 'Peace of mind'],
      gradient: colors.gradient3,
      color: colors.accent1
    },
    {
      icon: <GiPawHeart className="text-2xl md:text-3xl" />,
      title: 'Passionate Dog Lovers',
      subtitle: 'Expert Caretakers',
      description: 'Our team consists of passionate pet lovers who treat every animal with the same love and care as their own.',
      benefits: ['Certified staff', 'Experienced team', 'Genuine love for pets'],
      gradient: colors.gradient5,
      color: colors.accent2
    },
    {
      icon: <MdOutlineSecurity className="text-2xl md:text-3xl" />,
      title: '24/7 Safety Monitoring',
      subtitle: 'Round the Clock Care',
      description: 'Your pet\'s safety is our top priority with 24/7 supervision, CCTV monitoring, and immediate emergency response.',
      benefits: ['CCTV surveillance', 'Emergency protocols', 'Vet on call'],
      gradient: colors.gradient2,
      color: colors.dark
    }
  ];

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: <FaCrown />, gradient: colors.gradient1 },
    { number: '17k+', label: 'Happy Families', icon: <FaUsers />, gradient: colors.gradient2 },
    { number: '10k+', label: 'Pets Served', icon: <FaDog />, gradient: colors.gradient3 },
    { number: '100%', label: 'Satisfaction', icon: <FaSmile />, gradient: colors.gradient4 }
  ];

  const quickPoints = [
    { icon: <FaHandHoldingHeart />, text: 'Trusted & Caring', gradient: colors.gradient1 },
    { icon: <MdCleaningServices />, text: 'Clean & Safe', gradient: colors.gradient4 },
    { icon: <FaHeart />, text: 'Personalized Care', gradient: colors.gradient2 },
    { icon: <MdUpdate />, text: 'Daily Updates', gradient: colors.gradient3 },
    { icon: <GiPawHeart />, text: 'Pet Lovers', gradient: colors.gradient5 },
    { icon: <MdOutlineSecurity />, text: '24/7 Safety', gradient: colors.gradient2 }
  ];

  // Mobile check
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const displayedFeatures = isMobile && !showAllFeatures ? features.slice(0, 3) : features;

  const toggleShowAll = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <section id="why-choose-us" className="py-12 md:py-20 lg:py-28 bg-gradient-to-br from-white via-[#FDF8F0] to-[#F5EDE4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header - Mobile Optimized */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full mb-4 md:mb-5 backdrop-blur-sm">
            <FaCoffee className="text-[#8B5E3C] text-sm md:text-base lg:text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-xs sm:text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Why Choose{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Bruno's Family?
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                <path d="M0 3 L200 3" stroke="#D4A054" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" className="animate-dash"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            We provide the best care for your furry family members with love, safety, and professionalism
          </p>
        </div>

        {/* Quick Points Row - Mobile Grid Adjust */}
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {quickPoints.map((point, idx) => (
            <div key={idx} className="group relative bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 md:mb-3 transition-all group-hover:scale-110 bg-gradient-to-r ${point.gradient} shadow-md`}>
                <span className="text-white text-base sm:text-lg md:text-xl">{point.icon}</span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Stats Row - Mobile Optimized */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8 md:mb-12 lg:mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="text-white text-base sm:text-lg md:text-2xl">{stat.icon}</span>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-0.5 sm:mb-1">{stat.number}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid - Mobile Show More/Less */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 mb-8 md:mb-12 lg:mb-16">
          {displayedFeatures.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="bg-gray-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:scale-110 transition-all duration-300">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-base sm:text-lg md:text-xl shadow-md bg-gradient-to-r ${feature.gradient}`}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 group-hover:text-[#8B5E3C] transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3" style={{ color: feature.color }}>
                {feature.subtitle}
              </p>
              
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-1 sm:space-y-2 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                {feature.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                    <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                      <FaCheckCircle className="text-white text-[6px] sm:text-[8px]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button - Mobile Only */}
        {isMobile && features.length > 3 && (
          <div className="flex justify-center mb-8 md:mb-12">
            <button
              onClick={toggleShowAll}
              className="group flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all hover:scale-105"
            >
              {showAllFeatures ? (
                <>
                  Show Less <FaChevronUp className="group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More Features <FaChevronDown className="group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Feature Count Indicator - Mobile */}
        {isMobile && !showAllFeatures && (
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs text-gray-400">
              Showing 3 of {features.length} premium features
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gray-200 rounded-full mx-auto mt-2">
              <div className="w-1/4 h-1 bg-[#D4A054] rounded-full"></div>
            </div>
          </div>
        )}

        {/* Main Features Banner - Mobile Optimized */}
        <div className={`bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
            <div className="flex-1 text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 md:mb-5 mx-auto lg:mx-0 w-fit">
                <FaHeart className="text-[#D4A054] text-xs sm:text-sm" />
                <span className="text-xs sm:text-sm font-medium">Premium Pet Care</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                We Treat Every Pet Like Family
              </h3>
              
              <p className="text-white/90 mb-5 md:mb-6 leading-relaxed text-sm sm:text-base">
                At Bruno's Family, we don't just offer boarding – we offer love, companionship, 
                and care tailored to your pet's personality, routine, and health needs.
              </p>

              <div className="space-y-2 sm:space-y-3 text-left">
                {[
                  'First pet boarding service in Rajnagar Extension – trusted legacy',
                  'Pets live in a home environment, no cages, no isolation',
                  'Regular photo & video updates while you\'re away',
                  'Pets make new friends & enjoy socialization'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-[#D4A054] text-[8px] sm:text-xs" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-5 sm:mt-6 md:mt-8 bg-[#D4A054] text-[#2C1810] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base mx-auto lg:mx-0">
                Book a Visit <FaHeart className="text-xs sm:text-sm" />
              </button>
            </div>

            <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20">
              <FaQuoteLeft className="text-[#D4A054] text-2xl sm:text-3xl mb-3 sm:mb-4 opacity-70" />
              <p className="text-white leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                "Leaving my dog at Bruno's Family felt like leaving him with family. 
                He enjoyed playtime, came back healthier, and I could travel stress-free."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-full flex items-center justify-center text-[#2C1810] font-bold shadow-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Ritika Sharma</h4>
                  <p className="text-white/70 text-xs sm:text-sm">Happy Pet Parent, Gurgaon</p>
                  <div className="flex items-center gap-0.5 sm:gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#D4A054] text-[10px] sm:text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges - Mobile Optimized */}
        <div className={`mt-8 md:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { icon: <FaCrown />, text: '15+ Years', gradient: colors.gradient1 },
            { icon: <FaHeart />, text: '17k+ Families', gradient: colors.gradient2 },
            { icon: <FaStar />, text: '4.9 Rating', gradient: colors.gradient3 },
            { icon: <FaShieldAlt />, text: 'Licensed', gradient: colors.gradient4 },
            { icon: <FaInfinity />, text: '24/7 Support', gradient: colors.gradient5 }
          ].map((badge, idx) => (
            <div key={idx} className="group bg-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r ${badge.gradient} flex items-center justify-center`}>
                  <span className="text-white text-[8px] sm:text-[10px] md:text-xs">{badge.icon}</span>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            </div>
          ))}
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

// Import missing icons
const FaChevronDown = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20" width="16" height="16"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
const FaChevronUp = ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 20 20" width="16" height="16"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>;

export default WhyChooseUs;