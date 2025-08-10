import React, { useState } from 'react';
import LLTlogo from "../assets/Logo-LLTW.png"
import { GrShieldSecurity } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";

const Navigation = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [cyberDropdownOpen, setCyberDropdownOpen] = useState(false);

  const toggleOffcanvas = () => {
    setOffcanvasOpen(!offcanvasOpen);
  };

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
    setCyberDropdownOpen(false);
  };

  const toggleCyberDropdown = () => {
    setCyberDropdownOpen(!cyberDropdownOpen);
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
            <li className="hover:text-red-600 cursor-pointer"><a href="/solutions">Blog</a></li>
            <li className="hover:text-red-600 cursor-pointer"><a href="/about">About</a></li>
            <li className="hover:text-red-600 cursor-pointer"><a href="/contact">Contact</a></li>
            <li className="hover:text-red-600 cursor-pointer"><a href="/ExtremeCloudDashboard">Cloud</a></li>
          </ul>
          <div className="md:hidden">
            {/* Mobile menu icon can be added here later */}
            <svg
              className="w-6 h-6 text-white cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Offcanvas backdrop */}
      {offcanvasOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeOffcanvas}
          aria-hidden="true"
        />
      )}

      {/* Offcanvas panel */}
      <div
        id="course-offcanvas"
        className={`fixed top-0 right-0 h-full w-96 bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          offcanvasOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!offcanvasOpen}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Courses</h2>
          <button
            onClick={closeOffcanvas}
            className="text-white hover:text-red-600 focus:outline-none"
            aria-label="Close offcanvas"
          >
            &#x2715;
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <div className="relative">
            <button
              onClick={toggleCyberDropdown}
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
                <a href="/FortinetTraining" className="block px-2 py-1 text-sm text-white hover:text-red-600">Professional</a>
                <a href="/cybersecurity#services" className="block px-2 py-1 text-sm text-white hover:text-red-600">Solution Specialist</a>
                <a href="/cybersecurity#tools" className="block px-2 py-1 text-sm text-white hover:text-red-600">Expert</a>
                <a href="/cybersecurity#assessment" className="block px-2 py-1 text-sm text-white hover:text-red-600">Vulnerability Assessment</a>
                <a href="/contact" className="block px-2 py-1 text-sm text-white hover:text-red-600">Contact</a>
              </div>
            )}
          </div>
          <a href="/FullStackmain" className="flex items-center hover:text-red-600">
            <FaCode className="me-2" /> Full Stack Development
          </a>
          <a href="/DigitalMarketing" className="flex items-center hover:text-red-600">
            <AiFillShop className="me-2" /> Digital Marketing
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
