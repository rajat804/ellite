// src/components/PremiumDogMenu.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaUtensils, 
  FaCheckCircle,
  FaGem,
  FaCoffee,
  FaArrowRight,
  FaStar,
  FaFire
} from 'react-icons/fa';
import { GiChicken, GiMeat, GiFishingBoat, GiFriedEggs, GiCarrot, GiToaster, GiHotMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const PremiumDogMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('premium-menu');
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

  const menuItems = [
    {
      id: 1,
      name: "Chicken & Rice Bowl",
      price: "₹199",
      originalPrice: "₹249",
      description: "Fresh boiled chicken with steamed rice",
      benefits: "Light, protein-rich & easy to digest",
      icon: <GiChicken />,
      category: "nonveg",
      popular: true,
      tag: "Best Seller",
      bg: "from-amber-50 to-orange-50",
      iconBg: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      name: "Lamb Delight Bowl",
      price: "₹249",
      originalPrice: "₹299",
      description: "Soft lamb chunks with rice & veggies",
      benefits: "High-energy premium meal",
      icon: <GiMeat />,
      category: "nonveg",
      popular: true,
      tag: "Premium",
      bg: "from-red-50 to-rose-50",
      iconBg: "from-red-500 to-rose-600"
    },
    {
      id: 3,
      name: "Fish & Rice Meal",
      price: "₹229",
      originalPrice: "₹279",
      description: "Boiled fish with rice",
      benefits: "Rich in omega for healthy coat",
      icon: <GiFishingBoat />,
      category: "nonveg",
      popular: false,
      tag: "Omega Rich",
      bg: "from-blue-50 to-cyan-50",
      iconBg: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      name: "Egg Power Bowl",
      price: "₹179",
      originalPrice: "₹219",
      description: "Boiled eggs with rice & carrots",
      benefits: "Protein-packed & budget friendly",
      icon: <GiFriedEggs />,
      category: "veg",
      popular: true,
      tag: "Budget Friendly",
      bg: "from-yellow-50 to-amber-50",
      iconBg: "from-yellow-500 to-amber-600"
    },
    {
      id: 5,
      name: "Veggie Khichdi",
      price: "₹149",
      originalPrice: "₹189",
      description: "Rice + dal + seasonal veggies",
      benefits: "Light & gut-friendly",
      icon: <GiHotMeal />,
      category: "veg",
      popular: false,
      tag: "Gut Friendly",
      bg: "from-green-50 to-emerald-50",
      iconBg: "from-green-500 to-emerald-600"
    },
    {
      id: 6,
      name: "Paneer & Veg Bowl",
      price: "₹199",
      originalPrice: "₹249",
      description: "Soft paneer with carrots & beans",
      benefits: "Perfect vegetarian option",
      icon: <GiToaster />,
      category: "veg",
      popular: true,
      tag: "Veg Favorite",
      bg: "from-purple-50 to-pink-50",
      iconBg: "from-purple-500 to-pink-600"
    },
    {
      id: 7,
      name: "Sweet Potato Mash Bowl",
      price: "₹169",
      originalPrice: "₹199",
      description: "Mashed sweet potato with veggies",
      benefits: "Great for digestion",
      icon: <GiCarrot />,
      category: "veg",
      popular: false,
      tag: "Digestive Health",
      bg: "from-orange-50 to-amber-50",
      iconBg: "from-orange-500 to-amber-600"
    },
    {
      id: 8,
      name: "Chicken Broth Bowl",
      price: "₹149",
      originalPrice: "₹189",
      description: "Slow-cooked chicken broth with rice",
      benefits: "Hydrating & comforting",
      icon: <GiHotMeal />,
      category: "nonveg",
      popular: false,
      tag: "Hydrating",
      bg: "from-slate-50 to-gray-50",
      iconBg: "from-slate-500 to-gray-600"
    },
    {
      id: 9,
      name: "Summer Special Treat Bowl",
      price: "₹129",
      originalPrice: "₹159",
      description: "Watermelon + cucumber + mint (dog-safe)",
      benefits: "Cooling & refreshing",
      icon: <FaHeart />,
      category: "special",
      popular: true,
      tag: "Summer Special",
      bg: "from-pink-50 to-rose-50",
      iconBg: "from-pink-500 to-rose-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: <FaUtensils />, count: menuItems.length },
    { id: 'veg', name: 'Vegetarian', icon: <GiCarrot />, count: menuItems.filter(item => item.category === 'veg').length },
    { id: 'nonveg', name: 'Non-Veg', icon: <GiChicken />, count: menuItems.filter(item => item.category === 'nonveg').length },
    { id: 'special', name: 'Special', icon: <FaStar />, count: menuItems.filter(item => item.category === 'special').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const popularItems = menuItems.filter(item => item.popular);

  return (
    <section id="premium-menu" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#FDF8F0]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <GiHotMeal className="text-[#D4A054] text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Premium Dog Menu</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            🐶 Bruno's Family –{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Premium Dog Menu
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Delicious, healthy, and vet-approved meals for your furry friend. Made fresh daily with premium ingredients!
          </p>
        </div>

        {/* Popular Items Banner */}
        <div className={`mb-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <FaFire className="text-2xl animate-pulse" />
              <div>
                <h3 className="font-bold">🔥 Most Popular Items</h3>
                <p className="text-sm opacity-90">Customer favorites!</p>
              </div>
            </div>
            <div className="flex gap-3">
              {popularItems.slice(0, 4).map((item, idx) => (
                <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {item.name.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md'
              }`}
            >
              {cat.icon}
              {cat.name}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Popular Tag */}
              {item.popular && (
                <div className="relative">
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <FaFire className="text-xs" /> {item.tag}
                    </div>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                      {item.tag && !item.popular && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{item.tag}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-[#D4A054]">{item.price}</span>
                      <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                
                <div className="flex items-center gap-1 text-xs text-green-600 mb-4">
                  <FaCheckCircle className="text-[10px]" /> {item.benefits}
                </div>

                {/* <Link 
                  to="/booknow" 
                  className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm group"
                >
                  Book Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link> */}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Highlights */}
        <div className={`mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-xl p-3 text-center shadow-md">
            <div className="w-10 h-10 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
              <FaCheckCircle />
            </div>
            <p className="text-xs text-gray-600">Freshly Prepared</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-md">
            <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
              <FaHeart />
            </div>
            <p className="text-xs text-gray-600">Vet Approved</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-md">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
              <FaGem />
            </div>
            <p className="text-xs text-gray-600">Premium Quality</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center shadow-md">
            <div className="w-10 h-10 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
              <FaCoffee />
            </div>
            <p className="text-xs text-gray-600">Customizable</p>
          </div>
        </div>

        {/* Note */}
        <div className={`mt-6 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
            <span className="text-amber-600">💡</span>
            <span className="text-xs text-amber-700">All meals are prepared fresh with premium ingredients. Customizations available on request!</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; opacity: 0; }
        .animate-pulse { animation: pulse 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default PremiumDogMenu;