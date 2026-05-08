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
  FaGem,
  FaCoffee,
  FaSwimmer,
  FaTree,
  FaCamera,
  FaUserMd,
  FaClipboardList,
  FaTint,
  FaHeartbeat,
  FaPlay,
  FaCar,
  FaUtensils
} from "react-icons/fa";
import {
  MdPets,
  MdLocalHospital,
  MdVaccines,
  MdEmergency,
  MdFace,
  MdTrain,
  MdPool,
  MdPark,
  MdVideocam,
  MdHealthAndSafety,
  MdCleaningServices
} from "react-icons/md";
import { GiDogHouse, GiMeditation,GiSwimfins  } from "react-icons/gi";

// Import Components
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import BookingForm from "../components/BookingForm"
import { Link } from "react-router-dom";

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
    { id: "all", name: "All Services", icon: <MdPets />, color: "#8B5E3C", count: 16 },
    { id: "boarding", name: "Boarding", icon: <GiDogHouse />, color: "#D4A054", count: 5 },
    { id: "play", name: "Play Hours", icon: <FaPlay />, color: "#D4A054", count: 2 },
    { id: "medical", name: "Medical", icon: <MdLocalHospital />, color: "#6B2E2E", count: 3 },
    { id: "grooming", name: "Grooming", icon: <MdFace />, color: "#D4A054", count: 2 },
    { id: "training", name: "Training", icon: <MdTrain />, color: "#8B5E3C", count: 3 },
  ];

  const services = [
    // Boarding Services
    {
      id: 1,
      category: "boarding",
      icon: <FaDog />,
      title: "Luxury Pet Boarding",
      subtitle: "Second Home for Your Pet",
      description: "Your pet stays in a comfortable, loving environment with premium care, 3 fresh meals daily, and 24/7 supervision.",
      longDescription: "Welcome to Bruno’s Pet Boarding & Cafe — where pets stay happy, safe & loved like family! Our boarding facility provides a home-like atmosphere with experienced caretakers, hygienic environment, and round-the-clock love and care.",
      features: ["3 Fresh Meals Daily", "24/7 Camera Monitoring", "Experienced Caretakers", "Hygienic Facility", "Comfortable Bedding", "24x7 Love & Care"],
      price: "₹800/day",
      originalPrice: "₹1200/day",
      popular: true,
      rating: 4.9,
      reviews: 345,
      duration: "day",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20",
      iconBg: "bg-gradient-to-br from-[#D4A054] to-[#F5C27B]",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
    },
    {
      id: 2,
      category: "boarding",
      icon: <MdPool />,
      title: "Dog Swimming Pool",
      subtitle: "Fun Water Activities",
      description: "Let your dog enjoy a refreshing swim in our safe, clean swimming pool. Great exercise and lots of fun!",
      longDescription: "Our dog swimming pool provides a safe and fun environment for your furry friend to cool off and exercise. Swimming is excellent for joint health, muscle development, and overall fitness.",
      features: ["Safe & Clean Pool", "Temperature Controlled", "Supervised Sessions", "Great Exercise", "Joint Health", "Stress Relief"],
      price: "₹500/session",
      originalPrice: "₹800/session",
      popular: true,
      rating: 4.8,
      reviews: 189,
      duration: "session",
      color: "#06B6D4",
      bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
    },
    {
      id: 3,
      category: "boarding",
      icon: <GiDogHouse />,
      title: "Open Play Ground",
      subtitle: "Freedom to Run & Play",
      description: "Large, secure open playground for dogs to run, play, and socialize with other friendly pets.",
      longDescription: "Our spacious open playground gives your pet the freedom to run, jump, and play in a safe, supervised environment. Perfect for high-energy dogs who need plenty of exercise.",
      features: ["Large Secure Area", "Supervised Play", "Socialization", "Agility Equipment", "Shaded Areas", "Fresh Water"],
      price: "Included with Boarding",
      originalPrice: null,
      popular: true,
      rating: 4.9,
      reviews: 267,
      duration: "free",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800",
    },
    {
      id: 4,
      category: "boarding",
      icon: <FaHome />,
      title: "Comfortable Pet Shelter Huts",
      subtitle: "Cozy & Safe Accommodation",
      description: "Individual pet shelter huts with soft bedding, climate control, and a peaceful environment.",
      longDescription: "Our specially designed pet shelter huts provide a cozy, private space for your pet to rest. Each hut is equipped with soft bedding, temperature control, and regular cleaning.",
      features: ["Individual Huts", "Soft Bedding", "Climate Controlled", "Regular Cleaning", "Private Space", "Stress-Free"],
      price: "Included with Boarding",
      originalPrice: null,
      popular: false,
      rating: 4.8,
      reviews: 156,
      duration: "free",
      color: "#6B2E2E",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
    },
    {
      id: 5,
      category: "boarding",
      icon: <FaCar />,
      title: "Free Pick & Drop Service",
      subtitle: "Doorstep Convenience",
      description: "Complimentary pickup and drop service within 5 KM of Raj Nagar Extension. Stress-free travel for your pet.",
      longDescription: "We offer free pickup and drop service within 5 KM of Raj Nagar Extension. Our sanitized, air-conditioned vehicles ensure your pet travels safely and comfortably.",
      features: ["Free within 5 KM", "Sanitized Vehicle", "AC Transport", "Professional Handlers", "Safe Harness", "Real-time Tracking"],
      price: "Free (within 5 KM)",
      originalPrice: "₹200",
      popular: true,
      rating: 4.9,
      reviews: 423,
      duration: "ride",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-amber-50 to-yellow-50",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500",
      image: "https://images.unsplash.com/photo-1544568100-847a5145851d?w=800",
    },
    // Play Hours Services
    {
      id: 6,
      category: "play",
      icon: <FaPlay />,
      title: "2 Hours Playtime",
      subtitle: "Fun & Exercise",
      description: "Supervised play session with trained handlers. Perfect for socialization and physical activity.",
      longDescription: "Give your dog a fun-filled play session in our open playground. Includes supervised interaction with other friendly dogs, exercise, and lots of fun!",
      features: ["Supervised Play", "Social Interaction", "Physical Exercise", "Trained Handlers", "Fresh Water", "Fun Activities"],
      price: "₹100",
      originalPrice: "₹199",
      popular: true,
      rating: 4.8,
      reviews: 567,
      duration: "2 hours",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800",
    },
    {
      id: 7,
      category: "play",
      icon: <FaCar />,
      title: "Pick & Drop Service",
      subtitle: "Doorstep Transport",
      description: "Convenient pickup and drop service for your pet. Available within 5 KM of Raj Nagar Extension.",
      longDescription: "Can't come to us? No problem! Our pick & drop service brings your pet to us and back home safely. Available within 5 KM radius.",
      features: ["Doorstep Service", "Safe Transport", "AC Vehicle", "Trained Handlers", "Real-time Updates", "Affordable Rates"],
      price: "₹200",
      originalPrice: "₹350",
      popular: false,
      rating: 4.7,
      reviews: 234,
      duration: "ride",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
    },
    // Medical Services
    {
      id: 8,
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
      duration: "visit",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-teal-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-[#8B5E3C] to-[#6B2E2E]",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    },
    {
      id: 9,
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
      duration: "pet",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-[#D4A054] to-[#F5C27B]",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
    },
    {
      id: 10,
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
      color: "#6B2E2E",
      bg: "bg-gradient-to-br from-red-50 to-rose-50",
      iconBg: "bg-gradient-to-br from-red-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    },
    // Grooming Services
    {
      id: 11,
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
      duration: "session",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800",
    },
    {
      id: 12,
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
      duration: "session",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-orange-50 to-amber-50",
      iconBg: "bg-gradient-to-br from-[#8B5E3C] to-[#6B2E2E]",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    },
    // Training Services
    {
      id: 13,
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
      duration: "session",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-indigo-50 to-blue-50",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1587300003387-592e2f1b61e1?w=800",
    },
    {
      id: 14,
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
      duration: "session",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
      iconBg: "bg-gradient-to-br from-yellow-500 to-amber-500",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800",
    },
    {
      id: 15,
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
      duration: "session",
      color: "#6B2E2E",
      bg: "bg-gradient-to-br from-rose-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
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
    <div id="services-page" className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:h-screen xl:max-h-[700px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800)',
              backgroundPosition: 'center 40%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/75 to-[#1A0F0A]/80"></div>
          </div>
        </div>

        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#D4A054] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#D4A054] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className={`text-center text-white transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5 md:mb-6 mx-auto w-fit">
              <FaPaw className="text-[#D4A054] text-[10px] sm:text-xs md:text-sm" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">
                Our Services
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white px-2">
              Your Pet's{' '}
              <span className="block text-[#D4A054] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 sm:mt-2">
                Second Home is Here! ❤️
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              Welcome to Bruno's Pet Boarding & Cafe — where pets stay happy, safe & loved like family!
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#FDF8F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
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
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                  ? "bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md"
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
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${service.popular ? "relative ring-2 ring-[#D4A054]" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10 animate-bounce-slow">
                  <div className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 text-white">
                    <FaStar className="text-[#D4A054]" />
                    <span className="font-semibold">{service.rating}</span>
                    <span className="text-sm">({service.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#8B5E3C] transition-colors">
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

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-[#D4A054]">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  )}
                  <span className="text-xs text-gray-500">/{service.duration}</span>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => openModal(service)} className="flex-1 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm flex items-center justify-center gap-2 group">
                    Book Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button onClick={() => openModal(service)} className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:border-[#D4A054] hover:text-[#D4A054] transition-all text-sm font-medium">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Badge */}
      <div className="text-center pt-4 pb-8">
        <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full">
          <FaGem className="text-[#D4A054] text-sm" />
          <span className="text-xs text-gray-500">✨ Pet Boarding @ ₹800/day • FREE Pick & Drop within 5 KM ✨</span>
          <FaCoffee className="text-[#D4A054] text-sm" />
        </div>
      </div>

      {/* Why Choose Us Banner */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6">🐾 What Your Pet Enjoys 🐾</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <MdPool className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Dog Swimming Pool</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <FaCut className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Grooming Section</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <GiDogHouse className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Open Play Ground</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <FaHome className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Comfortable Pet Shelter Huts</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <FaUtensils className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Freshly Prepared Food - 3 Times Daily</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <FaCamera className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">24/7 Camera Monitoring Access</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <FaUserMd className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Experienced Caretakers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <MdCleaningServices className="text-2xl mx-auto mb-2 text-[#D4A054]" />
              <p className="text-sm font-semibold">Hygienic & Clean Facility</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg font-bold">❤️ 24x7 Love, Care & Supervision ❤️</p>
          </div>
        </div>
      </div>

      {/* Imported Components */}
      <WhyChooseUs />
      <Testimonial />
      <Faq />
       <BookingForm />

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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] text-xs font-bold px-3 py-1 rounded-full">
                  🔥 Most Popular
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{selectedService.title}</h2>
                  <p className="text-gray-500">{selectedService.subtitle}</p>
                </div>
                <div className={`${selectedService.iconBg} w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl`}>
                  {selectedService.icon}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b">
                <div className="flex items-center gap-1">
                  <FaStar className="text-[#D4A054]" />
                  <span className="font-semibold">{selectedService.rating}</span>
                  <span className="text-gray-500">({selectedService.reviews} reviews)</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#D4A054]">{selectedService.price}</span>
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
                      <FaCheckCircle className="text-[#D4A054] text-sm" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Link to={'/booknow'} className="flex-1 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Book Now
                </Link>
                <button onClick={closeModal} className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:border-[#D4A054] hover:text-[#D4A054] transition-all">
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