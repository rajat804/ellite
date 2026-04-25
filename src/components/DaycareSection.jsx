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
  FaCoffee,
  FaCut,
  FaBath,
  FaOilCan,
  FaSnowflake,
  FaCalendarWeek,
  FaCalendarCheck,
  FaWind,
  FaWater
} from 'react-icons/fa';
import { GiDogHouse, GiPawHeart, GiMuscleUp } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const DaycareSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState('daycare');

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

  // Grooming Services - Updated Prices
  const groomingServices = [
    { 
      icon: <FaCut />, 
      title: 'Small Bread', 
      price: '₹500', 
      description: 'Complete grooming for small breed dogs',
      color: '#D4A054'
    },
    { 
      icon: <FaDog />, 
      title: 'Large Bread', 
      price: '₹700', 
      description: 'Complete grooming for large breed dogs',
      color: '#8B5E3C'
    }
  ];

  // Spa Therapy Services - Updated Prices
  const spaServices = [
    { 
      icon: <FaBath />, 
      title: 'Small Bread', 
      price: '₹1200', 
      description: 'Premium spa therapy for small breeds',
      color: '#D4A054'
    },
    { 
      icon: <FaDog />, 
      title: 'Large Bread', 
      price: '₹2000', 
      description: 'Premium spa therapy for large breeds',
      color: '#8B5E3C'
    }
  ];

  // Summer Special - Cold Water Therapy
  const summerSpecial = {
    title: 'Cold Water Therapy',
    subtitle: 'Beat the Summer Heat!',
    price: '₹800',
    duration: '2 Hours',
    description: 'Perfect for preventing heat strokes and keeping your pet cool',
    icon: <FaSnowflake />,
    color: '#06B6D4'
  };

  // Package Deals - Updated Prices
  const packages = [
    { 
      days: '3 Days Package', 
      price: '₹2200', 
      savings: 'Save ₹800',
      icon: <FaCalendarAlt />,
      color: '#D4A054'
    },
    { 
      days: '7 Days Package', 
      price: '₹5000', 
      savings: 'Save ₹2000',
      icon: <FaCalendarWeek />,
      color: '#8B5E3C'
    }
  ];

  const spaFeatures = [
    'Oil Massage',
    'Deep Tissue Massage',
    'Bath with Premium Products',
    'Relaxing Foot Massage',
    'Aromatherapy',
    'Stress Relief Treatment'
  ];

  return (
    <section id="daycare-section" className="py-20 bg-gradient-to-br from-white to-[#FDF8F0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <FaPlay className="text-[#8B5E3C]" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Premium Services</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Complete{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Pet Care Solutions
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From daycare to luxury spa, we provide everything your furry friend needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { id: 'daycare', label: 'Daycare', icon: <FaPlay /> },
            { id: 'grooming', label: 'Grooming', icon: <FaCut /> },
            { id: 'spa', label: 'Spa Therapy', icon: <GiMuscleUp /> },
            { id: 'summer', label: 'Summer Special', icon: <FaSnowflake /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveService(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                activeService === tab.id
                  ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Daycare Section */}
        {activeService === 'daycare' && (
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
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

            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
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
                    'Feeding as per your instructions'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-[#8B5E3C] text-xs" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/booknow" className="block w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white text-center py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
                Book Daycare <FaArrowRight />
              </Link>
            </div>
          </div>
        )}

        {/* Grooming Section */}
        {activeService === 'grooming' && (
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaCut className="text-[#D4A054] text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-800">Grooming Services</h3>
                </div>
                <p className="text-gray-500 mb-6">Keep your pet clean, fresh, and stylish</p>
                <div className="space-y-4">
                  {groomingServices.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5E3C]/20 to-[#D4A054]/20 flex items-center justify-center" style={{ color: service.color }}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{service.title}</h4>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#D4A054]">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">✨ Grooming Includes:</h3>
                <div className="space-y-2">
                  {[
                    'Premium Shampoo Bath',
                    'Breed-Specific Haircut',
                    'Nail Trimming',
                    'Ear Cleaning',
                    'Teeth Brushing',
                    'Paw Pad Trimming'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#D4A054] text-xs" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/booknow" className="block w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white text-center py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                Book Grooming →
              </Link>
            </div>
          </div>
        )}

        {/* Spa Therapy Section */}
        {activeService === 'spa' && (
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <GiMuscleUp className="text-[#D4A054] text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-800">Dog Spa Therapy</h3>
                </div>
                <p className="text-gray-500 mb-6">Pamper your furry friend with luxury spa treatment</p>
                <div className="space-y-4">
                  {spaServices.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5E3C]/20 to-[#D4A054]/20 flex items-center justify-center" style={{ color: service.color }}>
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{service.title}</h4>
                          <p className="text-xs text-gray-500">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-[#D4A054]">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">💆 Spa Package Includes:</h3>
                <div className="space-y-2">
                  {spaFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#D4A054] text-xs" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/booknow" className="block w-full bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white text-center py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                Book Spa Therapy →
              </Link>
            </div>
          </div>
        )}

        {/* Summer Special Section */}
        {activeService === 'summer' && (
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaSnowflake className="text-4xl animate-pulse" />
                  <div>
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Summer Special</span>
                    <h3 className="text-2xl font-bold mt-1">{summerSpecial.title}</h3>
                  </div>
                </div>
                <p className="text-white/90 mb-4">{summerSpecial.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold">{summerSpecial.price}</span>
                    <span className="text-sm ml-1">for {summerSpecial.duration}</span>
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Limited Time Offer</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-white text-sm" /> Cold Water Hydrotherapy</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-white text-sm" /> Prevents Heat Strokes</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-white text-sm" /> Cooling Down Treatment</div>
                  <div className="flex items-center gap-2"><FaCheckCircle className="text-white text-sm" /> Relaxing & Refreshing</div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FaCalendarCheck className="text-[#D4A054]" /> Special Packages
                  </h3>
                  <div className="space-y-4">
                    {packages.map((pkg, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8B5E3C]/20 to-[#D4A054]/20 flex items-center justify-center" style={{ color: pkg.color }}>
                            {pkg.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{pkg.days}</h4>
                            <p className="text-xs text-green-600">{pkg.savings}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-[#D4A054]">{pkg.price}</span>
                        </div>
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
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
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