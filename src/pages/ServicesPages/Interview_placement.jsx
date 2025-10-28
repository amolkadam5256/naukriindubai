import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConsultationCTA from "../../components/ServicesSections/ConsultationCTA";

export default function InterviewPlacement() {
  const service = {
    title: "Interview & Placement Services for Dubai Professionals",
    tagline: "Prepare. Impress. Get Hired.",
    description:
      "Our Interview & Placement services are designed to help you secure your dream job in Dubai and the Gulf region. We provide personalized coaching, direct access to recruiters, and verified job placement opportunities — ensuring you stand out in every interview.",
    highlights: [
      "Personalized Interview Coaching",
      "Dubai Job Placement Assistance",
      "Access to Verified Headhunters & Employers",
      "Confidence & Soft Skills Development",
      "Gulf Market Orientation & Guidance",
    ],
    contact: {
      phone: "+971 50 234 5678",
      email: "placement@naukriindubai.com",
    },
  };

  const bgImage =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"; // modern meeting room
  const profileImage =
    "https://images.unsplash.com/photo-1581093588401-22c9c3d6d0f7?auto=format&fit=crop&w=800&q=60"; // candidate interview
  const overlayImage =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=60"; // recruiter discussion

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
                Book Interview Session
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
                  alt="Interview Coaching"
                  className="absolute top-0 left-0 w-3/4 h-64 md:h-80 object-cover shadow-xl border border-black/10"
                  initial={{ y: -10, opacity: 0.95 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.img
                  src={overlayImage}
                  alt="Placement Support"
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
                  <div className="font-semibold">900+ Candidates Placed</div>
                  <div className="text-xs text-gray-200 mt-1">
                    Across Dubai & GCC
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
            How Our Interview & Placement Works
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto mt-5 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We go beyond job listings — our expert consultants prepare you for every stage of your career transition. From building your confidence to connecting you directly with Dubai employers, our approach ensures you’re not just ready for interviews but ready for success.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Interview Mastery Program",
              desc: "Learn to answer tricky interview questions confidently through guided coaching sessions and mock interviews.",
            },
            {
              title: "Verified Employer Access",
              desc: "Get exclusive access to trusted employers and recruitment partners in Dubai and the Gulf market.",
            },
            {
              title: "Placement Guarantee Support",
              desc: "We stay with you until you secure your placement — providing full guidance and follow-up support.",
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
      <ConsultationCTA/>
    </div>
  );
}
