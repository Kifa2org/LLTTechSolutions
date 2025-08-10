import React from 'react';
import { ChevronRight, Check, Clock, Users, Award, BookOpen, Monitor, Globe, Shield, Zap, Star, Play, Download } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const FortinetTraining = () => {
  const courseContent = [
    {
      title: "FortiGate Firewall Fundamentals",
      duration: "8 hours",
      topics: ["Firewall Policies", "NAT Configuration", "VPN Setup", "Traffic Shaping"]
    },
    {
      title: "FortiManager & FortiAnalyzer",
      duration: "6 hours",
      topics: ["Centralized Management", "Logging & Reporting", "Device Registration", "Policy Management"]
    },
    {
      title: "Advanced Threat Protection",
      duration: "10 hours",
      topics: ["IPS Configuration", "Anti-Virus", "Web Filtering", "Application Control"]
    },
    {
      title: "Network Security Design",
      duration: "12 hours",
      topics: ["Architecture Planning", "High Availability", "SSL VPN", "Site-to-Site VPN"]
    }
  ];

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "40+ Hours Training", desc: "Comprehensive hands-on training" },
    { icon: <Monitor className="w-6 h-6" />, title: "Live Projects", desc: "Real-world scenarios and labs" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Trainers", desc: "Certified industry professionals" },
    { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Prepare for NSE certifications" },
    { icon: <Globe className="w-6 h-6" />, title: "24/7 Support", desc: "Continuous learning assistance" },
    { icon: <Shield className="w-6 h-6" />, title: "Job Assistance", desc: "Career guidance and placement" }
  ];

  const certifications = [
    { name: "NSE 1", desc: "Network Security Associate" },
    { name: "NSE 2", desc: "Network Security Associate" },
    { name: "NSE 3", desc: "Network Security Associate" },
    { name: "NSE 4", desc: "FortiGate Security Professional" },
    { name: "NSE 5", desc: "FortiManager/FortiAnalyzer Specialist" },
    { name: "NSE 6", desc: "Secure Fabric Specialist" },
    { name: "NSE 7", desc: "Enterprise Firewall Expert" },
    { name: "NSE 8", desc: "Network Security Expert" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
 
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Fortinet Training Course
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Master Fortinet security solutions with hands-on training. 
                Learn from industry experts and get certified in FortiGate, FortiManager, and FortiAnalyzer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Demo
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold">
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> 40+ Hours Live Training</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> Hands-on Labs & Projects</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> NSE Certification Prep</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> 24/7 Expert Support</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> Job Placement Assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600">Comprehensive Fortinet security training program</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Content</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>
          
          <div className="space-y-6">
            {courseContent.map((module, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">NSE Certifications</h2>
            <p className="text-xl text-gray-600">Prepare for Fortinet Network Security Expert certifications</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Fortinet Journey?</h2>
          <p className="text-xl mb-8 text-gray-200">Join thousands of professionals who have advanced their careers with our training</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Enroll Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default FortinetTraining;
