import React from 'react';
import CountUp from 'react-countup';

const GlobalStatsSection = () => {
  const stats = [
    { number: 1_000, label: 'Cloud events processed', suffix: 'K' },
    { number: 2_000, label: 'New unique objects analyzed', suffix: 'K' },
    { number: 15_000, label: 'Exploit attempts detected', suffix: 'K' },
    { number: 10_000, label: 'New unique attack objects identified', suffix: 'K' },
    { number: 360_0, label: 'Malware executions blocked', suffix: 'K' },
    { number: 20_000, label: 'Attacks prevented inline', suffix: 'K' },
  ];

  const formatNumber = (val, suffix) => {
    if (suffix === 'T') return `${(val / 1e12).toFixed(0)}T`;
    if (suffix === 'B') return `${(val / 1e9).toFixed(0)}B`;
    if (suffix === 'M') return `${(val / 1e6).toFixed(0)}M`;
    if (suffix === 'K') return `${(val / 1e3).toFixed(0)}K`;
    return val;
  };

  return (
    <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Optional world map background */}
      <div
        className="absolute bg-dark inset-0 bg-cover bg-center opacity-10"
        
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-green-500 text-sm font-semibold">LLTTechSolutions LABS</p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">
          Global Threat Protection Delivered Daily
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-green-400">
                <CountUp
                  end={item.number}
                  duration={6.5}
                  formattingFn={(val) => formatNumber(val, item.suffix)}
                />
              </h3>
              <p className="text-gray-300 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-green-600 hover:bg-green-700 transition text-white rounded-full font-semibold">
          EXPLORE THREAT RESEARCH
        </button>
      </div>
    </div>
  );
};

export default GlobalStatsSection;
