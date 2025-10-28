import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHeroSection({
  company = {
    name: "Naukri in Dubai",
    tagline: "The job platform on your side",
    description:
      "Your trusted partner for finding verified job opportunities in Dubai. We connect Indian professionals with top employers and provide end-to-end career support for your Dubai journey.",
    highlights: [
      "Resumes that can’t be ignored",
      "Access hidden opportunities",
      "Interview coaching & salary negotiation",
    ],
    contact: {
      phone: "+971 XXX XXX XXX",
      email: "info@naukriindubai.com",
      location: "Dubai, UAE | Serving Indian Professionals",
    },
    stats: {
      resumesReviewed: "0m+",
      resumesCreated: "0m+",
      jobOffers: "0m+",
      users: "0m+",
    },
  },
  primaryImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  secondaryImage = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=60",
}) {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Company Info */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase text-sm font-semibold text-[#F20505]">{company.tagline}</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#030A8C]">
              {company.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base text-gray-800">{company.description}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-1 md:grid-cols-2 ">
              {company.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 bg-gray-50 p-3 shadow-sm border-l-4 border-[#F20505] hover:shadow-md transition-all hover:pl-4 hover:border-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <span className="flex-none w-9 h-9 bg-[#030A8C] text-white grid place-items-center font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium">{h}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* ✅ Updated to Link */}
              <Link
                to="/DubaiJobApplicationForm"
                className="inline-flex items-center px-6 py-3 bg-[#030A8C] text-white font-medium shadow-md hover:bg-[#F20505] transition-colors"
              >
                REGISTER NOW
              </Link>

              <div className="text-sm text-gray-700">
                <div>{company.contact.location}</div>
                <div className="mt-1">
                  {company.contact.phone} • {company.contact.email}
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#030A8C]">{company.stats.resumesReviewed}</div>
                <div className="text-xs text-gray-500">Resumes reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F20505]">{company.stats.jobOffers}</div>
                <div className="text-xs text-gray-500">Job offers</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image layout */}
          <motion.div
            className="lg:col-span-5 relative w-full h-96 sm:h-[28rem]"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[85%] h-[85%] md:w-[75%] md:h-[75%]">
                <motion.img
                  src={primaryImage}
                  alt="Primary"
                  className="absolute top-0 left-0 w-3/4 shadow-xl object-cover h-64 md:h-80 border ring-2 ring-[#030A8C]/30"
                  initial={{ y: -10, opacity: 0.95 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.img
                  src={secondaryImage}
                  alt="Secondary"
                  className="absolute left-0 bottom-0 w-2/3 md:w-1/2 shadow-2xl object-cover h-48 md:h-64 transform translate-x-6 translate-y-6 border ring-2 ring-[#F20505]/30"
                  initial={{ y: 10, opacity: 0.9, scale: 0.98 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                />

                <motion.div
                  className="absolute right-0 top-6 bg-white p-4 shadow-lg w-40 text-sm border border-[#030A8C]/20"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                >
                  <div className="font-semibold text-[#030A8C]">Trusted by 500+ Companies</div>
                  <div className="text-xs text-gray-500 mt-2">Placing talent with Dubai's best</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
