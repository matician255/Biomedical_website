
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-400 uppercase">Scientific Solutions</span>
          <h2 className="text-5xl font-bold mt-2">Expertise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all duration-500 group relative"
            >
              <div className="text-5xl font-bold text-emerald-500/20 mb-8 group-hover:text-emerald-500/40 transition-colors">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8">{service.description}</p>
              
              <a href="#" className="flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-400 hover:text-white transition-colors uppercase">
                Explore Method <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Glowing hover border */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-emerald-500/0 group-hover:ring-emerald-500/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <a href="https://api.whatsapp.com/send?phone=+255757917752" className="inline-flex items-center gap-4 px-10 py-5 bg-emerald-600 rounded-full font-bold hover:bg-emerald-500 hover:scale-105 transition-all duration-300">
             Schedule a Consultation
             <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">💬</span>
             </div>
           </a>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute -bottom-[200px] left-0 w-full h-[600px] bg-emerald-950/20 blur-[150px] -z-10"></div>
    </section>
  );
};

export default Services;
