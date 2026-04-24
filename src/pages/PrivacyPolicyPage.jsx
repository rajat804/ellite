// src/pages/PrivacyPolicyPage.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaHeart, 
  FaShieldAlt, 
  FaClock, 
  FaArrowRight,
  FaCheckCircle,
  FaLock,
  FaUserSecret,
  FaDatabase,
  FaCookie,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegClock,
  FaEye,
  FaTrashAlt,
  FaUserShield,
  FaGlobe,
  FaServer,
  FaMobile,
  FaCreditCard,
  FaFileAlt,
  FaGavel,
  FaGem,
  FaCoffee
} from 'react-icons/fa';
import { 
  MdVerified,
  MdPrivacyTip,
  MdSecurity,
  MdVerifiedUser,
  MdOutlinePolicy,
  MdDataUsage,
  MdDeleteSweep
} from 'react-icons/md';

const PrivacyPolicyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastUpdated] = useState("April 9, 2024");
  const [activeSection, setActiveSection] = useState(0);
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('privacy-page');
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
      icon: <MdPrivacyTip />,
      content: [
        "At Bruno's Family & Cafe, we are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.",
        "We respect your privacy and are committed to protecting it through our compliance with this policy. Please read this policy carefully to understand our views and practices regarding your personal data."
      ]
    },
    {
      id: 2,
      title: "Information We Collect",
      icon: <FaDatabase />,
      content: [
        "• Personal Information: Name, email address, phone number, postal address, and other contact details.",
        "• Pet Information: Pet's name, breed, age, medical history, vaccination records, and behavioral notes.",
        "• Payment Information: Credit card details, billing address, and transaction history.",
        "• Technical Data: IP address, browser type, device information, and usage data.",
        "• Communication Data: Email correspondence, chat messages, and call recordings for quality assurance."
      ]
    },
    {
      id: 3,
      title: "How We Collect Information",
      icon: <FaServer />,
      content: [
        "• Directly from you when you book services, create an account, or contact us.",
        "• Automatically through cookies and similar technologies when you visit our website.",
        "• From third-party service providers who assist us in delivering our services.",
        "• Through social media platforms when you interact with our content.",
        "• From veterinary records and referrals with your consent."
      ]
    },
    {
      id: 4,
      title: "How We Use Your Information",
      icon: <FaEye />,
      content: [
        "• To provide, operate, and maintain our pet care services.",
        "• To process your bookings and payments.",
        "• To communicate with you about your pet's stay and updates.",
        "• To improve our services and customer experience.",
        "• To send promotional offers and newsletters (with your consent).",
        "• To comply with legal obligations and prevent fraud."
      ]
    },
    {
      id: 5,
      title: "Information Sharing",
      icon: <FaUserShield />,
      content: [
        "• We do not sell your personal information to third parties.",
        "• We may share information with service providers who assist us (veterinarians, payment processors).",
        "• We may disclose information to comply with legal requirements or protect our rights.",
        "• In case of business transfer, your information may be transferred to the new owner.",
        "• Emergency information may be shared with veterinary hospitals during critical situations."
      ]
    },
    {
      id: 6,
      title: "Data Security",
      icon: <MdSecurity />,
      content: [
        "• We implement industry-standard security measures to protect your data.",
        "• All payment information is encrypted using SSL technology.",
        "• Access to personal information is restricted to authorized personnel only.",
        "• Regular security audits and updates are performed.",
        "• In case of a data breach, we will notify you promptly as required by law."
      ]
    },
    {
      id: 7,
      title: "Cookies & Tracking",
      icon: <FaCookie />,
      content: [
        "• We use cookies to enhance your browsing experience.",
        "• Essential cookies are necessary for website functionality.",
        "• Analytics cookies help us understand how visitors use our site.",
        "• You can control cookie preferences through your browser settings.",
        "• Disabling cookies may affect some website features."
      ]
    },
    {
      id: 8,
      title: "Your Rights",
      icon: <MdVerifiedUser />,
      content: [
        "• Right to Access: You can request a copy of your personal data.",
        "• Right to Rectification: You can correct inaccurate or incomplete data.",
        "• Right to Erasure: You can request deletion of your data ('Right to be Forgotten').",
        "• Right to Restrict Processing: You can limit how we use your data.",
        "• Right to Data Portability: You can receive your data in a machine-readable format.",
        "• Right to Object: You can object to certain data processing activities."
      ]
    },
    {
      id: 9,
      title: "Data Retention",
      icon: <FaTrashAlt />,
      content: [
        "• We retain personal information for as long as necessary to provide services.",
        "• Booking records are kept for 7 years for legal and tax purposes.",
        "• You can request earlier deletion of your data, subject to legal requirements.",
        "• Inactive accounts may be deleted after 2 years of inactivity.",
        "• Pet medical records are retained for reference in future visits."
      ]
    },
    {
      id: 10,
      title: "Children's Privacy",
      icon: <FaUserSecret />,
      content: [
        "• Our services are not directed to individuals under 18 years of age.",
        "• We do not knowingly collect personal information from minors.",
        "• If we discover we have collected data from a minor, we will delete it promptly.",
        "• Parents or guardians are responsible for supervising their children's use of our services."
      ]
    },
    {
      id: 11,
      title: "Third-Party Links",
      icon: <FaGlobe />,
      content: [
        "• Our website may contain links to third-party websites.",
        "• We are not responsible for the privacy practices of these sites.",
        "• We encourage you to read the privacy policies of any linked websites.",
        "• This policy applies only to information collected by Bruno's Family & Cafe."
      ]
    },
    {
      id: 12,
      title: "Updates to This Policy",
      icon: <MdOutlinePolicy />,
      content: [
        "• We may update this Privacy Policy from time to time.",
        "• Changes will be posted on this page with an updated revision date.",
        "• Significant changes will be notified via email or website notice.",
        "• Your continued use of our services constitutes acceptance of updated terms.",
        "• Please review this policy periodically for any changes."
      ]
    }
  ];

  const dataCollectionPoints = [
    { icon: <FaFileAlt />, text: "Booking Forms", color: "#8B5E3C" },
    { icon: <FaMobile />, text: "Mobile App", color: "#D4A054" },
    { icon: <FaGlobe />, text: "Website", color: "#6B2E2E" },
    { icon: <FaPhoneAlt />, text: "Phone Calls", color: "#D4A054" },
    { icon: <FaEnvelope />, text: "Emails", color: "#8B5E3C" },
    { icon: <FaCreditCard />, text: "Payments", color: "#D4A054" }
  ];

  return (
    <div id="privacy-page" className="min-h-screen bg-gradient-to-b from-white to-[#FDF8F0]">
      {/* Hero Section - Bruno's Theme */}
      <section className="relative bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] h-screen max-h-[700px] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A054] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D4A054] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className={`text-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 mx-auto w-fit">
              <FaLock className="text-[#D4A054]" />
              <span className="text-sm font-medium">Privacy & Security</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Privacy{' '}
              <span className="relative inline-block text-[#D4A054]">
                Policy
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 3 L200 3" stroke="#D4A054" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" className="animate-dash"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            
            <div className="mt-6 text-sm text-white/70">
              <FaClock className="inline mr-1 text-[#D4A054]" /> Last Updated: {lastUpdated}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#FDF8F0" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Key Privacy Points - Bruno's Theme */}
      <div className="container mx-auto px-4 md:px-8 -mt-12 relative z-20">
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {dataCollectionPoints.map((point, idx) => (
            <div key={idx} className="bg-white rounded-xl p-3 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-[#D4A054]/10 to-[#F5C27B]/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform" style={{ color: point.color }}>
                <span className="text-lg">{point.icon}</span>
              </div>
              <p className="text-xs font-semibold text-gray-800">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation - Bruno's Theme */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center gap-2">
                <MdPrivacyTip className="text-[#D4A054]" /> Contents
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
                        ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white' 
                        : 'text-gray-600 hover:bg-[#D4A054]/10 hover:text-[#8B5E3C]'
                    }`}
                  >
                    <span className="text-sm">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Privacy Content */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              {/* Introduction Text */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <p className="text-gray-600 mb-3">
                  At Bruno's Family & Cafe, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we handle your data when you use our services.
                </p>
                <p className="text-gray-600">
                  By using our services, you consent to the collection and use of your information as described in this policy.
                </p>
              </div>

              {/* GDPR Compliance Notice - Bruno's Theme */}
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <MdVerified className="text-[#D4A054] text-2xl" />
                  <div>
                    <h3 className="font-bold text-gray-800">GDPR Compliant</h3>
                    <p className="text-sm text-gray-600">We comply with global data protection regulations to safeguard your privacy.</p>
                  </div>
                </div>
              </div>

              {/* Sections - Bruno's Theme */}
              {sections.map((section) => (
                <div key={section.id} id={`section-${section.id}`} className="mb-8 scroll-mt-24">
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#D4A054]/30">
                    <div className="w-10 h-10 bg-[#D4A054]/10 rounded-xl flex items-center justify-center text-[#D4A054] text-xl">
                      {section.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
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

              {/* Cookie Consent Banner - Bruno's Theme */}
              {cookieConsent && (
                <div className="mt-8 p-5 bg-[#FDF8F0] rounded-xl border border-[#D4A054]/30">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      <FaCookie className="text-[#D4A054] text-2xl mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">Cookie Preferences</h4>
                        <p className="text-sm text-gray-600">
                          We use cookies to enhance your browsing experience. By continuing to use our website, 
                          you consent to our use of cookies.
                        </p>
                      </div>
                    </div>
                    <button 
                      onClick={() => setCookieConsent(false)}
                      className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all whitespace-nowrap"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Information - Bruno's Theme */}
              <div className="mt-10 p-6 bg-gradient-to-r from-[#D4A054]/10 to-[#F5C27B]/20 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaEnvelope className="text-[#D4A054]" /> Privacy Questions?
                </h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or want to exercise your data rights, please contact our Privacy Officer:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-[#D4A054]" />
                    <span className="text-gray-600">privacy@brunosfamily.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="text-[#D4A054]" />
                    <span className="text-gray-600">+91-9582582689</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#D4A054]" />
                    <span className="text-gray-600">Delhi NCR, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaRegClock className="text-[#D4A054]" />
                    <span className="text-gray-600">Mon-Fri, 9 AM - 6 PM</span>
                  </div>
                </div>
              </div>

              {/* Data Request Buttons - Bruno's Theme */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <button className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white px-5 py-2 rounded-lg text-sm hover:shadow-lg transition-all">
                  Request Data Access
                </button>
                <button className="border-2 border-[#D4A054] text-[#8B5E3C] px-5 py-2 rounded-lg text-sm hover:bg-gradient-to-r hover:from-[#8B5E3C] hover:to-[#6B2E2E] hover:text-white transition-all">
                  Request Data Deletion
                </button>
                <button className="border-2 border-gray-300 text-gray-600 px-5 py-2 rounded-lg text-sm hover:border-[#D4A054] hover:text-[#D4A054] transition-all">
                  Update Preferences
                </button>
              </div>

              {/* Acceptance Statement */}
              <div className="mt-6 pt-4 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <FaCheckCircle className="text-green-500" />
                  <span>By using our services, you acknowledge that you have read and agree to this Privacy Policy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Badge */}
      <div className="text-center pb-8">
        <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2 rounded-full">
          <FaGem className="text-[#D4A054] text-sm" />
          <span className="text-xs text-gray-500">Your privacy is our priority</span>
          <FaCoffee className="text-[#D4A054] text-sm" />
        </div>
      </div>

      {/* Footer Note - Bruno's Theme */}
      <section className="py-8 bg-gradient-to-r from-[#2C1810] to-[#1A0F0A] text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaHeart className="text-[#D4A054]" />
            <span className="text-sm">Bruno's Family & Cafe</span>
            <FaCoffee className="text-[#D4A054]" />
          </div>
          <p className="text-xs opacity-80">
            © 2024 Bruno's Family & Cafe. All rights reserved. | Privacy Policy | Last Updated: {lastUpdated}
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

export default PrivacyPolicyPage;