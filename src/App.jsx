// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import InquiryForm from './components/InquiryForm';
import DubaiJobApplicationForm from './components/DubaiJobApplicationForm';

function App() {
  return (
    <Router>
      <div className="App">
        <InquiryForm />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DubaiJobApplicationForm" element={<DubaiJobApplicationForm />} />
          {/* <Route path="/services" element={<Services />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;