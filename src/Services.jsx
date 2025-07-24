import React from 'react';
import AnimatedServiceCard from './components/AnimatedServiceCard';
import { FaShieldAlt, FaLaptopCode, FaCloud } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <AnimatedServiceCard
          icon={FaShieldAlt}
          title="Firewall Configuration & Management"
          description="Advanced policy design, rule optimization, and zero-trust enforcement across leading firewall platforms."
        />
        <AnimatedServiceCard
          icon={FaLaptopCode}
          title="Consulting"
          description="Expert advice to help you make the right technology decisions for your business."
        />
        <AnimatedServiceCard
          icon={FaLaptopCode}
          title="Software Development"
          description="Custom software solutions tailored to your unique business needs."
        />
        <AnimatedServiceCard
          icon={FaCloud}
          title="Cloud Services"
          description="Scalable and secure cloud infrastructure to support your operations."
        />
      </div>
    </div>
  );
};

export default Services;
