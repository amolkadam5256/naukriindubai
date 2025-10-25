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
  FaFileDownload,
  FaArrowRight,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaBriefcase,
  FaUserTie,
  FaHeadset
} from "react-icons/fa";
import { motion } from "framer-motion";
import Images from "../assets/images/images";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const primaryColor = "#030A8C"; // Navy Blue
  const secondaryColor = "#F20505"; // Red
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [message, setMessage] = useState("");

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/", icon: <FaArrowRight className="text-xs" /> },
        { name: "Jobs", path: "/jobs", icon: <FaArrowRight className="text-xs" /> },
        { name: "Services", path: "/services", icon: <FaArrowRight className="text-xs" /> },
        { name: "How It Works", path: "/how-it-works", icon: <FaArrowRight className="text-xs" /> },
        { name: "FAQ", path: "/faq", icon: <FaArrowRight className="text-xs" /> },
        { name: "Contact", path: "/contact", icon: <FaArrowRight className="text-xs" /> }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Resume Review", path: "/services/resume-review" },
        { name: "Cover Letter Help", path: "/services/cover-letter" },
        { name: "Interview Coaching", path: "/services/interview-coaching" },
        { name: "Headhunter Access", path: "/services/headhunter-access" },
        { name: "Career Counseling", path: "/services/career-counseling" },
        { name: "Job Matching", path: "/services/job-matching" }
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/naukriindubai",
      color: "#0077B5",
      name: "LinkedIn"
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/naukriindubai",
      color: "#E4405F",
      name: "Instagram"
    },
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/naukriindubai",
      color: "#1877F2",
      name: "Facebook"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:info@naukriindubai.com",
      color: "#EA4335",
      name: "Email"
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xs" />,
      text: "Dubai, UAE | Serving Indian Professionals",
      color: primaryColor
    },
    {
      icon: <FaPhone className="text-xs" />,
      text: "+971 XXX XXX XXX",
      color: secondaryColor,
      href: "tel:+971XXXXXXXXX"
    },
    {
      icon: <FaEnvelope className="text-xs" />,
      text: "info@naukriindubai.com",
      color: "#6B7280",
      href: "mailto:info@naukriindubai.com"
    },
    {
      icon: <FaHeadset className="text-xs" />,
      text: "24/7 Career Support",
      color: primaryColor
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setMessage("");

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setMessage("Subscribed successfully! You'll receive the latest Dubai job opportunities.");
      setEmail("");
    } catch (error) {
      setSubmitStatus("error");
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800 relative border-t border-gray-200">
      {/* Top Border */}
      <div className="h-0.5 bg-gradient-to-r from-[#030A8C] via-[#F20505] to-[#030A8C]"></div>

      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <motion.img
              src={Images.logo}
              alt="Naukri in Dubai Logo"
              className="h-16 md:h-20 object-contain drop-shadow-md transition-transform duration-300  hover:drop-shadow-xl"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotate: 5 }}
            />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted partner for finding verified job opportunities in Dubai.
            We connect Indian professionals with top employers and provide end-to-end
            career support for your Dubai journey.
          </p>



          {/* Contact Info */}
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
                className={`mt-2 p-2 rounded text-xs flex items-center space-x-1 ${submitStatus === "success"
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
                    color: "white"
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

      {/* Bottom Section */}
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
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#F20505] transition-colors duration-200 text-xs"
            >
              Support
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;