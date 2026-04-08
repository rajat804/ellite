// src/components/Footer.jsx
import React, { useState } from 'react';
import { 
  FaPaw, FaHeart, FaFacebook, FaInstagram, FaTwitter, FaYoutube, 
  FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,
  FaChevronRight, FaShieldAlt, FaTruck, FaCreditCard, FaAward,
  FaArrowUp
} from 'react-icons/fa';
import { MdVerified, MdPets } from 'react-icons/md';

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
    'Home', 'About Us', 'Services', 'Testimonials', 
    'Contact', 'FAQs', 'Privacy Policy', 'Terms & Conditions'
  ];

  const services = [
    'Cat Boarding', 'Dog Boarding', 'Vet Home Visit', 
    'Vaccinations', 'Emergency Care', 'Pet Training',
    'Grooming Services', 'Pet Taxi'
  ];

  return (
    <footer className="bg-[#2C3E50] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-[#007B7F] p-2.5 rounded-xl">
                <FaPaw className="text-white text-2xl" />
              </div>
              <div>
                <span className="text-2xl font-bold">Pet<span className="text-[#007B7F]">Care</span></span>
                <p className="text-xs text-gray-400">Trusted Pet Care Services</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Providing loving, professional pet care services across Delhi NCR since 2008. 
              Your pet's second home, where they're treated like family.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <FaAward className="text-yellow-500" />
                <span>15+ Years</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <MdVerified className="text-[#007B7F]" />
                <span>17k+ Families</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs">
                <FaShieldAlt className="text-emerald-500" />
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
                    className="bg-white/10 p-3 rounded-full hover:bg-[#007B7F] transition-all hover:scale-110 duration-300"
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
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#007B7F]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-[#007B7F] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#007B7F]"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-[#007B7F] transition-colors text-sm flex items-center gap-2"
                  >
                    <MdPets className="text-[#007B7F] text-xs" />
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
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#007B7F]"></span>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <div className="bg-[#007B7F]/20 p-2 rounded-lg text-[#007B7F] mt-1">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Emergency Hotline</p>
                  <p className="font-semibold text-sm">+91-9582582689</p>
                  <p className="text-xs text-gray-500">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#007B7F]/20 p-2 rounded-lg text-[#007B7F] mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="font-semibold text-sm">care@petcare.com</p>
                  <p className="text-xs text-gray-500">Response within 1 hour</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="bg-[#007B7F]/20 p-2 rounded-lg text-[#007B7F] mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Visit Us</p>
                  <p className="font-semibold text-sm">Delhi NCR</p>
                  <p className="text-xs text-gray-500">Gurgaon | Noida | Faridabad</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-[#007B7F]/20 p-2 rounded-lg text-[#007B7F] mt-1">
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
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#007B7F] text-white placeholder:text-gray-500 text-sm"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#007B7F] px-4 py-2 rounded-lg hover:bg-[#007B7F]/80 transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-green-400 text-xs animate-fade-in">
                  ✓ Subscribed successfully!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-700 mb-6">
          {[
            { icon: <FaShieldAlt />, text: 'Safe & Secure', color: 'text-emerald-500', bg: 'bg-emerald-500/20' },
            { icon: <FaTruck />, text: 'Free Pickup/Drop', color: 'text-blue-500', bg: 'bg-blue-500/20' },
            { icon: <FaHeart />, text: 'Loving Care', color: 'text-rose-500', bg: 'bg-rose-500/20' },
            { icon: <FaCreditCard />, text: 'Easy Payment', color: 'text-purple-500', bg: 'bg-purple-500/20' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
              <div className={`${feature.bg} p-2 rounded-lg ${feature.color}`}>
                {feature.icon}
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                © 2024 PetCare Services. All rights reserved. | 
                <a href="#privacy" className="hover:text-[#007B7F] ml-1">Privacy Policy</a>
                <span className="mx-2">|</span>
                <a href="#terms" className="hover:text-[#007B7F]">Terms of Service</a>
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <FaHeart className="text-rose-500 animate-pulse" />
              <span>Made with love for pets</span>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-2">
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Visa</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Mastercard</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">UPI</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">Paytm</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#007B7F] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
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