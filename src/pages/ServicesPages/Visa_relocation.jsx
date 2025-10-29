import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConsultationCTA from "../../components/ServicesSections/ConsultationCTA";

export default function Visa_relocation() {
  const service = {
    title: "Visa, Relocation & Work Setup",
    tagline: "Your Dubai Career Journey — Simplified and Secured.",
    description:
      "We provide end-to-end support for professionals relocating to Dubai. From visa processing to accommodation guidance and job onboarding, our experts ensure a seamless, stress-free transition into your new professional life abroad.",
    highlights: [
      "Complete Visa Assistance & Documentation",
      "Dubai Relocation & Accommodation Guidance",
      "Work Permit & Legal Compliance Support",
      "Professional Onboarding & Job Setup",
      "Post-Arrival Consultation & Settling Assistance",
    ],
    contact: {
      phone: "+971 55 678 4321",
      email: "relocation@naukriindubai.com",
    },
  };

  const bgImage =
    "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&w=1600&q=80"; // Dubai city view
  const profileImage =
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=60"; // person with suitcase
  const overlayImage =
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=60"; // airplane / travel

  return (
    <div className="bg-white text-black">
      {/* ========== HERO SECTION ========== */}
      <section
        className="relative bg-cover bg-center text-black"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url(${bgImage})`,
          backgroundBlendMode: "lighten",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <motion.div className="lg:col-span-7">
            <p className="uppercase text-sm font-semibold text-[#F20505]">
              {service.tagline}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-black">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-gray-700 text-base sm:text-lg">
              {service.description}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
              {service.highlights.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 bg-gray-50 p-3 shadow-sm border-l-4 border-[#F20505] hover:shadow-md transition-all hover:pl-4 hover:border-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <span className="flex-none w-7 h-7 bg-[#030A8C] text-white grid place-items-center text-sm font-semibold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-base">{item}</p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                to="/BookConsultation"
                className="inline-flex items-center px-6 py-3 bg-[#030A8C] text-white font-semibold shadow-md hover:bg-[#F20505] transition-colors"
              >
                Book Relocation Consultation
              </Link>

              <div className="text-sm text-gray-700">
                <div>{service.contact.phone}</div>
                <div>{service.contact.email}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
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
                  alt="Dubai Visa Consultation"
                  className="absolute top-0 left-0 w-3/4 h-64 md:h-80 object-cover shadow-xl border border-black/10"
                  initial={{ y: -10, opacity: 0.95 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src={overlayImage}
                  alt="Relocation Support"
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
                  <div className="font-semibold">1000+ Clients Relocated</div>
                  <div className="text-xs text-gray-200 mt-1">
                    India → Dubai
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== INFO SECTION ========== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#030A8C]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Move with Confidence — From India to Dubai
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mt-5 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our consultancy ensures a smooth and legal transition for professionals aiming to build a career in Dubai. From documentation and relocation logistics to post-arrival job setup — we take care of every step, so you can focus on your future.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Visa & Document Assistance",
              desc: "Expert help for work, residency, or dependent visas — ensuring every process is legal, smooth, and fast-tracked.",
            },
            {
              title: "Relocation & Housing Support",
              desc: "We guide you through accommodation, transport, and living essentials to make settling in Dubai effortless.",
            },
            {
              title: "Work Setup & Onboarding",
              desc: "Get professional onboarding help — from office setup to local compliance, so you’re job-ready from day one.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#F20505] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
