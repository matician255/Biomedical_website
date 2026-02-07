
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 relative overflow-hidden bg-black/40 border-t border-white/5">
      {/* Infinite scrolling text */}
      <div className="flex whitespace-nowrap overflow-hidden border-b border-white/5 pb-12">
        <div className="flex animate-scroll text-8xl md:text-[12rem] font-bold tracking-tighter text-white/5 select-none uppercase">
          {[1,2,3,4].map(i => (
            <span key={i} className="flex items-center gap-12 mr-12">
              Let's Collaborate <span className="text-emerald-500/20">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-8">
            <div className="text-2xl font-bold tracking-tighter">
              Dr. Emily <span className="text-emerald-500">Godfrey</span>
            </div>
            <a href="mailto:mathematiciangodfrey@outlook.com" className="text-4xl md:text-5xl font-bold hover:text-emerald-400 transition-colors block border-b-2 border-white/10 pb-4">
              mathematiciangodfrey@outlook.com
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-6 text-sm font-bold tracking-widest text-white/50">
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/emilyemily255/" className="hover:text-white transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-white transition-colors">ORCID</a>
              <a href="#" className="hover:text-white transition-colors">GOOGLE SCHOLAR</a>
            </div>
            <div className="text-[10px] text-white/20">
              © {new Date().getFullYear()} BioMedical Insights. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
