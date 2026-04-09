// src/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaGlobe,
  FaBuilding,
  FaMobile,
  FaFax
} from 'react-icons/fa';
import { MdVerified, MdLocationOn, MdEmail, MdPhone, MdAccessTime } from 'react-icons/md';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact-page');
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      setSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      details: ["+91-9582582689", "+91-9876543210"],
      color: "#007B7F",
      bg: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: ["+91-9582582689"],
      color: "#25D366",
      bg: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: ["care@happypettings.com", "info@happypettings.com"],
      color: "#E67E22",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Monday - Sunday: 24/7", "365 Days a Year"],
      color: "#6B4E71",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100"
    }
  ];

  const locations = [
    {
      name: "Head Office - Gurgaon",
      address: "DLF Phase 3, Sector 24, Gurugram, Haryana 122002",
      phone: "+91-9582582689",
      email: "gurgaon@happypettings.com",
      timing: "24/7 Open",
      mapUrl: "https://maps.google.com/?q=DLF+Phase+3+Gurgaon"
    },
    {
      name: "Branch - Noida",
      address: "Sector 18, Noida, Uttar Pradesh 201301",
      phone: "+91-9876543210",
      email: "noida@happypettings.com",
      timing: "24/7 Open",
      mapUrl: "https://maps.google.com/?q=Sector+18+Noida"
    },
    {
      name: "Branch - Delhi",
      address: "Connaught Place, New Delhi 110001",
      phone: "+91-9999998888",
      email: "delhi@happypettings.com",
      timing: "24/7 Open",
      mapUrl: "https://maps.google.com/?q=Connaught+Place+Delhi"
    }
  ];

  const services = [
    "Dog Boarding",
    "Cat Boarding",
    "Vet Home Visit",
    "Vaccination",
    "Grooming",
    "Training",
    "Emergency Care",
    "Pet Taxi"
  ];

  return (
    <div id="contact-page" className="min-h-screen bg-gradient-to-b from-white to-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#007B7F] to-[#005C5F] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 mx-auto w-fit">
              <FaHeart className="text-[#FFD1B3]" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Contact{' '}
              <span className="relative inline-block text-[#FFD1B3]">
                Us
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 3 L200 3" stroke="#FFD1B3" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" className="animate-dash"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Reach out to us for any queries, bookings, or feedback.
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FFF9F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactInfo.map((info, idx) => (
            <div key={idx} className={`${info.bg} rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group`}>
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ color: info.color }}>
                <span className="text-xl">{info.icon}</span>
              </div>
              <h3 className="font-bold text-[#2C3E50] mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-2">Send Us a Message</h2>
                <p className="text-gray-500">Fill out the form below and we'll get back to you within 30 minutes</p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2 text-green-600">
                    <FaCheckCircle />
                    <span>Thank you! We'll contact you soon.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Your Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#007B7F] focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#007B7F] focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Phone Number *</label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#007B7F] focus:outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Select Service</label>
                    <div className="relative">
                      <FaPaw className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#007B7F] focus:outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                          <option key={idx} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C3E50] mb-2">Your Message *</label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#007B7F] focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your pet and requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#007B7F] text-white py-3 rounded-lg font-semibold hover:bg-[#007B7F]/80 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>Sending... <FaPaperPlane /></>
                  ) : (
                    <>Send Message <FaPaperPlane /></>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-gray-500">Follow us on:</span>
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"><FaFacebook className="text-sm" /></a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all"><FaInstagram className="text-sm" /></a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all"><FaTwitter className="text-sm" /></a>
                    <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all"><FaLinkedin className="text-sm" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Location */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-4">Visit Our Locations</h2>
              <p className="text-gray-500 mb-6">We have multiple locations across Delhi NCR to serve you better</p>

              {/* Map Embed */}
              <div className="rounded-xl overflow-hidden mb-6 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.947123456789!2d77.1025!3d28.4595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f5a8b5f8b5f%3A0x8b5f8b5f8b5f8b5f!2sDelhi!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Happy Pettings Location"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Locations List */}
              <div className="space-y-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="p-4 bg-[#FFF9F0] rounded-xl hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#007B7F]/10 rounded-lg flex items-center justify-center text-[#007B7F]">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#2C3E50] mb-1">{location.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{location.address}</p>
                        <div className="flex flex-wrap gap-3 text-xs">
                          <span className="flex items-center gap-1 text-gray-500"><FaPhoneAlt className="text-[#007B7F]" /> {location.phone}</span>
                          <span className="flex items-center gap-1 text-gray-500"><FaEnvelope className="text-[#007B7F]" /> {location.email}</span>
                          <span className="flex items-center gap-1 text-gray-500"><FaClock className="text-[#007B7F]" /> {location.timing}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-[#007B7F]/5 to-[#FFD1B3]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-3">
              Frequently Asked{' '}
              <span className="text-[#007B7F]">Questions</span>
            </h2>
            <p className="text-gray-500">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { q: "How do I book a service?", a: "You can book online through our website, call us directly, or visit any of our locations. We'll confirm your booking within 30 minutes." },
              { q: "What are your operating hours?", a: "We are open 24/7, 365 days a year. Our emergency services are available round the clock." },
              { q: "Do you offer pickup and drop?", a: "Yes, we offer free pickup and drop service for boarding within Delhi NCR." },
              { q: "Is my pet safe with you?", a: "Absolutely! We have 24/7 monitoring, trained staff, and vet-on-call for emergencies." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-[#2C3E50] mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-gradient-to-r from-[#007B7F] to-[#005C5F]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaHeart className="text-[#FFD1B3]" />
              <span className="text-sm font-medium text-white">Emergency Support</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need Immediate Help?
            </h2>
            <p className="text-white/90 mb-5">
              Our emergency helpline is available 24/7 for urgent pet care needs
            </p>
            <button className="bg-white text-[#007B7F] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2">
              <FaPhoneAlt /> Call Emergency: +91-9582582689
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;