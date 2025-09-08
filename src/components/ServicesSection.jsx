import React from 'react';
import ServiceCard from './ServiceCard';
import { SiSpringsecurity } from "react-icons/si";
import { FaRocket, FaLightbulb } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      title: 'Cybersecurity Platform',
      description: 'Comprehensive security orchestration with AI-powered threat intelligence and automated response capabilities.',
      icon: SiSpringsecurity,
      color: 'bg-blue-500',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Compliance reporting'
      ]
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Multi-layered defense system with machine learning algorithms to identify and neutralize sophisticated cyber threats.',
      icon: FaRocket,
      color: 'bg-red-600',
      features: [
        'Zero-day exploit protection',
        'Behavioral analysis',
        'Sandboxing technology'
      ]
    },
    {
      title: 'Innovative Solutions',
      description: 'Cutting-edge research and development to stay ahead of emerging threats with next-generation security technologies.',
      icon: FaLightbulb,
      color: 'bg-yellow-600',
      features: [
        'AI-powered analytics',
        'Quantum-safe encryption',
        'Cloud-native architecture'
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Advanced Security Solutions
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive cybersecurity services designed to protect your digital assets and ensure business continuity in an ever-evolving threat landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;