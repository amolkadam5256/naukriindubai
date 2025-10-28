import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rohit Deshmukh",
    company: "HR Executive at Emirates Logistics",
    date: "July 2024",
    image: "images/rohit-deshmukh.jpg",
    stars: 5,
    feedback:
      "Finding my Dubai job through NaukriInDubai was seamless! The support team guided me throughout the visa and interview process. Within a month, I landed my dream job at Emirates Logistics.",
  },
  {
    name: "Ayesha Khan",
    company: "Marketing Associate, Dubai Marina",
    date: "June 2024",
    image: "images/ayesha-khan.jpg",
    stars: 5,
    feedback:
      "As an MBA graduate from India, I wanted to start my career abroad. NaukriInDubai helped me connect with top employers in marketing. Their profile optimization service truly made a difference!",
  },
  {
    name: "Vikas Patil",
    company: "Software Engineer, Dubai Silicon Oasis",
    date: "May 2024",
    image: "images/vikas-patil.jpg",
    stars: 4.5,
    feedback:
      "I never thought getting a software job in Dubai would be so smooth. The process was transparent, and I received genuine offers from verified companies. Highly recommend NaukriInDubai to all IT professionals.",
  },
  {
    name: "Neha Sharma",
    company: "Hospitality Manager, Downtown Dubai",
    date: "April 2024",
    image: "images/neha-sharma.jpg",
    stars: 5,
    feedback:
      "The team at NaukriInDubai gave me complete clarity about job roles, visa procedures, and relocation. I’m now managing a team in a top hospitality brand. Thank you for making it possible!",
  },
  {
    name: "Amit Singh",
    company: "Civil Engineer, Abu Dhabi Projects",
    date: "March 2024",
    image: "images/amit-singh.jpg",
    stars: 5,
    feedback:
      "From resume building to interview preparation, everything was handled so professionally. NaukriInDubai opened doors I didn’t even know existed.",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex mt-2 gap-1 text-[#F2B90C]">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z" />
          </svg>
        ))}
      {halfStar && (
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <defs>
            <linearGradient id="half" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="50%" stopColor="#F2B90C" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049.927l2.093 6.435h6.647L12.9 10.862l2.093 6.435L9.05 13.8l-6.043 3.497L5.1 10.862.21 7.362h6.647L9.05.927z"
          />
        </svg>
      )}
    </div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  return (
    <section className="bg-white text-black max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <span className="text-[#F20505] font-semibold text-sm tracking-wider uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-[#030A8C] mb-6 leading-tight">
            Real Success Stories from{" "}
            <span className="bg-gradient-to-r from-[#F20505] to-[#030A8C] bg-clip-text text-transparent">
              Dubai Job Seekers
            </span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Hear from Indian students and professionals who found rewarding
            careers in Dubai through NaukriInDubai — bridging talent and
            opportunity across borders.
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center lg:justify-start mt-10 gap-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-[#030A8C]  flex items-center justify-center hover:bg-[#030A8C] transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#030A8C] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M20 12H4M10 6L4 12l6 6" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-[#F20505] flex items-center justify-center hover:bg-[#F20505] transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 text-[#F20505] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 12h16M14 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full lg:w-3/5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-gray-50 text-[#262324]  p-8 shadow-md hover:shadow-2xl transition-all duration-500 border-l-4 border-[#030A8C] hover:border-[#F20505]">
                  <div className="flex items-center gap-5 mb-5">
                    <img
                      className=" object-cover w-24 h-24 border-4 border-[#F20505]/20 shadow-md"
                      src={item.image}
                      alt={item.name}
                    />
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#030A8C]">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1 text-left">
                    <p className="text-sm sm:text-base font-medium text-[#030A8C]">
                      {item.company}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F20505] italic">
                      {item.date}
                    </p>
                    {renderStars(item.stars)}
                    <p className="mt-3 text-base italic text-gray-700">
                      “{item.feedback}”
                    </p>
                  </div>

                  {/* Decorative gradient bar */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#030A8C] to-[#F20505] "></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
