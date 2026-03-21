import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
      <div className="flex items-center gap-4">
        <Link to="/" className="bg-hack-green text-black font-black text-2xl px-4 py-1 border-4 border-black shadow-neo flex items-center gap-3 group transition-transform hover:scale-105">
          SKILLWORTH.EXE
          <div className="flex items-center justify-center w-4 h-4 bg-black border border-hack-green/30 rounded-sm">
             <div className="w-2 h-2 bg-hack-green rounded-full animate-ping absolute opacity-75"></div>
             <div className="w-1.5 h-1.5 bg-hack-green rounded-full relative shadow-[0_0_10px_#00ff41]"></div>
          </div>
        </Link>
      </div>

      <div className="flex gap-4">
        <Link to="/docs" className="neo-brutal px-6 py-2 font-black text-xs tracking-widest uppercase">
          DOCUMENTATION
        </Link>
        <Link to="/" className="neo-brutal bg-hack-blue px-6 py-2 font-black text-xs tracking-widest uppercase">
          START_SCAN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;