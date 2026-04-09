// src/pages/TermsPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaShieldAlt, 
  FaClock, 
  FaArrowRight,
  FaCheckCircle,
  FaFileAlt,
  FaGavel,
  FaUserShield,
  FaLock,
  FaCreditCard,
  FaClipboardList,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRegClock,
  FaExclamationTriangle,
  FaHandshake,
  FaUsers,
  FaDog,
  FaCat,
  FaHome,
  FaSyringe,
  FaMoneyBillWave,
  FaFileInvoice,
  FaUserSecret,
  FaBalanceScale
} from 'react-icons/fa';
import { 
  MdVerified,
  MdPolicy,
  MdPrivacyTip,
  MdSecurity,
  MdGavel,
  MdDescription
} from 'react-icons/md';

const TermsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastUpdated] = useState("April 9, 2024");
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('terms-page');
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

  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: <MdDescription />,
      content: [
        "Welcome to Happy Pettings. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions.",
        "Happy Pettings provides pet boarding, veterinary services, grooming, training, and related pet care services across Delhi NCR.",
        "Please read these Terms carefully before using our services. If you disagree with any part of these terms, please do not use our services."
      ]
    },
    {
      id: 2,
      title: "Definitions",
      icon: <MdPolicy />,
      content: [
        "• 'Company', 'We', 'Us', 'Our' refers to Happy Pettings.",
        "• 'You', 'Your', 'Customer' refers to the pet parent using our services.",
        "• 'Services' includes boarding, veterinary care, grooming, training, and all related pet care services.",
        "• 'Pet' refers to any animal boarded or receiving services from us.",
        "• 'Facility' refers to our physical locations in Delhi NCR."
      ]
    },
    {
      id: 3,
      title: "Booking & Payment",
      icon: <FaCreditCard />,
      content: [
        "• All bookings require advance payment or deposit as specified at the time of booking.",
        "• We accept payments via Credit Card, Debit Card, UPI, Net Banking, and Cash.",
        "• Prices are subject to change without prior notice. However, confirmed bookings will honor the price at the time of booking.",
        "• Any additional services requested during the stay will be billed separately.",
        "• GST and other applicable taxes will be added as per government regulations."
      ]
    },
    {
      id: 4,
      title: "Cancellation & Refund Policy",
      icon: <FaMoneyBillWave />,
      content: [
        "• Cancellations made 7+ days before service: Full refund (minus processing fees).",
        "• Cancellations made 3-6 days before service: 50% refund.",
        "• Cancellations made less than 48 hours before service: No refund.",
        "• For medical emergencies, we may offer credit for future services at our discretion.",
        "• Refunds are processed within 7-10 business days."
      ]
    },
    {
      id: 5,
      title: "Health & Vaccination Requirements",
      icon: <FaSyringe />,
      content: [
        "• All pets must have up-to-date vaccinations (Rabies, DHPP/DHLPP for dogs, FVRCP for cats).",
        "• Pets must be free from contagious diseases, parasites, and infections.",
        "• We reserve the right to refuse service to pets showing signs of illness.",
        "• You must disclose any existing medical conditions or special needs.",
        "• Veterinary records must be provided before boarding."
      ]
    },
    {
      id: 6,
      title: "Liability & Responsibility",
      icon: <FaUserShield />,
      content: [
        "• We take utmost care of your pet, but pets are our responsibility only during service hours.",
        "• You are responsible for your pet's behavior and any damages caused by your pet.",
        "• We are not liable for pre-existing health conditions or natural events.",
        "• In case of emergency, we will contact you immediately and seek veterinary care.",
        "• We reserve the right to refuse service to aggressive or dangerous pets."
      ]
    },
    {
      id: 7,
      title: "Privacy Policy",
      icon: <FaLock />,
      content: [
        "• We collect personal information including name, contact details, and pet information.",
        "• Your information is used only for service delivery and communication.",
        "• We do not share your personal information with third parties without consent.",
        "• Payment information is encrypted and securely processed.",
        "• You can request data deletion by contacting our support team."
      ]
    },
    {
      id: 8,
      title: "User Conduct",
      icon: <FaUsers />,
      content: [
        "• You must provide accurate and complete information about your pet.",
        "• You must follow all safety guidelines provided by our staff.",
        "• Any false information may result in immediate termination of services.",
        "• You agree to treat our staff and other pets with respect.",
        "• Harassment or abusive behavior will not be tolerated."
      ]
    },
    {
      id: 9,
      title: "Service Limitations",
      icon: <FaExclamationTriangle />,
      content: [
        "• Services are subject to availability and capacity limits.",
        "• We reserve the right to modify or discontinue any service at any time.",
        "• Peak season rates may apply during holidays and special occasions.",
        "• Minimum age requirements apply for certain services.",
        "• We are not responsible for delays caused by circumstances beyond our control."
      ]
    },
    {
      id: 10,
      title: "Photo & Video Usage",
      icon: <FaFileAlt />,
      content: [
        "• We may take photos/videos of your pet for updates and promotional purposes.",
        "• You can opt out of promotional usage by informing us in writing.",
        "• Daily update photos are shared only with you via WhatsApp.",
        "• We do not sell pet photos to third parties.",
        "• You retain all rights to your pet's images."
      ]
    }
  ];

  const importantPoints = [
    { icon: <FaHandshake />, text: "Mutual Respect", color: "#007B7F" },
    { icon: <FaLock />, text: "Data Protection", color: "#E67E22" },
    { icon: <FaShieldAlt />, text: "Safety First", color: "#FF7A2F" },
    { icon: <FaGavel />, text: "Legal Compliance", color: "#6B4E71" }
  ];

  return (
    <div id="terms-page" className="min-h-screen bg-gradient-to-b from-white to-[#FFF9F0]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#007B7F] to-[#005C5F] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 mx-auto w-fit">
              <FaGavel className="text-[#FFD1B3]" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Terms and{' '}
              <span className="relative inline-block text-[#FFD1B3]">
                Conditions
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 3 L200 3" stroke="#FFD1B3" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" className="animate-dash"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            
            <div className="mt-6 text-sm text-white/70">
              <i className="fas fa-clock"></i> Last Updated: {lastUpdated}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FFF9F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Important Points */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {importantPoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#007B7F]/10 to-[#FFD1B3]/20 rounded-xl flex items-center justify-center mb-2" style={{ color: point.color }}>
                <span className="text-xl">{point.icon}</span>
              </div>
              <p className="text-sm font-semibold text-[#2C3E50]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-[#2C3E50] mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <MdPolicy className="text-[#007B7F]" /> Contents
              </h3>
              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {sections.map((section, idx) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(idx);
                      document.getElementById(`section-${section.id}`).scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                      activeSection === idx 
                        ? 'bg-[#007B7F] text-white' 
                        : 'text-gray-600 hover:bg-[#007B7F]/10 hover:text-[#007B7F]'
                    }`}
                  >
                    <span className="text-sm">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Introduction Text */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <p className="text-gray-600 mb-3">
                  These Terms and Conditions ("Terms") govern your use of Happy Pettings website and services. 
                  By using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600">
                  If you have any questions about these Terms, please contact us at care@happypettings.com.
                </p>
              </div>

              {/* Sections */}
              {sections.map((section) => (
                <div key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#FFD1B3]">
                    <div className="w-10 h-10 bg-[#007B7F]/10 rounded-xl flex items-center justify-center text-[#007B7F] text-xl">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#2C3E50]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3 pl-3">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Contact Information */}
              <div className="mt-10 p-6 bg-gradient-to-r from-[#007B7F]/5 to-[#FFD1B3]/20 rounded-2xl">
                <h3 className="text-lg font-bold text-[#2C3E50] mb-4 flex items-center gap-2">
                  <FaPhoneAlt className="text-[#007B7F]" /> Need Help?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#007B7F]" />
                    <span className="text-gray-600">+91-9582582689</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#007B7F]" />
                    <span className="text-gray-600">care@happypettings.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#007B7F]" />
                    <span className="text-gray-600">Delhi NCR, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegClock className="text-[#007B7F]" />
                    <span className="text-gray-600">24/7 Support Available</span>
                  </div>
                </div>
              </div>

              {/* Acceptance Statement */}
              <div className="mt-6 pt-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <FaCheckCircle className="text-green-500" />
                  <span>By using our services, you acknowledge that you have read and agree to these Terms and Conditions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <section className="py-8 bg-[#2C3E50] text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm opacity-80">
            © 2024 Happy Pettings. All rights reserved. | Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
        .scroll-mt-24 {
          scroll-margin-top: 6rem;
        }
      `}</style>
    </div>
  );
};

export default TermsPage;