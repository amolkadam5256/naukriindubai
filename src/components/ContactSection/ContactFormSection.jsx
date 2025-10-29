import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaBuilding,
  FaCheckCircle,
  FaExclamationCircle,
  FaComments
} from "react-icons/fa";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "735efc9c-d698-420a-86ee-72b8a78779e4");
      formDataToSend.append("subject", `Contact Inquiry from ${formData.name}`);
      formDataToSend.append("from_name", "Naukri in Dubai Contact Page");

      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          `Thank you ${formData.name}! Your message has been received. Our team will contact you soon at ${formData.email}.`
        );
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactImage =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"; // professional office / contact image

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative  overflow-hidden shadow-lg"
        >
          <img
            src={contactImage}
            alt="Contact Naukri in Dubai"
            className="w-full h-[500px] object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 left-6 bg-white/90 p-4  shadow-md border-l-4 border-[#F20505]"
          >
            <div className="flex items-center gap-3">
              <FaComments className="text-[#030A8C] text-xl" />
              <div>
                <h3 className="text-[#030A8C] font-semibold">Let’s Talk!</h3>
                <p className="text-sm text-gray-700">We’re here to assist you anytime.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8  shadow-lg border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-[#030A8C] mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions about visa, career consultation, or relocation services?
            Fill out the form below — our team will get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#F20505] outline-none"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#F20505] outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (WhatsApp preferred)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#F20505] outline-none"
              />
            </div>

            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 focus:ring-2 focus:ring-[#F20505] outline-none"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message..."
                className="w-full pl-4 pr-4 py-3 border border-gray-300  focus:ring-2 focus:ring-[#F20505] outline-none resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 font-semibold text-white  shadow-md transition-all duration-300 bg-gradient-to-r from-[#030A8C] to-[#F20505]"
            >
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center justify-center">
                  <FaPaperPlane className="mr-2" /> Send Message
                </span>
              )}
            </motion.button>
          </form>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4  border-l-4 ${
                submitStatus === "success"
                  ? "bg-green-50 border-green-500 text-green-800"
                  : "bg-red-50 border-red-500 text-red-800"
              }`}
            >
              <div className="flex items-start space-x-3">
                {submitStatus === "success" ? (
                  <FaCheckCircle className="text-green-500 text-xl mt-1" />
                ) : (
                  <FaExclamationCircle className="text-red-500 text-xl mt-1" />
                )}
                <p className="text-sm">{submitMessage}</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFormSection;
