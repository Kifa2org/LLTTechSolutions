import React from 'react';
import { motion } from 'framer-motion';
import FortiNetImg from '../assets/Firewall.webp';
import IEMToolsImg from '../assets/switching.webp';
import VulnerabilityImg from '../assets/Vulnerbility.webp';
import { Link } from 'react-router-dom';

const CyberCourse = () => {
  const cards = [
    {
      title: "FortiNet Security Training",
      description: "Advanced next-generation firewalls and security fabric integration for comprehensive threat protection. Learn from industry experts and get certified",
      image: FortiNetImg,
      features: ["Professional", "Solution Specialist", "Expert"],
      to:"/FortinetTraining"
    },
    {
      title: "Cisco Training",
      description: "Comprehensive program designed to equip individuals with the skills and knowledge needed to master.",
      image: IEMToolsImg,
      features: ["Network Associate", "Network Professional Security", "Internetwork Expert Security"],
      to:"/CiscoTraining"
    },
    {
      title: "Checkpoint Training",
      description: "Defends against ransomware attacks, cyber-attacks, and malware attacks with CheckPoint Firewall.",
      image: VulnerabilityImg,
      features: ["Security Administrator", "Security Expert", "Security Master"],
      to:"/CheckpointTraining"
    }
  ];

  return (
    <>
      {/* Cards Section */}
      <div className="pt-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Security Product Trainings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master enterprise-grade security solutions from industry leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:px-0">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col h-full"
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

              {/* Content area */}
              <div className="flex-grow">
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
              </div>

              {/* Button at bottom */}
              <Link to={card.to}>
                <motion.button
                  className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CyberCourse;
