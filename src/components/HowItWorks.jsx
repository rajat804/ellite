// src/components/HowItWorks.jsx (With active step functionality)
import React, { useState, useEffect } from 'react';
import { 
  FaCalendarAlt, 
  FaHome, 
  FaHeart, 
  FaPaw, 
  FaArrowRight, 
  FaCheckCircle,
  FaPhoneAlt,
  FaVideo,
  FaSmile,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';
import { MdPets, MdHealthAndSafety, MdVerified } from 'react-icons/md';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1); // ✅ Keep this
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-it-works');
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

  const steps = [
    {
      number: 1,
      icon: <FaCalendarAlt />,
      title: 'Book Online',
      subtitle: 'In Just 30 Seconds',
      description: 'Choose your service, select date & time, and book instantly. No paperwork, no hassle.',
      features: ['Instant Confirmation', 'No Booking Fee', 'Flexible Timing'],
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]'
    },
    {
      number: 2,
      icon: <FaHome />,
      title: 'We Come to You',
      subtitle: 'Pickup or Home Visit',
      description: 'Our professional team arrives at your doorstep. For boarding, we pick up your pet safely.',
      features: ['Free Pickup/Drop', 'Sanitized Vehicle', 'Professional Staff'],
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    {
      number: 3,
      icon: <FaHeart />,
      title: 'Loving Care',
      subtitle: 'Your Pet Stays Happy',
      description: 'Your pet receives premium care, daily updates, and lots of love in a cage-free environment.',
      features: ['Daily Photo/Video', '24/7 Monitoring', 'Vet on Call'],
      color: '#FF7A2F',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    {
      number: 4,
      icon: <FaSmile />,
      title: 'Happy Returns',
      subtitle: 'Peace of Mind',
      description: 'Your pet returns home healthy, happy, and full of new friends. Stress-free experience for you!',
      features: ['Health Report', 'Satisfaction Guarantee', 'Loyalty Points'],
      color: '#6B4E71',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-600'
    }
  ];

  // Get current active step details
  const currentStep = steps.find(step => step.number === activeStep);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#FFF9F0]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4">
            <MdVerified className="text-[#007B7F] text-lg" />
            <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">
              Simple Process
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            How It{' '}
            <span className="relative inline-block">
              Works
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#FFD1B3" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            Simple and clear steps to care for your lovely pet
          </p>
        </div>

        {/* Active Step Indicator Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className="flex-1 text-center group"
              >
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center transition-all ${
                  activeStep === step.number 
                    ? 'bg-[#007B7F] text-white scale-110 shadow-lg' 
                    : 'bg-gray-200 text-gray-500 group-hover:bg-[#007B7F]/30'
                }`}>
                  {step.number}
                </div>
                <p className={`text-xs mt-2 font-medium ${
                  activeStep === step.number ? 'text-[#007B7F]' : 'text-gray-400'
                }`}>
                  {step.title}
                </p>
              </button>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full"></div>
            <div 
              className="absolute top-0 left-0 h-1 bg-[#007B7F] rounded-full transition-all duration-300"
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Active Step Details */}
        {currentStep && (
          <div className="mb-16 p-8 bg-gradient-to-r from-[#007B7F]/5 to-transparent rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className={`${currentStep.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                <div className={`${currentStep.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl`}>
                  {currentStep.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2C3E50]">{currentStep.title}</h3>
                <p className="text-[#007B7F] font-semibold">{currentStep.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{currentStep.description}</p>
            <div className="flex flex-wrap gap-4">
              {currentStep.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#007B7F]" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                activeStep === step.number ? 'ring-2 ring-[#007B7F] shadow-xl' : ''
              } ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
              onClick={() => setActiveStep(step.number)}
              onMouseEnter={() => setActiveStep(step.number)}
            >
              {/* Step Number Badge */}
              <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-lg ${
                activeStep === step.number ? 'bg-[#007B7F]' : 'bg-gray-400'
              }`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={`${step.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`${step.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-md`}>
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2C3E50] mb-1">
                {step.title}
              </h3>
              <p className="text-[#007B7F] text-sm font-semibold mb-3">
                {step.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mt-4 pt-4 border-t border-gray-100">
                {step.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-500">
                    <FaCheckCircle className={`text-xs ${activeStep === step.number ? 'text-[#007B7F]' : 'text-gray-400'}`} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <FaArrowRight className="text-gray-300 text-xl group-hover:text-[#007B7F] transition-colors" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rest of the component remains same */}
        <div className="bg-gradient-to-r from-[#007B7F] to-[#005C5F] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <FaPhoneAlt className="text-[#FFD1B3]" />
                <span className="text-sm font-medium">Need Help? Call Us</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Pet's Stay?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join 17,000+ happy pet parents who trust us with their furry family members. 
                Limited slots available for personalized care.
              </p>
              <div className="flex gap-6 mb-8">
                <div><div className="text-2xl font-bold">15 min</div><div className="text-sm text-white/80">Average Response</div></div>
                <div className="w-px bg-white/30"></div>
                <div><div className="text-2xl font-bold">100%</div><div className="text-sm text-white/80">Satisfaction Rate</div></div>
                <div className="w-px bg-white/30"></div>
                <div><div className="text-2xl font-bold">24/7</div><div className="text-sm text-white/80">Support Available</div></div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#007B7F] px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2">
                  Book Now <FaArrowRight />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                  <FaVideo /> Watch Demo
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaClock />, title: 'Instant Booking', desc: 'Confirm in 30 seconds' },
                { icon: <FaShieldAlt />, title: 'Safe & Secure', desc: 'Background verified' },
                { icon: <FaHeart />, title: 'Loving Care', desc: 'Treated like family' },
                { icon: <MdHealthAndSafety />, title: 'Vet Support', desc: '24/7 emergency care' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                  <p className="text-white/70 text-xs">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: <MdVerified />, text: '15+ Years Experience', color: 'text-[#007B7F]' },
            { icon: <FaHeart />, text: '17,000+ Happy Families', color: 'text-rose-500' },
            { icon: <FaPaw />, text: '10,000+ Boarding Stays', color: 'text-orange-500' },
            { icon: <FaShieldAlt />, text: 'Licensed & Insured', color: 'text-emerald-500' }
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <span className={badge.color}>{badge.icon}</span>
              <span className="text-sm font-medium text-gray-700">{badge.text}</span>
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

export default HowItWorks;