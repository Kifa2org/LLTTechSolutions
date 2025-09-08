import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Solutions from './Solutions';
import Navigation from './components/Navigation';
import CourseDetails from './components/CourseDetails';
import CiscoCourseDetails from './components/CiscoCourseDetails';
import CheckpointCourseDetails from './components/CheckpointCourseDetails';
import InformationSecurityHackingCourseDetails from './components/InformationSecurityHackingCourseDetails';
import NetworkFundamentalsCourseDetails from './components/NetworkFundamentalsCourseDetails';
import AdvanceNetworkingCourseDetails from './components/AdvanceNetworkingCourseDetails';
import CloudSecurityCourseDetails from './components/CloudSecurityCourseDetails';
import NetworkExploitationCourseDetails from './components/NetworkExploitationCourseDetails';
import SecurityAuditingCourseDetails from './components/SecurityAuditingCourseDetails';
import NetworkArchitectureCourseDetails from './components/NetworkArchitectureCourseDetails';
import WebApplicationSecurityCourseDetails from './components/WebApplicationSecurityCourseDetails';
import Footer from './components/Footer';
import DigitalMarketing from './DigitalMarketing';
import FullStackmain from './FullStackmain';
import Cybersecurity from './Cybersecurity';
import ExtremeCloudDashboard from './ExtremeCloudDashboard';
import InsightsPage from './InsightsPage';
import FortinetTraining from './FortinetTraining';
import CiscoTraining from './CiscoTraining';
import CheckpointTraining from './CheckpointTraining';
import Training from './Training';
import ScrollToTop from './ScrollToTop';

const  App =() => {
  return (
    <Router>
      <ScrollToTop />
      <Routes >
        <Route path="/ExtremeCloudDashboard" element={<ExtremeCloudDashboard />} />
        <Route path="/InsightsPage" element={<InsightsPage />} />
      </Routes>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow bg-gray-50 pt-10 md:pt-20">
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
            <Route path="/CiscoTraining" element={<CiscoTraining />} />
            <Route path="/CheckpointTraining" element={<CheckpointTraining />} />
            <Route path="/Training" element={<Training />} />
            <Route path="/CourseDetails/:examCode" element={<CourseDetails />} />
            <Route path="/CiscoCourseDetails/:examCode" element={<CiscoCourseDetails />} />
            <Route path="/CheckpointCourseDetails/:examCode" element={<CheckpointCourseDetails />} />
            <Route path="/InformationSecurityHackingCourseDetails/:examCode" element={<InformationSecurityHackingCourseDetails />} />
            <Route path="/NetworkFundamentalsCourseDetails/:examCode" element={<NetworkFundamentalsCourseDetails />} />
            <Route path="/AdvanceNetworkingCourseDetails/:examCode" element={<AdvanceNetworkingCourseDetails />} />
            <Route path="/CloudSecurityCourseDetails/:examCode" element={<CloudSecurityCourseDetails />} />
            <Route path="/NetworkExploitationCourseDetails/:examCode" element={<NetworkExploitationCourseDetails />} />
            <Route path="/SecurityAuditingCourseDetails/:examCode" element={<SecurityAuditingCourseDetails />} />
            <Route path="/NetworkArchitectureCourseDetails/:examCode" element={<NetworkArchitectureCourseDetails />} />
            <Route path="/WebApplicationSecurityCourseDetails/:examCode" element={<WebApplicationSecurityCourseDetails />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
