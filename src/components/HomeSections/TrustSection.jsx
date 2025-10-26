import React, { useState, useEffect, useRef } from 'react';

const TrustSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            id: 1,
            value: 70,
            suffix: 'm+',
            title: 'Resumes reviewed',
            duration: 2000,
            delay: 100
        },
        {
            id: 2,
            value: 13,
            suffix: 'm+',
            title: 'Resumes created',
            duration: 1800,
            delay: 300
        },
        {
            id: 3,
            value: 12,
            suffix: 'm+',
            title: 'Job offers',
            duration: 2200,
            delay: 500
        },
        {
            id: 4,
            value: 12,
            suffix: 'm+',
            title: 'Users worldwide',
            duration: 2500,
            delay: 700
        }
    ];

    const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const intervals = stats.map((stat, index) => {
            const startTime = Date.now();
            const duration = stat.duration;
            const startValue = 0;
            const endValue = stat.value;

            const updateValue = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + easeOutQuart * (endValue - startValue));

                setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = currentValue;
                    return newValues;
                });

                if (progress < 1) {
                    requestAnimationFrame(updateValue);
                }
            };

            // Start animation with delay
            return setTimeout(updateValue, stat.delay);
        });

        return () => intervals.forEach(interval => clearTimeout(interval));
    }, [isVisible]);

    return (
        <div ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                        Why Job Seekers{' '}
                        <span className="bg-gradient-to-r from-[#030A8C] to-[#F20505] bg-clip-text text-transparent">
                            Trust Us
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join millions of successful job seekers who transformed their careers with our platform
                    </p>
                </div>

                {/* Stats Grid - Simplified */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="group relative text-center"
                        >
                            {/* Title as Button */}
                            <div className="mb-6">
                                <button className="px-6 py-3 bg-[#F20505] text-white font-semibold  hover:bg-[#030A8C] transition-colors duration-300 shadow-md hover:shadow-lg">
                                    {stat.title}
                                </button>
                            </div>

                            {/* Value and Suffix */}
                            <div className="flex items-center justify-center space-x-1">
                                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    {animatedValues[index]}
                                </span>
                                <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    {stat.suffix}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustSection;