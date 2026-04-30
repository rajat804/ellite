// src/pages/AboutPage.jsx
import React, { useState, useEffect } from "react";
import {
  FaPaw,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaDog,
  FaCat,
  FaStar,
  FaQuoteLeft,
  FaUsers,
  FaTrophy,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlay,
  FaRocket,
  FaGlobe,
  FaGem,
  FaCoffee
} from "react-icons/fa";
import { MdVerified, MdLocalHospital, MdEmojiEmotions } from "react-icons/md";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Cta from "../components/BookingForm";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const [counterValues, setCounterValues] = useState({
    years: 0,
    families: 0,
    stays: 0,
    rating: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-page");
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      const targets = { years: 15, families: 17, stays: 10, rating: 49 };
      const duration = 2500;
      const stepTime = 20;
      const steps = duration / stepTime;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setCounterValues({
          years: Math.min(
            targets.years,
            Math.floor((currentStep / steps) * targets.years),
          ),
          families: Math.min(
            targets.families,
            Math.floor((currentStep / steps) * targets.families),
          ),
          stays: Math.min(
            targets.stays,
            Math.floor((currentStep / steps) * targets.stays),
          ),
          rating: Math.min(
            targets.rating,
            Math.floor((currentStep / steps) * targets.rating),
          ),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Lead Veterinarian",
      experience: "12+ years",
      specialty: "Small Animal Medicine",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Every pet deserves the best medical care",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Boarding",
      experience: "8+ years",
      specialty: "Pet Behavior",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "Creating a home away from home",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Senior Groomer",
      experience: "10+ years",
      specialty: "Creative Styling",
      image: "https://randomuser.me/api/portraits/women/46.jpg",
      quote: "Making pets look and feel beautiful",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      role: "Pet Trainer",
      experience: "15+ years",
      specialty: "Behavior Modification",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      quote: "Positive reinforcement for happy pets",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
  ];

  const values = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Compassion",
      desc: "We treat every pet with the same love and care as our own",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safety First",
      desc: "Highest safety standards with 24/7 monitoring",
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-[#8B5E3C]/10 to-[#A0714F]/20",
    },
    {
      icon: <MdVerified className="text-3xl" />,
      title: "Trust & Integrity",
      desc: "Transparent practices and honest communication",
      color: "#D4A054",
      bg: "bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Excellence",
      desc: "Continuous improvement in all our services",
      color: "#6B2E2E",
      bg: "bg-gradient-to-br from-[#6B2E2E]/10 to-[#4A3728]/20",
    },
  ];

  const milestones = [
    {
      year: 2008,
      title: "The Beginning",
      description: "Started as Delhi NCR's first pet boarding service",
      icon: <FaCalendarAlt className="text-lg" />,
      color: "#8B5E3C",
    },
    {
      year: 2012,
      title: "Expansion",
      description: "Opened second facility to serve more pets",
      icon: <FaMapMarkerAlt className="text-lg" />,
      color: "#D4A054",
    },
    {
      year: 2015,
      title: "Vet Services",
      description: "Launched home veterinary services",
      icon: <MdLocalHospital className="text-lg" />,
      color: "#6B2E2E",
    },
    {
      year: 2018,
      title: "10k+ Pets",
      description: "Served over 10,000 happy pets",
      icon: <FaDog className="text-lg" />,
      color: "#D4A054",
    },
    {
      year: 2020,
      title: "24/7 Support",
      description: "Introduced round-the-clock emergency care",
      icon: <FaClock className="text-lg" />,
      color: "#8B5E3C",
    },
    {
      year: 2024,
      title: "17k+ Families",
      description: "Trusted by 17,000+ pet parents",
      icon: <FaUsers className="text-lg" />,
      color: "#6B2E2E",
    },
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Best Pet Care Service",
      year: "2022, 2023",
      color: "#D4A054",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Most Trusted Brand",
      year: "2021-2024",
      color: "#8B5E3C",
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "5-Star Rated",
      year: "Consistently",
      color: "#D4A054",
    },
    {
      icon: <MdVerified className="text-2xl" />,
      title: "ISO Certified",
      year: "2020",
      color: "#6B2E2E",
    },
  ];

  return (
    <div
      id="about-page"
      className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]"
    >
      {/* // Full Hero Section Code - Copy this directly */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:h-screen xl:max-h-[700px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600)',
              backgroundPosition: 'center 30%'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/75 to-[#1A0F0A]/80"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A054] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#D4A054] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4 md:mb-5 mx-auto w-fit">
              <FaHeart className="text-[#D4A054] animate-pulse text-[10px] sm:text-xs md:text-sm" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">
                15+ Years of Love & Care
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 text-white px-2">
              Your Pet's{" "}
              <span className="relative inline-block text-[#D4A054]">
                Second Home
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="3" viewBox="0 0 200 3">
                  <path d="M0 1.5 L200 1.5" stroke="#D4A054" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3" className="animate-dash" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-6 md:mb-8 px-4">
              Providing loving, professional pet care services across Delhi NCR
              since 2008. Where every pet is treated like family.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              <button className="group bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-4 sm:px-5 md:px-6 lg:px-7 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-1 sm:gap-1.5 md:gap-2 text-xs sm:text-sm md:text-base">
                <FaPlay className="text-[10px] sm:text-xs md:text-sm group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
              <button className="border-2 border-white text-white px-4 sm:px-5 md:px-6 lg:px-7 py-1 sm:py-1.5 md:py-2 lg:py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all text-xs sm:text-sm md:text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#FDF8F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: <FaAward className="text-2xl" />,
              value: `${counterValues.years}+`,
              label: "Years of Excellence",
              color: "#8B5E3C",
              gradient: "from-[#8B5E3C]/10 to-[#A0714F]/20",
            },
            {
              icon: <FaUsers className="text-2xl" />,
              value: `${counterValues.families}k+`,
              label: "Happy Families",
              color: "#D4A054",
              gradient: "from-[#D4A054]/10 to-[#F5C27B]/20",
            },
            {
              icon: <FaDog className="text-2xl" />,
              value: `${counterValues.stays}k+`,
              label: "Boarding Stays",
              color: "#6B2E2E",
              gradient: "from-[#6B2E2E]/10 to-[#4A3728]/20",
            },
            {
              icon: <FaStar className="text-2xl" />,
              value: `${(counterValues.rating / 10).toFixed(1)}`,
              label: "Google Rating",
              color: "#D4A054",
              gradient: "from-[#D4A054]/10 to-[#F5C27B]/20",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group`}
            >
              <div
                className="flex justify-center mb-2 group-hover:scale-110 transition-transform"
                style={{ color: stat.color }}
              >
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section - Bruno's Theme */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div
              className={`mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-4 py-2 rounded-full mx-auto w-fit">
                <FaHeart className="text-[#D4A054] text-sm" />
                <span className="text-[#8B5E3C] font-semibold text-xs uppercase tracking-wide">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <div
              className={`mb-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                A Journey of <span className="text-[#D4A054]">Love & Care</span>
              </h2>
              <div className="w-20 h-1 bg-[#D4A054] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Image */}
            <div
              className={`mb-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative max-w-lg mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600"
                    alt="Happy pet with owner"
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute -top-3 -right-3 bg-white rounded-xl p-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-full flex items-center justify-center">
                      <MdVerified className="text-[#2C1810] text-sm" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-800 text-xs">
                        Trusted Since 2008
                      </div>
                      <div className="text-xs text-gray-500">17k+ Families</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div
              className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-gray-600 mb-3 leading-relaxed">
                Founded in 2008, Bruno's Family started with a simple belief:{" "}
                <span className="font-semibold text-[#8B5E3C]">
                  pets deserve a home away from home
                </span>
                .
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                What began as a small home-based boarding service has blossomed
                into Delhi NCR's most trusted pet care facility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have served over{" "}
                <span className="font-bold text-[#8B5E3C]">
                  17,000 families
                </span>{" "}
                and provided{" "}
                <span className="font-bold text-[#8B5E3C]">
                  10,000+ boarding stays
                </span>
                .
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-6 py-2 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 text-sm">
                Learn More <FaArrowRight className="text-xs" />
              </button>
              <button className="border-2 border-[#D4A054] text-[#8B5E3C] px-6 py-2 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#8B5E3C] hover:to-[#6B2E2E] hover:text-white transition-all text-sm">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Bruno's Theme */}
      <section className="py-12 bg-gradient-to-r from-[#D4A054]/5 to-[#F5C27B]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaTrophy className="text-[#D4A054] text-sm" />
              <span className="text-[#8B5E3C] font-semibold text-xs uppercase tracking-wide">
                Achievements
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Our <span className="text-[#D4A054]">Recognitions</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Awards that validate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <div
                    className="text-2xl"
                    style={{ color: achievement.color }}
                  >
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-400">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs - Bruno's Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Our <span className="text-[#D4A054]">Mission & Vision</span>
            </h2>
            <p className="text-gray-500">
              Guiding principles that drive us every day
            </p>
          </div>

          {/* Tab Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {[
              {
                id: "mission",
                label: "Our Mission",
                icon: <FaRocket className="text-sm" />,
                color: "#8B5E3C",
              },
              {
                id: "vision",
                label: "Our Vision",
                icon: <FaGlobe className="text-sm" />,
                color: "#D4A054",
              },
              {
                id: "values",
                label: "Core Values",
                icon: <FaHeart className="text-sm" />,
                color: "#6B2E2E",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${activeTab === tab.id
                    ? "bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C]"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {activeTab === "mission" && (
              <div className="bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <FaRocket className="text-2xl text-[#D4A054]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "To provide exceptional, compassionate pet care that gives pet
                  parents peace of mind while ensuring every animal feels safe,
                  loved, and happy in our care."
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <FaGlobe className="text-2xl text-[#D4A054]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "To become the most trusted and beloved pet care network in
                  India, setting new standards for excellence in boarding,
                  medical care, and pet services."
                </p>
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className={`${value.bg} rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <div
                      className="w-12 h-12 mx-auto bg-white rounded-xl flex items-center justify-center mb-2 shadow-md"
                      style={{ color: value.color }}
                    >
                      {value.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">
                      {value.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{value.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline - Bruno's Theme */}
      <section className="py-16 bg-[#FDF8F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaCalendarAlt className="text-[#D4A054] text-sm" />
              <span className="text-[#8B5E3C] font-semibold text-xs uppercase tracking-wide">
                Timeline
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Our <span className="text-[#D4A054]">Journey</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Milestones that shaped who we are today
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: milestone.color }}
                  >
                    {milestone.icon}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="text-lg font-bold"
                        style={{ color: milestone.color }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="font-bold text-gray-800">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section - Bruno's Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaUsers className="text-[#D4A054] text-sm" />
              <span className="text-[#8B5E3C] font-semibold text-xs uppercase tracking-wide">
                Meet Our Team
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Dedicated <span className="text-[#D4A054]">Professionals</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Passionate experts committed to your pet's well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, idx) => (
              <div
                key={member.id}
                className={`group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${0.3 + idx * 0.1}s` }}
                onMouseEnter={() => setHoveredTeam(member.id)}
                onMouseLeave={() => setHoveredTeam(null)}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredTeam === member.id ? "scale-110" : "scale-100"}`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#8B5E3C] to-transparent transition-all duration-500 ${hoveredTeam === member.id ? "opacity-80" : "opacity-0"} flex items-end justify-center p-4`}
                  >
                    <div className="flex gap-2">
                      <a
                        href={member.social.facebook}
                        className="bg-white p-1.5 rounded-full hover:bg-[#D4A054] hover:text-[#2C1810] transition-all transform hover:scale-110"
                      >
                        <FaFacebook className="text-sm" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="bg-white p-1.5 rounded-full hover:bg-[#D4A054] hover:text-[#2C1810] transition-all transform hover:scale-110"
                      >
                        <FaInstagram className="text-sm" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-white p-1.5 rounded-full hover:bg-[#D4A054] hover:text-[#2C1810] transition-all transform hover:scale-110"
                      >
                        <FaLinkedin className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-gray-800 mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[#D4A054] font-semibold text-xs mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {member.specialty} • {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <WhyChooseUs />

      {/* Testimonial Section */}
      <Testimonial />

      {/* CTA Section */}
      <Cta />

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -200;
          }
        }

        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;