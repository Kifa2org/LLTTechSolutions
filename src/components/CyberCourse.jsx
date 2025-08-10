import React from 'react'
import { motion } from 'framer-motion';
import FortiNetImg from '../assets/Firewall.jpg';
import IEMToolsImg from '../assets/switching.jpg';
import VulnerabilityImg from '../assets/Vulnerbility.jpg';
import { Link } from 'react-router-dom';

const CyberCourse = () => {
      const cards = [
    {
      title: "FortiNet Security Solutions",
      description: "Advanced next-generation firewalls and security fabric integration for comprehensive threat protection.",
      image: FortiNetImg,
      features: ["NGFW", "Threat Intelligence", "Zero Trust Access"]
    },
    {
      title: "IEM Tools & Management",
      description: "Intelligent endpoint management tools for seamless device control and security policy enforcement.",
      image: IEMToolsImg,
      features: ["Endpoint Control", "Policy Management", "Asset Discovery"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive vulnerability scanning and risk assessment to identify and remediate security gaps.",
      image: VulnerabilityImg,
      features: ["Risk Analysis", "Penetration Testing", "Compliance Reporting"]
    }
  ];

  return (
    <>
      {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{card.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {card.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              {/* <Link to=""></Link> */}
              <motion.button
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solution
              </motion.button>
            </motion.div>
          ))}
        </div>
    
    
    
    
    </>
  )
}

export default CyberCourse