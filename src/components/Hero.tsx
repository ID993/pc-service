import React from 'react';
import { Monitor, ArrowRight } from 'lucide-react';

const Hero = () => {
  
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        
        <div className="mb-8 p-4 bg-slate-800 rounded-2xl border border-slate-700 shadow-xl shadow-blue-500/10">
          <Monitor className="w-12 h-12 text-blue-500" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Build Your <span className="text-blue-400">Dream Machine</span>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mb-10">
          Professional PC assembly, repairs, and upgrades. 
          I handle the hardware so you can focus on the game.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2"
          >
            Start Your Build <ArrowRight size={20} />
          </a>

          <a 
            href="#services"
            className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center"
          >
            View Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;