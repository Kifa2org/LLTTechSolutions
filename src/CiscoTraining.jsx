import React from 'react';
import { ChevronRight, Check, Clock, Users, Award, BookOpen, Monitor, Globe, Shield, Zap, Star, Play, Download } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {  Link } from 'react-router-dom';

import  ciscoCCNA  from '../src/data/ciscoCCNA';
import  ciscoSNCF  from '../src/data/ciscoSNCF';
import  ciscoSCOR  from '../src/data/ciscoSCOR';
import  ciscoCCIE  from '../src/data/ciscoCCIE';
import { Helmet } from 'react-helmet-async';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const CiscoTraining = () => {
  const courseContent = [
    {
      title: "Cisco Certified Network Associate",
      duration: "9 hours",
      topics: ["200-301 CCNA"],
      to: [ciscoCCNA]
    }
  ];

  const courseSolution = [
    {
      title: "Cisco Certified Network Professional Security",
      duration: "19 hours",
      topics: ["300-710 SNCF"],
      to: [ciscoSNCF]
    }
  ];

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


  const courseExpert=[
    {
      title: "Cisco Certified Internetwork Expert Security",
      duration: "38 hours",
      topics: ["350-701 SCOR","CCIE Security"],
      to:[ciscoSCOR,ciscoCCIE]

    }
  ]

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "100+ Hours Training", desc: "Comprehensive hands-on training" },
    { icon: <Monitor className="w-6 h-6" />, title: "Live Projects", desc: "Real-world scenarios and labs" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Trainers", desc: "Certified industry professionals" },
    { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Prepare for CCNP or CCIE certifications" },
    { icon: <Globe className="w-6 h-6" />, title: "24/7 Support", desc: "Continuous learning assistance" },
    { icon: <Shield className="w-6 h-6" />, title: "Job Assistance", desc: "Career guidance " }
  ];

  const certifications = [
    { name: "Beginner", desc: "Cisco CCST Networking (100-150)" },
    { name: "Beginner", desc: "Cisco CCST Cybersecurity (100-160)" },
    { name: "Beginner", desc: "Cisco CCT Routing & Switching (100-490 RSTECH)" },
    { name: "Beginner", desc: "Cisco CCT Data Center (010-151 DCTECH)" },
    { name: "Intermediate", desc: "Cisco CCT Collaboration (100-890 CLTECH)" },
    { name: "Intermediate", desc: "Border Gateway Protocol (BGP)" },
    { name: "Intermediate", desc: "Cisco Firepower" },
    { name: "Intermediate", desc: "Cisco CCST Cybersecurity (100-160)" }
  ];

  return (
    <>

      <Helmet>

        <meta
          name="description"
          content="Cisco Certified Associate ,Cisco Certified Professional, Cisco Certified Security Expert and Cisco certification courses."
        />
        <meta
          name="keywords"
          content="Cisco Certified Associate ,Cisco Certified Professional,llttechsolutions, Cisco courses online, Cisco CCST Networking, LLT Tech Solutions,CCT ,Cisco training courses,Cisco,LLTtech,"
        />
        <link rel="canonical" href="https://llttechsolutions.com/" />
  </Helmet>

    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-800 to-sky-600 text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Cisco Training Course
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Cisco training is essential for building a successful IT career.
                Learn from industry experts and get certified in CCNA, CCNP Security, and CCIE Security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                <button className="bg-blue-800 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Enroll now - Limited Seats
                </button>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> 100+ Hours Live Training</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> Hands-on Labs & Projects</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> CCNP or CCIE Preparation</li>
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
            <p className="text-xl text-gray-600">Comprehensive Cisco training program</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Cisco Certified Associate</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 ">
            {courseContent.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-sky-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CiscoCourseDetails/${module.to[topicIndex].examCode}`}>
                      <div className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



   {/* Course Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Cisco Certified Professional</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 ">
            {courseSolution.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-sky-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CiscoCourseDetails/${module.to[topicIndex].examCode}`}>
                      <div className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


 {/* Course Content */}
      <section id="security-expert" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Cisco Certified Security Expert</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 ">
            {courseExpert.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-sky-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CiscoCourseDetails/${module.to[topicIndex].examCode}`}>
                      <div className="flex items-center">
                        <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    </Link>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cisco Certifications</h2>
            <p className="text-xl text-gray-600">Prepare for Cisco Expert certifications</p>
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
      <section className="py-16 bg-gradient-to-r from-sky-900 to-sky-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become a Network Expert ?</h2>
          <p className="text-xl mb-8 text-gray-200">Join thousands of professionals who have advanced their careers with our training</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact">

            <button className="bg-blue-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Enroll Now
            </button>
                 </Link>
                 <Link to="/contact">
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Schedule Demo
            </button>
                 </Link>
          </div>
        </div>
      </section>


    </div>
            </>
  );
};

export default CiscoTraining;
