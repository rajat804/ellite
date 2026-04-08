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
  FaMapMarkerAlt
} from 'react-icons/fa';
import { MdPets, MdHealthAndSafety, MdVerified, MdCake } from 'react-icons/md';
import { GiDogHouse, GiCat, GiMeditation } from 'react-icons/gi';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  // ❌ Remove this line if not using
  // const [activeFeature, setActiveFeature] = useState(0);

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

  const features = [
    {
      icon: <FaHome className="text-3xl" />,
      title: 'Home-Based Environment',
      subtitle: 'Real Home, Not a Kennel',
      description: 'Unlike traditional kennels, our boarding is in a real home setup – cozy, clean, and completely stress-free for your furry friend.',
      benefits: ['No cages or isolation', 'Family-like atmosphere', 'Individual attention'],
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10'
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: '15+ Years Experience',
      subtitle: 'Pioneers in Pet Boarding',
      description: 'We are the first pet boarding service in Delhi NCR with years of expertise. Trusted by thousands of pet parents.',
      benefits: ['Established 2008', 'Expert caretakers', 'Proven track record'],
      color: '#E67E22',
      bg: 'bg-orange-100'
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: '5-Star Rated Service',
      subtitle: 'Loved by Thousands',
      description: 'Over 10,000+ happy dogs boarded with excellent reviews. Our reputation speaks for itself.',
      benefits: ['10,000+ boarding stays', '4.9 Google Rating', 'Verified reviews'],
      color: '#FF7A2F',
      bg: 'bg-orange-100'
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: 'Socialization & Fun',
      subtitle: 'Happy Dogs, Happy Life',
      description: 'Your dog enjoys interaction, playtime, and behavioral enrichment with other friendly pets.',
      benefits: ['Daily play sessions', 'Behavioral enrichment', 'New friends'],
      color: '#6B4E71',
      bg: 'bg-purple-100'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: 'Safe & Supervised',
      subtitle: '24/7 Monitoring',
      description: 'Round-the-clock supervision, regular health checks, and vet-on-call support for complete peace of mind.',
      benefits: ['24/7 monitoring', 'Vet-on-call', 'Emergency ready'],
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10'
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: 'Daily Updates',
      subtitle: 'Stay Connected',
      description: 'Regular photo and video updates on WhatsApp so you never miss a moment of your pet\'s happy stay.',
      benefits: ['Daily photos/videos', 'Real-time updates', 'Peace of mind'],
      color: '#E67E22',
      bg: 'bg-orange-100'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience', icon: <MdVerified />, color: '#007B7F' },
    { number: '10,000+', label: 'Happy Dogs', icon: <FaDog />, color: '#E67E22' },
    { number: '4.9', label: 'Google Rating', icon: <FaStar />, color: '#FF7A2F' },
    { number: '24/7', label: 'Support Available', icon: <FaClock />, color: '#6B4E71' }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4">
            <FaHeart className="text-[#007B7F] text-lg" />
            <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Why Choose{' '}
            <span className="relative inline-block">
              Happy Pettings?
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#FFD1B3" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            We provide the best care for your furry family members with love, safety, and professionalism
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center p-6 bg-gradient-to-br from-white to-[#FFF9F0] rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-4" style={{ color: stat.color }}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div style={{ color: feature.color }} className="text-2xl">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2C3E50] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm font-semibold mb-3" style={{ color: feature.color }}>
                {feature.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                {feature.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCheckCircle className="text-[#007B7F] text-xs" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main Features Banner */}
        <div className={`bg-gradient-to-r from-[#007B7F] to-[#005C5F] rounded-3xl p-8 md:p-12 shadow-2xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <GiDogHouse className="text-[#FFD1B3]" />
                <span className="text-sm font-medium">What Makes Us Different</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                We Treat Every Pet Like Family
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                At Happy Pettings, we don't just offer boarding – we offer love, companionship, 
                and care tailored to your dog's personality, routine, and health needs.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#FFD1B3]" />
                  <span>First pet boarding service in Delhi NCR – trusted legacy</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#FFD1B3]" />
                  <span>Dogs live in a similar home environment, no cages, no isolation</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#FFD1B3]" />
                  <span>Regular photo & video updates while you're away</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#FFD1B3]" />
                  <span>Dogs make new friends & enjoy socialization</span>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <FaQuoteLeft className="text-[#FFD1B3] text-3xl mb-4 opacity-50" />
              <p className="text-white leading-relaxed mb-6">
                "Leaving my dog at Happy Pettings felt like leaving him with family. 
                He enjoyed playtime, came back healthier, and I could travel stress-free."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFD1B3] rounded-full flex items-center justify-center text-[#007B7F] font-bold">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-white">Ritika Sharma</h4>
                  <p className="text-white/70 text-sm">Happy Pet Parent, Gurgaon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold text-center text-[#2C3E50] mb-8">
            Specialized Boarding Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <FaHome />, title: 'Home Boarding', desc: 'Stress-free alternative to kennels', color: '#007B7F' },
              { icon: <FaClock />, title: 'Vacation Boarding', desc: 'Perfect for when you travel', color: '#E67E22' },
              { icon: <MdHealthAndSafety />, title: 'Medical Boarding', desc: 'Special care for health needs', color: '#FF7A2F' },
              { icon: <GiMeditation />, title: 'Daycare', desc: 'Daytime play & training', color: '#6B4E71' }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#FFF9F0] p-4 rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ color: service.color }}>
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h4 className="font-bold text-[#2C3E50] mb-1">{service.title}</h4>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
            ))}
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;