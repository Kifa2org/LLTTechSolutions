import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Solutions from './Solutions';
import Navigation from './components/Navigation';
import CourseDetails from './components/CourseDetails';
import Footer from './components/Footer';
import DigitalMarketing from './DigitalMarketing';
import FullStackmain from './FullStackmain';
import Cybersecurity from './Cybersecurity';
import ExtremeCloudDashboard from './ExtremeCloudDashboard';
import InsightsPage from './InsightsPage';
import FortinetTraining from './FortinetTraining';

const  App =() => {
  return (
    <Router>
      <Routes >
        <Route path="/ExtremeCloudDashboard" element={<ExtremeCloudDashboard />} />
            <Route path="/InsightsPage" element={<InsightsPage />} />
      </Routes>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-gray-50 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
            <Route path="/FullStackmain" element={<FullStackmain />} />
            <Route path="/FortinetTraining" element={<FortinetTraining />} />
            <Route path="/CourseDetails/:examCode" element={<CourseDetails />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
