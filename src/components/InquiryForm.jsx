import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaChartLine, 
  FaFileAlt, 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaTimes,
  FaArrowRight,
  FaChartBar,
  FaDollarSign,
  FaChartPie,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt
} from "react-icons/fa";

const InquiryForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    education: "",
    jobInterest: "",
    location: "",
    visaStatus: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const jobInterests = [
    "Engineering & Technology",
    "Sales & Business Development",
    "Finance & Accounting",
    "Healthcare & Medical",
    "Hospitality & Tourism",
    "Construction & Real Estate",
    "Marketing & Digital Media",
    "HR & Recruitment",
    "Logistics & Supply Chain",
    "Education & Training",
    "Other"
  ];

  const experienceLevels = [
    "Fresh Graduate (0-1 years)",
    "Junior (1-3 years)",
    "Mid-Level (3-7 years)",
    "Senior (7-10 years)",
    "Executive (10+ years)"
  ];

  const educationLevels = [
    "High School",
    "Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Professional Certification"
  ];

  const visaStatuses = [
    "Need Visa Sponsorship",
    "Already Have Dubai Visa",
    "Visit Visa (Looking to Convert)",
    "Employment Visa (Transfer)",
    "Not Sure"
  ];

  // Show button after component mounts
  useEffect(() => {
    setIsButtonVisible(true);
  }, []);

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isFormOpen && !event.target.closest('.inquiry-form-container') && !event.target.closest('.inquiry-now-button')) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isFormOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("access_key", "735efc9c-d698-420a-86ee-72b8a78779e4");
    formDataToSend.append("subject", "New Job Inquiry - Naukri in Dubai");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you for your inquiry! Our career consultants will contact you within 24 hours to discuss Dubai opportunities.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          currentRole: "",
          experience: "",
          education: "",
          jobInterest: "",
          location: "",
          visaStatus: "",
          message: ""
        });

        // Auto close form after success
        setTimeout(() => {
          setIsFormOpen(false);
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again or contact us directly at info@naukriindubai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const VerticalInquiryButton = () => (
    <AnimatePresence>
      {isButtonVisible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          whileHover={{ x: -8, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsFormOpen(true)}
          className="inquiry-now-button fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-b from-[#030A8C] to-[#1a1a8a] text-white py-4 px-2 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-l-2 border-[#F20505]"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <div className="flex items-center justify-center space-y-1">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-1.5 h-1.5 bg-[#F20505] rounded-full mb-0.5"
            />
            <span className="font-bold text-[10px] tracking-widest uppercase group-hover:text-[#F20505] transition-colors duration-300">
              Dubai Jobs
            </span>
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mt-0.5"
            >
              <FaArrowRight className="text-[#F20505] transform rotate-90 text-xs" />
            </motion.div>
          </div>
          
          {/* Animated border */}
          <motion.div
            animate={{ height: [0, 15, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute left-0 top-1/2 w-0.5 bg-[#F20505] transform -translate-y-1/2"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <VerticalInquiryButton />

      {/* Slide-in Form */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60]"
            />
            
            {/* Form */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="inquiry-form-container fixed right-0 top-0 h-full w-full sm:w-96 lg:w-80 xl:w-96 bg-white z-[70] overflow-y-auto shadow-2xl border-l border-gray-200"
            >
              {/* Form Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#030A8C] to-[#1a1a8a] px-6 py-4 z-[80] shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white mb-1">Dubai Career Inquiry</h2>
                    <p className="text-[#F20505] text-xs">Find your dream job in Dubai</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsFormOpen(false)}
                    className="text-white hover:text-[#F20505] transition-colors duration-200 p-1"
                  >
                    <FaTimes className="text-sm" />
                  </motion.button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Personal Information */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      <FaUser className="inline mr-1 text-[10px]" />
                      Personal Information
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Full Name *"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Email *"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Phone Number *"
                      />
                    </div>
                  </div>

                  {/* Professional Background */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      <FaBriefcase className="inline mr-1 text-[10px]" />
                      Professional Background
                    </label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        name="currentRole"
                        value={formData.currentRole}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Current Role/Position"
                      />
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800"
                      >
                        <option value="">Years of Experience *</option>
                        {experienceLevels.map((level, index) => (
                          <option key={index} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      <FaGraduationCap className="inline mr-1 text-[10px]" />
                      Education
                    </label>
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800"
                    >
                      <option value="">Highest Education Level</option>
                      {educationLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Job Preferences */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      <FaChartLine className="inline mr-1 text-[10px]" />
                      Job Preferences
                    </label>
                    <div className="space-y-3">
                      <select
                        name="jobInterest"
                        value={formData.jobInterest}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800"
                      >
                        <option value="">Preferred Industry *</option>
                        {jobInterests.map((interest, index) => (
                          <option key={index} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500"
                        placeholder="Current Location"
                      />
                    </div>
                  </div>

                  {/* Visa Status */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      <FaMapMarkerAlt className="inline mr-1 text-[10px]" />
                      Dubai Visa Status
                    </label>
                    <select
                      name="visaStatus"
                      value={formData.visaStatus}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800"
                    >
                      <option value="">Select your visa status</option>
                      {visaStatuses.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-xs font-semibold text-[#030A8C] mb-2 uppercase tracking-wide">
                      Additional Information *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-sm border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#030A8C] focus:bg-white transition-all duration-200 text-gray-800 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your career goals, skills, salary expectations, and why you want to work in Dubai..."
                    />
                  </div>
                </div>

                {/* Submit Section */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex flex-col space-y-3">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-[#030A8C] to-[#1a1a8a] text-white py-3 px-6 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin border-2 border-white border-t-transparent w-4 h-4 mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2 text-xs" />
                          SUBMIT INQUIRY
                        </>
                      )}
                    </motion.button>
                    
                    <div className="text-xs text-gray-500 text-center flex items-center justify-center">
                      <FaShieldAlt className="mr-1 text-[#030A8C] text-[10px]" />
                      Your information is secure & confidential
                    </div>
                  </div>

                  {/* Benefits List */}
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="text-xs font-semibold text-[#030A8C] mb-2">What happens next?</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#F20505] text-[10px] mr-1 mt-0.5 flex-shrink-0" />
                        <span>Career consultant review within 24 hours</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#F20505] text-[10px] mr-1 mt-0.5 flex-shrink-0" />
                        <span>Personalized job matches</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-[#F20505] text-[10px] mr-1 mt-0.5 flex-shrink-0" />
                        <span>Direct headhunter introductions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Status Message */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 p-3 border-l-2 ${
                        submitStatus === "success" 
                          ? "bg-green-50 border-green-500 text-green-700" 
                          : "bg-red-50 border-red-500 text-red-700"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {submitStatus === "success" ? (
                          <FaCheckCircle className="text-green-500 text-sm flex-shrink-0 mt-0.5" />
                        ) : (
                          <FaExclamationCircle className="text-red-500 text-sm flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-semibold text-xs">
                            {submitStatus === "success" ? "Success!" : "Error"}
                          </p>
                          <p className="text-xs mt-0.5">{submitMessage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default InquiryForm;