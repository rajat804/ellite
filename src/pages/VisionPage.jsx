// src/pages/VisionPage.jsx
import React, { useState, useEffect } from 'react';
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
  FaEye,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaHandsHelping,
  FaLeaf,
  FaTree,
  FaWater,
  FaSun,
  FaMoon,
  FaCloudSun,
  FaSeedling,
  FaDove,
  FaHandHoldingHeart,
  FaChartLine,
  FaMedal,
  FaGem,
  FaFire,
  FaStarOfLife,
  FaInfinity,
  FaBalanceScale,
  FaTruck,
  FaCoffee        
} from 'react-icons/fa';
import { 
  MdVerified,
} from 'react-icons/md';
import { GiDogHouse, GiCat, GiMeditation, GiPawHeart } from 'react-icons/gi';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonial from '../components/Testimonial';
import Cta from '../components/Cta';

const VisionPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('vision-page');
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

  const coreValues = [
    {
      icon: <FaHeart />,
      title: "Compassion First",
      description: "Every decision we make is driven by love and care for animals",
      color: "#D4A054",
      details: ["Empathy in every interaction", "Gentle handling techniques", "Stress-free environment"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Above All",
      description: "Highest safety standards with 24/7 monitoring and protocols",
      color: "#8B5E3C",
      details: ["24/7 CCTV monitoring", "Emergency protocols", "Vet on call always"]
    },
    {
      icon: <MdVerified />,
      title: "Unwavering Integrity",
      description: "Transparent practices and honest communication always",
      color: "#6B2E2E",
      details: ["No hidden charges", "Regular updates", "Open door policy"]
    },
    {
      icon: <FaRocket />,
      title: "Excellence Driven",
      description: "Continuous improvement in all our services and facilities",
      color: "#D4A054",
      details: ["Regular staff training", "Modern equipment", "Innovation focus"]
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "Building a loving community of pet parents and professionals",
      color: "#8B5E3C",
      details: ["Pet parent events", "Awareness programs", "Community support"]
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      description: "Sustainable practices for a better future",
      color: "#6B2E2E",
      details: ["Eco-friendly products", "Waste reduction", "Green initiatives"]
    }
  ];

  const futureGoals = [
    {
      year: 2024,
      title: "Expand to 5 Cities",
      description: "Open new facilities in Mumbai, Bangalore, and Hyderabad",
      icon: <FaMapMarkerAlt />,
      status: "In Progress",
      progress: 60,
      color: "#8B5E3C"
    },
    {
      year: 2025,
      title: "24/7 Emergency Centers",
      description: "Launch dedicated emergency veterinary centers across all locations",
      icon: <FaClock />,
      status: "Planned",
      progress: 30,
      color: "#D4A054"
    },
    {
      year: 2026,
      title: "Pet Care Academy",
      description: "Establish training academy for pet care professionals",
      icon: <FaMedal />,
      status: "Planned",
      progress: 15,
      color: "#6B2E2E"
    },
    {
      year: 2027,
      title: "Mobile Vet Units",
      description: "Launch mobile veterinary units for remote areas",
      icon: <FaTruck />,
      status: "Concept",
      progress: 10,
      color: "#D4A054"
    }
  ];

  const strategicPillars = [
    {
      icon: <FaUsers />,
      title: "Customer Excellence",
      description: "Delivering exceptional experiences",
      stats: "98% Satisfaction Rate",
      color: "#8B5E3C"
    },
    {
      icon: <FaDog />,
      title: "Quality Care",
      description: "Highest standards of pet care",
      stats: "10,000+ Happy Pets",
      color: "#D4A054"
    },
    {
      icon: <FaHandsHelping />,
      title: "Team Development",
      description: "Investing in our people",
      stats: "50+ Expert Staff",
      color: "#6B2E2E"
    },
    {
      icon: <FaChartLine />,
      title: "Sustainable Growth",
      description: "Building for the future",
      stats: "15+ Years Strong",
      color: "#D4A054"
    }
  ];

  const milestones = [
    { year: 2008, title: "Founded", description: "Started with a small home-based boarding" },
    { year: 2012, title: "First Facility", description: "Opened dedicated pet care center" },
    { year: 2015, title: "Vet Services", description: "Launched home vet visits" },
    { year: 2018, title: "10k Pets", description: "Served over 10,000 pets" },
    { year: 2020, title: "24/7 Support", description: "Introduced round-the-clock care" },
    { year: 2024, title: "Expansion", description: "Multiple locations across NCR" }
  ];

  return (
    <div id="vision-page" className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]">
      {/* Hero Section - Bruno's Theme */}
{/* Hero Section - Vision Page with Background Image */}
<section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:h-screen xl:max-h-[700px] flex items-center justify-center overflow-hidden">
  
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ 
        // OPTION 1: Dog looking forward (Vision/Future theme)
        backgroundImage: 'url(https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600)',
        backgroundPosition: 'center 35%'
      }}
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/75 to-[#1A0F0A]/80"></div>
    </div>
  </div>

  {/* Background Blur Circles */}
  <div className="absolute inset-0 opacity-20 z-0">
    <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A054] rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#D4A054] rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
    <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      {/* Badge - Responsive */}
      <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full mb-4 sm:mb-5 md:mb-6 mx-auto w-fit">
        <FaEye className="text-[#D4A054] text-[10px] sm:text-xs md:text-sm" />
        <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">
          Our Vision & Mission
        </span>
      </div>
      
      {/* Heading - Responsive */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white px-2">
        Shaping the{' '}
        <span className="relative inline-block text-[#D4A054]">
          Future of Pet Care
          <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
            <path 
              d="M0 2 L200 2" 
              stroke="#D4A054" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeDasharray="4 4" 
              className="animate-dash" 
            />
          </svg>
        </span>
      </h1>
      
      {/* Description - Responsive */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
        Building a world where every pet receives the love, care, and respect they deserve
      </p>
    </div>
  </div>

  {/* Wave - Responsive */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1440 320" 
      className="w-full h-auto"
      preserveAspectRatio="none"
    >
      <path 
        fill="#FDF8F0" 
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
</section>
      {/* Our Story Section - Bruno's Theme */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className={`mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-4 py-2 rounded-full mx-auto w-fit">
                <FaHeart className="text-[#D4A054] text-sm" />
                <span className="text-[#8B5E3C] font-semibold text-xs uppercase tracking-wide">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className={`mb-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                A Journey of <span className="text-[#D4A054]">Love & Care</span>
              </h2>
              <div className="w-20 h-1 bg-[#D4A054] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Image */}
            <div className={`mb-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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
            <div className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Founded in 2008, Bruno's Family started with a simple belief:{" "}
                <span className="font-semibold text-[#8B5E3C]">
                  pets deserve a home away from home
                </span>.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                What began as a small home-based boarding service has blossomed
                into Delhi NCR's most trusted pet care facility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have served over{" "}
                <span className="font-bold text-[#8B5E3C]">17,000 families</span>{" "}
                and provided{" "}
                <span className="font-bold text-[#8B5E3C]">10,000+ boarding stays</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

      {/* Core Values Section - Bruno's Theme */}
      <section className="py-16 bg-[#FDF8F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaHeart className="text-[#D4A054]" />
              <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              What Guides{' '}
              <span className="text-[#D4A054]">Everything We Do</span>
            </h2>
            <p className="text-gray-600">Our principles shape our actions and define our culture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${value.color}20`, color: value.color }}>
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{value.description}</p>
                <div className="space-y-1">
                  {value.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#D4A054] text-xs" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars - Bruno's Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our Strategic{' '}
              <span className="text-[#D4A054]">Pillars</span>
            </h2>
            <p className="text-gray-600">The foundation of our success and growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20 rounded-2xl p-6 text-center transition-all hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4" style={{ color: pillar.color }}>
                  <span className="text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{pillar.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{pillar.description}</p>
                <div className="text-sm font-semibold" style={{ color: pillar.color }}>{pillar.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Timeline - Bruno's Theme */}
      <section className="py-16 bg-[#FDF8F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaRocket className="text-[#D4A054]" />
              <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our{' '}
              <span className="text-[#D4A054]">Future Goals</span>
            </h2>
            <p className="text-gray-600">The path ahead and milestones we aim to achieve</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {futureGoals.map((goal, idx) => (
              <div key={idx} className={`flex items-center gap-4 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white shrink-0" style={{ backgroundColor: goal.color }}>
                  <span className="text-2xl">{goal.icon}</span>
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-lg font-bold" style={{ color: goal.color }}>{goal.year}</span>
                      <h3 className="font-bold text-gray-800">{goal.title}</h3>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{goal.status}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{goal.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full transition-all duration-500" style={{ width: `${goal.progress}%`, backgroundColor: goal.color }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Progress</span>
                    <span>{goal.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Milestones - Bruno's Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Our{' '}
              <span className="text-[#D4A054]">Journey So Far</span>
            </h2>
            <p className="text-gray-600">Key milestones that shaped our path</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#8B5E3C] via-[#D4A054] to-[#6B2E2E] hidden md:block rounded-full"></div>
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md hidden md:block" style={{ backgroundColor: idx % 2 === 0 ? '#8B5E3C' : '#D4A054' }}></div>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className={`bg-gradient-to-r ${idx % 2 === 0 ? 'from-[#8B5E3C]/10 to-[#D4A054]/20' : 'from-[#D4A054]/10 to-[#F5C27B]/20'} rounded-xl p-4 ${idx % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className="text-2xl font-bold" style={{ color: idx % 2 === 0 ? '#8B5E3C' : '#D4A054' }}>{milestone.year}</div>
                    <h3 className="font-bold text-gray-800">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Badge */}
      <div className="text-center pb-8">
        <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full">
          <FaGem className="text-[#D4A054] text-sm" />
          <span className="text-xs text-gray-500">Vision 2030 • Building the Future</span>
          <FaCoffee className="text-[#D4A054] text-sm" />
        </div>
      </div>

      {/* Quote Section - Bruno's Theme */}
      <section className="py-16 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <FaQuoteLeft className="text-[#D4A054] text-5xl mx-auto mb-6 opacity-50" />
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              "Our vision is not just about building a business — it's about creating a better world for pets and the people who love them."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] rounded-full flex items-center justify-center text-[#2C1810] font-bold text-lg">
                V
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white">Vipul Agrahari</h4>
                <p className="text-white/70 text-sm">Founder, Bruno's Family & Cafe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Cta />

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VisionPage;