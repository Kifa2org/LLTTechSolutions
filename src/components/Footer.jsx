import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LLTlogo from "../assets/Logo-LLTW.webp"

const Footer = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    navigate(`/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Optional: Smooth scroll after navigation
  };

  const renderPageContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">LLTTech Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">Empowering your digital presence with innovative technology solutions</p>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Welcome to LLTTech Solutions</h2>
              <p className="text-gray-600">Your trusted partner in digital transformation and innovative technology solutions.</p>
            </div>
          </div>
        );

      case 'services':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Services</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-600">Custom web applications and responsive websites</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
                <p className="text-gray-600">iOS and Android application development</p>
              </div>
            </div>
          </div>
        );

      case 'solutions':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Technology Solutions</h1>
            <p className="text-lg text-gray-700">We provide comprehensive technology solutions tailored to your business needs.</p>
          </div>
        );

      case 'about':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">About LLTTech Solutions</h1>
            <p className="text-lg text-gray-700 mb-4">Founded with a vision to empower businesses through technology, LLTTech Solutions has been at the forefront of digital innovation.</p>
            <p className="text-gray-600">Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and success.</p>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-2"><strong>Address:</strong> Palakkad Main Road, Sunnambu, Kalavai</p>
              <p className="mb-2">Kuniyamuthur, Coimbatore-641008, Tamil Nadu</p>
              <p className="mb-2"><strong>Email:</strong> contact@llttechsolutions.com</p>
              <p><strong>Phone:</strong> +91 78458 25295</p>
            </div>
          </div>
        );

      case 'web-development':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Web Development</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Custom Web Applications & Responsive Websites</h3>
              <p className="text-gray-700 mb-4">We create modern, responsive websites and powerful web applications tailored to your business needs.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responsive Design for all devices</li>
                <li>Custom CMS Development</li>
                <li>E-commerce Solutions</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>API Integration & Development</li>
              </ul>
            </div>
          </div>
        );

      case 'mobile-applications':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Mobile Applications</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">iOS & Android App Development</h3>
              <p className="text-gray-700 mb-4">Build powerful mobile applications that engage your users and grow your business.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Native iOS & Android Development</li>
                <li>Cross-platform Solutions</li>
                <li>App Store Optimization</li>
                <li>Push Notifications & Analytics</li>
                <li>Offline Functionality</li>
              </ul>
            </div>
          </div>
        );

      case 'cloud-solutions':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Cloud Solutions</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Scalable Cloud Infrastructure</h3>
              <p className="text-gray-700 mb-4">Migrate to the cloud and scale your business with our comprehensive cloud solutions.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cloud Migration Services</li>
                <li>AWS & Azure Solutions</li>
                <li>Database Management</li>
                <li>Backup & Disaster Recovery</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        );

      case 'digital-marketing':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Digital Marketing</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Grow Your Online Presence</h3>
              <p className="text-gray-700 mb-4">Reach your target audience and boost your brand with our digital marketing strategies.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Content Marketing</li>
                <li>Email Marketing Campaigns</li>
              </ul>
            </div>
          </div>
        );

      case 'it-consulting':
        return (
          <div>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">IT Consulting</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Strategic Technology Guidance</h3>
              <p className="text-gray-700 mb-4">Get expert advice on technology decisions that will drive your business forward.</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Technology Strategy Planning</li>
                <li>System Architecture Design</li>
                <li>Security Assessments</li>
                <li>Process Optimization</li>
                <li>Digital Transformation</li>
              </ul>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">LLTTech Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">Empowering your digital presence with innovative technology solutions</p>
          </div>
        );
    }
  };

  return (
    <div className=" bg-gray-100">


      {/* Footer */}
      <footer className="bg-black text-white relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>

        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">

                <img src={LLTlogo} alt="LLT" className='rounded-md me-2' srcSet="" style={{ height: "2rem", width: "2rem" }} />
                <h3 className="text-2xl font-bold">LLTTech Solutions</h3>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Empowering your digital presence with innovative technology solutions that drive success.
              </p>

              {/* Social Media Icons
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div> */}

            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-100">Quick Links</h4>
              <ul className="space-y-3">
                <li className="hover:text-red-600 cursor-pointer">
                  <a href="/"> <span className="mr-2">🏠</span>Home</a>
                </li>
                <li className="hover:text-red-600 cursor-pointer">
                   <a href="/training"> <span className="mr-2">🎓</span>Courses</a>
                </li>
                <li className="hover:text-red-600 cursor-pointer">
                  <a href="/about"> <span className="mr-2">👥</span>About</a>
                </li>
                <li className="hover:text-red-600 cursor-pointer">
                  <a href="/contact"> <span className="mr-2">📞</span>Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-100">Our Services</h4>
              <ul className="space-y-3 text-blue-100">
               <li className="hover:text-red-600 cursor-pointer">
                  <a href="/training">Cybersecurity</a>
               </li>
               <li className="hover:text-red-600 cursor-pointer">
                 <a href="https://digitalmarketing.llttechsolutions.com/">Digital Marketing</a>
               </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-blue-100">Get In Touch</h4>
              <div className="space-y-4 text-blue-100">
                <div className="flex items-start">
                  <span className="mr-3 mt-1">📍</span>
                  <div>
                    <p>Palakkad Main Road, Sunnambu, Kalavai</p>
                    <p>Kuniyamuthur, Coimbatore-641008</p>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✉️</span>
                  <a
                    href="mailto:contact@llttechsolutions.com"
                    className="hover:text-red-600 transition-colors"
                  >
                    contact@llttechsolutions.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📱</span>
                  <a
                    href="tel:+917845825295"
                    className="hover:text-red-600 transition-colors cursor-pointer"
                  >
                    +91 78458 25295
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-400 mt-12 pt-8 text-center">
            <div className="text-blue-100">
              &copy; {new Date().getFullYear()} LLTTech Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;