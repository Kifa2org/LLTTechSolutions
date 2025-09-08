import React from 'react';
import { FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon: Icon, color, features }) => {
  return (
    <div className="card-hover bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
      <div className="mb-6">
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
      </div>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <FaShieldAlt className="w-5 h-5 text-green-400 mr-3" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;