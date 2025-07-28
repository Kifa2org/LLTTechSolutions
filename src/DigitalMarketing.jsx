import React from 'react';
import { motion } from 'framer-motion';
import DigitalMarket from './components/DigitalMarket';
import DigitalMarketingCarousel from './components/DigitalMarketingCarousel';

const videoVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DigitalMarket />

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Our Digital Marketing Services</h2>
        <DigitalMarketingCarousel />
      </section>

      <section className="container mx-auto px-6 py-12 bg-white rounded-lg shadow-md mt-12">
        <h3 className="text-3xl font-semibold mb-6">SEO Marketing</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Our SEO marketing services help improve your website's visibility on search engines through keyword research, on-page optimization, link building, and content strategy. We focus on driving organic traffic and increasing your search rankings to attract more potential customers.
        </p>
        <motion.video
          className="w-full rounded-lg shadow-lg mb-8"
          src="/videos/seo-marketing-animation.mp4"
          autoPlay
          loop
          muted
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          playsInline
        />
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Comprehensive keyword analysis</li>
          <li>Technical SEO audits and fixes</li>
          <li>Content optimization and creation</li>
          <li>Quality backlink building</li>
          <li>Performance tracking and reporting</li>
        </ul>

        <h3 className="text-3xl font-semibold mb-6">Social Media Marketing</h3>
        <p className="mb-4 text-lg leading-relaxed">
          We help you build and maintain a strong social media presence across platforms like Facebook, Instagram, Twitter, and LinkedIn. Our social media marketing strategies focus on engaging your audience, increasing brand awareness, and driving conversions through targeted campaigns and content.
        </p>
        <motion.video
          className="w-full rounded-lg shadow-lg mb-8"
          src="/videos/social-media-marketing-animation.mp4"
          autoPlay
          loop
          muted
          variants={videoVariants}
          initial="hidden"
          animate="visible"
          playsInline
        />
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Social media account setup and branding</li>
          <li>Content planning and creation</li>
          <li>Community management and engagement</li>
          <li>Paid social advertising campaigns</li>
          <li>Analytics and performance optimization</li>
        </ul>

        <h3 className="text-3xl font-semibold mb-6">Content Marketing</h3>
        <p className="mb-4 text-lg leading-relaxed">
          Our content marketing services focus on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience. We develop blog posts, articles, infographics, and videos that align with your brand voice and marketing goals.
        </p>
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Content strategy development</li>
          <li>Blog and article writing</li>
          <li>Visual content creation</li>
          <li>Content distribution and promotion</li>
          <li>Performance measurement and refinement</li>
        </ul>
      </section>
    </div>
  );
};

export default DigitalMarketing;
