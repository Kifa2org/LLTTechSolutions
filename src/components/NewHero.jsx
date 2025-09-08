import React from 'react';
import { motion } from 'framer-motion';
import MinBg from "../assets/mainpageImg.webp";


const NewHero = () => {
  return (
    <section className="relative mb-3 bg-gradient-to-r from-green-700 via-green-400 to-green-800 text-white">
      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            LLTech Solutions - Empower Your Digital Presence
          </motion.h1>
          <motion.p
            className="text-lg mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Innovative solutions to elevate your business with cutting-edge technology and design.
          </motion.p>
          <div className="space-x-4">
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <motion.img
            src={MinBg}
            alt="Technology"
            className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
