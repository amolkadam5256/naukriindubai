import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaShieldAlt,
  FaFileUpload,
  FaLanguage,
  FaUserTie,
  FaArrowLeft,
  FaPassport,
  FaMoneyBillWave,
  FaCalendar,
  FaGlobe,
  FaCertificate,
  FaStar,
  FaBuilding,
  FaIdCard,
  FaHome,
  FaLinkedin,
  FaSkype,
  FaHeart,
  FaLightbulb,
  FaTrophy,
  FaFileAlt,
  FaLink,
  FaUsers,
  FaHandshake
} from "react-icons/fa";

const DubaiJobApplicationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    email: "",
    phone: "",
    nationality: "",
    dateOfBirth: "",
    gender: "",
    maritalStatus: "",
    passportNumber: "",
    passportExpiry: "",

    // Contact Information
    currentLocation: "",
    address: "",
    linkedinProfile: "",
    skypeId: "",

    // Professional Information
    currentRole: "",
    totalExperience: "",
    currentCompany: "",
    industry: "",
    currentSalary: "",
    salaryCurrency: "USD",
    expectedSalary: "",
    expectedSalaryCurrency: "AED",
    noticePeriod: "",
    reasonForLeaving: "",

    // Education
    highestQualification: "",
    fieldOfStudy: "",
    university: "",
    graduationYear: "",
    gpa: "",
    additionalCertifications: "",
    coursesCompleted: "",

    // Skills & Competencies
    technicalSkills: "",
    softSkills: "",
    softwareSkills: "",
    programmingLanguages: "",

    // Languages
    languages: "",
    languageProficiencies: "{}",

    // Dubai Specific
    visaStatus: "",
    uaeExperience: "",
    preferredEmirates: "",
    relocationReadiness: "",
    accommodationNeeded: "",
    familyStatus: "",

    // Job Preferences
    preferredIndustries: "",
    jobLevel: "",
    employmentType: "",
    workMode: "",
    companySize: "",
    expectedBenefits: "",

    // Career Information
    careerGoals: "",
    strengths: "",
    areasForImprovement: "",
    achievements: "",

    // Documents
    coverLetter: "",
    portfolioLink: "",
    photo: null,

    // Additional Information
    whyDubai: "",
    whyChooseYou: "",
    availabilityDate: "",
    reference1: "",
    reference2: "",
    emergencyContact: "",

    // Service Preferences
    servicesNeeded: "",
    consultationTiming: "",
    budgetForServices: "",
    heardAboutUs: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [currentSection, setCurrentSection] = useState(0);

  // Icon mapping
  const iconComponents = {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaBriefcase,
    FaGraduationCap,
    FaMapMarkerAlt,
    FaPassport,
    FaMoneyBillWave,
    FaCalendar,
    FaGlobe,
    FaCertificate,
    FaStar,
    FaBuilding,
    FaIdCard,
    FaHome,
    FaLinkedin,
    FaSkype,
    FaHeart,
    FaLightbulb,
    FaTrophy,
    FaFileAlt,
    FaLink,
    FaUsers,
    FaHandshake
  };

  // Comprehensive options
  const nationalities = [
    "Indian", "Pakistani", "Bangladeshi", "Sri Lankan", "Nepalese",
    "Filipino", "Egyptian", "Jordanian", "Lebanese", "Syrian",
    "Yemeni", "Sudanese", "Tunisian", "Moroccan", "Algerian",
    "Other Arab", "Other Asian", "European", "American", "Canadian",
    "Australian", "South African", "Other"
  ];

  const experienceLevels = [
    "Fresh Graduate (0-1 years)",
    "Junior (1-3 years)",
    "Mid-Level (3-5 years)",
    "Senior (5-8 years)",
    "Expert (8-12 years)",
    "Executive (12+ years)"
  ];

  const qualifications = [
    "High School",
    "Diploma",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Post-Doctoral",
    "Professional Certification"
  ];

  const industries = [
    "Engineering & Construction",
    "Information Technology",
    "Healthcare & Medical",
    "Hospitality & Tourism",
    "Banking & Finance",
    "Sales & Marketing",
    "Education & Training",
    "Logistics & Supply Chain",
    "Real Estate",
    "Retail & E-commerce",
    "Government & Public Sector",
    "Oil & Gas",
    "Media & Entertainment",
    "Automotive",
    "Aviation & Aerospace",
    "Manufacturing",
    "Telecommunications",
    "Consulting",
    "Legal",
    "Other"
  ];

  const visaStatuses = [
    "Need Employment Visa Sponsorship",
    "Already Have Dubai Employment Visa",
    "Visit Visa (Looking to Convert)",
    "Family Visa",
    "Student Visa",
    "Cancelled Visa",
    "Not Currently in UAE",
    "Freelance Visa",
    "Investor Visa"
  ];

  const uaeExperiences = [
    "None",
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5+ years"
  ];

  const relocationReadinessOptions = [
    "Immediately",
    "Within 1 month",
    "Within 3 months",
    "Flexible"
  ];

  const accommodationOptions = [
    "Yes",
    "No",
    "Maybe"
  ];

  const jobLevels = [
    "Intern",
    "Entry Level",
    "Junior Executive",
    "Senior Executive",
    "Team Lead",
    "Assistant Manager",
    "Manager",
    "Senior Manager",
    "Director",
    "VP / Head of Department",
    "C-Level Executive"
  ];

  const employmentTypes = [
    "Full Time",
    "Part Time",
    "Contract",
    "Freelance",
    "Remote",
    "Hybrid",
    "Temporary"
  ];

  const workModes = [
    "On-site",
    "Remote",
    "Hybrid",
    "Flexible"
  ];

  const companySizes = [
    "Startup (1-50 employees)",
    "Small (51-200 employees)",
    "Medium (201-1000 employees)",
    "Large (1001-5000 employees)",
    "Enterprise (5000+ employees)"
  ];

  const noticePeriods = [
    "Immediate",
    "15 days",
    "1 month",
    "2 months",
    "3 months"
  ];

  const sections = [
    {
      title: "Personal Information",
      icon: "FaUser",
      description: "Basic personal details and identification",
      fields: [
        { type: 'text', name: 'name', label: 'Full Name', required: true, icon: 'FaUser', placeholder: 'Enter your full name' },
        { type: 'email', name: 'email', label: 'Email Address', required: true, icon: 'FaEnvelope', placeholder: 'your.email@example.com' },
        { type: 'tel', name: 'phone', label: 'Phone Number', required: true, icon: 'FaPhone', placeholder: '+91 1234567890' },
        { type: 'select', name: 'nationality', label: 'Nationality', options: nationalities, required: true, icon: 'FaGlobe' },
        { type: 'date', name: 'dateOfBirth', label: 'Date of Birth', icon: 'FaCalendar' },
        { type: 'select', name: 'gender', label: 'Gender', options: ['Male', 'Female', 'Other'], icon: 'FaUser' },
        { type: 'select', name: 'maritalStatus', label: 'Marital Status', options: ['Single', 'Married', 'Divorced', 'Widowed'], icon: 'FaHeart' },
        { type: 'text', name: 'passportNumber', label: 'Passport Number', icon: 'FaPassport', placeholder: 'Enter passport number' },
        { type: 'date', name: 'passportExpiry', label: 'Passport Expiry Date', icon: 'FaCalendar' },
      ]
    },
    {
      title: "Contact & Location",
      icon: "FaMapMarkerAlt",
      description: "Your current location and contact details",
      fields: [
        { type: 'text', name: 'currentLocation', label: 'Current Location', icon: 'FaMapMarkerAlt', placeholder: 'City, Country' },
        { type: 'textarea', name: 'address', label: 'Complete Address', icon: 'FaHome', placeholder: 'Your complete residential address' },
        { type: 'text', name: 'linkedinProfile', label: 'LinkedIn Profile', icon: 'FaLinkedin', placeholder: 'https://linkedin.com/in/yourprofile' },
        { type: 'text', name: 'skypeId', label: 'Skype ID', icon: 'FaSkype', placeholder: 'Your Skype username' },
        { type: 'text', name: 'emergencyContact', label: 'Emergency Contact', icon: 'FaPhone', placeholder: 'Name and phone number' },
      ]
    },
    {
      title: "Professional Background",
      icon: "FaBriefcase",
      description: "Your work experience and career history",
      fields: [
        { type: 'text', name: 'currentRole', label: 'Current Job Title', icon: 'FaBriefcase', placeholder: 'e.g., Software Engineer' },
        { type: 'select', name: 'totalExperience', label: 'Total Experience', options: experienceLevels, required: true, icon: 'FaBriefcase' },
        { type: 'text', name: 'currentCompany', label: 'Current Company', icon: 'FaBuilding', placeholder: 'Your current employer' },
        { type: 'select', name: 'industry', label: 'Current Industry', options: industries, icon: 'FaBuilding' },
        { type: 'text', name: 'currentSalary', label: 'Current Salary (Monthly)', icon: 'FaMoneyBillWave', placeholder: 'Current monthly salary' },
        { type: 'text', name: 'expectedSalary', label: 'Expected Salary in Dubai (AED)', icon: 'FaMoneyBillWave', placeholder: 'Expected monthly salary in AED' },
        { type: 'select', name: 'noticePeriod', label: 'Notice Period', options: noticePeriods, icon: 'FaCalendar' },
        { type: 'textarea', name: 'reasonForLeaving', label: 'Reason for Leaving Current Job', icon: 'FaBriefcase', placeholder: 'Why are you looking for new opportunities?' },
      ]
    },
    {
      title: "Education & Qualifications",
      icon: "FaGraduationCap",
      description: "Your educational background and certifications",
      fields: [
        { type: 'select', name: 'highestQualification', label: 'Highest Qualification', options: qualifications, icon: 'FaGraduationCap' },
        { type: 'text', name: 'fieldOfStudy', label: 'Field of Study', icon: 'FaCertificate', placeholder: 'e.g., Computer Science, Business Administration' },
        { type: 'text', name: 'university', label: 'University/Institution', icon: 'FaBuilding', placeholder: 'Name of your university' },
        { type: 'number', name: 'graduationYear', label: 'Graduation Year', icon: 'FaCalendar', placeholder: 'YYYY' },
        { type: 'text', name: 'gpa', label: 'GPA/Percentage', icon: 'FaStar', placeholder: 'e.g., 3.5/4.0 or 85%' },
        { type: 'textarea', name: 'additionalCertifications', label: 'Additional Certifications', icon: 'FaCertificate', placeholder: 'List any professional certifications' },
        { type: 'textarea', name: 'coursesCompleted', label: 'Relevant Courses Completed', icon: 'FaGraduationCap', placeholder: 'List relevant courses or training' },
      ]
    },
    {
      title: "Skills & Competencies",
      icon: "FaLightbulb",
      description: "Your technical and professional skills",
      fields: [
        { type: 'textarea', name: 'technicalSkills', label: 'Technical Skills', icon: 'FaLightbulb', placeholder: 'List your technical skills (e.g., programming, tools)' },
        { type: 'textarea', name: 'softSkills', label: 'Soft Skills', icon: 'FaUsers', placeholder: 'List your soft skills (e.g., communication, leadership)' },
        { type: 'textarea', name: 'softwareSkills', label: 'Software Skills', icon: 'FaCertificate', placeholder: 'List software you are proficient with' },
        { type: 'textarea', name: 'programmingLanguages', label: 'Programming Languages', icon: 'FaLightbulb', placeholder: 'List programming languages you know' },
        { type: 'textarea', name: 'languages', label: 'Languages Known', icon: 'FaLanguage', placeholder: 'List languages you speak and write' },
        { type: 'textarea', name: 'strengths', label: 'Key Strengths', icon: 'FaTrophy', placeholder: 'Your main strengths and abilities' },
        { type: 'textarea', name: 'areasForImprovement', label: 'Areas for Improvement', icon: 'FaLightbulb', placeholder: 'Areas you are working to improve' },
      ]
    },
    {
      title: "Dubai & UAE Specific",
      icon: "FaMapMarkerAlt",
      description: "Information specific to your Dubai relocation",
      fields: [
        { type: 'select', name: 'visaStatus', label: 'Current Visa Status', options: visaStatuses, required: true, icon: 'FaIdCard' },
        { type: 'select', name: 'uaeExperience', label: 'Previous UAE Experience', options: uaeExperiences, icon: 'FaBriefcase' },
        { type: 'textarea', name: 'preferredEmirates', label: 'Preferred Emirates in UAE', icon: 'FaMapMarkerAlt', placeholder: 'Which emirates are you interested in?' },
        { type: 'select', name: 'relocationReadiness', label: 'Relocation Readiness', options: relocationReadinessOptions, icon: 'FaCalendar' },
        { type: 'select', name: 'accommodationNeeded', label: 'Accommodation Needed', options: accommodationOptions, icon: 'FaHome' },
        { type: 'text', name: 'familyStatus', label: 'Family Status', icon: 'FaUsers', placeholder: 'e.g., Single, Married with kids' },
      ]
    },
    {
      title: "Job Preferences",
      icon: "FaUserTie",
      description: "Your career preferences and expectations",
      fields: [
        { type: 'textarea', name: 'preferredIndustries', label: 'Preferred Industries', icon: 'FaBuilding', placeholder: 'Which industries are you interested in?' },
        { type: 'select', name: 'jobLevel', label: 'Desired Job Level', options: jobLevels, icon: 'FaUserTie' },
        { type: 'select', name: 'employmentType', label: 'Preferred Employment Type', options: employmentTypes, icon: 'FaBriefcase' },
        { type: 'select', name: 'workMode', label: 'Preferred Work Mode', options: workModes, icon: 'FaGlobe' },
        { type: 'select', name: 'companySize', label: 'Preferred Company Size', options: companySizes, icon: 'FaBuilding' },
        { type: 'textarea', name: 'expectedBenefits', label: 'Expected Benefits', icon: 'FaMoneyBillWave', placeholder: 'What benefits are important to you?' },
      ]
    },
    {
      title: "Career Goals & Documents",
      icon: "FaTrophy",
      description: "Your aspirations and supporting documents",
      fields: [
        { type: 'textarea', name: 'careerGoals', label: 'Career Goals', required: true, icon: 'FaTrophy', placeholder: 'Where do you see yourself in 5 years?' },
        { type: 'textarea', name: 'achievements', label: 'Key Achievements', icon: 'FaStar', placeholder: 'Your significant professional achievements' },
        { type: 'textarea', name: 'whyDubai', label: 'Why Dubai?', required: true, icon: 'FaMapMarkerAlt', placeholder: 'Why do you want to work in Dubai?' },
        { type: 'textarea', name: 'whyChooseYou', label: 'Why Should We Choose You?', icon: 'FaUser', placeholder: 'What makes you the right candidate?' },
        { type: 'date', name: 'availabilityDate', label: 'Availability Date', icon: 'FaCalendar' },
        { type: 'textarea', name: 'coverLetter', label: 'Cover Letter', icon: 'FaFileAlt', placeholder: 'Your cover letter or additional message' },
        { type: 'text', name: 'portfolioLink', label: 'Portfolio/LinkedIn URL', icon: 'FaLink', placeholder: 'Link to your portfolio or LinkedIn' },
      ]
    },
    {
      title: "References & Services",
      icon: "FaHandshake",
      description: "References and additional service requirements",
      fields: [
        { type: 'textarea', name: 'reference1', label: 'Reference 1', icon: 'FaUsers', placeholder: 'Name, Company, Position, Contact' },
        { type: 'textarea', name: 'reference2', label: 'Reference 2', icon: 'FaUsers', placeholder: 'Name, Company, Position, Contact' },
        { type: 'textarea', name: 'servicesNeeded', label: 'Services Needed', icon: 'FaHandshake', placeholder: 'What services do you require from us?' },
        { type: 'text', name: 'consultationTiming', label: 'Preferred Consultation Timing', icon: 'FaCalendar', placeholder: 'When are you available for consultation?' },
        { type: 'text', name: 'budgetForServices', label: 'Budget for Services', icon: 'FaMoneyBillWave', placeholder: 'Your budget for our services' },
        { type: 'text', name: 'heardAboutUs', label: 'How Did You Hear About Us?', icon: 'FaUsers', placeholder: 'How did you find out about our services?' },
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object
      const formDataToSend = new FormData();

      // Add essential fields first
      formDataToSend.append("access_key", "4f4f700b-da1b-4957-b2a5-717e6cfaa642");
      formDataToSend.append("subject", `Dubai Job Application - ${formData.name}`);
      formDataToSend.append("from_name", "Naukri in Dubai Job Portal");
      formDataToSend.append("botcheck", "");

      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key] instanceof File) {
          if (formData[key]) {
            formDataToSend.append(key, formData[key]);
          }
        } else {
          formDataToSend.append(key, formData[key] || 'Not provided');
        }
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(`Thank you ${formData.name}! Your application has been successfully submitted. Our career experts will review your profile within 24 hours and contact you at ${formData.email} or ${formData.phone} with suitable Dubai opportunities.`);

        // Reset form
        const resetData = {};
        Object.keys(formData).forEach(key => {
          resetData[key] = "";
        });
        setFormData(resetData);
        setCurrentSection(0);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setSubmitMessage("We encountered an issue with your submission. Please try again or contact us directly at careers@naukriindubai.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const renderField = (field) => {
    const IconComponent = iconComponents[field.icon];

    switch (field.type) {
      case 'select':
        return (
          <div className="relative">
            {IconComponent && (
              <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            )}
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F20505] focus:border-transparent text-gray-700 bg-white"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );

      case 'textarea':
        return (
          <div className="relative">
            {IconComponent && (
              <IconComponent className="absolute left-3 top-3 text-gray-400 text-sm" />
            )}
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F20505] focus:border-transparent text-gray-700 bg-white resize-vertical"
              placeholder={field.placeholder}
            />
          </div>
        );

      case 'file':
        return (
          <div className="relative">
            {IconComponent && (
              <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            )}
            <input
              type="file"
              name={field.name}
              onChange={handleChange}
              required={field.required}
              accept={field.accept}
              className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F20505] focus:border-transparent file:mr-4 file:py-2 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-[#030A8C] file:text-white hover:file:bg-[#02076e]"
            />
          </div>
        );

      default:
        return (
          <div className="relative">
            {IconComponent && (
              <IconComponent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            )}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              required={field.required}
              className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F20505] focus:border-transparent text-gray-700 bg-white"
              placeholder={field.placeholder}
            />
          </div>
        );
    }
  };

  const SectionIcon = iconComponents[sections[currentSection]?.icon] || FaUser;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white  shadow-lg p-6 sticky top-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#030A8C] mb-4 flex items-center">
                <FaUserTie className="mr-2" />
                Application Steps
              </h3>
              <div className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-full text-left p-3  transition-all duration-200 border ${currentSection === index
                        ? 'bg-[#030A8C] text-white shadow-md border-[#030A8C]'
                        : 'bg-gray-50 text-gray-700 hover:bg-blue-50 border-gray-200 hover:border-[#F20505]'
                      }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8  flex items-center justify-center mr-3 text-sm font-bold ${currentSection === index ? 'bg-white text-[#030A8C]' : 'bg-[#030A8C] text-white'
                        }`}>
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <span className="font-medium block">{section.title}</span>
                        {/* <span className={`text-xs mt-1 block ${
                          currentSection === index ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {section.description}
                        </span> */}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <motion.div
                className="mt-8 p-6  border border-[#030A8C]/30  transition-all duration-500"
              > 
                <motion.h4
                  className="font-semibold text-[#030A8C] mb-3 flex items-center text-lg"
                >
                  <FaStar className="mr-2 text-[#F20505]" />
                  Why Choose Us?
                </motion.h4>

                <ul className="text-sm text-gray-800 space-y-2">
                  {[
                    "500+ Partner Companies",
                    "24-48 Hour Response",
                    "Visa & Relocation Support",
                    "Free Career Consultation",
                    "95% Success Rate",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      whileHover={{ x: 5, color: "#F20505" }}
                      className="flex items-center font-medium"
                    >
                      <FaStar className="mr-2 text-[#030A8C] text-xs" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>


              {/* Support Info */}
              <div className="mt-4 p-4 bg-blue-50  border border-blue-200">
                <h4 className="font-semibold text-[#030A8C] mb-2 flex items-center">
                  <FaShieldAlt className="mr-2 text-[#030A8C]" />
                  Need Help?
                </h4>
                <p className="text-xs text-gray-600">
                  Contact us: <span className="text-[#030A8C] font-semibold">careers@naukriindubai.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Current Section */}
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white  shadow-lg p-8 border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#030A8C] to-[#1a1a8a]  flex items-center justify-center text-white mr-4 shadow-md">
                    <SectionIcon className="text-xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#030A8C]">
                      {sections[currentSection].title}
                    </h2>
                    <p className="text-gray-600">{sections[currentSection].description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sections[currentSection].fields.map((field, index) => (
                    <div
                      key={index}
                      className={`space-y-2 ${field.type === 'textarea' ? 'md:col-span-2' : ''}`}
                    >
                      <label className="block text-sm font-semibold text-gray-700 flex items-center">
                        {field.label}
                        {field.required && <span className="text-[#F20505] ml-1">*</span>}
                      </label>
                      {renderField(field)}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center bg-white shadow-lg p-6 border border-gray-200">
                <button
                  type="button"
                  onClick={prevSection}
                  disabled={currentSection === 0}
                  className="px-8 py-3 bg-gray-500 text-white  hover:bg-[#F20505] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center font-semibold shadow-sm"
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>

                <div className="text-center">
                  <span className="text-sm text-gray-600 font-medium">
                    Step {currentSection + 1} of {sections.length}
                  </span>
                </div>

                {currentSection < sections.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextSection}
                    className="px-8 py-3 bg-[#030A8C] text-white  hover:bg-[#F20505] transition-all duration-200 flex items-center font-semibold shadow-sm hover:shadow-md"
                  >
                    Next Section
                    <FaArrowLeft className="ml-2 transform rotate-180" />
                  </button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-3 bg-gradient-to-r from-[#030A8C] to-[#F20505] text-white hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center text-lg font-semibold shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin border-2 border-white border-t-transparent w-5 h-5 mr-3"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3" />
                        Submit Application
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </form>

            {/* Status Message */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 p-8  border-l-4 shadow-lg ${submitStatus === "success"
                    ? "bg-gradient-to-r from-green-50 to-emerald-50 border-green-500 text-green-800"
                    : "bg-gradient-to-r from-red-50 to-pink-50 border-red-500 text-red-800"
                  }`}
              >
                <div className="flex items-start space-x-4">
                  {submitStatus === "success" ? (
                    <FaCheckCircle className="text-green-500 text-3xl flex-shrink-0 mt-1" />
                  ) : (
                    <FaExclamationCircle className="text-red-500 text-3xl flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="font-bold text-2xl mb-3">
                      {submitStatus === "success" ? "🎉 Application Submitted Successfully!" : "❌ Submission Failed"}
                    </p>
                    <p className="text-lg leading-relaxed">{submitMessage}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiJobApplicationForm;