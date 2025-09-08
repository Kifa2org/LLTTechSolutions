import React from 'react';
import { FaShieldAlt, FaRocket, FaLightbulb } from 'react-icons/fa';

const LabServiceCard = ({ title, description, icon: Icon, color, image }) => {
  return (
    <div className="card-hover bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
      {/* Image block */}
      {image && (
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Icon block if no image */}
      {!image && Icon && (
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center mb-6`}>
          <Icon className="text-white text-2xl" />
        </div>
      )}

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};


export default LabServiceCard;