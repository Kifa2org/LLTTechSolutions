import React from 'react';
import { motion } from 'framer-motion';
import FullStack from './components/FullStack';
import FullstackCarousel from './components/FullstackCarousel';

const videoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const FullStackmain = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <FullStack />

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Fullstack Development Services</h2>
        <FullstackCarousel />
      </section>

      <section className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-md mt-12">
        <h3 className="text-3xl font-semibold mb-6">Mobile Development</h3>
        <p className="mb-4 text-lg leading-relaxed">
          We build high-performance mobile applications for both iOS and Android platforms using the latest technologies and frameworks. Our mobile development services focus on delivering seamless user experiences and robust functionality.
        </p>
        <motion.video
          className="w-full rounded-lg shadow-lg mb-8"
          src="/videos/mobile-development-animation.mp4"
          autoPlay
          loop
          muted
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          playsInline
        />
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Cross-platform app development</li>
          <li>Native app development</li>
          <li>UI/UX design for mobile</li>
          <li>App performance optimization</li>
          <li>App store deployment and support</li>
        </ul>

        <h3 className="text-3xl font-semibold mb-6">App Development</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Our app development services cover the full lifecycle from concept to deployment. We create scalable and secure applications tailored to your business needs, including backend APIs, frontend interfaces, and integration with third-party services.
        </p>
        <motion.video
          className="w-full rounded-lg shadow-lg mb-8"
          src="/videos/app-development-animation.mp4"
          autoPlay
          loop
          muted
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          playsInline
        />
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Custom app development</li>
          <li>API design and development</li>
          <li>Cloud integration</li>
          <li>Security and compliance</li>
          <li>Maintenance and updates</li>
        </ul>
      </section>
    </div>
  );
};

export default FullStackmain;
