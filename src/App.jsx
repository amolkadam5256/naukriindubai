// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import InquiryForm from './components/InquiryForm';
import DubaiJobApplicationForm from './components/DubaiJobApplicationForm';

// Import all service subpages
import CareerEssentials from './pages/ServicesPages/Career_essentials';
import InterviewPlacement from './pages/ServicesPages/Interview_placement';
import CareerConsultation from './pages/ServicesPages/Career_consultation';
import SkillInternship from './pages/ServicesPages/Skill_internship';
import VisaRelocation from './pages/ServicesPages/Visa_relocation';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Global Components */}
        <InquiryForm />
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/DubaiJobApplicationForm" element={<DubaiJobApplicationForm />} />

          {/* Service Subpages */}
          <Route path="/services/career-essentials" element={<CareerEssentials />} />
          <Route path="/services/interview-placement" element={<InterviewPlacement />} />
          <Route path="/services/career-consultation" element={<CareerConsultation />} />
          <Route path="/services/skill-internship" element={<SkillInternship />} />
          <Route path="/services/visa-relocation" element={<VisaRelocation />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
