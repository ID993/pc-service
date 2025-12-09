import React from 'react';
import { Heart, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-slate-800/50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 md:h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800" 
                alt="PC Building Workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/20 blur-[100px] rounded-full"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              More Than Just <span className="text-blue-500">Specs</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I started building PCs as a hobby, obsessed with getting the perfect cable management and optimal airflow. Now, I bring that same obsession to every client build.
            </p>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Whether you are a competitive gamer needing zero latency or a creative professional needing a workstation, I build computers that are quiet, cool, and powerful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                <Heart className="text-red-500 w-6 h-6" />
                <span className="text-white font-medium">Built with Passion</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-slate-800 rounded-xl border border-slate-700">
                <Globe className="text-blue-500 w-6 h-6" />
                <span className="text-white font-medium">Based in Split</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;