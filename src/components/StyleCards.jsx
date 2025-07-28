import React from 'react';
import AnimatedServiceCard from './AnimatedServiceCard';
import { FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa';

const cardsData = [
  {
    title: 'Cybersecurity Platform',
    description: 'Delivering Unrivaled Security & Performance through Innovation',
    icon: FaShieldAlt,
  },
  {
    title: 'Advanced Threat Protection',
    description: 'Protect your network with cutting-edge technology',
    icon: FaRocket,
  },
  {
    title: 'Innovative Solutions',
    description: 'Driving innovation to stay ahead of threats',
    icon: FaLightbulb,
  },
];

const StyleCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-white-900 mb-10 text-center">
        Cybersecurity Platform
      </h1>
      <p className="text-center text-lg text-white-600 mb-12">
        Delivering Unrivaled Security & Performance through Innovation
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map(({ title, description, icon }, index) => (
          <AnimatedServiceCard
            key={index}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
};

export default StyleCards;
