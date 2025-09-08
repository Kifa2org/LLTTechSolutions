import React, { useState, useEffect, useRef,forwardRef } from 'react';
import FireWall from "../assets/firewall.webp";
import Switching from "../assets/switching.webp";
import Vulnerability from "../assets/Vulnerbility.webp";
import InformationSecurityAndHackingImg from '../assets/InformationSecurityandHacking.webp';
import NetworkFundamentalsImg from '../assets/NetworkFundamentals.webp';
import AdvancedNetworkingImg from '../assets/AdvancedNetworking.webp';
import CloudSecurityImg from '../assets/CloudSecurity.webp';
import NetworkExploitationImg from '../assets/NetworkExploitation.jpeg';
import SecurityAuditingImg from '../assets/SecurityAuditing.webp';
import NetworkArchitectureImg from '../assets/NetworkArchitecture.webp';
import WebApplicationSecurityImg from '../assets/WebApplicationSecurity.jpeg';

const slides = [
  {
    title: 'Information Security and Hacking',
    description:
      'Master the fundamentals of ethical hacking, threat modeling, and vulnerability assessment. Learn how to identify, exploit, and defend against real-world cyber threats using industry-leading tools and techniques.',
    imageUrl: InformationSecurityAndHackingImg,
  },
  {
    title: 'FortiNet Security',
    description:
      'Gain hands-on expertise with Fortinet technologies including FortiGate, FortiAnalyzer, and FortiManager. Learn to deploy next-gen firewalls, configure security policies, and protect enterprise networks against sophisticated cyber threats.',
    imageUrl: FireWall,
  },
  {
    title: 'Cisco',
    description:
      'Develop in-depth networking skills through Cisco’s ecosystem. From CCNA to advanced routing and switching, this program prepares you for designing, managing, and securing complex network infrastructures using Cisco technologies.',
    imageUrl: Switching,
  },
  {
    title: 'Checkpoint',
    description:
      'Explore enterprise-grade security with CheckPoint firewalls. Learn to implement intrusion prevention, VPNs, threat intelligence, and centralized policy management for robust cyber defense in modern IT environments.',
    imageUrl: Vulnerability,
  },
  {
    title: 'Network Fundamentals',
    description:
      'Learn the foundational concepts of networking including the OSI model, IP addressing, subnetting, routing, switching, and protocols like TCP/IP. Ideal for beginners starting their networking journey.',
    imageUrl: NetworkFundamentalsImg, // You can replace this with a dedicated image
  },
  {
    title: 'Advanced Networking',
    description:
      'Deep dive into advanced networking topics such as dynamic routing (EIGRP, OSPF, BGP), VLANs, VPNs, and network automation. Tailored for professionals seeking to elevate their networking expertise.',
    imageUrl: AdvancedNetworkingImg, // You can replace this with another image
  },
  {
    title: 'Cloud Security',
    description:
      'Understand cloud-based threat models and implement best practices for securing AWS, Azure, and GCP environments. Learn identity management, encryption, workload protection, and compliance.',
    imageUrl: CloudSecurityImg, // Replace with a cloud/security-related image
  },
  {
    title: 'Network Exploitation',
    description:
      'Learn how attackers gain unauthorized access to networks through real-world exploitation techniques. Covers reconnaissance, exploitation frameworks, privilege escalation, and lateral movement.',
    imageUrl: NetworkExploitationImg, // Replace with suitable exploit image
  },
  {
    title: 'Security Auditing',
    description:
      'Develop auditing and compliance skills to assess organizational security posture. Learn how to conduct risk assessments, policy reviews, log analysis, and enforce security controls across systems.',
    imageUrl: SecurityAuditingImg, // Or a new audit-specific image
  },
  {
    title: 'Network Architecture',
    description:
      'Understand how to design secure, scalable, and resilient network infrastructures. Covers topologies, segmentation, firewalls, DMZs, redundancy, and best practices for enterprise environments.',
    imageUrl: NetworkArchitectureImg, // Replace with an architecture-related image
  },
  {
    title: 'Web Application Security',
    description:
      'Protect web applications by learning how to identify and mitigate vulnerabilities such as XSS, SQL Injection, CSRF, and more. Covers OWASP Top 10, secure coding, and penetration testing tools.',
    imageUrl: WebApplicationSecurityImg, // Replace with a web app security image
  },
];


const NewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const prevIndexRef = useRef(currentIndex);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (prevIndexRef.current === slides.length - 1 && currentIndex === 0) {
      // Disable transition for the jump from last to first slide
      setIsTransitionEnabled(false);
    } else {
      setIsTransitionEnabled(true);
    }
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

return (
  <div className="relative max-w-5xl w-full mx-auto overflow-hidden shadow-lg rounded-lg">
    <div
      className={`flex duration-700 ${isTransitionEnabled ? 'transition-transform' : ''}`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="w-full flex-shrink-0 flex flex-col md:flex-row items-center p-8"
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-[320px] h-[200px] object-cover rounded-lg"
          />
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Arrows */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      aria-label="Previous Slide"
    >
      &#10094;
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      aria-label="Next Slide"
    >
      &#10095;
    </button>

    {/* Dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
      {[-1, 0, 1].map((offset) => {
        const dotIndex = (currentIndex + offset + slides.length) % slides.length;
        return (
          <button
            key={dotIndex}
            onClick={() => setCurrentIndex(dotIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              dotIndex === currentIndex ? 'bg-white scale-110' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        );
      })}
    </div>
  </div>
);

}


export default NewCarousel;