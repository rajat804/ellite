// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { FaPaw, FaChevronRight, FaSearch, FaBars, FaTimes, FaPhone, FaUser, FaHeart } from 'react-icons/fa';

const Header = () => {
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
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#007B7F] text-white text-sm py-2.5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#FFD1B3]" />
                <span>Emergency: +91-9582582689</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-[#FFD1B3]" />
                <span>24/7 Veterinary Support</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>⭐ 4.9 Rating (17,000+ Reviews)</span>
              <span className="w-px h-4 bg-white/30"></span>
              <span>📍 Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FFF9F0] shadow-xl py-3' : 'bg-[#FFF9F0]/95 backdrop-blur-md py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="bg-[#007B7F] p-2.5 rounded-xl group-hover:rounded-2xl transition-all duration-300 shadow-lg">
                <FaPaw className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold text-[#2C3E50]">
                  Pet<span className="text-[#007B7F]">Care</span>
                </span>
                <p className="text-xs text-gray-500 -mt-1">Trusted Since 2008</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[#2C3E50] font-semibold hover:text-[#007B7F] transition-all relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007B7F] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-[#007B7F]/10 transition-colors"
              >
                <FaSearch className="text-[#2C3E50] text-lg" />
              </button>

              

              {/* Book Now Button */}
              <button className="hidden md:flex bg-[#007B7F] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 items-center gap-2 shadow-lg">
                Book Now <FaChevronRight className="text-sm" />
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-[#007B7F]/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="text-[#2C3E50] text-2xl" />
                ) : (
                  <FaBars className="text-[#2C3E50] text-2xl" />
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
                  className="w-full px-5 py-3 pr-12 rounded-xl border-2 border-[#007B7F]/20 focus:border-[#007B7F] focus:outline-none bg-white"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#007B7F] text-white p-2 rounded-lg">
                  <FaSearch />
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-4 animate-slide-down">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-lg font-semibold text-[#2C3E50] hover:bg-[#007B7F]/10 transition-all"
                  >
                    {item.name}
                  </a>
                ))}
                <hr className="my-2 border-gray-200" />
                <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-[#007B7F] text-[#007B7F] font-semibold">
                  <FaUser /> Login
                </button>
                <button className="bg-[#007B7F] text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  Book Now <FaChevronRight />
                </button>
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