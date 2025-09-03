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
      <div className="container mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About LLTTechSolutions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Empowering businesses with innovative technology solutions and cybersecurity expertise.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We deliver cutting-edge technology solutions that drive growth, enhance security, 
              and transform businesses for the digital age. Our expertise spans cybersecurity, 
              cloud infrastructure, and digital transformation.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-red-600 mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>

  {/* Simple CTA */}
        <div className="text-center mb-3">
          <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-600 mb-6">
              Let's discuss how we can help secure and optimize your technology infrastructure.
            </p>
                <Link to="/contact"> 
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get In Touch
            </button>
                 </Link>
          </div>
        </div>




        {/* Location & Contact Section */}
        <div className="max-w-full mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Find Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Google Map Embed */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Our Location</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.1953277823518!2d76.95623673855572!3d10.971669630481623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b0ebc07ee71%3A0x4bfbc6c65be77af0!2sNOOR%E2%80%99s%20INTERIOR%20WORLD%20-%20UPVC%20Interiors%2C%20Modular%20Kitchen%2C%20Wardrobe%2C%20PVC%20doors%2C%20Wooden%20Doors%20%26%20Windows!5e1!3m2!1sen!2sin!4v1755411810782!5m2!1sen!2sin"  width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LLTTechSolutions Location"></iframe>
                </div>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-slate-600"> Palakkad Main Road,Sunnambu,Kalavai
          Kuniyamuthur, Coimbatore-641008, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-slate-600">+91 78458 25295</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-slate-600">contact@llttechsolutions.com</span>
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
