import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, LifeBuoy } from "lucide-react";

export default function ContactInfoSection() {
  const contactDetails = [
    {
      icon: <Phone className="w-6 h-6 text-[#030A8C]" />,
      title: "Call / WhatsApp",
      value: "+971 50 576 1914",
      link: "https://wa.me/971505761914?text=Hi%20Team,%20I%20want%20to%20know%20about%20Dubai%20career%20opportunities.",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#030A8C]" />,
      title: "Email Us",
      value: "info@naukriindubai.com",
      link: "mailto:info@naukriindubai.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#030A8C]" />,
      title: "Office Address",
      value: "Al Owais Building, Sheikh Zayed Road, Dubai, UAE",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#030A8C]" />,
      title: "Business Hours",
      value: "Mon – Sat: 10 AM – 7 PM",
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-[#030A8C]" />,
      title: "Support Email",
      value: "info@naukriindubai.com",
      link: "mailto:info@naukriindubai.com",
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6">

        {/* ===== LEFT SIDE MAP ===== */}
        <motion.div
          className="relative h-[420px] lg:h-[520px] overflow-hidden  shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Naukri in Dubai Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.849606915825!2d55.26714157540314!3d25.21504467768895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433e4b5c92e5%3A0xe8c78e132db9ff88!2sAl%20Owais%20Building%2C%20Sheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1730200000000!5m2!1sen!2sae"
            className="w-full h-full  border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <motion.div
            className="absolute bottom-5 left-5 bg-white/90 text-[#030A8C] px-5 py-3  shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-semibold">Visit Us at Al Owais Building</p>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT SIDE CONTACT INFO ===== */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#030A8C]">
            Get in Touch With Us
          </h2>
          <p className="text-gray-700 max-w-lg">
            Whether you’re seeking visa assistance, relocation guidance, or
            career consultation — our team is here to help you every step of the way.
            Reach us anytime through your preferred channel.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200  p-5 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#030A8C]/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#030A8C] font-semibold text-base mb-1">
                    {item.title}
                  </h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#F20505] text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
