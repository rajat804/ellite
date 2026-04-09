// src/components/TestimonialSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaChevronLeft, 
  FaChevronRight,
  FaHeart,
  FaTwitter,
  FaFacebook,
  FaLinkedin
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonial-section');
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

  const testimonials = [
    {
      id: 1,
      name: "Ritika Sharma",
      location: "Gurgaon",
      petName: "Bruno (Golden Retriever)",
      text: "The boarding service was amazing! My dog came back happy and healthier than ever. The daily updates on WhatsApp gave me so much peace of mind while I was traveling. Highly recommended!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      date: "March 15, 2024",
      service: "Dog Boarding"
    },
    {
      id: 2,
      name: "Arjun Mehta",
      location: "Delhi",
      petName: "Kitty (Persian Cat)",
      text: "Professional vet home visit service. No more stressful car rides to the clinic for my anxious cat. The vet was knowledgeable, gentle, and thorough. Best decision ever!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      date: "March 10, 2024",
      service: "Vet Home Visit"
    },
    {
      id: 3,
      name: "Priya Singh",
      location: "Noida",
      petName: "Max (Labrador)",
      text: "Best grooming service in town! My dog looks absolutely gorgeous. The staff is so caring and professional. They handled my energetic dog with so much patience.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      date: "March 5, 2024",
      service: "Pet Grooming"
    },
    {
      id: 4,
      name: "Vikram Malhotra",
      location: "Faridabad",
      petName: "Bella (Beagle)",
      text: "The training sessions transformed my hyperactive Beagle into a well-behaved dog. The trainer used positive reinforcement techniques. Worth every penny!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      date: "February 28, 2024",
      service: "Dog Training"
    },
    {
      id: 5,
      name: "Neha Gupta",
      location: "Ghaziabad",
      petName: "Oreo (Shih Tzu)",
      text: "Amazing experience with pet boarding. They treated my dog like their own. The facility is clean, and the staff sends regular updates. Will definitely book again!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      date: "February 20, 2024",
      service: "Dog Boarding"
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      location: "Gurgaon",
      petName: "Charlie (Pug)",
      text: "Emergency vet service saved my pug's life. Quick response time and excellent care. The vet came within 30 minutes. Highly professional team!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      date: "February 15, 2024",
      service: "Emergency Care"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getVisibleTestimonials = () => {
    const itemsPerPage = 3;
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const stats = [
    { number: "500+", label: "5-Star Reviews", icon: <FaStar className="text-yellow-400" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <FaHeart className="text-rose-500" /> },
    { number: "4.9", label: "Google Rating", icon: <MdVerified className="text-[#007B7F]" /> }
  ];

  return (
    <section id="testimonial-section" className="py-20 md:py-28 bg-gradient-to-br from-[#007B7F] to-[#005C5F] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center text-white mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <FaQuoteLeft className="text-[#FFD1B3] text-lg" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Pet Parents{' '}
            <span className="relative inline-block">
              Say
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#FFD1B3" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-white/90 text-lg">
            Real stories from our happy customers and their furry friends
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className={`mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-[#007B7F]/20 text-4xl mb-4 group-hover:text-[#007B7F]/40 transition-all" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#2C3E50]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Pet & Service Info */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                  <span className="text-xs bg-[#007B7F]/10 text-[#007B7F] px-2 py-1 rounded-full">
                    🐾 {testimonial.petName}
                  </span>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-400">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all hover:scale-110"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-[#FFD1B3] w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all hover:scale-110"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Trust Badges */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { text: "17,000+ Happy Families", icon: "🐾" },
            { text: "10,000+ Boarding Stays", icon: "🏠" },
            { text: "15+ Years Experience", icon: "⭐" },
            { text: "24/7 Support", icon: "🕐" }
          ].map((badge, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <span>{badge.icon}</span>
              <span className="text-white text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;