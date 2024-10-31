import React from 'react';
import { Music2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-yellow-500/20 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Music2 className="w-8 h-8 text-yellow-500" />
          <span className="text-2xl font-bold text-yellow-500">LOYALTY</span>
          <span className="text-sm text-yellow-500/70">RECORDS</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-white hover:text-yellow-500 transition">ACCUEIL</a>
          <a href="#" className="text-white hover:text-yellow-500 transition">TÉLÉCHARGEZ L'APPLI MALI LOYALTY</a>
          <a href="#" className="text-white hover:text-yellow-500 transition">SUPPORT 24/7</a>
          <a href="#" className="text-white hover:text-yellow-500 transition">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;