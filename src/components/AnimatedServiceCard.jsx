import React from 'react';
import { motion } from 'framer-motion';

const AnimatedServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      className="bg-white text-gray-800 rounded-lg shadow p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
        backgroundColor: '#28b5ecff', // Tailwind blue-500
        color: '#ffffff', // white text
        transition: { duration: 0.3 }
      }}
      style={{ color: '#1f2937' }} // Tailwind gray-800 text color initial
    >
      {Icon && <Icon className="text-4xl mb-4 " />}
      <h2 className="text-2xl font-semibold shadow-md p-2 rounded-md bg-[#30b2eeff] text-white mb-4">{title}</h2>
      <div>{description}</div>
    </motion.div>
  );
};

export default AnimatedServiceCard;
