// src/components/PetCafe.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaCoffee, 
  FaHeart, 
  FaHome, 
  FaDog, 
  FaStar, 
  FaArrowRight,
  FaCheckCircle,
  FaMugHot,
  FaCookie,
  FaIceCream,
  FaUtensils,
  FaLeaf,
  FaSmile,
  FaUsers,
  FaGem,
  FaQuoteLeft,
  FaInstagram,
  FaFacebook,
  FaTwitter
} from 'react-icons/fa';
import { MdLocalCafe, MdRestaurant, MdSecurity } from 'react-icons/md';
import { GiPawHeart, GiCoffeeCup, GiDogBowl } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PetCafe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('pet-cafe');
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

  const cafeFeatures = [
    { icon: <FaHome />, title: 'Comfortable Seating', desc: 'Relax on our cozy sofas and chairs', color: '#8B5E3C' },
    { icon: <FaDog />, title: 'Pet-Friendly Environment', desc: 'Your furry friends are always welcome', color: '#D4A054' },
    { icon: <GiDogBowl />, title: 'Special Treats for Dogs', desc: 'Healthy, delicious treats for your pet', color: '#6B2E2E' },
    { icon: <MdSecurity />, title: 'Calm & Hygienic Space', desc: 'Clean, safe, and peaceful atmosphere', color: '#A0714F' }
  ];

  const menuItems = [
    { icon: <FaCoffee />, name: 'Pet Parent Coffee', price: '₹149', popular: true },
    { icon: <FaMugHot />, name: 'Hot Chocolate', price: '₹199', popular: false },
    { icon: <FaIceCream />, name: 'Pet Ice Cream', price: '₹99', popular: true },
    { icon: <FaCookie />, name: 'Dog Treats', price: '₹79', popular: true },
    { icon: <FaUtensils />, name: 'Pup Cup', price: '₹49', popular: false },
    { icon: <FaHeart />, name: 'Loving Bowl', price: '₹129', popular: true }
  ];

  const specialOffers = [
    { text: 'Free Pet Treat with Every Coffee', icon: <FaCookie />, color: '#D4A054' },
    { text: '10% Off for First-Time Visitors', icon: <FaHeart />, color: '#8B5E3C' },
    { text: 'Happy Hours: 2 PM - 5 PM', icon: <FaQuoteLeft />, color: '#6B2E2E' },
    { text: 'Birthday Free Treat for Your Pet', icon: <FaStar />, color: '#D4A054' }
  ];

  const reviews = [
    { name: 'Ritika Sharma', text: 'Best pet cafe in town! My dog loved the treats and the staff is so caring.', rating: 5, pet: 'Bruno' },
    { name: 'Arjun Mehta', text: 'Finally a place where I can enjoy coffee with my cat. Great ambiance!', rating: 5, pet: 'Kitty' },
    { name: 'Priya Singh', text: 'Very clean and hygienic. The special dog menu is amazing.', rating: 5, pet: 'Max' }
  ];

  return (
    <section id="pet-cafe" className="py-20 bg-gradient-to-br from-[#FDF8F0] to-[#F5EDE4]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <MdLocalCafe className="text-[#8B5E3C]" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Pet-Friendly Café</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            A Cozy Space for{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              You & Your Pet
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enjoy a relaxing time with your furry friend at our pet-friendly café. 
            Whether it's coffee for you or treats for your dog, we've created a space 
            where both can feel at home.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          
          {/* Left Side - Features */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              {cafeFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-x-1 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <FaGem className="text-[#D4A054]" /> Special Offers
              </h3>
              <div className="space-y-2">
                {specialOffers.map((offer, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-[#D4A054]">{offer.icon}</span>
                    <span>{offer.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Menu */}
          <div className={`bg-white rounded-2xl p-6 shadow-xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <GiCoffeeCup className="text-[#D4A054]" /> Pet-Friendly Menu
              </h3>
              <span className="text-xs text-gray-400">*Prices inclusive of taxes</span>
            </div>
            
            <div className="space-y-3">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#8B5E3C]/10 to-[#D4A054]/10 flex items-center justify-center text-[#8B5E3C]">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">{item.name}</span>
                      {item.popular && (
                        <span className="ml-2 text-xs bg-[#D4A054]/20 text-[#8B5E3C] px-2 py-0.5 rounded-full">Popular</span>
                      )}
                    </div>
                  </div>
                  <span className="font-bold text-[#D4A054]">{item.price}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-[#D4A054] to-[#B8860B] text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
              Reserve a Table <FaArrowRight />
            </button>
          </div>

        </div>

        {/* Why Visit Us Banner */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-r from-[#D4A054]/10 to-[#F5C27B]/20 rounded-2xl p-6 border border-[#D4A054]/30">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Why Visit Us? 🌟</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: <FaHome />, text: 'Comfortable Seating' },
                { icon: <FaDog />, text: 'Pet-Friendly Environment' },
                { icon: <GiDogBowl />, text: 'Special Treats for Dogs' },
                { icon: <MdSecurity />, text: 'Calm & Hygienic Space' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-2 text-gray-700">
                  <span className="text-[#D4A054]">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#D4A054] text-sm" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-3">"{review.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-400">with {review.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram/Follow Section */}
        <div className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-md">
            <span className="text-gray-600">Follow us on</span>
            <div className="flex gap-3">
              <FaInstagram className="text-[#E4405F] text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaFacebook className="text-[#1877F2] text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaTwitter className="text-[#1DA1F2] text-xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
            <span className="text-[#8B5E3C] font-semibold">@BrunosFamilyCafe</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default PetCafe;