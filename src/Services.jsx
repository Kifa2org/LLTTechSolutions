import React from 'react';
import { motion } from 'framer-motion';
import ServicesImg from './assets/switching.webp';

const Services = () => {
  return (
    <section className="relative mb-3 bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Comprehensive IT Services
          </motion.h1>
          <motion.p
            className="text-lg mb-8 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Delivering reliable and scalable IT services to support your business growth.
          </motion.p>
          <div className="space-x-4">
            <motion.button
              className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <motion.img
            src={ServicesImg}
            alt="IT Services"
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

export default Services;
