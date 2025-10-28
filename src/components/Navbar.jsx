import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaChevronDown, FaChevronUp, FaPhone, FaTimes, FaFileDownload, FaChartLine, FaSearch, FaUserPlus, FaInstagram, FaFacebook } from "react-icons/fa";
import Images from '../assets/images/images'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef(null);
    const location = useLocation();

    // Close menus on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        {
            name: "Services",
            path: "/services",
            dropdown: [
                {
                    name: "Career Essentials",
                    path: "/services/career-essentials",
                    // Includes: Resume Review, Cover Letter Help, LinkedIn Profile Optimization, Profile Branding Consultation
                },
                {
                    name: "Interview & Placement",
                    path: "/services/interview-placement",
                    // Includes: Interview Coaching, Dubai Job Placement, Headhunter Access, Employer Connections
                },
                {
                    name: "Career Counseling & Consultation",
                    path: "/services/career-consultation",
                    // Includes: One-on-One Career Counseling, Gulf Market Orientation, Career Growth Strategy, Student Consultation
                },
                {
                    name: "Skill Development & Internship",
                    path: "/services/skill-internship",
                    // Includes: Skill Development Programs, Internship Assistance, Upskilling Workshops, Certification Guidance
                },
                {
                    name: "Visa, Relocation & Work Setup",
                    path: "/services/visa-relocation",
                    // Includes: Visa Process Support, Relocation Consultation, Dubai Work Setup Guidance, Accommodation & Documentation Help
                },
            ],
        },

        { name: "How It Works", path: "/how-it-works" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
    ];

    const socialLinks = [
        {
            icon: <FaLinkedinIn />,
            url: "https://www.linkedin.com/company/naukriindubai",
            name: "LinkedIn"
        },
        {
            icon: <FaInstagram />,
            url: "https://instagram.com/naukriindubai",
            name: "Instagram"
        },
        {
            icon: <FaFacebook />,
            url: "https://facebook.com/naukriindubai",
            name: "Facebook"
        },
        {
            icon: <FaEnvelope />,
            url: "mailto:info@naukriindubai.com",
            name: "Email"
        },
    ];

    // Check if current path is active
    const isActivePath = (path) => {
        if (path === "/") {
            return location.pathname === "/";
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav ref={navbarRef} className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg border-b border-gray-200" : "bg-white border-b border-gray-100"}`}>
            <div className="w-full flex items-center justify-between px-4 py-0 md:px-6 md:py-0">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <motion.div
                        className="flex flex-col"
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="flex items-center space-x-3">
                            {/* Logo Image */}
                            <img
                                src={Images.logo}
                                alt="Naukri in Dubai Logo"
                                className="h-20  md:h-20 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        </div>
                    </motion.div>
                </Link>

                {/* Hamburger */}
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-full h-10 justify-end text-gray-800 md:hidden focus:outline-none"
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="flex flex-col space-y-1">
                        <span className={`w-6 h-0.5 bg-[#030A8C] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                        <span className={`w-6 h-0.5 bg-[#030A8C] transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`w-6 h-0.5 bg-[#030A8C] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                    </div>
                </motion.button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 font-medium">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative group">
                            {!item.dropdown ? (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `relative px-4 py-2 transition-all duration-300 ${isActive ? "text-white font-bold bg-[#030A8C]" : "text-gray-700 hover:text-[#F20505] hover:bg-gray-50"}`}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {item.name}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F20505]"
                                                    layoutId="navbar-indicator"
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>
                            ) : (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`flex items-center px-4 py-2 transition-all ${isActivePath(item.path) ? "text-white font-bold bg-[#030A8C]" : "text-gray-700 hover:text-[#F20505] hover:bg-gray-50"}`}
                                    >
                                        {item.name}
                                        <motion.span
                                            animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                            className="ml-1"
                                        >
                                            {isServicesOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                                        </motion.span>
                                    </Link>
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute left-0 top-full mt-1 w-64 bg-white shadow-2xl overflow-hidden z-50 border border-gray-200"
                                            >
                                                <div className="bg-[#030A8C] px-4 py-2 flex items-center space-x-2">
                                                    <FaChartLine className="text-white text-sm" />
                                                    <span className="text-white font-semibold text-sm">CAREER SERVICES</span>
                                                </div>
                                                {item.dropdown.map((drop, idx) => (
                                                    <li key={idx}>
                                                        <NavLink
                                                            to={drop.path}
                                                            className={({ isActive }) => `block py-3 px-4 transition-all duration-300 border-b border-gray-100 last:border-b-0 group ${isActive ? "bg-[#030A8C] text-white" : "text-gray-700 hover:bg-[#F20505] hover:text-white"}`}
                                                        >
                                                            {({ isActive: isDropActive }) => (
                                                                <div className="flex items-center space-x-2">
                                                                    <div className={`w-1 h-4 ${isDropActive ? "bg-white" : "bg-transparent group-hover:bg-white"}`}></div>
                                                                    <span>{drop.name}</span>
                                                                </div>
                                                            )}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/DubaiJobApplicationForm"
                            className="flex items-center justify-center bg-white text-[#030A8C] px-6 py-3 font-bold text-sm border border-[#030A8C] shadow-lg 
               transition-all duration-300 hover:bg-[#F20505] hover:border-[#F20505]  hover:text-white hover:shadow-2xl group"
                        >
                            <FaSearch className="mr-2 transition-transform duration-300 group-hover:scale-125" />
                            REGISTER NOW
                        </Link>
                    </motion.div>


                    {/* <motion.a
                        href="/register"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center bg-[#F20505] text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-sm border border-[#F20505] hover:bg-[#030A8C] hover:border-[#030A8C] group"
                    >
                        <FaUserPlus className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                        SEARCH JOBS
                    </motion.a> */}

                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-0 bg-white z-50 pt-4 px-6 pb-5 md:hidden overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                <Link to="/" onClick={() => setIsOpen(false)}>
                                    <div className="flex items-center space-x-3">
                                        {/* Logo Image */}
                                        <div className="flex items-center justify-center">
                                            <img
                                                src="/logo.png"
                                                alt="Naukri in Dubai Logo"
                                                className="h-18 object-contain"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />

                                        </div>
                                    </div>
                                </Link>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 bg-gray-100 hover:bg-gray-200 transition"
                                >
                                    <FaTimes className="text-gray-700" />
                                </motion.button>
                            </div>

                            {/* Menu Items */}
                            <motion.ul
                                className="space-y-0 mt-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {menuItems.map((item, index) => (
                                    <li key={index} className="border-b border-gray-100 last:border-b-0">
                                        {!item.dropdown ? (
                                            <NavLink
                                                to={item.path}
                                                onClick={() => setIsOpen(false)}
                                                className={({ isActive }) =>
                                                    `block py-4 px-2 text-lg font-medium transition-all duration-300 ${isActive ? "text-white bg-[#030A8C] font-bold border-l-4 border-[#F20505]" : "text-gray-700 hover:text-white hover:bg-[#F20505] border-l-4 border-transparent"
                                                    }`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        ) : (
                                            <div className="border-l-4 border-transparent">
                                                <button
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    className={`flex items-center justify-between w-full text-lg font-medium px-2 py-4 ${isActivePath(item.path) ? "text-white bg-[#030A8C] font-bold border-l-4 border-[#F20505]" : "text-gray-700 hover:text-white hover:bg-[#F20505] border-l-4 border-transparent"
                                                        }`}
                                                >
                                                    {item.name}
                                                    {isServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                                                </button>
                                                <AnimatePresence>
                                                    {isServicesOpen && (
                                                        <motion.ul
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="bg-gray-50 overflow-hidden"
                                                        >
                                                            {item.dropdown.map((drop, idx) => (
                                                                <li key={idx}>
                                                                    <NavLink
                                                                        to={drop.path}
                                                                        onClick={() => {
                                                                            setIsOpen(false);
                                                                            setIsServicesOpen(false);
                                                                        }}
                                                                        className={({ isActive }) =>
                                                                            `block py-3 px-6 transition-all duration-300 border-l-4 ${isActive ? "text-white bg-[#030A8C] font-bold border-[#F20505]" : "text-gray-700 hover:text-white hover:bg-[#F20505] border-transparent"
                                                                            }`
                                                                        }
                                                                    >
                                                                        {drop.name}
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </motion.ul>

                            {/* Mobile Actions */}
                            <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                                <Link
                                    to="/DubaiJobApplicationForm"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center bg-white text-[#030A8C] px-6 py-4 shadow-lg font-bold text-lg border border-[#030A8C] w-full"
                                >
                                    <FaSearch className="mr-3 text-lg" />
                                    REGISTER NOW
                                </Link>

                                {/* <motion.a
                                    href="/register"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center bg-[#F20505] text-white px-6 py-4 shadow-lg font-bold text-lg border border-[#F20505] w-full"
                                >
                                    <FaUserPlus className="mr-3 text-lg" />
                                    SEARCH JOBS
                                </motion.a> */}

                                {/* <motion.a
                                    href="/login"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center bg-[#030A8C] text-white px-6 py-4 shadow-lg font-bold text-lg border border-[#030A8C] w-full"
                                >
                                    LOGIN TO ACCOUNT
                                </motion.a> */}

                                {/* Social Links */}
                                <div className="flex justify-center space-x-3 mt-6">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-gray-100 hover:bg-[#030A8C] text-[#030A8C] hover:text-white transition-colors duration-300 flex items-center justify-center border border-gray-300"
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="text-center mt-4 space-y-2">
                                    <a
                                        href="mailto:info@naukriindubai.com"
                                        className="text-[#030A8C] hover:text-[#F20505] font-bold transition-colors duration-300 text-sm block"
                                    >
                                        info@naukriindubai.com
                                    </a>
                                    <p className="text-gray-600 text-xs">
                                        © Naukri in Dubai 2025 — All rights reserved
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;