import React from 'react';
import { Wrench, Zap, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    title: "Custom PC Building",
    description: "Component selection, assembly, and cable management. I build your rig from scratch to meet your specific gaming or workstation needs."
  },
  {
    icon: <Wrench className="w-8 h-8 text-purple-500" />,
    title: "Repairs & Troubleshooting",
    description: "Is your PC crashing or not turning on? I diagnose hardware issues, replace broken parts, and get your system running smoothly again."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Cleaning & Optimization",
    description: "Deep dust cleaning to prevent overheating, plus software optimization and virus removal to speed up your existing machine."
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-900 py-24 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group"
            >
              <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;