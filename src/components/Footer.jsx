// src/components/Footer.jsx
import React, { useState } from 'react';
import { 
  FaPaw, FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaChevronRight, FaShieldAlt, FaTruck, FaCreditCard, FaAward,
  FaArrowUp, FaGem, FaCoffee
} from 'react-icons/fa';
import { MdVerified, MdPets, MdLocalCafe } from 'react-icons/md';
import { GiPawHeart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

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

  

  const quickLinks = [
    {name: 'Home', path: '/'},
    {name: 'About Us', path: '/about'},
    {name: 'Services', path: '/service'},
    {name: 'Testimonials', path: '/testimonial'},
    {name: 'Contact', path: '/contact'},
    {name: 'FAQs', path: '/faq'},
    {name: 'Privacy Policy', path: '/privacy'},
    {name: 'Terms & Conditions', path: '/terms'},
  ];

  const services = [
    'Cat Boarding', 'Dog Boarding', 'Vet Home Visit', 
    'Vaccinations', 'Emergency Care', 'Pet Training',
    'Grooming Services', 'Pet Taxi'
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C1810] to-[#1A0F0A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] p-2.5 rounded-xl">
                <GiPawHeart className="text-[#2C1810] text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold">
                  Bruno's<span className="text-[#D4A054]">Family</span>
                </span>
                <p className="text-xs text-gray-400">& Cafe</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Providing loving, professional pet care services across Delhi NCR since 2008. 
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

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4A054]"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-[#D4A054] transition-colors text-sm flex items-center gap-2"
                  >
                    <MdPets className="text-[#D4A054] text-xs" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4A054]"></span>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Emergency Hotline</p>
                  <p className="font-semibold text-sm">+91-9971200705</p>
                  <p className="text-xs text-gray-500">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="font-semibold text-sm">care@brunosfamily.com</p>
                  <p className="text-xs text-gray-500">Response within 1 hour</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#D4A054]/20 p-2 rounded-lg text-[#D4A054] mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="font-semibold text-sm">Delhi NCR</p>
                  <p className="text-xs text-gray-500">Gurgaon | Noida | Faridabad</p>
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

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold">Newsletter</h4>
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
          50% { transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;