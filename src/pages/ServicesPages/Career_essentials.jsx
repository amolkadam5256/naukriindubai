import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConsultationCTA from '../../components/ServicesSections/ConsultationCTA'

export default function CareerEssentials() {
  const service = {
    title: "Career Essentials for Global Success",
    tagline: "Build. Present. Succeed.",
    description:
      "Career Essentials by Naukri in Dubai is your one-stop solution for professional growth. From crafting a winning resume to creating a global-ready LinkedIn profile, we help you showcase your skills with confidence and land your dream opportunity.",
    highlights: [
      "Professional Resume & Cover Letter Writing",
      "LinkedIn Profile Optimization",
      "Interview Preparation & Mock Sessions",
      "Skill Development Guidance",
      "Career Strategy Consultation",
    ],
    contact: {
      phone: "+971 50 123 4567",
      email: "info@naukriindubai.com",
    },
  };

  const bgImage =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80";
  const profileImage =
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=60";
  const overlayImage =
    "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=600&q=60";

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
                to="/DubaiJobApplicationForm"
                className="inline-flex items-center px-6 py-3 bg-[#030A8C] text-white font-semibold shadow-md hover:bg-[#F20505] transition-colors"
              >
                Get Free Consultation
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
                  alt="Career Consultant"
                  className="absolute top-0 left-0 w-3/4 h-64 md:h-80 object-cover shadow-xl border border-black/10"
                  initial={{ y: -10, opacity: 0.95 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src={overlayImage}
                  alt="Team Work"
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
                  <div className="font-semibold">1500+ Success Stories</div>
                  <div className="text-xs text-gray-200 mt-1">
                    Globally Recognized Professionals
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
            What’s Included in Career Essentials?
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mt-5 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our career experts work with you to create a professional presence that gets attention from employers in Dubai and abroad. 
            From refining your resume to improving your online brand, every service is designed to enhance your career potential.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Resume & Cover Letter",
              desc: "We write ATS-optimized resumes and impactful cover letters tailored to your dream roles.",
            },
            {
              title: "LinkedIn Profile Makeover",
              desc: "Get noticed by recruiters with a polished LinkedIn presence that highlights your value.",
            },
            {
              title: "Interview Readiness",
              desc: "Ace your interviews with our expert-led mock sessions and communication training.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-8  shadow-md hover:shadow-lg transition-all"
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
