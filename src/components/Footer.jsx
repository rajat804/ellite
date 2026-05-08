// src/components/Footer.jsx
import React, { useState } from 'react';
import {
  FaPaw, FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube,
  FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaChevronRight, FaShieldAlt, FaTruck, FaCreditCard, FaAward,
  FaArrowUp, FaGem, FaCoffee, FaWhatsapp
} from 'react-icons/fa';
import { MdVerified, MdPets, MdLocalCafe } from 'react-icons/md';
import { GiPawHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from "../assets/petlogo.png";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp button click handler
  const openWhatsApp = () => {
    const phoneNumber = "919971200705";
    const message = encodeURIComponent("Hello! I'm interested in your pet services. Can you please help me?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C1810] to-[#1A0F0A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 - Brand */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
              <Link to={'/'} className="flex items-center">
                <img
                  src={logo}
                  alt="Bruno's Family & Cafe"
                  className='
                    w-14 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-[100px] group-hover:scale-105 transition-all duration-300'
                />
              </Link>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Providing loving, professional pet care services across Rajnagar Extension, Ghaziabad since 2008.
              Your pet's second home, where they're treated like family.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <FaAward className="text-[#D4A054]" />
                <span>15+ Years</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <MdVerified className="text-[#D4A054]" />
                <span>17k+ Families</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <FaShieldAlt className="text-[#D4A054]" />
                <span>Licensed</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="flex gap-3">
                {[FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#D4A054] hover:to-[#F5C27B] hover:text-[#2C1810] transition-all hover:scale-110 duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4A054]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((items, idx) => (
                <li key={idx}>
                  <Link
                    to={items.path}
                    className="text-gray-400 hover:text-[#D4A054] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <FaChevronRight className="text-[#D4A054] text-xs group-hover:translate-x-1 transition-transform" />
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4A054]"></span>
            </h3>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Contact Us</p>
                  <p className="font-semibold text-sm">+91-9971200705</p>
                  <p className="text-xs text-gray-500">24/7 Available</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs text-gray-400">WhatsApp</p>
                  <p className="font-semibold text-sm">+91-9971200705</p>
                  <p className="text-xs text-gray-500">Quick Response</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="font-semibold text-sm">brunospetboarding@gmail.com</p>
                  <p className="text-xs text-gray-500">Response within 1 hour</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="font-semibold text-sm"> Bruno's Pet Boarding & Cafe, Bhatta Road, Sikroad, Rajnagar Extension, Ghaziabad, 201003.</p>
                  <p className="text-xs text-gray-500">Rajnagar Extension, Ghaziabad</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaClock />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Business Hours</p>
                  <p className="font-semibold text-sm">Open 24/7</p>
                  <p className="text-xs text-gray-500">365 Days a Year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4A054]"></span>
            </h3>

            <div className="space-y-3">
              <p className="text-xs text-gray-400">Get pet care tips & exclusive offers</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4A054] text-white placeholder:text-gray-500 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D4A054] to-[#B8860B] px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-[#D4A054] text-xs animate-fade-in">
                  ✓ Subscribed successfully!
                </p>
              )}
            </div>

            {/* QR Code or Trust Badge */}
            <div className="mt-6 p-3 bg-white/5 rounded-xl text-center">
              <GiPawHeart className="text-[#D4A054] text-2xl mx-auto mb-2" />
              <p className="text-xs text-gray-400">Trusted by pet parents since 2008</p>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-white/10 mb-6">
          {[
            { icon: <FaShieldAlt />, text: 'Safe & Secure', color: 'text-[#D4A054]', bg: 'bg-[#D4A054]/20' },
            { icon: <FaTruck />, text: 'Free Pickup/Drop', color: 'text-[#D4A054]', bg: 'bg-[#D4A054]/20' },
            { icon: <FaHeart />, text: 'Loving Care', color: 'text-[#D4A054]', bg: 'bg-[#D4A054]/20' },
            { icon: <FaCreditCard />, text: 'Easy Payment', color: 'text-[#D4A054]', bg: 'bg-[#D4A054]/20' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
              <div className={`${feature.bg} p-2 rounded-lg ${feature.color}`}>
                {feature.icon}
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                © 2024 Bruno's Family & Cafe. All rights reserved. |
                <a href="#privacy" className="hover:text-[#D4A054] ml-1">Privacy Policy</a>
                <span className="mx-2">|</span>
                <Link to={'/terms'} className="hover:text-[#D4A054]">Terms of Service</Link>
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <FaHeart className="text-[#D4A054] animate-pulse" />
              <span>Made with love for pets</span>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-2">
              <span className="text-xs bg-white/10 px-2 py-1 rounded hover:bg-[#D4A054]/20 transition-all">Visa</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded hover:bg-[#D4A054]/20 transition-all">Mastercard</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded hover:bg-[#D4A054]/20 transition-all">UPI</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded hover:bg-[#D4A054]/20 transition-all">Paytm</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-[#2C1810] p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-24 right-8 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group animate-pulse"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us on WhatsApp
        </span>
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;