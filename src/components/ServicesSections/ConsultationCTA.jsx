import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ConsultationCTA() {
  return (
    <section
      className="relative py-20 px-6 bg-[#030A8C] text-black overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#030A8C]/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Let’s Discuss Your Career Goals
        </h2>
        <p className="text-lg text-gray-200 mb-10">
          Book a free consultation and take the first step toward a successful global career.
          Our experts will help you plan your path with confidence.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-[#F20505] text-white text-lg font-semibold px-8 py-4 shadow-lg hover:bg-white hover:text-black transition-all duration-300"
        >
          Book Free Consultation
        </Link>
      </motion.div>
    </section>
  );
}
