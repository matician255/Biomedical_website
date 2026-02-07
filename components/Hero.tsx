
import React, { useState, useEffect } from 'react';
// @ts-ignore
import heroImg from '../img/emily_01.png?url';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 items-start">
          
          {/* Column 1: Picture with Border Beam and Follow Effects (Now on the Left) */}
          <div className="relative group mx-auto xl:mx-0 w-full max-w-[420px] order-1">
            <div className="relative border-beam-container p-1 rounded-2xl bg-white/5 border border-white/10 hover-glow transition-all duration-500">
              <div className="border-beam"></div>
              
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-900">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-60"></div>
                <div className="absolute inset-0 bg-emerald-500/5 mix-blend-color z-10"></div>
                
                <img 
                  src={heroImg}
                  alt="Portrait"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Mouse follow glow */}
                <div 
                  className="absolute w-[300px] h-[300px] bg-emerald-400/20 blur-[80px] rounded-full pointer-events-none z-20 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
                  style={{ 
                    left: mousePos.x / 15 - 150, 
                    top: mousePos.y / 15 - 150 
                  }}
                ></div>

                {/* Floating Title Tag */}
                <div className="absolute top-6 right-6 z-30 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">MD | Writer| Researcher</span>
                </div>
              </div>

              {/* Mobile Mission view (visible only on mobile/tablet) */}
              <div className="mt-8 xl:hidden space-y-4">
                 <p className="text-sm font-bold tracking-widest text-emerald-400 uppercase">My Mission</p>
                 <p className="text-white/60 text-sm leading-relaxed">
                   Clinician-researcher bridging medicine and data science to attain more precise, data-driven management of diseases.
                 </p>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full -z-10 animate-pulse"></div>
          </div>

          {/* Column 2: Introduction (Middle) */}
          <div className="space-y-8 z-10 order-2 xl:border-l xl:border-white/5 xl:pl-12">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-400 uppercase">
                  Available for Collaboration
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter">
                Crafting <br />
                <span className="text-white/40"> Medical & Biological</span> <br />
                Narratives.
              </h1>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm font-bold tracking-widest text-white/50 uppercase">What I Do</p>
              <ul className="space-y-2 text-lg text-white/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Medical Writing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Bioinformatics Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  Research in Precision Medicine
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#work" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 text-center">
                Explore Projects
              </a>
              <button className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 text-center">
                Download CV
              </button>
            </div>
          </div>

          {/* Column 3: Mission Statement (Right) */}
          <div className="xl:pt-16 space-y-8 z-10 border-l border-white/5 pl-8 hidden xl:block order-3">
            <div className="space-y-6">
              <p className="text-sm font-bold tracking-widest text-white/50 uppercase">My Mission</p>
              <blockquote className="text-2xl font-medium leading-relaxed italic text-white/90">
                "Clinician-researcher bridging medicine and data science to attain more precise, data-driven management of diseases."
              </blockquote>
              <div className="h-[1px] w-12 bg-emerald-500"></div>
              <p className="text-white/50 leading-relaxed text-sm">
                I believe that every piece of medical data holds a story that could potentially save lives. My work focuses on ensuring those stories are told with absolute scientific integrity and clarity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold text-emerald-400">5+</div>
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Publications</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-2xl font-bold text-emerald-400">4Y+</div>
                <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
