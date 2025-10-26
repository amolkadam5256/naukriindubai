import React from 'react';

const DubaiCompanies = () => {
    const dubaiCompanies = [
        // MNC Companies
        { 
            name: "Emirates", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/320px-Emirates_logo.svg.png",
            type: "mnc" 
        },
        { 
            name: "DP World", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/DP_World_logo.svg/320px-DP_World_logo.svg.png",
            type: "mnc" 
        },
        { 
            name: "Emaar", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Emaar_Properties_Logo.svg/320px-Emaar_Properties_Logo.svg.png",
            type: "mnc" 
        },
        { 
            name: "Dubai Islamic Bank", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Dubai_Islamic_Bank_logo.svg/320px-Dubai_Islamic_Bank_logo.svg.png",
            type: "finance" 
        },
        { 
            name: "Jumeirah Group", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jumeirah_Group_logo.svg/320px-Jumeirah_Group_logo.svg.png",
            type: "hospitality" 
        },
        { 
            name: "Al Futtaim", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Al_Futtaim_Logo.svg/320px-Al_Futtaim_Logo.svg.png",
            type: "mnc" 
        },
        { 
            name: "Careem", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Careem_logo.svg/320px-Careem_logo.svg.png",
            type: "tech" 
        },
        { 
            name: "Emirates NBD", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Emirates_NBD_Logo.svg/320px-Emirates_NBD_Logo.svg.png",
            type: "finance" 
        },
        
        // Retail & Hospitality
        { 
            name: "Majid Al Futtaim", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Majid_Al_Futtaim_Logo.svg/320px-Majid_Al_Futtaim_Logo.svg.png",
            type: "retail" 
        },
        { 
            name: "Landmark Group", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Landmark_Group_logo.svg/320px-Landmark_Group_logo.svg.png",
            type: "retail" 
        },
        { 
            name: "Dubai Holdings", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dubai_Holdings_logo.svg/320px-Dubai_Holdings_logo.svg.png",
            type: "mnc" 
        },
        { 
            name: "Rotana Hotels", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Rotana_Hotels_logo.svg/320px-Rotana_Hotels_logo.svg.png",
            type: "hospitality" 
        },
        
        // Tech Companies
        { 
            name: "Souq (Amazon)", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png",
            type: "tech" 
        },
        { 
            name: "Bayut", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bayut.com_logo.svg/320px-Bayut.com_logo.svg.png",
            type: "tech" 
        },
        { 
            name: "Property Finder", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Property_Finder_logo.svg/320px-Property_Finder_logo.svg.png",
            type: "tech" 
        },
        
        // Healthcare
        { 
            name: "American Hospital", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/American_Hospital_Dubai_logo.svg/320px-American_Hospital_Dubai_logo.svg.png",
            type: "healthcare" 
        },
        { 
            name: "Medcare Hospital", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Medcare_logo.svg/320px-Medcare_logo.svg.png",
            type: "healthcare" 
        },
        
        // Construction & Real Estate
        { 
            name: "Nakheel", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nakheel_logo.svg/320px-Nakheel_logo.svg.png",
            type: "construction" 
        },
        { 
            name: "Damac", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DAMAC_Properties_logo.svg/320px-DAMAC_Properties_logo.svg.png",
            type: "construction" 
        },
        
        // Education
        { 
            name: "GEMS Education", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/GEMS_Education_logo.svg/320px-GEMS_Education_logo.svg.png",
            type: "education" 
        },
        
        // Logistics
        { 
            name: "Aramex", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Aramex_logo.svg/320px-Aramex_logo.svg.png",
            type: "logistics" 
        },
        { 
            name: "DHL", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/DHL_Logo_2017.svg/320px-DHL_Logo_2017.svg.png",
            type: "logistics" 
        },
        { 
            name: "FedEx", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/FedEx_Logo.svg/320px-FedEx_Logo.svg.png",
            type: "logistics" 
        },
        
        // Small & Medium Businesses
        { 
            name: "Lulu Hypermarket", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Lulu_Hypermarket_Logo.svg/320px-Lulu_Hypermarket_Logo.svg.png",
            type: "retail" 
        },
        { 
            name: "Choithrams", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Choithrams_logo.svg/320px-Choithrams_logo.svg.png",
            type: "retail" 
        },
        { 
            name: "Al Tayer Group", 
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Al_Tayer_Group_Logo.svg/320px-Al_Tayer_Group_Logo.svg.png",
            type: "retail" 
        }
    ];

    // Duplicate the array to create seamless loop
    const duplicatedCompanies = [...dubaiCompanies, ...dubaiCompanies];

    return (
        <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-sm font-medium text-gray-700">Trusted by 500+ Companies</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        Placing Talent at{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                            Dubai's Best
                        </span>
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        Connecting exceptional professionals with Dubai's most innovative companies, 
                        from global enterprises to growing startups
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative mb-16 overflow-hidden">
                    
                    {/* Second Marquee - Bottom Row (Reverse) */}
                    <div className="flex">
                        <div className="flex animate-marquee-reverse whitespace-nowrap">
                            {duplicatedCompanies.slice(15).map((company, index) => (
                                <div
                                    key={`bottom-${index}`}
                                    className="group mx-4 flex-shrink-0 w-48"
                                >
                                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-200/50 flex flex-col items-center h-full">
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-teal-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        
                                        <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 p-2">
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className="w-full h-full object-contain transition-all duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'block';
                                                }}
                                            />
                                            {/* <div className="hidden text-xl font-bold text-gray-600">
                                                {company.name.charAt(0)}
                                            </div> */}
                                        </div>
                                        
                                        <h3 className="relative z-10 text-sm font-semibold text-gray-900 text-center leading-tight mb-2 group-hover:text-gray-800 transition-colors duration-300">
                                            {company.name}
                                        </h3>
                                        
                                        <div className={`relative z-10 mt-auto px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                                            company.type === 'mnc' ? 'bg-blue-500/10 text-blue-700 border-blue-200' :
                                            company.type === 'tech' ? 'bg-purple-500/10 text-purple-700 border-purple-200' :
                                            company.type === 'finance' ? 'bg-green-500/10 text-green-700 border-green-200' :
                                            company.type === 'retail' ? 'bg-orange-500/10 text-orange-700 border-orange-200' :
                                            company.type === 'healthcare' ? 'bg-red-500/10 text-red-700 border-red-200' :
                                            company.type === 'education' ? 'bg-indigo-500/10 text-indigo-700 border-indigo-200' :
                                            company.type === 'logistics' ? 'bg-yellow-500/10 text-yellow-700 border-yellow-200' :
                                            company.type === 'hospitality' ? 'bg-pink-500/10 text-pink-700 border-pink-200' :
                                            'bg-gray-500/10 text-gray-700 border-gray-200'
                                        } group-hover:scale-105 transition-transform duration-300`}>
                                            {company.type.charAt(0).toUpperCase() + company.type.slice(1)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for Marquee Animation */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                @keyframes marquee-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse 60s linear infinite;
                }
                .animate-marquee:hover,
                .animate-marquee-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default DubaiCompanies;