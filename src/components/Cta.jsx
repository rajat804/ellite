// src/components/BookingForm.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaPaw, 
  FaUser, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaDog, 
  FaCat,
  FaCalendarAlt,
  FaClock,
  FaSyringe,
  FaUtensils,
  FaCheckCircle,
  FaArrowRight,
  FaSpinner,
  FaWhatsapp,
  FaInfoCircle,
  FaHome,
  FaCar,
  FaStar
} from 'react-icons/fa';
import { MdPets, MdVerified } from 'react-icons/md';

const Cta = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('booking-form');
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

  // Dog Breeds List
  const dogBreeds = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "Pug", "Beagle",
    "Shih Tzu", "Rottweiler", "Doberman", "Indie / Desi Dog", "Husky",
    "Great Dane", "Dachshund", "Boxer", "Cocker Spaniel", "Saint Bernard", "Other"
  ];

  // Cat Breeds List
  const catBreeds = [
    "Persian Cat", "Siamese Cat", "Maine Coon", "British Shorthair", "Bengal Cat",
    "Ragdoll", "Sphynx", "Abyssinian", "Scottish Fold", "Indie Cat", "Other"
  ];

  // Form State
  const [formData, setFormData] = useState({
    // Owner Details
    ownerName: '',
    phoneNumber: '',
    address: '',
    // Pet Details
    petType: '',
    petBreed: '',
    petName: '',
    petAge: '',
    vaccinationStatus: '',
    // Service Selection
    dropMethod: '',
    // Boarding Schedule
    startDate: '',
    endDate: '',
    // Additional Details
    specialInstructions: '',
    feedingPreferences: '',
    // Confirmation
    confirmHealth: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Get breeds based on pet type
  const getBreeds = () => {
    if (formData.petType === 'dog') return dogBreeds;
    if (formData.petType === 'cat') return catBreeds;
    return [];
  };

  // Calculate number of days
  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  // Calculate total price
  const calculatePrice = () => {
    const days = calculateDays();
    const basePrice = 800; // ₹800 per day
    return days * basePrice;
  };

  // Send WhatsApp Message
  const sendWhatsAppMessage = async (data) => {
    const phoneNumber = "919971200705";
    
    const message = `🐾 *NEW BOARDING BOOKING REQUEST - Bruno's Family* 🐾

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📋 *OWNER DETAILS*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
👤 *Name:* ${data.ownerName}
📞 *Phone:* ${data.phoneNumber}
📍 *Address:* ${data.address}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
🐕 *PET DETAILS*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
🐾 *Pet Type:* ${data.petType === 'dog' ? '🐕 Dog' : '🐱 Cat'}
📋 *Breed:* ${data.petBreed}
🏷️ *Pet Name:* ${data.petName}
📅 *Age:* ${data.petAge} years
💉 *Vaccination:* ${data.vaccinationStatus === 'yes' ? '✅ Yes' : '❌ No'}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
🚗 *SERVICE DETAILS*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📦 *Drop Method:* ${data.dropMethod === 'self' ? '🏠 Self Drop & Pickup' : 
  data.dropMethod === 'both' ? '🚗 Pick & Drop by Us' :
  data.dropMethod === 'pickup' ? '🎯 Pickup Only' : '🏠 Drop Only'}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📅 *BOARDING SCHEDULE*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📆 *Start Date:* ${data.startDate}
📆 *End Date:* ${data.endDate}
📊 *Total Days:* ${calculateDays()}
💰 *Total Amount:* ₹${calculatePrice()}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📝 *ADDITIONAL DETAILS*
☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📋 *Special Instructions:* ${data.specialInstructions || 'None'}
🍽️ *Feeding Preferences:* ${data.feedingPreferences || 'Regular diet'}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
✅ *Health Confirmation:* ${data.confirmHealth ? '✅ Confirmed' : '❌ Not Confirmed'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ *Request Time:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

📌 *Status:* Pending - Need immediate confirmation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Bruno's Family & Cafe* 🐕☕`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.ownerName || !formData.phoneNumber || !formData.address ||
        !formData.petType || !formData.petBreed || !formData.petName ||
        !formData.dropMethod || !formData.startDate || !formData.endDate ||
        !formData.confirmHealth) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await sendWhatsAppMessage(formData);
      setSubmitStatus('success');
      setFormData({
        ownerName: '', phoneNumber: '', address: '',
        petType: '', petBreed: '', petName: '', petAge: '', vaccinationStatus: '',
        dropMethod: '', startDate: '', endDate: '',
        specialInstructions: '', feedingPreferences: '', confirmHealth: false
      });
      setCurrentStep(1);
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep === 1 && formData.ownerName && formData.phoneNumber && formData.address) {
      setCurrentStep(2);
    } else if (currentStep === 2 && formData.petType && formData.petBreed && formData.petName) {
      setCurrentStep(3);
    } else if (currentStep === 3 && formData.dropMethod) {
      setCurrentStep(4);
    } else if (currentStep === 4 && formData.startDate && formData.endDate) {
      setCurrentStep(5);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 2000);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="booking-form" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#FDF8F0]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A054]/20 to-[#F5C27B]/20 px-4 py-2 rounded-full mb-4 mx-auto w-fit">
            <MdPets className="text-[#D4A054] text-lg" />
            <span className="text-[#8B5E3C] font-semibold text-sm uppercase tracking-wide">Booking Form</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Pet Boarding{' '}
            <span className="bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] bg-clip-text text-transparent">
              Enquiry & Booking
            </span>
          </h2>
          
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Fill out the form below to book a comfortable stay for your furry friend
          </p>
        </div>

        {/* Progress Steps */}
        <div className={`max-w-3xl mx-auto mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: 'Owner Details', icon: <FaUser /> },
              { step: 2, label: 'Pet Details', icon: <FaDog /> },
              { step: 3, label: 'Service', icon: <FaCar /> },
              { step: 4, label: 'Schedule', icon: <FaCalendarAlt /> },
              { step: 5, label: 'Submit', icon: <FaCheckCircle /> }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  currentStep >= item.step 
                    ? 'bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > item.step ? <FaCheckCircle /> : item.step}
                </div>
                <span className={`text-xs mt-1 hidden sm:block ${currentStep >= item.step ? 'text-[#8B5E3C]' : 'text-gray-400'}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 rounded-full w-full"></div>
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#8B5E3C] to-[#D4A054] rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 4) * 100}%` }}></div>
          </div>
        </div>

        {/* Booking Form Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Form Header */}
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] p-4 sm:p-6 text-white">
              <div className="flex items-center gap-3">
                <MdPets className="text-3xl" />
                <div>
                  <h3 className="text-xl font-bold">Pet Boarding Booking Form</h3>
                  <p className="text-white/80 text-sm">Please fill all the required fields carefully</p>
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="m-4 p-3 bg-green-50 border border-green-500 rounded-lg flex items-center gap-2 animate-fade-in">
                <FaCheckCircle className="text-green-500" />
                <span className="text-sm text-green-700">Booking request sent successfully! We'll contact you shortly on WhatsApp.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="m-4 p-3 bg-red-50 border border-red-500 rounded-lg flex items-center gap-2 animate-fade-in">
                <span className="text-sm text-red-600">Please fill all required fields correctly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              
              {/* Step 1: Owner Details */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaUser className="text-[#D4A054]" /> 1. Owner Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="Enter your full name" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                      maxLength="10" pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="10-digit mobile number" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Complete Address <span className="text-red-500">*</span></label>
                    <textarea name="address" value={formData.address} onChange={handleChange}
                      rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="Enter your complete address" required></textarea>
                  </div>
                </div>
              )}

              {/* Step 2: Pet Details */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaDog className="text-[#D4A054]" /> 2. Pet Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Select Pet Type <span className="text-red-500">*</span></label>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => { setFormData(prev => ({ ...prev, petType: 'dog', petBreed: '' })); }}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                          formData.petType === 'dog' ? 'border-[#D4A054] bg-[#D4A054]/10 text-[#8B5E3C]' : 'border-gray-300 text-gray-500'
                        }`}>
                        <FaDog className="inline mr-2" /> Dog
                      </button>
                      <button type="button" onClick={() => { setFormData(prev => ({ ...prev, petType: 'cat', petBreed: '' })); }}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 font-semibold transition-all ${
                          formData.petType === 'cat' ? 'border-[#D4A054] bg-[#D4A054]/10 text-[#8B5E3C]' : 'border-gray-300 text-gray-500'
                        }`}>
                        <FaCat className="inline mr-2" /> Cat
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Select Breed <span className="text-red-500">*</span></label>
                    <select name="petBreed" value={formData.petBreed} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none" required disabled={!formData.petType}>
                      <option value="">Select breed</option>
                      {getBreeds().map(breed => <option key={breed} value={breed}>{breed}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Pet Name <span className="text-red-500">*</span></label>
                    <input type="text" name="petName" value={formData.petName} onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="Enter your pet's name" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Pet Age (Years)</label>
                      <input type="number" name="petAge" value={formData.petAge} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                        placeholder="Age in years" min="0" step="0.5" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Vaccination Status</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2"><input type="radio" name="vaccinationStatus" value="yes" onChange={handleChange} /> Yes</label>
                        <label className="flex items-center gap-2"><input type="radio" name="vaccinationStatus" value="no" onChange={handleChange} /> No</label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Service Selection */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaCar className="text-[#D4A054]" /> 3. Service Selection
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Drop Method <span className="text-red-500">*</span></label>
                    <div className="space-y-2">
                      {[
                        { value: 'self', label: '🪪 Self Drop & Pickup', desc: 'You will drop and pick up your pet' },
                        { value: 'both', label: '🚗 Pick & Drop by Us', desc: 'We will pick up and drop your pet' },
                        { value: 'pickup', label: '🎯 Pickup Only', desc: 'Only pickup service' },
                        { value: 'drop', label: '🏠 Drop Only', desc: 'Only drop service' }
                      ].map(option => (
                        <label key={option.value} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                          <input type="radio" name="dropMethod" value={option.value} onChange={handleChange} className="w-4 h-4" />
                          <div><div className="font-semibold text-gray-800">{option.label}</div><div className="text-xs text-gray-500">{option.desc}</div></div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Boarding Schedule */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#D4A054]" /> 4. Boarding Schedule
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Start Date <span className="text-red-500">*</span></label>
                      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">End Date <span className="text-red-500">*</span></label>
                      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none" required />
                    </div>
                  </div>
                  
                  {formData.startDate && formData.endDate && calculateDays() > 0 && (
                    <div className="bg-gradient-to-r from-[#D4A054]/10 to-[#F5C27B]/20 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Days:</span>
                        <span className="font-bold text-[#8B5E3C]">{calculateDays()} days</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="text-2xl font-bold text-[#D4A054]">₹{calculatePrice()}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">* ₹800 per day | Food included</p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 5: Additional Details & Submit */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <FaInfoCircle className="text-[#D4A054]" /> 5. Additional Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Special Instructions</label>
                    <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}
                      rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="Any medical conditions, allergies, or behavioral notes..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Feeding Preferences</label>
                    <textarea name="feedingPreferences" value={formData.feedingPreferences} onChange={handleChange}
                      rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-[#D4A054] focus:outline-none"
                      placeholder="Number of meals per day, specific diet requirements..."></textarea>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="confirmHealth" checked={formData.confirmHealth} onChange={handleChange} className="w-5 h-5" />
                      <span className="text-sm text-gray-700">I confirm that my pet is healthy and vaccinated <span className="text-red-500">*</span></span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-4 mt-8 pt-4 border-t border-gray-200">
                {currentStep > 1 && (
                  <button type="button" onClick={prevStep} className="px-6 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-semibold hover:border-[#D4A054] hover:text-[#D4A054] transition-all">
                    ← Previous
                  </button>
                )}
                {currentStep < 5 ? (
                  <button type="button" onClick={nextStep} className="ml-auto px-6 py-2 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105">
                    Next Step →
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="ml-auto px-8 py-2 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2 disabled:opacity-50">
                    {isSubmitting ? <><FaSpinner className="animate-spin" /> Submitting...</> : <><FaWhatsapp /> Submit Booking</>}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-spin { animation: spin 1s linear infinite; }
      `}</style>
    </section>
  );
};

export default Cta;