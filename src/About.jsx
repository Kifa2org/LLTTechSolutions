import React from 'react';
import { Shield, Users, Target, Zap, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const About = () => {
  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Cybersecurity Excellence", desc: "Enterprise-grade security solutions" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "Certified professionals with real-world experience" },
    { icon: <Target className="w-6 h-6" />, title: "Client Focus", desc: "Tailored solutions for your unique needs" },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", desc: "Cutting-edge technology and methodologies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
     <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden relative">
           {/* Custom Styles */}
           <style jsx>{`
             .circle-card {
               border-radius: 50%;
               aspect-ratio: 1;
             }

             .glassmorphism {
               background: rgba(255, 255, 255, 0.1);
               backdrop-filter: blur(20px);
               border: 1px solid rgba(255, 255, 255, 0.2);
             }

             .neon-border {
               box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
               animation: neon-pulse 2s ease-in-out infinite alternate;
             }

             .neon-border-pink {
               box-shadow: 0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3);
               animation: neon-pulse-pink 2s ease-in-out infinite alternate;
             }

             @keyframes neon-pulse {
               from { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3); }
               to { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5); }
             }

             @keyframes neon-pulse-pink {
               from { box-shadow: 0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3); }
               to { box-shadow: 0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.5); }
             }

             .floating-particles {
               position: absolute;
               width: 100%;
               height: 100%;
               overflow: hidden;
             }

             .particle {
               position: absolute;
               background: rgba(255, 255, 255, 0.1);
               border-radius: 50%;
               animation: float-particle 15s linear infinite;
             }

             @keyframes float-particle {
               0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
               10% { opacity: 1; }
               90% { opacity: 1; }
               100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
             }

             .tilt-card {
               transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
               transform-style: preserve-3d;
             }

             .tilt-card:hover {
               transform: rotateX(10deg) rotateY(10deg) scale(1.05);
             }

             .mesh-gradient {
               background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);
             }
           `}</style>

           {/* Floating Particles Background */}
           <div className="floating-particles">
             <div className="particle w-2 h-2" style={{left: '10%', animationDelay: '0s'}}></div>
             <div className="particle w-1 h-1" style={{left: '20%', animationDelay: '2s'}}></div>
             <div className="particle w-3 h-3" style={{left: '30%', animationDelay: '4s'}}></div>
             <div className="particle w-2 h-2" style={{left: '40%', animationDelay: '6s'}}></div>
             <div className="particle w-1 h-1" style={{left: '50%', animationDelay: '8s'}}></div>
             <div className="particle w-2 h-2" style={{left: '60%', animationDelay: '10s'}}></div>
             <div className="particle w-3 h-3" style={{left: '70%', animationDelay: '12s'}}></div>
             <div className="particle w-1 h-1" style={{left: '80%', animationDelay: '14s'}}></div>
             <div className="particle w-2 h-2" style={{left: '90%', animationDelay: '16s'}}></div>
           </div>

           <div className="relative z-10 py-20 px-6">
             {/* Company Header */}
             <div className="text-center mb-16">
               <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
                 About LLTTechSolutions
               </h1>
               <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
                 Empowering businesses with innovative technology solutions and cybersecurity expertise.
               </p>
               <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mt-6"></div>
             </div>

             {/* About Section */}
             <div className="max-w-6xl mx-auto mb-20">
               {/* Company Description */}
               <div className="glassmorphism rounded-2xl p-8 mb-12">
                 <h2 className="text-3xl font-bold text-white mb-6 text-center">Who We Are</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                   <div>
                     <p className="text-blue-100 leading-relaxed mb-4">
                       Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions,
                       LLTTechSolutions has emerged as a trusted partner for organizations seeking digital transformation and
                       robust cybersecurity frameworks.
                     </p>
                     <p className="text-blue-100 leading-relaxed">
                       Our team of certified professionals brings together decades of experience in cybersecurity,
                       cloud infrastructure, and enterprise technology solutions. We specialize in protecting digital
                       assets while enabling innovation and growth.
                     </p>
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-white mb-4">Our Expertise</h3>
                     <div className="space-y-3">
                       <div className="flex items-center">
                         <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                         <span className="text-blue-200">Advanced Cybersecurity Solutions</span>
                       </div>
                       <div className="flex items-center">
                         <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                         <span className="text-blue-200">Cloud Infrastructure & Migration</span>
                       </div>
                       <div className="flex items-center">
                         <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                         <span className="text-blue-200">Digital Transformation Consulting</span>
                       </div>
                       <div className="flex items-center">
                         <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                         <span className="text-blue-200">24/7 Security Monitoring</span>
                       </div>
                       <div className="flex items-center">
                         <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                         <span className="text-blue-200">Compliance & Risk Management</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Features Section */}
             <div className="max-w-6xl mx-auto mb-20">
               <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-12">
                 Why Choose Us
               </h2>
               {/* Features Grid */}
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {features.map((feature, index) => (
                   <div key={index} className="glassmorphism rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group">
                     <div className="text-blue-400 mb-3 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 transform">
                       {feature.icon}
                     </div>
                     <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                       {feature.title}
                     </h3>
                     <p className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                       {feature.desc}
                     </p>
                   </div>
                 ))}
               </div>
             </div>

             {/* Mission & Vision Layout */}
             <div className="max-w-7xl mx-auto relative mb-20">
               <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">

                 {/* Mission Section */}
                 <div className="tilt-card">
                   <div className="circle-card w-80 h-80 md:w-96 md:h-96 mx-auto glassmorphism neon-border relative overflow-hidden mesh-gradient">
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 md:p-12">
                       {/* Mission Icon */}
                       <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 relative">
                         <svg className="w-full h-full text-blue-400" viewBox="0 0 100 100" fill="none">
                           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="rgba(59, 130, 246, 0.1)"/>
                           <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2"/>
                           <circle cx="50" cy="50" r="10" fill="currentColor"/>
                           <path d="M35 35 L65 65 M65 35 L35 65" stroke="white" strokeWidth="2"/>
                         </svg>
                       </div>
                       <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">MISSION</h2>
                       <div className="text-blue-100 text-xs leading-relaxed">
                         We deliver cutting-edge technology solutions that drive growth, enhance security,
                         and transform businesses for the digital age. Our expertise spans cybersecurity,
                         cloud infrastructure, and digital transformation.
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Vision Section */}
                 <div className="tilt-card">
                   <div className="circle-card w-80 h-80 md:w-96 md:h-96 mx-auto glassmorphism neon-border-pink relative overflow-hidden mesh-gradient">
                     <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-10 md:p-12">
                       {/* Vision Icon */}
                       <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 relative">
                         <svg className="w-full h-full text-pink-400" viewBox="0 0 100 100" fill="none">
                           <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="rgba(236, 72, 153, 0.1)"/>
                           <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2"/>
                           <circle cx="50" cy="50" r="10" fill="currentColor"/>
                           <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="white" strokeWidth="2" fill="none"/>
                         </svg>
                       </div>
                       <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">VISION</h2>
                       <div className="text-pink-100 text-xs leading-relaxed">
                         To be a global leader in cybersecurity education and solutions by empowering organizations
                         and individuals to safeguard their digital assets. We envision a secure digital world where
                         innovation thrives without compromise.
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

             {/* Call to Action Section */}
             <div className="text-center mb-20">
               <div className="glassmorphism rounded-xl p-8 max-w-2xl mx-auto">
                 <h3 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                 <p className="text-blue-200 mb-6">
                   Let's discuss how we can help secure and optimize your technology infrastructure.
                 </p>
                 <Link to="/contact">
                   <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                     Get In Touch
                   </button>
                 </Link>
               </div>
             </div>

             {/* Find Us Section */}
             <div className="max-w-6xl mx-auto mb-16">
               <div className="glassmorphism rounded-xl p-8">
                 <h2 className="text-2xl font-semibold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Find Us</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                   {/* Google Map Embed */}
                   <div>
                     <h3 className="text-lg font-semibold text-white mb-4">Our Location</h3>
                     <div className="aspect-video rounded-lg overflow-hidden border border-white/20">
                       <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.. !2d76.. !3d10.. !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0ebc07ee71%3A0x4bfbc6c65be77af0!2sNOOR%E2%80%99s%20INTERIOR%20WORLD%20-%20UPVC%20Interiors%2C%20Modular%20Kitchen%2C%20Wardrobe%2C%20PVC%20doors%2C%20Wooden%20Doors%20%26%20Windows!5e1!3m2!1sen!2sin!4v. !5m2!1sen!2sin"
                         width="100%"
                         height="100%"
                         style={{border:0}}
                         allowFullScreen=""
                         loading="lazy"
                         referrerPolicy="no-referrer-when-downgrade"
                         title="LLTTechSolutions Location">
                       </iframe>
                     </div>
                   </div>

                   {/* Contact Info */}
                   <div>
                     <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                     <div className="space-y-4">
                       <div className="flex items-start">
                         <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                         <span className="text-blue-200">Palakkad Main Road, Sunnambu, Kalavai<br />Kuniyamuthur, Coimbatore-641008, Tamil Nadu</span>
                       </div>
                       <div className="flex items-center">
                         <Phone className="w-5 h-5 text-red-400 mr-3" />
                         <a href="tel:+917845825295" className="text-blue-200 hover:text-white transition-colors cursor-pointer">
                           +91 78458 25295
                         </a>
                       </div>
                       <div className="flex items-center">
                         <Mail className="w-5 h-5 text-red-400 mr-3" />
                         <a href="mailto:contact@llttechsolutions.com" className="text-blue-200 hover:text-white transition-colors">
                           contact@llttechsolutions.com
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
    </div>
  );
};

export default About;
