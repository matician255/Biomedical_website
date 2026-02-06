
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer"
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
                 
                 <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                 
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

      {/* Article Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl shadow-emerald-500/10 animate-in fade-in zoom-in duration-300 flex flex-col">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:bg-emerald-500 hover:text-white transition-all duration-300 backdrop-blur-md"
            >
              ✕
            </button>

            {/* Image Banner */}
            <div className="relative h-64 sm:h-96 w-full shrink-0">
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
               <img 
                 src={selectedProject.image} 
                 alt={selectedProject.title} 
                 className="w-full h-full object-cover"
               />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 space-y-8 relative z-20 -mt-32">
               <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase">
                    <span className="px-4 py-2 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                      {selectedProject.category}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center gap-2 backdrop-blur-md">
                       <img 
                          src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png" 
                          alt="location" 
                          className="w-3 h-3 invert opacity-60" 
                        />
                       {selectedProject.location}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight drop-shadow-lg">
                    {selectedProject.title}
                  </h3>
               </div>

               <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed">
                 <p className="text-xl text-emerald-400/80 font-medium mb-8">{selectedProject.description}</p>
                 
                 {/* Placeholder for full article content if not present in data */}
                 {selectedProject.content ? (
                    <div dangerouslySetInnerHTML={{ __html: selectedProject.content }} />
                 ) : (
                    <div className="space-y-6 text-white/60">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <h4 className="text-xl font-bold text-white mt-8 mb-4">Key Findings</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Significant correlation observed between variable A and B.</li>
                        <li>Methodology improved efficiency by 25%.</li>
                        <li>Results published in top-tier journal.</li>
                      </ul>
                      <p className="mt-6">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
