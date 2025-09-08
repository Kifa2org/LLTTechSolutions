import React ,{useRef} from 'react';
import Hero from './components/Hero';
import FullStack from './components/FullStack';
import DigitalMarket from './components/DigitalMarket';
import ServicesSection from './components/ServicesSection';
import LabServicesSection from './components/LabServicesSection';
import NewCarousel from './components/NewCarousel';
import DigitalMarketingCarousel from './components/DigitalMarketingCarousel';
import FullstackCarousel from './components/FullstackCarousel';
import GlobalStatsSection from './components/GlobalStatsSection';
import CyberCourse from './components/CyberCourse';
import BasicCyberCourse from './components/BasicCyberCourse';
import HomePageFAQSection from './components/HomePageFAQSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const courseSectionRef = useRef(null);

  const scrollToCourses = () => {
    courseSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (<>
    <Helmet>

      <meta name="description"
          content="LLT Tech Solutions provides expert Fortinet training and cybersecurity certification courses. Learn FortiGate firewall, network defense, and security skills."
      />
      <meta name="keywords"
          content="Fortinet Training, Cybersecurity Training, FortiGate Firewall, Network Security, LLT Tech Solutions,FTI,Fortinet training courses,fortinet,fti,LLTtech,"
       />
      <link rel="canonical" href="https://llttechsolutions.com/" />
    </Helmet>
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero onScrollDown={scrollToCourses}/>
      <NewCarousel />
      <BasicCyberCourse ref={courseSectionRef}/>
      <CyberCourse/>
      <ServicesSection />
      <LabServicesSection />
      <GlobalStatsSection />
      <HomePageFAQSection />
    </div>
  </>
  );
};

export default Home;
