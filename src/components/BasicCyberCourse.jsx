import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import IEMToolsImg from '../assets/switching.webp';
import InformationSecurityAndHackingImg from '../assets/InformationSecurityandHacking.webp';
import NetworkFundamentalsImg from '../assets/NetworkFundamentals.webp';
import AdvancedNetworkingImg from '../assets/AdvancedNetworking.webp';
import CloudSecurityImg from '../assets/CloudSecurity.webp';
import NetworkExploitationImg from '../assets/NetworkExploitation.jpeg';
import SecurityAuditingImg from '../assets/SecurityAuditing.webp';
import NetworkArchitectureImg from '../assets/NetworkArchitecture.webp';
import WebApplicationSecurityImg from '../assets/WebApplicationSecurity.jpeg';
import VulnerabilityImg from '../assets/Vulnerbility.webp';
import { Link } from 'react-router-dom';

const BasicCyberCourse = forwardRef((props, ref) => {
  const cards = [
    {
      title: "Introduction to Information Security and Hacking",
      description: "Learn the fundamentals of cybersecurity and ethical hacking principles.",
      image: InformationSecurityAndHackingImg,
      features: ["Identity and Access Management", "Network Segmentation", "Ethical Hacking"],
      to:"/InformationSecurityHackingCourseDetails/informationSecurityHacking"
    },
    {
      title: "Network Fundamentals",
      description: "Network Fundamentals covers the basics of computer networking, including network topologies, protocols, and architectures.",
      image: NetworkFundamentalsImg,
      features: ["Firewalls and Gateways", "OSI Layers", "Network Protocols", "Network Interface Cards"],
      to:"/NetworkFundamentalsCourseDetails/networkFundamentals"
    },
    {
      title: "Advanced Networking",
      description: "Deep dive into complex networking concepts and enterprise solutions including network architecture, security, and management.",
      image: AdvancedNetworkingImg,
      features: ["Redundancy", "Cloud Networking", "Cisco ACI", "Multicast Routing"],
      to:"/AdvanceNetworkingCourseDetails/advanceNetworking"
    },
    {
      title: "Cloud Security",
      description: "Secure cloud environments and understand modern cloud security practices.",
      image: CloudSecurityImg,
      features: ["Cloud Service Models", "Identity Federation", "Multi-Tenant Isolation", "API Security"],
      to:"/CloudSecurityCourseDetails/cloudSecurity"
    },
    {
      title: "Network Exploitation",
      description: "Learn ethical hacking techniques and network penetration testing.",
      image: NetworkExploitationImg,
      features: ["Manual Exploitation", "Metasploit Framework", "PowerShell Exploits", "DNS Spoofing"],
      to:"/NetworkExploitationCourseDetails/networkExploitation"
    },
    {
      title: "Security Auditing",
      description: "Conduct comprehensive security assessments and compliance audits.",
      image: SecurityAuditingImg,
      features: ["Auditing Operating Systems", "Database Access", "Control Mapping", "SIEM Tools"],
      to:"/SecurityAuditingCourseDetails/securityAuditing"
    },
    {
      title: "Network Architecture",
      description: "Design and implement scalable, secure, and efficient network infrastructures.",
      image: NetworkArchitectureImg,
      features: ["Modular Network Design", "Wireless Access Points", "Topology Selection", "Microsegmentation"],
      to:"/NetworkArchitectureCourseDetails/networkArchitecture"
    },
    {
      title: "Web Application Security",
      description: "Protect web applications from common attacks and ensure data security.",
      image: WebApplicationSecurityImg,
      features: ["Mass Assignment", "Pentesting GraphQL", "Cross-Site Scripting", "Session Hijacking"],
      to:"/WebApplicationSecurityCourseDetails/webApplicationSecurity"
    }
  ];

  return (
    <>
      {/* Cards Section */}
      <div ref={ref} className="pt-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Cybersecurity Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LLT Tech solutions provides courses from beginner to advanced product-level trainings with hands-on LABS covering ethical hacking, network security, cloud security, firewalls, threat management, and enterprise-grade solutions to prepare you for real-world challenges and global certifications.
          </p>
        </div>
        <div className="px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-36 md:h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Content area */}
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{card.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">{card.description}</p>

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
      </div>
    </>
  );
});

export default BasicCyberCourse;
