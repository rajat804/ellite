// src/components/SummerSpecialMenu.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaSnowflake, 
  FaUtensils, 
  FaCookie,
  FaAppleAlt,
  FaFish,
  FaEgg,
  FaCarrot,
  FaCheese,
  FaWater,
  FaCheckCircle,
  FaGem,
  FaCoffee,
  FaCalendarDay,
  FaCalendarWeek,
  FaLeaf
} from 'react-icons/fa';
import { GiChicken, GiMeat, GiDogBowl, GiPawHeart, GiHotMeal } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const SummerSpecialMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('diet'); // 'diet' or 'premium'

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('summer-menu');
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

  // 7-Day Diet Plan
  const dietPlan = [
    {
      day: 1,
      title: "Detox & Light Start",
      morning: "Boiled chicken + rice + pumpkin",
      evening: "Curd + rice + carrot",
      snack: "Apple slices",
      icon: <FaAppleAlt />,
      color: "green"
    },
    {
      day: 2,
      title: "Protein Boost",
      morning: "Chicken broth + rice",
      evening: "Paneer + veggies (carrot, beans)",
      snack: "Banana bites",
      icon: <GiChicken />,
      color: "orange"
    },
    {
      day: 3,
      title: "Omega Day",
      morning: "Boiled fish + rice",
      evening: "Sweet potato mash + curd",
      snack: "Watermelon",
      icon: <FaFish />,
      color: "blue"
    },
    {
      day: 4,
      title: "Energy Meal",
      morning: "Chicken + boiled egg + rice",
      evening: "Veg khichdi (rice + dal + veggies)",
      snack: "Cucumber sticks",
      icon: <FaEgg />,
      color: "yellow"
    },
    {
      day: 5,
      title: "Gut Health Day",
      morning: "Curd rice + pumpkin",
      evening: "Chicken + spinach + rice",
      snack: "Papaya",
      icon: <FaLeaf />,
      color: "green"
    },
    {
      day: 6,
      title: "Strength & Shine",
      morning: "Egg + rice + carrot",
      evening: "Paneer + sweet potato",
      snack: "Coconut water (small amount)",
      icon: <FaCarrot />,
      color: "orange"
    },
    {
      day: 7,
      title: "Premium Treat Day",
      morning: "Chicken + rice + veggies",
      evening: "Light chicken broth + rice",
      snack: "Mint cooler / Paw-jito (dog-safe)",
      icon: <GiPawHeart />,
      color: "pink"
    }
  ];

  // Premium Dog Menu
  const premiumMenu = [
    { 
      id: 1,
      name: "Chicken & Rice Bowl",
      description: "Fresh boiled chicken with steamed rice",
      benefits: "Light, protein-rich & easy to digest",
      icon: <GiChicken />,
      price: "₹199",
      color: "orange"
    },
    { 
      id: 2,
      name: "Lamb Delight Bowl",
      description: "Soft lamb chunks with rice & veggies",
      benefits: "Perfect for energy & strength",
      icon: <GiMeat />,
      price: "₹299",
      color: "red"
    },
    { 
      id: 3,
      name: "Fish & Rice Meal",
      description: "Boiled fish with rice",
      benefits: "Rich in omega for shiny coat",
      icon: <FaFish />,
      price: "₹249",
      color: "blue"
    },
    { 
      id: 4,
      name: "Egg Power Bowl",
      description: "Boiled eggs with rice & carrots",
      benefits: "Protein-packed meal",
      icon: <FaEgg />,
      price: "₹179",
      color: "yellow"
    },
    { 
      id: 5,
      name: "Veggie Khichdi",
      description: "Rice + dal + seasonal veggies",
      benefits: "Light & gut-friendly",
      icon: <GiHotMeal />,
      price: "₹159",
      color: "green"
    },
    { 
      id: 6,
      name: "Paneer & Veg Bowl",
      description: "Soft paneer with carrots & beans",
      benefits: "Great vegetarian option",
      icon: <FaCheese />,
      price: "₹199",
      color: "purple"
    },
    { 
      id: 7,
      name: "Sweet Potato Mash",
      description: "Mashed sweet potato with veggies",
      benefits: "Perfect for digestion",
      icon: <FaCarrot />,
      price: "₹149",
      color: "orange"
    },
    { 
      id: 8,
      name: "Chicken Broth Bowl",
      description: "Slow-cooked chicken broth with rice",
      benefits: "Hydrating & comforting",
      icon: <GiDogBowl />,
      price: "₹179",
      color: "brown"
    },
    { 
      id: 9,
      name: "Summer Special Treat Bowl",
      description: "Watermelon + cucumber + mint (dog-safe)",
      benefits: "Cooling & refreshing",
      icon: <FaWater />,
      price: "₹129",
      color: "pink"
    },
    { 
      id: 10,
      name: "Buttermilk Refresher",
      description: "Light, diluted buttermilk",
      benefits: "Helps digestion & keeps cool",
      icon: <FaCoffee />,
      price: "₹99",
      color: "cream"
    }
  ];

  return (
    <section id="summer-menu" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#FDF8F0]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <FaSnowflake className="text-[#D4A054] text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Summer Special 2024</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            ☀️🐾 Summer Special{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              For Your Fur Baby
            </span>
          </h2>
          
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Heat waves are real… but so is our cool care 💙
          </p>
        </div>

        {/* Cold Water Therapy Banner */}
        <div className={`mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <FaSnowflake className="text-3xl animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold">❄️ Cold Water Therapy</h3>
                <p className="text-white/90 text-sm">For heat & heat stroke care</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold">₹800</span>
              <span className="text-sm opacity-90">for 2 Hours</span>
              <Link to="/booknow" className="bg-white text-cyan-600 px-5 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm">
                Book Now →
              </Link>
            </div>
          </div>
        </div>

        {/* Menu Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveMenuTab('diet')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeMenuTab === 'diet'
                ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md'
            }`}
          >
            <FaCalendarWeek /> 7-Day Summer Diet Plan
          </button>
          <button
            onClick={() => setActiveMenuTab('premium')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              activeMenuTab === 'premium'
                ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-[#D4A054]/20 hover:text-[#8B5E3C] shadow-md'
            }`}
          >
            <GiDogBowl /> Premium Dog Menu 🍽️
          </button>
        </div>

        {/* 7-Day Summer Diet Plan */}
        {activeMenuTab === 'diet' && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">📋 7-Day Summer Special Diet Plan</h3>
              <p className="text-gray-500 text-sm">Nutritionally balanced meals to keep your dog healthy & cool</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dietPlan.map((day) => (
                <div key={day.day} className={`bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-${day.color}-500`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-${day.color}-100 flex items-center justify-center text-${day.color}-600`}>
                      {day.icon}
                    </div>
                    <div>
                      <span className={`text-xs font-semibold text-${day.color}-600 bg-${day.color}-100 px-2 py-0.5 rounded-full`}>Day {day.day}</span>
                      <h4 className="font-bold text-gray-800">{day.title}</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-500">🌅</span>
                      <span className="text-gray-600"><strong>Morning:</strong> {day.morning}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-indigo-500">🌙</span>
                      <span className="text-gray-600"><strong>Evening:</strong> {day.evening}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">🍎</span>
                      <span className="text-gray-600"><strong>Snack:</strong> {day.snack}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Diet Plan Note */}
            <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200 text-center">
              <p className="text-sm text-amber-700">💡 All meals are prepared fresh daily with vet-approved ingredients. Perfect for summer!</p>
            </div>
          </div>
        )}

        {/* Premium Dog Menu */}
        {activeMenuTab === 'premium' && (
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">🐶 Bruno's Family – Premium Dog Menu 🍽️</h3>
              <p className="text-gray-500 text-sm">Delicious, healthy, and vet-approved meals for your furry friend</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {premiumMenu.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center text-${item.color}-600 text-xl group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.name}</h4>
                      <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                      <span className="text-lg font-bold text-[#D4A054] ml-2">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <FaCheckCircle className="text-[10px]" /> {item.benefits}
                  </div>
                  <Link to="/booknow" className="mt-3 inline-block w-full bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white text-center py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm">
                    Order Now →
                  </Link>
                </div>
              ))}
            </div>

            {/* Menu Note */}
            <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-200 text-center">
              <p className="text-sm text-green-700">✅ All meals are prepared fresh with premium ingredients. Customizations available on request!</p>
            </div>
          </div>
        )}

        {/* Premium Badge */}
        <div className={`text-center mt-10 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] px-5 py-2.5 rounded-full shadow-lg">
            <GiPawHeart className="text-white text-lg" />
            <span className="text-white font-semibold text-sm">🐾 Summer Special Menu • Limited Time Offer 🐾</span>
            <FaGem className="text-[#F5C27B] text-sm" />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; opacity: 0; }
        .animate-pulse { animation: pulse 1s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default SummerSpecialMenu;