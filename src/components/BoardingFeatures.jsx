// src/components/BoardingFeatures.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  FaDog,
  FaWalking,
  FaUtensils,
  FaVideo,
  FaCut,
  FaGraduationCap,
  FaAmbulance,
  FaCar,
  FaCamera,
  FaSnowflake,
  FaHome,
  FaShieldAlt,
  FaBath,
  FaHeart,
  FaCheckCircle,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { MdAir, MdPets, MdHealthAndSafety, MdCleaningServices } from "react-icons/md";
import { GiHeartBeats, GiDogHouse, GiPawHeart } from "react-icons/gi";
import { Link } from "react-router-dom";

const BoardingFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
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



  const features = [
    {
      id: 1,
      icon: <GiDogHouse className="text-3xl" />,
      title: "Spacious Air-Conditioned Kennels",
      description: "Premium climate-controlled kennels with soft bedding and ample space for your pet to relax comfortably.",
      gradient: "from-[#8B5E3C] to-[#A0714F]",
      delay: 0,
    },
    {
      id: 2,
      icon: <FaHome className="text-3xl" />,
      title: "Cage-Free Stay",
      description: "Freedom to roam in our secure, supervised play areas. No cages, just a home-like environment.",
      gradient: "from-[#D4A054] to-[#B8860B]",
      delay: 0.1,
    },
    {
      id: 3,
      icon: <FaWalking className="text-3xl" />,
      title: "Daily Walks & Playtime",
      description: "Structured exercise sessions with professional handlers. Multiple walks and play sessions every day.",
      gradient: "from-[#6B2E2E] to-[#4A3728]",
      delay: 0.2,
    },
    {
      id: 4,
      icon: <FaUtensils className="text-3xl" />,
      title: "Nutritious Feeding",
      description: "Premium quality meals prepared fresh. Special diets accommodated (vet prescribed, homemade, raw, etc.).",
      gradient: "from-[#8B5E3C] to-[#D4A054]",
      delay: 0.3,
    },
    {
      id: 5,
      icon: <MdHealthAndSafety className="text-3xl" />,
      title: "Special Diet Care",
      description: "Individualized meal plans for pets with allergies, medical conditions, or specific dietary requirements.",
      gradient: "from-[#D4A054] to-[#F5C27B]",
      delay: 0.4,
    },
    {
      id: 6,
      icon: <FaVideo className="text-3xl" />,
      title: "24/7 Supervision",
      description: "Trained staff present round the clock. Immediate attention to any needs or emergencies.",
      gradient: "from-[#6B2E2E] to-[#8B5E3C]",
      delay: 0.5,
    },
    {
      id: 7,
      icon: <FaShieldAlt className="text-3xl" />,
      title: "CCTV Monitoring",
      description: "Live camera access for pet parents. Watch your furry friend anytime from your smartphone.",
      gradient: "from-[#4A3728] to-[#2C1810]",
      delay: 0.6,
    },
    {
      id: 8,
      icon: <FaCut className="text-3xl" />,
      title: "Professional Grooming",
      description: "Bath, brushing, nail trimming, ear cleaning, and styling available during stay.",
      gradient: "from-[#D4A054] to-[#B8860B]",
      delay: 0.7,
    },
    {
      id: 9,
      icon: <MdPets className="text-3xl" />,
      title: "Hygiene Services",
      description: "Regular cleaning, sanitization, and pest control. Fresh bedding and bowls daily.",
      gradient: "from-[#8B5E3C] to-[#6B2E2E]",
      delay: 0.8,
    },
    {
      id: 10,
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Basic Training",
      description: "Reinforcement of basic commands like sit, stay, come, and leash manners during stay.",
      gradient: "from-[#D4A054] to-[#F5C27B]",
      delay: 0.9,
    },
    {
      id: 11,
      icon: <GiHeartBeats className="text-3xl" />,
      title: "Socialization Sessions",
      description: "Controlled interaction with other friendly, vaccinated pets to improve social skills.",
      gradient: "from-[#6B2E2E] to-[#8B5E3C]",
      delay: 1.0,
    },
    {
      id: 12,
      icon: <FaAmbulance className="text-3xl" />,
      title: "On-Call Veterinary Care",
      description: "24/7 access to licensed veterinarians. Emergency medical attention when needed.",
      gradient: "from-[#4A3728] to-[#2C1810]",
      delay: 1.1,
    },
    {
      id: 13,
      icon: <FaCar className="text-3xl" />,
      title: "Home Pick-Up & Drop",
      description: "Doorstep transportation service available. Stress-free travel for your pet.",
      gradient: "from-[#8B5E3C] to-[#D4A054]",
      delay: 1.2,
    },
    {
      id: 14,
      icon: <FaCamera className="text-3xl" />,
      title: "Daily Photo & Video Updates",
      description: "Receive regular updates with pictures and videos of your happy, playing pet.",
      gradient: "from-[#D4A054] to-[#F5C27B]",
      delay: 1.3,
    },
  ];
  // Check screen size for responsive show more
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const displayedFeatures = isMobile && !showAllFeatures ? features.slice(0, 4) : features;
  const groomingServices = [
    { icon: <FaBath />, title: "Bath & Drying", price: "₹299", description: "Premium shampoo bath with gentle drying", gradient: "from-[#8B5E3C] to-[#A0714F]" },
    { icon: <FaCut />, title: "Basic Brushing", price: "₹149", description: "Thorough brushing to remove loose fur", gradient: "from-[#D4A054] to-[#B8860B]" },
    { icon: <MdCleaningServices />, title: "Hygiene Cleaning", price: "₹199", description: "Ear cleaning, nail trimming, paw care", gradient: "from-[#6B2E2E] to-[#4A3728]" }
  ];

  // Listen for window resize to reset show more state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowAllFeatures(true);
      } else if (!showAllFeatures) {
        // Keep as is on mobile
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleShowAll = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-[#FDF8F0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <FaDog className="text-[#8B5E3C]" />
            <span className="text-sm font-semibold text-[#8B5E3C]">Premium Boarding</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Safe & Comfortable
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent block">Overnight Boarding</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Your pet deserves the best care while you're away. Experience luxury boarding with our comprehensive services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${feature.delay}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#8B5E3C] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button - Only on Mobile */}
        {isMobile && features.length > 4 && (
          <div className="flex justify-center mb-12">
            <button
              onClick={toggleShowAll}
              className="group flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
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
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400">
              Showing 4 of {features.length} premium features
            </p>
            <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto mt-2">
              <div className="w-1/3 h-1 bg-[#D4A054] rounded-full"></div>
            </div>
          </div>
        )}

        {/* Grooming Services Section */}
        <div className={`mb-12 sm:mb-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/10 to-[#F5C27B]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 mx-auto w-fit">
              <FaCut className="text-[#D4A054] text-sm sm:text-base" />
              <span className="text-xs sm:text-sm font-semibold text-[#D4A054]">Optional Add-On</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">
              Grooming{' '}
              <span className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] bg-clip-text text-transparent">Services</span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg px-4 sm:px-0">
              Keep Your Pet Clean & Happy — We offer basic grooming services to keep your dog fresh and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {groomingServices.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{service.title}</h4>
                <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">{service.description}</p>
                <p className="text-xl sm:text-2xl font-bold text-[#D4A054] mb-2 sm:mb-3">{service.price}</p>
                <Link
                  to={'/booknow'}
                  className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white py-1.5 sm:py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Add to Booking <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className={`mt-8 pt-8 border-t border-gray-200 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
            <div className="flex items-center gap-2">
              <MdAir className="text-[#8B5E3C] text-xl md:text-2xl" />
              <span className="text-gray-600 text-sm md:text-base">Climate Controlled</span>
            </div>
            <div className="w-px h-4 md:h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#8B5E3C] text-xl md:text-2xl" />
              <span className="text-gray-600 text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="w-px h-4 md:h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <FaVideo className="text-[#8B5E3C] text-xl md:text-2xl" />
              <span className="text-gray-600 text-sm md:text-base">24/7 Live Cameras</span>
            </div>
            <div className="w-px h-4 md:h-6 bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <GiHeartBeats className="text-[#8B5E3C] text-xl md:text-2xl" />
              <span className="text-gray-600 text-sm md:text-base">Vet on Call</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link to="/book-now" className="inline-block bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base">
            Book Your Pet's Stay Today
          </Link>
          <p className="text-xs md:text-sm text-gray-500 mt-3">
            Limited spots available • Book in advance for peak seasons
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default BoardingFeatures;