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
} from "react-icons/fa";
import { MdAir, MdPets, MdHealthAndSafety } from "react-icons/md";
import { GiHeartBeats, GiDogHouse } from "react-icons/gi";

const BoardingFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      gradient: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      id: 2,
      icon: <FaHome className="text-3xl" />,
      title: "Cage-Free Stay",
      description: "Freedom to roam in our secure, supervised play areas. No cages, just a home-like environment.",
      gradient: "from-green-500 to-teal-500",
      delay: 0.1,
    },
    {
      id: 3,
      icon: <FaWalking className="text-3xl" />,
      title: "Daily Walks & Playtime",
      description: "Structured exercise sessions with professional handlers. Multiple walks and play sessions every day.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.2,
    },
    {
      id: 4,
      icon: <FaUtensils className="text-3xl" />,
      title: "Nutritious Feeding",
      description: "Premium quality meals prepared fresh. Special diets accommodated (vet prescribed, homemade, raw, etc.).",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
    {
      id: 5,
      icon: <MdHealthAndSafety className="text-3xl" />,
      title: "Special Diet Care",
      description: "Individualized meal plans for pets with allergies, medical conditions, or specific dietary requirements.",
      gradient: "from-rose-500 to-orange-500",
      delay: 0.4,
    },
    {
      id: 6,
      icon: <FaVideo className="text-3xl" />,
      title: "24/7 Supervision",
      description: "Trained staff present round the clock. Immediate attention to any needs or emergencies.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.5,
    },
    {
      id: 7,
      icon: <FaShieldAlt className="text-3xl" />,
      title: "CCTV Monitoring",
      description: "Live camera access for pet parents. Watch your furry friend anytime from your smartphone.",
      gradient: "from-gray-700 to-gray-900",
      delay: 0.6,
    },
    {
      id: 8,
      icon: <FaCut className="text-3xl" />,
      title: "Professional Grooming",
      description: "Bath, brushing, nail trimming, ear cleaning, and styling available during stay.",
      gradient: "from-pink-500 to-rose-500",
      delay: 0.7,
    },
    {
      id: 9,
      icon: <MdPets className="text-3xl" />,
      title: "Hygiene Services",
      description: "Regular cleaning, sanitization, and pest control. Fresh bedding and bowls daily.",
      gradient: "from-teal-500 to-emerald-500",
      delay: 0.8,
    },
    {
      id: 10,
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Basic Training",
      description: "Reinforcement of basic commands like sit, stay, come, and leash manners during stay.",
      gradient: "from-yellow-500 to-orange-500",
      delay: 0.9,
    },
    {
      id: 11,
      icon: <GiHeartBeats className="text-3xl" />,
      title: "Socialization Sessions",
      description: "Controlled interaction with other friendly, vaccinated pets to improve social skills.",
      gradient: "from-red-500 to-pink-500",
      delay: 1.0,
    },
    {
      id: 12,
      icon: <FaAmbulance className="text-3xl" />,
      title: "On-Call Veterinary Care",
      description: "24/7 access to licensed veterinarians. Emergency medical attention when needed.",
      gradient: "from-red-600 to-red-800",
      delay: 1.1,
    },
    {
      id: 13,
      icon: <FaCar className="text-3xl" />,
      title: "Home Pick-Up & Drop",
      description: "Doorstep transportation service available. Stress-free travel for your pet.",
      gradient: "from-blue-600 to-indigo-600",
      delay: 1.2,
    },
    {
      id: 14,
      icon: <FaCamera className="text-3xl" />,
      title: "Daily Photo & Video Updates",
      description: "Receive regular updates with pictures and videos of your happy, playing pet.",
      gradient: "from-emerald-500 to-green-600",
      delay: 1.3,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4">
            <FaDog className="text-[#007B7F]" />
            <span className="text-sm font-semibold text-[#007B7F]">Premium Boarding</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Safe & Comfortable
            <span className="text-[#007B7F] block">Overnight Boarding</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Your pet deserves the best care while you're away. Experience luxury boarding with our comprehensive services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${feature.delay}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#007B7F] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <MdAir className="text-[#007B7F] text-2xl" />
              <span className="text-gray-600">Climate Controlled</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-[#007B7F] text-2xl" />
              <span className="text-gray-600">Licensed & Insured</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <FaVideo className="text-[#007B7F] text-2xl" />
              <span className="text-gray-600">24/7 Live Cameras</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <GiHeartBeats className="text-[#007B7F] text-2xl" />
              <span className="text-gray-600">Vet on Call</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button className="bg-gradient-to-r from-[#007B7F] to-[#005C5F] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Book Your Pet's Stay Today
          </button>
          <p className="text-sm text-gray-500 mt-3">
            Limited spots available • Book in advance for peak seasons
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default BoardingFeatures;