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
      icon: <FaHandHoldingHeart className="text-3xl" />,
      title: 'Trusted & Caring Environment',
      subtitle: 'Home Away From Home',
      description: 'We provide a warm, loving, and nurturing environment where your pet feels safe, comfortable, and truly at home.',
      benefits: ['Stress-free atmosphere', 'Loving caretakers', 'Home-like comfort'],
      gradient: colors.gradient1,
      color: colors.primary
    },
    {
      icon: <MdCleaningServices className="text-3xl" />,
      title: 'Clean & Safe Facility',
      subtitle: 'Highest Hygiene Standards',
      description: 'Our facility is meticulously maintained with professional cleaning protocols, air purifiers, and sanitized play areas.',
      benefits: ['Daily deep cleaning', 'Air purification', 'Sanitized equipment'],
      gradient: colors.gradient4,
      color: colors.accent4
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Personalized Attention',
      subtitle: 'Every Pet is Unique',
      description: 'We understand that every pet has different needs. Our customized care plans ensure individual attention for each furry guest.',
      benefits: ['Individual care plans', 'One-on-one time', 'Special diet handling'],
      gradient: colors.gradient2,
      color: colors.secondary
    },
    {
      icon: <MdUpdate className="text-3xl" />,
      title: 'Regular Updates',
      subtitle: 'Stay Connected Always',
      description: 'Never worry about your pet while you\'re away. We send daily photo and video updates via WhatsApp.',
      benefits: ['Daily photos/videos', 'Real-time updates', 'Peace of mind'],
      gradient: colors.gradient3,
      color: colors.accent1
    },
    {
      icon: <GiPawHeart className="text-3xl" />,
      title: 'Passionate Dog Lovers',
      subtitle: 'Expert Caretakers',
      description: 'Our team consists of passionate pet lovers who treat every animal with the same love and care as their own.',
      benefits: ['Certified staff', 'Experienced team', 'Genuine love for pets'],
      gradient: colors.gradient5,
      color: colors.accent2
    },
    {
      icon: <MdOutlineSecurity className="text-3xl" />,
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

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-gradient-to-br from-white via-[#FDF8F0] to-[#F5EDE4]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-5 py-2.5 rounded-full mb-5 backdrop-blur-sm">
            <FaCoffee className="text-[#8B5E3C] text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose{' '}
            <span className="relative inline-block bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Bruno's Family?
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#D4A054" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" className="animate-dash"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg">
            We provide the best care for your furry family members with love, safety, and professionalism
          </p>
        </div>

        {/* Quick Points Row */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {quickPoints.map((point, idx) => (
            <div key={idx} className="group relative bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all group-hover:scale-110 bg-gradient-to-r ${point.gradient} shadow-md`}>
                <span className="text-white text-xl">{point.icon}</span>
              </div>
              <p className="text-xs font-semibold text-gray-700 leading-tight">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="text-white text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md bg-gradient-to-r ${feature.gradient}`}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[#8B5E3C] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: feature.color }}>
                {feature.subtitle}
              </p>
              
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                {feature.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                      <FaCheckCircle className="text-white text-[8px]" />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Features Banner */}
        <div className={`bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-3xl p-8 md:p-12 shadow-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5">
                <FaHeart className="text-[#D4A054]" />
                <span className="text-sm font-medium">Premium Pet Care</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We Treat Every Pet Like Family
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                At Bruno's Family, we don't just offer boarding – we offer love, companionship, 
                and care tailored to your pet's personality, routine, and health needs.
              </p>

              <div className="space-y-3">
                {[
                  'First pet boarding service in Delhi NCR – trusted legacy',
                  'Pets live in a home environment, no cages, no isolation',
                  'Regular photo & video updates while you\'re away',
                  'Pets make new friends & enjoy socialization'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <FaCheckCircle className="text-[#D4A054] text-xs" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-[#D4A054] text-[#2C1810] px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                Book a Visit <FaHeart className="text-sm" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <FaQuoteLeft className="text-[#D4A054] text-3xl mb-4 opacity-70" />
              <p className="text-white leading-relaxed mb-6">
                "Leaving my dog at Bruno's Family felt like leaving him with family. 
                He enjoyed playtime, came back healthier, and I could travel stress-free."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-full flex items-center justify-center text-[#2C1810] font-bold shadow-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-white">Ritika Sharma</h4>
                  <p className="text-white/70 text-sm">Happy Pet Parent, Gurgaon</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#D4A054] text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { icon: <FaCrown />, text: '15+ Years Excellence', gradient: colors.gradient1 },
            { icon: <FaHeart />, text: '17,000+ Happy Families', gradient: colors.gradient2 },
            { icon: <FaStar />, text: '4.9 Google Rating', gradient: colors.gradient3 },
            { icon: <FaShieldAlt />, text: 'Licensed & Insured', gradient: colors.gradient4 },
            { icon: <FaInfinity />, text: '24/7 Support', gradient: colors.gradient5 }
          ].map((badge, idx) => (
            <div key={idx} className="group bg-white px-5 py-2.5 rounded-full shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${badge.gradient} flex items-center justify-center`}>
                  <span className="text-white text-xs">{badge.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{badge.text}</span>
              </div>
            </div>
          ))}
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
        
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;