import React from 'react';
import { motion } from 'framer-motion';
import HeroBg from '../assets/mainpageImg.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 text-white max-w-4xl">
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Your Digital Security with LLTTech Solutions
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Innovative cybersecurity solutions tailored to protect your business and data.
        </motion.p>
        <div className="space-x-4">
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
