import React, { useState } from 'react';
import Images from '../../assets/images/images';

const WhyNaukriindubai = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;

    const advantages = [
        [
            {
                number: "Advantage 01",
                title: "Tailored Job Matches",
                description:
                    "Stop sifting through irrelevant openings. We understand your skills, experience, and career goals to bring you only the most suitable opportunities.",
                image: Images.job_hunt,
            },
            {
                number: "Advantage 02",
                title: "Boost Your Response Rate",
                description:
                    "Our insights on what recruiters are looking for help you craft resumes and cover letters that pass screening software and grab hiring managers’ attention.",
                image: Images.interview,
            },
            {
                number: "Advantage 03",
                title: "Access Hidden Opportunities",
                description:
                    "Many top roles are never advertised. Our platform connects you directly with headhunters, giving you exclusive access to positions others won’t see.",
                image: Images.unlisted_jobs,
            },
            {
                number: "Advantage 04",
                title: "Stand Out in Interviews",
                description:
                    "We provide interview coaching and actionable tips so you can confidently impress recruiters and secure the roles you aspire to.",
                image: Images.letters_cover,
            },
        ],
        [
            {
                number: "Advantage 05",
                title: "Master Your Career Journey",
                description:
                    "Gain access to expert-led MasterClasses, guides, and professional templates that accelerate your growth and job search success.",
                image: Images.hired,
            },
            {
                number: "Advantage 06",
                title: "Guided Support at Every Step",
                description:
                    "Our AI-powered JL Assistant provides personalized advice at every stage of your career journey, keeping you on track toward your goals.",
                image: Images.Guided,
            },
            {
                number: "Advantage 07",
                title: "Interview Readiness",
                description:
                    "Practice mock interviews, receive constructive feedback, and refine your answers to confidently excel in every conversation with recruiters.",
                image: Images.preparation,
            },
            {
                number: "Advantage 08",
                title: "Maximize Your Compensation",
                description:
                    "Learn proven strategies for salary negotiation to secure competitive packages that reflect your true value.",
                image: Images.Salary,
            },
        ],
    ];



    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="bg-white text-black">

            {/* Carousel Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">

                    {/* Title and Navigation in one line */}
                    <div className="flex justify-between items-center mb-8">
                        {/* Title Section */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Why naukriindubai?
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
                                We don't just build resumes. We're your guide to succeeding in your job hunt. With true personalization, access to headhunters, interview coaching, and more, we're the job platform on your side.
                            </p>
                        </div>

                        {/* Navigation Section */}
                        <div className="flex items-center space-x-4">

                            {/* Navigation Arrows */}
                            <div className="flex space-x-2">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 bg-[#030A8C] text-white flex items-center justify-center hover:bg-[#F20505] transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 bg-[#030A8C] text-white flex items-center justify-center hover:bg-[#F20505] transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative overflow-hidden max-w-6xl mx-auto">
                        {/* Carousel */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {advantages.map((slide, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="w-full flex-shrink-0"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                                        {slide.map((advantage, index) => (
                                            <div
                                                key={index}
                                                className="bg-white shadow-lg p-6 border-t-4 border-[#F20505] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                            >
                                                {/* Content Section */}
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold text-[#030A8C] mb-2">
                                                        naukriindubai Reason
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-3">
                                                        {advantage.title}
                                                    </h3>
                                                    <p className="text-gray-700">
                                                        {advantage.description}
                                                    </p>
                                                </div>

                                                {/* Image Section */}
                                                <div className="my-2 flex justify-center">
                                                    <img
                                                        src={advantage.image}
                                                        alt={advantage.title}
                                                        className="w-40 h-40 object-contain"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyNaukriindubai;