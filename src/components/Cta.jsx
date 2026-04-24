// src/components/CTASection.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaArrowRight, 
  FaHeart, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaSmile,
  FaCalendarCheck,
  FaGift,
  FaCheckCircle,
  FaSpinner,
  FaGem,
  FaCoffee
} from 'react-icons/fa';

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('cta-section');
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Send WhatsApp message
  const sendWhatsAppMessage = async (data) => {
    const phoneNumber = "917217747900"; // Remove + sign for international format
    
    // Format the message
    const message = `🐾 *New Pet Care Request - Bruno's Family* 🐾

☕ *Customer Details:*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}
🎯 *Service:* ${data.service}
━━━━━━━━━━━━━━━━━━━━

⏰ *Request Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📌 *Status:* Pending - Need immediate follow-up

━━━━━━━━━━━━━━━━━━━━
*Bruno's Family & Cafe* 🐕☕`;

    // Encode the message for WhatsApp API
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    return true;
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    // Validate phone number (basic validation)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send WhatsApp message
      await sendWhatsAppMessage(formData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <FaClock />, text: "Instant Confirmation", color: "text-[#8B5E3C]" },
    { icon: <FaShieldAlt />, text: "Safe & Secure", color: "text-[#6B2E2E]" },
    { icon: <FaHeart />, text: "Loving Care", color: "text-[#D4A054]" },
    { icon: <FaSmile />, text: "100% Satisfaction", color: "text-[#F5C27B]" }
  ];

  const offers = [
    { text: "10% OFF on first booking", icon: "🎉" },
    { text: "Free pickup & drop", icon: "🚗" },
    { text: "Daily photo updates", icon: "📸" },
    { text: "24/7 vet support", icon: "🏥" }
  ];

  return (
    <section id="cta-section" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Gradient - Bruno's Theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F0] to-[#F5EDE4]"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4A054] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B5E3C] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Content */}
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 px-4 py-2 rounded-full mb-6">
                  <FaGift className="text-[#D4A054]" />
                  <span className="text-[#8B5E3C] font-semibold text-sm">Limited Time Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  Ready to Give Your{' '}
                  <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">Pet the Best Care?</span>
                </h2>
                
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Join 17,000+ happy pet parents who trust us with their furry family members. 
                  Limited slots available for personalized care. Book your pet's stay or service today!
                </p>

                {/* Offers List */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {offers.map((offer, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-lg">{offer.icon}</span>
                      <span className="text-sm text-gray-600">{offer.text}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-sm">
                      <span className={benefit.color}>{benefit.icon}</span>
                      <span className="text-gray-500">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Bruno's Theme */}
                <div className="flex flex-wrap gap-4">
                  <button className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg">
                    Book Now <FaArrowRight />
                  </button>
                  <button className="border-2 border-[#D4A054] text-[#8B5E3C] px-8 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[#8B5E3C] hover:to-[#6B2E2E] hover:text-white transition-all flex items-center gap-2">
                    <FaPhoneAlt /> Call Now
                  </button>
                  <button className="border-2 border-gray-300 text-gray-500 px-8 py-3 rounded-full font-semibold hover:border-[#D4A054] hover:text-[#D4A054] transition-all flex items-center gap-2">
                    <FaWhatsapp /> WhatsApp
                  </button>
                </div>
              </div>

              {/* Right Side - Contact Form & Info - Bruno's Theme */}
              <div className="bg-gradient-to-br from-[#8B5E3C] to-[#6B2E2E] p-8 md:p-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <FaGem className="text-[#D4A054] text-2xl" />
                  <h3 className="text-2xl font-bold">Get a Free Quote</h3>
                </div>
                <p className="text-white/90 mb-6 text-sm">
                  Fill in your details and we'll get back to you within 30 minutes
                </p>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2 animate-fade-in">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-sm">Request sent! We'll contact you shortly on WhatsApp.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-2 animate-fade-in">
                    <span className="text-sm">Please fill all fields correctly (10-digit phone number)</span>
                  </div>
                )}

                {/* Contact Form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4A054] text-white placeholder:text-white/50"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4A054] text-white placeholder:text-white/50"
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number (10 digits)"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4A054] text-white placeholder:text-white/50"
                  />
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-[#D4A054] text-white"
                  >
                    <option value="" className="text-[#2C1810]">Select Service</option>
                    <option value="Dog Boarding" className="text-[#2C1810]">Dog Boarding</option>
                    <option value="Cat Boarding" className="text-[#2C1810]">Cat Boarding</option>
                    <option value="Vet Home Visit" className="text-[#2C1810]">Vet Home Visit</option>
                    <option value="Grooming" className="text-[#2C1810]">Grooming</option>
                    <option value="Training" className="text-[#2C1810]">Training</option>
                    <option value="Play Hours" className="text-[#2C1810]">Play Hours</option>
                  </select>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp /> Request Callback on WhatsApp
                      </>
                    )}
                  </button>
                </form>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-white/80">
                    <FaPhoneAlt className="text-[#D4A054]" />
                    <span>+91-9582582689 (24/7 Support)</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <FaEnvelope className="text-[#D4A054]" />
                    <span>care@brunosfamily.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <FaWhatsapp className="text-[#D4A054]" />
                    <span>+91-7217747900 (WhatsApp)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription - Bruno's Theme */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex-wrap">
              <span className="text-[#D4A054]">☕</span>
              <span className="text-gray-700 text-sm">Get 10% off on your first booking</span>
              <form onSubmit={handleSubscribe} className="flex gap-2 ml-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-1 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-[#D4A054]"
                  required
                />
                <button type="submit" className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-4 py-1 rounded-full text-sm hover:shadow-md transition-all">
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <span className="text-green-600 text-xs animate-fade-in">✓ Subscribed!</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Cta;