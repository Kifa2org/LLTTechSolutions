import React from 'react';
import Hero from './components/Hero';
import FullStack from './components/FullStack';
import DigitalMarket from './components/DigitalMarket';
import StyleCards from './components/StyleCards';
import NewCarousel from './components/NewCarousel';
import DigitalMarketingCarousel from './components/DigitalMarketingCarousel';
import FullstackCarousel from './components/FullstackCarousel';
import GlobalStatsSection from './components/GlobalStatsSection';
import CyberCourse from './components/CyberCourse';


const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <StyleCards />
      <NewCarousel />
    
      <GlobalStatsSection />
<CyberCourse/>

    </div>
  );
};

export default Home;
