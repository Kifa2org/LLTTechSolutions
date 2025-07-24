import React from 'react';
import NewHero from './components/NewHero';
import NewCarousel from './components/NewCarousel';
import NewServices from './components/NewServices';

const Home = () => {
  return (
    <div>
      <NewHero />
       <NewCarousel />
      <NewServices />
    </div>
  );
};

export default Home;
