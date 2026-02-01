
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-8 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 p-1 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-6 py-3 text-xs tracking-widest font-bold text-white/50 hover:text-emerald-400 transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
        <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
        <a
          href="mailto:hello@dr-bio.com"
          className="flex items-center gap-2 px-6 py-3 text-xs tracking-widest font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 group"
        >
          CONTACT
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
