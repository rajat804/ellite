// src/components/FAQSection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPlus, 
  FaMinus, 
  FaQuestionCircle, 
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaChevronRight,
  FaSearch
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const Faq = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq-section');
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

  const faqs = [
    {
      id: 1,
      question: "How do I book a service for my pet?",
      answer: "Booking is super easy! You can book online through our website by filling out the booking form, call us directly at +91-9582582689, or send us a message on WhatsApp. We'll confirm your booking within 30 minutes and send you all the details.",
      category: "Booking"
    },
    {
      id: 2,
      question: "Are your staff members trained and verified?",
      answer: "Yes, absolutely! All our staff members are background-verified, professionally trained, and experienced in pet care. Our team includes licensed veterinarians, certified pet groomers, and trained pet sitters who undergo regular training sessions.",
      category: "Safety"
    },
    {
      id: 3,
      question: "Do you provide pickup and drop service?",
      answer: "Yes, we offer free pickup and drop service for boarding within Delhi NCR. Our sanitized, air-conditioned vehicles ensure your pet travels safely and comfortably. For medical services, our vets come directly to your home.",
      category: "Logistics"
    },
    {
      id: 4,
      question: "What about emergency situations?",
      answer: "We provide 24/7 emergency support for all our clients. Our emergency helpline is always available. For critical situations, we have tie-ups with leading veterinary hospitals and can arrange immediate medical attention.",
      category: "Emergency"
    },
    {
      id: 5,
      question: "Can I get daily updates about my pet?",
      answer: "Definitely! We send daily photo and video updates on WhatsApp so you can see exactly what your pet is doing. You'll receive updates about meals, playtime, walks, and any special activities. This keeps you connected even when you're away.",
      category: "Updates"
    },
    {
      id: 6,
      question: "What is your cancellation policy?",
      answer: "You can cancel or reschedule your booking up to 24 hours before the service without any charges. For last-minute cancellations, a nominal fee may apply. We understand emergencies happen, so just give us a call and we'll work something out.",
      category: "Policy"
    },
    {
      id: 7,
      question: "Do you offer long-term boarding discounts?",
      answer: "Yes! We offer special discounts for long-term stays. 10% off for stays of 7+ days and 15% off for 14+ days. We also have monthly packages available at even better rates. Contact us for a custom quote.",
      category: "Pricing"
    },
    {
      id: 8,
      question: "What vaccinations are required for boarding?",
      answer: "For the safety of all pets, we require proof of current vaccinations including Rabies, DHPP/DHLPP for dogs, and FVRCP for cats. Puppies and kittens should have completed their initial vaccine series. Contact us for specific requirements.",
      category: "Health"
    },
    {
      id: 9,
      question: "Can I visit the facility before booking?",
      answer: "Absolutely! We encourage all pet parents to visit our facility before booking. You can see the environment, meet our staff, and ask any questions. Just schedule a visit by calling us.",
      category: "Booking"
    },
    {
      id: 10,
      question: "What if my pet has special dietary needs?",
      answer: "We accommodate all dietary requirements. You can send your pet's own food with feeding instructions, or we can prepare special meals based on your pet's needs at no extra cost.",
      category: "Health"
    }
  ];

  const categories = ['All', 'Booking', 'Safety', 'Logistics', 'Emergency', 'Updates', 'Policy', 'Pricing', 'Health'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#007B7F]/10 px-4 py-2 rounded-full mb-4">
            <FaQuestionCircle className="text-[#007B7F] text-lg" />
            <span className="text-[#007B7F] font-semibold text-sm uppercase tracking-wide">
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
            Frequently Asked{' '}
            <span className="relative inline-block">
              Questions
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 4 L200 4" stroke="#FFD1B3" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg">
            Everything you need to know about our services
          </p>
        </div>

        {/* Search Bar */}
        <div className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search your question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#007B7F] focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#007B7F] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#007B7F]/10 hover:text-[#007B7F]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No questions found matching your search.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <div
                key={faq.id}
                className={`mb-4 rounded-xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${0.3 + idx * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 bg-[#FFF9F0] hover:bg-[#FFF5E6] transition-colors text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#007B7F] font-semibold bg-[#007B7F]/10 px-2 py-0.5 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <span className="font-semibold text-[#2C3E50]">{faq.question}</span>
                  </div>
                  <div className={`ml-4 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                    {openIndex === idx ? <FaMinus className="text-[#007B7F]" /> : <FaPlus className="text-[#007B7F]" />}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="p-5 bg-white border border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Still Have Questions */}
        <div className={`text-center mt-12 p-8 bg-gradient-to-r from-[#007B7F]/5 to-[#FFD1B3]/20 rounded-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold text-[#2C3E50] mb-2">Still Have Questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please contact our support team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#007B7F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#007B7F]/80 transition-all flex items-center gap-2">
              <FaPhoneAlt /> Call Us Now
            </button>
            
            <button className="border-2 border-gray-300 text-gray-600 px-6 py-2 rounded-full font-semibold hover:border-[#007B7F] hover:text-[#007B7F] transition-all flex items-center gap-2">
              <FaComments /> WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;