
import React from 'react';

const Experience: React.FC = () => {
  const tools = ["R Stats", "Python", "Latex", "SQL", "NGS Pipelines", "Git", "D3.js"];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-8 text-center relative z-10">
        <div className="relative inline-block">
          <h2 className="text-[10vw] font-bold opacity-5 leading-none tracking-tighter select-none">
            8+ YEARS OF
          </h2>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <h3 className="text-3xl md:text-5xl font-bold">Experience in Clinical Intelligence</h3>
             <p className="text-emerald-400 font-bold tracking-[0.2em] mt-4 uppercase">Data Driven Narratives</p>
          </div>
        </div>

        {/* Floating Tool Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, idx) => (
            <div 
              key={tool} 
              className={`px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-bold transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-1 cursor-default`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Background Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.03] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default Experience;
