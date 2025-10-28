import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Why choose Naukri in Dubai for your job search?",
            answer:
                "We specialize in connecting Indian professionals with verified Dubai employers, ensuring trust, transparency, and a smooth hiring journey.",
        },
        {
            question: "Do you verify every job opportunity?",
            answer:
                "Yes, every listing is pre-screened and verified by our recruitment partners to ensure you apply only for genuine, authorized openings.",
        },
        {
            question: "Will you help me with interview preparation?",
            answer:
                "Absolutely! Our team provides resume polishing, interview guidance, and personalized career support for Dubai placements.",
        },
        {
            question: "How soon can I start applying after registration?",
            answer:
                "You can start applying immediately after completing your profile. Our system will match you with the most relevant openings.",
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white text-black py-24 px-6 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#030A8C]/5 via-transparent to-[#F20505]/5 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-[#030A8C]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    Why Choose Us?
                </motion.h2>

                <motion.p
                    className="text-center text-gray-700 mt-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    We stand apart because we combine verified opportunities, career guidance, and transparency to make your Dubai job search seamless.
                </motion.p>

                <div className="mt-16 max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200  shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden bg-gray-50"
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
                                        className="px-5 pb-5 text-gray-700 bg-white"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Decorative bottom border animation */}
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
