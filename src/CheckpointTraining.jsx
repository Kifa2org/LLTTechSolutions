import React from 'react';
import { ChevronRight, Check, Clock, Users, Award, BookOpen, Monitor, Globe, Shield, Zap, Star, Play, Download } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import {  Link } from 'react-router-dom';

import  checkpointCCSA from '../src/data/checkpointCCSA';
import  checkpointCCSE  from '../src/data/checkpointCCSE';
import  checkpointCCSM  from '../src/data/checkpointCCSM';
import { Helmet } from 'react-helmet-async';


const CheckpointTraining = () => {
  const courseContent = [
    {
      title: "Check Point Certified Security Administrator",
      duration: "9 hours",
      topics: ["CCSA"],
      to: [checkpointCCSA]
    }
  ];

  const courseSolution = [
    {
      title: "Check Point Certified Security Expert",
      duration: "19 hours",
      topics: ["CCSE"],
      to: [checkpointCCSE]
    }
  ];


  const courseExpert=[
    {
      title: "Check Point Certified Security Master",
      duration: "38 hours",
      topics: ["CCSM",],
      to:[checkpointCCSM]
    }
  ]

  const features = [
    { icon: <Clock className="w-6 h-6" />, title: "30+ Hours Training", desc: "Comprehensive hands-on training" },
    { icon: <Monitor className="w-6 h-6" />, title: "Live Projects", desc: "Real-world scenarios and labs" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Trainers", desc: "Certified industry professionals" },
    { icon: <Award className="w-6 h-6" />, title: "Certification", desc: "Prepare for CCSA , CCSE , CCSM certifications" },
    { icon: <Globe className="w-6 h-6" />, title: "24/7 Support", desc: "Continuous learning assistance" },
    { icon: <Shield className="w-6 h-6" />, title: "Job Assistance", desc: "Career guidance " }
  ];

  const certifications = [
    { name: "CCAS", desc: "Automation Specialist" },
    { name: "CCME", desc: "Maestro Expert" },
    { name: "CCCS", desc: "Cloud Specialist" },
    { name: "CCES", desc: "Harmony Endpoint Specialist" },
    { name: "CCMS", desc: "Multi-Domain Security Management Specialist" },
    { name: "CCVS", desc: "Virtual System Extension Specialist" },
    { name: "CCTA", desc: "Troubleshooting Administrator" },
    { name: "CCTE", desc: "Troubleshooting Expert" }
  ];

  return (
    <>

      <Helmet>

        <meta
          name="description"
          content="Checkpoint certified Associate ,Checkpoint Certified Professional, Checkpoint Certified Security Expert and Checkpoint certification courses."
        />
        <meta
          name="keywords"
          content="Checkpoint certified Associate ,Checkpoint Certified Professional,llttechsolutions, Checkpoint courses online, Maestro Expert, Troubleshooting Expert, LLT Tech Solutions,FTI,Checkpoint training courses,Checkpoint,LLTtech,"
        />
        <link rel="canonical" href="https://llttechsolutions.com/" />
  </Helmet>

    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-800 to-pink-600 text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Checkpoint Training Course
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                CheckPoint course is the leading industry dealing with Next-Generation Firewall and other Firewall courses.
                Learn from industry experts and get certified in CCSA, CCSE, and CCSM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                <button className="bg-white hover:bg-pink-300 hover:text-white text-pink-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Enroll now - Limited Seats
                </button>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Course Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> 30+ Hours Live Training</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> Hands-on Labs & Projects</li>
                <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-400" /> CCSA , CCSE , CCSM Preparation</li>
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
            <p className="text-xl text-gray-600">Comprehensive Checkpoint training program</p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Checkpoint Certified Associate</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 ">
            {courseContent.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-pink-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CheckpointCourseDetails/${module.to[topicIndex].examCode}`}>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Checkpoint Certified Professional</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 ">
            {courseSolution.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-pink-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CheckpointCourseDetails/${module.to[topicIndex].examCode}`}>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4"> Checkpoint Certified Security Expert</h2>
            <p className="text-xl text-gray-600">Detailed curriculum designed by industry experts</p>
          </div>

          <div className="space-y-6 pb-6">

              <div  className="bg-white border-l-8 border-pink-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">Prerequisites</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Any 2 must be passed
                  </span>
                </div>
                <div className="grid gap-4">
                    <div className="flex items-center">
          <div className="space-y-6 pb-6">
              <div className="grid gap-4">
                {[
                  ["Automation Specialist", "Maestro Expert"],
                  ["Cloud Specialist", "Harmony Endpoint Specialist"],
                  ["Multi-Domain Security Management Specialist", "Virtual System Extension Specialist"],
                  ["Troubleshooting Administrator", "Troubleshooting Expert"]
                ].map(([left, right], i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{left}</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-gray-700">{right}</span>
                    </div>
                  </div>
                ))}
              </div>
          </div>
                    </div>
                </div>
              </div>

          </div>

          <div className="space-y-6 ">
            {courseExpert.map((module, index) => (
              <div key={index} className="bg-white border-l-8 border-pink-500 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{module.title}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {module.duration}
                  </span>
                </div>
                <div className="grid gap-4">
                  {module.topics.map((topic, topicIndex) => (
                    <Link key={topicIndex} to={`/CheckpointCourseDetails/${module.to[topicIndex].examCode}`}>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Checkpoint Certifications</h2>
            <p className="text-xl text-gray-600">Prepare for Checkpoint Expert certifications</p>
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
      <section className="py-16 bg-gradient-to-r from-pink-900 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become a Network Expert ?</h2>
          <p className="text-xl mb-8 text-gray-200">Join thousands of professionals who have advanced their careers with our training</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/contact">

            <button className="bg-pink-600 hover:bg-pink-400 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Enroll Now
            </button>
                 </Link>
                 <Link to="/contact">
            <button className="border-2 border-white hover:bg-white hover:text-pink-900 text-white px-8 py-4 rounded-lg font-semibold text-lg">
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

export default CheckpointTraining;
