
import React from 'react';
import { ABOUT_POINTS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black/20">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-4xl font-bold">About</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-emerald-500 to-transparent"></div>
        </div>

        <div className="relative grid md:grid-cols-[auto_1fr] gap-12">
          {/* The Shiny Line Effect */}
          <div className="relative w-[2px] hidden md:block">
            <div className="absolute inset-0 bg-white/10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-[200px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-move-down"></div>
            
            {/* Dots */}
            {ABOUT_POINTS.map((_, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-2 bg-emerald-500 rounded-full left-1/2 -translate-x-1/2 ring-4 ring-emerald-500/20"
                style={{ top: `${(i / (ABOUT_POINTS.length - 1)) * 100}%` }}
              ></div>
            ))}
          </div>

          <div className="space-y-12">
            {ABOUT_POINTS.map((point) => (
              <div key={point.id} className="group relative">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-xs font-bold text-emerald-400">
                    {point.id}
                  </div>
                  <p className="text-xl text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {point.content}
                  </p>
                </div>
                <div className="h-[1px] w-full bg-white/5 mt-8 group-hover:bg-white/10 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes move-down {
          0% { transform: translate(-50%, -200px); }
          100% { transform: translate(-50%, 100vh); }
        }
        .animate-move-down {
          animation: move-down 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
