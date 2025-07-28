import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">LLTTech Solutions</h3>
          <p className="text-gray-400 max-w-xs">
            Empowering your digital presence with innovative technology solutions.
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li className="mb-1 hover:text-red-600 cursor-pointer">Home</li>
            <li className="mb-1 hover:text-red-600 cursor-pointer">Services</li>
            <li className="mb-1 hover:text-red-600 cursor-pointer">Solutions</li>
            <li className="mb-1 hover:text-red-600 cursor-pointer">About</li>
            <li className="mb-1 hover:text-red-600 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-400">1234 Tech Street</p>
          <p className="text-gray-400">City, State, ZIP</p>
          <p className="text-gray-400">Email: info@llttech.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-6">
        &copy; {new Date().getFullYear()} LLTTech Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
