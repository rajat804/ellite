// src/components/BookingForm.jsx
import React, { useState } from 'react';
import { 
  FaUser, 
  FaDog, 
  FaCat,
  FaCalendarAlt,
  FaCar,
  FaCheckCircle,
  FaWhatsapp,
  FaInfoCircle,
  FaSpinner,
  FaArrowLeft
} from 'react-icons/fa';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [formData, setFormData] = useState({
    ownerName: '',
    phoneNumber: '',
    address: '',
    petType: '',
    petBreed: '',
    petName: '',
    petAge: '',
    vaccinationStatus: '',
    dropMethod: '',
    startDate: '',
    endDate: '',
    specialInstructions: '',
    feedingPreferences: '',
    confirmHealth: false
  });

  const dogBreeds = [
    "Labrador Retriever", "Golden Retriever", "German Shepherd", "Pug", "Beagle",
    "Shih Tzu", "Rottweiler", "Doberman", "Indie / Desi Dog", "Husky",
    "Great Dane", "Dachshund", "Boxer", "Cocker Spaniel", "Saint Bernard", "Other"
  ];

  const catBreeds = [
    "Persian Cat", "Siamese Cat", "Maine Coon", "British Shorthair", "Bengal Cat",
    "Ragdoll", "Sphynx", "Abyssinian", "Scottish Fold", "Indie Cat", "Other"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const getBreeds = () => {
    if (formData.petType === 'dog') return dogBreeds;
    if (formData.petType === 'cat') return catBreeds;
    return [];
  };

  const calculateDays = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const sendWhatsAppMessage = (data) => {
    const phoneNumber = "919971200705";

    const message = `🐾 *NEW BOARDING BOOKING REQUEST - Bruno's Family* 🐾

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📋 *OWNER DETAILS*
👤 Name: ${data.ownerName}
📞 Phone: ${data.phoneNumber}
📍 Address: ${data.address}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
🐕 *PET DETAILS*
🐾 Pet Type: ${data.petType === 'dog' ? 'Dog' : 'Cat'}
📋 Breed: ${data.petBreed}
🏷️ Pet Name: ${data.petName}
📅 Age: ${data.petAge || 'Not specified'}
💉 Vaccination: ${data.vaccinationStatus === 'yes' ? 'Yes' : 'No'}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
🚗 *SERVICE*
📦 Drop Method: ${data.dropMethod === 'self' ? 'Self Drop & Pickup' :
                data.dropMethod === 'both' ? 'Pick & Drop by Us' :
                data.dropMethod === 'pickup' ? 'Pickup Only' : 'Drop Only'}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📅 *SCHEDULE*
Start Date: ${data.startDate}
End Date: ${data.endDate}
Total Days: ${calculateDays()}

☕━━━━━━━━━━━━━━━━━━━━━━━━━━━☕
📝 *ADDITIONAL*
Special Instructions: ${data.specialInstructions || 'None'}
Feeding: ${data.feedingPreferences || 'Regular'}

✅ Health Confirmed: ${data.confirmHealth ? 'Yes' : 'No'}

*Bruno's Family & Cafe* 🐕☕`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919971200705?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.ownerName || !formData.phoneNumber || !formData.address ||
        !formData.petType || !formData.petBreed || !formData.petName ||
        !formData.dropMethod || !formData.startDate || !formData.endDate ||
        !formData.confirmHealth) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 2500);
      return;
    }

    setIsSubmitting(true);

    try {
      sendWhatsAppMessage(formData);
      setSubmitStatus('success');

      // Reset form after success
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({
          ownerName: '', phoneNumber: '', address: '', petType: '', petBreed: '',
          petName: '', petAge: '', vaccinationStatus: '', dropMethod: '',
          startDate: '', endDate: '', specialInstructions: '',
          feedingPreferences: '', confirmHealth: false
        });
      }, 3000);
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Back Button & Title */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => window.history.back()} className="text-gray-600 hover:text-black">
            <FaArrowLeft size={28} />
          </button>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Pet Boarding Booking</h1>
            <p className="text-gray-600">Bruno's Family & Cafe</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] px-8 py-6 text-white">
            <div className="flex justify-between mb-3">
              {[1, 2, 3, 4, 5].map(s => (
                <div key={s} className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-white font-bold
                  ${currentStep >= s ? 'bg-white text-[#8B5E3C]' : 'bg-transparent text-white/50'}`}>
                  {currentStep > s ? '✓' : s}
                </div>
              ))}
            </div>
            <div className="h-2.5 bg-white/30 rounded-full">
              <div 
                className="h-full bg-[#D4A054] rounded-full transition-all duration-500" 
                style={{ width: `${((currentStep - 1) / 4) * 100}%` }} 
              />
            </div>
          </div>

          <div className="p-8 md:p-10">
            {submitStatus === 'success' && (
              <div className="text-center py-12">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-green-700">Booking Request Sent!</h2>
                <p className="text-green-600 mt-2">We will contact you soon on WhatsApp.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-2xl mb-6">
                Please fill all required fields correctly.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* Step 1: Owner Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3"><FaUser className="text-[#D4A054]" /> Owner Details</h2>
                  <input type="text" name="ownerName" placeholder="Full Name *" value={formData.ownerName} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                  <input type="tel" name="phoneNumber" placeholder="Phone Number (10 digits) *" maxLength={10} value={formData.phoneNumber} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                  <textarea name="address" placeholder="Complete Address *" rows={4} value={formData.address} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                </div>
              )}

              {/* Step 2: Pet Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3"><FaDog className="text-[#D4A054]" /> Pet Details</h2>

                  <div className="flex gap-4">
                    <button type="button" onClick={() => setFormData(p => ({ ...p, petType: 'dog', petBreed: '' }))}
                      className={`flex-1 py-5 rounded-2xl border-2 font-semibold ${formData.petType === 'dog' ? 'border-[#D4A054] bg-[#D4A054]/10' : 'border-gray-300'}`}>
                      🐕 Dog
                    </button>
                    <button type="button" onClick={() => setFormData(p => ({ ...p, petType: 'cat', petBreed: '' }))}
                      className={`flex-1 py-5 rounded-2xl border-2 font-semibold ${formData.petType === 'cat' ? 'border-[#D4A054] bg-[#D4A054]/10' : 'border-gray-300'}`}>
                      🐱 Cat
                    </button>
                  </div>

                  <select name="petBreed" value={formData.petBreed} onChange={handleChange} required disabled={!formData.petType}
                    className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]">
                    <option value="">Select Breed *</option>
                    {getBreeds().map(b => <option key={b} value={b}>{b}</option>)}
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" name="petName" placeholder="Pet Name *" value={formData.petName} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                    <input type="number" name="petAge" placeholder="Pet Age (in years)" value={formData.petAge} onChange={handleChange} className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" step="0.1" />
                  </div>

                  <div>
                    <p className="font-medium mb-2">Vaccination Status</p>
                    <div className="flex gap-8">
                      <label><input type="radio" name="vaccinationStatus" value="yes" onChange={handleChange} /> Yes</label>
                      <label><input type="radio" name="vaccinationStatus" value="no" onChange={handleChange} /> No</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Service Selection - FIXED */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <FaCar className="text-[#D4A054]" /> Service Selection
                  </h2>
                  <p className="text-gray-600">How would you like to drop and pickup your pet?</p>

                  <div className="space-y-4">
                    {[
                      { value: 'self', label: '🏠 Self Drop & Pickup', desc: 'I will drop and pick up my pet myself' },
                      { value: 'both', label: '🚗 Pick & Drop by Us', desc: 'Complete transportation service by Bruno’s Family' },
                      { value: 'pickup', label: '🎯 Pickup Only', desc: 'Only pickup service required' },
                      { value: 'drop', label: '🏠 Drop Only', desc: 'Only drop service required' }
                    ].map((option) => (
                      <label 
                        key={option.value} 
                        className="flex items-start gap-4 p-5 border-2 rounded-2xl cursor-pointer hover:border-[#D4A054] transition-all"
                      >
                        <input
                          type="radio"
                          name="dropMethod"
                          value={option.value}
                          onChange={handleChange}
                          className="mt-1 accent-[#D4A054] w-5 h-5"
                        />
                        <div>
                          <div className="font-semibold text-lg">{option.label}</div>
                          <div className="text-gray-500 text-sm mt-1">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Boarding Schedule */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3"><FaCalendarAlt className="text-[#D4A054]" /> Boarding Schedule</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date <span className="text-red-500">*</span></label>
                      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date <span className="text-red-500">*</span></label>
                      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" />
                    </div>
                  </div>

                  {formData.startDate && formData.endDate && calculateDays() > 0 && (
                    <div className="bg-amber-50 p-6 rounded-2xl text-center">
                      <p className="text-xl font-semibold text-[#8B5E3C]">
                        Total Stay: <span className="text-2xl">{calculateDays()} Days</span>
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 5: Additional Details */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-3"><FaInfoCircle className="text-[#D4A054]" /> Additional Details</h2>

                  <textarea 
                    name="specialInstructions" 
                    placeholder="Special Instructions (medical condition, behavior, etc.)" 
                    value={formData.specialInstructions} 
                    onChange={handleChange} 
                    rows={3}
                    className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" 
                  />

                  <textarea 
                    name="feedingPreferences" 
                    placeholder="Feeding Preferences (meals per day, diet, etc.)" 
                    value={formData.feedingPreferences} 
                    onChange={handleChange} 
                    rows={3}
                    className="w-full px-5 py-4 border rounded-2xl focus:border-[#D4A054]" 
                  />

                  <div className="bg-red-50 p-5 rounded-2xl">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="confirmHealth"
                        checked={formData.confirmHealth}
                        onChange={handleChange}
                        className="mt-1 accent-[#D4A054] w-5 h-5"
                      />
                      <span className="text-gray-700">
                        I confirm that my pet is healthy and all vaccinations are up to date. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="px-8 py-3.5 border border-gray-400 rounded-2xl font-medium hover:bg-gray-100"
                  >
                    ← Previous
                  </button>
                )}

                {currentStep < 5 ? (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="ml-auto px-10 py-3.5 bg-gradient-to-r from-[#8B5E3C] to-[#6B2E2E] text-white rounded-2xl font-semibold hover:shadow-lg"
                  >
                    Next →
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="ml-auto px-10 py-3.5 bg-gradient-to-r from-[#D4A054] to-[#F5C27B] text-[#2C1810] font-bold rounded-2xl flex items-center gap-3 hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <> <FaSpinner className="animate-spin" /> Sending... </>
                    ) : (
                      <> <FaWhatsapp size={24} /> Send Booking Request on WhatsApp </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;