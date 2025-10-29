import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactHeroSection() {
  const contactInfo = {
    title: "Get in Touch with Our Experts",
    tagline: "Let’s Build Your Global Career Together.",
    description:
      "Whether you’re seeking visa guidance, career consultation, or relocation assistance - our team is ready to help you take the next step. Reach out today and let’s make your Dubai career journey seamless and successful.",
    contact: {
      phone: "+971 55 678 4321",
      email: "connect@naukriindubai.com",
      address: "Dubai, UAE | Pune, India",
    },
  };

  const bgImage =
    "https://images.unsplash.com/photo-1521737604894-d14cc237f11?auto=format&fit=crop&w=1600&q=80"; // meeting/corporate background
  const profileImage =
    "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=60"; // handshake
  const overlayImage =
    "https://images.unsplash.com/photo-1581093588401-22c9c3d6d0f7?auto=format&fit=crop&w=600&q=60"; // consultation

  return (
    <section
      className="relative bg-cover bg-center text-black"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: "lighten",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Text Section */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-sm font-semibold text-[#F20505]">
            {contactInfo.tagline}
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-black">
            {contactInfo.title}
          </h1>
          <p className="mt-5 max-w-2xl text-gray-700 text-base sm:text-lg">
            {contactInfo.description}
          </p>

          {/* Contact Details */}
          <div className="mt-8 grid gap-3 text-gray-800 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#030A8C]">📞</span>
              <span>{contactInfo.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#030A8C]">✉️</span>
              <span>{contactInfo.contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-[#030A8C]">📍</span>
              <span>{contactInfo.contact.address}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="/BookConsultation"
              className="inline-flex items-center px-6 py-3 bg-[#030A8C] text-white font-semibold shadow-md hover:bg-[#F20505] transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://wa.me/971556784321?text=Hi%20Team,%20I%20want%20to%20know%20about%20career%20opportunities%20in%20Dubai."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#030A8C] text-[#030A8C] font-semibold shadow-sm hover:bg-[#030A8C] hover:text-white transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="lg:col-span-5 relative h-96"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[85%] h-[85%]">
              <motion.img
                src={profileImage}
                alt="Consultation Meeting"
                className="absolute top-0 left-0 w-3/4 h-64 md:h-80 object-cover shadow-xl border border-black/10"
                initial={{ y: -10, opacity: 0.95 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
              <motion.img
                src={overlayImage}
                alt="Professional Discussion"
                className="absolute bottom-0 left-0 w-2/3 h-48 md:h-64 object-cover shadow-lg border border-black/10 transform translate-x-6 translate-y-6"
                initial={{ y: 10, opacity: 0.9 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              />
              <motion.div
                className="absolute right-0 top-6 bg-[#030A8C] text-white p-4 shadow-lg w-44 text-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="font-semibold">24/7 Support Available</div>
                <div className="text-xs text-gray-200 mt-1">
                  Across India & UAE
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
