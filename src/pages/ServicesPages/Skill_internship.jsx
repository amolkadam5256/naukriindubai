import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConsultationCTA from "../../components/ServicesSections/ConsultationCTA";

export default function Skill_internship() {
  const service = {
    title: "Skill Development & Internship",
    tagline: "Empower Your Future — Learn, Build, and Grow.",
    description:
      "Our Skill Development & Internship programs are designed to bridge the gap between learning and real-world experience. We offer curated workshops, hands-on training, and global internship opportunities that prepare you for career success in competitive markets.",
    highlights: [
      "Industry-Relevant Skill Training",
      "Certified Internship Opportunities",
      "Hands-on Project Experience",
      "Global Career Readiness Programs",
      "Mentorship by Industry Experts",
    ],
    contact: {
      phone: "+971 55 678 4321",
      email: "info@naukriindubai.com",
    },
  };

  const bgImage =
    "https://images.unsplash.com/photo-1581091012184-5c1a9c4b2a89?auto=format&fit=crop&w=1600&q=80"; // training bg
  const profileImage =
    "https://images.unsplash.com/photo-1584697964191-3e5d22a3b2e1?auto=format&fit=crop&w=800&q=60"; // student internship
  const overlayImage =
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=60"; // teamwork training

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
                Join Skill Program
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
                  alt="Skill Development"
                  className="absolute top-0 left-0 w-3/4 h-64 md:h-80 object-cover shadow-xl border border-black/10"
                  initial={{ y: -10, opacity: 0.95 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src={overlayImage}
                  alt="Internship Training"
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
                  <div className="font-semibold">2000+ Students Trained</div>
                  <div className="text-xs text-gray-200 mt-1">
                    Across India & UAE
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
            Build Skills that Employers Value
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mt-5 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Upskill yourself with our global internship and skill development programs. Gain practical exposure, hands-on experience, and certifications that prepare you for a successful international career.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Certified Workshops",
              desc: "Join specialized training sessions designed to enhance your technical and soft skills for modern industries.",
            },
            {
              title: "Real-World Internships",
              desc: "Participate in global internship programs that offer exposure to real projects, mentorship, and cross-cultural learning.",
            },
            {
              title: "Career-Ready Certifications",
              desc: "Earn certificates that validate your expertise and give you a competitive edge in your professional journey.",
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
