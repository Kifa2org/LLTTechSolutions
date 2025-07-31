import React from 'react';
import { motion } from 'framer-motion';
import CyberBg from "./assets/CyberBackground.jpg"
import AnimatedServiceCard from './components/AnimatedServiceCard';

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(255, 255, 255, 0.4)",
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
};

const cardData = [
  {
    title: "Cybersecurity Architecture",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>Security design (HLD/LLD), implementation, operations, and standards</li>
        <li>CIS benchmark assessments</li>
        <li>Zero Trust Network Architecture (ZTNA)</li>
        <li>Security product selection and deployment</li>
      </ul>
    ),
  },
  {
    title: "Cloud Security",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>AWS & Azure cloud environments</li>
        <li>PaaS & IaaS security</li>
        <li>Azure Native Firewall, Load Balancers, and automation</li>
        <li>DevSecOps integration in cloud</li>
      </ul>
    ),
  },
  {
    title: "Generative AI & Security",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>LLM training and fine-tuning</li>
        <li>Prompt engineering for cybersecurity applications</li>
      </ul>
    ),
  },
  {
    title: "Security - Infrastructure as Code (IaC) & Automation",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>Automation using Ansible, Python, Terraform</li>
        <li>Firewall automation & production change deployments</li>
        <li>Monitoring & alerting via DataDog, PagerDuty</li>
      </ul>
    ),
  },
  {
    title: "Network Security & Firewall Management",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>Configuration, deployment, and troubleshooting of:</li>
        <li>Cisco ASA, Cisco FTD, Firepower, Cisco ISE</li>
        <li>Fortinet (Fortigate), Checkpoint (MDS level)</li>
        <li>VPNs (Pulse Secure, IPSec, SSL)</li>
        <li>IDS/IPS implementation and policy management</li>
      </ul>
    ),
  },
  {
    title: "DevSecOps",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>Secure CI/CD practices</li>
        <li>Code repository management (GitHub, VS Code)</li>
        <li>Integration of security tools in development pipelines</li>
      </ul>
    ),
  },
  {
    title: "Security Operations & Incident Management",
    description: (
      <ul className="list-disc list-inside space-y-1 ">
        <li>Incident, Change, Problem Management (ITIL practices)</li>
        <li>Major Incident Management (MIM)</li>
        <li>Root cause analysis and resolution leadership</li>
      </ul>
    ),
  },
];

const Cybersecurity = () => {
  return (
    <section className=''>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${CyberBg})` }}>

   
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container relative mx-auto px-6 min-h-screen justify-center flex flex-col z-10 text-white items-center">
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cybersecurity
          </motion.h1>
          <motion.p
            className="text-lg mb-8 font-semibold mx-auto max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore our comprehensive cybersecurity expertise and solutions tailored to protect your business.
          </motion.p>
         
        </div>
      </div>
         </div>
         {/* card section */}
         <div className='m-5'>

 <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 w-full max-w-7xl">
            {cardData.map(({ title, description }, index) => (
              <AnimatedServiceCard key={index} title={title} description={description} />
            ))}
          </div>

         </div>
    </section>
  );
};

export default Cybersecurity;
