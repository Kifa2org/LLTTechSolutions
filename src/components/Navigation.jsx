import React, { useState } from 'react';
import LLTlogo from "../assets/Logo-LLTW.webp"
import { GrShieldSecurity } from "react-icons/gr";
import { SiCisco } from "react-icons/si";
import { AiFillSlackCircle } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { FiCloud } from "react-icons/fi";
import { FaUserSecret, FaNetworkWired, FaGlobe } from 'react-icons/fa';
import { MdOutlineLan, MdSecurity } from 'react-icons/md';

import { GiSpy } from 'react-icons/gi';
import { SiHackthebox } from 'react-icons/si';
import { HiOutlineServerStack } from 'react-icons/hi2';
import { BiShieldQuarter } from 'react-icons/bi';

const Navigation = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [cyberDropdownOpen, setCyberDropdownOpen] = useState(false);
  const [ciscoDropdownOpen, setCiscoDropdownOpen] = useState(false);
  const [checkpointDropdownOpen, setCheckpointDropdownOpen] = useState(false);


  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
    setCyberDropdownOpen(false);
    setCiscoDropdownOpen(false);
  };

  const toggleCyberDropdown = () => {
    setCyberDropdownOpen(!cyberDropdownOpen);
    setCiscoDropdownOpen(false);
    setCheckpointDropdownOpen(false);
  };

  const toggleCiscoDropdown = () => {
    setCiscoDropdownOpen(!ciscoDropdownOpen);
    setCyberDropdownOpen(false);
    setCheckpointDropdownOpen(false);
  };

  const toggleCheckpointDropdown = () => {
    setCheckpointDropdownOpen(!checkpointDropdownOpen);
    setCyberDropdownOpen(false);
    setCiscoDropdownOpen(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-2xl font-bold flex text-white-600 cursor-pointer">
            <img src={LLTlogo} alt="LLT" className='rounded-md me-2' srcSet="" style={{ height: "2rem", width: "2rem" }} />
            LLTTech Solutions
          </div>
          <ul className="hidden md:flex space-x-8 font-semibold">
            <li className="hover:text-red-600 cursor-pointer"><a href="/">Home</a></li>
            <li className="relative cursor-pointer">
              <button
                onClick={toggleOffcanvas}
                className="flex items-center hover:text-red-600 focus:outline-none"
                aria-expanded={offcanvasOpen}
                aria-controls="course-offcanvas"
              >
                Course
                <svg
                  className="ml-1 w-4 h-4 fill-current text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
                </svg>
              </button>
            </li>
            <li className="hover:text-red-600 cursor-pointer"><a href="/about">About</a></li>
            <li className="hover:text-red-600 cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white pl-4 space-y-4 z-40 shadow-md">
          <a href="/" className="block hover:text-red-600 pt-20" onClick={closeMobileMenu}>Home</a>
          <button
            onClick={toggleOffcanvas}
            className="flex items-center w-full text-left hover:text-red-600"
          >
            Course
            <svg
              className="ml-1 w-4 h-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
            </svg>
          </button>
          <a href="/about" className="block hover:text-red-600" onClick={closeMobileMenu}>About</a>
          <a href="/contact" className="block hover:text-red-600 pb-4" onClick={closeMobileMenu}>Contact</a>
        </div>
      )}


      {/* Offcanvas backdrop */}
      {offcanvasOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeOffcanvas}
          aria-hidden="true"
        />
      )}

      {/* Offcanvas panel */}
      <div id="course-offcanvas"
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          offcanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!offcanvasOpen}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Courses</h2>
          <button onClick={closeOffcanvas}
            className="text-white hover:text-red-600 focus:outline-none"
            aria-label="Close offcanvas"
          >
            &#x2715;
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <div className="relative">

             <div className="space-y-2">
               <div className="flex items-center">
                 <FaUserSecret className="me-2" />
                 <a href="/InformationSecurityHackingCourseDetails/informationSecurityHacking"
                    className="text-sm text-white hover:text-red-600">
                   Information Security and Hacking
                 </a>
               </div>

               <div className="flex items-center">
                 <MdOutlineLan className="me-2" />
                 <a href="/NetworkFundamentalsCourseDetails/networkFundamentals"
                    className="text-sm text-white hover:text-red-600">
                   Network Fundamentals
                 </a>
               </div>

               <div className="flex items-center">
                 <FaNetworkWired className="me-2" />
                 <a href="/AdvanceNetworkingCourseDetails/advanceNetworking"
                    className="text-sm text-white hover:text-red-600">
                   Advanced Networking
                 </a>
               </div>

               <div className="flex items-center">
                 <FiCloud className="me-2" />
                 <a href="/CloudSecurityCourseDetails/cloudSecurity"
                    className="text-sm text-white hover:text-red-600">
                   Cloud Security
                 </a>
               </div>

               <div className="flex items-center">
                 <GiSpy className="me-2" />
                 <a href="/NetworkExploitationCourseDetails/networkExploitation"
                    className="text-sm text-white hover:text-red-600">
                   Network Exploitation
                 </a>
               </div>

               <div className="flex items-center">
                 <MdSecurity className="me-2" />
                 <a href="/SecurityAuditingCourseDetails/securityAuditing"
                    className="text-sm text-white hover:text-red-600">
                   Security Auditing
                 </a>
               </div>

               <div className="flex items-center">
                 <HiOutlineServerStack className="me-2" />
                 <a href="/NetworkArchitectureCourseDetails/networkArchitecture"
                    className="text-sm text-white hover:text-red-600">
                   Network Architecture
                 </a>
               </div>

               <div className="flex items-center">
                 <BiShieldQuarter className="me-2" />
                 <a href="/WebApplicationSecurityCourseDetails/webApplicationSecurity"
                    className="text-sm text-white hover:text-red-600">
                   Web Application Security
                 </a>
               </div>
             </div>
          </div>
          <div className="relative">
            <button onClick={toggleCyberDropdown}
              className="flex items-center w-full text-left hover:text-red-600 focus:outline-none"
            >
              <GrShieldSecurity className="me-2" /> Fortinet
              <svg
                className={`ml-auto w-4 h-4 fill-current transition-transform duration-200 ${
                  cyberDropdownOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
              </svg>
            </button>
            {cyberDropdownOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="/FortinetTraining#certified-professional" className="block px-2 py-1 text-sm text-white hover:text-red-600">Professional</a>
                <a href="/FortinetTraining#solution-specialist" className="block px-2 py-1 text-sm text-white hover:text-red-600">Solution Specialist</a>
                <a href="/FortinetTraining#expert-security" className="block px-2 py-1 text-sm text-white hover:text-red-600">Expert</a>
              </div>
            )}
          </div>
    <div className="relative">
      <button
        onClick={toggleCiscoDropdown}
        className="flex items-center w-full text-left hover:text-red-600 focus:outline-none"
      >
        <SiCisco className="me-2" /> Cisco
        <svg
          className={`ml-auto w-4 h-4 fill-current transition-transform duration-200 ${
            ciscoDropdownOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
        </svg>
      </button>
       {ciscoDropdownOpen && (
           <div className="ml-4 mt-2 space-y-1">
              <a href="/CiscoCourseDetails/CCNA" className="block px-2 py-1 text-sm text-white hover:text-red-600">Associate</a>
              <a href="/CiscoCourseDetails/SNCF" className="block px-2 py-1 text-sm text-white hover:text-red-600">Professional</a>
              <a href="/CiscoTraining#security-expert" className="block px-2 py-1 text-sm text-white hover:text-red-600">Expert</a>
           </div>
       )}
       </div>
          <div className="relative">
            <button
              onClick={toggleCheckpointDropdown}
              className="flex items-center w-full text-left hover:text-red-600 focus:outline-none"
            >
              <AiFillSlackCircle className="me-2" /> Checkpoint
              <svg
                className={`ml-auto w-4 h-4 fill-current transition-transform duration-200 ${
                  checkpointDropdownOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
              </svg>
            </button>
            {checkpointDropdownOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <a href="/CheckpointCourseDetails/CCSA" className="block px-2 py-1 text-sm text-white hover:text-red-600">Associate</a>
                <a href="/CheckpointCourseDetails/CCSE" className="block px-2 py-1 text-sm text-white hover:text-red-600">Professional</a>
                <a href="/CheckpointCourseDetails/CCSM" className="block px-2 py-1 text-sm text-white hover:text-red-600">Expert</a>
              </div>
            )}
          </div>

        </nav>
      </div>
    </>
  );
};

export default Navigation;
