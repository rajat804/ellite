// src/components/PetServices.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaShieldAlt, 
  FaClock, 
  FaArrowRight,
  FaCheckCircle,
  FaHome,
  FaSyringe,
  FaAmbulance,
  FaBone,
  FaDog,
  FaCat,
  FaBath,
  FaCut,
  FaBed,
  FaVideo
} from 'react-icons/fa';
import { 
  MdPets, 
  MdHealthAndSafety, 
  MdVaccines, 
  MdLocalHospital,
  MdEmergency,
  MdFace,
  MdRestaurant,
  MdTrain
} from 'react-icons/md';
import { GiDogHouse, GiCat, GiMeditation } from 'react-icons/gi';

const PetServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('pet-services');
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

  const categories = [
    { id: 'all', name: 'All Services', icon: <MdPets />, color: '#007B7F' },
    { id: 'boarding', name: 'Boarding', icon: <GiDogHouse />, color: '#E67E22' },
    { id: 'medical', name: 'Medical', icon: <MdLocalHospital />, color: '#FF7A2F' },
    { id: 'grooming', name: 'Grooming', icon: <MdFace  />, color: '#6B4E71' },
    { id: 'training', name: 'Training', icon: <MdTrain />, color: '#007B7F' }
  ];

  const services = [
    // Boarding Services
    {
      id: 1,
      category: 'boarding',
      icon: <FaDog />,
      title: 'Dog Boarding',
      description: 'Luxury home-based boarding with cage-free environment. Your dog gets individual attention, daily walks, and lots of playtime.',
      features: ['Cage-free environment', 'Daily walks', 'Home-like atmosphere', '24/7 supervision'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    {
      id: 2,
      category: 'boarding',
      icon: <FaCat />,
      title: 'Cat Boarding',
      description: 'Premium cat boarding in a calm, stress-free environment. Separate quiet area for feline friends with climbing structures.',
      features: ['Cage-free roaming', 'Quiet environment', 'Scratching posts', 'Window perches'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]'
    },
    {
      id: 3,
      category: 'boarding',
      icon: <FaHome />,
      title: 'Vacation Boarding',
      description: 'Extended stay boarding for when you travel. Perfect for vacations, business trips, or family emergencies.',
      features: ['Long-term discounts', 'Regular updates', 'Emergency contacts', 'Flexible pickup'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#6B4E71',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-600'
    },
    // Medical Services
    {
      id: 4,
      category: 'medical',
      icon: <MdLocalHospital />,
      title: 'Vet Home Visit',
      description: 'Professional veterinary care at your doorstep. No travel stress for your pet, complete checkup at home.',
      features: ['Full physical exam', 'Health certificate', 'Prescription', 'Follow-up care'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]'
    },
    {
      id: 5,
      category: 'medical',
      icon: <MdVaccines />,
      title: 'Vaccinations',
      description: 'Complete vaccination packages for puppies and adult dogs. Keep your pet protected from diseases.',
      features: ['Core vaccines', 'Booster shots', 'Vaccination certificate', 'Reminder service'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#FF7A2F',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    {
      id: 6,
      category: 'medical',
      icon: <MdEmergency />,
      title: 'Emergency Care',
      description: '24/7 emergency veterinary services. Immediate medical attention for critical situations.',
      features: ['24/7 availability', 'ICU facility', 'Emergency surgery', 'Critical care'],
      price: 'Call for quote',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    // Grooming Services
    {
      id: 7,
      category: 'grooming',
      icon: <FaBath />,
      title: 'Pet Grooming',
      description: 'Professional grooming services including bath, haircut, nail trimming, and ear cleaning.',
      features: ['Medicated bath', 'Hair styling', 'Nail cutting', 'Ear cleaning'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#6B4E71',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-600'
    },
    {
      id: 8,
      category: 'grooming',
      icon: <FaCut />,
      title: 'Pet Styling',
      description: 'Premium styling services for special occasions. Make your pet look their best!',
      features: ['Creative styling', 'Breed-specific cuts', 'Color safe dyes', 'Accessories'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#FF7A2F',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    },
    // Training Services
    {
      id: 9,
      category: 'training',
      icon: <MdTrain />,
      title: 'Dog Training',
      description: 'Professional behavioral training for dogs of all ages. Basic obedience to advanced commands.',
      features: ['Basic commands', 'Behavior correction', 'Socialization', 'Agility training'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]'
    },
    {
      id: 10,
      category: 'training',
      icon: <FaBone />,
      title: 'Puppy Training',
      description: 'Specialized training for puppies including potty training, crate training, and basic obedience.',
      features: ['Potty training', 'Crate training', 'Socialization', 'Bite inhibition'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const serviceHighlights = [
    { icon: <FaClock />, title: 'Same-Day Booking', desc: 'Get service within 24 hours' },
    { icon: <FaHome />, title: 'Doorstep Service', desc: 'We come to your home' },
    { icon: <FaHeart />, title: 'Loving Care', desc: 'Trained professionals' },
    { icon: <FaShieldAlt />, title: 'Safe & Secure', desc: 'Background verified' }
  ];

  return (
    <section id="pet-services" className="py-20 md:py-28 bg-[#FFF9F0]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4">
            <FaPaw className="text-[#007B7F] text-lg" />
            <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            All Pet Services{' '}
            <span className="relative inline-block">
              at Your Doorstep
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#FFD1B3" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            Comprehensive pet care solutions delivered to your home with love and professionalism
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {serviceHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-[#007B7F] text-2xl mb-2">{highlight.icon}</div>
              <h4 className="font-bold text-[#2C3E50] text-sm">{highlight.title}</h4>
              <p className="text-gray-500 text-xs">{highlight.desc}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#007B7F] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-[#007B7F]/10 hover:text-[#007B7F]'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } ${service.popular ? 'relative ring-2 ring-[#FFD1B3]' : ''}`}
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#FFD1B3] text-[#2C3E50] text-xs font-bold px-3 py-1 rounded-full">
                    🔥 Popular
                  </div>
                </div>
              )}

              {/* Service Header */}
              <div className={`${service.bg} p-6 relative overflow-hidden`}>
                <div className="flex items-center gap-4">
                  <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50]">{service.title}</h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: service.color }}>
                      Starting at {service.price}
                    </p>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>

              {/* Service Body */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#007B7F] text-xs" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-[#007B7F] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 text-sm flex items-center justify-center gap-2">
                    Book Now <FaArrowRight className="text-xs" />
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-[#007B7F] hover:text-[#007B7F] transition-all text-sm">
                    Details
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#007B7F]/5 to-transparent pointer-events-none"></div>
              )}
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

export default PetServices;