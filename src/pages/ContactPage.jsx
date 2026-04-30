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
  FaFax,
  FaSpinner,
  FaGem,
  FaCoffee
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
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // Send WhatsApp message function
  const sendWhatsAppMessage = async (data) => {
    const phoneNumber = "9971200705";

    const message = `🐾 *NEW CONTACT FORM SUBMISSION - Bruno's Family* 🐾

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📋 *CONTACT DETAILS*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}
🎯 *Service:* ${data.service || "Not specified"}
💬 *Message:* ${data.message}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
⏰ *Submitted on:* ${new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕

📌 *Status:* Pending - Need follow-up
📱 *Contact via:* WhatsApp/Call

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
*Bruno's Family & Cafe* 🐕🐈☕`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setSubmitting(true);

    try {
      await sendWhatsAppMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      details: ["+91-9971200705"],
      color: "#8B5E3C",
      bg: "bg-gradient-to-br from-[#8B5E3C]/10 to-[#A0714F]/20",
      whatsappClick: false
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      details: ["+91-9971200705"],
      color: "#25D366",
      bg: "bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20",
      whatsappClick: true,
      whatsappNumber: "9971200705"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: ["care@brunosfamily.com", "info@brunosfamily.com"],
      color: "#6B2E2E",
      bg: "bg-gradient-to-br from-[#6B2E2E]/10 to-[#4A3728]/20",
      whatsappClick: false
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Monday - Sunday: 24/7", "365 Days a Year"],
      color: "#D4A054",
      bg: "bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20",
      whatsappClick: false
    }
  ];

  const handleWhatsAppClick = (number) => {
    const message = encodeURIComponent(`Hello! I'm interested in your pet services at Bruno's Family & Cafe. Can you please help me?`);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
  };

  const locations = [
    {
      name: "Head Office - Gurgaon",
      address: "DLF Phase 3, Sector 24, Gurugram, Haryana 122002",
      phone: "+91-9971200705",
      email: "gurgaon@brunosfamily.com",
      timing: "24/7 Open",
      mapUrl: "https://maps.google.com/?q=DLF+Phase+3+Gurgaon"
    },
    {
      name: "Branch - Noida",
      address: "Sector 18, Noida, Uttar Pradesh 201301",
      phone: "+91-9971200705",
      email: "noida@brunosfamily.com",
      timing: "24/7 Open",
      mapUrl: "https://maps.google.com/?q=Sector+18+Noida"
    },
    {
      name: "Branch - Delhi",
      address: "Connaught Place, New Delhi 110001",
      phone: "+91-9971200705",
      email: "delhi@brunosfamily.com",
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
    "Pet Taxi",
    "Play Hours"
  ];

  return (
    <div id="contact-page" className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]">
      {/* Hero Section - Contact Page with Background Image */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] min-h-[450px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] xl:h-screen xl:max-h-[700px] flex items-center justify-center overflow-hidden" style={{ border: 'none' }}>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=1600)',
              backgroundPosition: 'center 40%'
            }}
          >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/85 via-[#2C1810]/75 to-[#1A0F0A]/80"></div>
          </div>
        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-20 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#D4A054] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-[#D4A054] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Badge - Responsive */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full mb-4 sm:mb-5 md:mb-6 mx-auto w-fit">
              <FaHeart className="text-[#D4A054] text-[10px] sm:text-xs md:text-sm" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-white">
                Get in Touch
              </span>
            </div>

            {/* Heading - Responsive */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 text-white px-2">
              Contact{' '}
              <span className="relative inline-block text-[#D4A054]">
                Us
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path
                    d="M0 2 L200 2"
                    stroke="#D4A054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    className="animate-dash"
                  />
                </svg>
              </span>
            </h1>

            {/* Description - Responsive */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              We'd love to hear from you! Reach out to us for any queries, bookings, or feedback.
            </p>
          </div>
        </div>

        {/* Wave - Responsive */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path style={{ border: 'none' }}
              fill="#FDF8F0"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* Contact Info Cards - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              onClick={() => info.whatsappClick && handleWhatsAppClick(info.whatsappNumber)}
              className={`${info.bg} rounded-xl p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer group ${info.whatsappClick ? 'hover:scale-105' : ''}`}
            >
              <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ color: info.color }}>
                <span className="text-xl">{info.icon}</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-500 text-sm">{detail}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-500">Fill out the form below and we'll get back to you on WhatsApp within 30 minutes</p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2 text-green-600">
                    <FaCheckCircle className="text-lg" />
                    <div>
                      <span className="font-semibold">Message Sent Successfully!</span>
                      <p className="text-sm mt-1">We'll contact you on WhatsApp shortly.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="text-lg">⚠️</span>
                    <div>
                      <span className="font-semibold">Error!</span>
                      <p className="text-sm mt-1">Please fill all fields correctly (10-digit phone number).</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Your Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4A054]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#D4A054] focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4A054]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#D4A054] focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Phone Number *</label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4A054]" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        maxLength="10"
                        pattern="[0-9]{10}"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#D4A054] focus:outline-none transition-all"
                        placeholder="9876543210"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Select Service</label>
                    <div className="relative">
                      <FaPaw className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D4A054]" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#D4A054] focus:outline-none transition-all appearance-none bg-white"
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
                  <label className="block text-sm font-semibold text-gray-800 mb-2">Your Message *</label>
                  <div className="relative">
                    <FaComment className="absolute left-3 top-3 text-[#D4A054]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-[#D4A054] focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your pet and requirements..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending via WhatsApp...
                    </>
                  ) : (
                    <>
                      <FaWhatsapp /> Send Message on WhatsApp
                    </>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Visit Our Locations</h2>
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
                  title="Bruno's Family Location"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Locations List */}
              <div className="space-y-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="p-4 bg-[#FDF8F0] rounded-xl hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#D4A054]/10 rounded-lg flex items-center justify-center text-[#D4A054]">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1">{location.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{location.address}</p>
                        <div className="flex flex-wrap gap-3 text-xs">
                          <span className="flex items-center gap-1 text-gray-500"><FaPhoneAlt className="text-[#D4A054]" /> {location.phone}</span>
                          <span className="flex items-center gap-1 text-gray-500"><FaEnvelope className="text-[#D4A054]" /> {location.email}</span>
                          <span className="flex items-center gap-1 text-gray-500"><FaClock className="text-[#D4A054]" /> {location.timing}</span>
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

      {/* FAQ Section - Bruno's Theme */}
      <section className="py-16 bg-gradient-to-r from-[#D4A054]/5 to-[#F5C27B]/20">
        <div className="container mx-auto px-4 md:px-8">
          <div className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Frequently Asked{' '}
              <span className="text-[#D4A054]">Questions</span>
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
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner - Bruno's Theme */}
      <section className="py-12 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 mx-auto w-fit">
              <FaHeart className="text-[#D4A054]" />
              <span className="text-sm font-medium text-white">Emergency Support</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need Immediate Help?
            </h2>
            <p className="text-white/90 mb-5">
              Our emergency helpline is available 24/7 for urgent pet care needs
            </p>
            <button
              onClick={() => handleWhatsAppClick("9971200705")}
              className="bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp Emergency: +91-9971200705
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
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;