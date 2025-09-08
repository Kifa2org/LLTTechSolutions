import React, { useState } from 'react';

const FAQSectionTraining = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      icon: "🎓",
      question: "What prerequisites do I need for the cybersecurity courses?",
      answer: (
        <div>
          <p className="mb-3">Our courses are designed for different skill levels:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Beginner courses:</strong> No prior experience required, just basic computer literacy</li>
            <li><strong>Intermediate courses:</strong> Basic networking knowledge or completion of our fundamentals course</li>
            <li><strong>Advanced courses:</strong> 1-2 years of IT experience or completion of intermediate courses</li>
          </ul>
          <p className="mt-3">We provide assessment tests to help you choose the right starting point!</p>
        </div>
      )
    },
    {
      id: 2,
      icon: "⏰",
      question: "How long does it take to complete a course?",
      answer: (
        <div>
          <p className="mb-3">Course duration varies by complexity and your learning pace:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <div className="font-semibold text-green-800">Beginner</div>
              <div className="text-sm text-green-600">4-6 weeks</div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
              <div className="font-semibold text-orange-800">Intermediate</div>
              <div className="text-sm text-orange-600">6-8 weeks</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
              <div className="font-semibold text-red-800">Advanced</div>
              <div className="text-sm text-red-600">8-12 weeks</div>
            </div>
          </div>
          <p>All courses are self-paced, so you can learn at your own speed with lifetime access to materials.</p>
        </div>
      )
    },
    {
      id: 3,
      icon: "🏆",
      question: "Do I get a certificate upon completion?",
      answer: (
        <div>
          <p className="mb-3">Yes! Upon successful completion of each course, you'll receive:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
            <li>Industry-recognized digital certificate</li>
            <li>Detailed skill verification badge</li>
            <li>LinkedIn-shareable credentials</li>
            <li>CPE credits for maintaining existing certifications</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800 font-medium">💡 Pro Tip: Complete multiple courses to earn our specialized pathway certificates!</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: "🛠️",
      question: "What tools and software will I need?",
      answer: (
        <div>
          <p className="mb-3">We provide everything you need to get started:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">🖥️ Included:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cloud-based virtual labs</li>
                <li>Pre-configured security tools</li>
                <li>Practice environments</li>
                <li>All necessary software licenses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">💻 You Need:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Computer with 8GB+ RAM</li>
                <li>Stable internet connection</li>
                <li>Modern web browser</li>
                <li>Microphone for live sessions</li>
              </ul>
            </div>
          </div>
          <p className="text-sm bg-gray-50 p-3 rounded-lg">No need to purchase expensive software - everything runs in our secure cloud environment!</p>
        </div>
      )
    },
    {
      id: 5,
      icon: "💼",
      question: "Will this help me get a job in cybersecurity?",
      answer: (
        <div>
          <p className="mb-3">Absolutely! Our comprehensive career support includes:</p>
          <div className="space-y-3 mb-3">
            <div className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✅</span>
              <div>
                <strong>Resume & Portfolio Building:</strong> Professional templates and project showcases
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✅</span>
              <div>
                <strong>Interview Preparation:</strong> Mock interviews with industry professionals
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✅</span>
              <div>
                <strong>Job Placement Assistance:</strong> Direct connections with hiring partners
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">✅</span>
              <div>
                <strong>Industry Networking:</strong> Access to exclusive cybersecurity community
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-green-800 font-medium">📊 85% of our graduates land cybersecurity roles within 6 months!</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      icon: "💰",
      question: "What are the pricing options and payment plans?",
      answer: (
        <div>
          <p className="mb-3">We offer flexible pricing to fit every budget: kindly contact us for detailed information</p>
        </div>
      )
    }
  ];

  const ChevronIcon = ({ isOpen }) => (
    <svg
      className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
          Get answers to common questions about our cybersecurity training programs
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-lg mb-4 border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Question Button */}
            <button
              className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset hover:bg-gray-50 transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${faq.id}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 pr-4 flex items-center">
                  <span className="mr-3 text-xl">{faq.icon}</span>
                  {faq.question}
                </h3>
                <ChevronIcon isOpen={activeIndex === index} />
              </div>
            </button>

            {/* Answer Content */}
            <div
              id={`faq-answer-${faq.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionTraining;