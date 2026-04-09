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
  FaTruck        
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
  // ❌ Remove this line - const [activeYear, setActiveYear] = useState(2024);
//   const [selectedGoal, setSelectedGoal] = useState(0); // ✅ Keep this, it's being used

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
      color: "#FF6B6B",
      details: ["Empathy in every interaction", "Gentle handling techniques", "Stress-free environment"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Safety Above All",
      description: "Highest safety standards with 24/7 monitoring and protocols",
      color: "#4ECDC4",
      details: ["24/7 CCTV monitoring", "Emergency protocols", "Vet on call always"]
    },
    {
      icon: <MdVerified />,
      title: "Unwavering Integrity",
      description: "Transparent practices and honest communication always",
      color: "#45B7D1",
      details: ["No hidden charges", "Regular updates", "Open door policy"]
    },
    {
      icon: <FaRocket />,
      title: "Excellence Driven",
      description: "Continuous improvement in all our services and facilities",
      color: "#96CEB4",
      details: ["Regular staff training", "Modern equipment", "Innovation focus"]
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "Building a loving community of pet parents and professionals",
      color: "#F7C948",
      details: ["Pet parent events", "Awareness programs", "Community support"]
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      description: "Sustainable practices for a better future",
      color: "#6B4E71",
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
      color: "#007B7F"
    },
    {
      year: 2025,
      title: "24/7 Emergency Centers",
      description: "Launch dedicated emergency veterinary centers across all locations",
      icon: <FaClock />,
      status: "Planned",
      progress: 30,
      color: "#E67E22"
    },
    {
      year: 2026,
      title: "Pet Care Academy",
      description: "Establish training academy for pet care professionals",
      icon: <FaMedal />,
      status: "Planned",
      progress: 15,
      color: "#FF7A2F"
    },
    {
      year: 2027,
      title: "Mobile Vet Units",
      description: "Launch mobile veterinary units for remote areas",
      icon: <FaTruck />,
      status: "Concept",
      progress: 10,
      color: "#6B4E71"
    }
  ];

  const strategicPillars = [
    {
      icon: <FaUsers />,
      title: "Customer Excellence",
      description: "Delivering exceptional experiences",
      stats: "98% Satisfaction Rate",
      color: "#007B7F"
    },
    {
      icon: <FaDog />,
      title: "Quality Care",
      description: "Highest standards of pet care",
      stats: "10,000+ Happy Pets",
      color: "#E67E22"
    },
    {
      icon: <FaHandsHelping />,
      title: "Team Development",
      description: "Investing in our people",
      stats: "50+ Expert Staff",
      color: "#FF7A2F"
    },
    {
      icon: <FaChartLine />,
      title: "Sustainable Growth",
      description: "Building for the future",
      stats: "15+ Years Strong",
      color: "#6B4E71"
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
    <div id="vision-page" className="min-h-screen bg-gradient-to-b from-white to-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#007B7F] to-[#005C5F] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 mx-auto w-fit">
              <FaEye className="text-[#FFD1B3]" />
              <span className="text-sm font-medium">Our Vision & Mission</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Shaping the{' '}
              <span className="relative inline-block text-[#FFD1B3]">
                Future of Pet Care
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 3 L200 3" stroke="#FFD1B3" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" className="animate-dash"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Building a world where every pet receives the love, care, and respect they deserve
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FFF9F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Badge */}
            <div className={`mb-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mx-auto w-fit">
                <FaHeart className="text-[#007B7F] text-sm" />
                <span className="text-[#007B7F] font-semibold text-xs uppercase tracking-wide">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <div className={`mb-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]">
                A Journey of <span className="text-[#007B7F]">Love & Care</span>
              </h2>
              <div className="w-20 h-1 bg-[#FFD1B3] mx-auto mt-3 rounded-full"></div>
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
            <div className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Founded in 2008, Happy Pettings started with a simple belief:{" "}
                <span className="font-semibold text-[#007B7F]">
                  pets deserve a home away from home
                </span>.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                What began as a small home-based boarding service has blossomed
                into Delhi NCR's most trusted pet care facility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have served over{" "}
                <span className="font-bold text-[#007B7F]">17,000 families</span>{" "}
                and provided{" "}
                <span className="font-bold text-[#007B7F]">10,000+ boarding stays</span>.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

      {/* Core Values Section */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaHeart className="text-[#007B7F]" />
              <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">Core Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3">
              What Guides{' '}
              <span className="text-[#007B7F]">Everything We Do</span>
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
                <h3 className="text-xl font-bold text-[#2C3E50] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{value.description}</p>
                <div className="space-y-1">
                  {value.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#007B7F] text-xs" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3">
              Our Strategic{' '}
              <span className="text-[#007B7F]">Pillars</span>
            </h2>
            <p className="text-gray-600">The foundation of our success and growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-[#007B7F]/5 to-[#FFD1B3]/20 rounded-2xl p-6 text-center transition-all hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4" style={{ color: pillar.color }}>
                  <span className="text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2C3E50] mb-1">{pillar.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{pillar.description}</p>
                <div className="text-sm font-semibold" style={{ color: pillar.color }}>{pillar.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Timeline */}
      <section className="py-16 bg-[#FFF9F0]">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaRocket className="text-[#007B7F]" />
              <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">Roadmap</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3">
              Our{' '}
              <span className="text-[#007B7F]">Future Goals</span>
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
                      <h3 className="font-bold text-[#2C3E50]">{goal.title}</h3>
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

      {/* Journey Milestones */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3">
              Our{' '}
              <span className="text-[#007B7F]">Journey So Far</span>
            </h2>
            <p className="text-gray-600">Key milestones that shaped our path</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#007B7F] via-[#FFD1B3] to-[#007B7F] hidden md:block rounded-full"></div>
            
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md hidden md:block" style={{ backgroundColor: idx % 2 === 0 ? '#007B7F' : '#E67E22' }}></div>
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className={`bg-gradient-to-r ${idx % 2 === 0 ? 'from-[#007B7F]/10 to-[#FFD1B3]/20' : 'from-[#E67E22]/10 to-[#FFD1B3]/20'} rounded-xl p-4 ${idx % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                    <div className="text-2xl font-bold" style={{ color: idx % 2 === 0 ? '#007B7F' : '#E67E22' }}>{milestone.year}</div>
                    <h3 className="font-bold text-[#2C3E50]">{milestone.title}</h3>
                    <p className="text-gray-500 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-[#007B7F] to-[#005C5F]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <FaQuoteLeft className="text-[#FFD1B3] text-5xl mx-auto mb-6 opacity-50" />
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
              "Our vision is not just about building a business — it's about creating a better world for pets and the people who love them."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-[#FFD1B3] rounded-full flex items-center justify-center text-[#007B7F] font-bold text-lg">
                V
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white">Vipul Agrahari</h4>
                <p className="text-white/70 text-sm">Founder, Happy Pettings</p>
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