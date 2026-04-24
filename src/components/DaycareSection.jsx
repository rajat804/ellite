// src/components/DaycareSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaDog, 
  FaHeart, 
  FaSmile, 
  FaUsers, 
  FaBed, 
  FaUtensils,
  FaShieldAlt,
  FaClock,
  FaPlay,
  FaArrowRight,
  FaCheckCircle,
  FaCalendarAlt,
  FaGem,
  FaCoffee
} from 'react-icons/fa';
import { GiDogHouse, GiPawHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const DaycareSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('daycare-section');
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
    { icon: <FaPlay />, title: 'Supervised Playtime', desc: 'Trained handlers ensure safe and fun play sessions', color: '#D4A054' },
    { icon: <FaUsers />, title: 'Social Interaction', desc: 'Healthy interaction with other friendly dogs', color: '#8B5E3C' },
    { icon: <FaBed />, title: 'Rest & Relaxation', desc: 'Comfortable areas for nap time and relaxation', color: '#6B2E2E' },
    { icon: <FaUtensils />, title: 'Feeding', desc: 'Meals provided as per your instructions (if required)', color: '#A0714F' }
  ];

  const pricing = [
    { plan: 'Half Day', hours: '4 Hours', price: '₹399', color: '#D4A054' },
    { plan: 'Full Day', hours: '8 Hours', price: '₹599', color: '#D4A054' },
    { plan: 'Weekly Pass', hours: '5 Days', price: '₹2499', color: '#D4A054' }
  ];

  return (
    <section id="daycare-section" className="py-20 bg-gradient-to-br from-white to-[#FDF8F0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <FaPlay className="text-[#8B5E3C]" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Daycare Service</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Fun-Filled Day{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              While You're Busy
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Leave your dog with us for the day and let them enjoy a playful and social environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Features */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {/* Features List */}
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-x-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Note */}
            <div className="bg-gradient-to-r from-[#D4A054]/10 to-[#8B5E3C]/10 rounded-xl p-4 border border-[#D4A054]/30">
              <div className="flex items-center gap-2 text-[#8B5E3C] mb-1">
                <FaShieldAlt className="text-sm" />
                <span className="font-semibold">All dogs must be:</span>
              </div>
              <div className="text-sm text-gray-600 ml-6">
                • Fully vaccinated<br />
                • Flea & tick treated<br />
                • Friendly with other dogs
              </div>
            </div>
          </div>

          {/* Right Side - Pricing & Booking */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Pricing Cards */}
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaGem className="text-[#D4A054]" /> Daycare Pricing
              </h3>
              <div className="space-y-3">
                {pricing.map((plan, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-white/20">
                    <div>
                      <span className="font-semibold">{plan.plan}</span>
                      <span className="text-xs opacity-80 ml-2">({plan.hours})</span>
                    </div>
                    <span className="text-xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs opacity-80 mt-4">* Meal charges extra if required</p>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-[#D4A054]" /> What's Included
              </h3>
              <div className="space-y-2">
                {[
                  'Supervised playtime with trained staff',
                  'Social interaction with other friendly dogs',
                  'Comfortable rest & relaxation areas',
                  'Fresh drinking water always available',
                  'Regular potty breaks',
                  'Feeding as per your instructions (food provided by you)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCheckCircle className="text-[#8B5E3C] text-xs" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <Link 
              to="/booknow" 
              className="block w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white text-center py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Book Daycare <FaArrowRight />
            </Link>
          </div>

        </div>

        {/* Benefits Banner */}
        <div className={`mt-12 grid md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {[
            { icon: <FaHeart />, text: 'Stress-Free for You', desc: 'Focus on work while your pet has fun' },
            { icon: <FaDog />, text: 'Happy & Social Pet', desc: 'Develops social skills and reduces anxiety' },
            { icon: <FaClock />, text: 'Flexible Hours', desc: 'Morning, full day, or weekly options' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 flex items-center justify-center text-[#8B5E3C] text-lg mb-2">
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-gray-800 text-sm">{benefit.text}</h4>
              <p className="text-gray-400 text-xs">{benefit.desc}</p>
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
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default DaycareSection;