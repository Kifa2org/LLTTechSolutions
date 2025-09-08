import React, { useState } from 'react';
import '../FAQSection.css';

const HomePageFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What cybersecurity services does LLTTechSolutions offer?",
      answer: "We provide comprehensive cybersecurity solutions including threat assessment, penetration testing, security audits, incident response, compliance consulting, 24/7 security monitoring, and employee security training. Our services are designed to protect your digital assets and ensure regulatory compliance."
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer: "Our incident response team is available 24/7 and can respond to critical security incidents within 1-2 hours. We have established protocols for different severity levels, ensuring rapid containment and mitigation of threats to minimize business impact."
    },
    {
      question: "Do you provide cloud security solutions?",
      answer: "Yes, we specialize in cloud security across AWS, Azure, and Google Cloud platforms. Our services include cloud security assessments, configuration management, identity and access management (IAM), data encryption, and continuous monitoring to ensure your cloud infrastructure remains secure."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including healthcare, finance, education, manufacturing, retail, and government sectors. Our team has expertise in industry-specific compliance requirements such as HIPAA, PCI-DSS, SOX, and GDPR, ensuring tailored solutions for each sector's unique needs."
    },
    {
      question: "How do you ensure data privacy and confidentiality?",
      answer: "We maintain strict confidentiality through signed NDAs, encrypted communications, secure data handling protocols, and limited access controls. Our team follows industry best practices and compliance standards to ensure your sensitive information remains protected throughout our engagement."
    },
    {
      question: "What is the typical duration of a security assessment?",
      answer: "The duration varies based on your organization's size and complexity. A basic security assessment typically takes 1-2 weeks, while comprehensive penetration testing may require 2-4 weeks. We provide detailed timelines during our initial consultation based on your specific requirements."
    },
    {
      question: "Do you provide employee cybersecurity training?",
      answer: "Absolutely! We offer comprehensive cybersecurity awareness training programs including phishing simulations, security best practices workshops, and customized training modules. Our programs help build a security-conscious culture within your organization and reduce human-related security risks."
    },
    {
      question: "What ongoing support do you provide after implementation?",
      answer: "We provide continuous monitoring, regular security updates, quarterly reviews, and 24/7 technical support. Our managed security services ensure your systems remain protected against evolving threats with proactive monitoring and rapid response capabilities."
    },
    {
      question: "How do you stay updated with the latest cybersecurity threats?",
      answer: "Our team continuously monitors threat intelligence feeds, participates in cybersecurity conferences, maintains industry certifications, and collaborates with security research communities. We also have partnerships with leading security vendors to ensure we're always aware of emerging threats and countermeasures."
    },
    {
      question: "What are your pricing models for cybersecurity services?",
      answer: "We offer flexible pricing models including project-based fees for assessments and audits, monthly retainers for ongoing managed services, and hourly rates for consulting. We provide transparent pricing with detailed proposals tailored to your specific needs and budget requirements."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen relative overflow-x-hidden">

      <div className="relative z-10 py-20 px-6">
        {/* FAQ Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our cybersecurity and technology solutions
          </p>
        </div>

        {/* FAQ Container */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="gradient-border mb-6 faq-item">
              <div className="gradient-border-inner">
                <div className="glassmorphism rounded-lg">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-red-600 rotate-icon ${activeIndex === index ? 'active' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className={`faq-content px-6 pb-6 ${activeIndex === index ? 'active' : ''}`}>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="glassmorphism rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our cybersecurity experts are here to help. Contact us for personalized answers to your security concerns.
            </p>
            <a
              className="inline-block bg-gradient-to-r from-emerald-800 to-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              href="/contact"
            >
              Contact Our Experts
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFAQSection;