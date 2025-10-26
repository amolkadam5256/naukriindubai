import { motion } from "framer-motion";

export default function CandidateFirst() {
    const features = [
        {
            title: "Personalized Job Matching",
            description: "We find opportunities that match your unique skills and career goals"
        },
        {
            title: "Always On Your Side",
            description: "You're our customer, not companies. We prioritize your success"
        },
        {
            title: "Create Opportunities",
            description: "Don't wait for chances - we help you create them proactively"
        }
    ];

    return (
        <section className="relative bg-white py-12 md:py-20 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-3 py-1 md:px-4 md:py-2 bg-[#030A8C] text-white text-xs md:text-sm font-semibold mb-3 md:mb-4 border border-[#030A8C]"
                            >
                                Candidate First Approach

                            </motion.span>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6"
                            >
                                Take control of your{" "}
                                <span className="text-[#F20505]">
                                    career journey
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed"
                            >
                                Our platform is designed with you in mind. We prioritize your needs and aspirations to help you find the right opportunities and advance your career on your terms.
                            </motion.p>
                        </div>

                        {/* Features List - Text Only */}
                        <div className="space-y-4 md:space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="border-l-4 border-[#F20505] pl-4 md:pl-6 py-1 md:py-2"
                                >
                                    <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Trust Statement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="bg-gray-50 p-4 md:p-6 border-l-4 border-[#030A8C]"
                        >
                            <p className="text-base md:text-lg text-gray-800 italic">
                                "You're our customer. Not companies or recruiters. That's how we can be on your side. Don't wait for opportunities. With us, you'll create them."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Career Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative overflow-hidden shadow-xl md:shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                                alt="Professional taking control of their career"
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-4 md:p-8 text-white">
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Your Career Journey</h3>
                                    <p className="text-sm md:text-base text-gray-200 mb-3 md:mb-4">
                                        From first steps to leadership roles - we're with you every step of the way
                                    </p>
                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm">
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-[#F20505]"></div>
                                            <span>Personalized Path</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-2 h-2 bg-[#030A8C]"></div>
                                            <span>Career Growth</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#030A8C] text-white shadow-xl p-4 md:p-6 border border-[#030A8C] max-w-[180px] md:max-w-xs"
                        >
                            <div className="text-xl md:text-3xl font-bold mb-1 md:mb-2">4.5★</div>
                            <div className="text-sm md:text-lg font-semibold mb-1">App Store</div>
                            <div className="text-xs md:text-sm text-blue-100">Based on 10,000+ reviews</div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Trust Indicators - Updated Responsive Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-12 md:mt-20"
                >
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                            Trusted by Thousands
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            Join thousands of professionals who have transformed their careers with our platform
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Trustpilot */}
                        <motion.a
                            href="https://www.trustpilot.com/review/yourcompany.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="block text-center p-3 md:p-4 border border-gray-200  hover:border-[#F20505] hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="text-lg md:text-2xl font-bold text-[#030A8C] mb-1">4.5/5</div>
                            <div className="flex items-center justify-center mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-3 h-3 md:w-4 md:h-4 ${i < 4 ? "text-[#00B67A] fill-current" : "text-gray-300"}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-gray-800 mb-1">Trustpilot</div>
                            <div className="text-xs text-gray-500">18,619 reviews</div>
                        </motion.a>

                        {/* Google Reviews */}
                        <motion.a
                            href="https://g.page/yourcompany/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="block text-center p-3 md:p-4 border border-gray-200  hover:border-[#F20505] hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="text-lg md:text-2xl font-bold text-[#030A8C] mb-1">4.7</div>
                            <div className="flex items-center justify-center mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-3 h-3 md:w-4 md:h-4 ${i < 4 ? "text-[#FBBC05] fill-current" : "text-gray-300"}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-gray-800 mb-1">Google</div>
                            <div className="text-xs text-gray-500">1,499 reviews</div>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/company/yourcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="block text-center p-3 md:p-4 border border-gray-200  hover:border-[#F20505] hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="text-lg md:text-2xl font-bold text-[#030A8C] mb-1">400k+</div>
                            <div className="flex items-center justify-center mb-2">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-gray-800 mb-1">LinkedIn</div>
                            <div className="text-xs text-gray-500">400k+ Followers</div>
                        </motion.a>

                        {/* App Store */}
                        <motion.a
                            href="https://apps.apple.com/app/your-app/id"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="block text-center p-3 md:p-4 border border-gray-200 hover:border-[#F20505] hover:shadow-md transition-all duration-300 bg-white"
                        >
                            <div className="text-lg md:text-2xl font-bold text-[#030A8C] mb-1">4.5</div>
                            <div className="flex items-center justify-center mb-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-3 h-3 md:w-4 md:h-4 ${i < 4 ? "text-black fill-current" : "text-gray-300"}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-gray-800 mb-1">App Store</div>
                            <div className="text-xs text-gray-500">10,000+ reviews</div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Minimal decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        opacity: [0.1, 0.05, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 border border-[#F20505] opacity-10"
                />
                <motion.div
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    className="absolute bottom-1/4 left-1/4 w-24 h-24 md:w-48 md:h-48 border border-[#F20505] opacity-10"
                />
            </div>
        </section>
    );
}