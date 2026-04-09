// src/pages/ServicesPage.jsx
import React, { useState, useEffect } from "react";
import {
  FaPaw,
  FaArrowRight,
  FaCheckCircle,
  FaDog,
  FaCat,
  FaHome,
  FaBed,
  FaBath,
  FaCut,
  FaBone,
  FaStar,
} from "react-icons/fa";
import {
  MdPets,
  MdLocalHospital,
  MdVaccines,
  MdEmergency,
  MdFace,
  MdTrain,
} from "react-icons/md";
import { GiDogHouse, GiMeditation } from "react-icons/gi";

// Import Components (make sure these files exist)
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-page");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "all", name: "All Services", icon: <MdPets />, color: "#007B7F", count: 12 },
    { id: "boarding", name: "Boarding", icon: <GiDogHouse />, color: "#E67E22", count: 4 },
    { id: "medical", name: "Medical", icon: <MdLocalHospital />, color: "#FF7A2F", count: 3 },
    { id: "grooming", name: "Grooming", icon: <MdFace />, color: "#6B4E71", count: 2 },
    { id: "training", name: "Training", icon: <MdTrain />, color: "#007B7F", count: 3 },
  ];

  const services = [
    // Boarding Services
    {
      id: 1,
      category: "boarding",
      icon: <FaDog />,
      title: "Luxury Dog Boarding",
      subtitle: "Home Away From Home",
      description: "Premium home-based boarding with cage-free environment. Your dog gets individual attention, daily walks, playtime, and lots of love in a real home setting.",
      longDescription: "Our luxury dog boarding service provides a stress-free alternative to traditional kennels. Dogs live in a real home environment with comfortable bedding, climate control, and constant supervision.",
      features: ["100% cage-free environment", "Daily walks (2-3 times)", "Individual attention", "Home-cooked meals", "Regular photo updates", "24/7 supervision"],
      price: "₹500/day",
      originalPrice: "₹699/day",
      popular: true,
      rating: 4.9,
      reviews: 234,
      duration: "per night",
      color: "#E67E22",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
    },
    {
      id: 2,
      category: "boarding",
      icon: <FaCat />,
      title: "Premium Cat Boarding",
      subtitle: "Peaceful Feline Retreat",
      description: "Calm, stress-free cat boarding in a separate quiet area. Complete with climbing structures, window perches, and cozy hiding spots.",
      longDescription: "Cats need a calm environment to feel safe. Our dedicated cat boarding area is separated from dogs to reduce stress.",
      features: ["Separate quiet zone", "Climbing structures", "Window perches", "Litter boxes cleaned 3x daily", "Individual play sessions", "Stress-free environment"],
      price: "₹500/day",
      originalPrice: "₹649/day",
      popular: true,
      rating: 4.8,
      reviews: 189,
      duration: "per night",
      color: "#007B7F",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100",
      iconBg: "bg-gradient-to-br from-[#007B7F] to-[#005C5F]",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800",
    },
    {
      id: 3,
      category: "boarding",
      icon: <FaHome />,
      title: "Vacation Boarding",
      subtitle: "Extended Stay Special",
      description: "Perfect for long vacations or business trips. Special discounts for stays longer than 7 days with additional benefits.",
      longDescription: "Planning a long vacation? Our extended boarding service offers discounted rates and extra care for longer stays.",
      features: ["10% off for 7+ days", "15% off for 14+ days", "Free grooming session", "Priority booking", "Flexible pickup", "Emergency contacts"],
      price: "₹450/day",
      originalPrice: "₹599/day",
      popular: false,
      rating: 4.7,
      reviews: 156,
      duration: "per night",
      color: "#6B4E71",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
    },
    {
      id: 4,
      category: "boarding",
      icon: <FaBed />,
      title: "Medical Boarding",
      subtitle: "Special Needs Care",
      description: "Specialized care for senior pets or those with medical conditions. Administer medications, special diets, and extra attention.",
      longDescription: "Our medical boarding service is designed for pets with special health needs. Our trained staff can administer medications and monitor vital signs.",
      features: ["Medication administration", "Special diet", "Health monitoring", "Vet on call 24/7", "Comfortable bedding", "Extra gentle care"],
      price: "₹699/day",
      originalPrice: "₹849/day",
      popular: false,
      rating: 4.9,
      reviews: 98,
      duration: "per night",
      color: "#FF7A2F",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1544568100-847a5145851d?w=800",
    },
    // Medical Services
    {
      id: 5,
      category: "medical",
      icon: <MdLocalHospital />,
      title: "Vet Home Visit",
      subtitle: "Stress-Free Checkups",
      description: "Professional veterinary care at your doorstep. Complete physical examination, health certificate, and prescription at home.",
      longDescription: "No more stressful car rides to the vet clinic! Our licensed veterinarians come to your home with portable equipment for complete checkups.",
      features: ["Full physical exam", "Health certificate", "Prescription meds", "Follow-up care", "No travel stress", "Same-day appointments"],
      price: "₹999",
      originalPrice: "₹1499",
      popular: true,
      rating: 4.9,
      reviews: 342,
      duration: "per visit",
      color: "#007B7F",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100",
      iconBg: "bg-gradient-to-br from-[#007B7F] to-[#005C5F]",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    },
    {
      id: 6,
      category: "medical",
      icon: <MdVaccines />,
      title: "Vaccination Packages",
      subtitle: "Complete Protection",
      description: "Essential vaccines for puppies and adult dogs. Includes certificate and reminder service for boosters.",
      longDescription: "Keep your pet protected with our comprehensive vaccination packages. All vaccinations are administered by licensed vets.",
      features: ["Core vaccines included", "Booster reminders", "Vaccination certificate", "Digital health record", "Home visit available", "Puppy packages"],
      price: "₹599",
      originalPrice: "₹899",
      popular: true,
      rating: 4.8,
      reviews: 567,
      duration: "per pet",
      color: "#E67E22",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
    },
    {
      id: 7,
      category: "medical",
      icon: <MdEmergency />,
      title: "Emergency Care",
      subtitle: "24/7 Critical Support",
      description: "Round-the-clock emergency veterinary services for critical situations. Immediate medical attention when your pet needs it most.",
      longDescription: "Emergencies don't wait for business hours. Our emergency service is available 24/7 with rapid response teams.",
      features: ["24/7 availability", "Rapid response", "ICU facility", "Emergency surgery", "Critical care", "Payment plans"],
      price: "Call",
      originalPrice: null,
      popular: true,
      rating: 4.9,
      reviews: 234,
      duration: "emergency",
      color: "#FF7A2F",
      bg: "bg-gradient-to-br from-red-50 to-red-100",
      iconBg: "bg-gradient-to-br from-red-500 to-red-600",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    },
    // Grooming Services
    {
      id: 8,
      category: "grooming",
      icon: <FaBath />,
      title: "Professional Grooming",
      subtitle: "Pamper Your Pet",
      description: "Complete grooming package including bath, haircut, nail trimming, ear cleaning, and teeth brushing.",
      longDescription: "Our professional grooming services keep your pet looking and feeling great. We use premium, pet-safe products.",
      features: ["Premium shampoo bath", "Breed-specific haircut", "Nail trimming", "Ear cleaning", "Teeth brushing", "Paw pad trimming"],
      price: "₹799",
      originalPrice: "₹1199",
      popular: true,
      rating: 4.9,
      reviews: 423,
      duration: "per session",
      color: "#6B4E71",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800",
    },
    {
      id: 9,
      category: "grooming",
      icon: <FaCut />,
      title: "Pet Styling",
      subtitle: "Show-Quality Looks",
      description: "Premium styling for special occasions. Creative cuts, color-safe dyes, and accessories for that perfect look.",
      longDescription: "Make your pet the star of any occasion! Our styling service includes creative grooming and breed-standard cuts.",
      features: ["Creative styling", "Breed-standard cuts", "Color-safe dyes", "Bow ties & bandanas", "Pawdicure", "Perfume spritz"],
      price: "₹1299",
      originalPrice: "₹1799",
      popular: false,
      rating: 4.8,
      reviews: 189,
      duration: "per session",
      color: "#FF7A2F",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    },
    // Training Services
    {
      id: 10,
      category: "training",
      icon: <MdTrain />,
      title: "Dog Training",
      subtitle: "Basic to Advanced",
      description: "Professional behavioral training for dogs of all ages. From basic commands to advanced obedience.",
      longDescription: "Our certified trainers use positive reinforcement techniques to teach your dog essential skills.",
      features: ["Basic commands", "Leash training", "Behavior correction", "Socialization", "Advanced commands", "Agility training"],
      price: "₹499",
      originalPrice: "₹749",
      popular: false,
      rating: 4.8,
      reviews: 267,
      duration: "per session",
      color: "#007B7F",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100",
      iconBg: "bg-gradient-to-br from-[#007B7F] to-[#005C5F]",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
    },
    {
      id: 11,
      category: "training",
      icon: <FaBone />,
      title: "Puppy Training",
      subtitle: "Start Right",
      description: "Essential training for puppies including potty training, crate training, bite inhibition, and basic commands.",
      longDescription: "The early months are crucial for your puppy's development. Our puppy training program focuses on essential life skills.",
      features: ["Potty training", "Crate training", "Bite inhibition", "Socialization", "Basic commands", "Puppy play dates"],
      price: "₹449",
      originalPrice: "₹649",
      popular: true,
      rating: 4.9,
      reviews: 423,
      duration: "per session",
      color: "#E67E22",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
    },
    {
      id: 12,
      category: "training",
      icon: <GiMeditation />,
      title: "Behavior Modification",
      subtitle: "Expert Solutions",
      description: "Specialized training for behavioral issues like aggression, separation anxiety, fear, and excessive barking.",
      longDescription: "Our certified behaviorists work with challenging cases using science-based, force-free methods.",
      features: ["Aggression management", "Separation anxiety", "Fear reduction", "Excessive barking", "Destructive behavior", "Custom behavior plan"],
      price: "₹699",
      originalPrice: "₹999",
      popular: false,
      rating: 4.9,
      reviews: 189,
      duration: "per session",
      color: "#6B4E71",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
    },
  ];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((service) => service.category === selectedCategory);

  const openModal = (service) => {
  setSelectedService(service);
  setShowModal(true);
};

useEffect(() => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }
}, [showModal]);

  const closeModal = () => {
    setShowModal(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div id="services-page" className="min-h-screen bg-gradient-to-b from-white to-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#007B7F] to-[#005C5F] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <FaPaw className="text-[#FFD1B3]" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional Pet Care
              <span className="block text-[#FFD1B3]">at Your Doorstep</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive, loving, and professional services tailored to your pet's unique needs
            </p>
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FFF9F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Category Filters */}
      <div className="container mx-auto px-4 md:px-8 -mt-8 relative z-20">
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {categories.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-[#007B7F] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-[#007B7F]/10 hover:text-[#007B7F] shadow-md"
              }`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === category.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${service.popular ? "relative ring-2 ring-[#FFD1B3]" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 animate-bounce-slow">
                  <div className="bg-gradient-to-r from-[#FFD1B3] to-[#FFE4CC] text-[#2C3E50] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-sm">({service.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50] group-hover:text-[#007B7F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500">{service.subtitle}</p>
                  </div>
                  <div className={`${service.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <span key={fIdx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price Section */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#007B7F]">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                  <span className="text-xs text-gray-500">/{service.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button onClick={() => openModal(service)} className="flex-1 bg-[#007B7F] text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 text-sm flex items-center justify-center gap-2 group">
                    Book Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => openModal(service)} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:border-[#007B7F] hover:text-[#007B7F] transition-all text-sm font-medium">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Imported Components */}
      <WhyChooseUs />
      <Testimonial />
      <Faq />
      <Cta />

      {/* Service Details Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-64 object-cover rounded-t-2xl" />
              <button onClick={closeModal} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all">
                ✕
              </button>
              {selectedService.popular && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#FFD1B3] to-[#FFE4CC] text-[#2C3E50] text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Most Popular
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50]">{selectedService.title}</h2>
                  <p className="text-gray-500">{selectedService.subtitle}</p>
                </div>
                <div className={`${selectedService.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl`}>
                  {selectedService.icon}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold">{selectedService.rating}</span>
                  <span className="text-gray-500">({selectedService.reviews} reviews)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#007B7F]">{selectedService.price}</span>
                  {selectedService.originalPrice && (
                    <span className="text-gray-400 line-through">{selectedService.originalPrice}</span>
                  )}
                  <span className="text-gray-500">/{selectedService.duration}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.longDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#007B7F] text-sm" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-[#007B7F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007B7F]/80 transition-all">
                  Book Now
                </button>
                <button onClick={closeModal} className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:border-[#007B7F] hover:text-[#007B7F] transition-all">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-up { animation: scale-up 0.3s ease-out; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;