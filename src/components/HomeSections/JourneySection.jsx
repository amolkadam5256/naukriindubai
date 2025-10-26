import React from 'react';
import Images from '../../assets/images/images';

const JourneySection = () => {
  const steps = [
    {
      number: "01",
      title: "REGISTER NOW for free",
      description: "REGISTER NOW for free with your email and submit your information.",
      image: Images.register_now
    },
    {
      number: "02",
      title: "Getting to know you",
      description: "We'll ask personalized questions to understand your career goals and preferences.",
      image: Images.getting
    },
    {
      number: "03",
      title: "Building your resume",
      description: "Create an ATS-friendly resume or enhance your existing one with AI-powered tools.",
      image: Images.resume
    },
    {
      number: "04",
      title: "Discover opportunities",
      description: "Find perfect job matches with our intelligent search and recommendation system.",
      image: Images.opportunities
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Your <span className="text-[#F20505]">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start your path to career success with our simple, guided process designed to get you hired faster
          </p>
        </div>

        {/* Journey Steps - 4 in line on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Main Card */}
              <div className="bg-white  shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#F20505] overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-48  flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-black opacity-10"></div>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-45 h-45 object-contain group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white  flex items-center justify-center shadow-lg">
                    <span className="text-[#030A8C] font-bold text-lg">{step.number}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#F20505] transition-colors duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                    {step.description}
                  </p>

                </div>
              </div>

              {/* Connecting Arrow for Desktop */}
              {index < steps.length - 1 && (
                <>
                  {/* Horizontal arrow for lg screens */}
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-[#F20505]  flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>


                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneySection;