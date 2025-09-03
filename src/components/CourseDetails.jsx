import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Award, Users, CheckCircle, ExternalLink } from 'lucide-react';
import { getExamDetailsByCode } from '../utils/examMapper';

const CourseDetails = () => {
  const { examCode } = useParams();
  const [examDetails, setExamDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (examCode) {
      const details = getExamDetailsByCode(examCode);
      setExamDetails(details);
      setLoading(false);
    }
  }, [examCode]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading exam details...</div>
      </div>
    );
  }

  if (!examDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Not Found</h2>
          <Link 
            to="/FortinetTraining" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Back to Fortinet Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/FortinetTraining" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Fortinet Training
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-800 to-red-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {examDetails.examName}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {examDetails.examDescription.overview}
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">{examDetails.duration}</div>
                <div className="text-sm">Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">{examDetails.questions}</div>
                <div className="text-sm">Questions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">{examDetails.passingScore}</div>
                <div className="text-sm">Passing Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">{examDetails.price}</div>
                <div className="text-sm">Exam Fee</div>
              </div> */}

              {examDetails.registration.preparation.map((prep, index) => (
                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div key={index} className="text-xl font-bold"> {prep}</div>
                      </div>
                    ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exam Topics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Exam Topics & Objectives</h2>
          <div className="space-y-6 ">
            {examDetails.examTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-lg border-l-8 border-red-500 shadow-lg p-6 ">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{topic.topic}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {topic.weight}
                  </span>
                </div>
                <ul className="space-y-2">
                  {topic.objectives.map((objective, objIndex) => (
                    <li key={objIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Format & Registration */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Exam Format & Registration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Exam Format</h3>
              <ul className="space-y-3">
                {examDetails.examFormat.questionTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-gray-600"><strong>Delivery:</strong> {examDetails.examFormat.delivery}</p>
                <p className="text-gray-600"><strong>Retake Policy:</strong> {examDetails.examFormat.retakePolicy}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Registration</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Provider:</strong> {examDetails.registration.provider}</p>
                <p className="text-gray-700"><strong>Website:</strong> 
                   <a href={`https://${examDetails.registration.website}`} className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    {examDetails.registration.website}
                  </a> 
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Preparation:</h4>
                  <ul className="space-y-1">
                    {examDetails.registration.preparation.map((prep, index) => (
                      <li key={index} className="text-gray-600">• {prep}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Exam?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Register now and prepare for your FortiGate 7.6 Administrator certification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a 
              href={`https://${examDetails.registration.website}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Register Now
            </a> */}
            {/* <Link 
              to="/FortinetTraining" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Training
            </Link> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Link to="/contact"> 
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg">
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
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
