import React from "react";
import { motion } from "framer-motion";

export default function CompanyOverviewSection() {
  const info = [
    {
      title: "Our Vision",
      description:
        "To become the most trusted bridge between Indian professionals and Dubai’s thriving job market - empowering every individual to achieve career success with confidence and credibility.",
      icon: "🌍",
      color: "#030A8C",
    },
    {
      title: "Our Mission",
      description:
        "To deliver verified job opportunities, enhance career readiness, and provide continuous support for Indian talent seeking growth in Dubai’s global business ecosystem.",
      icon: "🚀",
      color: "#F20505",
    },
    {
      title: "Our Values",
      description:
        "Integrity, transparency, and excellence drive everything we do. We believe in people-first growth - helping candidates find the right path, not just the next job.",
      icon: "💼",
      color: "#030A8C",
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6 relative overflow-hidden">
      {/* Subtle background pattern effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030A8C]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-[#030A8C]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Company Overview
        </motion.h2>

        <motion.p
          className="mt-3 text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our purpose is rooted in vision, guided by mission, and strengthened by values that define who we are.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {info.map((item, i) => (
            <motion.div
              key={i}
              className="relative group bg-gray-50 border border-gray-200  p-8 shadow-md overflow-hidden transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Before pseudo element (decorative background glow) */}
              <div
                className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${item.color}10, ${item.color}30)`,
                }}
              ></div>

              {/* Content Layer */}
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-full grid place-items-center text-3xl mx-auto mb-5 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-xl font-semibold text-[#030A8C] group-hover:text-[#F20505] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed group-hover:text-black transition-colors duration-500">
                  {item.description}
                </p>
              </div>

              {/* Border accent on hover */}
              <span
                className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#030A8C] to-[#F20505] transition-all duration-500 group-hover:w-full"
              ></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
