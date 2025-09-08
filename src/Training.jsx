import React from 'react';
import {  Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FAQSectionTraining from './components/FAQSectionTraining';

const Training = () => {
  const navigate = useNavigate();

  const startCourse = (courseName) => {
    // Navigate to specific course page
    // navigate(`/course/${courseName.toLowerCase().replace(/\s+/g, '-')}`);
    alert(`Starting ${courseName} course! You can implement navigation to specific course pages here.`);
  };

  const courses = [
    {
      id: 1,
      title: "Introduction to Information Security and Hacking",
      description: "Learn the fundamentals of cybersecurity and ethical hacking principles.",
      icon: "🔐",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "InformationSecurityHackingCourseDetails/informationSecurityHacking"
    },
    {
      id: 2,
      title: "Network Fundamentals",
      description: "Master the basics of computer networking, networking protocols, network topologies, architecture, and security.",
      icon: "🌐",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "NetworkFundamentalsCourseDetails/networkFundamentals"
    },
    {
      id: 3,
      title: "Advanced Networking",
      description: "Deep dive into complex networking concepts and enterprise solutions including network architecture, security, and management..",
      icon: "⚡",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "AdvanceNetworkingCourseDetails/advanceNetworking"
    },
    {
      id: 4,
      title: "Cloud Security",
      description: "Secure cloud environments and understand modern cloud security practices.",
      icon: "☁️",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "CloudSecurityCourseDetails/cloudSecurity"
    },
    {
      id: 5,
      title: "Network Exploitation",
      description: "Learn ethical hacking techniques and network penetration testing.",
      icon: "🎯",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "NetworkExploitationCourseDetails/networkExploitation"
    },
    {
      id: 6,
      title: "Security Auditing",
      description: "Conduct comprehensive security assessments and compliance audits.",
      icon: "🔍",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "SecurityAuditingCourseDetails/securityAuditing"
    },
    {
      id: 7,
      title: "Network Architecture",
      description: "Design secure and scalable network infrastructures.",
      icon: "🏗️",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "NetworkArchitectureCourseDetails/networkArchitecture"
    },
    {
      id: 8,
      title: "Web Application Security",
      description: "Comprehensive web security including specialized tracks.",
      icon: "🌍",
      level: "Beginner",
      levelColor: "bg-green-100 text-green-800",
      to: "WebApplicationSecurityCourseDetails/webApplicationSecurity"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Comprehensive training courses to build your expertise in information security
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center">
              <span className="text-2xl mr-2">🎯</span>
              <span>Expert-Led Courses</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              <span>Industry Recognized</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">💼</span>
              <span>Career Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Training Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Training Courses</h2>
          <p className="text-lg text-gray-600">Choose from our comprehensive cybersecurity curriculum</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className={`${course.levelColor} px-3 py-1 rounded-full text-sm font-medium`}>
                  {course.level}
                </span>
                <button onClick={() => navigate(`/${course.to}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Start Course
                </button>
              </div>
            </div>
          ))}

        </div>

         <div className="mt-20">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Security Product Trainings</h2>
                    <p className="text-lg text-gray-600">Master enterprise-grade security solutions from industry leaders</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FortiNet Security */}
                    <div className="card-hover bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" fill="url(#fortinet)" stroke="#e74c3c" strokeWidth="2"/>
                          <path d="M32 16L40 24L32 32L24 24L32 16Z" fill="white" stroke="#e74c3c" strokeWidth="2"/>
                          <circle cx="32" cy="32" r="8" fill="none" stroke="white" strokeWidth="3"/>
                          <circle cx="32" cy="32" r="4" fill="white"/>
                          <path d="M16 40L20 36L24 40L20 44L16 40Z" fill="white"/>
                          <path d="M40 40L44 36L48 40L44 44L40 40Z" fill="white"/>
                          <path d="M28 48L32 44L36 48L32 52L28 48Z" fill="white"/>
                          <line x1="24" y1="32" x2="20" y2="36" stroke="white" strokeWidth="2"/>
                          <line x1="40" y1="32" x2="44" y2="36" stroke="white" strokeWidth="2"/>
                          <line x1="32" y1="40" x2="32" y2="44" stroke="white" strokeWidth="2"/>
                          <defs>
                            <linearGradient id="fortinet" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ff6b6b"/>
                              <stop offset="100%" stopColor="#e74c3c"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">FortiNet Security</h3>
                      <p className="text-gray-600 mb-4">Master FortiGate firewalls, FortiManager/FortiAnalyzer, and comprehensive network security management.</p>

                      {/* Course Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">📚</span>
                          <span>FortiGate Administration & Configuration</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">🔍</span>
                          <span>FortiAnalyzer Log Management</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-purple-500 mr-2">🛡️</span>
                          <span>Advanced Threat Protection</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">⚡</span>
                          <span>VPN & SD-WAN Implementation</span>
                        </div>
                      </div>


                      <div className="flex items-center justify-between">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
                        <button
                          onClick={() => navigate('/FortinetTraining')}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Start Course
                        </button>
                      </div>
                    </div>

                    {/* Cisco Security */}
                    <div className="card-hover bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" fill="url(#cisco)" stroke="#1ba3d7" strokeWidth="2"/>
                          <rect x="20" y="20" width="24" height="16" rx="3" fill="white" stroke="#1ba3d7" strokeWidth="2"/>
                          <rect x="24" y="24" width="16" height="2" fill="#1ba3d7"/>
                          <rect x="24" y="28" width="12" height="1" fill="#1ba3d7"/>
                          <rect x="24" y="31" width="14" height="1" fill="#1ba3d7"/>
                          <circle cx="18" cy="44" r="3" fill="white" stroke="#1ba3d7" strokeWidth="2"/>
                          <circle cx="32" cy="44" r="3" fill="white" stroke="#1ba3d7" strokeWidth="2"/>
                          <circle cx="46" cy="44" r="3" fill="white" stroke="#1ba3d7" strokeWidth="2"/>
                          <path d="M32 36L32 41M18 41L18 36L32 36M46 41L46 36L32 36" stroke="#1ba3d7" strokeWidth="2" fill="none"/>
                          <rect x="16" y="46" width="4" height="8" rx="1" fill="white" stroke="#1ba3d7" strokeWidth="1"/>
                          <rect x="30" y="46" width="4" height="8" rx="1" fill="white" stroke="#1ba3d7" strokeWidth="1"/>
                          <rect x="44" y="46" width="4" height="8" rx="1" fill="white" stroke="#1ba3d7" strokeWidth="1"/>
                          <defs>
                            <linearGradient id="cisco" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4fc3f7"/>
                              <stop offset="100%" stopColor="#1ba3d7"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Cisco Security</h3>
                      <p className="text-gray-600 mb-4">Comprehensive Cisco security solutions including ASA, ISE, and advanced threat defense.</p>

                      {/* Course Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">🔥</span>
                          <span>Cisco ASA Firewall Configuration</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">🔐</span>
                          <span>Identity Services Engine (ISE)</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-purple-500 mr-2">🎯</span>
                          <span>Advanced Malware Protection</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">🌐</span>
                          <span>Secure Network Access Control</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
                        <button
                          onClick={() => navigate('/CiscoTraining')}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Start Course
                        </button>
                      </div>
                    </div>

                    {/* Checkpoint Security */}
                    <div className="card-hover bg-white rounded-xl shadow-lg p-6 border border-gray-100 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
                      <div className="flex justify-center mb-4">
                        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" fill="url(#checkpoint)" stroke="#ff6b35" strokeWidth="2"/>
                          <path d="M32 16L24 24L32 32L40 24L32 16Z" fill="white"/>
                          <circle cx="32" cy="32" r="12" fill="none" stroke="white" strokeWidth="3"/>
                          <path d="M28 32L30 34L36 28" stroke="#ff6b35" strokeWidth="3" fill="none"/>
                          <rect x="18" y="44" width="28" height="8" rx="2" fill="white" stroke="#ff6b35" strokeWidth="2"/>
                          <rect x="22" y="47" width="20" height="2" fill="#ff6b35"/>
                          <circle cx="24" cy="40" r="2" fill="white" stroke="#ff6b35" strokeWidth="2"/>
                          <circle cx="32" cy="40" r="2" fill="white" stroke="#ff6b35" strokeWidth="2"/>
                          <circle cx="40" cy="40" r="2" fill="white" stroke="#ff6b35" strokeWidth="2"/>
                          <line x1="32" y1="44" x2="24" y2="38" stroke="white" strokeWidth="2"/>
                          <line x1="32" y1="44" x2="40" y2="38" stroke="white" strokeWidth="2"/>
                          <defs>
                            <linearGradient id="checkpoint" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ff8a65"/>
                              <stop offset="100%" stopColor="#ff6b35"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Checkpoint Security</h3>
                      <p className="text-gray-600 mb-4">Master Check Point firewalls, SmartConsole management, and enterprise security architecture.</p>

                      {/* Course Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-blue-500 mr-2">🛡️</span>
                          <span>Check Point Firewall Administration</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-green-500 mr-2">💻</span>
                          <span>SmartConsole Management</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-purple-500 mr-2">🔍</span>
                          <span>Threat Prevention & Analysis</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">🌍</span>
                          <span>Site-to-Site VPN Configuration</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Intermediate</span>
                        <button
                          onClick={() => navigate('/CheckpointTraining')}
                          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                          Start Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">Join thousands of professionals who have advanced their cybersecurity careers with our training.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                 🚀 Get Started Today
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors">
                  📞 Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

        <FAQSectionTraining />
    </div>
  );
};

export default Training;