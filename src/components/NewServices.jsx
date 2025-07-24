import React from 'react';

const servicesData = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet your unique business needs and drive growth.',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud services to support your operations and innovation.',
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive protection to safeguard your digital assets and ensure compliance.',
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance to optimize your technology strategy and investments.',
  },
];

const NewServices = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;
