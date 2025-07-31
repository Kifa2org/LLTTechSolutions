import React from 'react';
import LLTlogo from "../assets/Logo-LLTW.png"
import { GrShieldSecurity } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold flex text-white-600 cursor-pointer">
        <img src={LLTlogo} alt="LLT" className='rounded-md me-2' srcset="" style={{height:"2rem",width:"2rem"}} />
          LLTTech Solutions
        </div>
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li className="hover:text-red-600 cursor-pointer"><a href="/">Home</a></li>
          <li className="relative group cursor-pointer">
            <div className="hover:text-red-600 flex items-center">
              Services
              <svg
                className="ml-1 w-4 h-4 fill-current text-dark group-hover:text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548l4.484 4.484 4.484-4.484L15.484 9l-5.484 5.484L4.516 9z" />
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 xl:w-72 bg-white border border-gray-300 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <span className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 flex"><GrShieldSecurity className='mt-1 me-1' /><a href="/cybersecurity">  Cybersecurity</a></span>
              <span className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 flex"> <FaCode className='mt-1 me-1' /><a href="/FullStackmain">Full Stack Development </a> </span>
              <span className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200 flex"><AiFillShop className='mt-1 me-1' /> <a href="/DigitalMarketing">Digitalmarketing</a></span>
            </div>
          </li>
          <li className="hover:text-red-600 cursor-pointer"><a href="/solutions">Solutions</a></li>
          <li className="hover:text-red-600 cursor-pointer"><a href="/about">About</a></li>
          <li className="hover:text-red-600 cursor-pointer"><a href="/contact">Contact</a></li>
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
  );
};

export default Navigation;
