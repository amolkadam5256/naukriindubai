import React, { useState } from 'react';
import Images from '../../assets/images/images';

const JobLeads = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;

    const advantages = [
        [
            {
                number: "Advantage 01",
                title: "Every job. One platform.",
                description:
                    "No more jumping between sites. See every relevant job in one place—and get notified instantly when new opportunities appear.",
                image: Images.job_hunt,
            },
            {
                number: "Advantage 02",
                title: "Win more interviews",
                description:
                "Craft a standout resume in ten minutes—ATS-proof, tailored, AI-powered guidance, zero stress.",
                image: Images.interview,
            },
            {
                number: "Advantage 03",
                title: "Your shortcut to unlisted jobs",
                description:
                "We match you with headhunters and recruiters who open doors to hidden, higher paying roles.",
                image: Images.unlisted_jobs,
            },
            {
                number: "Advantage 04",
                title: "Cover letters that get noticed",
                description:
                "Let us craft the perfect, tailored letter for every application.",
                image: Images.letters_cover,
            },
        ],
        [
            {
                number: "Advantage 05",
                title: "Learn, apply, get hired.",
                description:
                "Get instant access to MasterClasses, guides, and professional templates.",
                image: Images.hired,
            },
            {
                number: "Advantage 06",
                title: "Guided every step of the way",
                description:
                "Wherever you are in your journey, our JL Assistant will give you tailored advice always one click away.",
                image: Images.Guided,
            },
            {
                number: "Advantage 07",
                title: "Interview preparation",
                description:
                "Practice with mock interviews and get feedback to improve your performance.",
                image: Images.preparation,
            },
            {
                number: "Advantage 08",
                title: "Salary negotiation",
                description:
                "Get expert advice on negotiating your salary to maximize your earning potential.",
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
        <div className="min-h-screen bg-white text-black">

            {/* Carousel Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">

                    {/* Title and Navigation in one line */}
                    <div className="flex justify-between items-center mb-8">
                        {/* Title Section */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Power in your hands
                            </h1>
                            <p className="text-lg md:text-xl text-gray-700 max-w-2xl  mb-8">
                                We have everything you need to land your next role.
                            </p>
                        </div>

                        {/* Navigation Section */}
                        <div className="flex items-center space-x-4">

                            {/* Navigation Arrows */}
                            <div className="flex space-x-2">
                                <button
                                    onClick={prevSlide}
                                    className="w-10 h-10 bg-[#030A8C] text-white  flex items-center justify-center hover:bg-[#F20505] transition-colors duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-10 h-10 bg-[#030A8C] text-white  flex items-center justify-center hover:bg-[#F20505] transition-colors duration-300"
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
                                                className="bg-white  shadow-lg p-6 border-t-4 border-[#F20505] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                            >
                                                {/* Content Section */}
                                                <div className="flex-1">
                                                    <div className="text-sm font-semibold text-[#030A8C] mb-2">
                                                        {advantage.number}
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

export default JobLeads;