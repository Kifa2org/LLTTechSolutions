import React from 'react';
import LabServiceCard from './LabServiceCard';
import { SiSpringsecurity } from "react-icons/si";
import { FaRocket, FaLightbulb } from 'react-icons/fa';
import FortinetLabImage from '../assets/FortinetLabImage.webp';
import CiscoLabImage from '../assets/CiscoLabImage.webp';
import CheckpointLabImage from '../assets/CheckpointLabImage.webp';

const LabServicesSection = () => {
  const services = [
    {
      title: 'Fortinet',
      description: 'We provide Fortinet Lab as a Service covering multiple Fortinet products, including FortiGate Firewalls, FortiManager, FortiAnalyzer, FortiSIEM, FortiEDR, and FortiAuthenticator. Get hands-on labs, practical scenarios, and certification-focused training designed to help professionals and organizations build expertise in Fortinet security solutions.',
      icon: SiSpringsecurity,
      color: 'bg-blue-500',
      image: FortinetLabImage,
    },
    {
      title: 'Cisco',
      description: 'We provide Cisco Security Lab as a Service covering a wide range of Cisco products, including Cisco ASA, Firepower (FTD), ISE, Stealthwatch, Umbrella, and SecureX. Our labs deliver hands-on experience, real-world scenarios, and certification-oriented training to help professionals and enterprises build strong expertise in Cisco’s next-generation security solutions.',
      icon: FaRocket,
      color: 'bg-red-600',
      image: CiscoLabImage,
    },
    {
      title: 'Checkpoint',
      description: 'We offer Check Point Security Lab as a Service covering key products such as Check Point Next Generation Firewalls (NGFW), Security Management Server (SMS), SmartConsole, SandBlast, Harmony, and CloudGuard. Our labs provide hands-on experience, enterprise scenarios, and certification-focused training to help professionals and organizations gain expertise in Check Point’s leading security solutions.',
      icon: FaLightbulb,
      color: 'bg-yellow-600',
      image: CheckpointLabImage,
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          LAB As a Service
        </h2>
        <h3 className="text-xl text-white mb-6">
          'Train like a hacker, think like a defender - all in your browser', Get hands-on with real-world cyber labs, anytime, anywhere with Lab as a Service.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <LabServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default LabServicesSection;