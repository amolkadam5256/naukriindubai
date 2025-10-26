import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Resumes that can’t be ignored",
    link: "Make your CV stand out to Dubai employers.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-400/20",
    image: "https://images.unsplash.com/photo-1581091870622-1b8c61a9086f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "The right roles for you, always",
    link: "Find jobs that match your skills and goals.",
    color: "from-red-500 to-pink-400",
    bgColor: "bg-gradient-to-br from-red-500/20 to-pink-400/20",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "See jobs that aren’t advertised",
    link: "Access exclusive Dubai listings first.",
    color: "from-yellow-400 to-amber-400",
    bgColor: "bg-gradient-to-br from-yellow-400/20 to-amber-400/20",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "Get more replies & offers",
    link: "Boost visibility and attract top employers.",
    color: "from-purple-500 to-indigo-400",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-indigo-400/20",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Sales Executive – Dubai",
    link: "High-paying sales roles in retail & real estate.",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-400/20",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Digital Marketing – UAE",
    link: "SEO, ads, and content roles in Dubai firms.",
    color: "from-orange-500 to-red-400",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-red-400/20",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "Hospitality Careers",
    link: "Front-office, chef, and event jobs in Dubai.",
    color: "from-teal-500 to-blue-400",
    bgColor: "bg-gradient-to-br from-teal-500/20 to-blue-400/20",
    image: "https://images.unsplash.com/photo-1600891963931-96053a0d0b8a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "Construction & Engineering",
    link: "Foremen and site engineers needed in UAE.",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-gradient-to-br from-violet-500/20 to-purple-400/20",
    image: "https://images.unsplash.com/photo-1581091870622-1b8c61a9086f?auto=format&fit=crop&w=1000&q=80",
  },
];


export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const getCardPosition = (index) => {
    const diff = (index - current + cards.length) % cards.length;
    
    if (diff === 0) return "center";
    if (diff === 1 || diff === 2) return "right";
    if (diff === cards.length - 1 || diff === cards.length - 2) return "left";
    return "hidden";
  };

  const positionStyles = {
    center: {
      x: 0,
      scale: 1,
      rotateY: 0,
      zIndex: 30,
      opacity: 1,
      filter: "blur(0px)",
    },
    left: {
      x: -280,
      scale: 0.85,
      rotateY: 15,
      zIndex: 20,
      opacity: 0.7,
      filter: "blur(2px)",
    },
    right: {
      x: 280,
      scale: 0.85,
      rotateY: -15,
      zIndex: 20,
      opacity: 0.7,
      filter: "blur(2px)",
    },
    hidden: {
      x: 0,
      scale: 0.7,
      opacity: 0,
      zIndex: 10,
      filter: "blur(4px)",
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-center overflow-hidden py-3">
      <div className="z-10 w-full max-w-9xl px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-3"
        >
          The job platform on your side
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
          <p className="ml-2 text-gray-300 text-sm md:text-base">
            Rated "Excellent" based on 18,619 reviews
          </p>
        </motion.div>

        {/* 3D Card Carousel */}
        <div className="relative w-full max-w-6xl mx-auto mb-8">
          <div className="relative flex items-center justify-center h-96 perspective-1000">
            {cards.map((card, index) => {
              const position = getCardPosition(index);
              const isCenter = position === "center";
              
              return (
                <motion.div
                  key={card.id}
                  className={`absolute w-80 h-96  shadow-2xl overflow-hidden backdrop-blur-lg border border-white/20 ${
                    isCenter ? "cursor-pointer" : "cursor-default"
                  }`}
                  initial={positionStyles[position]}
                  animate={positionStyles[position]}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.8
                  }}
                  onClick={() => isCenter && handleNext()}
                >
                  {/* Card Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  
                  {/* Card Background Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-90`} />
                  
                  {/* Card Number */}
                  <div className="absolute top-6 left-6 text-6xl font-bold text-white z-10">
                    {card.id.toString().padStart(2, '0')}
                  </div>

                  {/* Card Content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-8 text-left">
                    <motion.h2 
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: isCenter ? 0.2 : 0 }}
                    >
                      {card.title}
                    </motion.h2>

                    <AnimatePresence>
                      {isCenter && (
                        <motion.div 
                          className="bg-white backdrop-blur-sm  p-4 border border-white/20"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <p className="text-black text-sm font-medium">
                            {card.link}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Shine Effect for Center Card */}
                  {isCenter && (
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 400, opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, delay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12 z-30"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white  p-4 shadow-2xl z-40 backdrop-blur-md border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 text-white  p-4 shadow-2xl z-40 backdrop-blur-md border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3  transition-all duration-300 ${
                  index === current
                    ? "bg-white scale-125"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20  mix-blend-screen filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 mix-blend-screen filter blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 "
          animate={{
            y: [0, -40, 0],
            x: [0, Math.sin(i) * 30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
}