import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
  FaInstagram,
  FaFacebook,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../assets/images/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryColor = "#030A8C";
  const secondaryColor = "#F20505";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [message, setMessage] = useState("");

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { name: "Career Essentials", path: "/services/career-essentials" },
        { name: "Interview Placement", path: "/services/interview-placement" },
        { name: "Career Consultation", path: "/services/career-consultation" },
        { name: "Skill Development & Internship", path: "/services/skill-internship" },
        { name: "Visa, Relocation & Work Setup", path: "/services/visa-relocation" },
      ],
    },
  ];


  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/naukriindubai",
      color: "#0077B5",
      name: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/naukriindubai",
      color: "#E4405F",
      name: "Instagram",
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/naukriindubai",
      color: "#1877F2",
      name: "Facebook",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:info@naukriindubai.com",
      color: "#EA4335",
      name: "Email",
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xs" />,
      text: "Al Owais Building Sheikh Zayed Road, Dubai UA",
      color: primaryColor,
    },
    {
      icon: <FaPhone className="text-xs" />,
      text: "+971 50 576 1914",
      color: secondaryColor,
      href: "tel:+971505761914",
    },
    {
      icon: <FaEnvelope className="text-xs" />,
      text: "info@naukriindubai.com",
      color: "#6B7280",
      href: "mailto:info@naukriindubai.com",
    },
    {
      icon: <FaHeadset className="text-xs" />,
      text: "24/7 Career Support",
      color: primaryColor,
    },
  ];

  // ✅ Handle newsletter form using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    const formData = new FormData();
    formData.append("access_key", "4f4f700b-da1b-4957-b2a5-717e6cfaa642"); // 🔑 Replace with your real access key
    formData.append("email", email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setMessage("Subscribed successfully! You'll receive the latest Dubai job alerts.");
        setEmail("");
      } else {
        setSubmitStatus("error");
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800 relative border-t border-gray-200">
      <div className="h-0.5 bg-gradient-to-r from-[#030A8C] via-[#F20505] to-[#030A8C]"></div>

      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.img
            src={Images.logo}
            alt="Naukri in Dubai Logo"
            className="h-16 md:h-20 object-contain drop-shadow-md transition-transform duration-300 hover:drop-shadow-xl"
            whileHover={{ rotate: 5 }}
          />

          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted partner for finding verified job opportunities in Dubai.
            We connect Indian professionals with top employers and provide end-to-end
            career support for your Dubai journey.
          </p>

          <div className="space-y-2">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ x: 3 }}
                className="flex items-start space-x-2 group cursor-pointer text-sm"
              >
                <div
                  className="p-1.5 rounded-full text-white mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-gray-600 group-hover:text-[#030A8C] transition-colors duration-200">
                  {item.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links Sections */}
        {footerSections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#030A8C]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <motion.li
                  key={linkIndex}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#F20505] transition-all duration-200 flex items-center group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#F20505] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.icon && <span className="mr-1.5">{link.icon}</span>}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3 text-[#030A8C]">
              Job Alerts
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Get notified about the latest Dubai job opportunities matching your profile
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 w-full rounded border border-gray-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#030A8C] text-sm transition-all duration-200"
                required
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-[#030A8C] to-[#1a1a8a] text-white rounded hover:shadow transition-all duration-200 w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Subscribing..." : "Get Job Alerts"}
              </motion.button>
            </form>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-2 p-2 rounded text-xs flex items-center space-x-1 ${
                  submitStatus === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus === "success" ? (
                  <FaCheckCircle className="flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="flex-shrink-0" />
                )}
                <span>{message}</span>
              </motion.div>
            )}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wide mb-3 text-[#030A8C]">
              Follow Us
            </h3>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 hover:shadow transition-all duration-200"
                  style={{ color: social.color }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: social.color,
                    color: "white",
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 text-sm">
              © {currentYear} <span className="text-[#030A8C] font-semibold">Naukri in Dubai</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Connecting Indian professionals with Dubai career opportunities since 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            <Link to="/privacy" className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs">
              Support
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
