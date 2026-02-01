
import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">Trusted by Pharma & Academia</span>
          <h2 className="text-5xl font-bold mt-2">Recent Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div 
              key={project.title} 
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 space-y-4">
                 <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                      <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                    </div>
                 </div>
                 
                 <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
                 
                 <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png" 
                      alt="location icon" 
                      className="w-3 h-3 invert opacity-30" 
                    />
                    {project.location}
                 </div>
              </div>
              
              {/* Card Bottom Beam effect */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
