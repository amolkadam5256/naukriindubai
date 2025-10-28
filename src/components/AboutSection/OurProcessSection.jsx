import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Zap, Target } from "lucide-react";

export default function OurProcessSection() {
    const steps = [
        {
            step: "01",
            title: "Register & Create Profile",
            description:
                "Sign up and create your profile to showcase your skills, experience, and career goals.",
            icon: <UserPlus size={26} />,
            color: "#030A8C",
        },
        {
            step: "02",
            title: "Get Matched Instantly",
            description:
                "Find suitable job openings in Dubai that match your professional background and preferences.",
            icon: <Zap size={26} />,
            color: "#F20505",
        },
        {
            step: "03",
            title: "Apply & Get Hired",
            description:
                "Submit your application, attend interviews, and secure your ideal job with confidence.",
            icon: <Target size={26} />,
            color: "#030A8C",
        },
    ];


    return (
        <section className="bg-white text-black py-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-[#030A8C]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Process — How We Work
                </motion.h2>

                <motion.p
                    className="text-center text-gray-700 mt-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    A seamless, strategic workflow designed to move you from sign-up to success — step by step.
                </motion.p>

                {/* Timeline */}
                <div className="relative mt-16">
                    {/* Vertical line */}
                    <motion.div
                        className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-[#030A8C] to-[#F20505] transform -translate-x-1/2 l"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                    ></motion.div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col sm:flex-row items-center mb-6 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                                }`}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                        >
                            {/* Icon Connector */}
                            <motion.div
                                className="absolute left-1/2 w-10 h-10 bg-white border-4 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 z-10"
                                style={{
                                    borderColor: step.color,
                                    boxShadow: `0 0 20px ${step.color}40`,
                                }}
                                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="text-xl" style={{ color: step.color }}>
                                    {step.icon}
                                </span>
                            </motion.div>

                            {/* Step Card */}
                            <div
                                className={`relative bg-white border border-gray-200 p-6  shadow-md hover:shadow-xl transition-all duration-500 w-full sm:w-[45%] group ${index % 2 === 0
                                        ? "sm:mr-auto sm:text-right"
                                        : "sm:ml-auto sm:text-left"
                                    }`}
                            >
                                {/* Gradient hover glow */}
                                <span className="absolute inset-0  bg-gradient-to-r from-[#030A8C] to-[#F20505] opacity-0 group-hover:opacity-10 transition-all duration-500"></span>

                                <motion.h3
                                    className="text-2xl font-semibold text-[#030A8C] relative z-10 group-hover:text-[#F20505] transition-colors duration-500"
                                    whileHover={{ y: -3 }}
                                >
                                    {step.title}
                                </motion.h3>
                                <p className="text-gray-700 mt-3 relative z-10 leading-relaxed">
                                    {step.description}
                                </p>
                                <motion.div
                                    className="mt-3 inline-block text-sm font-semibold text-[#F20505] relative z-10 group-hover:text-[#030A8C] transition-all"
                                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                                >
                                    Step {step.step}
                                </motion.div>

                                {/* Animated underline */}
                                <motion.span
                                    className="block h-[3px] w-0 bg-gradient-to-r from-[#030A8C] to-[#F20505] group-hover:w-full transition-all duration-700 mt-3 relative z-10 "
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                ></motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
