import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHero = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-20 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Welcome to LLTTechSolutions
      </motion.h1>
      <motion.p
        className="text-lg max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        We provide innovative technology solutions to help your business grow and succeed.
      </motion.p>
      <motion.img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
        alt="Technology"
        className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />
    </motion.section>
  );
};

export default AnimatedHero;
