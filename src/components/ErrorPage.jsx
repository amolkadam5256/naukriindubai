import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800 px-6 overflow-hidden py-30">
      

      {/* Logo / Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 relative z-10"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#030A8C] to-[#F20505] bg-clip-text text-transparent">
          Naukri in Dubai
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Your trusted partner for verified job opportunities in Dubai
        </p>
      </motion.div>

      {/* 404 Number */}
      <motion.h1
        className="text-[8rem] font-extrabold leading-none bg-gradient-to-r from-[#030A8C] via-[#F20505] to-[#030A8C] bg-clip-text text-transparent mb-4 relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.h2
        className="text-2xl font-semibold mb-2 text-gray-800 text-center relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-gray-600 text-base max-w-md text-center mb-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Oops! The career opportunity you're looking for doesn’t exist or may have been moved. Let’s get you back on track.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#030A8C] to-[#F20505] text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 shadow-md hover:shadow-[#F20505]/40 transition-all"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.a>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-50 transition-all"
        >
          <span>Get Help</span>
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
}
