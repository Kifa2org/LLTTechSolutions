import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">About LLTTechSolutions</h1>
      <p className="text-lg max-w-3xl mx-auto text-center">
        LLTTechSolutions is a leading technology company dedicated to delivering innovative solutions that empower businesses worldwide.
      </p>
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          To provide cutting-edge technology services that drive growth, efficiency, and success for our clients.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Customer Focus</li>
          <li>Excellence</li>
          <li>Collaboration</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
