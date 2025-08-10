import React from 'react';
import { motion } from 'framer-motion';
import HeroBg from '../assets/mainpageImg.jpg';

const Hero = ({ onScrollDown }) => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 text-white max-w-4xl">
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >  "Build a Techie, Skip a Generation"
          
        </motion.h1>
         <motion.h1
          className="text-4xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        > 
          Empower Your Cybersecurity Career with LLTTech Solutions
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          
Master the skills to protect systems, networks, and data from cyber threats. Our courses cover risk assessment, threat detection, and security protocols—equipping IT professionals and security analysts with the tools to safeguard the digital world
        </motion.p>
        <div className="space-x-4">
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            onClick={onScrollDown}
          >
            Get Started
          </motion.button>
          {/* <motion.button
            className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Learn More
          </motion.button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
