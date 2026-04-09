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
} from "react-icons/fa";
import { MdVerified, MdLocalHospital, MdEmojiEmotions } from "react-icons/md";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta";

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
      color: "#FF6B6B",
      bg: "bg-gradient-to-br from-rose-50 to-rose-100",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safety First",
      desc: "Highest safety standards with 24/7 monitoring",
      color: "#4ECDC4",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100",
    },
    {
      icon: <MdVerified className="text-3xl" />,
      title: "Trust & Integrity",
      desc: "Transparent practices and honest communication",
      color: "#45B7D1",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Excellence",
      desc: "Continuous improvement in all our services",
      color: "#96CEB4",
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    },
  ];

  const milestones = [
    {
      year: 2008,
      title: "The Beginning",
      description: "Started as Delhi NCR's first pet boarding service",
      icon: <FaCalendarAlt className="text-lg" />,
      color: "#007B7F",
    },
    {
      year: 2012,
      title: "Expansion",
      description: "Opened second facility to serve more pets",
      icon: <FaMapMarkerAlt className="text-lg" />,
      color: "#E67E22",
    },
    {
      year: 2015,
      title: "Vet Services",
      description: "Launched home veterinary services",
      icon: <MdLocalHospital className="text-lg" />,
      color: "#FF7A2F",
    },
    {
      year: 2018,
      title: "10k+ Pets",
      description: "Served over 10,000 happy pets",
      icon: <FaDog className="text-lg" />,
      color: "#6B4E71",
    },
    {
      year: 2020,
      title: "24/7 Support",
      description: "Introduced round-the-clock emergency care",
      icon: <FaClock className="text-lg" />,
      color: "#007B7F",
    },
    {
      year: 2024,
      title: "17k+ Families",
      description: "Trusted by 17,000+ pet parents",
      icon: <FaUsers className="text-lg" />,
      color: "#E67E22",
    },
  ];

  const achievements = [
    {
      icon: <FaTrophy className="text-2xl" />,
      title: "Best Pet Care Service",
      year: "2022, 2023",
      color: "#FFD700",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Most Trusted Brand",
      year: "2021-2024",
      color: "#C0C0C0",
    },
    {
      icon: <FaStar className="text-2xl" />,
      title: "5-Star Rated",
      year: "Consistently",
      color: "#FFB6C1",
    },
    {
      icon: <MdVerified className="text-2xl" />,
      title: "ISO Certified",
      year: "2020",
      color: "#007B7F",
    },
  ];

  return (
    <div
      id="about-page"
      className="min-h-screen bg-gradient-to-b from-white to-[#FFF9F0]"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#007B7F] to-[#005C5F] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div
            className={`text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-5 mx-auto w-fit">
              <FaHeart className="text-[#FFD1B3] animate-pulse text-sm" />
              <span className="text-sm font-medium text-white">
                15+ Years of Love & Care
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              Your Pet's{" "}
              <span className="relative inline-block text-[#FFD1B3]">
                Second Home
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                >
                  <path
                    d="M0 3 L200 3"
                    stroke="#FFD1B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 6"
                    className="animate-dash"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
              Providing loving, professional pet care services across Delhi NCR
              since 2008. Where every pet is treated like family.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group bg-white text-[#007B7F] px-7 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                <FaPlay className="text-sm group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
              <button className="border-2 border-white text-white px-7 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#FFF9F0"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: <FaAward className="text-2xl" />,
              value: `${counterValues.years}+`,
              label: "Years of Excellence",
              color: "#007B7F",
              gradient: "from-teal-50 to-teal-100",
            },
            {
              icon: <FaUsers className="text-2xl" />,
              value: `${counterValues.families}k+`,
              label: "Happy Families",
              color: "#E67E22",
              gradient: "from-orange-50 to-orange-100",
            },
            {
              icon: <FaDog className="text-2xl" />,
              value: `${counterValues.stays}k+`,
              label: "Boarding Stays",
              color: "#FF7A2F",
              gradient: "from-amber-50 to-amber-100",
            },
            {
              icon: <FaStar className="text-2xl" />,
              value: `${(counterValues.rating / 10).toFixed(1)}`,
              label: "Google Rating",
              color: "#6B4E71",
              gradient: "from-purple-50 to-purple-100",
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
              <div className="text-2xl md:text-3xl font-bold text-[#2C3E50]">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div
              className={`mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mx-auto w-fit">
                <FaHeart className="text-[#007B7F] text-sm" />
                <span className="text-[#007B7F] font-semibold text-xs uppercase tracking-wide">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <div
              className={`mb-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]">
                A Journey of <span className="text-[#007B7F]">Love & Care</span>
              </h2>
              <div className="w-20 h-1 bg-[#FFD1B3] mx-auto mt-3 rounded-full"></div>
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
                    <div className="w-8 h-8 bg-[#007B7F] rounded-full flex items-center justify-center">
                      <MdVerified className="text-white text-sm" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-[#2C3E50] text-xs">
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
                Founded in 2008, Happy Pettings started with a simple belief:{" "}
                <span className="font-semibold text-[#007B7F]">
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
                <span className="font-bold text-[#007B7F]">
                  17,000 families
                </span>{" "}
                and provided{" "}
                <span className="font-bold text-[#007B7F]">
                  10,000+ boarding stays
                </span>
                .
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button className="bg-[#007B7F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 flex items-center gap-2 text-sm">
                Learn More <FaArrowRight className="text-xs" />
              </button>
              <button className="border-2 border-[#007B7F] text-[#007B7F] px-6 py-2 rounded-full font-semibold hover:bg-[#007B7F] hover:text-white transition-all text-sm">
                Book a Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 bg-gradient-to-r from-[#007B7F]/5 to-[#FFD1B3]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaTrophy className="text-[#007B7F] text-sm" />
              <span className="text-[#007B7F] font-semibold text-xs uppercase tracking-wide">
                Achievements
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">
              Our <span className="text-[#007B7F]">Recognitions</span>
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
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#007B7F]/10 to-[#FFD1B3]/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <div
                    className="text-2xl"
                    style={{ color: achievement.color }}
                  >
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#2C3E50] text-sm mb-1">
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-400">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-2">
              Our <span className="text-[#007B7F]">Mission & Vision</span>
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
                color: "#007B7F",
              },
              {
                id: "vision",
                label: "Our Vision",
                icon: <FaGlobe className="text-sm" />,
                color: "#E67E22",
              },
              {
                id: "values",
                label: "Core Values",
                icon: <FaHeart className="text-sm" />,
                color: "#FF7A2F",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? "bg-[#007B7F] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-[#007B7F]/10"
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
              <div className="bg-gradient-to-br from-[#007B7F]/10 to-[#FFD1B3]/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <FaRocket className="text-2xl text-[#007B7F]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
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
              <div className="bg-gradient-to-br from-[#E67E22]/10 to-[#FFD1B3]/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 mx-auto bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <FaGlobe className="text-2xl text-[#E67E22]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">
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
                    <h4 className="font-bold text-[#2C3E50] text-sm mb-1">
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

      {/* Our Journey Timeline */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaCalendarAlt className="text-[#007B7F] text-sm" />
              <span className="text-[#007B7F] font-semibold text-xs uppercase tracking-wide">
                Timeline
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">
              Our <span className="text-[#007B7F]">Journey</span>
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
                      <h3 className="font-bold text-[#2C3E50]">
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

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-3 py-1.5 rounded-full mb-3 mx-auto w-fit">
              <FaUsers className="text-[#007B7F] text-sm" />
              <span className="text-[#007B7F] font-semibold text-xs uppercase tracking-wide">
                Meet Our Team
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">
              Dedicated <span className="text-[#007B7F]">Professionals</span>
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
                    className={`absolute inset-0 bg-gradient-to-t from-[#007B7F] to-transparent transition-all duration-500 ${hoveredTeam === member.id ? "opacity-80" : "opacity-0"} flex items-end justify-center p-4`}
                  >
                    <div className="flex gap-2">
                      <a
                        href={member.social.facebook}
                        className="bg-white p-1.5 rounded-full hover:bg-[#007B7F] hover:text-white transition-all transform hover:scale-110"
                      >
                        <FaFacebook className="text-sm" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="bg-white p-1.5 rounded-full hover:bg-[#007B7F] hover:text-white transition-all transform hover:scale-110"
                      >
                        <FaInstagram className="text-sm" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-white p-1.5 rounded-full hover:bg-[#007B7F] hover:text-white transition-all transform hover:scale-110"
                      >
                        <FaLinkedin className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-[#2C3E50] mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[#007B7F] font-semibold text-xs mb-1">
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
