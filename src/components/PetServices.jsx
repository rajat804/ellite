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
  FaVideo,
  FaTimes,
  FaRupeeSign,
  FaCalendarAlt,
  FaUserCheck,
  FaInfoCircle,
  FaGift
} from 'react-icons/fa';
import { 
  MdPets, 
  MdHealthAndSafety, 
  MdVaccines, 
  MdLocalHospital,
  MdEmergency,
  MdFace,
  MdRestaurant,
  MdTrain,
  MdAccessTime,
  MdLocationOn
} from 'react-icons/md';
import { GiDogHouse, GiCat, GiMeditation } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const PetServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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

  // Modal handlers - Fixed overflow issue
  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    // Safe way to prevent body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    // Safe way to restore body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  };

  // Handle book now navigation from modal
  const handleBookNow = () => {
    closeModal(); // Close modal first
    // Navigate to booknow page with service data
    navigate('/booknow');
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    };
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
      fullDescription: 'Experience the best care for your furry friend with our premium dog boarding service. We provide a home-like atmosphere where your dog can feel comfortable and loved. Our cage-free environment allows dogs to roam freely and socialize with other friendly dogs under supervised conditions.',
      features: ['Cage-free environment', 'Daily walks', 'Home-like atmosphere', '24/7 supervision'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500',
      duration: 'Flexible (Daily/Weekly/Monthly)',
      includes: ['Premium food', 'Comfortable bedding', 'Daily playtime', 'Regular health check', 'Photo updates'],
      requirements: ['Vaccination records', 'No aggressive behavior', 'Flea/tick treated']
    },
    {
      id: 2,
      category: 'boarding',
      icon: <FaCat />,
      title: 'Cat Boarding',
      description: 'Premium cat boarding in a calm, stress-free environment. Separate quiet area for feline friends with climbing structures.',
      fullDescription: 'Our cat boarding service offers a peaceful, stress-free environment specifically designed for feline friends. We understand that cats need quiet spaces and vertical territories. Our facility includes climbing structures, cozy hideaways, and window perches for entertainment.',
      features: ['Cage-free roaming', 'Quiet environment', 'Scratching posts', 'Window perches'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]',
      duration: 'Flexible (Daily/Weekly/Monthly)',
      includes: ['Premium cat food', 'Litter box', 'Comfortable beds', 'Interactive toys', 'Daily updates'],
      requirements: ['Vaccination records', 'Litter trained', 'Healthy condition']
    },
    {
      id: 3,
      category: 'boarding',
      icon: <FaHome />,
      title: 'Vacation Boarding',
      description: 'Extended stay boarding for when you travel. Perfect for vacations, business trips, or family emergencies.',
      fullDescription: 'Planning a long vacation or business trip? Our extended stay boarding service ensures your pet receives consistent care and attention throughout your absence. We provide regular updates, video calls, and emergency contact options for peace of mind.',
      features: ['Long-term discounts', 'Regular updates', 'Emergency contacts', 'Flexible pickup'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#6B4E71',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-600',
      duration: '7+ days',
      includes: ['All basic amenities', 'Weekly photo reports', 'Video call option', 'Emergency vet access', 'Free pickup/drop for 14+ days'],
      requirements: ['Complete medical history', 'Emergency contact', 'Advance booking required']
    },
    // Medical Services
    {
      id: 4,
      category: 'medical',
      icon: <MdLocalHospital />,
      title: 'Vet Home Visit',
      description: 'Professional veterinary care at your doorstep. No travel stress for your pet, complete checkup at home.',
      fullDescription: 'Skip the stressful clinic visits! Our experienced veterinarians come to your home for complete pet checkups. This service is perfect for anxious pets, multiple pets, or when you simply prefer the convenience of home care.',
      features: ['Full physical exam', 'Health certificate', 'Prescription', 'Follow-up care'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]',
      duration: '45-60 mins per visit',
      includes: ['Complete examination', 'Vaccination administration', 'Health certificate', 'Medical advice', 'Follow-up schedule'],
      requirements: ['Pet medical history', 'List of current medications', 'Previous reports if any']
    },
    {
      id: 5,
      category: 'medical',
      icon: <MdVaccines />,
      title: 'Vaccinations',
      description: 'Complete vaccination packages for puppies and adult dogs. Keep your pet protected from diseases.',
      fullDescription: 'Protect your furry friend from preventable diseases with our comprehensive vaccination packages. We follow international protocols and use only WHO-approved vaccines. Our reminder service ensures your pet never misses a booster shot.',
      features: ['Core vaccines', 'Booster shots', 'Vaccination certificate', 'Reminder service'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#FF7A2F',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500',
      duration: '30 mins per session',
      includes: ['All core vaccines', 'Vaccination certificate', 'Digital records', 'Booster reminders', 'Post-vaccine care instructions'],
      requirements: ['Pet should be healthy', 'No fever', 'Deworming done']
    },
    {
      id: 6,
      category: 'medical',
      icon: <MdEmergency />,
      title: 'Emergency Care',
      description: '24/7 emergency veterinary services. Immediate medical attention for critical situations.',
      fullDescription: 'Emergencies don\'t wait, and neither do we. Our 24/7 emergency veterinary service ensures your pet gets immediate medical attention when they need it most. Our team is always ready to handle critical situations with expertise and compassion.',
      features: ['24/7 availability', 'ICU facility', 'Emergency surgery', 'Critical care'],
      price: 'Call for quote',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500',
      duration: 'Immediate response',
      includes: ['Emergency consultation', 'First aid', 'Emergency medication', 'Referral if needed', '24/7 phone support'],
      requirements: ['Call emergency helpline first', 'Pet\'s medical history ready', 'Previous vet details']
    },
    // Grooming Services
    {
      id: 7,
      category: 'grooming',
      icon: <FaBath />,
      title: 'Pet Grooming',
      description: 'Professional grooming services including bath, haircut, nail trimming, and ear cleaning.',
      fullDescription: 'Keep your pet looking and feeling great with our professional grooming services. Our trained groomers use pet-safe products and gentle techniques to ensure a stress-free grooming experience. Regular grooming promotes healthy skin and coat.',
      features: ['Medicated bath', 'Hair styling', 'Nail cutting', 'Ear cleaning'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#6B4E71',
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-600',
      duration: '60-90 mins',
      includes: ['Full bath', 'Breed-specific haircut', 'Nail trimming', 'Ear cleaning', 'Teeth brushing', 'Paw massage'],
      requirements: ['Pet should be calm', 'No open wounds', 'Vaccination records']
    },
    {
      id: 8,
      category: 'grooming',
      icon: <FaCut />,
      title: 'Pet Styling',
      description: 'Premium styling services for special occasions. Make your pet look their best!',
      fullDescription: 'Make your pet the star of any occasion with our premium styling services. Perfect for birthdays, weddings, festivals, or photoshoots. Our creative groomers can create unique looks while ensuring your pet\'s comfort and safety.',
      features: ['Creative styling', 'Breed-specific cuts', 'Color safe dyes', 'Accessories'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#FF7A2F',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500',
      duration: '90-120 mins',
      includes: ['Creative grooming', 'Pet-safe color', 'Stylish accessories', 'Photoshoot ready', 'Spa treatment'],
      requirements: ['Advance booking', 'Pet should be well-groomed', 'No skin conditions']
    },
    // Training Services
    {
      id: 9,
      category: 'training',
      icon: <MdTrain />,
      title: 'Dog Training',
      description: 'Professional behavioral training for dogs of all ages. Basic obedience to advanced commands.',
      fullDescription: 'Transform your dog\'s behavior with our professional training programs. Using positive reinforcement techniques, our certified trainers work on obedience, behavior modification, and advanced commands. Suitable for dogs of all ages and breeds.',
      features: ['Basic commands', 'Behavior correction', 'Socialization', 'Agility training'],
      price: '₹800/day & ₹1000/night',
      popular: false,
      color: '#007B7F',
      bg: 'bg-[#007B7F]/10',
      iconBg: 'bg-[#007B7F]',
      duration: '4-8 weeks program',
      includes: ['Assessment session', 'Customized training plan', 'Weekly sessions', 'Take-home exercises', 'Progress reports'],
      requirements: ['Minimum 4 months old', 'Vaccinated', 'No aggressive history']
    },
    {
      id: 10,
      category: 'training',
      icon: <FaBone />,
      title: 'Puppy Training',
      description: 'Specialized training for puppies including potty training, crate training, and basic obedience.',
      fullDescription: 'Start your puppy off on the right paw! Our puppy training program focuses on essential life skills including house training, socialization, and basic manners. Early training prevents behavioral issues and builds a strong bond between you and your puppy.',
      features: ['Potty training', 'Crate training', 'Socialization', 'Bite inhibition'],
      price: '₹800/day & ₹1000/night',
      popular: true,
      color: '#E67E22',
      bg: 'bg-orange-100',
      iconBg: 'bg-orange-500',
      duration: '6 weeks program',
      includes: ['Puppy assessment', 'Potty training guide', 'Socialization sessions', 'Basic commands', 'Parent coaching'],
      requirements: ['8-16 weeks old', 'First vaccination done', 'Healthy condition']
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

  // Modal Component
  const ServiceModal = () => {
    if (!isModalOpen || !selectedService) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto" onClick={closeModal}>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
        
        {/* Modal Container */}
        <div className="flex min-h-full items-center justify-center p-4">
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all"
            >
              <FaTimes className="text-gray-500 hover:text-red-500" />
            </button>

            {/* Modal Header */}
            <div className={`${selectedService.bg} p-6 md:p-8 relative`}>
              <div className="flex items-center gap-4">
                <div className={`${selectedService.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}>
                  {selectedService.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50]">{selectedService.title}</h2>
                  <p className="text-sm font-semibold mt-1" style={{ color: selectedService.color }}>
                    Starting at {selectedService.price}
                  </p>
                  {selectedService.popular && (
                    <span className="inline-block mt-2 bg-[#FFD1B3] text-[#2C3E50] text-xs font-bold px-3 py-1 rounded-full">
                      🔥 Popular Service
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              {/* Full Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-2 flex items-center gap-2">
                  <FaInfoCircle className="text-[#007B7F]" />
                  About This Service
                </h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.fullDescription}</p>
              </div>

              {/* Key Information Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MdAccessTime className="text-[#007B7F]" />
                    <h4 className="font-semibold text-[#2C3E50]">Duration</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{selectedService.duration || 'Flexible'}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRupeeSign className="text-[#007B7F]" />
                    <h4 className="font-semibold text-[#2C3E50]">Pricing</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{selectedService.price}</p>
                </div>
              </div>

              {/* Features Included */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Features & Benefits
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#007B7F] text-sm" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              {selectedService.includes && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3 flex items-center gap-2">
                    <FaGift className="text-[#FF7A2F]" />
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <FaHeart className="text-[#FF7A2F] text-sm" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {selectedService.requirements && (
                <div className="mb-6 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3 flex items-center gap-2">
                    <FaShieldAlt className="text-yellow-600" />
                    Requirements
                  </h3>
                  <ul className="space-y-1">
                    {selectedService.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-yellow-600">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleBookNow()}
                  className="flex-1 bg-[#007B7F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  Book Now <FaArrowRight />
                </button>
                <button 
                  onClick={closeModal}
                  className="flex-1 border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-xl font-semibold hover:border-[#007B7F] hover:text-[#007B7F] transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
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
                    {service.features.slice(0, 3).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-500">
                        <FaCheckCircle className="text-[#007B7F] text-xs" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-[#007B7F] ml-5">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button 
                      onClick={() => handleBookNow()}
                      className="flex-1 bg-[#007B7F] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 text-sm flex items-center justify-center gap-2"
                    >
                      Book Now <FaArrowRight className="text-xs" />
                    </button>
                    <button 
                      onClick={() => openModal(service)}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:border-[#007B7F] hover:text-[#007B7F] transition-all text-sm"
                    >
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
      </section>

      {/* Service Modal */}
      <ServiceModal />

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
    </>
  );
};

export default PetServices;