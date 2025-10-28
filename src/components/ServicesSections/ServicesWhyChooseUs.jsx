import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ServicesWhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why choose Naukri in Dubai for your job search?",
      answer:
        "We’re more than just a job portal — we’re your Dubai career partner. Our platform connects Indian professionals with verified Dubai employers through a transparent, personalized process designed for your success.",
    },
    {
      question: "Do you verify every job opportunity?",
      answer:
        "Yes. Every job listing is pre-screened and verified by our recruitment partners and Dubai-based HR consultants to ensure authenticity and reliability.",
    },
    {
      question: "Will you help me with interview preparation?",
      answer:
        "Absolutely. We provide personalized interview coaching, mock sessions, and recruiter insights to help you perform confidently and secure your desired role.",
    },
    {
      question: "Can you help me relocate to Dubai?",
      answer:
        "Yes! From visa process guidance and relocation advice to connecting you with trusted accommodation and onboarding partners — we simplify your move.",
    },
    {
      question: "How soon can I start applying after registration?",
      answer:
        "You can begin applying right after completing your profile. Our AI-powered system instantly matches you with verified openings that fit your skills and goals.",
    },
    {
      question: "Do you offer resume and LinkedIn optimization?",
      answer:
        "Yes. Our experts help craft ATS-friendly resumes, powerful cover letters, and optimized LinkedIn profiles that stand out to Dubai recruiters.",
    },
    {
      question: "Are there hidden job opportunities on your platform?",
      answer:
        "Yes! We provide access to exclusive roles and unlisted opportunities through partnerships with headhunters and top Dubai employers.",
    },
    {
      question: "Do you offer ongoing career support after placement?",
      answer:
        "We stay with you even after you get hired. From career guidance to upskilling suggestions, we help you continue growing in Dubai’s dynamic job market.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#f8f9ff] to-[#fff5f5] py-24 px-6 overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#030A8C]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-[#F20505]">Naukri in Dubai?</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          We combine verified opportunities, expert coaching, and real guidance - making your Dubai job search faster, smarter, and stress-free.
        </motion.p>

        {/* FAQ List */}
        <div className="mt-16 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 bg-white  shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-[#030A8C] hover:text-[#F20505] transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <Minus className="text-[#F20505]" size={22} />
                  ) : (
                    <Plus className="text-[#030A8C]" size={22} />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="px-5 pb-5 text-gray-700 bg-gradient-to-r from-white to-[#fef2f2]"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated bottom bar */}
              <motion.div
                className="h-[3px] bg-gradient-to-r from-[#030A8C] to-[#F20505] origin-left"
                animate={{ scaleX: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
