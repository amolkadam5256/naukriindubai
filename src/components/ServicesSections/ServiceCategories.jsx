import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Globe2, Users2, Rocket, ClipboardList } from "lucide-react";

export default function ServiceCategories() {
  const services = [
    {
      name: "Career Essentials",
      path: "/services/career-essentials",
      description:
        "Build your professional foundation with powerful resumes, cover letters, and LinkedIn profiles that get noticed.",
      icon: <ClipboardList className="w-8 h-8 text-[#030A8C]" />,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Interview & Placement",
      path: "/services/interview-placement",
      description:
        "Get expert coaching, access to Dubai placements, and direct connections with employers who are hiring now.",
      icon: <Briefcase className="w-8 h-8 text-[#F20505]" />,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Career Counseling & Consultation",
      path: "/services/career-consultation",
      description:
        "Personalized one-on-one career guidance, Gulf market orientation, and strategic career growth planning.",
      icon: <Users2 className="w-8 h-8 text-[#030A8C]" />,
      image:
        "https://images.unsplash.com/photo-1600880292089-90e3aaf82b0f?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Skill Development & Internship",
      path: "/services/skill-internship",
      description:
        "Upskill with curated workshops, hands-on internships, and certification programs for global career readiness.",
      icon: <Rocket className="w-8 h-8 text-[#F20505]" />,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Visa, Relocation & Work Setup",
      path: "/services/visa-relocation",
      description:
        "Smooth transition to Dubai with complete visa guidance, relocation support, and job setup consultation.",
      icon: <Globe2 className="w-8 h-8 text-[#030A8C]" />,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#030A8C]"
          >
            Our <span className="text-[#F20505]">Service Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto text-base"
          >
            Explore all our tailored solutions designed to help professionals
            and students achieve career excellence and global opportunities.
          </motion.p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative  overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Link to={service.path}>
                {/* Background Image */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white rounded-full p-2">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-[#F20505] transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-200 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
