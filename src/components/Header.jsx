// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaPaw, FaChevronRight, FaSearch, FaBars, FaTimes, FaPhone, FaUser, FaHeart, FaCoffee, FaBone } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/petlogo.png";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: "/"},
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Vision', path: '/vision' },
  ];

  return (
    <>
      {/* Top Bar - Warm Brown Theme */}
      <div className="hidden lg:block bg-[#8B5E3C] text-white text-sm py-2.5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <FaPhone className="text-[#D4A054] group-hover:scale-110 transition-transform" />
                <span>Emergency: +91-9582582689</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <FaHeart className="text-[#D4A054] group-hover:scale-110 transition-transform" />
                <span>24/7 Veterinary Support</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <FaCoffee className="text-[#D4A054] group-hover:scale-110 transition-transform" />
                <span>Pet-Friendly Café</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[#D4A054]">★</span>
                <span className="text-[#D4A054]">★</span>
                <span className="text-[#D4A054]">★</span>
                <span className="text-[#D4A054]">★</span>
                <span className="text-[#D4A054]">★</span>
                <span className="ml-2">4.9 Rating (17,000+ Reviews)</span>
              </div>
              <span className="w-px h-4 bg-white/30"></span>
              <span>📍 Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Warm & Welcoming */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FDF8F0] shadow-xl py-3' : 'bg-[#FDF8F0]/95 backdrop-blur-md py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <Link to={'/'}>
                <img src={logo} alt="Logo" className='w-[100px] group-hover:scale-105 transition-transform'/>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`font-semibold transition-all relative group ${
                    location.pathname === item.path 
                      ? 'text-[#8B5E3C]' 
                      : 'text-gray-600 hover:text-[#8B5E3C]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A054] transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-[#8B5E3C]/10 transition-colors"
              >
                <FaSearch className="text-gray-600 text-lg hover:text-[#8B5E3C] transition-colors" />
              </button>

              {/* Book Now Button - Warm Brown */}
              <Link to={'/booknow'} className="hidden md:flex bg-[#8B5E3C] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#6B2E2E] transition-all hover:scale-105 items-center gap-2 shadow-lg">
                Book Now <FaChevronRight className="text-sm" />
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#8B5E3C]/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-gray-600 text-2xl" />
                ) : (
                  <FaBars className="text-gray-600 text-2xl" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="mt-4 animate-fade-in">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search services, locations, or FAQs..." 
                  className="w-full px-5 py-3 pr-12 rounded-xl border-2 border-[#D4A054]/30 focus:border-[#8B5E3C] focus:outline-none bg-white"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#8B5E3C] text-white p-2 rounded-lg hover:bg-[#6B2E2E] transition-all">
                  <FaSearch />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 animate-slide-down bg-white rounded-2xl shadow-xl p-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                      location.pathname === item.path 
                        ? 'bg-[#8B5E3C] text-white' 
                        : 'text-gray-600 hover:bg-[#8B5E3C]/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="my-2 border-gray-100" />
                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-[#8B5E3C] text-[#8B5E3C] font-semibold hover:bg-[#8B5E3C] hover:text-white transition-all">
                  <FaUser /> Login
                </button>
                <Link to={'/booknow'} className="bg-[#8B5E3C] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#6B2E2E] transition-all">
                  Book Now <FaChevronRight />
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;